import{h}from"./vendor.9049838c.js";import{c as x,i as z}from"./create.af6e9796.js";import{a as b}from"./elements.aa4184a2.js";/* empty css               */const k={loading:{type:Boolean,default:!1},description:{type:String},rotate:{type:Boolean,default:!0},size:{type:[Number,String]},color:{type:String}};const{createComponent:B,namespace:i}=x("loading");function p(t,l,e,g){var d;const{color:n,size:u,loading:r,description:o,rotate:v}=l,c=b(u),m=()=>r&&e.default?i("--opacity-visible"):i("--opacity-hidden"),f=()=>!r&&i("--allow-touch"),y=()=>e.default&&i("--overlay"),_=()=>v&&i("--rotate"),w=()=>{var a;if(e.description)return(a=e.description)==null?void 0:a.call(e);if(o)return t("div",{class:i("__description")},[o])},S=()=>t("svg",{style:{width:c,height:c,color:n},attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]),C=()=>{var a,s;return t("div",{class:[i("__mask-container"),f(),y()]},[t("div",{class:[i("__mask"),m()]}),t("div",{class:[i("__circle"),_()],directives:[{name:"show",value:r}]},[(s=(a=e.icon)==null?void 0:a.call(e))!=null?s:S()]),t("div",{class:i("__description-container"),style:{color:n},directives:[{name:"show",value:r}]},[w()])])};return t("div",h([{class:[i(),"m--box"]},z(g)]),[(d=e.default)==null?void 0:d.call(e),C()])}p.props=k;const D=B(p);export{D as L};
