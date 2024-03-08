---
title: Rewards & Fees
sidebar_position: 8
description: Rewards and Fees paid and received by Subspace Network participants
keywords:
    - Rewards
    - Fees
    - Tokenomics
---

All the participants of the Subspace Network are compensated for the work they do to keep the network live and secure. In this context, we define the following terms:
- **Fees**: The payments for transactions on the Subspace Network.
- **Rewards**: The compensation for the work performed by the participants of the Subspace Network via the issuance of the newly minted SSC by the protocol.

Different participants receive their compensation through a combination of the above based on their role.

### Farmers

Currently, farmers receive: 
- fees for the transactions and bundles they include in consensus chain blocks,
- block rewards for the blocks they proposed, issued by the protocol,
- vote rewards issued by the protocol.

### Operators 

Currently, operators are solely earning the fees for domain transactions they execute. Since domain transactions (e.g. EVM contract calls) are usually much more computationally heavy than those performed on the consensus chain (e.g. balance transfers), they are sufficiently expensive to compensate operators fairly for their work. The operators receive the reward for the executed transactions only after the corresponding domain block has cleared the challenge period. For more details, see [Domain Block Fees](/docs/decex/domains/workflow.md#domain-block-fees).

### Nominators

Currently, nominators receive a portion of the fees of the operator they nominated, based on their shares in the operator pool. For more details on how the pool shares and fees are calculated, see [Nomination Pools](/docs/decex/staking.md#nomination-pools).

## Dynamic Issuance

The issuance of the newly minted SSC by the protocol is dynamic and depends on the block height and the recent demand for blockspace.

Initially, farmers receive exactly 0.1 tSSC for the block rewards for the blocks they propose and 0.1 tSSC for votes they submit. Subspace implements a decay function, that will gradually reduce these rewards every block as the chain progresses. Over the long-term, the decrease follows the exponential decay:

$$\text{reference\_subsidy}=\text{initial\_subsidy}*e^{-\text{initial\_subsidy}*(n-\text{decay\_block\_start})/\text{max\_issuance\_tokens}}$$

where $\text{initial\_subsidy}=0.1$ tSSC per block, $n$ is current block height, $\text{decay\_block\_start}=TBA$ is the block when the decay function was activated, and $\text{max\_issuance\_tokens}=100 000 000$ tSSC is the total number of credits to be ever issued by the Gemini-3h testnet protocol for this reward. Both block proposer rewards and vote rewards are computed using the same formula.

This smooth reduction allows for higher rewards for early adopters, gradual increase of the circulating supply in a more controlled manner and an extended lifetime of issuance for the long-term viability of the chain.

On Gemini-3h, the reference subsidy issuance is expected to decay following the curve below. For example, for the first 1 296 000 blocks (~90 days) it starts at 0.1 tSSC per block and decreases as follows:

<div align="center">
    <img src="/img/Gemini3h_Issuance_Decay-light.svg#gh-light-mode-only" alt="Gemini3h_Issuance_Decay" />
    <img src="/img/Gemini3h_Issuance_Decay-dark.svg#gh-dark-mode-only" alt="Gemini3h_Issuance_Decay" />
</div>

Apart from the reference subsidy issuance decay, the rewards for the block proposer are also dynamic based on the demand for blockspace. The subsidy presented above is a reference for the amount issued for an empty block. However, if the chain is seeing blockspace utilization, block proposers are also earning through transaction fees to cover their farming costs, and the protocol will lower the reward issued to the proposer. This allows the protocol to conserve tokens for later issuance in periods of lower demand. 

The demand for blockspace is measured as an exponential moving average of the percentage of the maximum blockspace that is used by the normal transactions over the last 100 blocks, excluding operational transactions like votes and fraud proofs. 

$$\text{blockspace\_utilization} = \frac{\sum encoded\ transaction\ size}{3.75 \text{MiB}}$$

The final formula for the block proposer reward is:

$$\text{proposer reward}=\text{reference\_subsidy}-\min(\text{reference\_subsidy},\text{max\_block\_fees})*\text{blockspace\_utilization}$$

For each block, the protocol decides whether the current cost of storage and demand are high enough to cover the proposer's costs of farming that block. It will lower the issued reference subsidy slightly if fees are not sufficient, and lower significantly if fees are high.

The vote rewards are currently not affected by utilization and earn 90% of the reference subsidy:

$$\text{voter reward}=0.9*\text{reference\_subsidy}$$

The remaining 10% of each vote reward is given to the proposer of the block that includes the vote to incentivize the proposer to include votes.

## Transaction Fees

Each transaction on the Subspace Network has a length and a weight. Length of a transaction is the number of bytes it consumes on the network. Weight of a transaction is the number of picoseconds it takes to execute it by a node with reference hardware.
Subspace Network separates the fees to be paid for a transaction into storage and compute fees. Storage fees are paid by the participants of the Subspace Network for the storage space they consume for including the transaction in a block and eventually archiving it. Compute fees are paid for the computational resources they consume while executing the transaction.

Storage fee depends on the length of the transaction and the amount of available storage on the network. The formula for the storage fee is:

$$\text{storage fee per byte}  = \frac{\text{total credit supply}}{\text{total space pledged}/\text{min replication factor}-\text{history size}} \frac{shannons}{byte}$$ 

$$\text{storage fee} \left(\text{tx}\right) = \text{storage fee per byte}*\text{length(tx)}\ shannons$$

For the purposes of storage fee calculation, the total credit supply consists of all SSC in existence including staked or otherwise locked. The total space pledged to the network is divided by the protocol's minimum replication factor of 50, which ensures that the network is able to reliably store all the transactions that are included in the consensus chain. The history size is the total size of all the blocks in the consensus chain that are archived.

Compute fee depends on the weight of the transaction and the demand on the network. Compute fees for the execution of extrinsics on the consensus chain (e.g., balance transfers) are collected by the block proposer. 
Compute fees for executing transaction bundles on domains are paid to the domain operators who submit the Execution Receipt (ER) containing this bundle (split equally between all operators who submit this ER) after the ER has cleared the challenge period. Subspace implements Polkadot’s [slow adjusting fee](https://research.web3.foundation/Polkadot/overview/token-economics#2-slow-adjusting-mechanism) mechanism. The fee is slightly adjusted every block based on utilization of available block weight by normal extrinsics.

The formula for the compute fee is:

$$\text{compute fee} \left(\text{tx}\right) = \text{adjustment multiplier}*\text{compute fee per weight}*\text{weight(tx)}\ shannons$$
