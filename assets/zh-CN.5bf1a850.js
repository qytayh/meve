import{c as P}from"./create.af6e9796.js";import{a as p}from"./relation.9e421618.js";/* empty css               */import{S as a}from"./index.c93e344e.js";import{B as n}from"./index.f9e323e3.js";import{I as l}from"./index.c39b1305.js";import{S as _,O as c}from"./index.71e736c6.js";import{R as u}from"./index.2c1b7066.js";import{A as i}from"./index.c13f8978.js";import{R as m,a as d}from"./index.71e54d90.js";import{C as h,a as f}from"./index.e2c84830.js";import{S as g}from"./index.86f0326d.js";import{S as j}from"./index.570f69a7.js";import{T as b}from"./index.e9d832f7.js";import{n as v}from"./main.b1f15d43.js";import{F as y}from"./index.69ee1880.js";import"./shared.285cd5cf.js";import"./vendor.7c12ce6c.js";import"./elements.aa4184a2.js";import"./index.45eae9d1.js";import"./index.4b0beb05.js";import"./index.d9ebbb80.js";import"./index.ab660845.js";import"./index.1a995bb0.js";import"./index.87ae6dc2.js";import"./zIndex.9234fbb1.js";import"./index.e2c7ee07.js";import"./lock.9f1e4355.js";import"./index.2af5cac0.js";import"./keyboardActive.acc7335a.js";const C={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},{createComponent:R,namespace:w}=P("form"),o=R({mixins:[p("form",{childrenKey:"formItems"}),p("form",{childrenKey:"formComponents"})],props:C,methods:{async validate(){return(await Promise.all(this.formItems.map(({validate:r})=>r()))).every(r=>r===!0)},reset(){this.formComponents.forEach(({reset:t})=>t())},resetValidation(){this.formItems.forEach(({resetValidation:t})=>t())}},render(){return arguments[0]("div",{class:w()},[this.slots()])}});var E=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("m-form",{ref:"form",attrs:{disabled:t.disabled,readonly:t.readonly}},[e("m-space",{attrs:{direction:"column",size:"large"}},[e("m-input",{attrs:{placeholder:"Please input your account",label:"YOUR ACCOUNT",rules:[function(s){return s&&s.length>6||"Length must over than 6"}]},model:{value:t.form.account,callback:function(s){t.$set(t.form,"account",s)},expression:"form.account"}}),e("m-input",{attrs:{type:"password",placeholder:"Please input your password",label:"YOUR PASSWORD",rules:[function(s){return s&&s.length>6||"Length must over than 6"}]},model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}}),e("m-auto-complete",{attrs:{placeholder:"Please input your email",label:"YOUR EMAIL",options:t.options,rules:[function(s){return s&&s.length>12||"Length must over than 12"}]},model:{value:t.form.email,callback:function(s){t.$set(t.form,"email",s)},expression:"form.email"}}),e("m-select",{attrs:{label:"GENDER",placeholder:"What is your gender",rules:[function(s){return!!s||"You must select one"}]},model:{value:t.form.gender,callback:function(s){t.$set(t.form,"gender",s)},expression:"form.gender"}},[e("m-option",{attrs:{label:"Male"}}),e("m-option",{attrs:{label:"Female"}})],1),e("m-select",{attrs:{label:"FAVORITE",multiple:"",placeholder:"What is your favorite",rules:[function(s){return!!s.length||"You must select one"}]},model:{value:t.form.favorite,callback:function(s){t.$set(t.form,"favorite",s)},expression:"form.favorite"}},[e("m-option",{attrs:{label:"Eat"}}),e("m-option",{attrs:{label:"Sleep"}}),e("m-option",{attrs:{label:"Coding"}})],1),e("m-time-picker",{attrs:{label:"TIME",placeholder:"Please pick time",rules:[function(s){return s&&s.startsWith("10:")||"You must pick 10 hour"}]},model:{value:t.form.time,callback:function(s){t.$set(t.form,"time",s)},expression:"form.time"}}),e("m-radio-group",{attrs:{label:"AGREEMENT",rules:[function(s){return!!s||"You must check one"}]},model:{value:t.form.agreement,callback:function(s){t.$set(t.form,"agreement",s)},expression:"form.agreement"}},[e("m-radio",{attrs:{"checked-value":1}},[t._v("Agree")]),e("m-radio",{attrs:{"checked-value":2}},[t._v("Disagree")])],1),e("m-checkbox-group",{attrs:{label:"GROUP",rules:[function(s){return s.length>=1||"You check at least one"}]},model:{value:t.form.group,callback:function(s){t.$set(t.form,"group",s)},expression:"form.group"}},[e("m-checkbox",{attrs:{"checked-value":1}},[t._v("Frontend")]),e("m-checkbox",{attrs:{"checked-value":2}},[t._v("Backend")]),e("m-checkbox",{attrs:{"checked-value":3}},[t._v("Production Manager")])],1),e("m-rate",{attrs:{label:"RATE",rules:[function(s){return s>0||"You must pick one"}]},model:{value:t.form.rate,callback:function(s){t.$set(t.form,"rate",s)},expression:"form.rate"}}),e("m-switch",{attrs:{label:"ENABLE?",rules:[function(s){return!!s||"You must enable it"}]},model:{value:t.form.enable,callback:function(s){t.$set(t.form,"enable",s)},expression:"form.enable"}}),e("m-slider",{attrs:{label:"PROGRESS",rules:[function(s){return s>=10||"You must slide progress >= 10"}]},model:{value:t.form.progress,callback:function(s){t.$set(t.form,"progress",s)},expression:"form.progress"}}),e("div",{staticStyle:{"margin-top":"10px"}},[e("m-space",[e("m-button",{attrs:{type:"primary"},on:{click:function(s){return t.$refs.form.validate()}}},[t._v("Validate")]),e("m-button",{attrs:{type:"info"},on:{click:function(s){return t.$refs.form.resetValidation()}}},[t._v("Reset Validation")]),e("m-button",{attrs:{type:"warning"},on:{click:function(s){return t.$refs.form.reset()}}},[t._v("Reset")]),e("m-button",{attrs:{type:"error"},on:{click:function(s){t.disabled=!t.disabled}}},[t._v("Toggle Disabled: "+t._s(t.disabled))]),e("m-button",{attrs:{type:"success"},on:{click:function(s){t.readonly=!t.readonly}}},[t._v("Toggle Readonly: "+t._s(t.readonly))])],1)],1)],1)],1)},I=[];const S={components:{[o.name]:o,[a.name]:a,[l.name]:l,[i.name]:i,[n.name]:n,[_.name]:_,[c.name]:c,[m.name]:m,[d.name]:d,[h.name]:h,[f.name]:f,[u.name]:u,[g.name]:g,[j.name]:j,[b.name]:b},data:()=>({disabled:!1,readonly:!1,form:{account:"",password:"",email:"",gender:"",favorite:[],group:[],enable:!1,agreement:void 0,rate:0,progress:5,time:void 0}}),computed:{options(){return["@qq.com","@163.com","@outlook.com"].map(t=>{var e;const r=(e=this.form.email)==null?void 0:e.split("@")[0];return{label:r+t,value:r+t}})}}},$={};var O=v(S,E,I,!1,F,null,null,null);function F(t){for(let r in $)this[r]=$[r]}var T=function(){return O.exports}(),A=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("m-form",{ref:"form",attrs:{disabled:t.disabled,readonly:t.readonly}},[e("m-space",{attrs:{direction:"column",size:"large"}},[e("m-form-item",{ref:"formItem",attrs:{label:"YOUR ACCOUNT",value:t.form.account,rules:[function(s){return s&&s.length>6||"Length must over than 6"}]}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.account,expression:"form.account"}],staticClass:"custom-input",attrs:{placeholder:"Please input your account",disabled:t.disabled,readonly:t.readonly},domProps:{value:t.form.account},on:{input:[function(s){s.target.composing||t.$set(t.form,"account",s.target.value)},t.handleInput]}})]),e("m-input",{attrs:{type:"password",placeholder:"Please input your password",label:"YOUR PASSWORD",rules:[function(s){return s&&s.length>6||"Length must over than 6"}]},model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}}),e("m-space",[e("m-button",{attrs:{type:"primary"},on:{click:function(s){return t.$refs.form.validate()}}},[t._v("Validate")]),e("m-button",{attrs:{type:"info"},on:{click:function(s){return t.$refs.form.resetValidation()}}},[t._v("Reset Validation")]),e("m-button",{attrs:{type:"warning"},on:{click:t.reset}},[t._v("Reset")]),e("m-button",{attrs:{type:"error"},on:{click:function(s){t.disabled=!t.disabled}}},[t._v("Toggle Disabled: "+t._s(t.disabled))]),e("m-button",{attrs:{type:"success"},on:{click:function(s){t.readonly=!t.readonly}}},[t._v("Toggle Readonly: "+t._s(t.readonly))])],1)],1)],1)},V=[];const Y={components:{[o.name]:o,[y.name]:y,[a.name]:a,[n.name]:n,[l.name]:l},data:()=>({disabled:!1,readonly:!1,form:{account:"",password:""}}),methods:{handleInput(){this.$nextTick(()=>{this.$refs.formItem.validate()})},reset(){this.$refs.form.reset(),this.form.account="",this.$refs.formItem.resetValidation()}}},k={};var M=v(Y,A,V,!1,U,"a0bbfcd4",null,null);function U(t){for(let r in k)this[r]=k[r]}var D=function(){return M.exports}(),L=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"meve-site-doc"},[e("h1",[t._v("Form \u8868\u5355")]),t._m(0),e("div",{staticClass:"meve-site-card"},[e("h3",[t._v("\u8868\u5355\u63A7\u5236")]),t._m(1),e("div",{staticClass:"meve-component-preview"},[e("all")],1),e("app-code",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t._v(`// TODO: \u8868\u5355\u7EC4\u4EF6\u5B8C\u6210\u540E\u5199\u8FD9\u91CC...
`)])])])],1),e("div",{staticClass:"meve-site-card"},[e("h3",[t._v("\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u8868\u5355\u9A8C\u8BC1")]),t._m(2),e("div",{staticClass:"meve-component-preview"},[e("custom-form-component")],1),e("app-code",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-form")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"form"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":disabled")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"disabled"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":readonly")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readonly"')]),t._v(">")]),t._v(`
    `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"column"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"large"')]),t._v(">")]),t._v(`
      `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-form-item")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"formItem"')]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"YOUR ACCOUNT"')]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"form.account"')]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":rules")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v(`"[v => v && v.length > 6 || 'Length must over than 6']"`)]),t._v(`
      >`)]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("input")]),t._v(`
          `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"custom-input"')]),t._v(`
          `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Please input your account"')]),t._v(`
          `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":disabled")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"disabled"')]),t._v(`
          `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":readonly")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readonly"')]),t._v(`
          `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"form.account"')]),t._v(`
          @`),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("input")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleInput"')]),t._v(`
        >`)]),t._v(`
      `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-form-item")]),t._v(">")]),t._v(`

      `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-input")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"password"')]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Please input your password"')]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"YOUR PASSWORD"')]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":rules")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v(`"[v => v && v.length > 6 || 'Length must over than 6']"`)]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"form.password"')]),t._v(`
      />`)]),t._v(`

      `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(">")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"$refs.form.validate()"')]),t._v(">")]),t._v("Validate"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"info"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"$refs.form.resetValidation()"')]),t._v(">")]),t._v("Reset Validation"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"reset"')]),t._v(">")]),t._v("Reset"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"error"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"disabled = !disabled"')]),t._v(">")]),t._v("Toggle Disabled: {{ disabled }}"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"success"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readonly = !readonly"')]),t._v(">")]),t._v("Toggle Readonly: {{ readonly }}"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
      `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(">")]),t._v(`
    `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(">")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-form")]),t._v(">")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("form")]),t._v(`: {
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("account")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("password")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v(`
    }
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleInput")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".$nextTick("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
        `),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(`.$refs.formItem.validate()
      })
    },

    `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("reset")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(`.$refs.form.reset()
      
      `),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".form.account = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v(`
      `),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(`.$refs.formItem.resetValidation()
    },
  }
}
`)]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"css"}},[t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[t._v(".custom-input")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("display")]),t._v(`: block;
  `),e("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("width")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100%")]),t._v(`;
  `),e("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("height")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("42px")]),t._v(`;
  `),e("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("padding")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("8px")]),t._v(`;
  `),e("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("color")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("#555")]),t._v(`;
  `),e("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("font-size")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("15px")]),t._v(`;
  `),e("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("border")]),t._v(": thin solid "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("#ccc")]),t._v(`;
}

