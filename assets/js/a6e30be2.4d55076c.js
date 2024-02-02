"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[538],{3672:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=i(7624),o=i(2172);const a={title:"Overview",sidebar_position:1,description:"Decoupled Execution Overview",keywords:["DecEx","Domains"]},r=void 0,s={id:"decex/overview",title:"Overview",description:"Decoupled Execution Overview",source:"@site/docs/decex/overview.md",sourceDirName:"decex",slug:"/decex/overview",permalink:"/docs/decex/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,description:"Decoupled Execution Overview",keywords:["DecEx","Domains"]},sidebar:"tutorialSidebar",previous:{title:"Decoupled Execution",permalink:"/docs/category/decoupled-execution"},next:{title:"Domains",permalink:"/docs/category/domains"}},c={},l=[{value:"Domains",id:"domains",level:2}];function d(e){const t={h2:"h2",p:"p",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Subspace introduces a decoupled execution framework (DecEx) to resolve the problem of state-bloat. Under this framework, farmers will only confirm the availability of transactions and provide an ordering. At the same time, a secondary network of staked operator nodes will execute the transactions and maintain the resulting chain state."}),"\n",(0,n.jsx)(t.p,{children:"DecEx separates the probabilistic process of coming to a consensus over ordering transactions from the deterministic process of executing transactions. Since these roles are now decoupled, we can have different hardware requirements for each node type, allowing us to keep farming lightweight and open to anyone while also providing a foundation for scaling execution both vertically, based on the hardware capabilities of operators, and horizontally, by later partitioning operators into different namespaced execution domains."}),"\n",(0,n.jsx)(t.p,{children:"In this model, users submit execution transactions directly to operators, who will then pre-validate and batch these transactions into bundles through a (probabilistic) stake-weighted election process. These bundles are then submitted to farmers, who treat them as base-layer transactions. Farmers will only verify the proof-of-election and ensure the data is available before batching bundles into blocks in the usual manner. Execution transactions are then ordered deterministically, using a secure cryptographic shuffle based on the unique PoAS produced by the farmer, mitigating the Miner Extractable Value (MEV). Operators then execute the transactions according to this ordering and produce a deterministic state commitment in the form of an execution receipt. These state commitments are then included in the following bundle, forming a deterministic receipt chain tracked by all farmers within the core protocol. The initial default implementation of DecEX employs an optimistic fraud-proof validation scheme."}),"\n",(0,n.jsx)(t.p,{children:"While conceptually similar to rollups on Ethereum, such as Optimism, DecEx differs heavily in its protocol implementation. Unlike Ethereum, Subspace does not have a global smart contract execution environment within the core protocol."}),"\n",(0,n.jsx)(t.p,{children:"Instead, DecEx is enshrined within the semantics of the core protocol itself. Despite being implemented at the protocol level, DecEx can still provide rollup protocol designers with a flexible framework, which can support any state transition integrity framework for verifying the receipt chain, including optimistic fraud proofs and zero-knowledge validity proofs. DecEx can also currently support any smart contract execution environment that can be implemented within the Substrate framework, such as the Ethereum Virtual Machine (EVM) or WebAssembly (WASM)."}),"\n",(0,n.jsxs)("div",{align:"center",children:[(0,n.jsx)("img",{src:"/img/Domain_Chains-light.svg#gh-light-mode-only",alt:"Domain_Chains"}),(0,n.jsx)("img",{src:"/img/Domain_Chains-dark.svg#gh-dark-mode-only",alt:"Domain_Chains"})]}),"\n",(0,n.jsx)(t.h2,{id:"domains",children:"Domains"}),"\n",(0,n.jsx)(t.p,{children:"Domains are the logical extension of our basic decoupled execution framework, taking it from a single monolithic execution environment into a modular and interoperable network of namespaced execution environments. Subspace supports a programmable and configurable notion of namespaced execution environments called domains. Each domain is a programmable layer-two rollup, or application-specific blockchain (app-chain), that relies on the consensus chain for consensus, data availability, and settlement."}),"\n",(0,n.jsx)(t.p,{children:"Domains allow builders to easily launch their own network without bootstrapping a new validator set while still receiving shared security and interoperability from the root chain. They aim to make deploying a rollup on Subspace as easy as deploying a smart contract on Ethereum."})]})}function h(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2172:(e,t,i)=>{i.d(t,{I:()=>s,M:()=>r});var n=i(1504);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);