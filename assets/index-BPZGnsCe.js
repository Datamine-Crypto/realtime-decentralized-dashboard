const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./add-g5TGu9lV.js","./core-7gM5s6yX.js","./index-Bmpn2UYE.js","./index-D16VD7K3.css","./Web3Context-BIVv5fKM.js","./index.es-B0ay_bG3.js","./all-wallets-CNPLnH5A.js","./arrow-bottom-circle-BDK4O0aK.js","./app-store-CLmmQAjV.js","./apple-B9jUw9wr.js","./arrow-bottom-HKi47ezN.js","./arrow-left-CbQulF9Z.js","./arrow-right-DiNAYuMV.js","./arrow-top-DbhuUz5O.js","./bank-BWZwYAqU.js","./browser-BNhzS-E4.js","./card-DLaHdptM.js","./checkmark-Bz_0zW89.js","./checkmark-bold-CXuYSCv9.js","./chevron-bottom-C7N44n7Q.js","./chevron-left-DsYAr7L_.js","./chevron-right-DtceiCzM.js","./chevron-top-C2y3nU5e.js","./chrome-store-B6HWfMUQ.js","./clock-PM6YYQ-b.js","./close-DlzL7zFZ.js","./compass-D1m4lUv3.js","./coinPlaceholder-C9Oqkf0d.js","./copy-B7YoX_Dj.js","./cursor-CxPN-Uuz.js","./cursor-transparent-CI1_G-OD.js","./desktop-CDRgEN0F.js","./disconnect-H2FErWnH.js","./discord-4QLVliX0.js","./etherscan-DysXZEbD.js","./extension-BMpQlwRo.js","./external-link-Bq2wXvXm.js","./facebook-Cn8Kv4Ys.js","./farcaster-Da-3-Chx.js","./filters-OwhxRwGe.js","./github-4NtUK0Op.js","./google-CkVIRWcF.js","./help-circle-DSgSw6Np.js","./image-5fWLYhPf.js","./id-Cr6B6FUN.js","./info-circle-Cs-mSPAO.js","./lightbulb-DIlsY7j3.js","./mail-BdgC34DR.js","./mobile-C5ciCBzo.js","./more-DxiGZYvj.js","./network-placeholder-B_11JpGp.js","./nftPlaceholder-D8w1bnCD.js","./off-xuE6cVJ_.js","./play-store-DupgdxsR.js","./plus-BD5BJq53.js","./qr-code-Cd5Yf4LA.js","./recycle-horizontal-Z4dPipFH.js","./refresh-Dg5DTsPS.js","./search-Bx93zLz6.js","./send-Djh0Hj8_.js","./swapHorizontal-BjH-ryt4.js","./swapHorizontalMedium--_y8SR-0.js","./swapHorizontalBold-BNjrsLMx.js","./swapHorizontalRoundedBold-C844TD5i.js","./swapVertical-BiH4MLvH.js","./telegram-DnzduUmo.js","./three-dots-DNc0zRZ3.js","./twitch-Dxd-foV8.js","./x-CxHKt6ug.js","./twitterIcon-DcHRaeOg.js","./verify-DB4GO_x7.js","./verify-filled-T2pKIXrs.js","./wallet-BlSTQ2-X.js","./walletconnect-ZdA3NcWi.js","./wallet-placeholder-C3Q00Ltb.js","./warning-circle-DhQjcLV7.js","./info-Chai5C69.js","./exclamation-triangle-D5zKIQ2p.js","./reown-logo-BfZm2t1z.js"])))=>i.map(i=>d[i]);
import{J as N,K as q,k as S,l as b,m as E,x as w,L as Y,N as V,o as H,n as K}from"./core-7gM5s6yX.js";import{F as a}from"./index-Bmpn2UYE.js";const v={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:r,truncate:o}){return t.length<=e+r?t:o==="end"?`${t.substring(0,e)}...`:o==="start"?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(t){const r=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),o=this.hexToRgb(r),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(n==null?void 0:n.replace("px","")),c=`${s}% ${s}% at 65% 40%`,u=[];for(let _=0;_<5;_+=1){const g=this.tintColor(o,.15*_);u.push(`rgb(${g[0]}, ${g[1]}, ${g[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${c}
   `},hexToRgb(t){const e=parseInt(t,16),r=e>>16&255,o=e>>8&255,n=e&255;return[r,o,n]},tintColor(t,e){const[r,o,n]=t,i=Math.round(r+(255-r)*e),s=Math.round(o+(255-o)*e),c=Math.round(n+(255-n)*e);return[i,s,c]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,r){return t.toString().length>=e?Number(t).toFixed(r):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function X(t,e){const{kind:r,elements:o}=e;return{kind:r,elements:o,finisher(n){customElements.get(t)||customElements.define(t,n)}}}function Z(t,e){return customElements.get(t)||customElements.define(t,e),e}function $(t){return function(r){return typeof r=="function"?Z(t,r):X(t,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:N},Q=(t=J,e,r)=>{const{kind:o,metadata:n}=r;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(c){const u=e.get.call(this);e.set.call(this,c),this.requestUpdate(s,u,t)},init(c){return c!==void 0&&this.C(s,void 0,t,c),c}}}if(o==="setter"){const{name:s}=r;return function(c){const u=this[s];e.call(this,c),this.requestUpdate(s,u,t)}}throw Error("Unsupported decorator location: "+o)};function l(t){return(e,r)=>typeof r=="object"?Q(t,e,r):((o,n,i)=>{const s=n.hasOwnProperty(i);return n.constructor.createProperty(i,o),s?Object.getOwnPropertyDescriptor(n,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(t){return l({...t,state:!0,attribute:!1})}const tt=S`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var d=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let p=class extends E{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&v.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&v.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&v.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&v.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&v.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&v.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&v.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&v.getSpacingStyles(this.margin,3)};
    `,w`<slot></slot>`}};p.styles=[b,tt];d([l()],p.prototype,"flexDirection",void 0);d([l()],p.prototype,"flexWrap",void 0);d([l()],p.prototype,"flexBasis",void 0);d([l()],p.prototype,"flexGrow",void 0);d([l()],p.prototype,"flexShrink",void 0);d([l()],p.prototype,"alignItems",void 0);d([l()],p.prototype,"justifyContent",void 0);d([l()],p.prototype,"columnGap",void 0);d([l()],p.prototype,"rowGap",void 0);d([l()],p.prototype,"gap",void 0);d([l()],p.prototype,"padding",void 0);d([l()],p.prototype,"margin",void 0);p=d([$("wui-flex")],p);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=t=>t??Y;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=t=>t===null||typeof t!="object"&&typeof t!="function",rt=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W={ATTRIBUTE:1,CHILD:2},U=t=>(...e)=>({_$litDirective$:t,values:e});let F=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=(t,e)=>{var o;const r=t._$AN;if(r===void 0)return!1;for(const n of r)(o=n._$AO)==null||o.call(n,e,!1),T(n,e);return!0},I=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},G=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),at(e)}};function it(t){this._$AN!==void 0?(I(this),this._$AM=t,G(this)):this._$AM=t}function ot(t,e=!1,r=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(o))for(let i=r;i<o.length;i++)T(o[i],!1),I(o[i]);else o!=null&&(T(o,!1),I(o));else T(this,t)}const at=t=>{t.type==W.CHILD&&(t._$AP??(t._$AP=ot),t._$AQ??(t._$AQ=it))};class nt extends F{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,o){super._$AT(e,r,o),G(this),this.isConnected=e._$AU}_$AO(e,r=!0){var o,n;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)==null||o.call(this):(n=this.disconnected)==null||n.call(this)),r&&(T(this,e),I(this))}setValue(e){if(rt(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class st{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class ct{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=t=>!et(t)&&typeof t.then=="function",B=1073741823;class lt extends nt{constructor(){super(...arguments),this._$Cwt=B,this._$Cbt=[],this._$CK=new st(this),this._$CX=new ct}render(...e){return e.find(r=>!j(r))??V}update(e,r){const o=this._$Cbt;let n=o.length;this._$Cbt=r;const i=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<r.length&&!(c>this._$Cwt);c++){const u=r[c];if(!j(u))return this._$Cwt=c,u;c<n&&u===o[c]||(this._$Cwt=B,n=0,Promise.resolve(u).then(async _=>{for(;s.get();)await s.get();const g=i.deref();if(g!==void 0){const C=g._$Cbt.indexOf(u);C>-1&&C<g._$Cwt&&(g._$Cwt=C,g.setValue(_))}}))}return V}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ut=U(lt);class pt{constructor(){this.cache=new Map}set(e,r){this.cache.set(e,r)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const D=new pt,dt=S`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var A=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};const M={add:async()=>(await a(async()=>{const{addSvg:t}=await import("./add-g5TGu9lV.js");return{addSvg:t}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)).addSvg,allWallets:async()=>(await a(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-CNPLnH5A.js");return{allWalletsSvg:t}},__vite__mapDeps([6,1,2,3,4,5]),import.meta.url)).allWalletsSvg,arrowBottomCircle:async()=>(await a(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-BDK4O0aK.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([7,1,2,3,4,5]),import.meta.url)).arrowBottomCircleSvg,appStore:async()=>(await a(async()=>{const{appStoreSvg:t}=await import("./app-store-CLmmQAjV.js");return{appStoreSvg:t}},__vite__mapDeps([8,1,2,3,4,5]),import.meta.url)).appStoreSvg,apple:async()=>(await a(async()=>{const{appleSvg:t}=await import("./apple-B9jUw9wr.js");return{appleSvg:t}},__vite__mapDeps([9,1,2,3,4,5]),import.meta.url)).appleSvg,arrowBottom:async()=>(await a(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-HKi47ezN.js");return{arrowBottomSvg:t}},__vite__mapDeps([10,1,2,3,4,5]),import.meta.url)).arrowBottomSvg,arrowLeft:async()=>(await a(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-CbQulF9Z.js");return{arrowLeftSvg:t}},__vite__mapDeps([11,1,2,3,4,5]),import.meta.url)).arrowLeftSvg,arrowRight:async()=>(await a(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-DiNAYuMV.js");return{arrowRightSvg:t}},__vite__mapDeps([12,1,2,3,4,5]),import.meta.url)).arrowRightSvg,arrowTop:async()=>(await a(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-DbhuUz5O.js");return{arrowTopSvg:t}},__vite__mapDeps([13,1,2,3,4,5]),import.meta.url)).arrowTopSvg,bank:async()=>(await a(async()=>{const{bankSvg:t}=await import("./bank-BWZwYAqU.js");return{bankSvg:t}},__vite__mapDeps([14,1,2,3,4,5]),import.meta.url)).bankSvg,browser:async()=>(await a(async()=>{const{browserSvg:t}=await import("./browser-BNhzS-E4.js");return{browserSvg:t}},__vite__mapDeps([15,1,2,3,4,5]),import.meta.url)).browserSvg,card:async()=>(await a(async()=>{const{cardSvg:t}=await import("./card-DLaHdptM.js");return{cardSvg:t}},__vite__mapDeps([16,1,2,3,4,5]),import.meta.url)).cardSvg,checkmark:async()=>(await a(async()=>{const{checkmarkSvg:t}=await import("./checkmark-Bz_0zW89.js");return{checkmarkSvg:t}},__vite__mapDeps([17,1,2,3,4,5]),import.meta.url)).checkmarkSvg,checkmarkBold:async()=>(await a(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-CXuYSCv9.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([18,1,2,3,4,5]),import.meta.url)).checkmarkBoldSvg,chevronBottom:async()=>(await a(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-C7N44n7Q.js");return{chevronBottomSvg:t}},__vite__mapDeps([19,1,2,3,4,5]),import.meta.url)).chevronBottomSvg,chevronLeft:async()=>(await a(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-DsYAr7L_.js");return{chevronLeftSvg:t}},__vite__mapDeps([20,1,2,3,4,5]),import.meta.url)).chevronLeftSvg,chevronRight:async()=>(await a(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-DtceiCzM.js");return{chevronRightSvg:t}},__vite__mapDeps([21,1,2,3,4,5]),import.meta.url)).chevronRightSvg,chevronTop:async()=>(await a(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-C2y3nU5e.js");return{chevronTopSvg:t}},__vite__mapDeps([22,1,2,3,4,5]),import.meta.url)).chevronTopSvg,chromeStore:async()=>(await a(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-B6HWfMUQ.js");return{chromeStoreSvg:t}},__vite__mapDeps([23,1,2,3,4,5]),import.meta.url)).chromeStoreSvg,clock:async()=>(await a(async()=>{const{clockSvg:t}=await import("./clock-PM6YYQ-b.js");return{clockSvg:t}},__vite__mapDeps([24,1,2,3,4,5]),import.meta.url)).clockSvg,close:async()=>(await a(async()=>{const{closeSvg:t}=await import("./close-DlzL7zFZ.js");return{closeSvg:t}},__vite__mapDeps([25,1,2,3,4,5]),import.meta.url)).closeSvg,compass:async()=>(await a(async()=>{const{compassSvg:t}=await import("./compass-D1m4lUv3.js");return{compassSvg:t}},__vite__mapDeps([26,1,2,3,4,5]),import.meta.url)).compassSvg,coinPlaceholder:async()=>(await a(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-C9Oqkf0d.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([27,1,2,3,4,5]),import.meta.url)).coinPlaceholderSvg,copy:async()=>(await a(async()=>{const{copySvg:t}=await import("./copy-B7YoX_Dj.js");return{copySvg:t}},__vite__mapDeps([28,1,2,3,4,5]),import.meta.url)).copySvg,cursor:async()=>(await a(async()=>{const{cursorSvg:t}=await import("./cursor-CxPN-Uuz.js");return{cursorSvg:t}},__vite__mapDeps([29,1,2,3,4,5]),import.meta.url)).cursorSvg,cursorTransparent:async()=>(await a(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-CI1_G-OD.js");return{cursorTransparentSvg:t}},__vite__mapDeps([30,1,2,3,4,5]),import.meta.url)).cursorTransparentSvg,desktop:async()=>(await a(async()=>{const{desktopSvg:t}=await import("./desktop-CDRgEN0F.js");return{desktopSvg:t}},__vite__mapDeps([31,1,2,3,4,5]),import.meta.url)).desktopSvg,disconnect:async()=>(await a(async()=>{const{disconnectSvg:t}=await import("./disconnect-H2FErWnH.js");return{disconnectSvg:t}},__vite__mapDeps([32,1,2,3,4,5]),import.meta.url)).disconnectSvg,discord:async()=>(await a(async()=>{const{discordSvg:t}=await import("./discord-4QLVliX0.js");return{discordSvg:t}},__vite__mapDeps([33,1,2,3,4,5]),import.meta.url)).discordSvg,etherscan:async()=>(await a(async()=>{const{etherscanSvg:t}=await import("./etherscan-DysXZEbD.js");return{etherscanSvg:t}},__vite__mapDeps([34,1,2,3,4,5]),import.meta.url)).etherscanSvg,extension:async()=>(await a(async()=>{const{extensionSvg:t}=await import("./extension-BMpQlwRo.js");return{extensionSvg:t}},__vite__mapDeps([35,1,2,3,4,5]),import.meta.url)).extensionSvg,externalLink:async()=>(await a(async()=>{const{externalLinkSvg:t}=await import("./external-link-Bq2wXvXm.js");return{externalLinkSvg:t}},__vite__mapDeps([36,1,2,3,4,5]),import.meta.url)).externalLinkSvg,facebook:async()=>(await a(async()=>{const{facebookSvg:t}=await import("./facebook-Cn8Kv4Ys.js");return{facebookSvg:t}},__vite__mapDeps([37,1,2,3,4,5]),import.meta.url)).facebookSvg,farcaster:async()=>(await a(async()=>{const{farcasterSvg:t}=await import("./farcaster-Da-3-Chx.js");return{farcasterSvg:t}},__vite__mapDeps([38,1,2,3,4,5]),import.meta.url)).farcasterSvg,filters:async()=>(await a(async()=>{const{filtersSvg:t}=await import("./filters-OwhxRwGe.js");return{filtersSvg:t}},__vite__mapDeps([39,1,2,3,4,5]),import.meta.url)).filtersSvg,github:async()=>(await a(async()=>{const{githubSvg:t}=await import("./github-4NtUK0Op.js");return{githubSvg:t}},__vite__mapDeps([40,1,2,3,4,5]),import.meta.url)).githubSvg,google:async()=>(await a(async()=>{const{googleSvg:t}=await import("./google-CkVIRWcF.js");return{googleSvg:t}},__vite__mapDeps([41,1,2,3,4,5]),import.meta.url)).googleSvg,helpCircle:async()=>(await a(async()=>{const{helpCircleSvg:t}=await import("./help-circle-DSgSw6Np.js");return{helpCircleSvg:t}},__vite__mapDeps([42,1,2,3,4,5]),import.meta.url)).helpCircleSvg,image:async()=>(await a(async()=>{const{imageSvg:t}=await import("./image-5fWLYhPf.js");return{imageSvg:t}},__vite__mapDeps([43,1,2,3,4,5]),import.meta.url)).imageSvg,id:async()=>(await a(async()=>{const{idSvg:t}=await import("./id-Cr6B6FUN.js");return{idSvg:t}},__vite__mapDeps([44,1,2,3,4,5]),import.meta.url)).idSvg,infoCircle:async()=>(await a(async()=>{const{infoCircleSvg:t}=await import("./info-circle-Cs-mSPAO.js");return{infoCircleSvg:t}},__vite__mapDeps([45,1,2,3,4,5]),import.meta.url)).infoCircleSvg,lightbulb:async()=>(await a(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-DIlsY7j3.js");return{lightbulbSvg:t}},__vite__mapDeps([46,1,2,3,4,5]),import.meta.url)).lightbulbSvg,mail:async()=>(await a(async()=>{const{mailSvg:t}=await import("./mail-BdgC34DR.js");return{mailSvg:t}},__vite__mapDeps([47,1,2,3,4,5]),import.meta.url)).mailSvg,mobile:async()=>(await a(async()=>{const{mobileSvg:t}=await import("./mobile-C5ciCBzo.js");return{mobileSvg:t}},__vite__mapDeps([48,1,2,3,4,5]),import.meta.url)).mobileSvg,more:async()=>(await a(async()=>{const{moreSvg:t}=await import("./more-DxiGZYvj.js");return{moreSvg:t}},__vite__mapDeps([49,1,2,3,4,5]),import.meta.url)).moreSvg,networkPlaceholder:async()=>(await a(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-B_11JpGp.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([50,1,2,3,4,5]),import.meta.url)).networkPlaceholderSvg,nftPlaceholder:async()=>(await a(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-D8w1bnCD.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([51,1,2,3,4,5]),import.meta.url)).nftPlaceholderSvg,off:async()=>(await a(async()=>{const{offSvg:t}=await import("./off-xuE6cVJ_.js");return{offSvg:t}},__vite__mapDeps([52,1,2,3,4,5]),import.meta.url)).offSvg,playStore:async()=>(await a(async()=>{const{playStoreSvg:t}=await import("./play-store-DupgdxsR.js");return{playStoreSvg:t}},__vite__mapDeps([53,1,2,3,4,5]),import.meta.url)).playStoreSvg,plus:async()=>(await a(async()=>{const{plusSvg:t}=await import("./plus-BD5BJq53.js");return{plusSvg:t}},__vite__mapDeps([54,1,2,3,4,5]),import.meta.url)).plusSvg,qrCode:async()=>(await a(async()=>{const{qrCodeIcon:t}=await import("./qr-code-Cd5Yf4LA.js");return{qrCodeIcon:t}},__vite__mapDeps([55,1,2,3,4,5]),import.meta.url)).qrCodeIcon,recycleHorizontal:async()=>(await a(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-Z4dPipFH.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([56,1,2,3,4,5]),import.meta.url)).recycleHorizontalSvg,refresh:async()=>(await a(async()=>{const{refreshSvg:t}=await import("./refresh-Dg5DTsPS.js");return{refreshSvg:t}},__vite__mapDeps([57,1,2,3,4,5]),import.meta.url)).refreshSvg,search:async()=>(await a(async()=>{const{searchSvg:t}=await import("./search-Bx93zLz6.js");return{searchSvg:t}},__vite__mapDeps([58,1,2,3,4,5]),import.meta.url)).searchSvg,send:async()=>(await a(async()=>{const{sendSvg:t}=await import("./send-Djh0Hj8_.js");return{sendSvg:t}},__vite__mapDeps([59,1,2,3,4,5]),import.meta.url)).sendSvg,swapHorizontal:async()=>(await a(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-BjH-ryt4.js");return{swapHorizontalSvg:t}},__vite__mapDeps([60,1,2,3,4,5]),import.meta.url)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await a(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium--_y8SR-0.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([61,1,2,3,4,5]),import.meta.url)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await a(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-BNjrsLMx.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([62,1,2,3,4,5]),import.meta.url)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await a(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-C844TD5i.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([63,1,2,3,4,5]),import.meta.url)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await a(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-BiH4MLvH.js");return{swapVerticalSvg:t}},__vite__mapDeps([64,1,2,3,4,5]),import.meta.url)).swapVerticalSvg,telegram:async()=>(await a(async()=>{const{telegramSvg:t}=await import("./telegram-DnzduUmo.js");return{telegramSvg:t}},__vite__mapDeps([65,1,2,3,4,5]),import.meta.url)).telegramSvg,threeDots:async()=>(await a(async()=>{const{threeDotsSvg:t}=await import("./three-dots-DNc0zRZ3.js");return{threeDotsSvg:t}},__vite__mapDeps([66,1,2,3,4,5]),import.meta.url)).threeDotsSvg,twitch:async()=>(await a(async()=>{const{twitchSvg:t}=await import("./twitch-Dxd-foV8.js");return{twitchSvg:t}},__vite__mapDeps([67,1,2,3,4,5]),import.meta.url)).twitchSvg,twitter:async()=>(await a(async()=>{const{xSvg:t}=await import("./x-CxHKt6ug.js");return{xSvg:t}},__vite__mapDeps([68,1,2,3,4,5]),import.meta.url)).xSvg,twitterIcon:async()=>(await a(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-DcHRaeOg.js");return{twitterIconSvg:t}},__vite__mapDeps([69,1,2,3,4,5]),import.meta.url)).twitterIconSvg,verify:async()=>(await a(async()=>{const{verifySvg:t}=await import("./verify-DB4GO_x7.js");return{verifySvg:t}},__vite__mapDeps([70,1,2,3,4,5]),import.meta.url)).verifySvg,verifyFilled:async()=>(await a(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-T2pKIXrs.js");return{verifyFilledSvg:t}},__vite__mapDeps([71,1,2,3,4,5]),import.meta.url)).verifyFilledSvg,wallet:async()=>(await a(async()=>{const{walletSvg:t}=await import("./wallet-BlSTQ2-X.js");return{walletSvg:t}},__vite__mapDeps([72,1,2,3,4,5]),import.meta.url)).walletSvg,walletConnect:async()=>(await a(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-ZdA3NcWi.js");return{walletConnectSvg:t}},__vite__mapDeps([73,1,2,3,4,5]),import.meta.url)).walletConnectSvg,walletConnectLightBrown:async()=>(await a(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-ZdA3NcWi.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([73,1,2,3,4,5]),import.meta.url)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await a(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-ZdA3NcWi.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([73,1,2,3,4,5]),import.meta.url)).walletConnectBrownSvg,walletPlaceholder:async()=>(await a(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-C3Q00Ltb.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([74,1,2,3,4,5]),import.meta.url)).walletPlaceholderSvg,warningCircle:async()=>(await a(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-DhQjcLV7.js");return{warningCircleSvg:t}},__vite__mapDeps([75,1,2,3,4,5]),import.meta.url)).warningCircleSvg,x:async()=>(await a(async()=>{const{xSvg:t}=await import("./x-CxHKt6ug.js");return{xSvg:t}},__vite__mapDeps([68,1,2,3,4,5]),import.meta.url)).xSvg,info:async()=>(await a(async()=>{const{infoSvg:t}=await import("./info-Chai5C69.js");return{infoSvg:t}},__vite__mapDeps([76,1,2,3,4,5]),import.meta.url)).infoSvg,exclamationTriangle:async()=>(await a(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-D5zKIQ2p.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([77,1,2,3,4,5]),import.meta.url)).exclamationTriangleSvg,reown:async()=>(await a(async()=>{const{reownSvg:t}=await import("./reown-logo-BfZm2t1z.js");return{reownSvg:t}},__vite__mapDeps([78,1,2,3,4,5]),import.meta.url)).reownSvg};async function mt(t){if(D.has(t))return D.get(t);const r=(M[t]??M.copy)();return D.set(t,r),r}let f=class extends E{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,w`${ut(mt(this.name),w`<div class="fallback"></div>`)}`}};f.styles=[b,H,dt];A([l()],f.prototype,"size",void 0);A([l()],f.prototype,"name",void 0);A([l()],f.prototype,"color",void 0);A([l()],f.prototype,"aspectRatio",void 0);f=A([$("wui-icon")],f);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=U(class extends F{constructor(t){var e;if(super(t),t.type!==W.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((o=this.nt)!=null&&o.has(i))&&this.st.add(i);return this.render(e)}const r=t.element.classList;for(const i of this.st)i in e||(r.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||(n=this.nt)!=null&&n.has(i)||(s?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return V}}),gt=S`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var O=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let y=class extends E{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,w`<slot class=${_t(e)}></slot>`}};y.styles=[b,gt];O([l()],y.prototype,"variant",void 0);O([l()],y.prototype,"color",void 0);O([l()],y.prototype,"align",void 0);O([l()],y.prototype,"lineClamp",void 0);y=O([$("wui-text")],y);const ht=S`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var h=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let m=class extends E{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,r=this.size==="lg",o=this.size==="xl",n=r?"12%":"16%",i=r?"xxs":o?"s":"3xl",s=this.background==="gray",c=this.background==="opaque",u=this.backgroundColor==="accent-100"&&c||this.backgroundColor==="success-100"&&c||this.backgroundColor==="error-100"&&c||this.backgroundColor==="inverse-100"&&c;let _=`var(--wui-color-${this.backgroundColor})`;return u?_=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(_=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${_};
       --local-bg-mix: ${u||s?"100%":n};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,w` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};m.styles=[b,K,ht];h([l()],m.prototype,"size",void 0);h([l()],m.prototype,"backgroundColor",void 0);h([l()],m.prototype,"iconColor",void 0);h([l()],m.prototype,"iconSize",void 0);h([l()],m.prototype,"background",void 0);h([l({type:Boolean})],m.prototype,"border",void 0);h([l()],m.prototype,"borderColor",void 0);h([l()],m.prototype,"icon",void 0);m=h([$("wui-icon-box")],m);const vt=S`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var L=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let x=class extends E{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,w`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};x.styles=[b,H,vt];L([l()],x.prototype,"src",void 0);L([l()],x.prototype,"alt",void 0);L([l()],x.prototype,"size",void 0);x=L([$("wui-image")],x);const wt=S`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var z=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let R=class extends E{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return w`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};R.styles=[b,wt];z([l()],R.prototype,"variant",void 0);z([l()],R.prototype,"size",void 0);R=z([$("wui-tag")],R);const ft=S`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var k=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let P=class extends E{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,w`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};P.styles=[b,ft];k([l()],P.prototype,"color",void 0);k([l()],P.prototype,"size",void 0);P=k([$("wui-loading-spinner")],P);export{v as U,_t as a,$ as c,U as e,nt as f,l as n,$t as o,bt as r};
