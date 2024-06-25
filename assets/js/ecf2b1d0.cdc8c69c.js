"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[888],{7044:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(7624),i=t(2172);const o={id:"genesis",title:"Genesis",sidebar_position:2,description:"Genesis configuration",keywords:["Genesis","Config"],last_update:{date:"05/02/2024",author:"Saeid Yazdinejad"}},r=void 0,a={id:"consensus/genesis",title:"Genesis",description:"Genesis configuration",source:"@site/docs/consensus/genesis.md",sourceDirName:"consensus",slug:"/consensus/genesis",permalink:"/docs/consensus/genesis",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Saeid Yazdinejad",lastUpdatedAt:1714600800,formattedLastUpdatedAt:"May 1, 2024",sidebarPosition:2,frontMatter:{id:"genesis",title:"Genesis",sidebar_position:2,description:"Genesis configuration",keywords:["Genesis","Config"],last_update:{date:"05/02/2024",author:"Saeid Yazdinejad"}},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/consensus/overview"},next:{title:"Data Flow",permalink:"/docs/consensus/data_flow"}},c={},l=[];function d(e){const n={li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The genesis process of Autonomys Network involves the initialization and configuration of the blockchain's starting state. It includes the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Genesis Configuration"}),": The genesis process begins with creating a genesis configuration. It defines the initial parameters for the blockchain, such as the consensus parameters, initial balances, boot nodes, network protocol settings, and other configurations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Creation of the Genesis Block"}),": The genesis block is created after the configuration is complete and the initial state is defined. Randomly generated data of the size of one segment (128MiB) is attached to the serialized encoding of the genesis block to bootstrap the Archiving phase."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Proof-of-Time Initialization"}),': The Timekeepers initialize the Proof-of-Time chain and the randomness beacon. The Proof-of-Time chain serves as a global "clock" for the network: the current "time" is the height of the PoT chain.\nIt also provides the source of randomness for block production.']}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Having completed the steps above, we can deem the genesis phase finished. The following steps are necessary to start a functional consensus chain:"}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Archiving of the First Segment"}),": The data attached to the genesis block triggers the Archiving of the first segment of the canonical history of the chain. It produces the first 256 pieces and announces them to the DSN."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"History Seeding"}),": The developer team will upload to the network an initial archive of useful data, such the whitepaper, archived data of the previous test networks, etc."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Initial Plotting"}),": Farmers create their plots from the newly archived pieces. As soon as plotting is done, they can start farming blocks."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Block Production"}),": With the initial plotting complete, the block production begins, however the rewards are not issued. Full nodes start syncing the chain and participating in consensus."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Space Race"}),": The Space Race is a collaborative effort between the farmers to bootstrap the security of the network. We set a goal of certain amount of space pledged to the network such that it is difficult for a single party to control the majority of it (for example, 8PiB for Gemini-3h). As soon as the goal is reached, the Space Race ends and the block and vote rewards are automatically enabled."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Block Rewards"}),": The block and vote rewards are issued to the farmers who successfully audit their plots for a block or vote-eligible solution. Both block and vote rewards start at 0.1 test credits on Gemini-3h and will decrease over time according to the dynamic issuance schedule."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var s=t(1504);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);