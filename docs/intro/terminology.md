---
title: Terminology
sidebar_position: 2
description: Definitions for all things Subspace
keywords:
    - Terminology
    - Definitions
    - Glossary
---
*To be updated*
## Subspace

- an overarching term that typically encapsulates everything about the project and is not limited in scope just to the blockchain or any other component specifically
- often can be clarified to something more specific but is used interchangeably for simplicity


## DSN

- short for Distributed Storage Network
- specifically in Subspace, means a network of Farmer nodes that have plotted pieces of Archival History and serve them to Clients

## Subspace Network

- an overarching term that typically means a combination of Subspace Blockchains (all Shards) and DSN

## Dilithium

- the Subspace Network Proof-of-Archival-Storage consensus mechanism that describes Archiving, Plotting, Audit, Proving and Verification
- includes Proof-of-Space and Proof-of-Time components

## Node

- conceptually a logical participant in the P2P network
- specifically in Subspace, it is primarily a Substrate-based `subspace-node`
    - connects to other nodes on the P2P network, maintains history and state, can do block production for consensus, all things around execution, serve as RPC endpoint for Polkadot.js or farmer, etc.
    - Subspace Node can run in several modes depending on configuration; naming is derived from Substrate
        - **Full Node**: processes all blocks, runs all state transitions, retains history and state for some (configurable) number of recent blocks
        - **Archival Node**: processes all blocks, runs all state transitions, retains all history and state since genesis, a superset of Full Node)
    - can be used as a library, like when used in Subspace Desktop
    - can be used as a standalone CLI app/binary/executable
- another kind of node in Subspace is Farmer when talking in the context of DSN
- theoretically might have alternative implementations over time (in addition to `subspace-node` reference implementation)
- old alternative names used in some context
    - client, farmer

## Farmer

- conceptually two things
    - a role on the Subspace Network that is responsible for maintaining consensus (safety of the Consensus Chain)
    - a software that is used for farming block rewards
- specifically in Subspace, it is a `subspace-farmer` crate
    - plots pieces of Archival History to disk, farms the created plot for block rewards, joins DSN as a node for data retrieval (for syncing nodes, other farmers and returning data to various Clients)
    - can be used as a library, like when used in Subspace Desktop
    - can be used as a standalone CLI app/binary/executable
- there will likely be an alternative implementation of the farmer in the future (in addition to `subspace-farmer` reference implementation)
- old alternative names used in some context
    - client, node

## Domain Operator

- conceptually two things
    - a role on the Subspace Network that is responsible for running arbitrary computation on Domains, state transitions, maintaining state (liveness of the Execution Chain)
    - a software that is used to run the state transition logic of the Execution Chain, an opt-in component of Full Node implementation
- old alternative names used in some context
    - executor

## Timekeeper
- a role on the Subspace Network that is responsible for running Proof-of-Time chain and maintaining the randomness beacon for the consensus chain.

## Client

