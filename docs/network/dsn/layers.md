---
title: Network Layers
sidebar_position: 3
description: DSN Layers
keywords:
    - Consensus
    - Network
    - Storage
    - DSN
---
The DSN consists of multiple distinctive layers. While all layers serve pieces of the history, they work together to ensure different aspects of data availability, durability and efficient retrievability.

## Pieces cache layer(L2)

Pieces cache layer serves to quickly get pieces for data reconstruction and farming. The main purpose of this layer is to reduce latency of piece retrieval. Retrieval of pieces from Archival Storage requires farmers to read and decode their plotted sectors, which is a computationally intensive operation that currently takes ~1 second. In contrast, retrieval of pieces from L2 is almost instant as they are kept in memory. For this reason, the default way to acquire pieces is getting them from L2.

The piece cache layer stores pieces in the DHT by the proximity of piece index hash to peer ID. While any peer can store pieces in the L2 cache, at the moment we mostly rely on farmers as the most suitable candidates for pieces L2. Farmers dedicate a tiny part of their total pledged storage space to store L2 pieces. Several farmers closest to each other as peers by peer ID may store the same piece, determined by the overall storage network replication factor.

Piece cache layer is populated as follows:
- New pieces are produced by nodes during the Archiving process. 
- Farmers receive the segment index from the latest block header from the connected node. 
- Farmers derive the piece index hashes from the segment index and compare their peer ID with those hashes to determine whether they should download any pieces from this segment to their L2. 
- Farmers pull relevant pieces to their local L2 cache.

## Archival Storage layer(L1)

The Archival Storage layer is the fundamental layer responsible for permanent storage and durability of all chain data. It consists of all storage pledged by farmers that is used to store encoded pieces of chain history.

This layer stores the blockchain history data in the encoded form as an integral part of the [Dilithium consensus](/docs/category/dilithium-consensus). It stores the pieces encoded into plot sectors in SSD files. 

The Archival Storage layer serves as the “cold storage” and guarantees the history pieces are available when they couldn't be retrieved from L2. Retrieval from Archival storage, however, consumes a moderate amount of time and resources and is expected to be used only in the rare event of L2 cache miss. 
In most cases, the L1 layers of farmers are populated with pieces received from L2.

![DSNLayers](../../../src/Images/DSN_Layers.png)

## Piece cache types by peer roles

- **Node cache** contains newly archived pieces from the latest segments. It is limited to a few recent segments and older pieces are gradually replaced with new data.
- **Farmer cache** contains pieces in L2 cache that is automatically populated upon receiving the new archived segment announcements. Pieces are cached according to the proximity to the farmer's peer ID. 