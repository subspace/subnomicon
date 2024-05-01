---
id: genesis
title: Genesis
sidebar_position: 2
description: Genesis configuration
keywords:
    - Genesis
    - Config
last_update:
  date: 05/01/2024
  author: Saeid Yazdinejad
---

The genesis process of Autonomys Network involves the initialization and configuration of the blockchain's starting state. It includes the following steps:

1. **Genesis Configuration**: The genesis process begins with creating a genesis configuration. It defines the initial parameters for the blockchain, such as the consensus parameters, initial balances, boot nodes, network protocol settings, and other configurations.

2. **Creation of the Genesis Block**: The genesis block is created after the configuration is complete and the initial state is defined. Randomly generated data of the size of one segment (128MiB) is attached to the serialized encoding of the genesis block to bootstrap the Archiving phase.

3. **Proof-of-Time Initialization**: The Timekeepers initialize the Proof-of-Time chain and the randomness beacon. The Proof-of-Time chain serves as a global "clock" for the network: the current "time" is the height of the PoT chain. 
It also provides the source of randomness for block production.

Having completed the steps above, we can deem the genesis phase finished. The following steps are necessary to start a functional consensus chain:

4. **Archiving of the First Segment**: The data attached to the genesis block triggers the Archiving of the first segment of the canonical history of the chain. It produces the first 256 pieces and announces them to the DSN.

5. **History Seeding**: The developer team will upload to the network an initial archive of useful data, such the whitepaper, archived data of the previous test networks, etc.

6. **Initial Plotting**: Farmers create their plots from the newly archived pieces. As soon as plotting is done, they can start farming blocks.

7. **Block Production**: With the initial plotting complete, the block production begins, however the rewards are not issued. Full nodes start syncing the chain and participating in consensus.

8. **Space Race**: The Space Race is a collaborative effort between the farmers to bootstrap the security of the network. We set a goal of certain amount of space pledged to the network such that it is difficult for a single party to control the majority of it (for example, 8PiB for Gemini-3h). As soon as the goal is reached, the Space Race ends and the block and vote rewards are automatically enabled.

9. **Block Rewards**: The block and vote rewards are issued to the farmers who successfully audit their plots for a block or vote-eligible solution. Both block and vote rewards start at 0.1 tATC and will decrease over time according to the dynamic issuance schedule.
