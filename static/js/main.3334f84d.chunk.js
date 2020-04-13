(this["webpackJsonpreact-split-flap-display-example"]=this["webpackJsonpreact-split-flap-display-example"]||[]).push([[0],{266:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(87),o=n.n(c),l=(n(98),n(3)),i=n(12),u=n(13);function d(){const e=Object(i.a)(["\n  display: flex;\n  color: ",";\n  font-size: ",";\n  > * {\n    &:not(:first-child) {\n      border-left: ",";\n    }\n  }\n  box-sizing: border-box;\n"]);return d=function(){return e},e}function s(){const e=Object(i.a)(["\n  background: ",";\n  display: flex;\n  justify-content: center;\n  width: ",";\n  padding: 0.5em;\n  position: relative;\n  &:after {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    z-index: 5;\n    background: transparent;\n    border-bottom: ",";\n  }\n"]);return s=function(){return e},e}function m(){const e=Object(i.a)(["\n  position: absolute;\n  animation: "," linear ",";\n  animation-fill-mode: forwards;\n  background: ",";\n  opacity: 1;\n  z-index: 2;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]);return m=function(){return e},e}function p(){const e=Object(i.a)(["\n  0% {\n    transform: rotateX(0deg);\n  }\n  50% {\n    transform: rotateX(90deg);\n  }\n  100% {\n    transform: rotateX(90deg);\n  }\n"]);return p=function(){return e},e}function b(){const e=Object(i.a)(["\n  0% {\n    transform: rotateX(-90deg);\n  }\n  50% {\n    transform: rotateX(-90deg);\n  }\n  100% {\n    transform: rotateX(0deg);\n  }\n"]);return b=function(){return e},e}function h(){const e=Object(i.a)(["\n  position: ",";\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]);return h=function(){return e},e}function E(){const e=Object(i.a)(["\n  background: ",";\n  background-clip: text;\n  -webkit-background-clip: text;\n  text-fill-color: transparent;\n  -webkit-text-fill-color: transparent;\n"]);return E=function(){return e},e}const g=[" ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],v=["0","1","2","3","4","5","6","7","8","9"],f=u.a.div(E(),({position:e,color:t})=>"top"===e?"linear-gradient(".concat(t," 50%, transparent 50%)"):"linear-gradient(transparent 50%, ".concat(t," 50%)")),j=({children:e,color:t,position:n})=>Object(a.createElement)(f,{position:n,color:t},e),O=u.a.div(h(),({position:e})=>"top"===e?"relative":"absolute"),C=({position:e,textColor:t,value:n})=>r.a.createElement(O,{position:e},r.a.createElement(j,{position:e,color:t},n)),k=Object(u.b)(b()),x=Object(u.b)(p()),S=Object(u.a)(O)(m(),({direction:e})=>"in"===e?k:x,({duration:e})=>"".concat(e,"s"),({color:e,direction:t})=>"out"===t?"linear-gradient(".concat(e," 50%, transparent 50%)"):"linear-gradient(transparent 50%, ".concat(e," 50%)")),W=({background:e,direction:t,duration:n,position:a,textColor:c,value:o})=>r.a.createElement(S,{direction:t,duration:n,color:e,position:a},r.a.createElement(j,{position:a,color:c},o)),w=u.a.div(s(),({background:e})=>e,({characterWidth:e})=>e||"initial",({background:e,borderWidth:t})=>"".concat(e," ").concat(t," solid")),y=({background:e,borderWidth:t,characterWidth:n,prevValue:r,step:c,textColor:o,value:l})=>Object(a.createElement)(w,{background:e,borderWidth:t,characterWidth:n},Object(a.createElement)(C,{position:"top",background:e,textColor:o,value:l}),Object(a.createElement)(C,{position:"bottom",background:e,textColor:o,value:r}),r!==l&&Object(a.createElement)(W,{direction:"out",duration:c/1e3,position:"top",background:e,textColor:o,value:r}),r!==l&&Object(a.createElement)(W,{direction:"in",duration:c/1e3,position:"bottom",background:e,textColor:o,value:l})),N=u.a.div(d(),({color:e})=>e,({fontSize:e})=>e,({borderColor:e,borderWidth:t})=>"".concat(e," ").concat(t," solid")),A={background:"#000000",borderColor:"#dddddd",borderWidth:"1px",characterSet:v,characterWidth:"1em",fontSize:"1em",minLength:5,padDirection:"left",step:200,textColor:"#dddddd",value:"94609"},z=(e,t,n)=>n&&e.length<n?Array(n-e.length).fill(t[0]):[];var D=({background:e,borderColor:t,borderWidth:n,characterSet:c,characterWidth:o,fontSize:i,minLength:u,padDirection:d,step:s,textColor:m,value:p}=A)=>{const b=Array(p.length).fill(c[0]).join(""),h=Object(a.useState)(b),E=Object(l.a)(h,2),g=E[0],v=E[1],f=Object(a.useState)(b),j=Object(l.a)(f,2),O=j[0],C=j[1],k=Object(a.useRef)(b),x=Object(a.useRef)(b),S=Object(a.useRef)(null),W=()=>{const e=((e,t)=>e.split("").map(e=>t.includes(e)?e:t[0]).join(""))(p,c);if(S.current||k.current===e)return;k.current=x.current,v(k.current);const t=x.current.split(""),n=e.split("").map((e,n)=>{const a=t[n],r=c.indexOf(a);return a===e||0===r&&!c.includes(e)?a:c[(r+1)%c.length]}).join("");x.current=n,C(x.current),S.current=setTimeout(()=>{S.current=null,W()},s)};let w,D;return Object(a.useEffect)(W,[]),Object(a.useEffect)(()=>{S.current&&(clearTimeout(S.current),S.current=null),W()},[p,c,s]),"right"===d?(w=[...g.split(""),...z(g,c,u)],D=[...O.split(""),...z(O,c,u)]):(w=[...z(g,c,u),...g.split("")],D=[...z(O,c,u),...O.split("")]),r.a.createElement(N,{borderColor:t,borderWidth:n,color:m,fontSize:i},w.map((t,a)=>r.a.createElement(y,{key:"split-flap-".concat(a),background:e,borderWidth:n,characterWidth:o,prevValue:" "===t?"\u2007":t,step:s,textColor:m,value:" "===D[a]?"\u2007":D[a]})))};var L=({background:e,borderColor:t,borderWidth:n,characterSet:a,characterWidth:c,fontSize:o,minLength:l,padDirection:i,step:u,textColor:d,value:s})=>r.a.createElement("pre",null,"\n  <SplitFlapDisplay\n    background='".concat(e,"'\n    borderColor='").concat(t,"'\n    borderWidth='").concat(n,"'\n    characterSet={").concat(a,"}\n    characterWidth='").concat(c,"'\n    fontSize='").concat(o,"'\n    minLength={").concat(l,"}\n    padDirection='").concat(i,"'\n    step={").concat(u,"}\n    textColor='").concat(d,"'\n    value='").concat(s,"'\n  />\n  ")),R=n(91);var T=({color:e,onChange:t})=>{const n=Object(a.useState)(!1),c=Object(l.a)(n,2),o=c[0],i=c[1];return r.a.createElement("div",{className:"swatch-container"},r.a.createElement("div",{className:"swatch",onClick:()=>i(!o)},r.a.createElement("div",{className:"color",style:{background:e}})),o&&r.a.createElement("div",{className:"popover"},r.a.createElement("div",{className:"cover",onClick:()=>i(!1)}),r.a.createElement(R.SketchPicker,{color:e,onChange:t})))};var I=({children:e})=>r.a.createElement("div",{className:"wrapper"},e);const X={numeric:"94103",alpha:"TRENTON",alphanumeric:"1 FERRY BUILDING",punctuation:"TRE-SEA: DELAYED!"},P={numeric:v,alpha:g,alphanumeric:[...g,...v],punctuation:[...g,"!","@","#","$","(",")","^","-","_","+","&","=",";",":","*","'",'"',",",".","<",">","/","\\","?","\xb0","%"]},U={numeric:"NUMERIC",alpha:"ALPHA",alphanumeric:"[...ALPHA, ...NUMERIC]",punctuation:"[...ALPHA, ...PUNCTUATION]"};var B=()=>{const e=Object(a.useState)("numeric"),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("#000000"),i=Object(l.a)(o,2),u=i[0],d=i[1],s=Object(a.useState)("#dddddd"),m=Object(l.a)(s,2),p=m[0],b=m[1],h=Object(a.useState)("1px"),E=Object(l.a)(h,2),g=E[0],v=E[1],f=Object(a.useState)("1em"),j=Object(l.a)(f,2),O=j[0],C=j[1],k=Object(a.useState)("2em"),x=Object(l.a)(k,2),S=x[0],W=x[1],w=Object(a.useState)(X.numeric.length),y=Object(l.a)(w,2),N=y[0],A=y[1],z=Object(a.useState)("left"),R=Object(l.a)(z,2),B=R[0],F=R[1],H=Object(a.useState)(X.numeric),Z=Object(l.a)(H,2),J=Z[0],M=Z[1],V=Object(a.useState)("#dddddd"),Y=Object(l.a)(V,2),G=Y[0],$=Y[1],K=Object(a.useState)(200),Q=Object(l.a)(K,2),_=Q[0],q=Q[1],ee=e=>t=>e(t.target.value),te=e=>t=>e(t.hex);return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"React Split Flap Display"),r.a.createElement("div",{className:"flex-container-vertical"},r.a.createElement(I,null,r.a.createElement(D,{background:u,borderColor:p,borderWidth:g,characterSet:P[n],characterWidth:O,fontSize:S,minLength:N,padDirection:B,step:_,textColor:G,value:J})),r.a.createElement("div",{className:"flex-container-horizontal"},r.a.createElement("div",null,r.a.createElement(I,null,r.a.createElement("div",null,r.a.createElement("label",null,"display:\xa0",r.a.createElement("input",{value:J,onChange:ee(M)}))),r.a.createElement("div",null,"character set:\xa0",r.a.createElement("select",{value:n,onChange:e=>{const t=e.target.value;if(t!==n){const e=X[t];c(t),M(e),A(e.length)}}},r.a.createElement("option",{value:"numeric"},"0-9"),r.a.createElement("option",{value:"alpha"},"A-Z"),r.a.createElement("option",{value:"alphanumeric"},"A-Z with 0-9"),r.a.createElement("option",{value:"punctuation"},"A-Z with punctuation"))),r.a.createElement("div",null,"character width:\xa0",r.a.createElement("input",{value:O,onChange:ee(C)})),r.a.createElement("div",null,r.a.createElement("label",null,"min length:\xa0",r.a.createElement("input",{type:"number",value:N,onChange:ee(A)}))),r.a.createElement("div",null,r.a.createElement("label",null,"pad direction:\xa0",r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"left",onChange:ee(F),checked:"left"===B}),"left"),"\xa0",r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"right",onChange:ee(F),checked:"right"===B}),"right"))),r.a.createElement("div",null,r.a.createElement("label",null,"step (ms):\xa0",r.a.createElement("input",{type:"number",value:_,onChange:ee(q)})))),r.a.createElement(I,null,r.a.createElement("div",null,"background color:\xa0",r.a.createElement(T,{color:u,onChange:te(d)})),r.a.createElement("div",null,"border color:\xa0",r.a.createElement(T,{color:p,onChange:te(b)})),r.a.createElement("div",null,"text color:\xa0",r.a.createElement(T,{color:G,onChange:te($)}))),r.a.createElement(I,null,r.a.createElement("div",null,"border width:\xa0",r.a.createElement("input",{value:g,onChange:ee(v)})),r.a.createElement("div",null,"font size:\xa0",r.a.createElement("input",{value:S,onChange:ee(W)})))),r.a.createElement(L,{background:u,borderColor:p,borderWidth:g,characterSet:U[n],characterWidth:O,fontSize:S,minLength:N,padDirection:B,step:_,textColor:G,value:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},93:function(e,t,n){e.exports=n(266)},98:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.3334f84d.chunk.js.map