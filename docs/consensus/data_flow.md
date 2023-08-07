---
title: Data Flow
sidebar_position: 2
description: Lifecycle of Data on Subspace Blockchain
keywords:
    - Consensus
    - Data
    - Storage
    - Transactions
---
<!-- TODO
- Transaction submitted to the consensus chain.
- Validated and included in a block.
- Archived
- Storage layer
- replicated on farmer discs
- served when requested -->
From the moment a transaction is submitted to the Subspace blockchain to the point it is permanently archived, data goes through several stages:
1. Transaction is validated and included in a consensus chain block.
2. When that block reaches certain depth (currently 100 blocks) it is archived following the Archiving protocol alongside other blocks. At this point it irrereversibly becomes a part of Archival History of chain.
3. Newly archived pieces are added to farmer caches through the Distributed Storage Network and replicated multiple times throughout the network.
4. From there they are encoded into farmer plots on disk for permanent storage, following the Plotting protocol.
5. When requested by a client, the original data is reconstructed from archived pieces on the fly. 