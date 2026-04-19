import{r as e}from"./chunk-DECur_0Z.js";import{n as t,t as n}from"./jsx-runtime-CSS8KlTg.js";import{w as r}from"./Typography-CI2yh7U-.js";import{E as i,T as a,u as o}from"./defaultTheme-Br-E976c.js";import{r as s,t as c}from"./DefaultPropsProvider-DbBb_d-F.js";import{a as l,i as u,n as d,o as f,r as p,s as m}from"./CircularProgress-D_t8o-bI.js";var h=e(t(),1);function g(e){return m(`MuiLinearProgress`,e)}f(`MuiLinearProgress`,[`root`,`colorPrimary`,`colorSecondary`,`determinate`,`indeterminate`,`buffer`,`query`,`dashed`,`bar`,`bar1`,`bar2`]);var _=n(),v=4,y=i`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,b=typeof y==`string`?null:a`
        animation: ${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `,x=i`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,S=typeof x==`string`?null:a`
        animation: ${x} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `,C=i`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,w=typeof C==`string`?null:a`
        animation: ${C} 3s infinite linear;
      `,T=e=>{let{classes:t,variant:n,color:r}=e;return l({root:[`root`,`color${u(r)}`,n],dashed:[`dashed`],bar1:[`bar`,`bar1`],bar2:[`bar`,`bar2`,n===`buffer`&&`color${u(r)}`]},g,t)},E=(e,t)=>e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:e.palette.mode===`light`?e.lighten(e.palette[t].main,.62):e.darken(e.palette[t].main,.5),D=s(`span`,{name:`MuiLinearProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`color${u(n.color)}`],t[n.variant]]}})(p(({theme:e})=>({position:`relative`,overflow:`hidden`,display:`block`,height:4,zIndex:0,"@media print":{colorAdjust:`exact`},variants:[...Object.entries(e.palette).filter(d()).map(([t])=>({props:{color:t},style:{backgroundColor:E(e,t)}})),{props:({ownerState:e})=>e.color===`inherit`&&e.variant!==`buffer`,style:{"&::before":{content:`""`,position:`absolute`,left:0,top:0,right:0,bottom:0,backgroundColor:`currentColor`,opacity:.3}}},{props:{variant:`buffer`},style:{backgroundColor:`transparent`}},{props:{variant:`query`},style:{transform:`rotate(180deg)`}}]}))),O=s(`span`,{name:`MuiLinearProgress`,slot:`Dashed`})(p(({theme:e})=>({position:`absolute`,marginTop:0,height:`100%`,width:`100%`,backgroundSize:`10px 10px`,backgroundPosition:`0 -23px`,variants:[{props:{color:`inherit`},style:{opacity:.3,backgroundImage:`radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)`}},...Object.entries(e.palette).filter(d()).map(([t])=>{let n=E(e,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`}}})]})),w||{animation:`${C} 3s infinite linear`}),k=s(`span`,{name:`MuiLinearProgress`,slot:`Bar1`,overridesResolver:(e,t)=>[t.bar,t.bar1]})(p(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[{props:{color:`inherit`},style:{backgroundColor:`currentColor`}},...Object.entries(e.palette).filter(d()).map(([t])=>({props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main}})),{props:{variant:`determinate`},style:{transition:`transform .${v}s linear`}},{props:{variant:`buffer`},style:{zIndex:1,transition:`transform .${v}s linear`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:b||{animation:`${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),A=s(`span`,{name:`MuiLinearProgress`,slot:`Bar2`,overridesResolver:(e,t)=>[t.bar,t.bar2]})(p(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[...Object.entries(e.palette).filter(d()).map(([t])=>({props:{color:t},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[t].main}})),{props:({ownerState:e})=>e.variant!==`buffer`&&e.color!==`inherit`,style:{backgroundColor:`var(--LinearProgressBar2-barColor, currentColor)`}},{props:({ownerState:e})=>e.variant!==`buffer`&&e.color===`inherit`,style:{backgroundColor:`currentColor`}},{props:{color:`inherit`},style:{opacity:.3}},...Object.entries(e.palette).filter(d()).map(([t])=>({props:{color:t,variant:`buffer`},style:{backgroundColor:E(e,t),transition:`transform .${v}s linear`}})),{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:S||{animation:`${x} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),j=h.forwardRef(function(e,t){let n=c({props:e,name:`MuiLinearProgress`}),{className:i,color:a=`primary`,value:s,valueBuffer:l,variant:u=`indeterminate`,...d}=n,f={...n,color:a,variant:u},p=T(f),m=r(),h={},g={bar1:{},bar2:{}};if((u===`determinate`||u===`buffer`)&&s!==void 0){h[`aria-valuenow`]=Math.round(s),h[`aria-valuemin`]=0,h[`aria-valuemax`]=100;let e=s-100;m&&(e=-e),g.bar1.transform=`translateX(${e}%)`}if(u===`buffer`&&l!==void 0){let e=(l||0)-100;m&&(e=-e),g.bar2.transform=`translateX(${e}%)`}return(0,_.jsxs)(D,{className:o(p.root,i),ownerState:f,role:`progressbar`,...h,ref:t,...d,children:[u===`buffer`?(0,_.jsx)(O,{className:p.dashed,ownerState:f}):null,(0,_.jsx)(k,{className:p.bar1,ownerState:f,style:g.bar1}),u===`determinate`?null:(0,_.jsx)(A,{className:p.bar2,ownerState:f,style:g.bar2})]})});export{j as t};