`),e("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[t._v(".custom-input")]),e("span",{pre:!0,attrs:{class:"hljs-selector-pseudo"}},[t._v("::placeholder")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("color")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("#bbb")]),t._v(`;
}
`)]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v(`
`)])])])],1),e("h2",[t._v("API")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])},N=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"meve-site-card"},[e("h3",[t._v("\u4ECB\u7ECD")]),e("p",[t._v("\u63D0\u4F9B\u4E86\u8868\u5355\u7EC4\u4EF6\u7684\u63A7\u5236\u80FD\u529B")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u901A\u8FC7"),e("code",{pre:!0},[t._v("disabled")]),t._v("\u548C"),e("code",{pre:!0},[t._v("readonly")]),t._v("\u63A7\u5236\u8868\u5355\u7684\u7981\u7528\u548C\u53EA\u8BFB\uFF0C\u901A\u8FC7"),e("code",{pre:!0},[t._v("validate")]),t._v("\u65B9\u6CD5\u8FDB\u884C\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1\uFF0C\u901A\u8FC7"),e("code",{pre:!0},[t._v("resetValidation")]),t._v("\u91CD\u5236\u8868\u5355\u9A8C\u8BC1\u4FE1\u606F\uFF0C \u901A\u8FC7"),e("code",{pre:!0},[t._v("reset")]),t._v("\u6E05\u7A7A\u8868\u5355\u503C")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u901A\u8FC7"),e("code",{pre:!0},[t._v("<m-form-item/>")]),t._v("\u7EC4\u4EF6\u643A\u5E26"),e("code",{pre:!0},[t._v("rules")]),t._v("\u548C"),e("code",{pre:!0},[t._v("value")]),t._v("\uFF0C\u8FDB\u884C\u8868\u5355\u9A8C\u8BC1\u3002"),e("code",{pre:!0},[t._v("rules")]),t._v("\u662F\u4E00\u4E2A\u6821\u9A8C\u5668\u6570\u7EC4\uFF0C\u6821\u9A8C\u5668\u8FD4\u56DE"),e("code",{pre:!0},[t._v("true")]),t._v("\u8868\u793A\u6821\u9A8C\u901A\u8FC7\uFF0C \u4EE5\u5916\u7684\u503C\u5C06\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A\u3002 \u7EC4\u4EF6\u5E93\u5185\u7F6E\u7684\u8868\u5355\u7EC4\u4EF6\u90FD\u81EA\u5E26\u8868\u5355\u9A8C\u8BC1\u529F\u80FD\uFF0C"),e("code",{pre:!0},[t._v("<m-form-item/>")]),t._v("\u4EC5\u5728\u9700\u8981\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\u7684\u573A\u666F\u4F7F\u7528\u3002")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"meve-site-card"},[e("h3",[t._v("\u5C5E\u6027")]),e("h4",[t._v("Form Props")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u7C7B\u578B")]),e("th",[t._v("\u9ED8\u8BA4\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("readonly")])]),e("td",[t._v("\u662F\u5426\u53EA\u8BFB")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("strong",[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("disabled")])]),e("td",[t._v("\u662F\u5426\u7981\u7528")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("strong",[t._v("false")])])])])]),e("h4",[t._v("FormItem Props")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u7C7B\u578B")]),e("th",[t._v("\u9ED8\u8BA4\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("value")])]),e("td",[t._v("\u9A8C\u8BC1\u7684\u503C")]),e("td",[e("em",[t._v("any")])]),e("td",[e("strong",[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("label")])]),e("td",[t._v("\u6807\u7B7E\u540D")]),e("td",[e("em",[t._v("string")])]),e("td",[e("strong",[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("rules")])]),e("td",[t._v("\u9A8C\u8BC1\u89C4\u5219\uFF0C\u8FD4\u56DE "),e("code",{pre:!0},[t._v("true")]),t._v(" \u8868\u793A\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5176\u4F59\u7684\u503C\u5219\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A")]),e("td",[e("em",[t._v("Array<(v: any) => any>")])]),e("td",[e("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"meve-site-card"},[e("h3",[t._v("\u4E8B\u4EF6")]),e("h4",[t._v("FormItem Events")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u4E8B\u4EF6\u540D")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u53C2\u6570")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("error-message-change")])]),e("td",[t._v("\u9A8C\u8BC1\u4FE1\u606F\u53D8\u66F4\u65F6\u89E6\u53D1")]),e("td",[e("strong",[t._v("errorMessage: string")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"meve-site-card"},[e("h3",[t._v("\u65B9\u6CD5")]),e("h4",[t._v("Form Methods")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u65B9\u6CD5\u540D")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u8FD4\u56DE\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("validate")])]),e("td",[t._v("\u89E6\u53D1\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7684\u6821\u9A8C")]),e("td",[e("em",[t._v("-")])]),e("td",[e("strong",[t._v("valid: Promise<boolean>")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("resetValidation")])]),e("td",[t._v("\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7684\u6821\u9A8C\u4FE1\u606F")]),e("td",[e("em",[t._v("-")])]),e("td",[e("strong",[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("reset")])]),e("td",[t._v("\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7ED1\u5B9A\u7684\u503C\u548C\u6821\u9A8C\u4FE1\u606F")]),e("td",[e("em",[t._v("-")])]),e("td",[e("strong",[t._v("-")])])])])]),e("h4",[t._v("FormItem Methods")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u65B9\u6CD5\u540D")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u8FD4\u56DE\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("validate")])]),e("td",[t._v("\u89E6\u53D1\u503C\u7684\u6821\u9A8C")]),e("td",[e("em",[t._v("-")])]),e("td",[e("strong",[t._v("valid: Promise<boolean>")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("resetValidation")])]),e("td",[t._v("\u6E05\u9664\u503C\u7684\u6821\u9A8C\u4FE1\u606F")]),e("td",[e("em",[t._v("-")])]),e("td",[e("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"meve-site-card"},[e("h3",[t._v("\u63D2\u69FD")]),e("h4",[t._v("Form Slots")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u63D2\u69FD\u540D")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u53C2\u6570")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("default")])]),e("td",[t._v("\u8868\u5355\u5185\u5BB9")]),e("td",[e("strong",[t._v("-")])])])])]),e("h4",[t._v("FormItem Slots")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u63D2\u69FD\u540D")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u53C2\u6570")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("default")])]),e("td",[t._v("\u8868\u5355\u9879\u5185\u5BB9")]),e("td",[e("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"meve-site-card"},[e("h3",[t._v("\u6837\u5F0F\u53D8\u91CF")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u53D8\u91CF\u540D")]),e("th",[t._v("\u9ED8\u8BA4\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("@form-item-label-text-color")])]),e("td",[e("code",{pre:!0},[t._v("#525f7f")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("@form-item-label-font-size")])]),e("td",[e("code",{pre:!0},[t._v("13px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("@form-item-label-margin")])]),e("td",[e("code",{pre:!0},[t._v("0 0 12px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("@form-details-error-color")])]),e("td",[e("code",{pre:!0},[t._v("@color-warning")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("@form-details-margin-top")])]),e("td",[e("code",{pre:!0},[t._v("6px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("@form-details-font-size")])]),e("td",[e("code",{pre:!0},[t._v("12px")])])])])])])}];const z={components:{All:T,CustomFormComponent:D}},x={};var B=v(z,L,N,!1,G,null,null,null);function G(t){for(let r in x)this[r]=x[r]}var $t=function(){return B.exports}();export{$t as default};
