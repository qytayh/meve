import{c as p}from"./create.af6e9796.js";import{t as u,c as x}from"./elements.aa4184a2.js";/* empty css               */import{t as h}from"./shared.285cd5cf.js";const m={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}};const{createComponent:S,namespace:f}=p("sticky"),L=S({props:m,data:()=>({isFixed:!1,fixedTop:"0px",fixedLeft:"0px",fixedWidth:"auto",fixedHeight:"auto",fixedWrapperWidth:"auto",fixedWrapperHeight:"auto",scroller:null}),watch:{disabled(){this.handleScroll()}},activated(){this.addScrollListener()},deactivated(){this.removeScrollListener()},mounted(){this.addScrollListener()},beforeDestroy(){this.removeScrollListener()},computed:{enableCSSMode(){return!this.disabled&&this.cssMode},enableFixedMode(){return!this.disabled&&this.isFixed},offsetTopNum(){return u(this.offsetTop)}},methods:{handleScroll(){const{cssMode:s,disabled:o}=this;if(o)return;let e=0;if(this.scroller!==window){const{top:n}=this.scroller.getBoundingClientRect();e=n}const r=this.$refs.wrapper,t=this.$refs.sticky,{top:d,left:l}=t.getBoundingClientRect(),i=d-e;i<=this.offsetTopNum?(s||(this.fixedWidth=`${t.offsetWidth}px`,this.fixedHeight=`${t.offsetHeight}px`,this.fixedTop=`${e+this.offsetTopNum}px`,this.fixedLeft=`${l}px`,this.fixedWrapperWidth=`${r.offsetWidth}px`,this.fixedWrapperHeight=`${r.offsetHeight}px`,this.isFixed=!0),this.$emit("scroll",this.offsetTopNum,!0)):(this.isFixed=!1,this.$emit("scroll",i,!1))},addScrollListener(){this.scroller=x(this.$refs.sticky),this.scroller!==window&&this.scroller.addEventListener("scroll",this.handleScroll),window.addEventListener("scroll",this.handleScroll),this.handleScroll()},removeScrollListener(){this.scroller!==window&&this.scroller.removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleScroll)}},render(){const s=arguments[0],{enableCSSMode:o,enableFixedMode:e,fixedWrapperWidth:r,fixedWrapperHeight:t,fixedLeft:d,fixedTop:l,zIndex:i,offsetTopNum:n,fixedWidth:a,fixedHeight:c}=this;return s("div",{ref:"sticky",class:[f(),o?f("--css-mode"):null],style:{zIndex:h(i),top:o?`${n}px`:void 0,width:e?a:void 0,height:e?c:void 0}},[s("div",{ref:"wrapper",class:f("__wrapper"),style:{zIndex:h(i),position:e?"fixed":void 0,width:e?r:void 0,height:e?t:void 0,left:e?d:void 0,top:e?l:void 0}},[this.slots()])])}});export{L as S};
