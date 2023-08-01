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
# Nodes and Roles
## Node Configurations
A Subspace Node can run in several modes depending on configuration (following Substrate naming):
- **Full Node**: processes all blocks, applies all state transitions, retains recent history and state for some configurable number of recent blocks
- **Archival Node**: processes all blocks, applies all state transitions, retains all history and state since genesis, a superset of Full Node 
- **Light Client**: a special kind of client that connects to Full Nodes and processes block headers but doesn’t run the state transitions and doesn’t retain history. It can run in the browser, for instance, [Substrate Connect](https://github.com/paritytech/substrate-connect)
## Node Roles
### Farmer

- conceptually two things
    - a role on the Subspace Network that is responsible for maintaining consensus (safety of the Consensus Chain)
    - a software that is used for farming block rewards
- specifically in Subspace, it is a `subspace-farmer` crate
    - plots pieces of Archival History to disk, farms the created plot for block rewards, joins DSN as a node for data retrieval (for syncing nodes, other farmers and returning data to various Clients)


### Domain Operator

 - a role on the Subspace Network that is responsible for running arbitrary computation on Domains, state transitions, maintaining state (liveness of the Execution Chains)


### Clockmaster
- a role on the Subspace Network that is responsible for running Proof-of-Time chain and maintaining the randomness beacon for the consensus chain.
- gossips the time proofs and randomness to the network, consumed by other nodes
