---
title: Architecture Overview
sidebar_position: 2
description: Overview of the Autonomys Network
keywords:
    - Architecture
    - Overview
last_update:
  date: 05/02/2024
  author: Saeid Yazdinejad
---

Autonomys Network is a modular blockchain network divided into a base-layer consensus chain, known as the core protocol, and a nearly unlimited number of secondary execution chains, known as domains. The core protocol manages consensus, data availability, and settlement for transaction bundles, which operators execute on their respective domains. Domains are essentially enshrined rollups that can support any conceivable state transition framework and smart contract execution environment.

We have often used the term "Subspace" interchangeably to refer to the entire system, including the consensus layer, domains, distributed storage network, client applications, and developer tools built on top. The Autonomys Network implements the Subspace Protocol and together, this creates an open, scalable and interoperable blockchain infrastructure to power the decentralized applications and services of the future.

Autonomys also maintains the Autonomys Network software client open-source [reference implementation](https://github.com/subspace/subspace). It is written in Rust based on Substrate and provides a full-featured CLI for farmers and operators to participate in the network.

## The Autonomys Network Stack

<div align="center">
    <img src="/img/Modular_Stack-light.svg#gh-light-mode-only" alt="Modular_Stack" />
    <img src="/img/Modular_Stack-dark.svg#gh-dark-mode-only" alt="Modular_Stack" />
</div>

- Application layer allows to build any conceivable application fostering new opportunities in automated transactions and agreements, governance, gaming, and virtual economies. 

- Decoupled execution domains support any state transition framework and execution environment capable of executing code of arbitrary complexity. Domains enable the App layer and integration and interoperability across different blockchains.

- Consensus layer promotes decentralized security and fairness with the *Dilithium* protocol, allowing anyone with an SSD to participate. Designed with scalability in mind, it supports high-throughput transaction processing.

## Permissionless Peer-to-peer Network

The Autonomys Network is a permissionless peer-to-peer network where any peer can participate as a farmer by storing data and proposing new blocks or as an operator by executing transactions. This layer is a common ground for communication and data exchange between peers in various roles: farmers, operators, nodes, light clients and others. See the [Node Types and Roles](/docs/network/nodes.md) page for more details on the different participants of the network.

## Consensus Layer

The Consensus layer is the foundation layer, responsible for achieving consensus across all nodes participating in the network. It ensures that there's a single source of truth for the state of the blockchain and that the history of the blockchain is immutable and provides data availability through the *Dilithium* Proof-of-Archival-Storage protocol. 

The chain data is distributed across the network of farmers who store and serve the blockchain history via the Distributed Storage Network (DSN). The DSN ensures all chain data is stored in a load-balanced, fault-tolerant, and efficiently retrievable manner across all farmers.

Farmers are incentivized to store data through block rewards and fees. They do not have to store the blockchain history alongside their plot and can dedicate all available space to farming. The [hardware requirements](https://docs.subspace.network/docs/protocol/cli#system-requirements) for farmers are minimal, requiring only an SSD drive and commodity CPU to participate, one of the lowest barrier to participation than most decentralized blockchain networks.

## Decoupled Execution

The Autonomys Network decouples consensus from computation by separating transaction execution into independent domains. Domains are responsible for executing transactions and smart contract calls. When a user sends a transaction, this layer processes it and updates the domain app-chain state accordingly. Decoupling execution from consensus allows for scalability improvements. It means that execution can be parallelized, optimized, or even sharded independently of the consensus process.

Domains are run by operators, who pledge their more powerful hardware and stake to execution of the domain. They are incentivized through execution fees (similar to gas fees on Ethereum).Operators are free to choose any infrastructure that meets performance and cost requirements to run their domains.

Domains can support any conceivable state transition framework and are execution environment agnostic. As the first execution domain launched with Autonomys Network, the Ethereum Virtual Machine (EVM) domain, Nova, supports running Ethereum smart contracts and executing Ethereum transactions. Nova allows Ethereum dApps and DeFi protocols to run on Autonomys Network with significantly higher throughput, lower costs, and improved scalability.

## Applications

This is the interface layer where decentralized applications (DApps) interact with the blockchain. DApps can send contract calls to the blockchain, which then get executed in the versatile Decoupled Execution layer. Developers can build and deploy applications without worrying about the underlying execution and consensus details. It provides abstraction, making Autonomys more accessible for developers. Applications built atop a modular blockchain stack, can leverage the security, immutability, and decentralization properties of the underlying layers.

Some specialized applications and functionalities we envision built on Autonomys Network include decentralized identity (DID), decentralized autonomous organizations (DAOs), autonomous AI agents, and virtual worlds.
Decentralized Identifiers enable verifiable, self-sovereign digital identities. They are a key building block for many decentralized applications including DAOs, organizations represented by rules encoded as a computer program that is transparent and controlled by shareholders.
Autonomous AI agents can make decisions, execute payments or other tasks based on natural language input of the user. Agents have the potential to abstract away the complexity that has long stood barrier to mass adoption of blockchain technologies.
