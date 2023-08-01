---
title: Overview
sidebar_position: 1
description: DSN Overview
keywords:
    - Consensus
    - Network
    - Storage
    - DSN
---
To make sure no piece of the blockchain history is ever lost, no matter how large it grows, Subspace organizes farmers into a Distributed Storage Network (DSN), which is responsible for ensuring both the ephemeral and permanent availability of all chain data.

## Properties

The DSN ensures the blockchain history is distributed across the farmer network in a way that is:
- uniform and consistent over time, where on average each piece is replicated the same number of times across the network.
- durable, such that with high probability, no single piece may be forgotten,
whether accidentally or through malicious intent. 
- retrievable, both in full and for any single piece
- load-balanced evenly across all farmers, allowing the overhead of serving history to remain negligible, given that some farmers may only be able to store a partial replica of the history, while others may be able to store it many times over.
- stored in an efficiently verifiable manner, as farmers are not be expected to either synchronize or retain the full history
- permissionless, without any central coordination
- accounting for the dynamic availability of farmers and the uneven growth of the history over time.

The Subspace DSN achieves the above by leveraging consistent-hashing, erasure coding, and a Kademlia Distributed Hash Table (K-DHT). To incentivize the farmer network to maintain the desired replication factor for the history, Subspace introduces a novel algorithm which dynamically adjusts the cost of on-chain storage, or blockspace, in response to changes in the supply and demand for storage. These features allow the history to bloat well beyond the storage capacity of any single farmer, while letting each farmer pledge as much or as little space as they desire. 