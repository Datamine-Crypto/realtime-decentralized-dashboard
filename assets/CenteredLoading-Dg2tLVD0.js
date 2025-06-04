import{h as M,f as w,r as R,u as I,j as a,s as y,c as N,o as l,b as U,m as P,p as _,q as S,v as b}from"./index-CKMAbjWH.js";function z(e){return M("MuiCircularProgress",e)}w("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const t=44,g=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=b`
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
`,E=typeof g!="string"?S`
        animation: ${g} 1.4s linear infinite;
      `:null,F=typeof h!="string"?S`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,O=e=>{const{classes:r,variant:s,color:i,disableShrink:c}=e,d={root:["root",s,`color${l(i)}`],svg:["svg"],circle:["circle",`circle${l(s)}`,c&&"circleDisableShrink"]};return U(d,z,r)},A=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${l(s.color)}`]]}})(P(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:E||{animation:`${g} 1.4s linear infinite`}},...Object.entries(e.palette).filter(_()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),K=y("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),L=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${l(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(P(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:F||{animation:`${h} 1.4s ease-in-out infinite`}}]}))),T=R.forwardRef(function(r,s){const i=I({props:r,name:"MuiCircularProgress"}),{className:c,color:d="primary",disableShrink:$=!1,size:p=40,style:j,thickness:o=3.6,value:u=0,variant:v="indeterminate",...D}=i,n={...i,color:d,disableShrink:$,size:p,thickness:o,value:u,variant:v},m=O(n),f={},x={},k={};if(v==="determinate"){const C=2*Math.PI*((t-o)/2);f.strokeDasharray=C.toFixed(3),k["aria-valuenow"]=Math.round(u),f.strokeDashoffset=`${((100-u)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return a.jsx(A,{className:N(m.root,c),style:{width:p,height:p,...x,...j},ownerState:n,ref:s,role:"progressbar",...k,...D,children:a.jsx(K,{className:m.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:a.jsx(L,{className:m.circle,style:f,ownerState:n,cx:t,cy:t,r:(t-o)/2,fill:"none",strokeWidth:o})})})}),V=()=>a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"},children:a.jsx(T,{style:{color:"#0ff"}})}),B=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{V as C,T as a,B as b};
