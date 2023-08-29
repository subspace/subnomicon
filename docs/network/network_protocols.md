---
title: Networking Protocols
sidebar_position: 3
description: Subspace P2P networking protocols
keywords:
    - p2p
    - Network
    - Node
    - Peer
---

Subspace networking stack is based on libp2p and implements Subspace-specific protocols like piece and archived segment header retrieval. The networking layers handles a variety of essential tasks like:

## Transaction Propagation

Transactions are propagated across the network to ensure nodes have a consistent view of unconfirmed transactions. The Subspace Network uses a gossip mechanism to propagate transactions to peers. When a node receives a new transaction, it first validates the transaction and if valid, adds it to their transaction pool and broadcasts it to all of its directly connected peers. As soon as a connected peer receives the transaction, they verify its validity. If deemed valid, they retain a copy and share it with all their connected peers, excluding the one from which it was received. Consequently, the transaction disseminates from its source, spreading throughout the network, like a flood, ensuring every node gets a copy. 

## Block and Bundle Relay

When a new block is built it has to be propagated across the network as quickly as possible. To achieve efficient block propagation Subspace adopts a notion of compact blocks. Since the substantial portion of the block size is the body of transactions included in it and each of the transactions was already broadcast to nodes beforehand, rebroadcasting the full body again is superfluous. 

When a node receives a new block, it first validates the block header and transactions. If valid, it builds a compact block message containing just the block header and transaction IDs. This compact block is then gossiped across the network. When a peer receives this compact block, it checks if it has all the referenced transactions in its pool. If any transactions are missing, it requests the full transactions from the broadcasting node. This allows fast block propagation while minimizing unnecessary transaction data transfer across the network.

A similar mechanism is used for bundle relay as well where a compact bundle is built containing just the bundle header and transaction IDs. This allows fast dissemination of new bundles throughout the network.

## Synchronization

Subspace Network employs an adaptive synchronization protocol to efficiently sync nodes to the latest state of the network. The adaptive protocol chooses between DSN sync and block sync based on how deep the node is behind.

### DSN Sync

DSN Sync is a specialized sync method made possible by the unique way Subspace archives the chain data and stores in the Distributed Storage Network (DSN). 
The DSN sync is attempted every time a node joins the network or detects it is more than a hundred blocks behind the network tip. The node first gathers information from its peers about the latest archived segment headers to see whether there has been any new data archived since it last synced. If there are new segments available, it downloads the headers and verifies whether they form a chain. Once verified, it downloads full segment data from the DSN, verifies commitments and locally reconstructs blocks from pieces. The DSN Sync allows a node to sync hundreds or thousands of blocks in one shot by downloading archived data directly from the DSN rather than fetching individual blocks from peers.
Once the node has downloaded all missing segments and imported archived history, it then switches to syncing the recent blocks from other nodes until it reaches the network tip.

## Piece Retrieval

Another essential protocol implemented by the Subspace networking stack is piece retrieval. When a node need pieces for plotting or when requested by a client application, it sends a request to peers whose ID is close to the piece index hash. With a high probability, the peer who receives the request will have the piece available in piece cache and can respond with the piece data. In a rare case when none of the peers have the piece, the request falls back to asking them to decode the piece from their plots.
The piece retrieval protocol allows nodes to efficiently retrieve history pieces from the network with mininum hops.