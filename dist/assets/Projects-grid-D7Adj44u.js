import{C as w}from"./index-CoHYOsAq.js";import{D as j}from"./index-Br1mhpyn.js";import{I as _}from"./index-DxXSMpKh.js";import{P as C}from"./index-BrRQqvEE.js";import{u as I}from"./project-7SCfM68f.js";import{a as S,C as P,s as B,o,d as n,F as f,m as h,l as v,g as p,f as t,t as s,e as c,k as l,p as z,D as A,E}from"./index-CyQKzwXM.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as G}from"./menu-BlqYkBdn.js";const d=i=>(A("data-v-e2d8c184"),i=i(),E(),i),N={class:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},V={class:"flex justify-between items-end"},$={class:"flex space-x-4 items-center rtl:space-x-reverse"},L={class:"flex-none"},M={class:"h-10 w-10 rounded-md text-lg bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex flex-col items-center justify-center font-normal capitalize"},R={class:"font-medium text-base leading-6"},q={class:"dark:text-slate-200 text-slate-900 max-w-[160px] truncate"},H={class:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400"},J=["onClick"],K={class:"text-base"},O={class:"text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8"},Q={class:"flex space-x-4 rtl:space-x-reverse"},T=d(()=>t("span",{class:"block date-label"},"Start date",-1)),U={class:"block date-text"},W=d(()=>t("span",{class:"block date-label"},"Start date",-1)),X={class:"block date-text"},Y={class:"ltr:text-right rtl:text-left text-xs text-slate-600 dark:text-slate-300 mb-1 font-medium"},Z={class:"grid grid-cols-2 gap-4 mt-6"},tt=d(()=>t("div",{class:"text-slate-400 dark:text-slate-400 text-sm font-normal mb-3"}," Assigned to ",-1)),et={class:"flex justify-start -space-x-1.5 rtl:space-x-reverse"},st=["src","alt"],at=d(()=>t("div",{class:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center"}," +2 ",-1)),ot={class:"ltr:text-right rtl:text-left"},lt={class:"inline-flex items-center space-x-1 bg-danger-500 bg-opacity-[0.16] text-danger-500 text-xs font-normal px-2 py-1 rounded-full rtl:space-x-reverse"},rt=d(()=>t("span",null,"days left",-1)),nt={__name:"Projects-grid",setup(i){const u=I(),b=S(),k=P(()=>u.projects),y=(r,g)=>{const e=new Date(r);return new Date(g).getDate()-e.getDate()},D=B([{name:"view",icon:"heroicons:eye",doit:()=>{b.push("/app/project-details")}},{name:"Edit",icon:"heroicons-outline:pencil-alt",doit:r=>{u.updateProject(r)}},{name:"Delete",icon:"heroicons-outline:trash",doit:r=>{u.removeProject(r)}}]);return(r,g)=>(o(),n("div",N,[(o(!0),n(f,null,h(k.value,(e,m)=>(o(),v(l(w),{bodyClass:"p-6",key:m},{default:p(()=>[t("header",V,[t("div",$,[t("div",L,[t("div",M,s(e.name.charAt(0)+e.name.charAt(1)),1)]),t("div",R,[t("div",q,s(e.name),1)])]),t("div",null,[c(l(j),{classMenuItems:" w-[130px]"},{menus:p(()=>[(o(!0),n(f,null,h(D.value,(a,x)=>(o(),v(l(G),{key:x},{default:p(()=>[t("div",{onClick:ct=>a.doit(e),class:z(`
                
                  hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  capitalize rtl:space-x-reverse `)},[t("span",K,[c(l(_),{icon:a.icon},null,8,["icon"])]),t("span",null,s(a.name),1)],8,J)]),_:2},1024))),128))]),default:p(()=>[t("span",H,[c(l(_),{icon:"heroicons-outline:dots-vertical"})])]),_:2},1024)])]),t("div",O,s(e.des),1),t("div",Q,[t("div",null,[T,t("span",U,s(e.startDate),1)]),t("div",null,[W,t("span",X,s(e.endDate),1)])]),t("div",Y,s(e.progress)+"% ",1),c(l(C),{value:e.progress,barColor:"bg-primary-500"},null,8,["value"]),t("div",Z,[t("div",null,[tt,t("div",et,[(o(!0),n(f,null,h(e.assignto,(a,x)=>(o(),n("div",{class:"h-6 w-6 rounded-full ring-1 ring-slate-100",key:x},[t("img",{src:a.image,alt:a.title,class:"w-full h-full rounded-full"},null,8,st)]))),128)),at])]),t("div",ot,[t("span",lt,[t("span",null,[c(l(_),{icon:"heroicons-outline:clock"})]),t("span",null,s(y(e.startDate,e.endDate)),1),rt])])])]),_:2},1024))),128))]))}},gt=F(nt,[["__scopeId","data-v-e2d8c184"]]);export{gt as G};
