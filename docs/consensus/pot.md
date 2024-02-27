---
title: Proof-of-Time
sidebar_position: 5
description: Proof-of-Time consensus component
keywords:
    - Consensus
    - randomness
    - challenge
    - timekeeper
last_update:
  date: 02/06/2024
  author: Dariia Porechna
---
In addition to the Proof-of-Space component described in the previous section, Dilithium is secured by a Proof-of-Time (PoT) component. The chosen PoT algorithm is sequential AES, tuned for 1 second per proof. PoT is a measure against long-range attacks, and addresses unpredictability and dynamic availability issues.

The permissionless Proof-of-Work (PoW) used by Bitcoin remains the most robust consensus method in decentralized systems. However, mining requires massive energy expenditure to brute-force hash solutions, which has led to the introduction of various alternative consensus mechanisms. When transitioning to energy-efficient proof systems, like Proof-of-Stake and Proof-of-Space, however, several issues arise. 

# Design challenges
## Long-range attack

Unlike in Proof-of-Work, the process of block production in Proof-of-Stake and Proof-of-Space-based
blockchains is not physically constrained. This makes such protocols vulnerable to a _long-range attack_, where an attacker can produce, very quickly, an alternative chain all the way to the current time, and this chain can potentially be heavier than the current "canonical" chain.

<div align="center">
    <img src="/img/Long_Range_Attack-light.svg#gh-light-mode-only" alt="Long_Range_Attack" />
    <img src="/img/Long_Range_Attack-dark.svg#gh-dark-mode-only" alt="Long_Range_Attack" />
</div>

To perfrm a long-range attack, an adversary needs to control enough resources at some point of chain life to rewrite a significant portion of the chain history. In PoW protocols like Bitcoin, this requires controlling over 50% of the total network hashrate for a sustained period of time which is infeasible in practice. However, long-range attacks remain a serious threat in alternative consensus protocols that do not rely on Proof-of-Work.

Let's show how a Proof-of-Space blockchain can be vulnerable to long-range attacks. Similar attack applies to Proof-of-Stake.
Suppose in the first year of the blockchain's operation, all farmers were honest and have collectively pledged 100TB of storage. Now, suppose by the second year the total storage pledged reached 1PB, out of which an adversary has dedicated 200TB worth of storage. At no point does an adversary control more than 20% of storage, which is way less than a majority. However, using his 200TB, an adversary could rewrite the past year's history by participating in all past lotteries to win blocks back to the genesis and then grow a chain instantaneously from the genesis to surpass the current longest chain. This is possible because the adversary's resources are enough to win a disproportionately large number of past lotteries compared to his share of total storage. Such a long-range rewrite seriously threatens the security and immutability of blockchain history.

On the other hand, in PoW this attack is prevented as it takes a long time to mine an alternative chain from the past. Thus, PoW enforces an arrow of time, where it is not practical to “go back in time” (unless the attacker has more than 50% of the current hashrate). This property is key to tolerating a fully dynamic honest and adversarial participation.

## Availability and Unpredictability 

Alternative proof systems, including Proof-of-Stake and Proof-of-Space, strive for certain important features of PoW, like dynamic availability and unpredictability.

Dynamic availability in blockchains refers to the capacity of the system to maintain robust operation in environments where nodes may join or leave dynamically. The permissionless PoW remains the most robust method for achieving consistent availability and unpredictability in a decentralized system. Bitcoin has been continuously available for over a decade despite an always varying hashrate due to miners joining and leaving the network. 

In this setting, unpredictability refers to the inability to predict who will get to propose the next block. Unpredictability of block proposers is important for the security and liveness of the network. However, protocols using generic verifiable random functions to elect block proposers usually do not achieve this property at the same level as in PoW, and may suffer from a long predictability window of block challenges.

# Subspace Approach

Subspace uses Proof-of-Time to a form a separate Proof-of-Time chain. The Proof-of-Space and Proof-of-Time chains are inter-connected, preventing long-range attacks. Additionally, challenges for block farming are based on the PoT outputs, which guarantee that the challenges, hence the block proposers, are not predictable.

