(this.webpackJsonpWoUW=this.webpackJsonpWoUW||[]).push([[0],{264:function(n,t){},284:function(n,t){},286:function(n,t){},302:function(n,t){},303:function(n,t){},315:function(n,t){},319:function(n,t){},332:function(n,t){},337:function(n,t){},338:function(n,t){},359:function(n,t){},361:function(n,t){},371:function(n,t){},373:function(n,t){},515:function(n,t){},517:function(n,t){},522:function(n,t){},524:function(n,t){},531:function(n,t){},543:function(n,t){},546:function(n,t){},551:function(n,t){},583:function(n,t,e){},584:function(n,t,e){"use strict";e.r(t);var c,a,r,o,i,s,l,u,d,p,x,j,b,f,h,O,g=e(1),C=e(91),y=e.n(C),v=e(14),A=e.n(v),w=e(46),S=e(74),m=e(15),E=e(16),N=E.a.div(c||(c=Object(m.a)(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]))),T=E.a.div(a||(a=Object(m.a)(["\n  height: 8px;\n  width: 8px;\n"]))),_=E.a.div(r||(r=Object(m.a)(["\n  height: 16px;\n  width: 16px;\n"]))),M=E.a.div(o||(o=Object(m.a)(["\n  height: 24px;\n  width: 24px;\n"]))),k=E.a.div(i||(i=Object(m.a)(["\n  height: 32px;\n  width: 32px;\n"]))),D=E.a.div(s||(s=Object(m.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"#fff":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),I=E.a.p(l||(l=Object(m.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),L=(E.a.p(u||(u=Object(m.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),E.a.p(d||(d=Object(m.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),R=(E.a.div(p||(p=Object(m.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(62)),F=e(130),K=e.n(F),U=e(239),P=e.n(U),W=e(75),Y=e(240),B=e(19),H={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(B.a)(Object(B.a)({},H),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(B.a)(Object(B.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(B.a)(Object(B.a)({},H),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(B.a)(Object(B.a)({},n),{},{account:t.payload.account});default:return n}},Q={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},G=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(B.a)(Object(B.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(B.a)(Object(B.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(B.a)(Object(B.a)({},Q),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},q=Object(W.b)({blockchain:z,data:G}),J=[Y.a],X=Object(W.c)(W.a.apply(void 0,J)),V=Object(W.d)(q,X),Z=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},$=function(){return function(){var n=Object(w.a)(A.a.mark((function n(t){var e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,V.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(Z("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},nn=function(n){return{type:"CONNECTION_FAILED",payload:n}},tn=function(n){return function(){var t=Object(w.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e($());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},en=e(5),cn=E.a.button(x||(x=Object(m.a)(["\n  padding: 10px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n"]))),an=E.a.button(j||(j=Object(m.a)(["\n  padding: 10px;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rn=E.a.div(b||(b=Object(m.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),on=(E.a.img(f||(f=Object(m.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),E.a.img(h||(h=Object(m.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),E.a.a(O||(O=Object(m.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))));var sn=function(){var n,t,e=Object(R.b)(),c=Object(R.c)((function(n){return n.blockchain})),a=Object(R.c)((function(n){return n.data})),r=Object(g.useState)(!1),o=Object(S.a)(r,2),i=o[0],s=o[1],l=Object(g.useState)("Click Mint button to get your NFT"),u=Object(S.a)(l,2),d=u[0],p=u[1],x=Object(g.useState)(1),j=Object(S.a)(x,2),b=j[0],f=j[1],h=Object(g.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(S.a)(h,2),C=O[0],y=O[1],v=function(){""!==c.account&&null!==c.smartContract&&e($(c.account))},m=function(){var n=Object(w.a)(A.a.mark((function n(){var t,e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,y(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(g.useEffect)((function(){m()}),[]),Object(g.useEffect)((function(){v()}),[c.account]),Object(en.jsxs)(N,{children:[Object(en.jsx)(D,{flex:1,ai:"center",style:{padding:30,width:"100%",boxShadow:"inset 0px -10px 10px -10px rgba(0,0,0,0.5)"},image:C.SHOW_BACKGROUND?"/config/images/bg.png":null}),Object(en.jsxs)(rn,{flex:1,style:{padding:20},test:!0,children:[Object(en.jsx)(k,{}),Object(en.jsxs)(D,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"#fff",padding:20,width:"100%"},children:[Object(en.jsxs)(I,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[a.totalSupply," / ",C.MAX_SUPPLY]}),Object(en.jsx)(L,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(en.jsx)(on,{target:"_blank",href:C.SCAN_LINK,children:(n=C.CONTRACT_ADDRESS,t=15,n.length>t?"".concat(n.substring(0,t),"..."):n)})}),Object(en.jsx)(_,{}),Number(a.totalSupply)>=C.MAX_SUPPLY?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(I,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(en.jsxs)(L,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",C.NFT_NAME," on"]}),Object(en.jsx)(_,{}),Object(en.jsx)(on,{target:"_blank",href:C.MARKETPLACE_LINK,children:C.MARKETPLACE})]}):Object(en.jsxs)(en.Fragment,{children:[Object(en.jsxs)(I,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",C.SYMBOL," costs ",C.DISPLAY_COST," ",C.NETWORK.SYMBOL]}),Object(en.jsx)(T,{}),Object(en.jsx)(_,{}),""===c.account||null===c.smartContract?Object(en.jsxs)(D,{ai:"center",jc:"center",children:[Object(en.jsxs)(L,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect your wallet to the ",C.NETWORK.NAME," network"]}),Object(en.jsx)(_,{}),Object(en.jsx)(cn,{onClick:function(n){n.preventDefault(),e(function(){var n=Object(w.a)(A.a.mark((function n(t){var e,c,a,r,o,i,s,l,u;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:if(r=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return K.a.setProvider(i),s=new P.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==r.NETWORK.ID?(u=new K.a(c,r.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(n){t(tn(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(nn("Change network to ".concat(r.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(nn("Something went wrong."));case 31:n.next=34;break;case 33:t(nn("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(_,{}),Object(en.jsx)(L,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(L,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}),Object(en.jsx)(M,{}),Object(en.jsxs)(D,{ai:"center",jc:"center",fd:"row",children:[Object(en.jsx)(an,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=b-1;n<1&&(n=1),f(n)}()},children:"-"}),Object(en.jsx)(M,{}),Object(en.jsx)(L,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(en.jsx)(M,{}),Object(en.jsx)(an,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=b+1;n>20&&(n=20),f(n)}()},children:"+"})]}),Object(en.jsx)(_,{}),Object(en.jsx)(D,{ai:"center",jc:"center",fd:"row",children:Object(en.jsx)(cn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=C.WEI_COST,t=C.GAS_LIMIT,r=String(n*b),o=String(t*b);p("Minting your ".concat(C.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(b,"ipfs://Qmays2cNJRFRnKNMnmpxEpVBVsvEQF4BfFAFpbp2uhNCxd").send({gasLimit:String(o),to:C.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(n){console.log(n),p("Sorry, something went wrong please try again later."),s(!1)})).then((function(n){var t=+a.totalSupply+1;p("Yes, you did it, the ".concat(C.NFT_NAME," is yours! NFT ID: ").concat(t)),s(!1),e($(c.account))}))}(),v()},children:i?"MINTING":"MINT"})})]})]}),Object(en.jsx)(M,{})]}),Object(en.jsx)(k,{})]})]})},ln=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,587)).then((function(t){var e=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),c(n),a(n),r(n),o(n)}))};e(583);y.a.render(Object(en.jsx)(R.a,{store:V,children:Object(en.jsx)(sn,{})}),document.getElementById("root")),ln()}},[[584,1,2]]]);
//# sourceMappingURL=main.b7b1144d.chunk.js.map