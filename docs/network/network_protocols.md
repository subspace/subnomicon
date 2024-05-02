---
title: Networking Protocols
sidebar_position: 3
description: Autonomys Network P2P networking protocols
keywords:
    - p2p
    - Network
    - Node
    - Peer
last_update:
  date: 05/02/2024
  author: Saeid Yazdinejad
---

Autonomys networking stack is based on libp2p and implements Subspace-specific protocols like piece and archived segment header retrieval. The networking layers handle a variety of essential tasks:

## Transaction Propagation

Transactions are propagated across the network to ensure nodes have a consistent view of unconfirmed transactions. The Autonomys Network uses a gossip mechanism to propagate transactions to peers. When a node receives a new transaction, it first validates the transaction and, if valid, adds it to its transaction pool and broadcasts it to its directly connected peers. When a connected peer receives the transaction, they verify its validity. If deemed valid, they retain a copy and share it with all their connected peers, excluding the one from which it was received. Consequently, the transaction disseminates from its source, spreading throughout the network, ensuring every node gets a copy. 

## Block and Bundle Relay

When a new block is built, it has to be propagated across the network as quickly as possible. To achieve efficient block propagation, Autonomys Network adopts a notion of compact blocks. Since the substantial portion of the block size is the body of transactions included in it, and each transaction was already broadcast to nodes beforehand, rebroadcasting the entire body again is superfluous. 

When a node receives a new block, it validates the block header and transactions. Then, if valid, it builds a compact block message containing just the block header and transaction IDs. This compact block is then gossiped across the network. When a peer receives this compact block, it checks if it has all the referenced transactions in its pool. It requests the complete transactions from the broadcasting node if any transactions are missing. This optimization allows fast block propagation while minimizing unnecessary transaction data transfer across the network.

A similar mechanism is also used for bundle relay, where a compact bundle contains just the bundle header and transaction IDs. This structure allows fast dissemination of new bundles throughout the network.

## Synchronization

Autonomys Network employs an adaptive synchronization protocol to sync nodes to the latest state of the network efficiently. The adaptive protocol chooses between DSN sync and block sync based on how deep the node is behind.

### DSN Sync

DSN Sync is a specialized sync method made possible by the unique way Autonomys Network archives the chain data and stores it in the Distributed Storage Network (DSN). 
The DSN sync is attempted every time a node joins the network or detects it is more than a hundred blocks behind the network tip. The node first gathers information from its peers about the latest archived segment headers to see whether any new data has been archived since it last synced. If new segments are available, it downloads the headers and verifies whether they form a chain. Once verified, it downloads complete segment data from the DSN, verifies commitments, and locally reconstructs blocks from pieces. The DSN Sync allows a node to sync hundreds or thousands of blocks in one shot by downloading archived data directly from the DSN rather than fetching individual blocks from peers.
Once the node has downloaded all missing segments and imported archived history, it switches to syncing the recent blocks from other nodes until it reaches the network tip.

## Piece Retrieval

Another essential protocol implemented by the networking stack is piece retrieval. When a node needs pieces for plotting or when requested by a client application, it sends a request to peers whose ID is close to the piece index hash. With a high probability, the peer who receives the request will have the piece available in the piece cache and can respond with the piece data. In a rare case when none of the peers have the piece, the request falls back to asking them to decode the piece from their plots.
The piece retrieval protocol allows nodes to retrieve history pieces from the network with minimum hops efficiently.
