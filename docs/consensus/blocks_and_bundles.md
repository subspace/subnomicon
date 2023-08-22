---
title: Blocks and Bundles
sidebar_position: 4
description: Contents of Blocks and Bundles
keywords:
    - Consensus
    - Blocks
    - Bundles
    - Transactions
---

## Consensus Chain Block Header

The consensus chain block header contains metadata about the block allowing verification of validity of the consensus chain. In Subspace, the consensus chain block header contains:
- The block number in the chain of blocks
- The hash of the parent block
- The Merkle root of the trie of extrinsics included in this block
- The Merkle root of the state trie after processing this block
- The time slot number claimed by the block producer
- The global randomness at the claimed time slot derived from the proof-of-time chain
- The solution to the slot challenge for the claimed time slot. The solution includes a winning chunk of history, a proof-of-space for the farmer's plot and KZG witness that the winning chunk is indeed a part of the archival history at the claimed height
- The solution range used to find the winning chunk of history
- The signature of the block producer over the header

## Domain Bundle

A bundle contains multiple transactions in a particular domain (e.g. EVM contract calls) grouped together for efficient propagation and inclusion in blocks. In Subspace, a bundle contains a signed header and a list of transactions. A bundle header contains:
- The domain ID (e.g. EVM)
- The operator ID of the bundle producer
- The Merkle root of the trie of transactions included in this bundle
- Execution receipt that should extend the receipt chain
- The size of the bundle body in bytes, used to calculate the storage cost
- The total estimated weight of all extrinsics in the bundle, used to prevent overloading the bundle with compute.
- The time slot claimed by the bundle
- The global randomness at the claimed time slot derived from the proof-of-time chain
- The proof-of-election of the operator as bundle producer for the claimed time slot based on slot challenge and operator's stake in the current epoch