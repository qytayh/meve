const u=t=>typeof t=="string",f=t=>t==null?0:u(t)?(t=parseFloat(t),t=Number.isNaN(t)?0:t,t):h(t)?Number(t):t,h=t=>typeof t=="boolean",l=t=>typeof t=="function",b=t=>typeof t=="number",d=t=>Object.prototype.toString.call(t)==="[object Object]",w=t=>typeof t=="object"&&t!==null,m=t=>Array.isArray(t),g=t=>t==null||t===""||Array.isArray(t)&&!t.length,i=(t,s)=>{if(t.length){const e=t.indexOf(s);if(e>-1)return t.splice(e,1)}},y=(t,s)=>{t.includes(s)?i(t,s):t.push(s)},A=(t,s=200)=>{let e,n=0;return function a(...r){const o=Date.now(),c=o-n;n||(n=o),e&&window.clearTimeout(e),c>=s?(t.apply(this,r),n=o):e=window.setTimeout(()=>{a.apply(this,r)},s-c)}},N=(t,s=200)=>{let e;return function(...n){e&&window.clearTimeout(e),e=window.setTimeout(()=>{t.apply(this,n)},s)}};function j(t){const s=/([^-])([A-Z])/g;return t.replace(s,"$1-$2").replace(s,"$1-$2").toLowerCase()}const p=t=>t.replace(/-(\w)/g,(s,e)=>e.toUpperCase()),O=t=>p(t).replace(t.charAt(0),t.charAt(0).toUpperCase()),C=(t,s,e)=>t<s?s:t>e?e:t,T=()=>typeof window!="undefined",$=t=>{const s=[];return{cache:s,has(e){return this.cache.includes(e)},add(e){this.has(e)||(this.cache.length===t&&s.shift(),this.cache.push(e))},remove(e){this.has(e)&&i(this.cache,e)},clear(){this.cache.length=0}}},x=t=>[...new Set(t)],P=()=>{},S=t=>t?t.startsWith("https://")||t.startsWith("http://"):!1;export{P as N,m as a,b,u as c,N as d,i as e,l as f,O as g,w as h,g as i,T as j,j as k,y as l,A as m,$ as n,d as o,S as p,C as r,f as t,x as u};
