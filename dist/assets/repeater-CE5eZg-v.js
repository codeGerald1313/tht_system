import{u as x,a as b}from"./vee-validate.esm-CEUTxmiF.js";import{B as f}from"./index-DCMPjbua.js";import{T as o}from"./index-BTHsGrD3.js";import{I as g}from"./index-BcFOD9Ey.js";import{o as r,d as c,f as a,j as e,F as h,m as _,e as s,p as y}from"./index-BLl1OigC.js";const k={class:"bg-slate-50 dark:bg-slate-800 -mx-6 px-6 py-6"},v=a("div",{class:"mb-6 text-slate-600 dark:text-slate-300 text-xs font-medium uppercase"}," Items info-500 ",-1),$={class:"flex justify-between items-end space-x-5 col-span-3"},B={class:"flex-none relative"},C=["onClick"],A={__name:"repeater",setup(I){const{handleSubmit:i}=x({initialValues:{links:["https://github.com/logaretm"]}}),{remove:p,push:d,fields:u}=b("links"),m=i(()=>{});return(w,l)=>(r(),c("div",k,[v,a("div",null,[a("form",{onSubmit:l[1]||(l[1]=(...n)=>e(m)&&e(m)(...n)),novalidate:""},[(r(!0),c(h,null,_(e(u),(n,t)=>(r(),c("div",{key:n.key,class:"grid-cols-12 grid gap-5 mb-5 last:mb-0"},[s(e(o),{label:"Item",type:"text",name:`name[${t}]`,placeholder:"Item name",class:"xl:col-span-5 lg:col-span-3 md:col-span-2 col-span-1"},null,8,["name"]),s(e(o),{label:"Qty",type:"text",name:`name2[${t}]`,placeholder:"Quantity",class:"xl:col-span-2 lg:col-span-3 md:col-span-2 col-span-1"},null,8,["name"]),s(e(o),{label:"Price",type:"text",name:`name3[${t}]`,placeholder:"Price",class:"xl:col-span-2 lg:col-span-3 md:col-span-2 col-span-1"},null,8,["name"]),a("div",$,[s(e(o),{label:"Total",type:"text",name:`name4[${t}]`,placeholder:"Total",class:"flex-1"},null,8,["name"]),a("div",B,[t>0?(r(),c("button",{key:0,type:"div",class:"inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white",onClick:F=>e(p)(t)},[s(e(g),{icon:"heroicons-outline:trash"})],8,C)):y("",!0)])])]))),128)),s(e(f),{text:"Add new",icon:"heroicons-outline:plus",btnClass:" text-slate-600 p-0 dark:text-slate-300",onClick:l[0]||(l[0]=n=>e(d)(""))})],32)])]))}};export{A as _};