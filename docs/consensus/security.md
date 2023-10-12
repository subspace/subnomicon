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
while other are focused on Proof-of-Space and specifically Proof-of-Archival-Storage, as used in Subspace.  

This page gives an overview of how such attacks are mitigated in the Subspace protocol. There are many things 
to cover, so the reader should be aware that at the current state this page is not exhaustive. Furthermore, the 
presentation mostly highlights the techniques and methods, without the full technical details.
For detailed security analysis please refer to our paper [Dilithium: A Proof-of-Archival-Storage Consensus Protocol for Subspace](https://github.com/subspace/consensus-v2-research-paper).

# Security against general blockchain attacks

## Grinding on block challenges

To prevent grinding on block challenges, we use the Proof-of-Time outputs to draw unique challenges.

In proof-of-work-based blockchains the "challenge" for block creation comes from the full previous block.
The Subspace protocol cannot follow this approach, as changing the block content does not affect the proof-of-space 
validity. Instead, challenges are unique (and unpredictable), and are based on the network's Proof-of-Time component. 
In more detail, the blockchain progress is based on "time slots", where each slot is associated with a run of the 
Proof-of-Time algorithm. We use the algorithm output to draw a block challenge for this slot. By design, grinding 
on Proof-of-Time is extremely hard.

For more information about the Proof-of-Time component see [this page](consensus/pot.md).

## Costless simulation

To mitigate against the costless simulation attack that can lead the attacker to create blocks in a greater proportion 
than the proportion of disk space they pledge to the network, we use correlated randomness in block challenges.

Subspace uses the c-correlation method, where challenges for 'c' blocks are correlated and deterministic. Using this 
approach, an attacker who tries to simulate many potential forks gains significantly less power, as the ability to 
manoeuvre across these forks becomes more and more limited as 'c' gets larger.

### C-correlation predictability window

Even though the challenges for 'c' blocks are deterministic, since we use Proof-of-Time to draw the challenges, they are 
not known in advanced, but only revealed when the timeslot arrives (by definition). This prevents potential issues, like 
so-called "bribing attacks", that come with the correlation of block challenges and the predictability window associated 
with c-correlation in general. 

## Long-range attacks

To prevent long-range attacks, we use Proof-of-Time as a fundamental component in our consensus protocol.

Attackers that try to bootstrap a competing and longer (i.e. heavier) chain cannot do it without cost, since they must 
show that sufficient time has passed for the lifespan of this fork. In other words, like in Proof-of-Work, they must 
spend a significant amount of sequential work in maintaining the attack.

For more information about how Proof-of-Time is used see [this page](consensus/pot.md).

# Security against attacks on Proof-of-Storage

The masking function that we apply during farmer's plot creation has specific properties that help us in preventing the 
following attacks on the protocol.

## Time-Memory algorithms (plot compression)

We adopt the function described in the work ["Beyond Hellman's Time-Memory Trade-Offs with Applications to Proofs of Space"](https://eprint.iacr.org/2017/893) 
as our masking function. This function is designed such that the gain in trading computation (time) over storage (memory) 
is very small.

## On-the-fly plot creation

Preventing farmers from creating plots on the fly, after seeing the challenge, has two flavors.
First, the masking function is memory hard, which means that creating a plot is constrained by the amount of memory the 
farmer has, as well as the rate of the memory IO operations it can perform.
Secondly, creating plots on demand is not economical, hence not a rational choice. Because of the different resource 
requirements in running the masking function, the cost of running it to simulate some (sufficiently high) amount of 
storage is significantly higher than the cost of purchasing this amount of storage, plotting once (more precisely, 
according to the protocol specification) and maintaining a farmer. In other words, a farmer who is willing to spend the 
cost for on-demand plotting is better off spending this cost on "real" plotting. 