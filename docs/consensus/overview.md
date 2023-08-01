---
title: Overview
sidebar_position: 1
description: Dilithium Consensus Overview
keywords:
    - Consensus
    - Dilithium
---

Subspace is powered by *Dilithium* - a lightweight and secure consensus mechanism that is environmentally friendly, permissionless, and fair. *Dilithium* is a Proof-of-Archival-Storage (PoAS), Nakamoto-style consensus protocol based on proofs of storing the blockchain history itself. 

In PoAS, farmers (not miners) store as many unique pieces of the blockchain history as their disk space allows. PoAS incentivizes the storage of the blockchain history, resolving the key mechanism design failure which has hindered scalability and led to centralization within Proof-of-Capacity blockchains like Filecoin and Chia. Since PoAS consensus is based on storage, rather than compute power or wealth, it is eco-friendly while remaining accessible to ordinary people with available disk space. This allows it to combine the high security of Bitcoin-style Proof-of-Work with the energy-efficiency of Ethereum-style Proof-of-Stake. It also turns out that PoAS provides the basis for a more generic solution to the problem of blockchain bloat. 

![ConsensusPhases](../../src/Images/Consensus_Phases.png)

Formally, PoAS is a three phase protocol, consisting of:
- a recurring deterministic **Archiving** phase (given new blocks of the chain, constructing a canonical history)
- a unique setup or **Plotting** phase done individually by each farmer (given the canonical history of the blockchain, generate a unique replica (the plot) and store it on disk)
- a probabilistic audit phase, known as **Farming** (given a challenge from a secure randomness beacon, audit the plot for a solution that satisfies some threshold, return a proof, and propose a block). The audit is based on a recurring slot challenge from a secure randomness beacon, with a frequency of one timeslot per second. 

## *Dilithium*

*Dilithium* is a second-generation PoAS consensus algorithm, which uses erasure coding and KZG commitments for distributed archiving, while combining polynomial encoding with an ASIC-resistant proof-of-space for plotting. The protocol represents a significant step forward in security and user experience for Subspace Network participants. *Dilithium* is also designed to be SSD-friendly, further enhancing energy-efficiency and decentralization. 

For those familiar with our initial consensus design, *Dilithium* fulfills all the fundamental ideas described in the original [whitepaper](https://subspace.network/news/subspace-network-whitepaper) but implements them better.