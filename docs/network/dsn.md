---
title: Distributed Storage Network
sidebar_position: 2
description: Distributed Storage Network
keywords:
    - Consensus
    - Network
    - Storage
    - DSN
last_update:
  date: 10/27/2023
  author: Dariia Porechna
---

To ensure every piece of the blockchain history is recoverable, no matter how large it grows, Subspace organizes farmers into a Distributed Storage Network (DSN), which ensures both the ephemeral and permanent availability of all chain data.

The DSN ensures the blockchain history is distributed across the farmer network in a way that is:
- uniform and consistent over time, where each piece is, on average, replicated the same number of times across the network.
- durable, such that with high probability, no piece may be forgotten,
whether accidentally or through malicious intent. 
- retrievable, both in full and for any single piece
- load-balanced evenly across all farmers, allowing the overhead of serving history to remain negligible, given that some farmers may only be able to store a partial replica of the history. In contrast, others may be able to store it many times over.
- stored in an efficiently verifiable manner, as farmers are not expected to either synchronize or retain the entire history
- permissionless, without any central coordination
- accounting for the dynamic availability of farmers and the uneven growth of the history over time.

The Subspace DSN achieves the above by leveraging consistent hashing, erasure coding, and a Kademlia Distributed Hash Table (K-DHT). To incentivize the farmer network to maintain the desired replication factor for the history, Subspace introduces a novel algorithm that dynamically adjusts the cost of on-chain storage, or blockspace, in response to fluctuations in supply and demand for storage. These features allow the history to bloat well beyond the storage capacity of any single farmer while letting each farmer pledge as much or as little space as they desire. 

## Layers

The DSN consists of multiple distinctive layers. While all layers serve as pieces of history, they work together to ensure different aspects of data availability, durability and efficient retrievability.

### Pieces cache layer(L2)

The pieces cache layer serves to get pieces for data reconstruction and farming efficiently. The primary purpose of this layer is to reduce the latency of piece retrieval. Retrieval of pieces from Archival Storage requires farmers to read and decode their plotted sectors, which is a computationally intensive operation that currently takes ~1 second. In contrast, retrieval of pieces from L2 is almost instant as they are kept in disk cache in unencoded form. For this reason, the default way to acquire pieces is getting them from L2.

The L2 cache stores pieces in the DHT by the proximity of the piece index hash to the peer ID. While any peer can store pieces in the L2 cache, we mostly rely on farmers as the most suitable candidates for pieces L2. Farmers dedicate a tiny part of their pledged storage space to store L2 pieces. Several farmers closest to each other as peers by peer ID may store the same piece, determined by the overall storage network replication factor.

The piece cache layer is populated as follows:
- Nodes produce new segments of pieces during the Archiving process. 
- Nodes temporarily store in their cache the new segments they produce.
- Farmers receive the segment index from the latest block header from the connected node. 
- Farmers derive the piece index hashes from the segment index and compare their peer ID with those hashes to determine whether they should download any pieces from this segment to their L2. 
- Farmers pull relevant pieces to their local L2 cache.

### Archival Storage layer(L1)

The Archival Storage layer is the fundamental layer responsible for the permanent storage and durability of all chain data. It consists of all storage pledged by farmers to store encoded pieces of chain history.

This layer stores the blockchain history data in the encoded form as an integral part of the [Dilithium consensus](/docs/category/consensus). It stores the pieces encoded into plot sectors in SSD files. 

The Archival Storage layer serves as the "cold storage" and guarantees the history pieces are available when they couldn't be retrieved from L2. Retrieval from Archival storage, however, consumes a moderate amount of time and resources and is expected to be used only in the rare event of L2 cache miss. 
In most cases, the L1 layers of farmers are populated with pieces received from L2.

<div align="center">
    <img src="/img/DSN_Layers-light.svg#gh-light-mode-only" alt="DSN_Layers" />
    <img src="/img/DSN_Layers-dark.svg#gh-dark-mode-only" alt="DSN_Layers" />
</div>

## Cache types by peer roles

- **Node cache** contains newly archived pieces from the latest segments. It is limited to a few recent segments and gradually replaces older pieces with new data.
- **Farmer cache** contains pieces in the L2 cache automatically populated upon receiving the new archived segment announcements. Pieces are cached according to the proximity to the farmer's peer ID. 
