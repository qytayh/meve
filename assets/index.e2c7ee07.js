import{c as v}from"./create.af6e9796.js";import{i as T,a as f}from"./elements.aa4184a2.js";import{e as a,r as t}from"./shared.285cd5cf.js";import{c as p}from"./lock.9f1e4355.js";/* empty css               */const M={height:{type:[String,Number]},right:{type:[String,Number]}};const e=[],{namespace:o,createComponent:g}=v("scroller"),L=g({props:M,mixins:[p("mouseEnter")],data:()=>({isMobile:!1,scrollY:0,maxScrollY:0,scrollViewTranslateY:0,transitionDuration:100,scrollbarRatio:0,mouseEnter:!1,touching:!1,touchY:0}),watch:{height(){this.resize()}},computed:{showScrollbar(){return!this.isMobile&&this.scrollbarRatio<1&&(this.touching||this.mouseEnter)}},mounted(){this.isMobile=T()},beforeDestroy(){document.removeEventListener("touchmove",this.handleTouchMove),document.removeEventListener("touchend",this.handleTouchend),document.removeEventListener("mousewheel",this.handleMouseWheel),a(e,this)},methods:{resize(){const{scroller:s}=this.$refs;this.scrollbarRatio=s.clientHeight/s.scrollHeight||0,this.maxScrollY=s.clientHeight-this.scrollbarRatio*s.clientHeight},getScrollTop(){return this.isMobile?this.$refs.scroller.scrollTop:this.scrollViewTranslateY},scrollTo(s){if(this.isMobile){this.$refs.scroller.scrollTop=s;return}this.scrollY=s*this.scrollbarRatio,this.scrollY=t(this.scrollY,0,this.maxScrollY),this.scrollViewTranslateY=this.scrollY/this.scrollbarRatio},scrollToTop(){if(this.isMobile){setTimeout(()=>{this.$refs.scroller.scrollTop=0});return}this.scrollY=0,this.scrollViewTranslateY=0},scrollUp(s){if(this.isMobile){this.$refs.scroller.scrollTop-=s;return}this.scrollY-=s*this.scrollbarRatio,this.scrollY=t(this.scrollY,0,this.maxScrollY),this.scrollViewTranslateY=this.scrollY/this.scrollbarRatio},scrollDown(s){if(this.isMobile){this.$refs.scroller.scrollTop+=s;return}this.scrollY+=s*this.scrollbarRatio,this.scrollY=t(this.scrollY,0,this.maxScrollY),this.scrollViewTranslateY=this.scrollY/this.scrollbarRatio},enableTransitionDuration(){this.transitionDuration=100},disableTransitionDuration(){this.transitionDuration=0},handleMouseEnter(){this.isMobile||(e.push(this),this.mouseEnter=!0,this.resize(),document.addEventListener("mousewheel",this.handleMouseWheel))},handleMouseWheel({deltaY:s}){e[e.length-1]===this&&(this.touching||(this.enableTransitionDuration(),this.scrollY+=s*this.scrollbarRatio,this.scrollY=t(this.scrollY,0,this.maxScrollY),this.scrollViewTranslateY=this.scrollY/this.scrollbarRatio))},handleMouseLeave(){this.mouseEnter=!1,a(e,this),document.removeEventListener("mousewheel",this.handleMouseWheel)},handleTouchstart(s){this.touching=!0,this.touchY=s.touches[0].clientY,document.addEventListener("touchmove",this.handleTouchMove),document.addEventListener("touchend",this.handleTouchend)},handleTouchMove(s){const{touchY:l}=this;this.disableTransitionDuration();const{clientY:i}=s.touches[0],r=i-l;this.touchY=i,this.scrollY+=r,this.scrollY=t(this.scrollY,0,this.maxScrollY),this.scrollViewTranslateY=this.scrollY/this.scrollbarRatio},handleTouchend(){this.touching=!1,document.removeEventListener("touchmove",this.handleTouchMove),document.removeEventListener("touchend",this.handleTouchend),this.enableTransitionDuration()}},render(){const s=arguments[0],{right:l,height:i,showScrollbar:r,isMobile:h,scrollbarRatio:c,scrollY:u,scrollViewTranslateY:m,transitionDuration:n,handleTouchstart:d,handleMouseEnter:Y,handleMouseLeave:b}=this;return s("div",{ref:"scroller",class:[o(),h?o("--mobile"):null],style:{maxHeight:f(i)},on:{mouseenter:Y,mouseleave:b}},[s("div",{class:o("__scroll-view"),style:{transform:h?void 0:`translateY(${-m}px)`,transition:h?void 0:`transform ${n}ms`}},[this.slots()]),s("transition",{attrs:{name:"scrollbar-fade"}},[s("div",{class:o("__scrollbar"),style:{right:l},directives:[{name:"show",value:r}]},[s("div",{class:o("__scrollbar-inner"),style:{height:`${c*100}%`,transition:`top ${n}ms`,top:`${u}px`},on:{touchstart:d}})])])])}});export{L as S};
