import{V as Xe,C as ee,a as te,X as xn,Y as rt,t as U,u as F,v as k,x as c,y as se,o as j,c as z,O as K,i as O,f as N,E as ne,R as M,Z as qe,_ as li,z as H,$ as Fe,D as Rn,T as ln,e as Ve,M as ci,m as ui,L as Ue,K as _n,G as di}from"./core-CBxhYKy6.js";import{n as u,c as B,o as A,r as x,U as de,i as Wi,t as Si,e as Ti}from"./index-DqIiR3KN.js";import{f as Pi}from"./index-DrPtYJqa.js";import"./Web3Context-Bmn1tUBG.js";import"./index.es-GVOEAyIe.js";const Ai={NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",11155111:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200","00000008819873e925422c1ff0f99f7c":"b3406e4a-bbfc-44fb-e3a6-89673c78b700"}},Bi="rpc.walletconnect.org";function In(e,t){const i=new URL("https://rpc.walletconnect.org/v1/");return i.searchParams.set("chainId",e),i.searchParams.set("projectId",t),i.toString()}const Bt=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","eip155:80094","eip155:80069","eip155:560048","eip155:31","eip155:2818","eip155:57054","eip155:911867","eip155:534351","eip155:1112","eip155:534352","eip155:1111","eip155:146","eip155:130","eip155:1284","eip155:30","eip155:2810","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],hi={extendRpcUrlWithProjectId(e,t){let i=!1;try{i=new URL(e).host===Bi}catch{i=!1}if(i){const r=new URL(e);return r.searchParams.has("projectId")||r.searchParams.set("projectId",t),r.toString()}return e},isCaipNetwork(e){return"chainNamespace"in e&&"caipNetworkId"in e},getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:te.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${te.CHAIN.EVM}:${e.id}`},getDefaultRpcUrl(e,t,i){const r=e.rpcUrls?.default?.http?.[0];return Bt.includes(t)?In(t,i):r||""},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:i,customRpcUrls:r}){const o=this.getChainNamespace(e),n=this.getCaipNetworkId(e),s=e.rpcUrls?.default?.http?.[0],a=this.getDefaultRpcUrl(e,n,i),l=e?.rpcUrls?.chainDefault?.http?.[0]||s,d=r?.[n]?.map(f=>f.url)||[],h=[...d,...a?[a]:[]],$=[...d];return l&&!$.includes(l)&&$.push(l),{...e,chainNamespace:o,caipNetworkId:n,assets:{imageId:Ai.NetworkImageIds[e.id],imageUrl:t?.[e.id]},rpcUrls:{...e.rpcUrls,default:{http:h},chainDefault:{http:$}}}},extendCaipNetworks(e,{customNetworkImageUrls:t,projectId:i,customRpcUrls:r}){return e.map(o=>hi.extendCaipNetwork(o,{customNetworkImageUrls:t,customRpcUrls:r,projectId:i}))},getViemTransport(e,t,i){const r=[];return i?.forEach(o=>{r.push(rt(o.url,o.config))}),Bt.includes(e.caipNetworkId)&&r.push(rt(In(e.caipNetworkId,t),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),e?.rpcUrls?.default?.http?.forEach(o=>{r.push(rt(o))}),xn(r)},extendWagmiTransports(e,t,i){if(Bt.includes(e.caipNetworkId)){const r=this.getDefaultRpcUrl(e,e.caipNetworkId,t);return xn([i,rt(r)])}return i},getUnsupportedNetwork(e){return{id:e.split(":")[1],caipNetworkId:e,name:te.UNSUPPORTED_NETWORK_NAME,chainNamespace:e.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(e){const t=Xe.getActiveCaipNetworkId(),i=ee.getAllRequestedCaipNetworks(),r=Array.from(ee.state.chains?.keys()||[]),o=t?.split(":")[0],n=o?r.includes(o):!1,s=i?.find(l=>l.caipNetworkId===t);return n&&!s&&t?this.getUnsupportedNetwork(t):s||e||i?.[0]}},Ni=U`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var Ie=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let he=class extends k{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="1";return this.size==="lg"?t="4":this.size==="md"?t="2":this.size==="sm"&&(t="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${t});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),c`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?c`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:c`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};he.styles=[F,Ni];Ie([u()],he.prototype,"size",void 0);Ie([u()],he.prototype,"name",void 0);Ie([u()],he.prototype,"imageSrc",void 0);Ie([u()],he.prototype,"walletIcon",void 0);Ie([u({type:Boolean})],he.prototype,"installed",void 0);Ie([u()],he.prototype,"badgeSize",void 0);he=Ie([B("wui-wallet-image")],he);const Li=U`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var fi=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const Nt=4;let at=class extends k{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Nt;return c`${this.walletImages.slice(0,Nt).map(({src:i,walletName:r})=>c`
          <wui-wallet-image
            size="sm"
            imageSrc=${i}
            name=${A(r)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(Nt-this.walletImages.length)].map(()=>c` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};at.styles=[F,Li];fi([u({type:Array})],at.prototype,"walletImages",void 0);at=fi([B("wui-all-wallets-image")],at);const Oi=U`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }
`;var J=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let V=class extends k{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,c`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${A(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?c` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?c` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?c`<wui-wallet-image
        size=${A(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?c`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?c`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?c`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};V.styles=[F,se,Oi];J([u({type:Array})],V.prototype,"walletImages",void 0);J([u()],V.prototype,"imageSrc",void 0);J([u()],V.prototype,"name",void 0);J([u()],V.prototype,"size",void 0);J([u()],V.prototype,"tagLabel",void 0);J([u()],V.prototype,"tagVariant",void 0);J([u()],V.prototype,"walletIcon",void 0);J([u()],V.prototype,"tabIdx",void 0);J([u({type:Boolean})],V.prototype,"disabled",void 0);J([u({type:Boolean})],V.prototype,"showAllWallets",void 0);J([u({type:Boolean})],V.prototype,"loading",void 0);J([u({type:String})],V.prototype,"loadingSpinnerColor",void 0);V=J([B("wui-list-wallet")],V);var Le=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let be=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=j.state.connectors,this.count=z.state.count,this.filteredCount=z.state.filteredWallets.length,this.isFetchingRecommendedWallets=z.state.isFetchingRecommendedWallets,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t),z.subscribeKey("count",t=>this.count=t),z.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),z.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(d=>d.id==="walletConnect"),{allWallets:i}=K.state;if(!t||i==="HIDE"||i==="ONLY_MOBILE"&&!O.isMobile())return null;const r=z.state.featured.length,o=this.count+r,n=o<10?o:Math.floor(o/10)*10,s=this.filteredCount>0?this.filteredCount:n;let a=`${s}`;this.filteredCount>0?a=`${this.filteredCount}`:s<o&&(a=`${s}+`);const l=N.hasAnyConnection(te.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${A(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){ne.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),M.push("AllWallets")}};Le([u()],be.prototype,"tabIdx",void 0);Le([x()],be.prototype,"connectors",void 0);Le([x()],be.prototype,"count",void 0);Le([x()],be.prototype,"filteredCount",void 0);Le([x()],be.prototype,"isFetchingRecommendedWallets",void 0);be=Le([B("w3m-all-wallets-widget")],be);var vt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ke=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=j.state.connectors,this.connections=N.state.connections,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t),N.subscribeKey("connections",t=>this.connections=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(i=>i.type==="ANNOUNCED");return t?.length?c`
      <wui-flex flexDirection="column" gap="2">
        ${t.filter(qe.showConnector).map(i=>{const o=(this.connections.get(i.chain)??[]).some(n=>li.isLowerCaseMatch(n.connectorId,i.id));return c`
            <wui-list-wallet
              imageSrc=${A(H.getConnectorImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnector(i)}
              tagVariant=${o?"info":"success"}
              tagLabel=${o?"connected":"installed"}
              size="sm"
              data-testid=${`wallet-selector-${i.id}`}
              .installed=${!0}
              tabIdx=${A(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){t.id==="walletConnect"?O.isMobile()?M.push("AllWallets"):M.push("ConnectingWalletConnect"):M.push("ConnectingExternal",{connector:t})}};vt([u()],Ke.prototype,"tabIdx",void 0);vt([x()],Ke.prototype,"connectors",void 0);vt([x()],Ke.prototype,"connections",void 0);Ke=vt([B("w3m-connect-announced-widget")],Ke);var $t=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let He=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=j.state.connectors,this.loading=!1,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t)),O.isTelegram()&&O.isIos()&&(this.loading=!N.state.wcUri,this.unsubscribe.push(N.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=K.state;if(!t?.length)return this.style.cssText="display: none",null;const i=this.filterOutDuplicateWallets(t),r=N.hasAnyConnection(te.CONNECTOR_ID.WALLET_CONNECT);return c`<wui-flex flexDirection="column" gap="2">
      ${i.map(o=>c`
          <wui-list-wallet
            imageSrc=${A(H.getWalletImage(o))}
            name=${o.name??"Unknown"}
            @click=${()=>this.onConnectWallet(o)}
            size="sm"
            data-testid=${`wallet-selector-${o.id}`}
            tabIdx=${A(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${r}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const i=Xe.getRecentWallets(),r=this.connectors.map(a=>a.info?.rdns).filter(Boolean),o=i.map(a=>a.rdns).filter(Boolean),n=r.concat(o);if(n.includes("io.metamask.mobile")&&O.isMobile()){const a=n.indexOf("io.metamask.mobile");n[a]="io.metamask"}return t.filter(a=>!n.includes(String(a?.rdns)))}onConnectWallet(t){this.loading||M.push("ConnectingWalletConnect",{wallet:t})}};$t([u()],He.prototype,"tabIdx",void 0);$t([x()],He.prototype,"connectors",void 0);$t([x()],He.prototype,"loading",void 0);He=$t([B("w3m-connect-custom-widget")],He);var dn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let lt=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=j.state.connectors,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const r=this.connectors.filter(n=>n.type==="EXTERNAL").filter(qe.showConnector).filter(n=>n.id!==te.CONNECTOR_ID.COINBASE_SDK);if(!r?.length)return this.style.cssText="display: none",null;const o=N.hasAnyConnection(te.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${r.map(n=>c`
            <wui-list-wallet
              imageSrc=${A(H.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              data-testid=${`wallet-selector-external-${n.id}`}
              size="sm"
              @click=${()=>this.onConnector(n)}
              tabIdx=${A(this.tabIdx)}
              ?disabled=${o}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(t){M.push("ConnectingExternal",{connector:t})}};dn([u()],lt.prototype,"tabIdx",void 0);dn([x()],lt.prototype,"connectors",void 0);lt=dn([B("w3m-connect-external-widget")],lt);var hn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ct=class extends k{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;const t=N.hasAnyConnection(te.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${this.wallets.map(i=>c`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${i.id}`}
              imageSrc=${A(H.getWalletImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnectWallet(i)}
              tabIdx=${A(this.tabIdx)}
              size="sm"
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(t){j.selectWalletConnector(t)}};hn([u()],ct.prototype,"tabIdx",void 0);hn([u()],ct.prototype,"wallets",void 0);ct=hn([B("w3m-connect-featured-widget")],ct);var Ct=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ge=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=N.state.connections,this.unsubscribe.push(N.subscribeKey("connections",t=>this.connections=t))}render(){const t=this.connectors.filter(qe.showConnector);return t.length===0?(this.style.cssText="display: none",null):c`
      <wui-flex flexDirection="column" gap="2">
        ${t.map(i=>{const o=(this.connections.get(i.chain)??[]).some(n=>li.isLowerCaseMatch(n.connectorId,i.id));return c`
            <wui-list-wallet
              imageSrc=${A(H.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant=${o?"info":"success"}
              tagLabel=${o?"connected":"installed"}
              data-testid=${`wallet-selector-${i.id}`}
              size="sm"
              @click=${()=>this.onConnector(i)}
              tabIdx=${A(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(t){j.setActiveConnector(t),M.push("ConnectingExternal",{connector:t})}};Ct([u()],Ge.prototype,"tabIdx",void 0);Ct([u()],Ge.prototype,"connectors",void 0);Ct([x()],Ge.prototype,"connections",void 0);Ge=Ct([B("w3m-connect-injected-widget")],Ge);var fn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ut=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=j.state.connectors,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(i=>i.type==="MULTI_CHAIN"&&i.name!=="WalletConnect");return t?.length?c`
      <wui-flex flexDirection="column" gap="2">
        ${t.map(i=>c`
            <wui-list-wallet
              imageSrc=${A(H.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="info"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${i.id}`}
              size="sm"
              @click=${()=>this.onConnector(i)}
              tabIdx=${A(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){j.setActiveConnector(t),M.push("ConnectingMultiChain")}};fn([u()],ut.prototype,"tabIdx",void 0);fn([x()],ut.prototype,"connectors",void 0);ut=fn([B("w3m-connect-multi-chain-widget")],ut);var xt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ye=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=j.state.connectors,this.loading=!1,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t)),O.isTelegram()&&O.isIos()&&(this.loading=!N.state.wcUri,this.unsubscribe.push(N.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const i=Xe.getRecentWallets().filter(o=>!Fe.isExcluded(o)).filter(o=>!this.hasWalletConnector(o)).filter(o=>this.isWalletCompatibleWithCurrentChain(o));if(!i.length)return this.style.cssText="display: none",null;const r=N.hasAnyConnection(te.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${i.map(o=>c`
            <wui-list-wallet
              imageSrc=${A(H.getWalletImage(o))}
              name=${o.name??"Unknown"}
              @click=${()=>this.onConnectWallet(o)}
              tagLabel="recent"
              tagVariant="info"
              size="sm"
              tabIdx=${A(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${r}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(t){this.loading||j.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some(i=>i.id===t.id||i.name===t.name)}isWalletCompatibleWithCurrentChain(t){const i=ee.state.activeChain;return i&&t.chains?t.chains.some(r=>{const o=r.split(":")[0];return i===o}):!0}};xt([u()],Ye.prototype,"tabIdx",void 0);xt([x()],Ye.prototype,"connectors",void 0);xt([x()],Ye.prototype,"loading",void 0);Ye=xt([B("w3m-connect-recent-widget")],Ye);var Rt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Je=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,O.isTelegram()&&O.isIos()&&(this.loading=!N.state.wcUri,this.unsubscribe.push(N.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=j.state,{customWallets:i,featuredWalletIds:r}=K.state,o=Xe.getRecentWallets(),n=t.find(f=>f.id==="walletConnect"),a=t.filter(f=>f.type==="INJECTED"||f.type==="ANNOUNCED"||f.type==="MULTI_CHAIN").filter(f=>f.name!=="Browser Wallet");if(!n)return null;if(r||i||!this.wallets.length)return this.style.cssText="display: none",null;const l=a.length+o.length,d=Math.max(0,2-l),h=Fe.filterOutDuplicateWallets(this.wallets).slice(0,d);if(!h.length)return this.style.cssText="display: none",null;const $=N.hasAnyConnection(te.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${h.map(f=>c`
            <wui-list-wallet
              imageSrc=${A(H.getWalletImage(f))}
              name=${f?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(f)}
              size="sm"
              tabIdx=${A(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${$}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(t){if(this.loading)return;const i=j.getConnector({id:t.id,rdns:t.rdns});i?M.push("ConnectingExternal",{connector:i}):M.push("ConnectingWalletConnect",{wallet:t})}};Rt([u()],Je.prototype,"tabIdx",void 0);Rt([u()],Je.prototype,"wallets",void 0);Rt([x()],Je.prototype,"loading",void 0);Je=Rt([B("w3m-connect-recommended-widget")],Je);var _t=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Qe=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=j.state.connectors,this.connectorImages=Rn.state.connectorImages,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t),Rn.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(O.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(o=>o.id==="walletConnect");if(!t)return this.style.cssText="display: none",null;const i=t.imageUrl||this.connectorImages[t?.imageId??""],r=N.hasAnyConnection(te.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-list-wallet
        imageSrc=${A(i)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="accent"
        tabIdx=${A(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        size="sm"
        ?disabled=${r}
      >
      </wui-list-wallet>
    `}onConnector(t){j.setActiveConnector(t),M.push("ConnectingWalletConnect")}};_t([u()],Qe.prototype,"tabIdx",void 0);_t([x()],Qe.prototype,"connectors",void 0);_t([x()],Qe.prototype,"connectorImages",void 0);Qe=_t([B("w3m-connect-walletconnect-widget")],Qe);const ki=U`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Ze=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ye=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=j.state.connectors,this.recommended=z.state.recommended,this.featured=z.state.featured,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t),z.subscribeKey("recommended",t=>this.recommended=t),z.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return c`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:i,announced:r,injected:o,multiChain:n,recommended:s,featured:a,external:l}=qe.getConnectorsByType(this.connectors,this.recommended,this.featured);return qe.getConnectorTypeOrder({custom:t,recent:i,announced:r,injected:o,multiChain:n,recommended:s,featured:a,external:l}).map(h=>{switch(h){case"injected":return c`
            ${n.length?c`<w3m-connect-multi-chain-widget
                  tabIdx=${A(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${r.length?c`<w3m-connect-announced-widget
                  tabIdx=${A(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${o.length?c`<w3m-connect-injected-widget
                  .connectors=${o}
                  tabIdx=${A(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return c`<w3m-connect-walletconnect-widget
            tabIdx=${A(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return c`<w3m-connect-recent-widget
            tabIdx=${A(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return c`<w3m-connect-featured-widget
            .wallets=${a}
            tabIdx=${A(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return c`<w3m-connect-custom-widget
            tabIdx=${A(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return c`<w3m-connect-external-widget
            tabIdx=${A(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return c`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${A(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${h}`),null}})}};ye.styles=ki;Ze([u()],ye.prototype,"tabIdx",void 0);Ze([x()],ye.prototype,"connectors",void 0);Ze([x()],ye.prototype,"recommended",void 0);Ze([x()],ye.prototype,"featured",void 0);ye=Ze([B("w3m-connector-list")],ye);const Di=U`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var et=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const zi={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},ji={lg:"md",md:"sm",sm:"sm"};let ve=class extends k{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return c`
      <button data-active=${this.active}>
        ${this.icon?c`<wui-icon size=${ji[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${zi[this.size]}> ${this.label} </wui-text>
      </button>
    `}};ve.styles=[F,se,Di];et([u()],ve.prototype,"icon",void 0);et([u()],ve.prototype,"size",void 0);et([u()],ve.prototype,"label",void 0);et([u({type:Boolean})],ve.prototype,"active",void 0);ve=et([B("wui-tab-item")],ve);const Ui=U`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var tt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let $e=class extends k{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((t,i)=>{const r=i===this.activeTab;return c`
        <wui-tab-item
          @click=${()=>this.onTabClick(i)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${r}
          data-active=${r}
          data-testid="tab-${t.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(t){this.activeTab=t,this.onTabChange(t)}};$e.styles=[F,se,Ui];tt([u({type:Array})],$e.prototype,"tabs",void 0);tt([u()],$e.prototype,"onTabChange",void 0);tt([u()],$e.prototype,"size",void 0);tt([x()],$e.prototype,"activeTab",void 0);$e=tt([B("wui-tabs")],$e);var pn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let dt=class extends k{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return c`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:i})=>i),t}onTabChange(t){const i=this.platformTabs[t];i&&this.onSelectPlatfrom?.(i)}};pn([u({type:Array})],dt.prototype,"platforms",void 0);pn([u()],dt.prototype,"onSelectPlatfrom",void 0);dt=pn([B("w3m-connecting-header")],dt);const Mi=U`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var Ee=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const qi={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},Fi={lg:"md",md:"md",sm:"sm"};let fe=class extends k{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;const t=this.textVariant??qi[this.size];return c`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const t=Fi[this.size],i=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return c`<wui-loading-spinner color=${i} size=${t}></wui-loading-spinner>`}return null}};fe.styles=[F,se,Mi];Ee([u()],fe.prototype,"size",void 0);Ee([u({type:Boolean})],fe.prototype,"disabled",void 0);Ee([u({type:Boolean})],fe.prototype,"fullWidth",void 0);Ee([u({type:Boolean})],fe.prototype,"loading",void 0);Ee([u()],fe.prototype,"variant",void 0);Ee([u()],fe.prototype,"textVariant",void 0);fe=Ee([B("wui-button")],fe);const Vi=U`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var pi=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ht=class extends k{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,o=116+r,n=245+r,s=360+r*1.75;return c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${n}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};ht.styles=[F,Vi];pi([u({type:Number})],ht.prototype,"radius",void 0);ht=pi([B("wui-loading-thumbnail")],ht);const Ki=U`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var It=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ae=class extends k{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return c`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ae.styles=[F,se,Ki];It([u({type:Boolean})],Ae.prototype,"disabled",void 0);It([u()],Ae.prototype,"label",void 0);It([u()],Ae.prototype,"buttonLabel",void 0);Ae=It([B("wui-cta-button")],Ae);const Hi=U`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var gi=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ft=class extends k{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:i,play_store:r,chrome_store:o,homepage:n}=this.wallet,s=O.isMobile(),a=O.isIos(),l=O.isAndroid(),d=[i,r,n,o].filter(Boolean).length>1,h=de.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return d&&!s?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>M.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&n?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&a?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&O.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&O.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&O.openHref(this.wallet.homepage,"_blank")}};ft.styles=[Hi];gi([u({type:Object})],ft.prototype,"wallet",void 0);ft=gi([B("w3m-mobile-download-links")],ft);const Gi=U`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var ie=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};class q extends k{constructor(){super(),this.wallet=M.state.data?.wallet,this.connector=M.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=H.getWalletImage(this.wallet)??H.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=N.state.wcUri,this.error=N.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(N.subscribeKey("wcUri",t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),N.subscribeKey("wcError",t=>this.error=t)),(O.isTelegram()||O.isSafari())&&O.isIos()&&N.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),N.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),c`
      <wui-flex
        data-error=${A(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${A(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?c`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?c`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){N.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const t=ln.state.themeVariables["--w3m-border-radius-master"],i=t?parseInt(t.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(O.copyToClopboard(this.uri),Ve.showSuccess("Link copied"))}catch{Ve.showError("Failed to copy")}}}q.styles=Gi;ie([x()],q.prototype,"isRetrying",void 0);ie([x()],q.prototype,"uri",void 0);ie([x()],q.prototype,"error",void 0);ie([x()],q.prototype,"ready",void 0);ie([x()],q.prototype,"showRetry",void 0);ie([x()],q.prototype,"label",void 0);ie([x()],q.prototype,"secondaryBtnLabel",void 0);ie([x()],q.prototype,"secondaryLabel",void 0);ie([x()],q.prototype,"isLoading",void 0);ie([u({type:Boolean})],q.prototype,"isMobile",void 0);ie([u()],q.prototype,"onRetry",void 0);var Yi=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let En=class extends q{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=j.state,i=t.find(r=>r.type==="ANNOUNCED"&&r.info?.rdns===this.wallet?.rdns||r.type==="INJECTED"||r.name===this.wallet?.name);if(i)await N.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");ci.close(),ne.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(t){ne.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};En=Yi([B("w3m-connecting-wc-browser")],En);var Ji=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Wn=class extends q{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:i}=this.wallet,{redirect:r,href:o}=O.formatNativeUrl(t,this.uri);N.setWcLinking({name:i,href:o}),N.setRecentWallet(this.wallet),O.openHref(r,"_blank")}catch{this.error=!0}}};Wn=Ji([B("w3m-connecting-wc-desktop")],Wn);var Oe=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ce=class extends q{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=K.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,link_mode:i,name:r}=this.wallet,{redirect:o,redirectUniversalLink:n,href:s}=O.formatNativeUrl(t,this.uri,i);this.redirectDeeplink=o,this.redirectUniversalLink=n,this.target=O.isIframe()?"_top":"_self",N.setWcLinking({name:r,href:s}),N.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?O.openHref(this.redirectUniversalLink,this.target):O.openHref(this.redirectDeeplink,this.target)}catch(t){ne.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=ui.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(N.subscribeKey("wcUri",()=>{this.onHandleURI()})),ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){N.setWcError(!1),this.onConnect?.()}};Oe([x()],Ce.prototype,"redirectDeeplink",void 0);Oe([x()],Ce.prototype,"redirectUniversalLink",void 0);Oe([x()],Ce.prototype,"target",void 0);Oe([x()],Ce.prototype,"preferUniversalLinks",void 0);Oe([x()],Ce.prototype,"isLoading",void 0);Ce=Oe([B("w3m-connecting-wc-mobile")],Ce);var Pe={},Lt,Sn;function Qi(){return Sn||(Sn=1,Lt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Lt}var Ot={},ge={},Tn;function We(){if(Tn)return ge;Tn=1;let e;const t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return ge.getSymbolSize=function(r){if(!r)throw new Error('"version" cannot be null or undefined');if(r<1||r>40)throw new Error('"version" should be in range from 1 to 40');return r*4+17},ge.getSymbolTotalCodewords=function(r){return t[r]},ge.getBCHDigit=function(i){let r=0;for(;i!==0;)r++,i>>>=1;return r},ge.setToSJISFunction=function(r){if(typeof r!="function")throw new Error('"toSJISFunc" is not a valid function.');e=r},ge.isKanjiModeEnabled=function(){return typeof e<"u"},ge.toSJIS=function(r){return e(r)},ge}var kt={},Pn;function gn(){return Pn||(Pn=1,function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}}(kt)),kt}var Dt,An;function Xi(){if(An)return Dt;An=1;function e(){this.buffer=[],this.length=0}return e.prototype={get:function(t){const i=Math.floor(t/8);return(this.buffer[i]>>>7-t%8&1)===1},put:function(t,i){for(let r=0;r<i;r++)this.putBit((t>>>i-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const i=Math.floor(this.length/8);this.buffer.length<=i&&this.buffer.push(0),t&&(this.buffer[i]|=128>>>this.length%8),this.length++}},Dt=e,Dt}var zt,Bn;function Zi(){if(Bn)return zt;Bn=1;function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return e.prototype.set=function(t,i,r,o){const n=t*this.size+i;this.data[n]=r,o&&(this.reservedBit[n]=!0)},e.prototype.get=function(t,i){return this.data[t*this.size+i]},e.prototype.xor=function(t,i,r){this.data[t*this.size+i]^=r},e.prototype.isReserved=function(t,i){return this.reservedBit[t*this.size+i]},zt=e,zt}var jt={},Nn;function eo(){return Nn||(Nn=1,function(e){const t=We().getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,a=[n-7];for(let l=1;l<o-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||o.push([n[a],n[l]]);return o}}(jt)),jt}var Ut={},Ln;function to(){if(Ln)return Ut;Ln=1;const e=We().getSymbolSize,t=7;return Ut.getPositions=function(r){const o=e(r);return[[0,0],[o-t,0],[0,o-t]]},Ut}var Mt={},On;function no(){return On||(On=1,function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,a=0,l=0,d=null,h=null;for(let $=0;$<n;$++){a=l=0,d=h=null;for(let f=0;f<n;f++){let g=o.get($,f);g===d?a++:(a>=5&&(s+=t.N1+(a-5)),d=g,a=1),g=o.get(f,$),g===h?l++:(l>=5&&(s+=t.N1+(l-5)),h=g,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let a=0;a<n-1;a++)for(let l=0;l<n-1;l++){const d=o.get(a,l)+o.get(a,l+1)+o.get(a+1,l)+o.get(a+1,l+1);(d===4||d===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,a=0,l=0;for(let d=0;d<n;d++){a=l=0;for(let h=0;h<n;h++)a=a<<1&2047|o.get(d,h),h>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|o.get(h,d),h>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let l=0;l<s;l++)n+=o.data[l];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)n.isReserved(l,a)||n.xor(l,a,i(o,l,a))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let d=0;d<s;d++){n(d),e.applyMask(d,o);const h=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(d,o),h<l&&(l=h,a=d)}return a}}(Mt)),Mt}var st={},kn;function mi(){if(kn)return st;kn=1;const e=gn(),t=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return st.getBlocksCount=function(o,n){switch(n){case e.L:return t[(o-1)*4+0];case e.M:return t[(o-1)*4+1];case e.Q:return t[(o-1)*4+2];case e.H:return t[(o-1)*4+3];default:return}},st.getTotalCodewordsCount=function(o,n){switch(n){case e.L:return i[(o-1)*4+0];case e.M:return i[(o-1)*4+1];case e.Q:return i[(o-1)*4+2];case e.H:return i[(o-1)*4+3];default:return}},st}var qt={},je={},Dn;function io(){if(Dn)return je;Dn=1;const e=new Uint8Array(512),t=new Uint8Array(256);return function(){let r=1;for(let o=0;o<255;o++)e[o]=r,t[r]=o,r<<=1,r&256&&(r^=285);for(let o=255;o<512;o++)e[o]=e[o-255]}(),je.log=function(r){if(r<1)throw new Error("log("+r+")");return t[r]},je.exp=function(r){return e[r]},je.mul=function(r,o){return r===0||o===0?0:e[t[r]+t[o]]},je}var zn;function oo(){return zn||(zn=1,function(e){const t=io();e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)n[s+a]^=t.mul(r[s],o[a]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let l=0;l<o.length;l++)n[l]^=t.mul(o[l],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}}(qt)),qt}var Ft,jn;function ro(){if(jn)return Ft;jn=1;const e=oo();function t(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}return t.prototype.initialize=function(r){this.degree=r,this.genPoly=e.generateECPolynomial(this.degree)},t.prototype.encode=function(r){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(r.length+this.degree);o.set(r);const n=e.mod(o,this.genPoly),s=this.degree-n.length;if(s>0){const a=new Uint8Array(this.degree);return a.set(n,s),a}return n},Ft=t,Ft}var Vt={},Kt={},Ht={},Un;function wi(){return Un||(Un=1,Ht.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),Ht}var oe={},Mn;function bi(){if(Mn)return oe;Mn=1;const e="[0-9]+",t="[A-Z $%*+\\-./:]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+`)(?:.|[\r
]))+`;oe.KANJI=new RegExp(i,"g"),oe.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),oe.BYTE=new RegExp(r,"g"),oe.NUMERIC=new RegExp(e,"g"),oe.ALPHANUMERIC=new RegExp(t,"g");const o=new RegExp("^"+i+"$"),n=new RegExp("^"+e+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return oe.testKanji=function(l){return o.test(l)},oe.testNumeric=function(l){return n.test(l)},oe.testAlphanumeric=function(l){return s.test(l)},oe}var qn;function Se(){return qn||(qn=1,function(e){const t=wi(),i=bi();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}}(Kt)),Kt}var Fn;function so(){return Fn||(Fn=1,function(e){const t=We(),i=mi(),r=gn(),o=Se(),n=wi(),s=7973,a=t.getBCHDigit(s);function l(f,g,E){for(let y=1;y<=40;y++)if(g<=e.getCapacity(y,E,f))return y}function d(f,g){return o.getCharCountIndicator(f,g)+4}function h(f,g){let E=0;return f.forEach(function(y){const W=d(y.mode,g);E+=W+y.getBitsLength()}),E}function $(f,g){for(let E=1;E<=40;E++)if(h(f,E)<=e.getCapacity(E,g,o.MIXED))return E}e.from=function(g,E){return n.isValid(g)?parseInt(g,10):E},e.getCapacity=function(g,E,y){if(!n.isValid(g))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=o.BYTE);const W=t.getSymbolTotalCodewords(g),w=i.getTotalCodewordsCount(g,E),m=(W-w)*8;if(y===o.MIXED)return m;const b=m-d(y,g);switch(y){case o.NUMERIC:return Math.floor(b/10*3);case o.ALPHANUMERIC:return Math.floor(b/11*2);case o.KANJI:return Math.floor(b/13);case o.BYTE:default:return Math.floor(b/8)}},e.getBestVersionForData=function(g,E){let y;const W=r.from(E,r.M);if(Array.isArray(g)){if(g.length>1)return $(g,W);if(g.length===0)return 1;y=g[0]}else y=g;return l(y.mode,y.getLength(),W)},e.getEncodedBits=function(g){if(!n.isValid(g)||g<7)throw new Error("Invalid QR Code version");let E=g<<12;for(;t.getBCHDigit(E)-a>=0;)E^=s<<t.getBCHDigit(E)-a;return g<<12|E}}(Vt)),Vt}var Gt={},Vn;function ao(){if(Vn)return Gt;Vn=1;const e=We(),t=1335,i=21522,r=e.getBCHDigit(t);return Gt.getEncodedBits=function(n,s){const a=n.bit<<3|s;let l=a<<10;for(;e.getBCHDigit(l)-r>=0;)l^=t<<e.getBCHDigit(l)-r;return(a<<10|l)^i},Gt}var Yt={},Jt,Kn;function lo(){if(Kn)return Jt;Kn=1;const e=Se();function t(i){this.mode=e.NUMERIC,this.data=i.toString()}return t.getBitsLength=function(r){return 10*Math.floor(r/3)+(r%3?r%3*3+1:0)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let o,n,s;for(o=0;o+3<=this.data.length;o+=3)n=this.data.substr(o,3),s=parseInt(n,10),r.put(s,10);const a=this.data.length-o;a>0&&(n=this.data.substr(o),s=parseInt(n,10),r.put(s,a*3+1))},Jt=t,Jt}var Qt,Hn;function co(){if(Hn)return Qt;Hn=1;const e=Se(),t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(r){this.mode=e.ALPHANUMERIC,this.data=r}return i.getBitsLength=function(o){return 11*Math.floor(o/2)+6*(o%2)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(o){let n;for(n=0;n+2<=this.data.length;n+=2){let s=t.indexOf(this.data[n])*45;s+=t.indexOf(this.data[n+1]),o.put(s,11)}this.data.length%2&&o.put(t.indexOf(this.data[n]),6)},Qt=i,Qt}var Xt,Gn;function uo(){return Gn||(Gn=1,Xt=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer}),Xt}var Zt,Yn;function ho(){if(Yn)return Zt;Yn=1;const e=uo(),t=Se();function i(r){this.mode=t.BYTE,typeof r=="string"&&(r=e(r)),this.data=new Uint8Array(r)}return i.getBitsLength=function(o){return o*8},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(r){for(let o=0,n=this.data.length;o<n;o++)r.put(this.data[o],8)},Zt=i,Zt}var en,Jn;function fo(){if(Jn)return en;Jn=1;const e=Se(),t=We();function i(r){this.mode=e.KANJI,this.data=r}return i.getBitsLength=function(o){return o*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(r){let o;for(o=0;o<this.data.length;o++){let n=t.toSJIS(this.data[o]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[o]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),r.put(n,13)}},en=i,en}var tn={exports:{}},Qn;function po(){return Qn||(Qn=1,function(e){var t={single_source_shortest_paths:function(i,r,o){var n={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var l,d,h,$,f,g,E,y,W;!a.empty();){l=a.pop(),d=l.value,$=l.cost,f=i[d]||{};for(h in f)f.hasOwnProperty(h)&&(g=f[h],E=$+g,y=s[h],W=typeof s[h]>"u",(W||y>E)&&(s[h]=E,a.push(h,E),n[h]=d))}if(typeof o<"u"&&typeof s[o]>"u"){var w=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(w)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=t.single_source_shortest_paths(i,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t}(tn)),tn.exports}var Xn;function go(){return Xn||(Xn=1,function(e){const t=Se(),i=lo(),r=co(),o=ho(),n=fo(),s=bi(),a=We(),l=po();function d(w){return unescape(encodeURIComponent(w)).length}function h(w,m,b){const p=[];let D;for(;(D=w.exec(b))!==null;)p.push({data:D[0],index:D.index,mode:m,length:D[0].length});return p}function $(w){const m=h(s.NUMERIC,t.NUMERIC,w),b=h(s.ALPHANUMERIC,t.ALPHANUMERIC,w);let p,D;return a.isKanjiModeEnabled()?(p=h(s.BYTE,t.BYTE,w),D=h(s.KANJI,t.KANJI,w)):(p=h(s.BYTE_KANJI,t.BYTE,w),D=[]),m.concat(b,p,D).sort(function(S,I){return S.index-I.index}).map(function(S){return{data:S.data,mode:S.mode,length:S.length}})}function f(w,m){switch(m){case t.NUMERIC:return i.getBitsLength(w);case t.ALPHANUMERIC:return r.getBitsLength(w);case t.KANJI:return n.getBitsLength(w);case t.BYTE:return o.getBitsLength(w)}}function g(w){return w.reduce(function(m,b){const p=m.length-1>=0?m[m.length-1]:null;return p&&p.mode===b.mode?(m[m.length-1].data+=b.data,m):(m.push(b),m)},[])}function E(w){const m=[];for(let b=0;b<w.length;b++){const p=w[b];switch(p.mode){case t.NUMERIC:m.push([p,{data:p.data,mode:t.ALPHANUMERIC,length:p.length},{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.ALPHANUMERIC:m.push([p,{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.KANJI:m.push([p,{data:p.data,mode:t.BYTE,length:d(p.data)}]);break;case t.BYTE:m.push([{data:p.data,mode:t.BYTE,length:d(p.data)}])}}return m}function y(w,m){const b={},p={start:{}};let D=["start"];for(let C=0;C<w.length;C++){const S=w[C],I=[];for(let v=0;v<S.length;v++){const P=S[v],R=""+C+v;I.push(R),b[R]={node:P,lastCount:0},p[R]={};for(let T=0;T<D.length;T++){const _=D[T];b[_]&&b[_].node.mode===P.mode?(p[_][R]=f(b[_].lastCount+P.length,P.mode)-f(b[_].lastCount,P.mode),b[_].lastCount+=P.length):(b[_]&&(b[_].lastCount=P.length),p[_][R]=f(P.length,P.mode)+4+t.getCharCountIndicator(P.mode,m))}}D=I}for(let C=0;C<D.length;C++)p[D[C]].end=0;return{map:p,table:b}}function W(w,m){let b;const p=t.getBestModeForData(w);if(b=t.from(m,p),b!==t.BYTE&&b.bit<p.bit)throw new Error('"'+w+'" cannot be encoded with mode '+t.toString(b)+`.
 Suggested mode is: `+t.toString(p));switch(b===t.KANJI&&!a.isKanjiModeEnabled()&&(b=t.BYTE),b){case t.NUMERIC:return new i(w);case t.ALPHANUMERIC:return new r(w);case t.KANJI:return new n(w);case t.BYTE:return new o(w)}}e.fromArray=function(m){return m.reduce(function(b,p){return typeof p=="string"?b.push(W(p,null)):p.data&&b.push(W(p.data,p.mode)),b},[])},e.fromString=function(m,b){const p=$(m,a.isKanjiModeEnabled()),D=E(p),C=y(D,b),S=l.find_path(C.map,"start","end"),I=[];for(let v=1;v<S.length-1;v++)I.push(C.table[S[v]].node);return e.fromArray(g(I))},e.rawSplit=function(m){return e.fromArray($(m,a.isKanjiModeEnabled()))}}(Yt)),Yt}var Zn;function mo(){if(Zn)return Ot;Zn=1;const e=We(),t=gn(),i=Xi(),r=Zi(),o=eo(),n=to(),s=no(),a=mi(),l=ro(),d=so(),h=ao(),$=Se(),f=go();function g(C,S){const I=C.size,v=n.getPositions(S);for(let P=0;P<v.length;P++){const R=v[P][0],T=v[P][1];for(let _=-1;_<=7;_++)if(!(R+_<=-1||I<=R+_))for(let L=-1;L<=7;L++)T+L<=-1||I<=T+L||(_>=0&&_<=6&&(L===0||L===6)||L>=0&&L<=6&&(_===0||_===6)||_>=2&&_<=4&&L>=2&&L<=4?C.set(R+_,T+L,!0,!0):C.set(R+_,T+L,!1,!0))}}function E(C){const S=C.size;for(let I=8;I<S-8;I++){const v=I%2===0;C.set(I,6,v,!0),C.set(6,I,v,!0)}}function y(C,S){const I=o.getPositions(S);for(let v=0;v<I.length;v++){const P=I[v][0],R=I[v][1];for(let T=-2;T<=2;T++)for(let _=-2;_<=2;_++)T===-2||T===2||_===-2||_===2||T===0&&_===0?C.set(P+T,R+_,!0,!0):C.set(P+T,R+_,!1,!0)}}function W(C,S){const I=C.size,v=d.getEncodedBits(S);let P,R,T;for(let _=0;_<18;_++)P=Math.floor(_/3),R=_%3+I-8-3,T=(v>>_&1)===1,C.set(P,R,T,!0),C.set(R,P,T,!0)}function w(C,S,I){const v=C.size,P=h.getEncodedBits(S,I);let R,T;for(R=0;R<15;R++)T=(P>>R&1)===1,R<6?C.set(R,8,T,!0):R<8?C.set(R+1,8,T,!0):C.set(v-15+R,8,T,!0),R<8?C.set(8,v-R-1,T,!0):R<9?C.set(8,15-R-1+1,T,!0):C.set(8,15-R-1,T,!0);C.set(v-8,8,1,!0)}function m(C,S){const I=C.size;let v=-1,P=I-1,R=7,T=0;for(let _=I-1;_>0;_-=2)for(_===6&&_--;;){for(let L=0;L<2;L++)if(!C.isReserved(P,_-L)){let pe=!1;T<S.length&&(pe=(S[T]>>>R&1)===1),C.set(P,_-L,pe),R--,R===-1&&(T++,R=7)}if(P+=v,P<0||I<=P){P-=v,v=-v;break}}}function b(C,S,I){const v=new i;I.forEach(function(L){v.put(L.mode.bit,4),v.put(L.getLength(),$.getCharCountIndicator(L.mode,C)),L.write(v)});const P=e.getSymbolTotalCodewords(C),R=a.getTotalCodewordsCount(C,S),T=(P-R)*8;for(v.getLengthInBits()+4<=T&&v.put(0,4);v.getLengthInBits()%8!==0;)v.putBit(0);const _=(T-v.getLengthInBits())/8;for(let L=0;L<_;L++)v.put(L%2?17:236,8);return p(v,C,S)}function p(C,S,I){const v=e.getSymbolTotalCodewords(S),P=a.getTotalCodewordsCount(S,I),R=v-P,T=a.getBlocksCount(S,I),_=v%T,L=T-_,pe=Math.floor(v/T),ze=Math.floor(R/T),_i=ze+1,vn=pe-ze,Ii=new l(vn);let St=0;const ot=new Array(T),$n=new Array(T);let Tt=0;const Ei=new Uint8Array(C.buffer);for(let Te=0;Te<T;Te++){const At=Te<L?ze:_i;ot[Te]=Ei.slice(St,St+At),$n[Te]=Ii.encode(ot[Te]),St+=At,Tt=Math.max(Tt,At)}const Pt=new Uint8Array(v);let Cn=0,le,ce;for(le=0;le<Tt;le++)for(ce=0;ce<T;ce++)le<ot[ce].length&&(Pt[Cn++]=ot[ce][le]);for(le=0;le<vn;le++)for(ce=0;ce<T;ce++)Pt[Cn++]=$n[ce][le];return Pt}function D(C,S,I,v){let P;if(Array.isArray(C))P=f.fromArray(C);else if(typeof C=="string"){let pe=S;if(!pe){const ze=f.rawSplit(C);pe=d.getBestVersionForData(ze,I)}P=f.fromString(C,pe||40)}else throw new Error("Invalid data");const R=d.getBestVersionForData(P,I);if(!R)throw new Error("The amount of data is too big to be stored in a QR Code");if(!S)S=R;else if(S<R)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+R+`.
`);const T=b(S,I,P),_=e.getSymbolSize(S),L=new r(_);return g(L,S),E(L),y(L,S),w(L,I,0),S>=7&&W(L,S),m(L,T),isNaN(v)&&(v=s.getBestMask(L,w.bind(null,L,I))),s.applyMask(v,L),w(L,I,v),{modules:L,version:S,errorCorrectionLevel:I,maskPattern:v,segments:P}}return Ot.create=function(S,I){if(typeof S>"u"||S==="")throw new Error("No input text");let v=t.M,P,R;return typeof I<"u"&&(v=t.from(I.errorCorrectionLevel,t.M),P=d.from(I.version),R=s.from(I.maskPattern),I.toSJISFunc&&e.setToSJISFunction(I.toSJISFunc)),D(S,P,v,R)},Ot}var nn={},on={},ei;function yi(){return ei||(ei=1,function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,a=o.modules.data,l=e.getScale(s,n),d=Math.floor((s+n.margin*2)*l),h=n.margin*l,$=[n.color.light,n.color.dark];for(let f=0;f<d;f++)for(let g=0;g<d;g++){let E=(f*d+g)*4,y=n.color.light;if(f>=h&&g>=h&&f<d-h&&g<d-h){const W=Math.floor((f-h)/l),w=Math.floor((g-h)/l);y=$[a[W*s+w]?1:0]}r[E++]=y.r,r[E++]=y.g,r[E++]=y.b,r[E]=y.a}}}(on)),on}var ti;function wo(){return ti||(ti=1,function(e){const t=yi();function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let l=a,d=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(d=r()),l=t.getOptions(l);const h=t.getImageWidth(n.modules.size,l),$=d.getContext("2d"),f=$.createImageData(h,h);return t.qrToImageData(f.data,n,l),i($,d,h),$.putImageData(f,0,0),d},e.renderToDataURL=function(n,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const d=e.render(n,s,l),h=l.type||"image/png",$=l.rendererOpts||{};return d.toDataURL(h,$.quality)}}(nn)),nn}var rn={},ni;function bo(){if(ni)return rn;ni=1;const e=yi();function t(o,n){const s=o.a/255,a=n+'="'+o.hex+'"';return s<1?a+" "+n+'-opacity="'+s.toFixed(2).slice(1)+'"':a}function i(o,n,s){let a=o+n;return typeof s<"u"&&(a+=" "+s),a}function r(o,n,s){let a="",l=0,d=!1,h=0;for(let $=0;$<o.length;$++){const f=Math.floor($%n),g=Math.floor($/n);!f&&!d&&(d=!0),o[$]?(h++,$>0&&f>0&&o[$-1]||(a+=d?i("M",f+s,.5+g+s):i("m",l,0),l=0,d=!1),f+1<n&&o[$+1]||(a+=i("h",h),h=0)):l++}return a}return rn.render=function(n,s,a){const l=e.getOptions(s),d=n.modules.size,h=n.modules.data,$=d+l.margin*2,f=l.color.light.a?"<path "+t(l.color.light,"fill")+' d="M0 0h'+$+"v"+$+'H0z"/>':"",g="<path "+t(l.color.dark,"stroke")+' d="'+r(h,d,l.margin)+'"/>',E='viewBox="0 0 '+$+" "+$+'"',W='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+E+' shape-rendering="crispEdges">'+f+g+`</svg>
`;return typeof a=="function"&&a(null,W),W},rn}var ii;function yo(){if(ii)return Pe;ii=1;const e=Qi(),t=mo(),i=wo(),r=bo();function o(n,s,a,l,d){const h=[].slice.call(arguments,1),$=h.length,f=typeof h[$-1]=="function";if(!f&&!e())throw new Error("Callback required as last argument");if(f){if($<2)throw new Error("Too few arguments provided");$===2?(d=a,a=s,s=l=void 0):$===3&&(s.getContext&&typeof d>"u"?(d=l,l=void 0):(d=l,l=a,a=s,s=void 0))}else{if($<1)throw new Error("Too few arguments provided");return $===1?(a=s,s=l=void 0):$===2&&!s.getContext&&(l=a,a=s,s=void 0),new Promise(function(g,E){try{const y=t.create(a,l);g(n(y,s,l))}catch(y){E(y)}})}try{const g=t.create(a,l);d(null,n(g,s,l))}catch(g){d(g)}}return Pe.create=t.create,Pe.toCanvas=o.bind(null,i.render),Pe.toDataURL=o.bind(null,i.renderToDataURL),Pe.toString=o.bind(null,function(n,s,a){return r.render(n,a)}),Pe}var vo=yo();const $o=Pi(vo),Co=.1,oi=2.5,ue=7;function sn(e,t,i){return e===t?!1:(e-t<0?t-e:e-t)<=i+Co}function xo(e,t){const i=Array.prototype.slice.call($o.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(i.length);return i.reduce((o,n,s)=>(s%r===0?o.push([n]):o[o.length-1].push(n))&&o,[])}const Ro={generate({uri:e,size:t,logoSize:i,padding:r=8,dotColor:o="var(--apkt-tokens-theme-textInvert)"}){const s=[],a=xo(e,"Q"),l=(t-2*r)/a.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:y,y:W})=>{const w=(a.length-ue)*l*y+r,m=(a.length-ue)*l*W+r,b=.45;for(let p=0;p<d.length;p+=1){const D=l*(ue-p*2);s.push(Ue`
            <rect
              fill=${p===2?"var(--apkt-tokens-theme-textInvert)":"var(--apkt-tokens-theme-textPrimary)"}
              width=${p===0?D-10:D}
              rx= ${p===0?(D-10)*b:D*b}
              ry= ${p===0?(D-10)*b:D*b}
              stroke=${o}
              stroke-width=${p===0?10:0}
              height=${p===0?D-10:D}
              x= ${p===0?m+l*p+10/2:m+l*p}
              y= ${p===0?w+l*p+10/2:w+l*p}
            />
          `)}});const h=Math.floor((i+25)/l),$=a.length/2-h/2,f=a.length/2+h/2-1,g=[];a.forEach((y,W)=>{y.forEach((w,m)=>{if(a[W][m]&&!(W<ue&&m<ue||W>a.length-(ue+1)&&m<ue||W<ue&&m>a.length-(ue+1))&&!(W>$&&W<f&&m>$&&m<f)){const b=W*l+l/2+r,p=m*l+l/2+r;g.push([b,p])}})});const E={};return g.forEach(([y,W])=>{E[y]?E[y]?.push(W):E[y]=[W]}),Object.entries(E).map(([y,W])=>{const w=W.filter(m=>W.every(b=>!sn(m,b,l)));return[Number(y),w]}).forEach(([y,W])=>{W.forEach(w=>{s.push(Ue`<circle cx=${y} cy=${w} fill=${o} r=${l/oi} />`)})}),Object.entries(E).filter(([y,W])=>W.length>1).map(([y,W])=>{const w=W.filter(m=>W.some(b=>sn(m,b,l)));return[Number(y),w]}).map(([y,W])=>{W.sort((m,b)=>m<b?-1:1);const w=[];for(const m of W){const b=w.find(p=>p.some(D=>sn(m,D,l)));b?b.push(m):w.push([m])}return[y,w.map(m=>[m[0],m[m.length-1]])]}).forEach(([y,W])=>{W.forEach(([w,m])=>{s.push(Ue`
              <line
                x1=${y}
                x2=${y}
                y1=${w}
                y2=${m}
                stroke=${o}
                stroke-width=${l/(oi/2)}
                stroke-linecap="round"
              />
            `)})}),s}},_o=U`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var we=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let re=class extends k{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,c`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return Ue`
      <svg height=${this.size} width=${this.size}>
        ${Ro.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?c`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:c`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};re.styles=[F,_o];we([u()],re.prototype,"uri",void 0);we([u({type:Number})],re.prototype,"size",void 0);we([u()],re.prototype,"theme",void 0);we([u()],re.prototype,"imageSrc",void 0);we([u()],re.prototype,"alt",void 0);we([u({type:Boolean})],re.prototype,"arenaClear",void 0);we([u({type:Boolean})],re.prototype,"farcaster",void 0);re=we([B("wui-qr-code")],re);const Io=U`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var nt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let xe=class extends k{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",c`<slot></slot>`}};xe.styles=[Io];nt([u()],xe.prototype,"width",void 0);nt([u()],xe.prototype,"height",void 0);nt([u()],xe.prototype,"variant",void 0);nt([u({type:Boolean})],xe.prototype,"rounded",void 0);xe=nt([B("wui-shimmer")],xe);const Eo=U`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var Wo=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let cn=class extends q{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(t=>t()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;return N.setWcLinking(void 0),N.setRecentWallet(this.wallet),c` <wui-qr-code
      size=${t}
      theme=${ln.state.themeMode}
      uri=${this.uri}
      imageSrc=${A(H.getWalletImage(this.wallet))}
      color=${A(ln.state.themeVariables["--w3m-qr-color"])}
      alt=${A(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return c`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};cn.styles=Eo;cn=Wo([B("w3m-connecting-wc-qrcode")],cn);var So=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ri=class extends k{constructor(){if(super(),this.wallet=M.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${A(H.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ri=So([B("w3m-connecting-wc-unsupported")],ri);var vi=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let un=class extends q{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=ui.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(N.subscribeKey("wcUri",()=>{this.updateLoadingState()})),ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:i}=this.wallet,{redirect:r,href:o}=O.formatUniversalUrl(t,this.uri);N.setWcLinking({name:i,href:o}),N.setRecentWallet(this.wallet),O.openHref(r,"_blank")}catch{this.error=!0}}};vi([x()],un.prototype,"isLoading",void 0);un=vi([B("w3m-connecting-wc-web")],un);var ke=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Re=class extends k{constructor(){super(),this.wallet=M.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!K.state.siwx,this.remoteFeatures=K.state.remoteFeatures,this.displayBranding=!0,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(K.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return c`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return!this.remoteFeatures?.reownBranding||!this.displayBranding?null:c`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(t=!1){if(!(this.platform==="browser"||K.state.manualWCControl&&!t))try{const{wcPairingExpiry:i,status:r}=N.state;if(t||K.state.enableEmbedded||O.isPairingExpired(i)||r==="connecting"){const o=N.getConnections(ee.state.activeChain),n=this.remoteFeatures?.multiWallet,s=o.length>0;await N.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(s&&n?(M.replace("ProfileWallets"),Ve.showSuccess("New Wallet Added")):ci.close())}}catch(i){if(i instanceof Error&&i.message.includes("An error occurred when attempting to switch chain")&&!K.state.enableNetworkSwitch&&ee.state.activeChain){ee.setActiveCaipNetwork(hi.getUnsupportedNetwork(`${ee.state.activeChain}:${ee.state.activeCaipNetwork?.id}`)),ee.showUnsupportedChainUI();return}ne.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:i?.message??"Unknown"}}),N.setWcError(!0),Ve.showError(i.message??"Connection error"),N.resetWcConnection(),M.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:i,webapp_link:r,injected:o,rdns:n}=this.wallet,s=o?.map(({injected_id:E})=>E).filter(Boolean),a=[...n?[n]:s??[]],l=K.state.isUniversalProvider?!1:a.length,d=t,h=r,$=N.checkInstalled(a),f=l&&$,g=i&&!O.isMobile();f&&!ee.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(O.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),g&&this.platforms.push("desktop"),!f&&l&&!ee.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return c`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return c`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return c`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return c`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return c`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return c`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?c`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){const i=this.shadowRoot?.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ke([x()],Re.prototype,"platform",void 0);ke([x()],Re.prototype,"platforms",void 0);ke([x()],Re.prototype,"isSiwxEnabled",void 0);ke([x()],Re.prototype,"remoteFeatures",void 0);ke([u({type:Boolean})],Re.prototype,"displayBranding",void 0);Re=ke([B("w3m-connecting-wc-view")],Re);var mn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let pt=class extends k{constructor(){super(),this.unsubscribe=[],this.isMobile=O.isMobile(),this.remoteFeatures=K.state.remoteFeatures,this.unsubscribe.push(K.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(this.isMobile){const{featured:t,recommended:i}=z.state,{customWallets:r}=K.state,o=Xe.getRecentWallets(),n=t.length||i.length||r?.length||o.length;return c`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?c`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return c`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?c` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};mn([x()],pt.prototype,"isMobile",void 0);mn([x()],pt.prototype,"remoteFeatures",void 0);pt=mn([B("w3m-connecting-wc-basic-view")],pt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const To=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const r of i)r._$AO?.(t,!1),Me(r,t);return!0},gt=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},$i=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Bo(t)}};function Po(e){this._$AN!==void 0?(gt(this),this._$AM=e,$i(this)):this._$AM=e}function Ao(e,t=!1,i=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(r))for(let n=i;n<r.length;n++)Me(r[n],!1),gt(r[n]);else r!=null&&(Me(r,!1),gt(r));else Me(this,e)}const Bo=e=>{e.type==Si.CHILD&&(e._$AP??=Ao,e._$AQ??=Po)};class No extends Wi{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),$i(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(Me(this,t),gt(this))}setValue(t){if(To(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wn=()=>new Lo;class Lo{}const an=new WeakMap,bn=Ti(class extends No{render(e){return _n}update(e,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),_n}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=an.get(t);i===void 0&&(i=new WeakMap,an.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?an.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Oo=U`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var Et=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Be=class extends k{constructor(){super(...arguments),this.inputElementRef=wn(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return c`
      <label data-size=${this.size}>
        <input
          ${bn(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};Be.styles=[F,se,Oo];Et([u({type:Boolean})],Be.prototype,"checked",void 0);Et([u({type:Boolean})],Be.prototype,"disabled",void 0);Et([u()],Be.prototype,"size",void 0);Be=Et([B("wui-toggle")],Be);const ko=U`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Ci=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let mt=class extends k{constructor(){super(...arguments),this.checked=!1}render(){return c`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(t){t.stopPropagation(),this.checked=t.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};mt.styles=[F,se,ko];Ci([u({type:Boolean})],mt.prototype,"checked",void 0);mt=Ci([B("wui-certified-switch")],mt);const Do=U`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var X=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let G=class extends k{constructor(){super(...arguments),this.inputElementRef=wn(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return c` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${bn(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${A(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?c`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?c`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?c`<wui-icon name="spinner" size="md"></wui-icon>`:c`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?c`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?c`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};G.styles=[F,se,Do];X([u()],G.prototype,"icon",void 0);X([u({type:Boolean})],G.prototype,"disabled",void 0);X([u({type:Boolean})],G.prototype,"loading",void 0);X([u()],G.prototype,"placeholder",void 0);X([u()],G.prototype,"type",void 0);X([u()],G.prototype,"value",void 0);X([u()],G.prototype,"errorText",void 0);X([u()],G.prototype,"warningText",void 0);X([u()],G.prototype,"onSubmit",void 0);X([u()],G.prototype,"size",void 0);X([u({attribute:!1})],G.prototype,"onKeyDown",void 0);G=X([B("wui-input-text")],G);const zo=U`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var xi=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let wt=class extends k{constructor(){super(...arguments),this.inputComponentRef=wn(),this.inputValue=""}render(){return c`
      <wui-input-text
        ${bn(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?c`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(t){this.inputValue=t.detail||""}clearValue(){const i=this.inputComponentRef.value?.inputElementRef.value;i&&(i.value="",this.inputValue="",i.focus(),i.dispatchEvent(new Event("input")))}};wt.styles=[F,zo];xi([u()],wt.prototype,"inputValue",void 0);wt=xi([B("wui-search-bar")],wt);const jo=Ue`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Uo=U`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Ri=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let bt=class extends k{constructor(){super(...arguments),this.type="wallet"}render(){return c`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?c` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${jo}`:c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};bt.styles=[F,se,Uo];Ri([u()],bt.prototype,"type",void 0);bt=Ri([B("wui-card-select-loader")],bt);const Mo=di`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Z=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Y=class extends k{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&de.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&de.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&de.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&de.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&de.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&de.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&de.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&de.getSpacingStyles(this.margin,3)};
    `,c`<slot></slot>`}};Y.styles=[F,Mo];Z([u()],Y.prototype,"gridTemplateRows",void 0);Z([u()],Y.prototype,"gridTemplateColumns",void 0);Z([u()],Y.prototype,"justifyItems",void 0);Z([u()],Y.prototype,"alignItems",void 0);Z([u()],Y.prototype,"justifyContent",void 0);Z([u()],Y.prototype,"alignContent",void 0);Z([u()],Y.prototype,"columnGap",void 0);Z([u()],Y.prototype,"rowGap",void 0);Z([u()],Y.prototype,"gap",void 0);Z([u()],Y.prototype,"padding",void 0);Z([u()],Y.prototype,"margin",void 0);Y=Z([B("wui-grid")],Y);const qo=U`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var it=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let _e=class extends k{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const t=this.wallet?.badge_type==="certified";return c`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${A(t?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${t?c`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():c`
      <wui-wallet-image
        size="lg"
        imageSrc=${A(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=H.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await H.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};_e.styles=qo;it([x()],_e.prototype,"visible",void 0);it([x()],_e.prototype,"imageSrc",void 0);it([x()],_e.prototype,"imageLoading",void 0);it([u()],_e.prototype,"wallet",void 0);_e=it([B("w3m-all-wallets-list-item")],_e);const Fo=U`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var De=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const si="local-paginator";let me=class extends k{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!z.state.wallets.length,this.wallets=z.state.wallets,this.recommended=z.state.recommended,this.featured=z.state.featured,this.filteredWallets=z.state.filteredWallets,this.unsubscribe.push(z.subscribeKey("wallets",t=>this.wallets=t),z.subscribeKey("recommended",t=>this.recommended=t),z.subscribeKey("featured",t=>this.featured=t),z.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.paginationObserver?.disconnect()}render(){return c`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const t=this.shadowRoot?.querySelector("wui-grid");t&&(await z.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,i){return[...Array(t)].map(()=>c`
        <wui-card-select-loader type="wallet" id=${A(i)}></wui-card-select-loader>
      `)}getWallets(){const t=[...this.featured,...this.recommended];this.filteredWallets?.length>0?t.push(...this.filteredWallets):t.push(...this.wallets);const i=O.uniqueBy(t,"id"),r=Fe.markWalletsAsInstalled(i);return Fe.markWalletsWithDisplayIndex(r)}walletsTemplate(){return this.getWallets().map(i=>c`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${i.id}"
          @click=${()=>this.onConnectWallet(i)}
          .wallet=${i}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:i,featured:r,count:o}=z.state,n=window.innerWidth<352?3:4,s=t.length+i.length;let l=Math.ceil(s/n)*n-s+n;return l-=t.length?r.length%n:0,o===0&&r.length>0?null:o===0||[...r,...t,...i].length<o?this.shimmerTemplate(l,si):null}createPaginationObserver(){const t=this.shadowRoot?.querySelector(`#${si}`);t&&(this.paginationObserver=new IntersectionObserver(([i])=>{if(i?.isIntersecting&&!this.loading){const{page:r,count:o,wallets:n}=z.state;n.length<o&&z.fetchWalletsByPage({page:r+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){j.selectWalletConnector(t)}};me.styles=Fo;De([x()],me.prototype,"loading",void 0);De([x()],me.prototype,"wallets",void 0);De([x()],me.prototype,"recommended",void 0);De([x()],me.prototype,"featured",void 0);De([x()],me.prototype,"filteredWallets",void 0);me=De([B("w3m-all-wallets-list")],me);const Vo=di`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Wt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ne=class extends k{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?c`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await z.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=z.state,i=Fe.markWalletsAsInstalled(t);return t.length?c`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map(r=>c`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:c`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){j.selectWalletConnector(t)}};Ne.styles=Vo;Wt([x()],Ne.prototype,"loading",void 0);Wt([u()],Ne.prototype,"query",void 0);Wt([u()],Ne.prototype,"badge",void 0);Ne=Wt([B("w3m-all-wallets-search")],Ne);var yn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let yt=class extends k{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=O.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return c`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?c`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:c`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onCertifiedSwitchChange(t){t.detail?(this.badge="certified",Ve.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return O.isMobile()?c`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){M.push("ConnectingWalletConnect")}};yn([x()],yt.prototype,"search",void 0);yn([x()],yt.prototype,"badge",void 0);yt=yn([B("w3m-all-wallets-view")],yt);const Ko=U`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var ae=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Q=class extends k{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",c`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${A(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?c`<wui-image
        icon=${this.icon}
        iconColor=${A(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:c`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?c`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:c`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};Q.styles=[F,se,Ko];ae([u()],Q.prototype,"imageSrc",void 0);ae([u()],Q.prototype,"icon",void 0);ae([u()],Q.prototype,"iconColor",void 0);ae([u({type:Boolean})],Q.prototype,"loading",void 0);ae([u()],Q.prototype,"tabIdx",void 0);ae([u({type:Boolean})],Q.prototype,"disabled",void 0);ae([u({type:Boolean})],Q.prototype,"rightIcon",void 0);ae([u({type:Boolean})],Q.prototype,"rounded",void 0);ae([u({type:Boolean})],Q.prototype,"fullSize",void 0);Q=ae([B("wui-list-item")],Q);var Ho=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ai=class extends k{constructor(){super(...arguments),this.wallet=M.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return c`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?c`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?c`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?c`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?c`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&O.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&O.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&O.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&O.openHref(this.wallet.homepage,"_blank")}};ai=Ho([B("w3m-downloads-view")],ai);export{yt as W3mAllWalletsView,pt as W3mConnectingWcBasicView,ai as W3mDownloadsView};