- conceptually one side of communication in the client-server paradigm
- specifically in Subspace, can mean a couple of things
    - **Light Client**: a special kind of client that connects to Full Nodes and processes block headers but doesn’t run the state transitions and doesn’t retain history. It can run in the browser, for instance, [Substrate Connect](https://github.com/paritytech/substrate-connect)
    - Browser Client: an app or a library that is running in the browser that interacts with something related to the blockchain either directly (Light Client) or through Full Node’s RPC (Polkadot.js API, subspace.js)

## SSC    

- short for Subspace Credit 
- native token of Subspace Network

## Subspace CLI

- a Command Line Interface application automates the tasks of Subspace Farmers and Executors by running an instance of Farmer and Full Node within the same terminal instance


## Consensus Chain

- conceptually just a blockchain that has consensus logic in it
- specifically in Subspace, means a blockchain over which farmers achieve consensus
    - intended to be lightweight to reduce the storage overhead for farmers
    - free from most of the computation to reduce the computation overhead for farmers
    - must be possible to sync quickly for the farmer
- old alternative names used in some context
    - primary chain
    - In code forked from Polkadot codebase: relay chain, polkadot

## Domain Chain

- conceptually just a blockchain that has computation but not its own consensus
- specifically in Subspace, means a blockchain that operators use to run the state transitions over transaction bundles
    - a special blockchain that blindly follows the consensus of the Consensus Chain and deterministically executes transaction bundles in the order defined by the Consensus Chain
    - arguably an implementation detail of Subspace Network, but (at least for now) resembles a full blockchain
- old alternative names used in some context:
    - secondary chain
    - in code forked from Cumulus codebase: cirrus, parachain, cumulus

## Domain

- application-specific blockchain anchored and validated by the Subspace Network (similar to layer two networks on Ethereum, parachains on Polkadot, zones on Cosmos, subnets on Avalanche, and sovereign rollups on Celestia)
- Each domain has its own gossip network (domain subnet)
- Domains have a configurable runtime, a simple domain config maintained on x-net
- Staked executors can opt-in to operate a domain as Domain Operator, collect compute fees from domain users, and challenge invalid state commitments

## Plotting

- conceptually a process of creating and maintaining plots on disk
- specifically in Subspace done with `subspace-farmer` and includes
    - initial plot creation
    - plot maintenance over time (plot updating, replotting) as the history of the blockchain increases

## Farming

- conceptually a process of participation in the consensus by solving a puzzle based on the previously created plot (using Plotting)
- specifically in Subspace done with `subspace-farmer` and includes
    - subscribing to slot notifications from Full Node
    - deriving local challenge
    - searching for a chunk in the plot that is within the solution range from local challenge
    - creation of the solution in response to the slot challenge
    - signing (sealing) newly created block (by Full Node) to claim block reward

## Segment

- conceptually a collection of (potentially partial) blocks of the blockchain history
- specifically in Subspace means two things
    - **Recorded History Segment**: a fixed-size portion of the Blockchain History in a buffer before Archiving. A Recorded History Segment consists of Raw Records.
    - **Archived History Segment**: a fixed-size portion of the Archived History. An Archived History Segment is a Recorded History Segment transformed by the Archiving process. An Archived History Segment consists of Pieces.
        
        Alternative names: archived segment, segment
        
- an Archived History Segment can be later turned back into a Recorded History Segment History with Reconstructing process

## Segment Header

- a compact header in an Archived History Segment containing the segment index, segment commitment, a pointer to the previous segment header and information about the progress of block archiving
- old alternative names: root block, root block header

## Raw Record

- a fragment of Blockchain History, the “useful data” for the PoAS

## Record

- a Raw Record that was transformed and prepared for Archiving
- specifically, a 0 byte is inserted after every 31 bytes of Raw Record, because KZG operates on values up to 254 bits

## Piece

- the unit of measurement of Archived History, conceptually the piece of Archived History from which Archived History Segments are composed
- the Piece is composed of Record + Commitment + Witness

## Sector

- conceptually a collection of encoded Pieces that can be used for Farming
- specifically in Subspace, a sector contains encoded Record data from pieces, original piece commitments and witnesses and other metadata about stored pieces
- a collection of Sectors comprises s a Plot

## Plot

- conceptually a collection of Sectors that can be used for Farming
- specifically in Subspace, a collection of Sectors written to disk as a contiguous binary file

## Commitment

- specifically in Subspace in the context of Archiving implementation means two things:
    - **Record Commitment:** a KZG commitment to blockchain data in a Raw Record
    - **Segment Commitment:** a KZG commitment to hashes of all Record Commitments in an Archived History Segment
        
        Old name: records root
        

## Blockchain History

- conceptually a collection of blocks of the blockchain
- specifically in Subspace, typically means SCALE-encoded blocks of the blockchain

## Blockchain State

- conceptually the result of executing transactions on a blockchain (like state of account balances, smart contracts, etc.)

## Archived History

- conceptually a history of the blockchain (blocks) transformed in a specific way at some later time
- specifically in Subspace means a set of pieces that is the result of the Archiving of blocks that are at a particular depth from the tip of the chain
- alternative name: archival history

## Archiver

- conceptually an implementation of the Archiving process

## Archiving

- conceptually a process of transforming Blockchain History into Archived History
- specifically in Subspace, means a process of transforming blocks of the history at a configured depth from the tip of the chain
    - blocks are SCALE-encoded and added to buffer
    - buffer is sliced into records
    - records are erasure-coded
    - KZG commitment is computed for source and parity records, and witness is derived for each record
    - record+commitment+witness form a piece of Archived History that Farmer later uses for Plotting and Farming
- functionality necessary for this process is implemented by Archiver

## Reconstructor

- conceptually an implementation of Reconstructing process

## Reconstruction

- conceptually a process of transforming Archived History back into Blockchain History
- specifically in Subspace, a process of transforming pieces of Archived History, one Archived History Segment at a time, back into blocks of the blockchain history that can be used for starting a new Full Node from genesis
- functionality necessary for this process is implemented by Reconstructor
- alternative name: Extraction

## Farmers

- can mean two things
    - users that are running Full Node + Farmer software bundle to compete for block rewards on Consensus Chain
    - collection or fleet of running Farmer instances (for instance, in the context of DSN)

## Sharding

- conceptually an architecture and scalability technic where multiple related blockchains are somehow composed together into one system
- specifically in Subspace, a collection of Subspace Blockchain Nodes that might have distinct Archived History, but work together and form Global History that is used Plotting and Farming

## Global History

- conceptually all history of the Subspace Network of all Subspace Blockchains (all Shards) tied together

## Shard

- specifically in Subspace
    - one instance of the Subspace Blockchain having its own Archival History that is a part of Global History
    - helps with scalability by sharding transactions, execution and corresponding state

## Beacon Chain

- conceptually a special kind of Subspace Blockchain Shard that other Shards commit to
- specifically in Subspace, a Shard with index `0` that
    - every Shard (including Beacon Chain) follows and uses as a source of randomness
    - every other Shard commits Archived History to Beacon Chain in order to form Global History
    - Executors are staking on Beacon Chain only