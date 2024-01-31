"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,f=h["".concat(s,".").concat(p)]||h[p]||u[p]||a;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const a={title:"General Workflow",sidebar_position:1,description:"Domains Workflow",keywords:["DecEx","Domains","Staking"]},r=void 0,l={unversionedId:"decex/domains/workflow",id:"decex/domains/workflow",title:"General Workflow",description:"Domains Workflow",source:"@site/docs/decex/domains/workflow.md",sourceDirName:"decex/domains",slug:"/decex/domains/workflow",permalink:"/docs/decex/domains/workflow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"General Workflow",sidebar_position:1,description:"Domains Workflow",keywords:["DecEx","Domains","Staking"]},sidebar:"tutorialSidebar",previous:{title:"Domains",permalink:"/docs/category/domains"},next:{title:"Nova EVM",permalink:"/docs/decex/domains/evm"}},s={},c=[{value:"Domain Creation",id:"domain-creation",level:2},{value:"Operator Staking",id:"operator-staking",level:2},{value:"Domain Transactions",id:"domain-transactions",level:2},{value:"Leader Election",id:"leader-election",level:2},{value:"Bundle Production",id:"bundle-production",level:2},{value:"Bundle Verification",id:"bundle-verification",level:2},{value:"Bundle Inclusion in the Consensus Block",id:"bundle-inclusion-in-the-consensus-block",level:2},{value:"Domain Block Execution",id:"domain-block-execution",level:2},{value:"Challenging Operators",id:"challenging-operators",level:2},{value:"Domain Block Fees",id:"domain-block-fees",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following is an overview of domain sub-protocols. The existence of domains assumes a live consensus chain with at least one farmer and block production. On its own, the consensus chain will only issue rewards to farmers and allow for balance transfers of SSC. "),(0,i.kt)("h2",{id:"domain-creation"},"Domain Creation"),(0,i.kt)("p",null,"The sudo user registers the first domain runtime and uploads its WASM runtime directly into the chain state. "),(0,i.kt)("p",null,"The sudo user then instantiates the first domain on the previously registered domain runtime. Instantiation includes a genesis config, from which a chainspec and a genesis block for this domain are built. The domain genesis config includes domain name, runtime code and other specific configuration items, such as maximum block size and weight and number of bundles in each slot and block."),(0,i.kt)("h2",{id:"operator-staking"},"Operator Staking"),(0,i.kt)("p",null,"After a domain is instantiated, anyone may deposit SSC and stake as an operator of this domain, allowing them to participate in the leader election to produce bundles and execute domain blocks.\nThey do this by submitting a registration extrinsic with a staking deposit, targeting the first domain instance. They will be listed in the Operator Registry and eligible to participate in the leader election on the next stake epoch. "),(0,i.kt)("h2",{id:"domain-transactions"},"Domain Transactions"),(0,i.kt)("p",null,"The users of the first domain may now produce extrinsics (transactions) and submit them to operators on the domain's subnet."),(0,i.kt)("p",null,"When pre-validating extrinsics, operators only check to ensure the extrinsic is well-formed and that the user can afford the blockspace storage fee. They have yet to attempt to execute the transaction to determine if the execution weight fees can be paid."),(0,i.kt)("h2",{id:"leader-election"},"Leader Election"),(0,i.kt)("p",null,"For each time slot, all registered operators will attempt to solve a VRF puzzle with a success probability defined in the domain genesis config. To do so, they sign the slot challenge and check if the result is below the desired threshold. The operator will gather transactions from the pool and produce a new domain bundle if elected. "),(0,i.kt)("h2",{id:"bundle-production"},"Bundle Production"),(0,i.kt)("p",null,"To produce a new bundle, the operator has to include: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a proof of election showing that they are a leader for this time slot, "),(0,i.kt)("li",{parentName:"ul"},"an Execution Receipt that either extends or confirms the previous domain block tracked on the consensus chain, "),(0,i.kt)("li",{parentName:"ul"},"all bundle extrinsics that fall within the operator's portion of the extrinsic pool. "),(0,i.kt)("li",{parentName:"ul"},"storage fees for the bundle extrinsics.")),(0,i.kt)("p",null,"The bundle is then broadcast on the consensus chain gossip network. "),(0,i.kt)("h2",{id:"bundle-verification"},"Bundle Verification"),(0,i.kt)("p",null,"All consensus nodes receiving the bundle will verify that it is well-formed. The bundle header should include a valid proof of election based on the stake distribution for this epoch, and the Execution Receipt should build on the current execution chain block tree for this domain.\nConsensus nodes broadcast all valid bundles to their peers and place them within their local extrinsic pool."),(0,i.kt)("h2",{id:"bundle-inclusion-in-the-consensus-block"},"Bundle Inclusion in the Consensus Block"),(0,i.kt)("p",null,"When a consensus node is elected to produce a new consensus chain block, it will include as many valid domain bundles as will fit into the block and broadcast the block on the consensus network. Other nodes will only accept blocks that include valid bundles. "),(0,i.kt)("h2",{id:"domain-block-execution"},"Domain Block Execution"),(0,i.kt)("p",null,"Given a valid consensus block with at least one domain bundle, the operator may build and execute the corresponding domain block.\nOn block execution, each bundle header will be applied to the consensus chain state, and each extrinsic will be added to the domain's execution inbox.\nExtrinsics will be deduplicated, grouped by the sender, and deterministically shuffled to mitigate the ability of operators to extract value from users by re-ordering or inserting extrinsics (MEV).\nThe domain block will then be carefully executed, one extrinsic at a time, allowing the operator to produce an Execution Receipt."),(0,i.kt)("h2",{id:"challenging-operators"},"Challenging Operators"),(0,i.kt)("p",null,"Any node who observes an Execution Receipt within any bundle for any consensus chain block that differs from what they produced locally has detected fraud. They will produce an extrinsic with a fraud proof to handle the fraud. If the fraud proof is valid, it will be included in the consensus chain, which will prune the Execution Receipt in question and all children from the block tree and slash all related operators. Currently, the challenge period is 14400 domain blocks (~1 day)."),(0,i.kt)("h2",{id:"domain-block-fees"},"Domain Block Fees"),(0,i.kt)("p",null,"When a domain block is out of the challenge period it is considered confirmed and can no longer be disputed. The total fees of the block include all execution and storage fees and tips of all of the transactions included in this block. After a domain block is confirmed, the total fees for this block are applied as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The total storage fees of the confirmed block are refunded to the operators who authored bundles in this block according to the respective storage sizes of their bundles."),(0,i.kt)("li",{parentName:"ul"},"The total execution fees of the confirmed block are added to the current epoch fees for this domain. The fees are split equally among the pools of operators who have previously submitted the Execution Receipt for this block. The current epoch fees are noted in the Operator Registry until the epoch transition and do not affect the stake distribution yet. All the fees will be auto-staked to the pools' stakes at the end of the current epoch. For more details on staking epochs, see the ",(0,i.kt)("a",{parentName:"li",href:"/docs/decex/staking#staking-epochs"},"Staking")," page."),(0,i.kt)("li",{parentName:"ul"},"Operator will get a cut of all fees earned by their pool as per nomination tax specified in operator\u2019s config at the next epoch transition."),(0,i.kt)("li",{parentName:"ul"},"Operator\u2019s cut will be automatically re-staked to the operator\u2019s stake at next epoch transition. Operator\u2019s shares, total pool shares and total stake will be updated with the corresponding deposit. For an exmaple on shares calculation, see the ",(0,i.kt)("a",{parentName:"li",href:"/docs/decex/staking#example"},"Staking")," page."),(0,i.kt)("li",{parentName:"ul"},"At the next epoch transition the domain applies all changes corresponding to fees, deposits and withdrawals to the total stakes of all registered operators. Note that this only changes the total pool balance, but does not affect shares for any individual nominators.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/img/Domain_Tx_To_Reward-light.svg#gh-light-mode-only",alt:"Domain_Tx_To_Reward"}),(0,i.kt)("img",{src:"/img/Domain_Tx_To_Reward-dark.svg#gh-dark-mode-only",alt:"Domain_Tx_To_Reward"})))}u.isMDXComponent=!0}}]);