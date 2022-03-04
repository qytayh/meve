import{R as o}from"./index.45eae9d1.js";import{F as h}from"./index.69ee1880.js";import{I as d}from"./index.ae1cb571.js";import{c as m}from"./create.af6e9796.js";import{c}from"./relation.9e421618.js";import{t as u}from"./shared.285cd5cf.js";/* empty css               */const f=e=>["normal","small","mini"].includes(e),p={value:{type:[String,Number],default:0},label:{type:[String,Number]},color:{type:String},count:{type:[Number,String],default:5},icon:{type:String,default:"star"},half:{type:Boolean,default:!1},size:{type:String,default:"normal",validator:f},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array}};const{createComponent:g,namespace:r}=m("rate"),_=g({props:p,mixins:[c("form",{parentKey:"form",childrenKey:"formComponents"})],directives:{Ripple:o},watch:{value:{handler(e){this.activeRate=u(e)},immediate:!0}},data:()=>({errorMessage:"",activeRate:0}),methods:{reset(){this.$emit("input",0),this.resetValidation()},validate(){this.$refs.formItem.validate()},resetValidation(){this.$refs.formItem.resetValidation()},nextTickValidateWithTrigger(e){this.$nextTick(()=>{var t;(t=this.$refs.formItem)==null||t.validateWithTrigger(this.validateTrigger,e,this.rules,this.value)})},handleErrorMessageChange(e){this.errorMessage=e},handleMouseenter(e){var t,a;((t=this.form)==null?void 0:t.disabled)||this.disabled||((a=this.form)==null?void 0:a.readonly)||this.readonly||(this.activeRate=e)},handleMouseleave(){this.activeRate=this.value},handleClick(e){var t,a;((t=this.form)==null?void 0:t.disabled)||this.disabled||(this.$emit("click",e),!(((a=this.form)==null?void 0:a.readonly)||this.readonly)&&(this.$emit("input",e),this.$emit("change",e),this.nextTickValidateWithTrigger("onChange")))},renderRate(e,t){var i;const a=this.$createElement;return a("div",{class:[r("__rate-item"),this.half?r("--half"):null,this.half?r(`--${this.size}-half-rate`):r(`--${this.size}-rate`)],on:{mouseenter:()=>this.handleMouseenter(e),click:()=>this.handleClick(e)}},[a(d,{class:[r("__rate"),r(`--${t}-rate`),this.activeRate>=e?r("--active"):null,((i=this.form)==null?void 0:i.disabled)||this.disabled?r("--disabled"):null,this.activeRate>=e&&this.errorMessage?r("--error"):null],style:{color:this.activeRate>=e?this.color:void 0},attrs:{"rate-cover":!0,name:this.icon}})])},renderRates(){const e=this.$createElement,t=Array.from({length:this.count}).map((a,i)=>{var l,n;const s=i+(this.half?.5:1);return e("div",{class:[r("__rate-wrapper"),r("--active"),this.errorMessage?r("--error"):null],style:{color:this.color},directives:[{name:"ripple",value:{disabled:!this.ripple||((l=this.form)==null?void 0:l.disabled)||((n=this.form)==null?void 0:n.readonly)||this.disabled||this.readonly}}]},[this.renderRate(s,"left"),this.half&&this.renderRate(s+.5,"right")])});return e("div",{class:r("__rates"),on:{mouseleave:this.handleMouseleave}},[t])}},render(){const e=arguments[0],{label:t,value:a,rules:i,handleErrorMessageChange:s}=this;return e(h,{attrs:{"rate-cover":!0,label:t,value:a,rules:i},ref:"formItem",on:{"error-message-change":s}},[this.renderRates()])}});export{_ as R};
