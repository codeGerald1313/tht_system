import{I as y}from"./index-BcFOD9Ey.js";import{C as g,q as h,K as v,c as C,o as a,d as n,f as r,s as V,x as w,a0 as B,n as o,p as t,l as c,e as m,h as f,T as b,t as I}from"./index-BLl1OigC.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const x=g({name:"Checkbox",inheritAttrs:!1,components:{Icon:y},props:{label:{type:String},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,default:"checkbox"},activeClass:{type:String,default:"bg-slate-900 dark:bg-slate-900 "},value:{type:null},modelValue:{type:null},badge:{type:Boolean,default:!1},icon:{type:Boolean,default:!1},prevIcon:{type:String,default:"heroicons-outline:volume-up"},nextIcon:{type:String,default:"heroicons-outline:volume-off"}},emits:{"update:modelValue":e=>({modelValue:e})},setup(e,l){const s=h(e.active),u=()=>{s.value=!s.value};return{localValue:v({get:()=>e.modelValue,set:d=>l.emit("update:modelValue",d)}),ck:s,onChange:u}}}),$=["disabled","name","value"],z={key:0},N={key:0},D={key:0,class:"text-slate-500 dark:text-slate-400 text-sm leading-6"};function T(e,l,s,u,k,d){const p=C("Icon");return a(),n("div",null,[r("label",{class:o(["flex items-start",e.disabled?" cursor-not-allowed opacity-40":"cursor-pointer"])},[V(r("input",B({type:"checkbox",class:"hidden",disabled:e.disabled,name:e.name,onChange:l[0]||(l[0]=(...i)=>e.onChange&&e.onChange(...i)),value:e.value,"onUpdate:modelValue":l[1]||(l[1]=i=>e.localValue=i)},e.$attrs),null,16,$),[[w,e.localValue]]),r("div",{class:o([e.ck?e.activeClass:"bg-secondary-500","relative inline-flex h-6 w-[46px] ltr:mr-3 rtl:ml-3 items-center rounded-full transition-all duration-150"])},[e.badge&&e.ck?(a(),n("span",{key:0,class:o([e.icon?"text-sm":" text-[9px]","absolute left-1 top-1/2 -translate-y-1/2 capitalize font-bold text-white tracking-[1px]"])},[e.icon?t("",!0):(a(),n("span",z,"on")),e.icon?(a(),c(p,{key:1,icon:e.prevIcon},null,8,["icon"])):t("",!0)],2)):t("",!0),e.badge&&!e.ck?(a(),n("span",{key:1,class:o([e.icon?"text-sm":" text-[9px]","absolute right-1 top-1/2 -translate-y-1/2 capitalize font-bold text-slate-900 tracking-[1px]"])},[m(b,null,{default:f(()=>[e.icon?t("",!0):(a(),n("span",N,"Off"))]),_:1}),m(b,null,{default:f(()=>[e.icon?(a(),c(p,{key:0,icon:e.nextIcon},null,8,["icon"])):t("",!0)]),_:1})],2)):t("",!0),r("span",{class:o([e.ck?"ltr:translate-x-6 rtl:-translate-x-6":"ltr:translate-x-[2px] rtl:-translate-x-[2px]","inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-150"])},null,2)],2),e.label?(a(),n("span",D,I(e.label),1)):t("",!0)],2)])}const K=S(x,[["render",T]]);export{K as S};
