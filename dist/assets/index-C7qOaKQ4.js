import{C as p,q as m,K as f,o as r,d,f as t,s as c,v as g,a0 as b,n as i,t as k,p as v}from"./index-BLl1OigC.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=p({name:"Radio",inheritAttrs:!1,props:{label:{type:String},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,default:"checkbox"},activeClass:{type:String,default:"ring-slate-500 dark:ring-slate-400"},value:{type:null},modelValue:{type:null}},emits:{"update:modelValue":e=>({modelValue:e})},setup(e,a){const l=m(e.checked),o=()=>{l.value=!l.value};return{localValue:f({get:()=>e.modelValue,set:n=>a.emit("update:modelValue",n)}),ck:l,onChange:o}}}),y=["disabled","name","value"],C={key:0,class:"text-slate-500 dark:text-slate-400 text-sm leading-6"};function B(e,a,l,o,u,n){return r(),d("div",null,[t("label",{class:i(["flex items-center",e.disabled?" cursor-not-allowed opacity-50":"cursor-pointer"])},[c(t("input",b({type:"radio",class:"hidden",disabled:e.disabled,name:e.name,onChange:a[0]||(a[0]=(...s)=>e.onChange&&e.onChange(...s)),value:e.value,"onUpdate:modelValue":a[1]||(a[1]=s=>e.localValue=s)},e.$attrs),null,16,y),[[g,e.localValue]]),t("span",{class:i([e.localValue===e.value?e.activeClass+" ring-[6px]  ring-inset ring-offset-2 dark:ring-offset-slate-600  dark:ring-offset-4 border-slate-700":"border-slate-400 dark:border-slate-600 dark:ring-slate-700","h-[18px] w-[18px] rounded-full border inline-flex bg-white dark:bg-slate-500 ltr:mr-3 rtl:ml-3 relative transition-all duration-150"])},null,2),e.label?(r(),d("span",C,k(e.label),1)):v("",!0)],2)])}const R=V(h,[["render",B]]);export{R};