import{B as u}from"./index-DCMPjbua.js";import{C as h}from"./index-Hsd0Z0_R.js";import{F as x}from"./index-I9bOp0dW.js";import{T as f}from"./index-CwPxZwdQ.js";import{T as g}from"./index-BTHsGrD3.js";import{_ as y}from"./repeater-CE5eZg-v.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as b,e,h as r,c as o,o as A,f as t}from"./index-BLl1OigC.js";import"./index-BcFOD9Ey.js";import"./vue-cleave.min-DAvglPmz.js";import"./vee-validate.esm-CEUTxmiF.js";const k={components:{Button:u,Card:h,Textinput:g,FromGroup:x,Textarea:f,Repeater:y}},C=t("h4",{class:"text-slate-900 dark:text-white text-xl mb-4"},"#89572935Kh",-1),T={class:"grid lg:grid-cols-2 grid-cols-1 gap-5"},w={class:"grid lg:grid-cols-2 grid-cols-1 gap-5"},B=t("div",{class:"lg:col-span-2 col-span-1 text-slate-600 dark:text-slate-300 text-xs font-medium"}," Recipient info-500 ",-1),E={class:"lg:col-span-2 col-span-1"},N={class:"grid lg:grid-cols-2 grid-cols-1 gap-5"},V=t("div",{class:"lg:col-span-2 col-span-1 text-slate-600 dark:text-slate-300 text-xs font-medium"}," Owner info-500 ",-1),$={class:"lg:col-span-2 col-span-1"},F={class:"lg:col-span-2 col-span-1"},R={class:"my-6"},G={class:"ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse"};function D(l,d,P,I,K,M){const n=o("flat-pickr"),c=o("FromGroup"),a=o("Textinput"),s=o("Textarea"),p=o("Repeater"),i=o("Button"),m=o("Card");return A(),b("div",null,[e(m,{title:"Edit Cuadre"},{default:r(()=>[C,t("div",T,[t("div",w,[B,e(c,{label:"Issued date",name:"d1"},{default:r(()=>[e(n,{modelValue:l.dateDefault,"onUpdate:modelValue":d[0]||(d[0]=_=>l.dateDefault=_),class:"form-control",id:"d1",placeholder:"yyyy, dd M"},null,8,["modelValue"])]),_:1}),e(a,{label:"Name",type:"text",placeholder:"Add your name"}),e(a,{label:"Phone",type:"text",placeholder:"Add your phone"}),e(a,{label:"Email",type:"email",placeholder:"Add your email"}),t("div",E,[e(s,{label:"Address",type:"email",placeholder:"address",rows:"2"})])]),t("div",N,[V,e(a,{label:"Name",type:"text",placeholder:"Add your name"}),e(a,{label:"Phone",type:"text",placeholder:"Add your phone"}),t("div",$,[e(a,{label:"Email",type:"email",placeholder:"Add your email"})]),t("div",F,[e(s,{label:"Address",type:"email",placeholder:"address",rows:"2"})])])]),t("div",R,[e(p)]),e(s,{label:"Additional note",type:"text",rows:"2",placeholder:"Note",class:"lg:w-1/2"}),t("div",G,[e(i,{text:"Save",btnClass:"btn-dark"})])]),_:1})])}const X=v(k,[["render",D]]);export{X as default};