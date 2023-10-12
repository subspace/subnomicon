---
title: Overview
sidebar_position: 1
description: Dilithium Consensus Overview
keywords:
    - Consensus
    - Dilithium
---

Subspace is powered by *Dilithium* - a lightweight and secure consensus mechanism that is environmentally friendly, permissionless, and fair. *Dilithium* is a Proof-of-Archival-Storage (PoAS), Nakamoto-style consensus protocol based on proofs of storing the blockchain's history. 

In PoAS, farmers (not miners) store as many unique pieces of the blockchain history as their disk space allows. PoAS incentivizes the storage of the blockchain history, resolving the critical mechanism design failure, which has hindered scalability and led to centralization within Proof-of-Space blockchains like Filecoin and Chia. Since PoAS consensus is based on storage rather than computing power or wealth, it is eco-friendly and accessible to ordinary people with available disk space. This approach allows us to combine the high security of Bitcoin-style Proof-of-Work with the energy efficiency of Ethereum-style Proof-of-Stake. PoAS also provides the basis for a more generic solution to the blockchain bloat problem. 

<!-- ![ConsensusPhases](../../src/Images/Consensus_Phases.png) -->

Formally, PoAS is a three-phase protocol, consisting of:
- an initial **Genesis** phase (starting the chain)
- a recurring deterministic **Archiving** phase (given new blocks of the chain, constructing a canonical history)
- a unique setup or **Plotting** phase done individually by each farmer (given the canonical history of the blockchain, generate a unique replica (the plot) and store it on disk)
- a probabilistic **Farming** phase (given a challenge from a secure randomness beacon, scan the plot for a solution that satisfies some threshold, return a proof, and propose a block). The scan is based on a recurring slot challenge from a secure randomness beacon, with a one timeslot per second frequency. 

## *Dilithium*

*Dilithium* is a second-generation PoAS consensus algorithm that uses erasure coding and KZG commitments for distributed archiving while combining polynomial encoding with an ASIC-resistant Proof-of-Space for plotting. The protocol represents a significant step forward in security and user experience for Subspace Network participants. *Dilithium* is also designed to be SSD-friendly, further enhancing energy efficiency and decentralization. 

For those familiar with our initial consensus design, *Dilithium* fulfills all the fundamental ideas described in the original [whitepaper](https://subspace.network/news/subspace-network-whitepaper) but implements them better.