---
title: Overview
sidebar_position: 1
description: Dilithium Consensus Overview
keywords:
    - Consensus
    - Dilithium
---

Subspace is powered by *Dilithium* - a lightweight and secure consensus mechanism that is environmentally friendly, permissionless, and fair. *Dilithium* is a Proof-of-Archival-Storage (PoAS), Nakamoto-style consensus protocol based on proofs of storing the blockchain history. 

*Dilithium* is a second-generation PoAS consensus algorithm that uses erasure coding and KZG commitments for distributed archiving while combining polynomial encoding with an ASIC-resistant Proof-of-Space for plotting and AES-based Proof-of-Time. The protocol represents a significant step forward in security and user experience for Subspace Network participants. *Dilithium* is also designed to be SSD-friendly, further enhancing energy efficiency and decentralization. 

For those familiar with our initial consensus design, *Dilithium* fulfills all the fundamental ideas described in the original [whitepaper](https://subspace.network/news/subspace-network-whitepaper) but implements them better.

In PoAS, farmers (not miners) store as many unique pieces of the blockchain history as their disk space allows. PoAS incentivizes the storage of the blockchain history, resolving the key mechanism design failure which has hindered scalability and led to centralization within Proof-of-Storage blockchains like Filecoin and Chia. Since PoAS consensus is based on storage, rather than compute power or wealth, it is eco-friendly while remaining accessible to ordinary people with available disk space. This allows it to combine the high security of Bitcoin-style Proof-of-Work with the energy-efficiency of Ethereum-style Proof-of-Stake. It also turns out that PoAS provides the basis for a more generic solution to the problem of blockchain bloat. 

## Technical Overview

Similar to other Proof-of-Storage projects, the resource that participants allocate to secure the Subspace network is
disk space. As a resource, disk space is widely distributed and in general the notion of an ASIC does not apply to
storage. As such, the Subspace protocol has the potential to be highly decentralized and more fair than
other blockchain protocols.

Unlike other Proof-of-Storage projects where the data stored is some "cryptographic data", uniquely generated per
participant, in Subspace the participants, called farmers, store the blockchain history. Not only that in Subspace we
have found a way to store "useful data", but we also solve the so-called _farmer's dilemma_, where a rational farmer
prefers to use her disk space to store more (non-useful) cryptographic data, consequentially not storing the current
state or the blockchain history -- a strategy that if followed by all farmers, will lead to a unfunctional network.

Formally, PoAS is a three phase protocol, consisting of:
- a recurring deterministic **Archiving** phase done by all nodes
- a unique setup or **Plotting** phase done individually by each farmer
- a probabilistic audit phase, known as **Farming**, based on a recurring slot challenge from a secure randomness beacon, with a frequency of one challenge per second.

<!-- ![ConsensusPhases](../../src/Images/Consensus_Phases.png) -->

Since the blockchain history is not unique, farmers cannot simply store the raw blockchain history, otherwise dishonest
farmers could share a single copy of the blockchain history to emulate unlimited amount of disk space. Thus, one
challenge is how to make the _plot_ each farmer stores unique. This is done as part of the plotting phase explained
below.

Before the plotting phase, farmers need to "prepare" the raw blockchain history for compatibility with the Subspace
plotting protocol. This is done in the archiving phase. Archiving is a deterministic process performed by all nonde. It is done
ongoingly, as the blockchain progresses and more blocks are produced. When archiving, farmers apply a technique called
error-correction coding, specifically the Reed--Solomon code. This is used to guarantee that even if some piece of data
(a collection of blocks) is not stored by any of the farmers (hence not stored on the entire network), it could be
recovered by other pieces. The replication factor used is 1/2, which means that half of the storage on the network is
used is dedicated specifically for this error-correction technique. However, for recovery purposes, it is much better
than using this space to store each block twice. Besides of applying the Reed-Solomon code, the archiving phase also
involves a cryptographic primitive called commitment scheme (in Subspace we use a specific type called polynomial
commitments) in order to make the farming phase, where a farmer proves that she stored some piece of history, easier
both for the proving farmer and for the verifiers. More technical details can be found in the [**Archiving** page](consensus/archiving.md).

Next is the plotting phase, where the farmer creates her own unique plot. Plotting is divided into two steps. First, the farmer picks pieces of the blockchain history that she
will store on her disk. This is done by a deterministic algorithm, involving the farmer ID and the current blockchain height
among others, such that pieces are allocated uniformly at random, and therefore guarantees with high probability that no
piece of history will be missing.

In the second part, the farmer "masks" her assigned pieces by a unique and verifiable "masking data". This is done in
order to guarantee that each plot contains unique pieces of information, and so dishonest farmers cannot share the same
raw history when participating in the protocol. The masking algorithm is deterministic as well, and involves the farmer
ID and piece of history, such that different farmers will obtain different masking data for the same piece. When winning a block (that is, when a farmer
claims to have a proof-of-space that gives them the eligibility to produce a block), the farmer has to show both the raw
piece of history and the masking data for that piece. Since the masking data is verifiable, anyone can check that
indeed this was the masking data for that specific piece of history and farmer ID.

In practice, masking in Subspace is done by producing a string of bits that are XOR-ed with the bit representation of
the selected piece of history. It is crucial that the masking bits are produced in a process that takes a long time and
is expensive, otherwise dishonest farmers can attempt to produce the masking data on the fly and re-use their raw data
for several plots. In Subspace, we chose to adopt the cryptographic data that is used in the [Chia protocol](https://www.chia.net/),
which demands both time and electricity for generation.

Once a farmer created her plot, she can start farming it. This phase is similar to other blockchains where some
challenge is drawn and the farmer checks if her resource -- the stored blockchain history in her plot -- gives her
eligibility to produce a block. As mentioned above, when winning a challenge and producing a block, as part of the
proof the farmer has to present both the raw blockchain data as well as the masking data. 

The block challenges are drawn from a secure randomness beacon, which is updated every second. The randomness is obtained from a Proof-of-Time component, which is anchored in the blockchain history itself.

Archiving, Plotting and Farming protocol are explained in more detail in the following section, and Proof-of-Time in the next one.
