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
- **Rewards**: The compensation for the work done by the participants of the Subspace Network.
- **Issuance**: The issuance of the newly minted SSC by the protocol.

Different participants receive their compensation through a combination of the above based on their role.

## Farmers

Currently, farmer rewards include: 
- fees for the transactions they include in consensus chain blocks,
- block rewards for the blocks they proposed, issued by the protocol,
- vote rewards issued by the protocol,
- Designated Storage Fund (DSF) subsidy.

## Operators 

Currently, operators are solely rewarded with the fees for domain transactions they execute. Since domain transactions (e.g., EVM contract calls) are usually much more computationally heavy, than those performed on the consensus chain (e.g., balance transfers), they are substantially expensive to compensate operators fairly for their work. The operators receive the reward for the executed transactions only after the corresponding domain block has cleared the challenge period. For more details, see [Domain Block Rewards](/docs/decex/domains/workflow.md#domain-block-rewards).

## Nominators

Currently, nominators receive a portion of the rewards of the operator they nominated, based on their shares in the pool. For more details on how the pool shares and rewards are calculated, see [Nomination Pools](/docs/decex/staking.md#nomination-pools).

## Designated Storage Fund

The purpose of the Designated Storage Fund (DSF) is to ensure that the network can remain incentive compatible in the long-term (i.e. if inflationary token rewards trend towards zero over time), ensuring the history is preserved decades into the future. Currently, 10% of transaction storage fees collected in each block are assigned to the DSF payment, which is retained by the consensus protocol within an on-chain deposit account. This treasury can be seen as a hard-coded smart contract that can only be modified by a consensus protocol upgrade. Each block, a small portion of the entire DSF (currently, 0.01%) is disbursed back to the block proposer.
