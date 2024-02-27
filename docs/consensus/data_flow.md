---
title: Data Flow
sidebar_position: 3
description: Lifecycle of Data on Subspace Blockchain
keywords:
    - Consensus
    - Data
    - Storage
    - Transactions
last_update:
  date: 02/06/2024
  author: Dariia Porechna
---

From the moment a transaction is submitted to the Subspace blockchain to the point it is permanently archived, data goes through several stages:

1. The transaction is validated and included in a consensus chain block directly or through inclusions of domain bundles.
2. Transactions and bundles in the block are executed, activating a global and domain state change.
3. After that block reaches a certain depth (currently 100 blocks), it is archived following the [Archiving](./consensus/archiving.md) protocol alongside other blocks. At this point, it becomes a part of the Archival History of the chain.
4. Newly archived pieces are added to farmer caches through the [Distributed Storage Network](../network/dsn.md) and replicated multiple times throughout the network.
5. Pieces are encoded into farmer plots on disk for permanent storage, following the [Plotting](./consensus/plotting.md) protocol.
6. When a client requests, the original data is reconstructed from archived pieces on the fly.

<div align="center">
    <img src="/img/Data_Flow-light.svg#gh-light-mode-only" alt="Data_Flow" />
    <img src="/img/Data_Flow-dark.svg#gh-dark-mode-only" alt="Data_Flow" />
</div>

## Block Structure and Limits

A Subspace consensus chain block follows the general structure of a standard block: it consists of a body and a header and points to a parent block. The consensus chain block header contains metadata about the block, allowing verification of the validity of the consensus chain. The body contains transactions and domain bundles. Transactions include transfers, votes and fraud proofs. Domain bundles are sets of transactions from a particular domain (e.g., EVM contract calls). 

Each block has a certain length and weight. Length is the amount of storage this block consumes on the network, equal to the size in bytes of the encoded transactions and bundles in the block body. Weight is the estimated time it would take to execute this block, equal to the sum of the compute weights of all the transactions in the body. Currently, consensus chain blocks are limited to 3.75 MiB of length and 1.5 seconds of compute weight for normal user transactions with up to 1.25 MiB and 0.5 seconds extra for system extrinsics like votes or updates to the chain.

## Consensus Chain Block Header

In Subspace, the consensus block header contains:
- The block number in the chain of blocks
- The hash of the parent block
- The Merkle root of the trie of extrinsics included in this block
- The Merkle root of the state trie after processing this block
- The time slot number claimed by the block producer
- The global randomness at the claimed time slot derived from the proof-of-time chain
- The solution to the slot challenge for the claimed time slot. The solution includes a winning chunk of history, a proof-of-space for the farmer's plot and KZG witness that the winning chunk is indeed a part of the archival history at the claimed height
- The solution range used to find the winning chunk of history
- The signature of the farmer over the header

## Domain Bundle

A bundle contains multiple transactions from a particular domain (e.g., EVM contract calls) deterministically ordered for efficient execution, propagation and inclusion in blocks. In Subspace, a bundle contains a signed header and a list of transactions. A bundle header contains:
- The domain ID (e.g., EVM)
- The operator ID of the bundle producer
- The Merkle root of the trie of transactions included in this bundle
- Execution receipt that should extend the domain receipt chain
- The size of the bundle body in bytes, used to calculate the storage cost
- The total estimated weight of all extrinsics in the bundle, used to prevent overloading the bundle with compute
- The time slot claimed by the bundle
- The global randomness at the claimed time slot derived from the proof-of-time chain
- The proof-of-election of the operator as bundle producer for the claimed time slot based on slot challenge and the operator's stake in the current epoch

Each domain bundle can be seen as "a block inside a block," with its bundle header containing information about the domain and the bundle producer. Any consensus chain block may contain many bundles from different domains without burdening the consensus nodes. Consensus nodes check if bundles are well-formed and package them within a block. Consensus nodes do not execute any of the computations inside the bundles.

## Domain Block

Each domain is an application-specific blockchain (app-chain) that relies on the consensus chain for data availability and settlement. 
Domain chains consist of domain blocks, each containing solely the bundles relevant to this domain and disregarding any transactions concerning other domains. Domain chains have separate namespaced execution environments while receiving shared security and interoperability from the consensus chain.

<div align="center">
    <img src="/img/Slot_To_Execution-light.svg#gh-light-mode-only" alt="Slot_To_Execution" />
    <img src="/img/Slot_To_Execution-dark.svg#gh-dark-mode-only" alt="Slot_To_Execution" />
</div>
