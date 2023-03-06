import{a8 as b,a9 as $,W as B,T as V,i as _,g as I,aa as F,ab as L,ac as X,ad as P}from"./Introduction-315b4e50.js";import{R as d,r as g}from"./index-9022271f.js";import{Z as T,H as M,u as W,c as h,t as j}from"./throttle-0232fcc4.js";import"./iframe-170d08c2.js";import"../sb-preview/runtime.mjs";import"./mapValues-abfa9511.js";import"./_commonjsHelpers-87174ba5.js";import"./index-356e4a49.js";import"./index-a5030b82.js";function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},C.apply(this,arguments)}b(C,"_extends");var Z=$.div({position:"relative",maxWidth:250}),A=$(B)({position:"absolute",zIndex:1,top:4,left:4}),D=$.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),J=$(V)(({theme:e})=>({fontFamily:e.typography.fonts.base})),K=$.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),N=$.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.color.mediumdark}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),Q=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,H=b(e=>{var t=e,{value:a,active:l,onClick:o,style:s}=t,n=F(t,["value","active","onClick","style"]);let r=`linear-gradient(${a}, ${a}), ${Q}, linear-gradient(#fff, #fff)`;return d.createElement(N,C({},n,{active:l,onClick:o},{style:L(X({},s),{backgroundImage:r})}))},"Swatch"),U=$(_.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Y=$(I)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),i;(function(e){e.RGB="rgb",e.HSL="hsl",e.HEX="hex"})(i||(i={}));var w=Object.values(i),q=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,ee=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,te=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,k=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ae=/^\s*#?([0-9a-f]{3})\s*$/i,re={[i.HEX]:T,[i.RGB]:M,[i.HSL]:W},E={[i.HEX]:"transparent",[i.RGB]:"rgba(0, 0, 0, 0)",[i.HSL]:"hsla(0, 0%, 0%, 0)"},R=b(e=>{let t=e==null?void 0:e.match(q);if(!t)return[0,0,0,1];let[,a,l,o,s=1]=t;return[a,l,o,s].map(Number)},"stringToArgs"),y=b(e=>{if(!e)return;let t=!0;if(ee.test(e)){let[n,r,c,f]=R(e),[m,u,p]=h.rgb.hsl([n,r,c])||[0,0,0];return{valid:t,value:e,keyword:h.rgb.keyword([n,r,c]),colorSpace:i.RGB,[i.RGB]:e,[i.HSL]:`hsla(${m}, ${u}%, ${p}%, ${f})`,[i.HEX]:`#${h.rgb.hex([n,r,c]).toLowerCase()}`}}if(te.test(e)){let[n,r,c,f]=R(e),[m,u,p]=h.hsl.rgb([n,r,c])||[0,0,0];return{valid:t,value:e,keyword:h.hsl.keyword([n,r,c]),colorSpace:i.HSL,[i.RGB]:`rgba(${m}, ${u}, ${p}, ${f})`,[i.HSL]:e,[i.HEX]:`#${h.hsl.hex([n,r,c]).toLowerCase()}`}}let a=e.replace("#",""),l=h.keyword.rgb(a)||h.hex.rgb(a),o=h.rgb.hsl(l),s=e;if(/[^#a-f0-9]/i.test(e)?s=a:k.test(e)&&(s=`#${a}`),s.startsWith("#"))t=k.test(s);else try{h.keyword.hex(s)}catch{t=!1}return{valid:t,value:s,keyword:h.rgb.keyword(l),colorSpace:i.HEX,[i.RGB]:`rgba(${l[0]}, ${l[1]}, ${l[2]}, 1)`,[i.HSL]:`hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,[i.HEX]:s}},"parseValue"),le=b((e,t,a)=>{if(!e||!(t!=null&&t.valid))return E[a];if(a!==i.HEX)return(t==null?void 0:t[a])||E[a];if(!t.hex.startsWith("#"))try{return`#${h.keyword.hex(t.hex)}`}catch{return E.hex}let l=t.hex.match(ae);if(!l)return k.test(t.hex)?t.hex:E.hex;let[o,s,n]=l[1].split("");return`#${o}${o}${s}${s}${n}${n}`},"getRealValue"),oe=b((e,t)=>{let[a,l]=g.useState(e||""),[o,s]=g.useState(()=>y(a)),[n,r]=g.useState((o==null?void 0:o.colorSpace)||i.HEX);g.useEffect(()=>{e===void 0&&(l(""),s(void 0),r(i.HEX))},[e]);let c=g.useMemo(()=>le(a,o,n).toLowerCase(),[a,o,n]),f=g.useCallback(u=>{let p=y(u),x=(p==null?void 0:p.value)||u||"";l(x),x===""&&(s(void 0),t(void 0)),p&&(s(p),r(p.colorSpace),t(p.value))},[t]),m=g.useCallback(()=>{let u=w.indexOf(n)+1;u>=w.length&&(u=0),r(w[u]);let p=(o==null?void 0:o[w[u]])||"";l(p),t(p)},[o,n,t]);return{value:a,realValue:c,updateValue:f,color:o,colorSpace:n,cycleColorSpace:m}},"useColorInput"),S=b(e=>e.replace(/\s*/,"").toLowerCase(),"id"),se=b((e,t,a)=>{let[l,o]=g.useState(t!=null&&t.valid?[t]:[]);g.useEffect(()=>{t===void 0&&o([])},[t]);let s=g.useMemo(()=>(e||[]).map(r=>typeof r=="string"?y(r):r.title?L(X({},y(r.color)),{keyword:r.title}):y(r.color)).concat(l).filter(Boolean).slice(-27),[e,l]),n=g.useCallback(r=>{!(r!=null&&r.valid)||s.some(c=>S(c[a])===S(r[a]))||o(c=>c.concat(r))},[a,s]);return{presets:s,addPreset:n}},"usePresets"),ie=b(({name:e,value:t,onChange:a,onFocus:l,onBlur:o,presetColors:s,startOpen:n})=>{let{value:r,realValue:c,updateValue:f,color:m,colorSpace:u,cycleColorSpace:p}=oe(t,j(a,200)),{presets:x,addPreset:z}=se(s,m,u),G=re[u];return d.createElement(Z,null,d.createElement(A,{trigger:"click",startOpen:n,closeOnClick:!0,onVisibilityChange:()=>z(m),tooltip:d.createElement(D,null,d.createElement(G,C({color:c==="transparent"?"#000000":c},{onChange:f,onFocus:l,onBlur:o})),x.length>0&&d.createElement(K,null,x.map((v,O)=>d.createElement(B,{key:`${v.value}-${O}`,hasChrome:!1,tooltip:d.createElement(J,{note:v.keyword||v.value})},d.createElement(H,{value:v[u],active:m&&S(v[u])===S(m[u]),onClick:()=>f(v.value)})))))},d.createElement(H,{value:c,style:{margin:4}})),d.createElement(U,{id:P(e),value:r,onChange:v=>f(v.target.value),onFocus:v=>v.target.select(),placeholder:"Choose color..."}),r?d.createElement(Y,{icon:"markup",onClick:p}):null)},"ColorControl"),fe=ie;export{ie as ColorControl,fe as default};
//# sourceMappingURL=Color-Y7QPKMAJ-e436b8dd.js.map