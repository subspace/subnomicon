---
title: Architecture Overview
sidebar_position: 2
description: Overview the Subspace Network
keywords:
    - Architecture
    - Overview
---

# The Subspace Network Stack
Subspace is a modular blockchain network, divided into a base-layer root chain, known as the core protocol, and a nearly unlimited number of secondary execution chains, known as domains. The core protocol manages consensus, data availability, and settlement for transaction bundles, which are executed on their respective domains by operators. Domains are essentially enshrined rollups that can support any conceivable state transition framework and smart contract execution environment.

![ModularStack](../src/Images/Modular_Stack.png)

- App layer allows to build any conceivable application fostering new opportunities in automated transactions and agreements, governance, gaming, and virtual economies.

- Domains support any state transition framework and smart contract execution environment enabling the App layer and integration and interoperability across different blockchains.

- Consensus layer promotes decentralized security and fairness with the Dilithium protocol allowing anyone with an SSD to participate. Designed with scalability in mind it supports high-throughput transaction processing.

## Permissionless Peer-to-peer Network

The Subspace Netwok is a permissionless peer-to-peer network where any peer can participate as a farmer by storing data and proposing new blocks or as an operator by executing transactions.

The [hardware requirements](https://docs.subspace.network/docs/protocol/cli#system-requirements) for farmers are minimal, requiring only an SSD drive and commodity CPU to participate, making it one of the most decentralized blockchain networks.

Operators are free to choose any infrastructure that meets their performance and cost requirements to run their domains.

## Data Availability
The DSN ensures all chain is stored in a load-balanced, fault-tolerant, and efficiently retrievable manner across all farmers.

Farmers are incentivized to store data through block rewards and fees. They do not have to store the blockchain history alongside their plot and can dedicate all of the available space to farming.

## EVM

As the first execution domain launched with Subspace Network, the EVM domain supports running Ethereum smart contracts and executing Ethereum transactions. This allows Ethereum dApps and DeFi protocols to run on Subspace with significantly higher throughput, lower costs, and improved scalability.