---
title: Overview
sidebar_position: 1
description: Decoupled Execution Overview
keywords:
    - DecEx
    - Domains
last_update:
  date: 05/01/2024
  author: Saeid Yazdinejad
---

Autonomys Network introduces a decoupled execution framework (DecEx) to resolve the problem of state-bloat. Under this framework, farmers will only confirm the availability of transactions and provide an ordering. At the same time, a secondary network of staked operator nodes will execute the transactions and maintain the resulting chain state. 

DecEx separates the probabilistic process of coming to a consensus over ordering transactions from the deterministic process of executing transactions. Since these roles are now decoupled, we can have different hardware requirements for each node type, allowing us to keep farming lightweight and open to anyone while also providing a foundation for scaling execution both vertically, based on the hardware capabilities of operators, and horizontally, by later partitioning operators into different namespaced execution domains.

In this model, users submit execution transactions directly to operators, who will then pre-validate and batch these transactions into bundles through a (probabilistic) stake-weighted election process. These bundles are then submitted to farmers, who treat them as base-layer transactions. Farmers will only verify the proof-of-election and ensure the data is available before batching bundles into blocks in the usual manner. Execution transactions are then ordered deterministically, using a secure cryptographic shuffle based on the unique PoAS produced by the farmer, mitigating the Miner Extractable Value (MEV). Operators then execute the transactions according to this ordering and produce a deterministic state commitment in the form of an execution receipt. These state commitments are then included in the following bundle, forming a deterministic receipt chain tracked by all farmers within the core protocol. The initial default implementation of DecEX employs an optimistic fraud-proof validation scheme.

While conceptually similar to rollups on Ethereum, such as Optimism, DecEx differs heavily in its protocol implementation. Unlike Ethereum, Autonomys Network does not have a global smart contract execution environment within the core protocol. 

Instead, DecEx is enshrined within the semantics of the core protocol itself. Despite being implemented at the protocol level, DecEx can still provide rollup protocol designers with a flexible framework, which can support any state transition integrity framework for verifying the receipt chain, including optimistic fraud proofs and zero-knowledge validity proofs. DecEx can also currently support any smart contract execution environment that can be implemented within the Substrate framework, such as the Ethereum Virtual Machine (EVM) or WebAssembly (WASM). 

<div align="center">
    <img src="/img/Domain_Chains-light.svg#gh-light-mode-only" alt="Domain_Chains" />
    <img src="/img/Domain_Chains-dark.svg#gh-dark-mode-only" alt="Domain_Chains" />
</div>

## Domains

Domains are the logical extension of our basic decoupled execution framework, taking it from a single monolithic execution environment into a modular and interoperable network of namespaced execution environments. Autonomys Network supports a programmable and configurable notion of namespaced execution environments called domains. Each domain is a programmable layer-two rollup, or application-specific blockchain (app-chain), that relies on the consensus chain for consensus, data availability, and settlement. 

Domains allow builders to easily launch their own network without bootstrapping a new validator set while still receiving shared security and interoperability from the root chain. They aim to make deploying a rollup on Autonomys Network as easy as deploying a smart contract on Ethereum. 
