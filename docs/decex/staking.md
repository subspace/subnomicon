---
title: Staking
sidebar_position: 3
description: Operator and farmer staking 
keywords:
    - DecEx
    - Domains
    - Staking
---
The Subspace Network relies on staking from both domain operators and farmers to secure the network and provide resources. Subspace implements a Nominated Proof-of-Stake algorithm where farmers endorse operators who execute transactions and produce blocks. 

Our staking model consists of two tiers:
- Operators stake to gain the right to execute transactions within a domain and produce blocks. They are responsible for validating and executing transactions, producing execution receipts, applying state transitions and earn rewards for their work. The operator's chances to be elected as a slot leader are weighted by stake. Operators can be nominated by farmers and currently each operator can have up to 256 nominators.
- Farmers earn rewards proportional to their pledged storage. Farmers can nominate operators and back them with their tokens, increasing their stake and chance of being elected as slot leaders. 
<!--We implement a mechanism for farmers to automatically stake their block rewards with nominated operators to maximize yield.-->
Generally speaking, any SSC token holder can stake their tokens by nominating a domain operator, without having to become an operator or farmer themselves.

NPoS allows for virtually all SSC holders to participate, thus maintaining high levels of security by putting more value at stake and allowing more people to earn a yield based on their holdings.

<!-- ![Nomination](../../src/Images/Nomination.png) -->

## Nomination Pools

Operators must stake an amount higher than this domain's minimum stake for a right to participate in the execution and earn execution rewards. An operator's chances to become a slot leader are directly proportional to the percentage of their stake against the total amount staked by all operators of this domain. As such, operators are incentivized to recruit nominators to increase their stake. This means that each domain operator stake acts essentially as a pool for nominators. When registering as an operator, each operator specifies their minimum nominator stake and nomination tax of their pool. The nomination tax is a percentage of the rewards that the operator collects on all rewards paid to nominators, a commission for the operator's work. It is automatically restaked as part of the operator's stake.

Any SSC token holder who has more than the minimum nominator stake may choose to join this operator’s pool by submitting the nomination extrinsic with the deposit amount of SSC they wish to stake. 

1. The amount of deposited SSC is added to the list of pending transfers within the operator's pool. 
2. At the end of an epoch (currently 100 blocks), the nominator is awarded their shares in the pool. The stake shares are the percentage of the total stake that is allocated to each nominator. The stake shares are used to calculate the share of the operator's rewards that the nominator is entitled to based on the amount they have staked and for how long. The stake shares are calculated as follows:
    1. Compute the operator’s pool end-of-epoch $\text{shares\_per\_ssc}$ as the total number of shares divided by the sum of all stake in the pool and rewards gained during the previous epoch 

    $\text{shares\_per\_ssc} = \text{total\_shares} / (\text{pool\_total\_stake} + \text{rewards}*(1-\text{nomination\_tax}))$.

    2. Assign the $\text{shares}$ to this nominator based on the $\text{shares\_per\_ssc}$ of the pool 
    
    $\text{shares} = \text{deposit\_amount} * \text{shares\_per\_ssc}$.

    3. The $\text{deposit\_amount}$ is added to $\text{pool\_total\_stake}$ of the operator pool and domain’s total stake.
    4. The $\text{shares}$ of this nominator are added to $\text{total\_shares}$ of the pool.

When the nominator decides to withdraw their stake, they submit a withdraw extrinsic. The withdraw extrinsic is processed at the end of the epoch and the stake is removed from the operator's pool and the domain's total stake. The nominator is then entitled to the rewards based on the stake shares and the amount of time they have staked.

Operators can also withdraw their stake at any time by submitting a withdraw extrinsic. If their withdrawal leaves their stake below the domain's minimum requirements, the operator will be removed from the domain and their stake and the stakes of all nominators will be returned to their wallets.

### Example

Operator $O$ has staked 100 SSC and registered as an operator with minimum nominator stake of 10 SSC and nomination tax of 5%. Operator $O$ has 2 nominators $N_1$ and $N_2$ each staked 50 SSC. Initially $\text{shares\_per\_ssc} = 1$, so $O$ gets 100 shares, and $N_1$ and $N_2$ each get 50 shares and $\text{total\_shares}=100+50+50=200$. 

In the next epoch, the pool has earned 10 SSC of rewards, and the operator took 5% of the rewards as commission (0.5 SSC). The pool end-of-epoch $\text{shares\_per\_ssc}$ is now $200/(200 + 10 * (1-0.05)) = 0.954654$. If a new nominator $N_3$ stakes 30 SSC, the $\text{shares}$ they will get is $(30 * 0.954654) = 28$.

Suppose after some time $\text{shares\_per\_ssc}$ value of this pool becomes 0.9. If $N_1$ wants to withdraw 20 SSC, the corresponding shares will be deducted from their stake and the pool's total stake based on $\text{shares\_per\_ssc} = 0.9$. After withdrawal, $N_1$'s remaining shares are $50-20*0.9=32$. Because of the time $N_1$ has staked, the price of their shares has increased, so they they only had to "sell" 18 shares to get 20 SSC back, instead of 20 shares.

The example is intended for illustration, the actual calculation is performed with shannons ($1 \text{SSC} = 10^{18}\  \text{shannons}$).

## Power Balance 

Farmers who have earned storage rewards nominate operators to execute transactions. This nomination system balances the power between farmers and operators, and both parties share the rewards and the potential penalties (slashing). Farmer-nominated operators get a higher chance to produce blocks proportional to the amount of stake backing them, thus, higher revenues. Farmers have the power to nominate operators they trust to execute transactions properly. On the other hand, operators compete to be nominated by providing good service, maintaining a good reputation within the community, and having reasonable commission. 
Farmers also retain the power to withdraw their nominations at any time, ensuring operators remain accountable.

This two-tiered structure provides robust security guarantees. By enabling the consolidation of vast quantities of stake — far exceeding the SSC holdings of any individual party — it creates significant barriers for malicious actors trying to elect dishonest operators. Gaining the necessary backing requires building a considerable reputation, making it challenging for adversaries. Additionally, attacking the system would be prohibitively expensive, leading to large amounts of stake slashed. We anticipate that a substantial portion of the SSC supply will be staked in the NPoS system at any time.
