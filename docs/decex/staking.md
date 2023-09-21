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
- Operators stake to gain the right to execute transactions within a domain and produce blocks. They are responsible for validating and executing transactions, producing execution receipts, applying state transitions and earn rewards for their work. The operator's chances to be elected as a slot leader are weighted by stake. Operators can be nominated by farmers.
- Farmers earn rewards proportional to their pledged storage. Farmers can nominate operators and back them with their stake, increasing their chance of being elected as slot leaders. 
<!--We implement a mechanism for farmers to automatically stake their block rewards with nominated operators to maximize yield.-->

NPoS allows for virtually all SSC holders to participate, thus maintaining high levels of security by putting more value at stake and allowing more people to earn a yield based on their holdings.

<!-- ![Nomination](../../src/Images/Nomination.png) -->

## Power Balance 

Farmers who have earned storage rewards nominate operators to execute transactions. This nomination system balances the power between farmers and operators, and both parties share the rewards and the potential penalties (slashing). Farmer-nominated operators get a higher chance to produce blocks proportional to the amount of stake backing them, thus, higher revenues. Farmers have the power to nominate operators they trust to execute transactions properly. On the other hand, operators compete to be nominated by providing good service, maintaining a good reputation within the community, and having reasonable commission. 
Farmers also retain the power to withdraw their nominations at any time, ensuring operators remain accountable.

This two-tiered structure provides robust security guarantees. By enabling the consolidation of vast quantities of stake — far exceeding the SSC holdings of any individual party — it creates significant barriers for malicious actors trying to elect dishonest operators. Gaining the necessary backing requires building a considerable reputation, making it challenging for adversaries. Additionally, attacking the system would be prohibitively expensive, leading to large amounts of stake slashed. We anticipate that a substantial portion of the SSC supply will be staked in the NPoS system at any time.
