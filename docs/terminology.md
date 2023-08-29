---
title: Terminology
sidebar_position: 4
description: Definitions for all things Subspace
keywords:
    - Terminology
    - Definitions
    - Glossary
---

## Subspace

Typically encapsulates everything about the project and is not limited in scope just to the blockchain or any other component specifically. Often can be clarified to something more specific but is used interchangeably for simplicity

## Subspace Network

Typically means a combination of Subspace consensus chain, domain chains and Distributed Storage Network as a whole system.

## Blockchain History

An ordered collection of blocks of the blockchain, specifically in Subspace, means SCALE-encoded blocks of the blockchain. 

## Blockchain State

The result of executing transactions on a blockchain (like state of account balances, smart contracts, etc.)


## Dilithium

The Subspace Network Proof-of-Archival-Storage consensus mechanism that describes Archiving, Plotting, Audit, Proving and Verification, including Proof-of-Space and Proof-of-Time components.

## Consensus Chain

A blockchain over which farmers achieve consensus. A lightweight, quick to sync chain, free from most of the computation to reduce the storage and computation overhead for Farmers.

## DSN

Short for Distributed Storage Network, a network of Farmers that have plotted pieces of Archival History and serve them to Clients. The DSN handles data storage, retrieval and replication across the network.

## Domain

An application-specific blockchain anchored and validated by the Subspace Network. Domains allow arbitrary computation and state transitions tailored to the needs of a specific application or use case. Each domain has its own gossip network (domain subnet) and a configurable runtime. Staked executors can opt-in to operate a domain as Domain Operators, collect compute fees from domain users, and challenge invalid state commitments.

## Domain Chain

An application-specific blockchain that operators use to run the state transitions over transaction bundles, that blindly follows the consensus of the Consensus Chain and deterministically executes transaction bundles in the order defined by the Consensus Chain.

## Domain Epoch

An interval, in domain chain blocks, between each stake allocation re-adjustment. Operator stakes are fixed at the start of the epoch for its duration. At the end of each epoch, the stake distribution is adjusted based on new stake deposits, withdrawal requests and slashing events.

## Node

A participant in the P2P network. A node connects to other nodes on the P2P network, maintains history and state, can do block production for consensus, all things around execution, serve as an endpoint for client or farmer, etc. Encompasses the various roles like Farmer, Domain Operator, Timekeeper, etc.

## Farmer

A role on the Subspace Network that is responsible for maintaining consensus (safety of the Consensus Chain). A Farmer plots pieces of Archival History to disk, farms the created plot for block rewards, joins the DSN as a node for data retrieval (for syncing nodes, other farmers and returning data to various Clients).

## Domain Operator

A role on the Subspace Network that is responsible for running arbitrary computation on Domains, state transitions, maintaining state (liveness of the Execution Chain).

## Timekeeper
A role on the Subspace Network that is responsible for running Proof-of-Time chain and maintaining the randomness beacon for the Consensus Chain.

## Client

A user of the Subspace Network that interacts with it through a light client like Substrate Connect or other frontend applications. Clients can submit transactions, query state, but don't participate directly in consensus or run full nodes. They rely on nodes like farmers for data retrieval.

## Archiving

An integral part of Dilithium consensus, a process of transforming Blockchain History into Archived History.

## Archived History

The immutable ordered collection of blocks that have been archived and permanently stored in a redundant, verifiable and retrievable way across the DSN. Archived History is the result of the Archiving of blocks that are at a particular depth from the tip of the chain.

## Plotting

An integral part of Dilithium consensus, a process of creating and maintaining plots on disk by Farmers from Archived History. Plots allow efficient proofs of possession and retrievability of Archived History.

## Farming

An integral part of Dilithium consensus, a process of participation in the consensus by solving a puzzle based on the previously created plot (during Plotting). Farmers compete to farm blocks and earn rewards by being the first to solve the puzzle and submit a valid proof.

## Segment

A collection of (potentially partial) blocks of the blockchain history
Specifically in Subspace means two things:
- **Recorded History Segment**: a fixed-size portion of the Blockchain History in a buffer before Archiving. A Recorded History Segment consists of Raw Records.
- **Archived History Segment**: a fixed-size portion of the Archived History. An Archived History Segment is a Recorded History Segment transformed by the Archiving process. An Archived History Segment consists of Pieces. An Archived History Segment can be later turned back into a Recorded History Segment History with Reconstructing process

## Segment Header

A compact header in an Archived History Segment containing the segment index, segment commitment, a pointer to the previous segment header and information about the progress of block archiving.

## Raw Record

A fragment of Blockchain History, the “useful data” for the PoAS consensus protocols before being archived.

## Record

A Raw Record that was transformed and prepared for Archiving.

## Piece

The unit of measurement of Archived History, conceptually a piece of Archived History from which Archived History Segments are composed. Each Piece is composed of Record + Commitment + Witness

## Sector

A collection of encoded Pieces written to disk during Plotting that can be used for Farming. A sector contains encoded Record data from pieces, original piece commitments and witnesses and other metadata about stored pieces. A collection of Sectors comprises a Plot.

## Plot

A collection of Sectors written to disk that can be used for Farming

## Commitment

Specifically in Subspace in the context of Archiving implementation means two things:
- **Record Commitment:** a KZG commitment to blockchain data in a Raw Record
- **Segment Commitment:** a KZG commitment to hashes of all Record Commitments in an Archived History Segment

## Reconstruction

A process of transforming Archived History back into Blockchain History. Specifically, a process of transforming pieces of Archived History, one Archived History Segment at a time, back into blocks of the blockchain history that can be used for starting a new Full Node from genesis.

## SSC    

Short for Subspace Credit, the native token of Subspace Network. While SSC is both integral to and necessary for the operation of the Subspace Network, it is intended as a utility currency to pay for use of the Subspace (i.e., transaction fees, domains leader election, etc.).

## Shannon

A Shannon is the smallest unit of an SSC, equal to $10^{-18}$ SSC. SSCs are divisible up to 18 decimal places to allow for microtransactions.

Shannon is named after Claude Shannon, a mathematician, electrical engineer, and cryptographer known as "the father of information theory". His work was central to the rise of digital computing and laid the foundations for the information age.

## Subspace CLI

A Command Line Interface application automates the tasks of Subspace Farmers and Executors by running an instance of Farmer and Full Node within the same terminal instance
