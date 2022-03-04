import{B as v}from"./index.dcc64270.js";import{h as P}from"./vendor.9049838c.js";import{c as T,i as H}from"./create.af6e9796.js";import{a as l}from"./elements.aa4184a2.js";import{t as d}from"./shared.285cd5cf.js";/* empty css               */import{n}from"./main.78a4988a.js";import"./index.45eae9d1.js";import"./index.4bd8fdf2.js";const Z={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},card:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},fullscreenZIndex:{type:[Number,String],default:100},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:()=>[]}};const{createComponent:D,namespace:s}=T("skeleton");function y(e,r,t,o){const{loading:c,avatar:b,avatarSize:p,title:x,titleWidth:w,rows:C,rowsWidth:S,fullscreen:i,card:E,cardHeight:R,fullscreenZIndex:F}=r,z=()=>{var _;return e("div",{class:s("__data")},[(_=t.default)==null?void 0:_.call(t)])},M=()=>e("div",{class:s("__avatar"),style:{width:l(p),height:l(p)}},[e("div",{class:s("--animation")})]),N=()=>e("div",{class:s("__title"),style:{width:l(w)}},[e("div",{class:s("--animation")})]),B=()=>Array.from({length:d(C)}).map((_,L)=>e("div",{class:s("__row"),key:_,style:{width:l(S[L])}},[e("div",{class:s("--animation")})])),A=()=>e("div",{class:s("__card"),style:{height:l(R)}},[e("div",{class:s("--animation")})]),W=()=>e("div",{class:s("__content")},[E&&A(),e("div",{class:s("__article")},[b&&M(),e("div",{class:s("__section")},[x&&N(),B()])])]),I=()=>e("div",{class:s("__fullscreen"),style:{zIndex:d(F)}},[e("div",{class:s("--animation")})]);return e("div",P([{class:[s(),"m--box"]},H(o)]),[!c&&z(),c&&!i&&W(),c&&i&&I()])}y.props=Z;const a=D(y);var U=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"example"},[t("m-button",{attrs:{type:"primary"},on:{click:function(o){e.loading=!e.loading}}},[e._v("\u5207\u6362\u72B6\u6001")]),t("m-skeleton",{attrs:{loading:e.loading}},[t("m-button",{staticClass:"button",attrs:{type:"error"}},[e._v("Loaded")])],1)],1)},q=[];const G={components:{[a.name]:a,[v.name]:v},data:()=>({loading:!0})},u={};var J=n(G,U,q,!1,K,"6a2e15e0",null,null);function K(e){for(let r in u)this[r]=u[r]}var O=function(){return J.exports}(),Q=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("m-skeleton",{attrs:{rows:6,loading:""}})},V=[];const X={components:{[a.name]:a}},m={};var Y=n(X,Q,V,!1,tt,null,null,null);function tt(e){for(let r in m)this[r]=m[r]}var et=function(){return Y.exports}(),rt=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("m-skeleton",{attrs:{"rows-width":["260px","200px","140px"],loading:""}})},st=[];const at={components:{[a.name]:a}},h={};var nt=n(at,rt,st,!1,lt,null,null,null);function lt(e){for(let r in h)this[r]=h[r]}var _t=function(){return nt.exports}(),vt=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("m-skeleton",{attrs:{title:"",loading:""}})},ct=[];const ot={components:{[a.name]:a}},f={};var pt=n(ot,vt,ct,!1,it,null,null,null);function it(e){for(let r in f)this[r]=f[r]}var dt=function(){return pt.exports}(),ut=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("m-skeleton",{attrs:{title:"",avatar:"",loading:""}})},mt=[];const ht={components:{[a.name]:a}},g={};var ft=n(ht,ut,mt,!1,gt,null,null,null);function gt(e){for(let r in g)this[r]=g[r]}var jt=function(){return ft.exports}(),$t=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("m-skeleton",{attrs:{title:"",avatar:"",card:"",loading:""}})},kt=[];const yt={components:{[a.name]:a}},j={};var bt=n(yt,$t,kt,!1,xt,null,null,null);function xt(e){for(let r in j)this[r]=j[r]}var wt=function(){return bt.exports}(),Ct=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"example"},[t("m-button",{attrs:{type:"primary"},on:{click:e.fullscreen}},[e._v("Fullscreen")]),t("m-skeleton",{attrs:{fullscreen:"",loading:e.loading}})],1)},St=[];const Et={components:{[v.name]:v,[a.name]:a},data:()=>({loading:!1}),methods:{fullscreen(){this.loading=!0,setTimeout(()=>{this.loading=!1},3e3)}}},$={};var Rt=n(Et,Ct,St,!1,Ft,null,null,null);function Ft(e){for(let r in $)this[r]=$[r]}var zt=function(){return Rt.exports}(),Mt=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"meve-site-doc"},[t("h1",[e._v("Skeleton \u9AA8\u67B6\u5C4F")]),e._m(0),t("div",{staticClass:"meve-site-card"},[t("h3",[e._v("\u5207\u6362\u9AA8\u67B6\u5C4F\u72B6\u6001")]),e._m(1),t("div",{staticClass:"meve-component-preview"},[t("loading")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"example"')]),e._v(">")]),e._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-button")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"primary"')]),e._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("click")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"loading = !loading"')]),e._v(">")]),e._v("\u5207\u6362\u72B6\u6001"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-button")]),e._v(">")]),e._v(`

    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-skeleton")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":loading")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"loading"')]),e._v(">")]),e._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-button")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"button"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"error"')]),e._v(">")]),e._v("Loaded"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-button")]),e._v(">")]),e._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-skeleton")]),e._v(">")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v(`s
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("loading")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(`
  })
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("style")]),e._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[e._v(".button")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[e._v("margin-top")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("24px")]),e._v(`;
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("style")]),e._v(">")]),e._v(`
`)])])])],1),t("div",{staticClass:"meve-site-card"},[t("h3",[e._v("\u81EA\u5B9A\u4E49\u884C\u6570")]),e._m(2),t("div",{staticClass:"meve-component-preview"},[t("rows")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-skeleton")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":rows")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"6"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("loading")]),e._v(" />")]),e._v(`
`)])])])],1),t("div",{staticClass:"meve-site-card"},[t("h3",[e._v("\u81EA\u5B9A\u4E49\u884C\u5BBD")]),e._m(3),t("div",{staticClass:"meve-component-preview"},[t("rows-width")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-skeleton")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":rows-width")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v(`"['260px', '200px', '140px']"`)]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("loading")]),e._v(" />")]),e._v(`
`)])])])],1),t("div",{staticClass:"meve-site-card"},[t("h3",[e._v("\u663E\u793A\u6807\u9898")]),e._m(4),t("div",{staticClass:"meve-component-preview"},[t("title-component")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-skeleton")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("title")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("loading")]),e._v(" />")]),e._v(`
`)])])])],1),t("div",{staticClass:"meve-site-card"},[t("h3",[e._v("\u663E\u793A\u5934\u50CF")]),e._m(5),t("div",{staticClass:"meve-component-preview"},[t("avatar")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-skeleton")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("title")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("avatar")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("loading")]),e._v(" />")]),e._v(`
`)])])])],1),t("div",{staticClass:"meve-site-card"},[t("h3",[e._v("\u663E\u793A\u5361\u7247")]),e._m(6),t("div",{staticClass:"meve-component-preview"},[t("card")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-skeleton")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("title")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("avatar")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("card")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("loading")]),e._v(" />")]),e._v(`
`)])])])],1),t("div",{staticClass:"meve-site-card"},[t("h3",[e._v("\u5168\u5C4F\u9AA8\u67B6")]),e._m(7),t("div",{staticClass:"meve-component-preview"},[t("skeleton")],1)]),t("h2",[e._v("API")]),e._m(8),e._m(9),e._m(10)])},Nt=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"meve-site-card"},[t("h3",[e._v("\u4ECB\u7ECD")]),t("p",[e._v("\u6570\u636E\u5B8C\u6210\u52A0\u8F7D\u4E4B\u524D\uFF0C\u5360\u4E2A\u4F4D\u7F6E")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\u901A\u8FC7"),t("code",{pre:!0},[e._v("loading")]),e._v("\u63A7\u5236\u9AA8\u67B6\u5C4F\u7684\u663E\u793A\u548C\u9690\u85CF\uFF0C\u9ED8\u8BA4\u63D2\u69FD\u662F\u52A0\u8F7D\u6210\u529F\u540E\u663E\u793A\u7684\u5185\u5BB9")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\u901A\u8FC7"),t("code",{pre:!0},[e._v("rows")]),e._v("\u8BBE\u7F6E\u6E32\u67D3\u7684\u884C\u6570")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\u901A\u8FC7"),t("code",{pre:!0},[e._v("rows-width")]),e._v("\u8BBE\u7F6E\u6BCF\u4E00\u884C\u7684\u5BBD\u5EA6")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\u901A\u8FC7"),t("code",{pre:!0},[e._v("title")]),e._v("\u63A7\u5236\u6807\u9898\u7684\u663E\u793A")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\u901A\u8FC7"),t("code",{pre:!0},[e._v("avatar")]),e._v("\u63A7\u5236\u5934\u50CF\u7684\u663E\u793A")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\u901A\u8FC7"),t("code",{pre:!0},[e._v("card")]),e._v("\u63A7\u5236\u5361\u7247\u7684\u663E\u793A")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\u901A\u8FC7"),t("code",{pre:!0},[e._v("fullscreen")]),e._v("\u8BBE\u7F6E\u4E3A\u5168\u5C4F\u5E55\u7684\u9AA8\u67B6\u5C4F")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"meve-site-card"},[t("h3",[e._v("\u5C5E\u6027")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("loading")])]),t("td",[e._v("\u52A0\u8F7D\u72B6\u6001\uFF0C\u8BBE\u7F6E\u4E3A "),t("code",{pre:!0},[e._v("true")]),e._v(" \u5F00\u542F\u9AA8\u67B6\u5C4F")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("strong",[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("title")])]),t("td",[e._v("\u662F\u5426\u663E\u793A\u6807\u9898")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("strong",[e._v("false")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("card")])]),t("td",[e._v("\u662F\u5426\u663E\u793A\u5361\u7247")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("strong",[e._v("false")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("avatar")])]),t("td",[e._v("\u662F\u5426\u663E\u793A\u5934\u50CF")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("strong",[e._v("false")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("fullscreen")])]),t("td",[e._v("\u662F\u5426\u5F00\u542F\u5168\u5C4F\u6A21\u5F0F")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("strong",[e._v("false")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("fullscreen-z-index")])]),t("td",[e._v("\u5168\u5C4F\u6A21\u5F0F\u7684\u5C42\u7EA7")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("strong",[e._v("100")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("title-width")])]),t("td",[e._v("\u6807\u9898\u5BBD\u5EA6")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("strong",[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("card-height")])]),t("td",[e._v("\u5361\u7247\u9AD8\u5EA6")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("strong",[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("avatar-size")])]),t("td",[e._v("\u5934\u50CF\u5C3A\u5BF8")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("strong",[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("rows")])]),t("td",[e._v("\u6BB5\u843D\u884C\u6570")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("strong",[e._v("3")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("rows-width")])]),t("td",[e._v("\u6BB5\u843D\u6BCF\u4E00\u884C\u7684\u5BBD\u5EA6")]),t("td",[t("em",[e._v("number[] | string[]")])]),t("td",[t("strong",[e._v("[]")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"meve-site-card"},[t("h3",[e._v("\u63D2\u69FD")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u63D2\u69FD\u540D")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u53C2\u6570")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("default")])]),t("td",[e._v("\u52A0\u8F7D\u6210\u529F\u540E\u663E\u793A\u7684\u5185\u5BB9")]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"meve-site-card"},[t("h3",[e._v("\u6837\u5F0F\u53D8\u91CF")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53D8\u91CF\u540D")]),t("th",[e._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-content-padding")])]),t("td",[t("code",{pre:!0},[e._v("16px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-animation-background")])]),t("td",[t("code",{pre:!0},[e._v("linear-gradient(90deg,hsla(0, 0%, 100%, 0),hsla(0, 0%, 100%, 0.3),hsla(0, 0%, 100%, 0))")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-avatar-size")])]),t("td",[t("code",{pre:!0},[e._v("40px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-avatar-border-radius")])]),t("td",[t("code",{pre:!0},[e._v("50%")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-avatar-margin-right")])]),t("td",[t("code",{pre:!0},[e._v("16px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-avatar-background-color")])]),t("td",[t("code",{pre:!0},[e._v("rgba(0, 0, 0, 0.12)")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-title-width")])]),t("td",[t("code",{pre:!0},[e._v("50%")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-title-border-radius")])]),t("td",[t("code",{pre:!0},[e._v("0px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-title-background-color")])]),t("td",[t("code",{pre:!0},[e._v("rgba(0, 0, 0, 0.12)")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-row-height")])]),t("td",[t("code",{pre:!0},[e._v("12px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-row-border-radius")])]),t("td",[t("code",{pre:!0},[e._v("0px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-row-margin-top")])]),t("td",[t("code",{pre:!0},[e._v("12px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-card-height")])]),t("td",[t("code",{pre:!0},[e._v("160px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-card-border-radius")])]),t("td",[t("code",{pre:!0},[e._v("0px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-card-margin-bottom")])]),t("td",[t("code",{pre:!0},[e._v("16px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("@skeleton-card-background-color")])]),t("td",[t("code",{pre:!0},[e._v("rgba(0, 0, 0, 0.12)")])])])])])])}];const Bt={components:{Loading:O,Rows:et,RowsWidth:_t,TitleComponent:dt,Avatar:jt,Card:wt,Skeleton:zt}},k={};var At=n(Bt,Mt,Nt,!1,Wt,null,null,null);function Wt(e){for(let r in k)this[r]=k[r]}var Gt=function(){return At.exports}();export{Gt as default};
