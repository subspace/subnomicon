---
title: Motivation
sidebar_position: 1
description: Why did we create Subspace
keywords:
  - Introduction
  - Motivation
  - Goals
---
In an effort to make blockchains more energy efficient, egalitarian, and decentralized, several protocols
employ consensus based on Proofs-of-Capacity (PoC), which
replace compute-intensive mining with storage-intensive farming.

## Resolving Farmer's Dilemma

PoC consensus introduces a unique mechanism
design challenge, referred to as the farmer’s dilemma, which
suggests that existing constructions are not actually incentive
compatible. Simply put, farmers must decide whether to allocate
scarce storage resources towards either maintaining the chain
state and history or maximizing the amount of space they pledge
towards consensus. Rational farmers will always choose the latter,
at best becoming light clients, while at worst encouraging pooled
farming under a few trusted operators. 

<!-- ![FarmersDilemma](../../src/Images/Farmers_Dilemma.png) -->

To resolve this dilemma,
we created Subspace, a PoC blockchain in which farmers
maintain neither the state nor the history, while retaining the
security properties and decentralization benefits of a full node.
Consensus in Subspace is based on proofs of replicated storage
of the history of the blockchain itself. Farmers store the history
collectively, many times over, with each farmer storing as many
replicas as their disk space allows. Consensus and computation
are then decoupled, such that farmers only propose an ordering
for transactions, while staked executor nodes maintain the state
and compute transitions. This separation of concerns significantly
reduces the storage and compute overhead needed to operate a
farmer, even in an Ethereum-style execution model, allowing for
high levels of participation.

<!-- ![FarmersDilemmaSolution](../../src/Images/Farmers_Dilemma_Solution.png) -->

## Eliminating Blockchain Bloat

The Subspace consensus protocol is designed to overcome the key problem of blockchain bloat, or the tendency for blockchains to become more centralized over time, especially as they scale. Bloat is a result of the desire for every full node to store the chain’s entire transaction history and resulting execution state. Subspace eliminates bloat by combining the best parts of layer-one blockchains like Ethereum, Filecoin and Chia in a unique way, resulting in a new storage based consensus protocol; a permanent distributed storage service, and a scalable off-chain execution framework. 
