---
title: Security
sidebar_position: 5
description: Resistance to attacks
keywords:
    - Consensus
    - Security
    - Attacks
---
<!-- TODO
- Deterring Compression
- Preventing Grinding
- Constraining Simulation
- Handling Equivocation
- Detecting Long-Range Attacks -->

A complex system like the Subspace protocol has many potential attack vectors, some are more general, blockchain related, 
while other are focused on proof of capacity and specifically proof of capacity.  

This page attempts to give an overview of how such attacks are mitigated in the Subspace protocol. There are many things
 to cover, so the reader should be aware that at the current state this page is not exhaustive. Furthermore, the 
presentation mostly highlights the techniques used.
For detailed security analysis please refer to our paper [Dilithium: A Proof-of-Archival-Storage Consensus Protocol for Subspace](https://github.com/subspace/consensus-v2-research-paper)

# Security against general blockchain attacks

## Grinding on block challenges

To prevent grinding on block challenges, we use the proof-of-time outputs to draw unique challenges.

Unlike in proof-of-work-based blockchains, where the "challenge" for block creation comes from the previous block, in 
Subspace this is not the case, as changing the block content does not affect the proof of space validity. Instead, 
challenges are unique (and unpredictable), and are based on the network's proof of time component. In more detail, the 
blockchain progress is based on "timeslots", where each timeslot is associated with a run of the proof of time 
algorithm. We use the algorithm output to draw a block challenge for this timeslot. By design, grinding on proof of 
time is extremely hard.

For more information about the proof of time component see [this page](consensus/pot.md).

## Costless simulation

To mitigate against the costless simulation attack that can lead the attacker to create blocks in a greater proportion 
than the proportion of disk space they pledge to the network, we use correlated randomness.

Subspace uses the c-correlation method, where challenges for 'c' blocks are correlated and deterministic. Using this 
approach, an attacker that tries to simulate many potential forks gains significantly less power, as the ability to 
manoeuvre across these forks becomes more and more limited as 'c' gets larger.

### C-correlation predictability window

Even though the challenges for 'c' blocks are deterministic, since we use proof of time to draw the challenges, they are 
not known in advanced, but only revealed when the correct timeslot arrives (by definition). This prevents potential 
issues, like so-called "bribing attacks", that come with the correlation of block challenges and the predictability 
window associated with c-correlation in general. 

## Long-range attacks

To prevent long-range attacks, we use proof of time as a fundamental component in our consensus protocol.

Attackers that try to bootstrap a competing and longer (i.e. heavier) chain cannot do it without cost, since they must 
show that sufficient time has passed for the lifespan of this fork. In other words, like in proof of work, they must 
spend a significant amount of sequential work in maintaining the attack.

For more information about how proof of time is used see [this page](consensus/pot.md).