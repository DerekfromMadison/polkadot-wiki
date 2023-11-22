(self.webpackChunk=self.webpackChunk||[]).push([[4428],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var n=a(74165),o=a(15861),i=a(67294),r=a(87152),s=a(30967),l=a(67425);function p(t,e,a){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,n.Z)().mark((function t(e,a,o){var i,l,p,d,k;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){t.next=18;break}return t.abrupt("return");case 18:return p=new r.U(i),t.next=21,s.G.create({provider:p});case 21:d=t.sent,(k=a.split(".")).forEach((function(t){t in d&&(d=d[t])})),t.t1=k[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=d.toString(),t.abrupt("break",35);case 29:return t.next=31,d();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+k[0]+") in "+a);case 35:return t.abrupt("return",l);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e,a,n){switch(e){case"humanReadable":(0,l.HumanReadable)(t,a,n);break;case"precise":(0,l.Precise)(t,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(t,n);break;case"erasToDays":(0,l.ErasToDays)(t,n,a);break;case"percentage":(0,l.Percentage)(t,n);break;case"permillToPercent":(0,l.PermillToPercent)(t,n);break;case"arrayLength":(0,l.ArrayLength)(t,n);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(t){var e=t.network,a=t.path,r=t.defaultValue,s=t.filter,l=void 0===s?void 0:s,d=(0,i.useState)(""),u=d[0],c=d[1];return e=e.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?k(r.toString(),l,e,c):c(r.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://statemine-rpc.polkadot.io/";break;case"statemint":t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e,a,c);case 2:if(void 0!==(o=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==l?k(o,l,e,c):c(o);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),u}},67425:t=>{var e="polkadot",a="kusama",n="statemine",o="statemint",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,r,s){var l=void 0;if(r===e||r===o)l=3;else{if(r!==a&&r!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}t=parseFloat(t),s((t=Number.isInteger(t/i[r].precision)?t/i[r].precision+" "+i[r].symbol:(t/i[r].precision).toFixed(l)+" "+i[r].symbol).toString())},Precise:function(t,e,a){a(t=(t=parseFloat(t))/i[e].precision+" "+i[e].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},ErasToDays:function(t,i,r){var s=void 0;if(r===e||r===o)s=1;else{if(r!==a&&r!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}i((t/=s).toString())},Percentage:function(t,e){e((t/=1e7).toString())},PermillToPercent:function(t,e){e((t/=1e4).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},35265:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>k});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=(a(47940),["components"]),s={id:"maintain-guides-how-to-nominate-polkadot",title:"Become a Nominator on Polkadot",sidebar_label:"Nominator Guides",description:"Steps on how to nominate on Polkadot.",keywords:["nominate","how to nominate","nominator","stake"],slug:"../maintain-guides-how-to-nominate-polkadot"},l=void 0,p={unversionedId:"maintain/maintain-guides-how-to-nominate-polkadot",id:"maintain/maintain-guides-how-to-nominate-polkadot",title:"Become a Nominator on Polkadot",description:"Steps on how to nominate on Polkadot.",source:"@site/../docs/maintain/maintain-guides-how-to-nominate-polkadot.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-nominate-polkadot",permalink:"/docs/maintain-guides-how-to-nominate-polkadot",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-nominate-polkadot.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1695304296,formattedLastUpdatedAt:"Sep 21, 2023",frontMatter:{id:"maintain-guides-how-to-nominate-polkadot",title:"Become a Nominator on Polkadot",sidebar_label:"Nominator Guides",description:"Steps on how to nominate on Polkadot.",keywords:["nominate","how to nominate","nominator","stake"],slug:"../maintain-guides-how-to-nominate-polkadot"},sidebar:"docs",previous:{title:"Resolving Errors",permalink:"/docs/maintain-errors"},next:{title:"How to run a Validator on Polkadot",permalink:"/docs/maintain-guides-how-to-validate-polkadot"}},d={},k=[{value:"Setting up Stash and Staking Proxy Accounts",id:"setting-up-stash-and-staking-proxy-accounts",level:2},{value:"Using the Polkadot Staking Dashboard",id:"using-the-polkadot-staking-dashboard",level:2},{value:"Why am I not receiving Staking Rewards?",id:"why-am-i-not-receiving-staking-rewards",level:2},{value:"Using Polkadot-JS UI",id:"using-polkadot-js-ui",level:2},{value:"Using Command-Line Interface (CLI)",id:"using-command-line-interface-cli",level:2},{value:"Step 1: Install @polkadot/api-cli",id:"step-1-install-polkadotapi-cli",level:3},{value:"Step 2. Bond your DOT",id:"step-2-bond-your-dot",level:3},{value:"Step 3. Nominate a validator",id:"step-3-nominate-a-validator",level:3}],u={toc:k},c="wrapper";function m(t){var e=t.components,a=(0,o.Z)(t,r);return(0,i.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"New to Staking?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Start your staking journey or explore more information about staking on\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/staking/"},"Polkadot's Home Page"),". You can learn how staking works by\nreading ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"this dedicated page"),"."),(0,i.kt)("p",{parentName:"admonition"},"Discover the new ",(0,i.kt)("a",{parentName:"p",href:"https://staking.polkadot.network/#/overview"},(0,i.kt)("strong",{parentName:"a"},"Staking Dashboard"))," that makes\nstaking much easier and check this\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182104"},"extensive article list")," to\nhelp you get started.\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The following information applies to the Polkadot network. If you want to nominate on Kusama, check\nout the ",(0,i.kt)("a",{parentName:"p",href:"https://guide.kusama.network/docs/maintain-guides-how-to-nominate-kusama/"},"Kusama guide"),"\ninstead.")),(0,i.kt)("p",null,"Nominators are one type of participant in the staking subsystem of Polkadot. They appoint their\nstake to the validators, the second type of participant. By appointing their stake, they can elect\nthe active set of validators and share in the rewards that are paid out."),(0,i.kt)("p",null,"While the ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-polkadot"},"validators")," are active participants in the\nnetwork that engage in the block production and finality mechanisms, nominators take a slightly more\npassive role. Being a nominator does not require running a node of your own or worrying about online\nuptime. However, a good nominator performs due diligence on the validators that they elect. When\nlooking for validators to nominate, a nominator should pay attention to their own reward percentage\nfor nominating a specific validator - as well as the risk that they bear of being slashed if the\nvalidator gets slashed."),(0,i.kt)("p",null,"If you are a beginner, please watch the video below for detailed instructions."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=F59N3YKYCRs"},(0,i.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/F59N3YKYCRs/0.jpg",alt:"Staking Tutorial"}))),(0,i.kt)("h2",{id:"setting-up-stash-and-staking-proxy-accounts"},"Setting up Stash and Staking Proxy Accounts"),(0,i.kt)("p",null,"Nominators are recommended to set up separate stash and staking proxy accounts. Explanation and the\nreasoning for generating distinct accounts for this purpose is elaborated in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-cryptography#keys"},"keys")," section of the Wiki."),(0,i.kt)("p",null,"You can generate your stash and staking proxy account via any of the recommended methods, which are\ndetailed on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},"account generation")," page."),(0,i.kt)("p",null,"Starting with runtime version v23 natively included in the client version\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases/tag/v0.8.23"},"0.8.23"),", payouts can go to any custom\naddress. If you'd like to redirect payments to an account that is neither the staking proxy nor the\nstash account, set one up. Note that setting an exchange address as the recipient of the staking\nrewards is extremely unsafe."),(0,i.kt)("h2",{id:"using-the-polkadot-staking-dashboard"},"Using the Polkadot Staking Dashboard"),(0,i.kt)("admonition",{title:"Walk-through Video Tutorials",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/F59N3YKYCRs"},(0,i.kt)("strong",{parentName:"a"},"Nominating")),": Stake your tokens, choose your best validators,\nand start your staking journey on Polkadot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/dDIG7QAApig"},(0,i.kt)("strong",{parentName:"a"},"Becoming a Pool Member")),": Start becoming a part of the Polkadot\nmovement, keep Polkadot secure by staking minimum 1 DOT and receiving staking rewards."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/hvXLc4H7rA4"},(0,i.kt)("strong",{parentName:"a"},"Dashboard Walkthrough")),": Become a Pro using the Staking\nDashboard."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/58pIe8tt2o4"},(0,i.kt)("strong",{parentName:"a"},"After Staking")),": Nominating on Polkadot is not a set-and-forget\naction, learn what you can do with the dashboard after you started staking."))),(0,i.kt)("h2",{id:"why-am-i-not-receiving-staking-rewards"},"Why am I not receiving Staking Rewards?"),(0,i.kt)("admonition",{title:"Bags List & Minimum Active Bond",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/hIIZRJLrBZA"},(0,i.kt)("strong",{parentName:"a"},"this video tutorial"))," and read\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181018-i-have-more-than-the-minimum-bonded-but-i-m-not-getting-rewards"},(0,i.kt)("strong",{parentName:"a"},"this support article")),"\nto understand why in some cases you might not receive staking rewards and how to avoid those\nsituations.")),(0,i.kt)("h2",{id:"using-polkadot-js-ui"},"Using Polkadot-JS UI"),(0,i.kt)("admonition",{title:"Using Polkadot-JS UI as a Nominator",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Here is the list of basic nominator actions that can be performed using the Polkadot-JS UI."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000168057-polkadot-js-ui-how-do-i-stake-nominate-on-polkadot-"},"How to Bond Tokens and Nominate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000150130-how-do-i-know-which-validators-to-choose-"},"How to Select Validators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000167902-how-can-i-unstake-my-tokens-again-"},"How to Stop Nominating & Unbond Tokens")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000170241-polkadot-js-ui-how-to-rebond-tokens-during-the-unbonding-period"},"How to Rebond Tokens")))),(0,i.kt)("admonition",{title:"Video Tutorials",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/FCXC0CDhyS4?t=219"},"How to Nominate/Stake")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/7VlTncHCGPc"},"Staking with a Ledger and PolkadotJS Apps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=jL-N_IWiYVA"},"Staking with a Ledger and Ledger Live")))),(0,i.kt)("h2",{id:"using-command-line-interface-cli"},"Using Command-Line Interface (CLI)"),(0,i.kt)("p",null,"Apart from using Polkadot-JS Apps to participate in staking, you can do all these things in CLI\ninstead. The CLI approach allows you to interact with the Polkadot network without going to the\nPolkadot-JS Apps dashboard."),(0,i.kt)("h3",{id:"step-1-install-polkadotapi-cli"},"Step 1: Install @polkadot/api-cli"),(0,i.kt)("p",null,"We assume you have installed ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org"},"NodeJS with npm"),". Run the following command to\ninstall the ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api-cli")," globally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @polkadot/api-cli\n")),(0,i.kt)("h3",{id:"step-2-bond-your-dot"},"Step 2. Bond your DOT"),(0,i.kt)("admonition",{title:"Controller accounts are deprecated",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Controller accounts are deprecated. For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/staking-controller-deprecation-plan-staking-ui-leads-comms/2748"},"this discussion"),".")),(0,i.kt)("p",null,"Executing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "MNEMONIC_PHRASE" tx.staking.bond CONTROLLER_ADDRESS NUMBER_OF_TOKENS REWARD_DESTINATION --ws WEBSOCKET_ENDPOINT\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CONTROLLER_ADDRESS"),": An address you would like to bond to the stash account. (Controller accounts\nare now deprecated. Refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/staking-controller-deprecation-plan-staking-ui-leads-comms/2748"},"this discussion"),"\nfor additional context)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NUMBER_OF_TOKENS"),": The number of DOT you would like to stake to the network."),(0,i.kt)("admonition",{title:"Decimal places",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"DOT has ten decimal places and is always represented as an integer with zeros at the end. So 1 DOT =\n10_000_000_000 Plancks.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"REWARD_DESTINATION"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Staked")," - Pay into the stash account, increasing the amount at stake accordingly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stash")," - Pay into the stash account, not increasing the amount at stake."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Account")," - Pay into a custom account, like so:\n",(0,i.kt)("inlineCode",{parentName:"li"},"Account DMTHrNcmA8QbqRS4rBq8LXn8ipyczFoNMb1X4cY2WD9tdBX"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Controller")," - Pay into the controller account.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.bond DMTHrNcmA8QbqRS4rBq8LXn8ipyczFoNMb1X4cY2WD9tdBX 1000000000000 Staked --ws wss://rpc.polkadot.io\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'...\n...\n    "status": {\n      "InBlock": "0x0ed1ec0ba69564e8f98958d69f826adef895b5617366a32a3aa384290e98514e"\n    }\n')),(0,i.kt)("p",null,"You can check the transaction status by using the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"InBlock")," in\n",(0,i.kt)("a",{parentName:"p",href:"https://polkascan.io/polkadot-cc1"},"Polkascan"),". Also, you can verify the bonding state under the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Staking")," page on the Polkadot-JS Apps Dashboard."),(0,i.kt)("h3",{id:"step-3-nominate-a-validator"},"Step 3. Nominate a validator"),(0,i.kt)("p",null,"To nominate a validator, you can execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "MNEMONIC_PHRASE" tx.staking.nominate \'["VALIDATOR_ADDRESS"]\' --ws WS_ENDPOINT\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.nominate \'["CmD9vaMYoiKe7HiFnfkftwvhKbxN9bhyjcDrfFRGbifJEG8","E457XaKbj2yTB2URy8N4UuzmyuFRkcdxYs67UvSgVr7HyFb"]\' --ws wss://rpc.polkadot.io\n')),(0,i.kt)("p",null,"After a few seconds, you should see the hash of the transaction, and if you would like to verify the\nnomination status, you can check that on the Polkadot-JS UI as well."))}m.isMDXComponent=!0},46601:()=>{}}]);