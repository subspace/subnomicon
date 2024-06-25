"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[229],{7608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(7624),i=t(2172);const s={title:"Data Flow",sidebar_position:3,description:"Lifecycle of Data on Autonomys Network",keywords:["Consensus","Data","Storage","Transactions"],last_update:{date:"05/01/2024",author:"Saeid Yazdinejad"}},a=void 0,l={id:"consensus/data_flow",title:"Data Flow",description:"Lifecycle of Data on Autonomys Network",source:"@site/docs/consensus/data_flow.md",sourceDirName:"consensus",slug:"/consensus/data_flow",permalink:"/docs/consensus/data_flow",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Saeid Yazdinejad",lastUpdatedAt:1714514400,formattedLastUpdatedAt:"Apr 30, 2024",sidebarPosition:3,frontMatter:{title:"Data Flow",sidebar_position:3,description:"Lifecycle of Data on Autonomys Network",keywords:["Consensus","Data","Storage","Transactions"],last_update:{date:"05/01/2024",author:"Saeid Yazdinejad"}},sidebar:"tutorialSidebar",previous:{title:"Genesis",permalink:"/docs/consensus/genesis"},next:{title:"Proof-of-Archival-Storage",permalink:"/docs/category/proof-of-archival-storage"}},r={},c=[{value:"Block Structure and Limits",id:"block-structure-and-limits",level:2},{value:"Consensus Chain Block Header",id:"consensus-chain-block-header",level:2},{value:"Domain Bundle",id:"domain-bundle",level:2},{value:"Domain Block",id:"domain-block",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"From the moment a transaction is submitted to the Autonomys Network to the point it is permanently archived, data goes through several stages:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The transaction is validated and included in a consensus chain block directly or through inclusions of domain bundles."}),"\n",(0,o.jsx)(n.li,{children:"Transactions and bundles in the block are executed, activating a global and domain state change."}),"\n",(0,o.jsxs)(n.li,{children:["After that block reaches a certain depth (currently 100 blocks), it is archived following the ",(0,o.jsx)(n.a,{href:"/docs/consensus/consensus/archiving",children:"Archiving"})," protocol alongside other blocks. At this point, it becomes a part of the Archival History of the chain."]}),"\n",(0,o.jsxs)(n.li,{children:["Newly archived pieces are added to farmer caches through the ",(0,o.jsx)(n.a,{href:"/docs/network/dsn",children:"Distributed Storage Network"})," and replicated multiple times throughout the network."]}),"\n",(0,o.jsxs)(n.li,{children:["Pieces are encoded into farmer plots on disk for permanent storage, following the ",(0,o.jsx)(n.a,{href:"/docs/consensus/consensus/plotting",children:"Plotting"})," protocol."]}),"\n",(0,o.jsx)(n.li,{children:"When a client requests, the original data is reconstructed from archived pieces on the fly."}),"\n"]}),"\n",(0,o.jsxs)("div",{align:"center",children:[(0,o.jsx)("img",{src:"/img/Data_Flow-light.svg#gh-light-mode-only",alt:"Data_Flow"}),(0,o.jsx)("img",{src:"/img/Data_Flow-dark.svg#gh-dark-mode-only",alt:"Data_Flow"})]}),"\n",(0,o.jsx)(n.h2,{id:"block-structure-and-limits",children:"Block Structure and Limits"}),"\n",(0,o.jsx)(n.p,{children:"A Subspace consensus chain block follows the general structure of a standard block: it consists of a body and a header and points to a parent block. The consensus chain block header contains metadata about the block, allowing verification of the validity of the consensus chain. The body contains transactions and domain bundles. Transactions include transfers, votes and fraud proofs. Domain bundles are sets of transactions from a particular domain (e.g., EVM contract calls)."}),"\n",(0,o.jsx)(n.p,{children:"Each block has a certain length and weight. Length is the amount of storage this block consumes on the network, equal to the size in bytes of the encoded transactions and bundles in the block body. Weight is the estimated time it would take to execute this block, equal to the sum of the compute weights of all the transactions in the body. Currently, consensus chain blocks are limited to 3.75 MiB of length and 1.5 seconds of compute weight for normal user transactions with up to 1.25 MiB and 0.5 seconds extra for system extrinsics like votes or updates to the chain."}),"\n",(0,o.jsx)(n.h2,{id:"consensus-chain-block-header",children:"Consensus Chain Block Header"}),"\n",(0,o.jsx)(n.p,{children:"In Subspace, the consensus block header contains:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The block number in the chain of blocks"}),"\n",(0,o.jsx)(n.li,{children:"The hash of the parent block"}),"\n",(0,o.jsx)(n.li,{children:"The Merkle root of the trie of extrinsics included in this block"}),"\n",(0,o.jsx)(n.li,{children:"The Merkle root of the state trie after processing this block"}),"\n",(0,o.jsx)(n.li,{children:"The time slot number claimed by the block producer"}),"\n",(0,o.jsx)(n.li,{children:"The global randomness at the claimed time slot derived from the proof-of-time chain"}),"\n",(0,o.jsx)(n.li,{children:"The solution to the slot challenge for the claimed time slot. The solution includes a winning chunk of history, a proof-of-space for the farmer's plot and KZG witness that the winning chunk is indeed a part of the archival history at the claimed height"}),"\n",(0,o.jsx)(n.li,{children:"The solution range used to find the winning chunk of history"}),"\n",(0,o.jsx)(n.li,{children:"The signature of the farmer over the header"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"domain-bundle",children:"Domain Bundle"}),"\n",(0,o.jsx)(n.p,{children:"A bundle contains multiple transactions from a particular domain (e.g., EVM contract calls) deterministically ordered for efficient execution, propagation and inclusion in blocks. In Subspace, a bundle contains a signed header and a list of transactions. A bundle header contains:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The domain ID (e.g., EVM)"}),"\n",(0,o.jsx)(n.li,{children:"The operator ID of the bundle producer"}),"\n",(0,o.jsx)(n.li,{children:"The Merkle root of the trie of transactions included in this bundle"}),"\n",(0,o.jsx)(n.li,{children:"Execution receipt that should extend the domain receipt chain"}),"\n",(0,o.jsx)(n.li,{children:"The size of the bundle body in bytes, used to calculate the storage cost"}),"\n",(0,o.jsx)(n.li,{children:"The total estimated weight of all extrinsics in the bundle, used to prevent overloading the bundle with compute"}),"\n",(0,o.jsx)(n.li,{children:"The time slot claimed by the bundle"}),"\n",(0,o.jsx)(n.li,{children:"The global randomness at the claimed time slot derived from the proof-of-time chain"}),"\n",(0,o.jsx)(n.li,{children:"The proof-of-election of the operator as bundle producer for the claimed time slot based on slot challenge and the operator's stake in the current epoch"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'Each domain bundle can be seen as "a block inside a block," with its bundle header containing information about the domain and the bundle producer. Any consensus chain block may contain many bundles from different domains without burdening the consensus nodes. Consensus nodes check if bundles are well-formed and package them within a block. Consensus nodes do not execute any of the computations inside the bundles.'}),"\n",(0,o.jsx)(n.h2,{id:"domain-block",children:"Domain Block"}),"\n",(0,o.jsx)(n.p,{children:"Each domain is an application-specific blockchain (app-chain) that relies on the consensus chain for data availability and settlement.\nDomain chains consist of domain blocks, each containing solely the bundles relevant to this domain and disregarding any transactions concerning other domains. Domain chains have separate namespaced execution environments while receiving shared security and interoperability from the consensus chain."}),"\n",(0,o.jsxs)("div",{align:"center",children:[(0,o.jsx)("img",{src:"/img/Slot_To_Execution-light.svg#gh-light-mode-only",alt:"Slot_To_Execution"}),(0,o.jsx)("img",{src:"/img/Slot_To_Execution-dark.svg#gh-dark-mode-only",alt:"Slot_To_Execution"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>a});var o=t(1504);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);