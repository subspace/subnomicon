---
id: genesis
title: Genesis
sidebar_position: 2
description: Genesis configuration
keywords:
    - Genesis
    - Config
last_update:
  date: 10/13/2023
  author: Dariia Porechna
---

The genesis process of Subspace Network involves the initialization and configuration of the blockchain's starting state. It includes the following steps:

1. **Genesis Configuration**: The genesis process begins with creating a genesis configuration. It defines the initial parameters for the blockchain, such as the consensus parameters, initial balances, boot nodes, network protocol settings, and other configurations.

2. **Creation of the Genesis Block**: The genesis block is created after the configuration is complete and the initial state is defined. Randomly generated data of the size of one segment (128MiB) is attached to the serialized encoding of the genesis block to bootstrap the Archiving phase.

3. **Proof-of-Time Initialization**: The Timekeepers initialize the Proof-of-Time chain and the randomness beacon. The Proof-of-Time chain serves as a global "clock" for the network: the current "time" is the height of the PoT chain. 
It also provides the source of randomness for block production.

Having completed the steps above, we can deem the genesis phase finished. The following steps are necessary to start a functional consensus chain:

4. **Archiving of the First Segment**: The data attached to the genesis block triggers the Archiving of the first segment of the canonical history of the chain. It produces the first 256 pieces and announces them to the DSN.

5. **Initial Plotting**: Farmers create their plots from the newly archived pieces. As soon as plotting is done, they can start farming block rewards.

6. **Block Production**: With the initial plotting complete, the block production begins. Full nodes start syncing the chain and participating in consensus.
