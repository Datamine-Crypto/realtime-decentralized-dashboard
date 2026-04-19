import{r as e}from"./chunk-DECur_0Z.js";import{n as t,t as n}from"./jsx-runtime-CSS8KlTg.js";import{E as r,T as i,g as a,u as o}from"./defaultTheme-Br-E976c.js";import{r as s,t as c,u as l}from"./DefaultPropsProvider-DbBb_d-F.js";var u=e=>e,d=(()=>{let e=u;return{configure(t){e=t},generate(t){return e(t)},reset(){e=u}}})(),f={active:`active`,checked:`checked`,completed:`completed`,disabled:`disabled`,error:`error`,expanded:`expanded`,focused:`focused`,focusVisible:`focusVisible`,open:`open`,readOnly:`readOnly`,required:`required`,selected:`selected`};function p(e,t,n=`Mui`){let r=f[t];return r?`${n}-${r}`:`${d.generate(e)}-${t}`}function m(e,t,n=`Mui`){let r={};return t.forEach(t=>{r[t]=p(e,t,n)}),r}var h={theme:void 0};function g(e){let t,n;return function(r){let i=t;return(i===void 0||r.theme!==n)&&(h.theme=r.theme,i=l(e(h)),t=i,n=r.theme),i}}function _(e,t,n=void 0){let r={};for(let i in e){let a=e[i],o=``,s=!0;for(let e=0;e<a.length;e+=1){let r=a[e];r&&(o+=(s===!0?``:` `)+t(r),s=!1,n&&n[r]&&(o+=` `+n[r]))}r[i]=o}return r}var v=e(t(),1),y=a,b=g;function x(e){return typeof e.main==`string`}function S(e,t=[]){if(!x(e))return!1;for(let n of t)if(!e.hasOwnProperty(n)||typeof e[n]!=`string`)return!1;return!0}function C(e=[]){return([,t])=>t&&S(t,e)}function w(e){return p(`MuiCircularProgress`,e)}m(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDisableShrink`]);var T=n(),E=44,D=r`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,O=r`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,k=typeof D==`string`?null:i`
        animation: ${D} 1.4s linear infinite;
      `,A=typeof O==`string`?null:i`
        animation: ${O} 1.4s ease-in-out infinite;
      `,j=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e;return _({root:[`root`,n,`color${y(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,i&&`circleDisableShrink`]},w,t)},M=s(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${y(n.color)}`]]}})(b(({theme:e})=>({display:`inline-block`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`transform`)}},{props:{variant:`indeterminate`},style:k||{animation:`${D} 1.4s linear infinite`}},...Object.entries(e.palette).filter(C()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),N=s(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),P=s(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,n.disableShrink&&t.circleDisableShrink]}})(b(({theme:e})=>({stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:A||{animation:`${O} 1.4s ease-in-out infinite`}}]}))),F=s(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(b(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),I=v.forwardRef(function(e,t){let n=c({props:e,name:`MuiCircularProgress`}),{className:r,color:i=`primary`,disableShrink:a=!1,enableTrackSlot:s=!1,size:l=40,style:u,thickness:d=3.6,value:f=0,variant:p=`indeterminate`,...m}=n,h={...n,color:i,disableShrink:a,size:l,thickness:d,value:f,variant:p,enableTrackSlot:s},g=j(h),_={},v={},y={};if(p===`determinate`){let e=2*Math.PI*((E-d)/2);_.strokeDasharray=e.toFixed(3),y[`aria-valuenow`]=Math.round(f),_.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,v.transform=`rotate(-90deg)`}return(0,T.jsx)(M,{className:o(g.root,r),style:{width:l,height:l,...v,...u},ownerState:h,ref:t,role:`progressbar`,...y,...m,children:(0,T.jsxs)(N,{className:g.svg,ownerState:h,viewBox:`${E/2} ${E/2} ${E} ${E}`,children:[s?(0,T.jsx)(F,{className:g.track,ownerState:h,cx:E,cy:E,r:(E-d)/2,fill:`none`,strokeWidth:d,"aria-hidden":`true`}):null,(0,T.jsx)(P,{className:g.circle,style:_,ownerState:h,cx:E,cy:E,r:(E-d)/2,fill:`none`,strokeWidth:d})]})})});export{_ as a,d as c,y as i,C as n,m as o,b as r,p as s,I as t};