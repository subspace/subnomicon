"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={title:"Overview",sidebar_position:1,description:"Decoupled Execution Overview",keywords:["DecEx","Domains"]},a=void 0,c={unversionedId:"decex/overview",id:"decex/overview",title:"Overview",description:"Decoupled Execution Overview",source:"@site/docs/decex/overview.md",sourceDirName:"decex",slug:"/decex/overview",permalink:"/docs/decex/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,description:"Decoupled Execution Overview",keywords:["DecEx","Domains"]},sidebar:"tutorialSidebar",previous:{title:"Decoupled Execution",permalink:"/docs/category/decoupled-execution"},next:{title:"Domains",permalink:"/docs/category/domains"}},s={},l=[{value:"Domains",id:"domains",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Subspace introduces a decoupled execution framework (DecEx) to resolve the problem of state-bloat. Under this framework, farmers will only confirm the availability of transactions and provide an ordering. At the same time, a secondary network of staked operator nodes will execute the transactions and maintain the resulting chain state. "),(0,o.kt)("p",null,"DecEx separates the probabilistic process of coming to a consensus over ordering transactions from the deterministic process of executing transactions. Since these roles are now decoupled, we can have different hardware requirements for each node type, allowing us to keep farming lightweight and open to anyone while also providing a foundation for scaling execution both vertically, based on the hardware capabilities of operators, and horizontally, by later partitioning operators into different namespaced execution domains."),(0,o.kt)("p",null,"In this model, users submit execution transactions directly to operators, who will then pre-validate and batch these transactions into bundles through a (probabilistic) stake-weighted election process. These bundles are then submitted to farmers, who treat them as base-layer transactions. Farmers will only verify the proof-of-election and ensure the data is available before batching bundles into blocks in the usual manner. Execution transactions are then ordered deterministically, using a secure cryptographic shuffle based on the unique PoAS produced by the farmer, mitigating the Miner Extractable Value (MEV). Operators then execute the transactions according to this ordering and produce a deterministic state commitment in the form of an execution receipt. These state commitments are then included in the following bundle, forming a deterministic receipt chain tracked by all farmers within the core protocol. The initial default implementation of DecEX employs an optimistic fraud-proof validation scheme."),(0,o.kt)("p",null,"While conceptually similar to rollups on Ethereum, such as Optimism, DecEx differs heavily in its protocol implementation. Unlike Ethereum, Subspace does not have a global smart contract execution environment within the core protocol. "),(0,o.kt)("p",null,"Instead, DecEx is enshrined within the semantics of the core protocol itself. Despite being implemented at the protocol level, DecEx can still provide rollup protocol designers with a flexible framework, which can support any state transition integrity framework for verifying the receipt chain, including optimistic fraud proofs and zero-knowledge validity proofs. DecEx can also currently support any smart contract execution environment that can be implemented within the Substrate framework, such as the Ethereum Virtual Machine (EVM) or WebAssembly (WASM). "),(0,o.kt)("h2",{id:"domains"},"Domains"),(0,o.kt)("p",null,"Domains are the logical extension of our basic decoupled execution framework, taking it from a single monolithic execution environment into a modular and interoperable network of namespaced execution environments. Subspace supports a programmable and configurable notion of namespaced execution environments called domains. Each domain is a programmable layer-two rollup, or application-specific blockchain (app-chain), that relies on the consensus chain for consensus, data availability, and settlement. "),(0,o.kt)("p",null,"Domains allow builders to easily launch their own network without bootstrapping a new validator set while still receiving shared security and interoperability from the root chain. They aim to make deploying a rollup on Subspace as easy as deploying a smart contract on Ethereum."))}u.isMDXComponent=!0}}]);