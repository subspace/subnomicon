---
title: Node Types
sidebar_position: 1
description: Participants in the Subspace Network
keywords:
    - Consensus
    - Network
    - Node
    - Peer
---

## Node Configurations
A Subspace Node can run in several modes depending on configuration (following Substrate naming):
- **Full Node**: processes all blocks, applies all state transitions, retains recent history and state for some configurable number of recent blocks
- **Archival Node**: processes all blocks, applies all state transitions, retains all history and state since genesis, a superset of Full Node 
- **Light Client**: a special kind of client that connects to Full Nodes and processes block headers but doesn’t run the state transitions and doesn’t retain history. It can run in the browser, for instance, [Substrate Connect](https://github.com/paritytech/substrate-connect)

## Node Roles

The Subspace network is made up of different types of nodes that each play a specific role:

### Farmer

A Farmer is responsible for maintaining consensus (safety of the Consensus Chain). A Farmer plots pieces of Archival History to disk, farms the created plot for block rewards, joins the DSN as a node for data retrieval (for syncing nodes, other farmers and returning data to various Clients).

### Domain Operator

A Domain Operator is responsible for running arbitrary computation on Domains, state transitions, maintaining state (liveness of the Execution Chain).

### Timekeeper
A Timekeeper is responsible for running Proof-of-Time chain and maintaining the randomness beacon for the Consensus Chain.
