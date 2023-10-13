"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[969],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>h});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=m(t),h=s,d=u["".concat(p,".").concat(h)]||u[h]||c[h]||r;return t?n.createElement(d,i(i({ref:a},l),{},{components:t})):n.createElement(d,i({ref:a},l))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2243:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=t(7462),s=(t(7294),t(3905));const r={id:"crypto_primitives",title:"Cryptographic Primitives",sidebar_position:1,description:"Cryptographic Primitives used in Subspace protocol",keywords:["Cryptography","Consensus"]},i=void 0,o={unversionedId:"consensus/consensus/crypto_primitives",id:"consensus/consensus/crypto_primitives",title:"Cryptographic Primitives",description:"Cryptographic Primitives used in Subspace protocol",source:"@site/docs/consensus/consensus/crypto_primitives.md",sourceDirName:"consensus/consensus",slug:"/consensus/consensus/crypto_primitives",permalink:"/docs/consensus/consensus/crypto_primitives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"crypto_primitives",title:"Cryptographic Primitives",sidebar_position:1,description:"Cryptographic Primitives used in Subspace protocol",keywords:["Cryptography","Consensus"]},sidebar:"tutorialSidebar",previous:{title:"Proof-of-Archival-Storage",permalink:"/docs/category/proof-of-archival-storage"},next:{title:"Archiving",permalink:"/docs/consensus/consensus/archiving"}},p={},m=[{value:"Hash",id:"hash",level:2},{value:"Digital Signature",id:"digital-signature",level:2},{value:"Erasure Code",id:"erasure-code",level:2},{value:"Kate-Zaverucha-Goldberg (KZG) Polynomial Commitment",id:"kate-zaverucha-goldberg-kzg-polynomial-commitment",level:2},{value:"Merkle Tree",id:"merkle-tree",level:2},{value:"Encoding Mapping",id:"encoding-mapping",level:2}],l={toc:m};function c(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Subspace protocol uses the following cryptographic primitives:"),(0,s.kt)("h2",{id:"hash"},"Hash"),(0,s.kt)("p",null,"Hashing provides succinct commitments to arbitrary data (blocks, transactions) that are deterministic, verifiable and cannot feasibly be reversed. The Subspace protocol uses the BLAKE2b-256 and BLAKE3 hash functions in different places."),(0,s.kt)("h2",{id:"digital-signature"},"Digital Signature"),(0,s.kt)("p",null,"Digital signature scheme secures different parts of consensus by providing a means of authentication. "),(0,s.kt)("p",null,"We currently use Schnorr/Ristretto x25519 (also known as sr25519) as the key derivation and signing algorithm (with the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/w3f/schnorrkel"},"schnorrkel")," library)."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Non-canonical Schnorr signatures are used to sign rewards for a newly forged block (as defined in Substrate) and votes by farmers, as well as transactions and transaction bundles by domain operators."),(0,s.kt)("li",{parentName:"ul"},"Canonical (deterministic) signatures are used as a verifiable random function (VRF) in the slot leader election among domain operators. A canonical scheme is necessary for these cases to prevent attackers from repeatedly signing until they produce an election solution that meets the threshold (as part of a grinding attack).")),(0,s.kt)("h2",{id:"erasure-code"},"Erasure Code"),(0,s.kt)("p",null,"An erasure code extends the given data so that the original data can be recovered from a subset and protected against loss.\nIn Subspace, erasure code is used to encode and decode blockchain history pieces and their KZG commitments in an archived segment. Erasure coding allows for distributed storage of pieces across farmers and helps protect the data against loss in the event of any failures and network partitions. Erasure code is also used in plotting together with proofs-of-space to create unique, easily recoverable plot files for each farmer."),(0,s.kt)("p",null,"We currently use a Discrete Fourier Transform-based systematic Reed-Solomon code with a rate of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1/2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1/2")))))," over the field ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"F"),(0,s.kt)("mi",{parentName:"msub"},"r"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F_{r}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))))))),", where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"r")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"r")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r")))))," is the ",(0,s.kt)("a",{parentName:"p",href:"https://hackmd.io/@benjaminion/bls12-381#Curve-equation-and-parameters"},"size of subgroup of points")," on the BLS12-381 curve for the piece chunks and the same approach over the subgroup of elliptic curve points ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"G"),(0,s.kt)("mn",{parentName:"msub"},"1"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G_1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"}))))))))))," for piece commitments."),(0,s.kt)("h2",{id:"kate-zaverucha-goldberg-kzg-polynomial-commitment"},"Kate-Zaverucha-Goldberg (KZG) Polynomial Commitment"),(0,s.kt)("p",null,"KZG polynomial commitment scheme allows for ",(0,s.kt)("em",{parentName:"p"},"constant-"),"sized inclusion proofs for arbitrary-sized data sets. Specifically:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The commitment size is ",(0,s.kt)("em",{parentName:"li"},"constant")," and equal to one elliptic curve point of an elliptic curve group that admits pairings. "),(0,s.kt)("li",{parentName:"ul"},"The witness size is ",(0,s.kt)("em",{parentName:"li"},"constant")," and equal to one curve point."),(0,s.kt)("li",{parentName:"ul"},"Verification time is ",(0,s.kt)("em",{parentName:"li"},"constant")," and requires two point-scalar multiplications and two pairings regardless of the size of the committed data set."),(0,s.kt)("li",{parentName:"ul"},"Proving time (commitment and witness generation) is ",(0,s.kt)("em",{parentName:"li"},"linear")," in the size of committed data.\nSubspace uses BLS12-381, which has 48 bytes for elliptic curve points (commitments and witnesses) serialized in compressed form.")),(0,s.kt)("p",null,"The protocol uses the KZG commitment scheme to commit to the archived pieces of history and segments of pieces so that the farmers storing pieces in their plots can always succinctly prove that a particular piece is a valid part of the blockchain history and clients who request pieces can verify the proofs efficiently.\nThe synergy between KZG and Reed-Solomon erasure code allows us to have:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"succinct commitments to data of arbitrary size,"),(0,s.kt)("li",{parentName:"ul"},"succinct witness of the inclusion of data fragments in blockchain history,"),(0,s.kt)("li",{parentName:"ul"},"efficient verification"),(0,s.kt)("li",{parentName:"ul"},"provably correct erasure coding")),(0,s.kt)("p",null,"KZG requires a one-time trusted setup of the universal reference values (public parameters). In the spirit of interoperability, Subspace Network uses the same reference values as Ethereum, computed during a distributed multi-party computation ceremony held by the Ethereum Foundation. This choice allows cross-chain compatibility of KZG proofs between Subspace and Ethereum."),(0,s.kt)("h2",{id:"merkle-tree"},"Merkle Tree"),(0,s.kt)("p",null,"Merkle tree provides succinct commitments (Merkle roots) to arbitrary-sized data sets with efficient ",(0,s.kt)("em",{parentName:"p"},"logarithmic"),"-sized inclusion proofs. Current usages in Subspace include Merkle trees for:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"extrinsics sets in blocks (as defined in the Substrate framework)"),(0,s.kt)("li",{parentName:"ul"},"state of the blockchain (as defined in the Substrate framework)"),(0,s.kt)("li",{parentName:"ul"},"execution traces for the domain blocks")),(0,s.kt)("h2",{id:"encoding-mapping"},"Encoding Mapping"),(0,s.kt)("p",null,"Encoding provides a means to make arbitrary useful data (i.e. chunks of blockchain history) look like random data while allowing retrieval of the useful data through decoding. Subspace uses simple XOR as an encoding function."))}c.isMDXComponent=!0}}]);