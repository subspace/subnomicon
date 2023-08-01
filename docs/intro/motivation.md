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

## Farmer's Dilemma

PoC consensus introduces a unique mechanism
design challenge, referred to as the farmer’s dilemma, which
suggests that existing constructions are not actually incentive
compatible. Simply put, farmers must decide whether to allocate
scarce storage resources towards either maintaining the chain
state and history or maximizing the amount of space they pledge
towards consensus. Rational farmers will always choose the latter,
at best becoming light clients, while at worst encouraging pooled
farming under a few trusted operators. 
![FarmersDilemma](../../src/Images/Farmers_Dilemma.png)

### Solution 

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
![FarmersDilemmaSolution](../../src/Images/Farmers_Dilemma_Solution.png)

## Blockchain Bloat
