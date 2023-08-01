---
title: Taxonomy
sidebar_position: 2
description: Domains Taxonomy
keywords:
    - DecEx
    - Domains
---
When compared to other ecosystems, domains are best understood along a spectrum of possible rollup architectures.

## Enshrined Rollups 

Domains are effectively enshrined rollups. An enshrined rollup is a special type of rollup that is directly supported and integrated into the base protocol of the underlying blockchain, ensuring that the rollup's features and functionality are maintained and enforced by the network's consensus rules. This built-in support enhances the rollup's security, interoperability, and adoption while still providing the benefits of a typical rollup, such as increased throughput and reduced transaction fees. 

## Standard Rollups 

While regular rollups on Ethereum are validated through smart contracts, domains are validated by the subspace core protocol itself, making them more similar to parachains on Polkadot. Unlike parachains, which have a monolithic validation model and a permissioned deployment system, domains support a modular validation framework and permissionless deployment process. Unlike Cosmos zones and Avalanche subnets, domains have shared-security and trust-minimized interoperability, since they all settle on the root chain. 

## Sovereign Rollups 

Similar to sovereign rollups on Celestia, domains also leverage the base layer protocol for consensus and data availability, but further extend this model to include a shared settlement layer as the default pattern. This is made possible by allowing operators to re-stake, as originally proposed by Free2Shard and later implemented within the EigenLayer protocol on Ethereum. Unlike Eigenlayer, which is implemented through smart contracts, Subspace enshrines the re-staking model within the semantics of the core protocol. 