Subspace's Proof-of-Time component addresses long-range attacks by enforcing an arrow of time similar to PoW. PoT guarantees that a certain amount of wall-clock time must elapse between block proposals, preventing an adversary from rewriting history by "going back in time". Similar to PoW, Proof-of-Time is constrained physically, however it is not parallelizable (technically, it is proof of _sequential_ work). We prevent the aforementioned attack by integrating the blockchain with a Proof-of-Time process. The attacker can not immediately generate a years-long fork on the spot even with faster hardware.

Subspace's consensus obtains a farming dynamic that mimics the random nature of Bitcoin's mining dynamic while only expending a small constant amount of electricity. This is achieved through a Proof-of-Time-based block challenges for the block proposal lottery, based on the paper [PoSAT: Proof-of-Work Availability and Unpredictability, without the Work](https://arxiv.org/abs/2010.08154) by Soubhik Deb, Sreeram Kannan and David Tse. It ensures the fairness of the farming process to all participants through complete unpredictability of who will get to propose a block next. This unpredictability is at the same level as PoW protocols and is stronger than in the protocols using verifiable random functions.

The elapsed time guarantee is achieved by iterative evaluation of an inherently sequential function. The output of such a function is unpredictable and is used to build a randomness beacon for block challenges. 

## Timekeeping

For the task of running the time-chain, Subspace introduces a new role for nodes called Timekeepers. Timekeepers are responsible for evaluating the delay function and announcing the outputs to other nodes. Anyone can become a Timekeeper as long as they have a powerful CPU of last generation that is able to evaluate the delay function within the target time slot duration of 1 second. 

A single honest timekeeper is sufficient for the security of the protocol, but for robustness and decentralization there should be multiple timekeepers running concurrently. We encourage interested participants to run the timekeeper component on their nodes to ensure the security and decentralization of the protocol. There is no explicit economic incentive to running a timekeeper, however, independent timekeeping contributes to stable block production, which benefits every participant of the network.

While a timekeeper can also be a farmer and participate in block production or an operator executing computation on a domain, operators are likely more suited for the task since they already have powerful hardware. Timekeeping will fully consume a dedicated CPU core. Ideally, it should be run on a separate last generation machine with no other processes interfering with the timekeeping. This setup will allow best performance and security of the protocol against malicious timekeepers.

The Proof-of-Time chain starts at the genesis time of the Subspace consensus chain. The input to the first slot is a random seed which will be publicly announced at launch to ensure equal opportunity. For each subsequent slot, the output of the previous slot serves as the input. By chaining the outputs, the timekeepers enforce sequentiality and prevent skipping ahead in time.

## Randomness Beacon

The fact that we have a sequence of random values coming from the Proof-of-Time evaluation allows us to use it
as a source of randomness for block challenges. This is an additional advantage of our Proof-of-Time design, as other non-PoW protocols without Proof-of-Time suffer from predictability of the block challenge. Since we target a block challenge every second, we can set the delay function evaluation to output a proof every second. Then for every time slot, timekeepers will evaluate the delay function for a set number of iterations to generate fresh global randomness. They then announce the output to the network, which is used by farmers to determine the next block proposer.

<div align="center">
    <img src="/img/PoT_Challenges-light.svg#gh-light-mode-only" alt="Proof_of_Time_Challenges" />
    <img src="/img/PoT_Challenges-dark.svg#gh-dark-mode-only" alt="Proof_of_Time_Challenges" />
</div>

Farmers receive fresh randomness from timekeepers, verify it and scan their plots to see if they contain any chunks of history close enough to the challenge threshold to claim the block. Farmers with the correct chunks provide a proof-of-space for those, propose a block and earn rewards. The randomness is revealed a few slots in advance to ensure every farmer on the network has had enough time to receive it, scan their plots and submit the proof-of-space if they win. The farmers include PoT outputs in the block header, and the PoT chain is persisted in the consensus chain in this way.

Every 50 blocks, entropy from the consensus chain is injected back into the PoT chain. The injection takes the farming solution and PoT output from a deep consensus block header as the new input for the delay function. Injection also prevents an adversary from simulating a consensus chain fork without also having to simulate a PoT chain fork. Forks in the consensus chain will result in a different sequence of PoT outputs. Hence, an attacker that forks the chain in some historical point, will have to physically run the PoT algorithm. 

## Delay Function Choice

Subspace uses repeated AES-128 encryption as an alternative to existing Verifiable Delay Functions (VDFs), such as repeated squaring in groups of unknown order. AES fulfills the requirements of being iterative, non-parallelizable and producing a short, random and verifiable output.

Following an extensive study of existing VDF constructions, we chose AES for the iterated function. AES has an advantage of research maturity compared to relatively new VDFs and an extremely efficient hardware and software implementation using hardware acceleration instructions. Based on a joint study with Supranational, we don't expect a significant speedup over the best AES implementation, even with an ASIC.

To achieve asymmetric verification time for the AES-based delay function timekeepers publish a set of intermediate checkpoints alongside the output, currently 8, spaced uniformly. Farmers can validate each checkpoint independently and in parallel to reduce overall verification time. Including checkpoints allows other nodes to validate the output ~7 times faster and use ~4x less power than evaluation by leveraging instruction-level parallelism. 

<div align="center">
    <img src="/img/Proof_of_Time-light.svg#gh-light-mode-only" alt="Proof_of_Time" />
    <img src="/img/Proof_of_Time-dark.svg#gh-dark-mode-only" alt="Proof_of_Time" />
</div>

The target number of iterations is currently set to ~183 million to achieve approximately 1 second per time slot on high-end CPUs. We will continuosly monitor hardware capabilities and will be adjusting the target to maintain approximately 1 second slots as needed. It is crucial to benchmark the delay function on best available hardware to ensure no one can gain an advantage by evaluating the delay function faster than others to predict future randomness outputs.

## Security Considerations

There are several security considerations to take into account when designing a randomness beacon in a decentralized protocol. The security claim for Subspace PoT is the following: 

As long as there is at least one honest timekeeper online at all times, and network delay is bounded, all honest nodes can determine the correct PoT output, and hence the correct slot challenge.

It is achieved by carefully taking care of the following aspects:

1. **Sequentiality**: Subspace PoT beacon achieves sequentiality by chaining the slot outputs. Each output is used as an input to the delay function for the next slot.

2. **Network delay**: When a farmer receives a PoT output for the challenge, they immediately start auditing the plot and proving if they have a winning solution. However, they are only allowed to submit the solution after $r$ slots. This lag parameter is currently set to 4 slots, and can be tuned so that there is enough time to propagate, verify the PoT output and prove a solution on common farmer hardware. Increasing $r$ allows an honest node more time to solve for a challenge, but also gives a malicious node more time to attempt to plot on-the-fly.

3. **Faster timekeeper**: An attacker who has access to a timekeeper hardware that is able to run PoT faster then any other timekeeper on the network presents several security risks and Subspace addresses them via a few mechanisms. First, the speed gains are not cumulative over time: because of entropy injection every 50 blocks (~5 min) the attackers advantage is reset. Second, if a faster timekeeper gossips their PoT to the network, other timekeepers will continuously sync up and catch up to them. If a faster timekeeper withholds PoT and only uses it to produce blocks on their own, they do have some prediction window (depending how much faster they are), but nevertheless they either need significant percentage of network's disk storage or attempt on-the-fly plotting, which is also hard, as described on the [Security](/docs/consensus/security.md#on-the-fly-plot-creation) page. A faster PoT also makes a long-range attack more feasible, but the attacker still requires as much storage as the average honest storage to pull it off as described above. 

    The network will continuosly monitor the rate of PoT progression in comparison to real wall-clock time to detect the possibility of a faster timekeeper existence.

4. **Difficulty adjustment**: The iteration count for the PoT delay function is benchmarked to be as close to the real wall-clock time as possible. With improvements in hardware, faster honest timekeepers can be deployed onto the network and iteration count increased to match the real wall-clock time.

5. **Predictability**: Slot challenges can only be predicted in advance if the attacker has a faster timekeeper and even then it only lasts until the next injection.

6. **Biasing randomness**: Subspace PoT does not allows the attacker to control the slot challenges of the next time interval by releasing/withholding their blocks from the current interval via the injection mechanism. See, [Ouroboros Praos](https://eprint.iacr.org/2017/573.pdf) for a security proof.
