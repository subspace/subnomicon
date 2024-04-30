---
title: Advancing Blockchain
sidebar_position: 3
description: How Autonomys resolves key concerns with blockchain
keywords:
  - Introduction
  - Motivation
  - Goals
last_update:
  date: 04/30/2024
  author: Saeid Yazdinejad
---

Designed from first principles, the Subspace Protocol resolves several critical challenges within the industry.

## Resolving Farmer's Dilemma

In an effort to make blockchains more energy-efficient, egalitarian, and decentralized, several protocols
employ consensus based on Proof-of-Space, replacing compute-intensive mining with storage-intensive farming. PoSpace consensus introduces a unique mechanism
design challenge called the farmer's dilemma, which
suggests that existing constructions are not actually incentive-compatible. Simply put, farmers must decide whether to allocate
scarce storage resources to maintain the chain
state and history or maximize the amount of space they pledge
towards consensus. Rational farmers will always choose the latter,
at best becoming light clients, while at worst encouraging pooled
farming under a few trusted operators. 

<div align="center">
    <img src="/img/Farmers_Dilemma-light.svg#gh-light-mode-only" alt="Farmers_Dilemma" />
    <img src="/img/Farmers_Dilemma-dark.svg#gh-dark-mode-only" alt="Farmers_Dilemma" />
</div>

To resolve this dilemma, Subspace farmers
maintain only minimal state and history while retaining the
security properties and decentralization benefits of a full node.
Consensus in Subspace is based on proofs of replicated storage
of the history of the blockchain itself. Farmers store the history
collectively, many times over, with each farmer storing as many
replicas as their disk space allows. Consensus and computation
are then decoupled, so farmers only propose an ordering
for transactions, while staked executor nodes maintain the state
and compute transitions. This separation of concerns significantly
reduces the storage and compute overhead needed to operate a
farmer, even in an Ethereum-style execution model, allowing for
high levels of participation.

<div align="center">
    <img src="/img/Farmers_Dilemma_Solution-light.svg#gh-light-mode-only" alt="Farmers_Dilemma_Solution" />
    <img src="/img/Farmers_Dilemma_Solution-dark.svg#gh-dark-mode-only" alt="Farmers_Dilemma_Solution" />
</div>

## Eliminating Blockchain Bloat

The Subspace consensus protocol is designed to overcome the critical problem of blockchain bloat or the tendency for blockchains to become more centralized over time, especially as they scale. Bloat is a result of the desire for every full node to store the chain's entire transaction history and resulting execution state. Subspace eliminates bloat by uniquely combining the best parts of layer-one blockchains like Ethereum, Filecoin and Chia, resulting in a new storage-based consensus protocol, a permanent distributed storage service, and a scalable off-chain execution framework. 

## Addressing State Bloat

To resolve the problem of state bloat, Autonomys introduces a decoupled execution framework (DecEx). Under this framework, farmers will only confirm the availability of transactions and provide an ordering. At the same time, a secondary network of staked operator nodes will execute the transactions and maintain the resulting chain state. DecEx separates the probabilistic process of coming to a consensus over ordering transactions from the deterministic process of executing transactions. Since these roles are now decoupled, we can have different hardware requirements for each node type, allowing us to keep farming lightweight and open to anyone while also providing a foundation for scaling execution both vertically, based on the hardware capabilities of operators, and horizontally, by later partitioning operators into different namespaced execution domains.

## Scaling Blockspace

The overall execution throughput is ultimately constrained by the blockspace bandwidth. Blockspace is space on a blockchain that can run code or store data. To achieve optimal throughput, our scalability framework should seek to increase the blockspace linearly as more nodes contribute resources to the network – without reducing security or decentralization. 

Subspace achieves optimal scalability through Orthogonal Execution (OE) by first horizontally scaling the blockspace of the base data availability layer and then vertically scaling the transaction throughput for each domain. OE starts with the unique properties of the Subspace protocol and extends them with several ideas originating within the Tse Lab at Stanford University. These include the Prism protocol for vertical scaling, the Free2Shard protocol for horizontal scaling, the Semi-AVID-PR scheme for distributed data availability, and the Ebb-and-Flow protocols for flexible finality.

## Aligning Incentives for Optimal Scalability

Subspace includes a novel algorithm to dynamically adjust the cost of blockspace in response to changes in supply and demand to economically secure the network in an open environment. Such adjustment naturally keeps the network incentive compatible for farmers, providing storage and data availability bandwidth and for operators providing raw compute power. 


Autonomys Network creates the world's first two-sided marketplace for blockspace, allowing it to have a dynamic on-chain cost-of-blockspace and a stable off-chain price-of-blockspace without relying on centralized control or coordination.
On one side are the farmers, who collectively supply blockspace bandwidth through their storage of the blockchain history. On the other side are dApp developers and users, who demand blockspace to deploy and run their applications. Autonomys's marketplace algorithm adjusts the on-chain cost-of-blockspace paid out to farmers based on real-time supply and demand. When demand is high, the cost rises to incentivize more farmers to join. When demand is low, the cost falls to disincentivize over-investment in storage. This dynamic adjustment process occurs transparently on-chain through the protocol rules.

When combined with existing scalability frameworks, Subspace can achieve linear scaling of the blockspace as more nodes join the network without sacrificing security or decentralization.
