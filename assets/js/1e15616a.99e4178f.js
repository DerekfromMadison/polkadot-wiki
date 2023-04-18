"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(a),b=n,d=p["".concat(l,".").concat(b)]||p[b]||u[b]||s;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<s;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},39420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],o={id:"learn-wasm",title:"WebAssembly (Wasm)",sidebar_label:"WebAssembly (Wasm)",description:"Learn how Wasm plays a role in Polkadot's runtime.",keywords:["webassembly","wasm","runtime"],slug:"../learn-wasm"},l=void 0,m={unversionedId:"learn/learn-wasm",id:"learn/learn-wasm",title:"WebAssembly (Wasm)",description:"Learn how Wasm plays a role in Polkadot's runtime.",source:"@site/../docs/learn/learn-wasm.md",sourceDirName:"learn",slug:"/learn-wasm",permalink:"/docs/learn-wasm",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-wasm.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1681816254,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{id:"learn-wasm",title:"WebAssembly (Wasm)",sidebar_label:"WebAssembly (Wasm)",description:"Learn how Wasm plays a role in Polkadot's runtime.",keywords:["webassembly","wasm","runtime"],slug:"../learn-wasm"},sidebar:"docs",previous:{title:"Polkadot Host",permalink:"/docs/learn-polkadot-host"},next:{title:"Runtime Upgrades",permalink:"/docs/learn-runtime-upgrades"}},c={},p=[{value:"What is WebAssembly?",id:"what-is-webassembly",level:2},{value:"Why WebAssembly?",id:"why-webassembly",level:2},{value:"Resources",id:"resources",level:2}],u={toc:p},b="wrapper";function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)(b,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"WebAssembly is used in Polkadot and Substrate as the compilation target for the runtime."),(0,s.kt)("h2",{id:"what-is-webassembly"},"What is WebAssembly?"),(0,s.kt)("p",null,"WebAssembly, shortened to ",(0,s.kt)("em",{parentName:"p"},"Wasm"),", is a binary instruction format for a stack-based virtual machine.\nWasm is designed as a portable target for the compilation of high-level languages like C/C++/Rust,\nenabling deployment on the web for client and server applications."),(0,s.kt)("h2",{id:"why-webassembly"},"Why WebAssembly?"),(0,s.kt)("p",null,"WebAssembly is a platform-agnostic binary format, meaning it will run the exact instructions across\nwhatever machine it operates on. Blockchains need determinacy to have reliable state transition\nupdates across all nodes in the peer-to-peer network without forcing every peer to run the same\nhardware. Wasm is an excellent fit for reliability among the diverse set of machines. Wasm is both\nefficient and fast. The efficiency means that it can be uploaded onto the chain as a blob of code\nwithout causing too much state bloat while keeping its ability to execute at near-native speeds."),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WebAssembly.org")," - WebAssembly homepage that contains a link to the\nspec."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/paritytech/Wasmi"},"Wasmi")," - WebAssembly interpreter written in Rust."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/paritytech/parity-Wasm"},"Parity Wasm")," - WebAssembly\nserialization/deserialization in Rust."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/paritytech/Wasm-utils"},"Wasm utils")," - Collection of Wasm utilities used in\nParity and Wasm contract development.")))}d.isMDXComponent=!0}}]);