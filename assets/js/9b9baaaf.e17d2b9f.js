"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[438],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>d});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(o),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return o?n.createElement(f,r(r({ref:t},h),{},{components:o})):n.createElement(f,r({ref:t},h))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6005:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const i={title:"Proof-of-Time",sidebar_position:5,description:"Proof-of-Time consensus component",keywords:["Consensus","randomness","challenge"]},r=void 0,s={unversionedId:"consensus/pot",id:"consensus/pot",title:"Proof-of-Time",description:"Proof-of-Time consensus component",source:"@site/docs/consensus/pot.md",sourceDirName:"consensus",slug:"/consensus/pot",permalink:"/docs/consensus/pot",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Proof-of-Time",sidebar_position:5,description:"Proof-of-Time consensus component",keywords:["Consensus","randomness","challenge"]},sidebar:"tutorialSidebar",previous:{title:"Farming",permalink:"/docs/consensus/consensus/farming"},next:{title:"Security",permalink:"/docs/consensus/security"}},l={},c=[{value:"Long-range attack",id:"long-range-attack",level:2},{value:"Availability and Unpredictability",id:"availability-and-unpredictability",level:2},{value:"Timekeeping",id:"timekeeping",level:2},{value:"Randomness Beacon",id:"randomness-beacon",level:2},{value:"Delay Function Choice",id:"delay-function-choice",level:2}],h={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In addition to the Proof-of-Space component described in the previous section, Dilithium is secured by a Proof-of-Time (PoT) component. The chosen PoT algorithm is sequential AES, tuned for 1 second per proof. PoT is a measure against long-range attacks, and addresses unpredictability and dynamic availability issues."),(0,a.kt)("p",null,"The permissionless Proof-of-Work (PoW) used by Bitcoin remains the most robust consensus method in decentralized systems. However, mining requires massive energy expenditure to brute-force hash solutions, which has led to the introduction of various alternative consensus mechanisms. When transitioning to energy-efficient proof systems, like Proof-of-Stake and Proof-of-Space, however, several issues arise. "),(0,a.kt)("h1",{id:"design-challenges"},"Design challenges"),(0,a.kt)("h2",{id:"long-range-attack"},"Long-range attack"),(0,a.kt)("p",null,"Unlike in Proof-of-Work, the process of block production in Proof-of-Stake and Proof-of-Space-based\nblockchains is not physically constrained. This makes such protocols vulnerable to a ",(0,a.kt)("em",{parentName:"p"},"long-range attack"),', where an attacker can produce, very quickly, an alternative chain all the way to the current time, and this chain can potentially be heavier than the current "canonical" chain.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/img/Long_Range_Attack-light.svg#gh-light-mode-only",alt:"Long_Range_Attack"}),(0,a.kt)("img",{src:"/img/Long_Range_Attack-dark.svg#gh-dark-mode-only",alt:"Long_Range_Attack"})),(0,a.kt)("p",null,"To perfrm a long-range attack, an adversary needs to control enough resources at some point of chain life to rewrite a significant portion of the chain history. In PoW protocols like Bitcoin, this requires controlling over 50% of the total network hashrate for a sustained period of time which is infeasible in practice. However, long-range attacks remain a serious threat in alternative consensus protocols that do not rely on Proof-of-Work."),(0,a.kt)("p",null,"Let's show how a Proof-of-Space blockchain can be vulnerable to long-range attacks. Similar attack applies to Proof-of-Stake.\nSuppose in the first year of the blockchain's operation, all farmers were honest and have collectively pledged 100TB of storage. Now, suppose by the second year the total storage pledged reached 1PB, out of which an adversary has dedicated 200TB worth of storage. At no point does an adversary control more than 20% of storage, which is way less than a majority. However, using his 200TB, an adversary could rewrite the past year's history by participating in all past lotteries to win blocks back to the genesis and then grow a chain instantaneously from the genesis to surpass the current longest chain. This is possible because the adversary's resources are enough to win a disproportionately large number of past lotteries compared to his share of total storage. Such a long-range rewrite seriously threatens the security and immutability of blockchain history."),(0,a.kt)("p",null,"On the other hand, in PoW this attack is prevented as it takes a long time to mine an alternative chain from the past. Thus, PoW enforces an arrow of time, where it is not practical to \u201cgo back in time\u201d (unless the attacker has more than 50% of the current hashrate). This property is key to tolerating a fully dynamic honest and adversarial participation."),(0,a.kt)("h2",{id:"availability-and-unpredictability"},"Availability and Unpredictability"),(0,a.kt)("p",null,"Alternative proof systems, including Proof-of-Stake and Proof-of-Space, strive for certain important features of PoW, like dynamic availability and unpredictability."),(0,a.kt)("p",null,"Dynamic availability in blockchains refers to the capacity of the system to maintain robust operation in environments where nodes may join or leave dynamically. The permissionless PoW remains the most robust method for achieving consistent availability and unpredictability in a decentralized system. Bitcoin has been continuously available for over a decade despite an always varying hashrate due to miners joining and leaving the network. "),(0,a.kt)("p",null,"In this setting, unpredictability refers to the inability to predict who will get to propose the next block. Unpredictability of block proposers is important for the security and liveness of the network. However, protocols using generic verifiable random functions to elect block proposers usually do not achieve this property at the same level as in PoW, and may suffer from a long predictability window of block challenges."),(0,a.kt)("h1",{id:"subspace-approach"},"Subspace Approach"),(0,a.kt)("p",null,"Subspace uses Proof-of-Time to a form a separate Proof-of-Time chain. The Proof-of-Space and Proof-of-Time chains are inter-connected, preventing long-range attacks. Additionally, challenges for block farming are based on the PoT outputs, which guarantee that the challenges, hence the block proposers, are not predictable."),(0,a.kt)("p",null,'Subspace\'s Proof-of-Time component addresses long-range attacks by enforcing an arrow of time similar to PoW. PoT guarantees that a certain amount of wall-clock time must elapse between block proposals, preventing an adversary from rewriting history by "going back in time". Similar to PoW, Proof-of-Time is constrained physically, however it is not parallelizable (technically, it is proof of ',(0,a.kt)("em",{parentName:"p"},"sequential")," work). We prevent the aforementioned attack by integrating the blockchain with a Proof-of-Time process. The attacker can not immediately generate a years-long fork on the spot even with faster hardware."),(0,a.kt)("p",null,"Subspace's consensus obtains a farming dynamic that mimics the random nature of Bitcoin's mining dynamic while only expending a small constant amount of electricity. This is achieved through a Proof-of-Time-based block challenges for the block proposal lottery, based on the paper ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2010.08154"},"PoSAT: Proof-of-Work Availability and Unpredictability, without the Work")," by Soubhik Deb, Sreeram Kannan and David Tse. It ensures the fairness of the farming process to all participants through complete unpredictability of who will get to propose a block next. This unpredictability is at the same level as PoW protocols and is stronger than in the protocols using verifiable random functions."),(0,a.kt)("p",null,"The elapsed time guarantee is achieved by iterative evaluation of an inherently sequential function. The output of such a function is unpredictable and is used to build a randomness beacon for block challenges. "),(0,a.kt)("h2",{id:"timekeeping"},"Timekeeping"),(0,a.kt)("p",null,"For the task of running the time-chain, Subspace introduces a new role for nodes called Timekeepers. Timekeepers are responsible for evaluating the delay function and announcing the outputs to other nodes. Anyone can become a Timekeeper as long as they have a sufficiently powerful CPU to be able to evaluate the delay function within the target time slot duration of 1 second. A timekeeper can also be a farmer and participate in block production or an operator executing computation on a domain. "),(0,a.kt)("p",null,"A single honest timekeeper is sufficient for the security of the protocol, but for robustness and decentralization there should be multiple timekeepers running in parallel. We encourage interested participants to run the timekeeper component on their nodes to ensure the security and decentralization of the protocol. Domain operators may be more suited for the task since they likely already have powerful hardware."),(0,a.kt)("p",null,"The Proof-of-Time chain starts at the genesis time of the Subspace consensus chain. The input to the first slot is a random seed which will be publicly announced at launch to ensure equal opportunity. For each subsequent slot, the output of the previous slot serves as the input. By chaining the outputs, the timekeepers enforce sequentiality and prevent skipping ahead in time."),(0,a.kt)("h2",{id:"randomness-beacon"},"Randomness Beacon"),(0,a.kt)("p",null,"The fact that we have a sequence of random values coming from the Proof-of-Time evaluation allows us to use it\nas a source of randomness for block challenges. This is an additional advantage of our Proof-of-Time design, as other non-PoW protocols without Proof-of-Time suffer from predictability of the block challenge. Since we target a block challenge every second, we can set the delay function evaluation to output a proof every second. Then for every time slot, timekeepers will evaluate the delay function for a set number of iterations to generate fresh global randomness. They then announce the output to the network, which is used by farmers to determine the next block proposer."),(0,a.kt)("p",null,"Farmers receive fresh randomness from timekeepers, verify it and scan their plots to see if they contain any chunks of history close enough to the challenge threshold to claim the block. Farmers with the correct chunks provide a proof-of-space for those, propose a block and earn rewards. The randomness is revealed a few slots in advance to ensure every farmer on the network has had enough time to receive it, scan their plots and submit the proof-of-space if they win. The farmers include PoT outputs in the block header, and the PoT chain is persisted in the consensus chain in this way."),(0,a.kt)("p",null,"Every 50 blocks, entropy from the consensus chain is injected back into the PoT chain. The injection takes the farming solution and PoT output from a deep consensus block header as the new input for the delay function. Injection also prevents an adversary from simulating a consensus chain fork without also having to simulate a PoT chain fork. Forks in the consensus chain will result in a different sequence of PoT outputs. Hence, an attacker that forks the chain in some historical point, will have to physically run the PoT algorithm. "),(0,a.kt)("h2",{id:"delay-function-choice"},"Delay Function Choice"),(0,a.kt)("p",null,"Subspace uses repeated AES-128 encryption as an alternative to existing Verifiable Delay Functions (VDFs), such as repeated squaring in groups of unknown order. AES fulfills the requirements of being iterative, non-parallelizable and producing a short, random and verifiable output."),(0,a.kt)("p",null,"Following an extensive study of existing VDF constructions, we chose AES for the iterated function. AES has an advantage of research maturity compared to relatively new VDFs and an extremely efficient hardware and software implementation using hardware acceleration instructions. Based on a joint study with Supranational, we don't expect a significant speedup over the best AES implementation, even with an ASIC."),(0,a.kt)("p",null,"To achieve asymmetric verification time for the AES-based delay function timekeepers publish a set of intermediate checkpoints alongside the output, currently 8, spaced uniformly. Farmers can validate each checkpoint independently and in parallel to reduce overall verification time. Including checkpoints allows other nodes to validate the output ~7 times faster and use ~4x less power than evaluation by leveraging instruction-level parallelism. "),(0,a.kt)("p",null,"The target number of iterations is currently set to ~183 million to achieve approximately 1 second per time slot on high-end CPUs. We will continuosly monitor hardware capabilities and will be adjusting the target to maintain approximately 1 second slots as needed. It is crucial to benchmark the delay function on best available hardware to ensure no one can gain an advantage by evaluating the delay function faster than others to predict future randomness outputs."))}u.isMDXComponent=!0}}]);