import{h as N}from"./vendor.9049838c.js";import{c as I,i as V}from"./create.af6e9796.js";import{a as x,b as A,c as B}from"./shared.285cd5cf.js";import{t as c}from"./elements.aa4184a2.js";/* empty css               */const $=e=>["mini","small","normal","large"].includes(e),C=e=>$(e)||x(e)||A(e)||B(e),P=e=>["start","end","center","space-around","space-between"].includes(e),D={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:C},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:P},inline:{type:Boolean,default:!1}};const{createComponent:W,namespace:k}=I("space"),q={mini:[4,4],small:[6,6],normal:[8,12],large:[12,20]},z=(e,l)=>l?q[e]:x(e)?e.map(c):[c(e),c(e)];function g(e,l,o,y){var u,d;const{inline:S,justify:n,align:w,wrap:b,direction:i,size:m}=l,f=(d=(u=o.default)==null?void 0:u.call(o))!=null?d:[],s=f.length-1,v=$(m),[t,r]=z(m,v),h=f.map((j,p)=>{let a="0";return i==="row"&&(n==="start"||n==="center"||n==="end"?p!==s?a=`${t/2}px ${r}px ${t/2}px 0`:a=`${t/2}px 0`:n==="space-around"?a=`${t/2}px ${r/2}px`:n==="space-between"&&(p===0?a=`${t/2}px ${r/2}px ${t/2}px 0`:p===s?a=`${t/2}px 0 ${t/2}px ${r/2}px`:a=`${t/2}px ${r/2}px`)),i==="column"&&p!==s&&(a=`0 0 ${t}px 0`),e("div",{style:{margin:a}},[j])});return e("div",N([{class:[k(),"m--box",S?"m--inline-flex":null],style:{flexDirection:i,justifyContent:n,alignItems:w,flexWrap:b?"wrap":"nowrap",margin:i==="row"?`-${t/2}px 0`:void 0}},V(y)]),[h])}g.props=D;const K=W(g);export{K as S};
