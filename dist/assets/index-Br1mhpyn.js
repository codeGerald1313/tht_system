import{I as x}from"./index-DxXSMpKh.js";import{c as o,o as t,l as n,g as a,M as b,p as r,h as M,t as c,e as d,d as l,F as I,m as v,f as u,T as S}from"./index-CyQKzwXM.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as D,S as B,M as C,b as $}from"./menu-BlqYkBdn.js";const A={components:{Menu:D,MenuButton:B,MenuItems:C,MenuItem:$,Icon:x},props:{label:{type:String,default:"DropDown"},labelClass:{type:String},classMenuItems:{type:String,default:"mt-2 w-[220px]"},classItem:{type:String,default:"px-4 py-2"},parentClass:{type:String,default:"inline-block"},items:{type:Array,default:()=>[{label:"Action",link:"#"},{label:"Another action",link:"#"},{label:"Something else here",link:"#"},{label:"Separated link",link:"#",hasDivider:!0}]}}},N={key:0},T={key:0,class:"flex items-center"},V={class:"block text-xl ltr:mr-3 rtl:ml-3"},z={class:"block text-sm"},F={key:1,class:"block text-sm"},E={key:0,class:"flex items-center"},L={class:"block text-xl ltr:mr-3 rtl:ml-3"},j={class:"block text-sm"},q={key:1,class:"block text-sm"};function G(i,H,s,J,K,O){const k=o("MenuButton"),m=o("Icon"),p=o("router-link"),f=o("MenuItem"),y=o("MenuItems"),h=o("Menu");return t(),n(h,{as:"div",class:r(["relative",s.parentClass])},{default:a(()=>[i.$slots.default?(t(),n(k,{key:0,class:"block w-full"},{default:a(()=>[b(i.$slots,"default")]),_:3})):(t(),n(k,{key:1,class:r([s.labelClass,"block w-full"])},{default:a(()=>[M(c(s.label),1)]),_:1},8,["class"])),d(S,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:a(()=>[d(y,{class:r([s.classMenuItems,"absolute ltr:right-0 rtl:left-0 origin-top-right rounded bg-white dark:bg-slate-800 dark:border dark:border-slate-700 shadow-dropdown z-[9999]"])},{default:a(()=>[i.$slots.menus?b(i.$slots,"menus",{key:1}):(t(),l("div",N,[(t(!0),l(I,null,v(s.items,(e,g)=>(t(),n(f,{key:g},{default:a(({active:_})=>[e.link?(t(),n(p,{key:0,class:r(`${_?"bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50":"text-slate-600 dark:text-slate-300"} block   ${s.classItem}  ${e.hasDivider?"border-t border-slate-100 dark:border-slate-700":""}`),to:e.link},{default:a(()=>[e.icon?(t(),l("div",T,[u("span",V,[d(m,{icon:e.icon},null,8,["icon"])]),u("span",z,c(e.label),1)])):(t(),l("span",F,c(e.label),1))]),_:2},1032,["class","to"])):(t(),l("span",{key:1,class:r(`${_?"bg-slate-100 text-slate-800":""}  ${e.hasDivider===!0?"border-t border-gray-500 dark:border-slate-700":""}  block ${s.classItem}`)},[e.icon?(t(),l("div",E,[u("span",L,[d(m,{icon:e.icon},null,8,["icon"])]),u("span",j,c(e.label),1)])):(t(),l("span",q,c(e.label),1))],2))]),_:2},1024))),128))]))]),_:3},8,["class"])]),_:3})]),_:3},8,["class"])}const W=w(A,[["render",G]]);export{W as D};
