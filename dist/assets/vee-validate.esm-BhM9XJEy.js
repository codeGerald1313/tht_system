import{s as te,r as Ie,C as T,k as M,$ as ve,z as mt,A as Ce,y as he,H as yt,ae as O,R as Tt,J as Ut,S as pt,K as Bt,Q as zt,v as Dt,af as lt,x as $t,U as Lt,a4 as Pe}from"./index-CyQKzwXM.js";/**
  * vee-validate v4.12.6
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */function ne(e){return typeof e=="function"}function Ve(e){return e==null}const ge=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function Je(e){return Number(e)>=0}function Wt(e){const t=parseFloat(e);return isNaN(t)?e:t}function qt(e){return typeof e=="object"&&e!==null}function Ht(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function at(e){if(!qt(e)||Ht(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Ee(e,t){return Object.keys(t).forEach(n=>{if(at(t[n])&&at(e[n])){e[n]||(e[n]={}),Ee(e[n],t[n]);return}e[n]=t[n]}),e}function Ae(e){const t=e.split(".");if(!t.length)return"";let n=String(t[0]);for(let i=1;i<t.length;i++){if(Je(t[i])){n+=`[${t[i]}]`;continue}n+=`.${t[i]}`}return n}const Gt={};function Kt(e){return Gt[e]}function ut(e,t,n){typeof n.value=="object"&&(n.value=C(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||t==="__proto__"?Object.defineProperty(e,t,n):e[t]=n.value}function C(e){if(typeof e!="object")return e;var t=0,n,i,a,u=Object.prototype.toString.call(e);if(u==="[object Object]"?a=Object.create(e.__proto__||null):u==="[object Array]"?a=Array(e.length):u==="[object Set]"?(a=new Set,e.forEach(function(c){a.add(C(c))})):u==="[object Map]"?(a=new Map,e.forEach(function(c,h){a.set(C(h),C(c))})):u==="[object Date]"?a=new Date(+e):u==="[object RegExp]"?a=new RegExp(e.source,e.flags):u==="[object DataView]"?a=new e.constructor(C(e.buffer)):u==="[object ArrayBuffer]"?a=e.slice(0):u.slice(-6)==="Array]"&&(a=new e.constructor(e)),a){for(i=Object.getOwnPropertySymbols(e);t<i.length;t++)ut(a,i[t],Object.getOwnPropertyDescriptor(e,i[t]));for(t=0,i=Object.getOwnPropertyNames(e);t<i.length;t++)Object.hasOwnProperty.call(a,n=i[t])&&a[n]===e[n]||ut(a,n,Object.getOwnPropertyDescriptor(e,n))}return a||e}const Re=Symbol("vee-validate-form"),xt=Symbol("vee-validate-field-instance"),ot=Symbol("Default empty value"),Yt=typeof window<"u";function Ge(e){return ne(e)&&!!e.__locatorRef}function ce(e){return!!e&&ne(e.parse)&&e.__type==="VVTypedSchema"}function Ne(e){return!!e&&ne(e.validate)}function gt(e){return e==="checkbox"||e==="radio"}function Jt(e){return ge(e)||Array.isArray(e)}function Qt(e){return Array.isArray(e)?e.length===0:ge(e)&&Object.keys(e).length===0}function ke(e){return/^\[.+\]$/i.test(e)}function Xt(e){return bt(e)&&e.multiple}function bt(e){return e.tagName==="SELECT"}function Vt(e){return Qe(e)&&e.target&&"submit"in e.target}function Qe(e){return e?!!(typeof Event<"u"&&ne(Event)&&e instanceof Event||e&&e.srcElement):!1}function W(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,i,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(!W(e[i],t[i]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;for(i of e.entries())if(!W(i[1],t.get(i[0])))return!1;return!0}if(st(e)&&st(t))return!(e.size!==t.size||e.name!==t.name||e.lastModified!==t.lastModified||e.type!==t.type);if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();for(a=Object.keys(e),n=a.length,i=n;i--!==0;){var u=a[i];if(!W(e[u],t[u]))return!1}return!0}return e!==e&&t!==t}function st(e){return Yt?e instanceof File:!1}function Xe(e){return ke(e)?e.replace(/\[|\]/gi,""):e}function z(e,t,n){return e?ke(t)?e[Xe(t)]:(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((a,u)=>Jt(a)&&u in a?a[u]:n,e):n}function K(e,t,n){if(ke(t)){e[Xe(t)]=n;return}const i=t.split(/\.|\[(\d+)\]/).filter(Boolean);let a=e;for(let u=0;u<i.length;u++){if(u===i.length-1){a[i[u]]=n;return}(!(i[u]in a)||Ve(a[i[u]]))&&(a[i[u]]=Je(i[u+1])?[]:{}),a=a[i[u]]}}function qe(e,t){if(Array.isArray(e)&&Je(t)){e.splice(Number(t),1);return}ge(e)&&delete e[t]}function ct(e,t){if(ke(t)){delete e[Xe(t)];return}const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let i=e;for(let u=0;u<n.length;u++){if(u===n.length-1){qe(i,n[u]);break}if(!(n[u]in i)||Ve(i[n[u]]))break;i=i[n[u]]}const a=n.map((u,c)=>z(e,n.slice(0,c).join(".")));for(let u=a.length-1;u>=0;u--)if(Qt(a[u])){if(u===0){qe(e,n[0]);continue}qe(a[u-1],n[u-1])}}function ee(e){return Object.keys(e)}function Ze(e,t=void 0){const n=Pe();return(n==null?void 0:n.provides[e])||Bt(e,t)}function dt(e,t,n){if(Array.isArray(e)){const i=[...e],a=i.findIndex(u=>W(u,t));return a>=0?i.splice(a,1):i.push(t),i}return W(e,t)?n:t}function ft(e,t=0){let n=null,i=[];return function(...a){return n&&clearTimeout(n),n=setTimeout(()=>{const u=e(...a);i.forEach(c=>c(u)),i=[]},t),new Promise(u=>i.push(u))}}function Zt(e,t){return ge(t)&&t.number?Wt(e):e}function Ke(e,t){let n;return async function(...a){const u=e(...a);n=u;const c=await u;return u!==n?c:(n=void 0,t(c,a))}}function en({get:e,set:t}){const n=te(C(e()));return he(e,i=>{W(i,n.value)||(n.value=C(i))},{deep:!0}),he(n,i=>{W(i,e())||t(C(i))},{deep:!0}),n}function xe(e){return Array.isArray(e)?e:e?[e]:[]}function Fe(e,t){const n={};for(const i in e)t.includes(i)||(n[i]=e[i]);return n}function tn(e){let t=null,n=[];return function(...i){const a=ve(()=>{if(t!==a)return;const u=e(...i);n.forEach(c=>c(u)),n=[],t=null});return t=a,new Promise(u=>n.push(u))}}function nn(e,t,n){return t.slots.default?typeof e=="string"||!e?t.slots.default(n()):{default:()=>{var i,a;return(a=(i=t.slots).default)===null||a===void 0?void 0:a.call(i,n())}}:t.slots.default}function He(e){if(Ot(e))return e._value}function Ot(e){return"_value"in e}function rn(e){return e.type==="number"||e.type==="range"?Number.isNaN(e.valueAsNumber)?e.value:e.valueAsNumber:e.value}function Me(e){if(!Qe(e))return e;const t=e.target;if(gt(t.type)&&Ot(t))return He(t);if(t.type==="file"&&t.files){const n=Array.from(t.files);return t.multiple?n:n[0]}if(Xt(t))return Array.from(t.options).filter(n=>n.selected&&!n.disabled).map(He);if(bt(t)){const n=Array.from(t.options).find(i=>i.selected);return n?He(n):t.value}return rn(t)}function St(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?ge(e)&&e._$$isNormalized?e:ge(e)?Object.keys(e).reduce((n,i)=>{const a=ln(e[i]);return e[i]!==!1&&(n[i]=vt(a)),n},t):typeof e!="string"?t:e.split("|").reduce((n,i)=>{const a=an(i);return a.name&&(n[a.name]=vt(a.params)),n},t):t}function ln(e){return e===!0?[]:Array.isArray(e)||ge(e)?e:[e]}function vt(e){const t=n=>typeof n=="string"&&n[0]==="@"?un(n.slice(1)):n;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce((n,i)=>(n[i]=t(e[i]),n),{})}const an=e=>{let t=[];const n=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:n,params:t}};function un(e){const t=n=>z(n,e)||n[e];return t.__locatorRef=e,t}function on(e){return Array.isArray(e)?e.filter(Ge):ee(e).filter(t=>Ge(e[t])).map(t=>e[t])}const sn={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let cn=Object.assign({},sn);const _e=()=>cn;async function At(e,t,n={}){const i=n==null?void 0:n.bails,a={name:(n==null?void 0:n.name)||"{field}",rules:t,label:n==null?void 0:n.label,bails:i??!0,formData:(n==null?void 0:n.values)||{}},c=(await dn(a,e)).errors;return{errors:c,valid:!c.length}}async function dn(e,t){if(ce(e.rules)||Ne(e.rules))return vn(t,e.rules);if(ne(e.rules)||Array.isArray(e.rules)){const c={field:e.label||e.name,name:e.name,label:e.label,form:e.formData,value:t},h=Array.isArray(e.rules)?e.rules:[e.rules],d=h.length,s=[];for(let j=0;j<d;j++){const b=h[j],w=await b(t,c);if(!(typeof w!="string"&&!Array.isArray(w)&&w)){if(Array.isArray(w))s.push(...w);else{const B=typeof w=="string"?w:Et(c);s.push(B)}if(e.bails)return{errors:s}}}return{errors:s}}const n=Object.assign(Object.assign({},e),{rules:St(e.rules)}),i=[],a=Object.keys(n.rules),u=a.length;for(let c=0;c<u;c++){const h=a[c],d=await hn(n,t,{name:h,params:n.rules[h]});if(d.error&&(i.push(d.error),e.bails))return{errors:i}}return{errors:i}}function fn(e){return!!e&&e.name==="ValidationError"}function _t(e){return{__type:"VVTypedSchema",async parse(n){var i;try{return{output:await e.validate(n,{abortEarly:!1}),errors:[]}}catch(a){if(!fn(a))throw a;if(!(!((i=a.inner)===null||i===void 0)&&i.length)&&a.errors.length)return{errors:[{path:a.path,errors:a.errors}]};const u=a.inner.reduce((c,h)=>{const d=h.path||"";return c[d]||(c[d]={errors:[],path:d}),c[d].errors.push(...h.errors),c},{});return{errors:Object.values(u)}}}}}async function vn(e,t){const i=await(ce(t)?t:_t(t)).parse(e),a=[];for(const u of i.errors)u.errors.length&&a.push(...u.errors);return{errors:a}}async function hn(e,t,n){const i=Kt(n.name);if(!i)throw new Error(`No such validator '${n.name}' exists.`);const a=mn(n.params,e.formData),u={field:e.label||e.name,name:e.name,label:e.label,value:t,form:e.formData,rule:Object.assign(Object.assign({},n),{params:a})},c=await i(t,a,u);return typeof c=="string"?{error:c}:{error:c?void 0:Et(u)}}function Et(e){const t=_e().generateMessage;return t?t(e):"Field is invalid"}function mn(e,t){const n=i=>Ge(i)?i(t):i;return Array.isArray(e)?e.map(n):Object.keys(e).reduce((i,a)=>(i[a]=n(e[a]),i),{})}async function yn(e,t){const i=await(ce(e)?e:_t(e)).parse(C(t)),a={},u={};for(const c of i.errors){const h=c.errors,d=(c.path||"").replace(/\["(\d+)"\]/g,(s,j)=>`[${j}]`);a[d]={valid:!h.length,errors:h},h.length&&(u[d]=h[0])}return{valid:!i.errors.length,results:a,errors:u,values:i.value}}async function pn(e,t,n){const a=ee(e).map(async s=>{var j,b,w;const S=(j=n==null?void 0:n.names)===null||j===void 0?void 0:j[s],B=await At(z(t,s),e[s],{name:(S==null?void 0:S.name)||s,label:S==null?void 0:S.label,values:t,bails:(w=(b=n==null?void 0:n.bailsMap)===null||b===void 0?void 0:b[s])!==null&&w!==void 0?w:!0});return Object.assign(Object.assign({},B),{path:s})});let u=!0;const c=await Promise.all(a),h={},d={};for(const s of c)h[s.path]={valid:s.valid,errors:s.errors},s.valid||(u=!1,d[s.path]=s.errors[0]);return{valid:u,results:h,errors:d}}let ht=0;function gn(e,t){const{value:n,initialValue:i,setInitialValue:a}=bn(e,t.modelValue,t.form);if(!t.form){let d=function(S){var B;"value"in S&&(n.value=S.value),"errors"in S&&j(S.errors),"touched"in S&&(w.touched=(B=S.touched)!==null&&B!==void 0?B:w.touched),"initialValue"in S&&a(S.initialValue)};const{errors:s,setErrors:j}=Sn(),b=ht>=Number.MAX_SAFE_INTEGER?0:++ht,w=On(n,i,s,t.schema);return{id:b,path:e,value:n,initialValue:i,meta:w,flags:{pendingUnmount:{[b]:!1},pendingReset:!1},errors:s,setState:d}}const u=t.form.createPathState(e,{bails:t.bails,label:t.label,type:t.type,validate:t.validate,schema:t.schema}),c=T(()=>u.errors);function h(d){var s,j,b;"value"in d&&(n.value=d.value),"errors"in d&&((s=t.form)===null||s===void 0||s.setFieldError(M(e),d.errors)),"touched"in d&&((j=t.form)===null||j===void 0||j.setFieldTouched(M(e),(b=d.touched)!==null&&b!==void 0?b:!1)),"initialValue"in d&&a(d.initialValue)}return{id:Array.isArray(u.id)?u.id[u.id.length-1]:u.id,path:e,value:n,errors:c,meta:u,initialValue:i,flags:u.__flags,setState:h}}function bn(e,t,n){const i=te(M(t));function a(){return n?z(n.initialValues.value,M(e),M(i)):M(i)}function u(s){if(!n){i.value=s;return}n.setFieldInitialValue(M(e),s,!0)}const c=T(a);if(!n)return{value:te(a()),initialValue:c,setInitialValue:u};const h=Vn(t,n,c,e);return n.stageInitialValue(M(e),h,!0),{value:T({get(){return z(n.values,M(e))},set(s){n.setFieldValue(M(e),s,!1)}}),initialValue:c,setInitialValue:u}}function Vn(e,t,n,i){return Ce(e)?M(e):e!==void 0?e:z(t.values,M(i),M(n))}function On(e,t,n,i){var a,u;const c=(u=(a=i==null?void 0:i.describe)===null||a===void 0?void 0:a.call(i).required)!==null&&u!==void 0?u:!1,h=Ie({touched:!1,pending:!1,valid:!0,required:c,validated:!!M(n).length,initialValue:T(()=>M(t)),dirty:T(()=>!W(M(e),M(t)))});return he(n,d=>{h.valid=!d.length},{immediate:!0,flush:"sync"}),h}function Sn(){const e=te([]);return{errors:e,setErrors:t=>{e.value=xe(t)}}}function Pn(e,t,n){return gt(n==null?void 0:n.type)?_n(e,t,n):jt(e,t,n)}function jt(e,t,n){const{initialValue:i,validateOnMount:a,bails:u,type:c,checkedValue:h,label:d,validateOnValueUpdate:s,uncheckedValue:j,controlled:b,keepValueOnUnmount:w,syncVModel:S,form:B}=An(n),Z=b?Ze(Re):void 0,A=B||Z,H=T(()=>Ae(O(e))),q=T(()=>{if(O(A==null?void 0:A.schema))return;const E=M(t);return Ne(E)||ce(E)||ne(E)||Array.isArray(E)?E:St(E)}),{id:ue,value:re,initialValue:y,meta:v,setState:V,errors:F,flags:I}=gn(H,{modelValue:i,form:A,bails:u,label:d,type:c,validate:q.value?de:void 0,schema:ce(t)?t:void 0}),_=T(()=>F.value[0]);S&&En({value:re,prop:S,handleChange:R,shouldValidate:()=>s&&!I.pendingReset});const D=(m,E=!1)=>{v.touched=!0,E&&oe()};async function x(m){var E,k;if(A!=null&&A.validateSchema){const{results:P}=await A.validateSchema(m);return(E=P[O(H)])!==null&&E!==void 0?E:{valid:!0,errors:[]}}return q.value?At(re.value,q.value,{name:O(H),label:O(d),values:(k=A==null?void 0:A.values)!==null&&k!==void 0?k:{},bails:u}):{valid:!0,errors:[]}}const oe=Ke(async()=>(v.pending=!0,v.validated=!0,x("validated-only")),m=>(I.pendingUnmount[Y.id]||(V({errors:m.errors}),v.pending=!1,v.valid=m.valid),m)),ie=Ke(async()=>x("silent"),m=>(v.valid=m.valid,m));function de(m){return(m==null?void 0:m.mode)==="silent"?ie():oe()}function R(m,E=!0){const k=Me(m);Oe(k,E)}mt(()=>{if(a)return oe();(!A||!A.validateSchema)&&ie()});function Q(m){v.touched=m}function le(m){var E;const k=m&&"value"in m?m.value:y.value;V({value:C(k),initialValue:C(k),touched:(E=m==null?void 0:m.touched)!==null&&E!==void 0?E:!1,errors:(m==null?void 0:m.errors)||[]}),v.pending=!1,v.validated=!1,ie()}const ye=Pe();function Oe(m,E=!0){re.value=ye&&S?Zt(m,ye.props.modelModifiers):m,(E?oe:ie)()}function je(m){V({errors:Array.isArray(m)?m:[m]})}const et=T({get(){return re.value},set(m){Oe(m,s)}}),Y={id:ue,name:H,label:d,value:et,meta:v,errors:F,errorMessage:_,type:c,checkedValue:h,uncheckedValue:j,bails:u,keepValueOnUnmount:w,resetField:le,handleReset:()=>le(),validate:de,handleChange:R,handleBlur:D,setState:V,setTouched:Q,setErrors:je,setValue:Oe};if(yt(xt,Y),Ce(t)&&typeof M(t)!="function"&&he(t,(m,E)=>{W(m,E)||(v.validated?oe():ie())},{deep:!0}),!A)return Y;const Te=T(()=>{const m=q.value;return!m||ne(m)||Ne(m)||ce(m)||Array.isArray(m)?{}:Object.keys(m).reduce((E,k)=>{const P=on(m[k]).map(me=>me.__locatorRef).reduce((me,fe)=>{const ae=z(A.values,fe)||A.values[fe];return ae!==void 0&&(me[fe]=ae),me},{});return Object.assign(E,P),E},{})});return he(Te,(m,E)=>{if(!Object.keys(m).length)return;!W(m,E)&&(v.validated?oe():ie())}),pt(()=>{var m;const E=(m=O(Y.keepValueOnUnmount))!==null&&m!==void 0?m:O(A.keepValuesOnUnmount),k=O(H);if(E||!A||I.pendingUnmount[Y.id]){A==null||A.removePathState(k,ue);return}I.pendingUnmount[Y.id]=!0;const P=A.getPathState(k);if(Array.isArray(P==null?void 0:P.id)&&(P!=null&&P.multiple)?P!=null&&P.id.includes(Y.id):(P==null?void 0:P.id)===Y.id){if(P!=null&&P.multiple&&Array.isArray(P.value)){const fe=P.value.findIndex(ae=>W(ae,O(Y.checkedValue)));if(fe>-1){const ae=[...P.value];ae.splice(fe,1),A.setFieldValue(k,ae)}Array.isArray(P.id)&&P.id.splice(P.id.indexOf(Y.id),1)}else A.unsetPathValue(O(H));A.removePathState(k,ue)}}),Y}function An(e){const t=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),n=!!(e!=null&&e.syncVModel),i=typeof(e==null?void 0:e.syncVModel)=="string"?e.syncVModel:(e==null?void 0:e.modelPropName)||"modelValue",a=n&&!("initialValue"in(e||{}))?Ye(Pe(),i):e==null?void 0:e.initialValue;if(!e)return Object.assign(Object.assign({},t()),{initialValue:a});const u="valueProp"in e?e.valueProp:e.checkedValue,c="standalone"in e?!e.standalone:e.controlled,h=(e==null?void 0:e.modelPropName)||(e==null?void 0:e.syncVModel)||!1;return Object.assign(Object.assign(Object.assign({},t()),e||{}),{initialValue:a,controlled:c??!0,checkedValue:u,syncVModel:h})}function _n(e,t,n){const i=n!=null&&n.standalone?void 0:Ze(Re),a=n==null?void 0:n.checkedValue,u=n==null?void 0:n.uncheckedValue;function c(h){const d=h.handleChange,s=T(()=>{const b=O(h.value),w=O(a);return Array.isArray(b)?b.findIndex(S=>W(S,w))>=0:W(w,b)});function j(b,w=!0){var S,B;if(s.value===((S=b==null?void 0:b.target)===null||S===void 0?void 0:S.checked)){w&&h.validate();return}const Z=O(e),A=i==null?void 0:i.getPathState(Z),H=Me(b);let q=(B=O(a))!==null&&B!==void 0?B:H;i&&(A!=null&&A.multiple)&&A.type==="checkbox"?q=dt(z(i.values,Z)||[],q,void 0):(n==null?void 0:n.type)==="checkbox"&&(q=dt(O(h.value),q,O(u))),d(q,w)}return Object.assign(Object.assign({},h),{checked:s,checkedValue:a,uncheckedValue:u,handleChange:j})}return c(jt(e,t,n))}function En({prop:e,value:t,handleChange:n,shouldValidate:i}){const a=Pe();if(!a||!e)return;const u=typeof e=="string"?e:"modelValue",c=`update:${u}`;u in a.props&&(he(t,h=>{W(h,Ye(a,u))||a.emit(c,h)}),he(()=>Ye(a,u),h=>{if(h===ot&&t.value===void 0)return;const d=h===ot?void 0:h;W(d,t.value)||n(d,i())}))}function Ye(e,t){if(e)return e.props[t]}let jn=0;const we=["bails","fieldsCount","id","multiple","type","validate"];function Ft(e){const t=Object.assign({},O((e==null?void 0:e.initialValues)||{})),n=M(e==null?void 0:e.validationSchema);return n&&ce(n)&&ne(n.cast)?C(n.cast(t)||{}):C(t)}function Fn(e){var t;const n=jn++;let i=0;const a=te(!1),u=te(!1),c=te(0),h=[],d=Ie(Ft(e)),s=te([]),j=te({}),b=te({}),w=tn(()=>{b.value=s.value.reduce((l,r)=>(l[Ae(O(r.path))]=r,l),{})});function S(l,r){const o=R(l);if(!o){typeof l=="string"&&(j.value[Ae(l)]=xe(r));return}if(typeof l=="string"){const f=Ae(l);j.value[f]&&delete j.value[f]}o.errors=xe(r),o.valid=!o.errors.length}function B(l){ee(l).forEach(r=>{S(r,l[r])})}e!=null&&e.initialErrors&&B(e.initialErrors);const Z=T(()=>{const l=s.value.reduce((r,o)=>(o.errors.length&&(r[o.path]=o.errors),r),{});return Object.assign(Object.assign({},j.value),l)}),A=T(()=>ee(Z.value).reduce((l,r)=>{const o=Z.value[r];return o!=null&&o.length&&(l[r]=o[0]),l},{})),H=T(()=>s.value.reduce((l,r)=>(l[r.path]={name:r.path||"",label:r.label||""},l),{})),q=T(()=>s.value.reduce((l,r)=>{var o;return l[r.path]=(o=r.bails)!==null&&o!==void 0?o:!0,l},{})),ue=Object.assign({},(e==null?void 0:e.initialErrors)||{}),re=(t=e==null?void 0:e.keepValuesOnUnmount)!==null&&t!==void 0?t:!1,{initialValues:y,originalInitialValues:v,setInitialValues:V}=In(s,d,e),F=wn(s,d,v,A),I=T(()=>s.value.reduce((l,r)=>{const o=z(d,r.path);return K(l,r.path,o),l},{})),_=e==null?void 0:e.validationSchema;function D(l,r){var o,f;const g=T(()=>z(y.value,O(l))),p=b.value[O(l)],N=(r==null?void 0:r.type)==="checkbox"||(r==null?void 0:r.type)==="radio";if(p&&N){p.multiple=!0;const se=i++;return Array.isArray(p.id)?p.id.push(se):p.id=[p.id,se],p.fieldsCount++,p.__flags.pendingUnmount[se]=!1,p}const $=T(()=>z(d,O(l))),L=O(l),J=le.findIndex(se=>se===L);J!==-1&&le.splice(J,1);const U=T(()=>{var se,Se,$e,it,Le,We;return ce(_)?($e=(Se=(se=_).describe)===null||Se===void 0?void 0:Se.call(se,O(l)).required)!==null&&$e!==void 0?$e:!1:ce(r==null?void 0:r.schema)&&(We=(Le=(it=r==null?void 0:r.schema).describe)===null||Le===void 0?void 0:Le.call(it).required)!==null&&We!==void 0?We:!1}),G=i++,X=Ie({id:G,path:l,touched:!1,pending:!1,valid:!0,validated:!!(!((o=ue[L])===null||o===void 0)&&o.length),required:U,initialValue:g,errors:zt([]),bails:(f=r==null?void 0:r.bails)!==null&&f!==void 0?f:!1,label:r==null?void 0:r.label,type:(r==null?void 0:r.type)||"default",value:$,multiple:!1,__flags:{pendingUnmount:{[G]:!1},pendingReset:!1},fieldsCount:1,validate:r==null?void 0:r.validate,dirty:T(()=>!W(M($),M(g)))});return s.value.push(X),b.value[L]=X,w(),A.value[L]&&!ue[L]&&ve(()=>{pe(L,{mode:"silent"})}),Ce(l)&&he(l,se=>{w();const Se=C($.value);b.value[se]=X,ve(()=>{K(d,se,Se)})}),X}const x=ft(rt,5),oe=ft(rt,5),ie=Ke(async l=>await(l==="silent"?x():oe()),(l,[r])=>{const o=ee(E.errorBag.value),g=[...new Set([...ee(l.results),...s.value.map(p=>p.path),...o])].sort().reduce((p,N)=>{var $;const L=N,J=R(L)||Q(L),U=(($=l.results[L])===null||$===void 0?void 0:$.errors)||[],G=O(J==null?void 0:J.path)||L,X=Cn({errors:U,valid:!U.length},p.results[G]);return p.results[G]=X,X.valid||(p.errors[G]=X.errors[0]),J&&j.value[G]&&delete j.value[G],J?(J.valid=X.valid,r==="silent"||r==="validated-only"&&!J.validated||S(J,X.errors),p):(S(G,U),p)},{valid:l.valid,results:{},errors:{}});return l.values&&(g.values=l.values),ee(g.results).forEach(p=>{var N;const $=R(p);$&&r!=="silent"&&(r==="validated-only"&&!$.validated||S($,(N=g.results[p])===null||N===void 0?void 0:N.errors))}),g});function de(l){s.value.forEach(l)}function R(l){const r=typeof l=="string"?Ae(l):l;return typeof r=="string"?b.value[r]:r}function Q(l){return s.value.filter(o=>l.startsWith(o.path)).reduce((o,f)=>o?f.path.length>o.path.length?f:o:f,void 0)}let le=[],ye;function Oe(l){return le.push(l),ye||(ye=ve(()=>{[...le].sort().reverse().forEach(o=>{ct(d,o)}),le=[],ye=null})),ye}function je(l){return function(o,f){return function(p){return p instanceof Event&&(p.preventDefault(),p.stopPropagation()),de(N=>N.touched=!0),a.value=!0,c.value++,be().then(N=>{const $=C(d);if(N.valid&&typeof o=="function"){const L=C(I.value);let J=l?L:$;return N.values&&(J=N.values),o(J,{evt:p,controlledValues:L,setErrors:B,setFieldError:S,setTouched:Ue,setFieldTouched:ae,setValues:me,setFieldValue:k,resetForm:Be,resetField:tt})}!N.valid&&typeof f=="function"&&f({values:$,evt:p,errors:N.errors,results:N.results})}).then(N=>(a.value=!1,N),N=>{throw a.value=!1,N})}}}const Y=je(!1);Y.withControlled=je(!0);function Te(l,r){const o=s.value.findIndex(g=>g.path===l&&(Array.isArray(g.id)?g.id.includes(r):g.id===r)),f=s.value[o];if(!(o===-1||!f)){if(ve(()=>{pe(l,{mode:"silent",warn:!1})}),f.multiple&&f.fieldsCount&&f.fieldsCount--,Array.isArray(f.id)){const g=f.id.indexOf(r);g>=0&&f.id.splice(g,1),delete f.__flags.pendingUnmount[r]}(!f.multiple||f.fieldsCount<=0)&&(s.value.splice(o,1),nt(l),w(),delete b.value[l])}}function m(l){ee(b.value).forEach(r=>{r.startsWith(l)&&delete b.value[r]}),s.value=s.value.filter(r=>!r.path.startsWith(l)),ve(()=>{w()})}const E={formId:n,values:d,controlledValues:I,errorBag:Z,errors:A,schema:_,submitCount:c,meta:F,isSubmitting:a,isValidating:u,fieldArrays:h,keepValuesOnUnmount:re,validateSchema:M(_)?ie:void 0,validate:be,setFieldError:S,validateField:pe,setFieldValue:k,setValues:me,setErrors:B,setFieldTouched:ae,setTouched:Ue,resetForm:Be,resetField:tt,handleSubmit:Y,useFieldModel:Pt,defineInputBinds:Rt,defineComponentBinds:kt,defineField:De,stageInitialValue:Nt,unsetInitialValue:nt,setFieldInitialValue:ze,createPathState:D,getPathState:R,unsetPathValue:Oe,removePathState:Te,initialValues:y,getAllPathStates:()=>s.value,destroyPath:m,isFieldTouched:wt,isFieldDirty:It,isFieldValid:Ct};function k(l,r,o=!0){const f=C(r),g=typeof l=="string"?l:l.path;R(g)||D(g),K(d,g,f),o&&pe(g)}function P(l,r=!0){ee(d).forEach(o=>{delete d[o]}),ee(l).forEach(o=>{k(o,l[o],!1)}),r&&be()}function me(l,r=!0){Ee(d,l),h.forEach(o=>o&&o.reset()),r&&be()}function fe(l,r){const o=R(O(l))||D(l);return T({get(){return o.value},set(f){var g;const p=O(l);k(p,f,(g=O(r))!==null&&g!==void 0?g:!1)}})}function ae(l,r){const o=R(l);o&&(o.touched=r)}function wt(l){const r=R(l);return r?r.touched:s.value.filter(o=>o.path.startsWith(l)).some(o=>o.touched)}function It(l){const r=R(l);return r?r.dirty:s.value.filter(o=>o.path.startsWith(l)).some(o=>o.dirty)}function Ct(l){const r=R(l);return r?r.valid:s.value.filter(o=>o.path.startsWith(l)).every(o=>o.valid)}function Ue(l){if(typeof l=="boolean"){de(r=>{r.touched=l});return}ee(l).forEach(r=>{ae(r,!!l[r])})}function tt(l,r){var o;const f=r&&"value"in r?r.value:z(y.value,l),g=R(l);g&&(g.__flags.pendingReset=!0),ze(l,C(f),!0),k(l,f,!1),ae(l,(o=r==null?void 0:r.touched)!==null&&o!==void 0?o:!1),S(l,(r==null?void 0:r.errors)||[]),ve(()=>{g&&(g.__flags.pendingReset=!1)})}function Be(l,r){let o=C(l!=null&&l.values?l.values:v.value);o=r!=null&&r.force?o:Ee(v.value,o),o=ce(_)&&ne(_.cast)?_.cast(o):o,V(o),de(f=>{var g;f.__flags.pendingReset=!0,f.validated=!1,f.touched=((g=l==null?void 0:l.touched)===null||g===void 0?void 0:g[f.path])||!1,k(f.path,z(o,f.path),!1),S(f.path,void 0)}),r!=null&&r.force?P(o,!1):me(o,!1),B((l==null?void 0:l.errors)||{}),c.value=(l==null?void 0:l.submitCount)||0,ve(()=>{be({mode:"silent"}),de(f=>{f.__flags.pendingReset=!1})})}async function be(l){const r=(l==null?void 0:l.mode)||"force";if(r==="force"&&de(p=>p.validated=!0),E.validateSchema)return E.validateSchema(r);u.value=!0;const o=await Promise.all(s.value.map(p=>p.validate?p.validate(l).then(N=>({key:p.path,valid:N.valid,errors:N.errors})):Promise.resolve({key:p.path,valid:!0,errors:[]})));u.value=!1;const f={},g={};for(const p of o)f[p.key]={valid:p.valid,errors:p.errors},p.errors.length&&(g[p.key]=p.errors[0]);return{valid:o.every(p=>p.valid),results:f,errors:g}}async function pe(l,r){var o;const f=R(l);if(f&&(r==null?void 0:r.mode)!=="silent"&&(f.validated=!0),_){const{results:g}=await ie((r==null?void 0:r.mode)||"validated-only");return g[l]||{errors:[],valid:!0}}return f!=null&&f.validate?f.validate(r):(!f&&(o=r==null?void 0:r.warn),Promise.resolve({errors:[],valid:!0}))}function nt(l){ct(y.value,l)}function Nt(l,r,o=!1){ze(l,r),K(d,l,r),o&&!(e!=null&&e.initialValues)&&K(v.value,l,C(r))}function ze(l,r,o=!1){K(y.value,l,C(r)),o&&K(v.value,l,C(r))}async function rt(){const l=M(_);if(!l)return{valid:!0,results:{},errors:{}};u.value=!0;const r=Ne(l)||ce(l)?await yn(l,d):await pn(l,d,{names:H.value,bailsMap:q.value});return u.value=!1,r}const Mt=Y((l,{evt:r})=>{Vt(r)&&r.target.submit()});mt(()=>{if(e!=null&&e.initialErrors&&B(e.initialErrors),e!=null&&e.initialTouched&&Ue(e.initialTouched),e!=null&&e.validateOnMount){be();return}E.validateSchema&&E.validateSchema("silent")}),Ce(_)&&he(_,()=>{var l;(l=E.validateSchema)===null||l===void 0||l.call(E,"validated-only")}),yt(Re,E);function De(l,r){const o=ne(r)||r==null?void 0:r.label,f=R(O(l))||D(l,{label:o}),g=()=>ne(r)?r(Fe(f,we)):r||{};function p(){var U;f.touched=!0,((U=g().validateOnBlur)!==null&&U!==void 0?U:_e().validateOnBlur)&&pe(f.path)}function N(){var U;((U=g().validateOnInput)!==null&&U!==void 0?U:_e().validateOnInput)&&ve(()=>{pe(f.path)})}function $(){var U;((U=g().validateOnChange)!==null&&U!==void 0?U:_e().validateOnChange)&&ve(()=>{pe(f.path)})}const L=T(()=>{const U={onChange:$,onInput:N,onBlur:p};return ne(r)?Object.assign(Object.assign({},U),r(Fe(f,we)).props||{}):r!=null&&r.props?Object.assign(Object.assign({},U),r.props(Fe(f,we))):U});return[fe(l,()=>{var U,G,X;return(X=(U=g().validateOnModelUpdate)!==null&&U!==void 0?U:(G=_e())===null||G===void 0?void 0:G.validateOnModelUpdate)!==null&&X!==void 0?X:!0}),L]}function Pt(l){return Array.isArray(l)?l.map(r=>fe(r,!0)):fe(l)}function Rt(l,r){const[o,f]=De(l,r);function g(){f.value.onBlur()}function p($){const L=Me($);k(O(l),L,!1),f.value.onInput()}function N($){const L=Me($);k(O(l),L,!1),f.value.onChange()}return T(()=>Object.assign(Object.assign({},f.value),{onBlur:g,onInput:p,onChange:N,value:o.value}))}function kt(l,r){const[o,f]=De(l,r),g=R(O(l));function p(N){o.value=N}return T(()=>{const N=ne(r)?r(Fe(g,we)):r||{};return Object.assign({[N.model||"modelValue"]:o.value,[`onUpdate:${N.model||"modelValue"}`]:p},f.value)})}return Object.assign(Object.assign({},E),{values:Tt(d),handleReset:()=>Be(),submitForm:Mt})}function wn(e,t,n,i){const a={touched:"some",pending:"some",valid:"every"},u=T(()=>!W(t,M(n)));function c(){const d=e.value;return ee(a).reduce((s,j)=>{const b=a[j];return s[j]=d[b](w=>w[j]),s},{})}const h=Ie(c());return Ut(()=>{const d=c();h.touched=d.touched,h.valid=d.valid,h.pending=d.pending}),T(()=>Object.assign(Object.assign({initialValues:M(n)},h),{valid:h.valid&&!ee(i.value).length,dirty:u.value}))}function In(e,t,n){const i=Ft(n),a=te(i),u=te(C(i));function c(h,d=!1){a.value=Ee(C(a.value)||{},C(h)),u.value=Ee(C(u.value)||{},C(h)),d&&e.value.forEach(s=>{if(s.touched)return;const b=z(a.value,s.path);K(t,s.path,C(b))})}return{initialValues:a,originalInitialValues:u,setInitialValues:c}}function Cn(e,t){return t?{valid:e.valid&&t.valid,errors:[...e.errors,...t.errors]}:e}const Nn=Dt({name:"Form",inheritAttrs:!1,props:{as:{type:null,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(e,t){const n=lt(e,"validationSchema"),i=lt(e,"keepValues"),{errors:a,errorBag:u,values:c,meta:h,isSubmitting:d,isValidating:s,submitCount:j,controlledValues:b,validate:w,validateField:S,handleReset:B,resetForm:Z,handleSubmit:A,setErrors:H,setFieldError:q,setFieldValue:ue,setValues:re,setFieldTouched:y,setTouched:v,resetField:V}=Fn({validationSchema:n.value?n:void 0,initialValues:e.initialValues,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount,keepValuesOnUnmount:i}),F=A((R,{evt:Q})=>{Vt(Q)&&Q.target.submit()},e.onInvalidSubmit),I=e.onSubmit?A(e.onSubmit,e.onInvalidSubmit):F;function _(R){Qe(R)&&R.preventDefault(),B(),typeof t.attrs.onReset=="function"&&t.attrs.onReset()}function D(R,Q){return A(typeof R=="function"&&!Q?R:Q,e.onInvalidSubmit)(R)}function x(){return C(c)}function oe(){return C(h.value)}function ie(){return C(a.value)}function de(){return{meta:h.value,errors:a.value,errorBag:u.value,values:c,isSubmitting:d.value,isValidating:s.value,submitCount:j.value,controlledValues:b.value,validate:w,validateField:S,handleSubmit:D,handleReset:B,submitForm:F,setErrors:H,setFieldError:q,setFieldValue:ue,setValues:re,setFieldTouched:y,setTouched:v,resetForm:Z,resetField:V,getValues:x,getMeta:oe,getErrors:ie}}return t.expose({setFieldError:q,setErrors:H,setFieldValue:ue,setValues:re,setFieldTouched:y,setTouched:v,resetForm:Z,validate:w,validateField:S,resetField:V,getValues:x,getMeta:oe,getErrors:ie,values:c,meta:h,errors:a}),function(){const Q=e.as==="form"?e.as:e.as?$t(e.as):null,le=nn(Q,t,de);return Q?Lt(Q,Object.assign(Object.assign(Object.assign({},Q==="form"?{novalidate:!0}:{}),t.attrs),{onSubmit:I,onReset:_}),le):le}}}),Rn=Nn;function kn(e){const t=Ze(Re,void 0),n=te([]),i=()=>{},a={fields:n,remove:i,push:i,swap:i,insert:i,update:i,replace:i,prepend:i,move:i};if(!t||!M(e))return a;const u=t.fieldArrays.find(y=>M(y.path)===M(e));if(u)return u;let c=0;function h(){return z(t==null?void 0:t.values,O(e),[])||[]}function d(){const y=h();Array.isArray(y)&&(n.value=y.map((v,V)=>j(v,V,n.value)),s())}d();function s(){const y=n.value.length;for(let v=0;v<y;v++){const V=n.value[v];V.isFirst=v===0,V.isLast=v===y-1}}function j(y,v,V){if(V&&!Ve(v)&&V[v])return V[v];const F=c++;return{key:F,value:en({get(){const _=z(t==null?void 0:t.values,O(e),[])||[],D=n.value.findIndex(x=>x.key===F);return D===-1?y:_[D]},set(_){const D=n.value.findIndex(x=>x.key===F);D!==-1&&H(D,_)}}),isFirst:!1,isLast:!1}}function b(){s(),t==null||t.validate({mode:"silent"})}function w(y){const v=O(e),V=z(t==null?void 0:t.values,v);if(!V||!Array.isArray(V))return;const F=[...V];F.splice(y,1);const I=v+`[${y}]`;t.destroyPath(I),t.unsetInitialValue(I),K(t.values,v,F),n.value.splice(y,1),b()}function S(y){const v=C(y),V=O(e),F=z(t==null?void 0:t.values,V),I=Ve(F)?[]:F;if(!Array.isArray(I))return;const _=[...I];_.push(v),t.stageInitialValue(V+`[${_.length-1}]`,v),K(t.values,V,_),n.value.push(j(v)),b()}function B(y,v){const V=O(e),F=z(t==null?void 0:t.values,V);if(!Array.isArray(F)||!(y in F)||!(v in F))return;const I=[...F],_=[...n.value],D=I[y];I[y]=I[v],I[v]=D;const x=_[y];_[y]=_[v],_[v]=x,K(t.values,V,I),n.value=_,s()}function Z(y,v){const V=C(v),F=O(e),I=z(t==null?void 0:t.values,F);if(!Array.isArray(I)||I.length<y)return;const _=[...I],D=[...n.value];_.splice(y,0,V),D.splice(y,0,j(V)),K(t.values,F,_),n.value=D,b()}function A(y){const v=O(e);t.stageInitialValue(v,y),K(t.values,v,y),d(),b()}function H(y,v){const V=O(e),F=z(t==null?void 0:t.values,V);!Array.isArray(F)||F.length-1<y||(K(t.values,`${V}[${y}]`,v),t==null||t.validate({mode:"validated-only"}))}function q(y){const v=C(y),V=O(e),F=z(t==null?void 0:t.values,V),I=Ve(F)?[]:F;if(!Array.isArray(I))return;const _=[v,...I];K(t.values,V,_),t.stageInitialValue(V+"[0]",v),n.value.unshift(j(v)),b()}function ue(y,v){const V=O(e),F=z(t==null?void 0:t.values,V),I=Ve(F)?[]:[...F];if(!Array.isArray(F)||!(y in F)||!(v in F))return;const _=[...n.value],D=_[y];_.splice(y,1),_.splice(v,0,D);const x=I[y];I.splice(y,1),I.splice(v,0,x),K(t.values,V,I),n.value=_,b()}const re={fields:n,remove:w,push:S,swap:B,insert:Z,update:H,replace:A,prepend:q,move:ue};return t.fieldArrays.push(Object.assign({path:e,reset:d},re)),pt(()=>{const y=t.fieldArrays.findIndex(v=>O(v.path)===O(e));y>=0&&t.fieldArrays.splice(y,1)}),he(h,y=>{const v=n.value.map(V=>V.value);W(y,v)||d()}),re}export{Rn as F,kn as a,Pn as b,Fn as u};
