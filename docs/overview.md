---
title: Architecture Overview
sidebar_position: 2
description: Overview of the Subspace Network
keywords:
    - Architecture
    - Overview
---

# The Subspace Network Stack
Subspace is a modular blockchain network, divided into a base-layer consensus chain, known as the core protocol, and a nearly unlimited number of secondary execution chains, known as domains. The core protocol manages consensus, data availability, and settlement for transaction bundles, which are executed on their respective domains by operators. Domains are essentially enshrined rollups that can support any conceivable state transition framework and smart contract execution environment.

![ModularStack](../src/Images/Modular_Stack.png)

- App layer allows to build any conceivable application fostering new opportunities in automated transactions and agreements, governance, gaming, and virtual economies. 

- Domains support any state transition framework and execution environment capable of executing code of arbitrary complexity. Domains enable the App layer and integration and interoperability across different blockchains.

- Consensus layer promotes decentralized security and fairness with the Dilithium protocol allowing anyone with an SSD to participate. Designed with scalability in mind it supports high-throughput transaction processing.


## Permissionless Peer-to-peer Network

The Subspace Network is a permissionless peer-to-peer network where any peer can participate as a farmer by storing data and proposing new blocks or as an operator by executing transactions.

The [hardware requirements](https://docs.subspace.network/docs/protocol/cli#system-requirements) for farmers are minimal, requiring only an SSD drive and commodity CPU to participate, making it one of the most decentralized blockchain networks.

Operators are free to choose any infrastructure that meets their performance and cost requirements to run their domains.

## Data Availability

The Consensus layer provides Data Availability through the Dilithium Proof-of-Archival-Storage protocol. The chain data is distributed across the network of farmers who store and serve the blockchain history via the Distributed Storage Network (DSN). 

The DSN ensures all chain data is stored in a load-balanced, fault-tolerant, and efficiently retrievable manner across all farmers.

Farmers are incentivized to store data through block rewards and fees. They do not have to store the blockchain history alongside their plot and can dedicate all of the available space to farming.

## Execution Environment

The Subspace Network decouples consensus from computation by separating transaction execution onto independent domains. Domains can support any conceivable state transition framework and are execution environment agnostic.

As the first execution domain launched with Subspace Network, the Ethereum Virtual Machine (EVM) domain supports running Ethereum smart contracts and executing Ethereum transactions. This allows Ethereum dApps and DeFi protocols to run on Subspace with significantly higher throughput, lower costs, and improved scalability.

## Software Client

The Subspace Network software client open source reference implementation is maintained by Subspace Labs. It is written in Rust based on Substrate and provides a full-featured CLI for farmers and operators to participate in the network.

## Subspace 

We often use the term "Subspace" interchangeably to refer to the entire system including the consensus layer, domains, and distributed storage network as well as the client applications and developer tools built on top. Together this creates an open, scalable and interoperable blockchain infrastructure to power the decentralized applications and services of the future.
