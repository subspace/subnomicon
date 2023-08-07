---
title: General Workflow
sidebar_position: 3
description: Domains Workflow
keywords:
    - DecEx
    - Domains
    - Staking
---
 The following is an overview of domains sub-protocols. The existence of domains assumes a live consensus chain with at least one farmer and block production. On its own, the consensus chain will only issue rewards to farmers and allow for balance transfers of SSC. 
    
## Domain Creation
    
The sudo user registers the first domain runtime and uploads its WASM runtime directly into the chain state. 

The sudo user then instantiates the first domain on the previously registered domain runtime. This includes a genesis config, from which a chainspec and a genesis block for this domain is built. The domain genesis config includes domain name, runtime code and other specific configuration items, such as maximum block size and weight and number of bundles in each slot and block.
    
## Operator Staking
    
After a domain is first instantiated, anyone may deposit SSC and stake as an operator of this domain, allowing them to participate in the leader election to produce bundles and execute domain blocks. 
They do this by submitting a registration extrinsic targeting the first domain instance along with the minimum required staking deposit. On the next stake epoch they will be eligible to participate in the leader election. 

    
## Domain Transactions
    
The users of the first domain may now produce extrinsics (transactions) and submit them to operators on the domain’s subnet.

When pre-validating extrinsics, operators only check to ensure the extrinsic is well-formed and that the user can afford the blockspace storage fee. They do not attempt to execute the transaction yet to determine if the execution weight fees can be paid.
    
## Leader Election
    
For each time slot, all registered operators will attempt to solve a VRF puzzle with success probability defined in the domain genesis config. To do so, they sign the slot challenge and check if the result is below the desired threshold. If elected, the operator will gather transactions from the pool and produce a new domain bundle. 
    
## Bundle Production
    
To produce a new bundle, the operator has to include: 
- a proof of election showing that they are a leader for this time slot, 
- an Execution Receipt that either extends or confirms the previous domain block tracked on the consensus chain, 
- all bundle extrinsics that fall within the Operator's portion of the extrinsic pool. 

The bundle is then broadcast on the consensus chain gossip network. 
    
## Bundle Verification
    
All consensus nodes who receive the bundle will first verify that it is well-formed. The bundle header should include a valid proof of election based on the stake distribution for this epoch and the Execution Receipt should builds on the current execution chain block tree for this domain.
Consensus nodes broadcast all valid bundles to their peers and place the bundles within their local extrinsic pool.
    
## Bundle Inclusion in the Consensus Block
    
When a consensus node is elected to produce a new consensus chain block, they will include as many valid domain bundles as will fit into the block and broadcast the block on the consensus network. Other nodes will only accept blocks which include valid bundles. 
    
## Domain Block Execution
    
Given a valid consensus block with at least one domain bundle, the domain operator may now build and execute the resulting domain block. 
On block execution, each bundle header will be applied to the consensus chain stateand each extrinsic will be added to domain’s execution_inbox. 
Extrinsics will be deduplicated, grouped by sender, and deterministically shuffled to mitigate the ability for operators to extract value from users by re-ordering or inserting their own extrinsics (MEV). 
The domain block with then be carefully executed, one extrinsic at a time, allowing the operator to produce an Execution Receipt.
    
## Challenging Operators
    
Any node who observes an Execution Receipt within any bundle for any consensus chain block which differs from what they produced locally has detected fraud. To handle the fraud they will produce an extrinsic with a fraud proof. If the fraud proof is valid, it will be included in the consensus chain, which will prune the Execution Receipt in question and all children from the block tree and slash all related operators. 
    