---
title: General Workflow
sidebar_position: 1
description: Domains Workflow
keywords:
    - DecEx
    - Domains
    - Staking
---
 The following is an overview of domain sub-protocols. The existence of domains assumes a live consensus chain with at least one farmer and block production. On its own, the consensus chain will only issue rewards to farmers and allow for balance transfers of SSC. 
    
## Domain Creation
    
The sudo user registers the first domain runtime and uploads its WASM runtime directly into the chain state. 

The sudo user then instantiates the first domain on the previously registered domain runtime. Instantiation includes a genesis config, from which a chainspec and a genesis block for this domain are built. The domain genesis config includes domain name, runtime code and other specific configuration items, such as maximum block size and weight and number of bundles in each slot and block.
    
## Operator Staking
    
After a domain is instantiated, anyone may deposit SSC and stake as an operator of this domain, allowing them to participate in the leader election to produce bundles and execute domain blocks. 
They do this by submitting a registration extrinsic with a staking deposit, targeting the first domain instance. They will be listed in the Operator Registry and eligible to participate in the leader election on the next stake epoch. 
    
## Domain Transactions
    
The users of the first domain may now produce extrinsics (transactions) and submit them to operators on the domain's subnet.

When pre-validating extrinsics, operators only check to ensure the extrinsic is well-formed and that the user can afford the blockspace storage fee. They have yet to attempt to execute the transaction to determine if the execution weight fees can be paid.
    
## Leader Election
    
For each time slot, all registered operators will attempt to solve a VRF puzzle with a success probability defined in the domain genesis config. To do so, they sign the slot challenge and check if the result is below the desired threshold. The operator will gather transactions from the pool and produce a new domain bundle if elected. 
    
## Bundle Production
    
To produce a new bundle, the operator has to include: 
- a proof of election showing that they are a leader for this time slot, 
- an Execution Receipt that either extends or confirms the previous domain block tracked on the consensus chain, 
- all bundle extrinsics that fall within the operator's portion of the extrinsic pool. 
- storage fees for the bundle extrinsics.

The bundle is then broadcast on the consensus chain gossip network. 
    
## Bundle Verification
    
All consensus nodes receiving the bundle will verify that it is well-formed. The bundle header should include a valid proof of election based on the stake distribution for this epoch, and the Execution Receipt should build on the current execution chain block tree for this domain.
Consensus nodes broadcast all valid bundles to their peers and place them within their local extrinsic pool.
    
## Bundle Inclusion in the Consensus Block
    
When a consensus node is elected to produce a new consensus chain block, it will include as many valid domain bundles as will fit into the block and broadcast the block on the consensus network. Other nodes will only accept blocks that include valid bundles. 
    
## Domain Block Execution
    
Given a valid consensus block with at least one domain bundle, the operator may build and execute the corresponding domain block. 
On block execution, each bundle header will be applied to the consensus chain state, and each extrinsic will be added to the domain's execution inbox. 
Extrinsics will be deduplicated, grouped by the sender, and deterministically shuffled to mitigate the ability of operators to extract value from users by re-ordering or inserting extrinsics (MEV). 
The domain block will then be carefully executed, one extrinsic at a time, allowing the operator to produce an Execution Receipt.
    
## Challenging Operators
    
Any node who observes an Execution Receipt within any bundle for any consensus chain block that differs from what they produced locally has detected fraud. They will produce an extrinsic with a fraud proof to handle the fraud. If the fraud proof is valid, it will be included in the consensus chain, which will prune the Execution Receipt in question and all children from the block tree and slash all related operators. Currently, the challenge period is 14400 domain blocks (~1 day).

## Domain Block Fees

When a domain block is out of the challenge period it is considered confirmed and can no longer be disputed. The total fees of the block include all execution and storage fees and tips of all of the transactions included in this block. After a domain block is confirmed, the total fees for this block are applied as follows:

- The total storage fees of the confirmed block are refunded to the operators who authored bundles in this block according to the respective storage sizes of their bundles.
- The total execution fees of the confirmed block are added to the current epoch fees for this domain. The fees are split equally among the pools of operators who have previously submitted the Execution Receipt for this block. The current epoch fees are noted in the Operator Registry until the epoch transition and do not affect the stake distribution yet. All the fees will be auto-staked to the pools' stakes at the end of the current epoch. For more details on staking epochs, see the [Staking](/docs/decex/staking.md#staking-epochs) page.
- Operator will get a cut of all fees earned by their pool as per nomination tax specified in operator’s config at the next epoch transition.
- Operator’s cut will be automatically re-staked to the operator’s stake at next epoch transition. Operator’s shares, total pool shares and total stake will be updated with the corresponding deposit. For an exmaple on shares calculation, see the [Staking](/docs/decex/staking.md#example) page.
- At the next epoch transition the domain applies all changes corresponding to fees, deposits and withdrawals to the total stakes of all registered operators. Note that this only changes the total pool balance, but does not affect shares for any individual nominators.

<div align="center">
    <img src="/img/Domain_Tx_To_Reward-light.svg#gh-light-mode-only" alt="Domain_Tx_To_Reward" />
    <img src="/img/Domain_Tx_To_Reward-dark.svg#gh-dark-mode-only" alt="Domain_Tx_To_Reward" />
</div>
