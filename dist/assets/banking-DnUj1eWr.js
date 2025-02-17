import{I as X}from"./index-BffMpWx5.js";/* empty css                                              */import{B as F}from"./index-CvW4wJPB.js";import{T as fe}from"./Table-DeKGPd3l.js";import{C as re}from"./index-COOwjdNO.js";import{D as ce}from"./index-Bs_uOHMv.js";import{P as _e}from"./index-DEP2tP3N.js";import{P as ue}from"./index-Dr9vJUyq.js";import{a as be}from"./basic-tablle-data-AN7MRnVF.js";import{u as ee}from"./project-BEvoPr6t.js";import{I as se}from"./index-2H-cusMd.js";import{u as ae,b as Z,s as p,y as R,z as ne,c as M,o as f,d as C,e as l,g as i,f as e,k as t,w as Y,A as P,B as T,t as $,q as A,F as H,m as Q,h as xe,l as J,p as de,a as ye,C as pe,D as Ve,E as Ce}from"./index-BFn_3Gdk.js";import{F as m}from"./index-z1TsTTdr.js";import{T as L}from"./index-BL9tae9R.js";import{M as me}from"./index-2mWc_vCg.js";import{S as D}from"./index-BaZVwneS.js";import{_ as ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as ge}from"./menu-BIf-sRSE.js";import"./user-1-Dmhlt7-s.js";import"./user-4-_9lLfOE2.js";import"./user-6-Bk4CTUVR.js";import"./av-2-D6_jNZbn.js";import"./v4-D8aEg3BZ.js";import"./vue-cleave.min-ClV1fVcS.js";/* empty css                                              */import"./transition-DUAAdbaG.js";import"./focus-management-C7_eiYjk.js";import"./keyboard-CmTzE63w.js";import"./use-outside-click-RVZZ1L_X.js";import"./hidden-Br4jqfTk.js";import"./micro-task-CxIZtCgj.js";import"./open-closed-Bo1bAx4t.js";import"./use-resolve-button-type-0pot5Y2u.js";const ke={name:"client_form",id:"client_form",autocomplete:"off",class:"mx-auto space-y-4"},Se={class:"grid grid-cols-3 lg:grid-cols-3 gap-4"},we={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Ie={class:"lg:col-span-3"},$e=e("div",{class:"lg:hidden"},null,-1),De={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Ee={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},je={class:"lg:col-span-3"},Me=e("div",{class:"lg:hidden"},null,-1),Te={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Ue={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Ne={class:"grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4"},Pe=e("div",{class:"lg:col-span-1"},null,-1),Le={class:"lg:col-span-3 flex justify-end"},he={__name:"ClientEditModal",props:{activeModal:Boolean,clientData:Object},emits:["close","updateClientList"],setup(b,{emit:g}){ee();const _=ae().headers(),q=Z(),h=b,E=g,k=()=>{E("close")},x=p([]),v=p([]),S=p([]),y=async()=>{try{const d=await T.get("https://thtsystemv2.tech/public/api/v1/ubigeo/departments",_);x.value=d.data.data.map(o=>({value:o.id,label:o.name}))}catch(d){console.error("Error fetching departments:",d)}},U=[{value:1,label:"Natural"},{value:2,label:"Jurídico"}],z=[{value:1,label:"DNI"},{value:2,label:"RUC"}],u=[{id:1,label:"Soltero"},{id:2,label:"Casado"},{id:2,label:"Viudo"},{id:2,label:"Divorciado"}],B=[{id:1,label:"Masculino"},{id:2,label:"Femenino"}],r=p({id:"",typedocument_id:"",department_id:"",province_id:"",district_id:"",type_client:"",fullname:"",document:"",tradename:"",address:"",email:"",telephone:"",cellphone:"",date_birthday:"",sex:"",status:"",typeDocument:""}),c=p(U[0].value),V=p(z[0].value);let w=p(null),j=p(null),N=p(null),O=p(null),G=p(null);const te=()=>{const d=document.querySelector(".typecliente-select select");if(d){const a=d.selectedIndex,I=a.toString();d.options[a].text,r.value.type_client=I}const o=document.querySelector(".state-select select");if(d){const a=o.selectedIndex,I=o.options[a].text;r.value.status=I}const n=document.querySelector(".sexo-select select");if(d){const a=n.selectedIndex,I=n.options[a].text;r.value.sex=I}const s=document.querySelector(".typedocument-select select");if(d){const a=s.selectedIndex,I=s.options[a].text;r.value.typedocument_id=a,r.value.typeDocument=I}r.value.type_client=c.value,T.post(`https://thtsystemv2.tech/public/api/v1/clients/edit/${r.value.id}`,r.value,{..._}).then(a=>{E("updateClientList"),k(),q.success(a.data.message)}).catch(a=>{console.error("Error al guardar los datos:",a)})},le=()=>{T.post("https://thtsystemv2.tech/public/api/v1/getDniData",{dni:r.value.document}).then(d=>{r.value.fullname=d.data.data.nombre_completo}).catch(d=>{console.error("Error al obtener datos del DNI:",d)})},oe=async()=>{try{const d=await T.get(`https://thtsystemv2.tech/public/api/v1/ubigeo/provinces/${r.value.department_id}`,_);S.value=d.data.data.map(o=>({value:o.id,label:o.name}))}catch(d){console.error("Error fetching provinces:",d)}},K=async()=>{try{const d=await T.get(`https://thtsystemv2.tech/public/api/v1/ubigeo/districts/${r.value.province_id}`,_);v.value=d.data.data.map(o=>({value:o.id,label:o.name}))}catch(d){console.error("Error fetching provinces:",d)}};return R(()=>h.clientData,d=>{d&&(r.value.id=d.id,r.value.fullname=d.fullname,r.value.document=d.document,r.value.address=d.address,r.value.tradename=d.tradename,r.value.email=d.email,r.value.telephone=d.telephone,r.value.cellphone=d.cellphone,r.value.date_birthday=d.date_birthday,G.value=d.sex,O.value=d.status,c.value=d.type_client,V.value=d.typedocument_id,w.value=(d.department_id??"").toString().padStart(2,"0"),j.value=(d.province_id??"").toString().padStart(4,"0"),N.value=(d.district_id??"").toString().padStart(6,"0"))}),ne(()=>{y()}),(d,o)=>{const n=M("flat-pickr");return f(),C("div",null,[l(t(me),{activeModal:h.activeModal,onClose:k,title:"Actualizar Datos del Cliente",sizeClass:"max-w-6xl",centered:""},{default:i(()=>[e("form",ke,[e("div",Se,[e("div",null,[l(t(m),{label:"Tipo de cliente"},{default:i(()=>[l(t(D),{options:U,modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=s=>c.value=s),class:"typecliente-select",placeholder:"Selccione Cliente"},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),{label:"Tipo documento"},{default:i(()=>[l(t(D),{options:z,modelValue:V.value,"onUpdate:modelValue":o[1]||(o[1]=s=>V.value=s),class:"typedocument-select"},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),{label:"N° Documento"},{default:i(()=>[l(t(se),{type:"text",placeholder:"DNI",modelValue:r.value.document,"onUpdate:modelValue":o[2]||(o[2]=s=>r.value.document=s)},{append:i(()=>[l(t(F),{text:"RENIEC",btnClass:"btn-outline-dark",onClick:Y(le,["prevent"])})]),_:1},8,["modelValue"])]),_:1})])]),e("div",we,[e("div",Ie,[l(t(m),{label:"Nombre ó Razón Social"},{default:i(()=>[l(t(L),{type:"text",id:"client_fullname",modelValue:r.value.fullname,"onUpdate:modelValue":o[3]||(o[3]=s=>r.value.fullname=s),modelModifiers:{trim:!0},placeholder:"Ingrese Nombre ó Razón Social "},null,8,["modelValue"])]),_:1})]),$e]),e("div",De,[e("div",null,[l(t(m),null,{default:i(()=>[l(t(D),{options:x.value,label:"Departamento",modelValue:t(w),"onUpdate:modelValue":o[4]||(o[4]=s=>P(w)?w.value=s:w=s),class:"department-select",onChange:oe},null,8,["options","modelValue"])]),_:1})]),e("div",null,[l(t(m),null,{default:i(()=>[l(t(D),{options:S.value,label:"Provincias",modelValue:t(j),"onUpdate:modelValue":o[5]||(o[5]=s=>P(j)?j.value=s:j=s),class:"province-select",onChange:K,placeholder:""},null,8,["options","modelValue"])]),_:1})]),e("div",null,[l(t(m),null,{default:i(()=>[l(t(D),{options:v.value,label:"Distritos",modelValue:t(N),"onUpdate:modelValue":o[6]||(o[6]=s=>P(N)?N.value=s:N=s),class:"district-select",placeholder:""},null,8,["options","modelValue"])]),_:1})])]),e("div",Ee,[e("div",je,[l(t(m),{label:"Dirección"},{default:i(()=>[l(t(L),{type:"text",modelValue:r.value.address,"onUpdate:modelValue":o[7]||(o[7]=s=>r.value.address=s),modelModifiers:{trim:!0},placeholder:"Ingrese Direción"},null,8,["modelValue"])]),_:1})]),Me]),e("div",Te,[e("div",null,[l(t(m),{label:"Celular"},{default:i(()=>[l(t(L),{type:"text",modelValue:r.value.cellphone,"onUpdate:modelValue":o[8]||(o[8]=s=>r.value.cellphone=s),modelModifiers:{trim:!0},placeholder:"Ingrese N° de celular"},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),{label:"Teléfono fijo"},{default:i(()=>[l(t(L),{type:"text",modelValue:r.value.telephone,"onUpdate:modelValue":o[9]||(o[9]=s=>r.value.telephone=s),modelModifiers:{trim:!0},placeholder:"Ingrese N° de telefono fijo"},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),{label:"Correo electrónico"},{default:i(()=>[l(t(L),{type:"email",modelValue:r.value.email,"onUpdate:modelValue":o[10]||(o[10]=s=>r.value.email=s),modelModifiers:{trim:!0},placeholder:"Ingrese correo electrónico"},null,8,["modelValue"])]),_:1})])]),e("div",Ue,[e("div",null,[l(t(m),{label:"Fecha de nacimiento"},{default:i(()=>[l(n,{modelValue:r.value.date_birthday,"onUpdate:modelValue":o[11]||(o[11]=s=>r.value.date_birthday=s),class:"form-control",id:"date_birthday",placeholder:"yyyy, dd M",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),null,{default:i(()=>[l(t(D),{options:u,label:"Estado",modelValue:t(O),"onUpdate:modelValue":o[12]||(o[12]=s=>P(O)?O.value=s:O=s),class:"state-select",placeholder:"Seleccione"},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),null,{default:i(()=>[l(t(D),{options:B,label:"Sexo",modelValue:t(G),"onUpdate:modelValue":o[13]||(o[13]=s=>P(G)?G.value=s:G=s),class:"sexo-select",placeholder:"Seleccione"},null,8,["modelValue"])]),_:1})])]),e("div",Ne,[Pe,e("div",Le,[l(t(F),{text:"Cancelar",btnClass:"btn-light mr-2",onClick:Y(k,["prevent"])}),l(t(F),{type:"submit",text:"Guardar Cambios",btnClass:"btn-dark",onClick:Y(te,["prevent"])})])])])]),_:1},8,["activeModal"])])}}},ie=ae().headers(),Re={components:{InputGroup:se,Button:F,Pagination:_e,Dropdown:ce,Icon:X,MenuItem:ge,EditProject:he,Card:re,ProgressBar:ue},data(){return{searchTerm:"",clientData:{},showEditModal:!1,advancedTable:be,current:1,perpage:10,pageRange:10,actions:[{name:"edit",icon:"heroicons:pencil-square",doit:b=>{this.clientData=b,this.showEditModal=!0}},{name:"delete",icon:"heroicons-outline:trash",doit:async b=>{try{await T.delete(`https://thtsystemv2.tech/public/api/v1/clients/delete/${b.id}`,ie),Z().success("Cliente eliminado correctamente",{timeout:1500}),this.listarHoteles()}catch(g){console.error("Error al eliminar empleado:",g)}}}],columns:[{label:"Nombre	",field:"fullname"},{label:"Documento",field:"document"},{label:"Celular",field:"cellphone"},{label:"Correo",field:"email"},{label:"Action",field:"action"}],projects:[]}},methods:{async reloadCrmTable(){try{await this.listarClientes()}catch(b){console.error("Error al recargar Clientes :",b)}},async listarClientes(){try{const b=await T.get("https://thtsystemv2.tech/public/api/v1/clients/list",ie);this.projects=b.data.data,Z().success("Clientes listados correctamente",{timeout:1500})}catch(b){console.error("Error al obtener los datos de los empleados:",b)}}},mounted(){this.listarClientes()}},Ae={class:"md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center"},Fe=e("h5",null,"Todos los Clientes",-1),qe={class:"flex items-center space-x-3"},ze={key:0},Be={class:"flex space-x-3 items-center text-left rtl:space-x-reverse"},Oe={class:"flex-none"},Ge={class:"h-10 w-10 rounded-full text-sm bg-[#E0EAFF] dark:bg-slate-700 flex flex-col items-center justify-center font-medium -tracking-[1px]"},Ye={class:"flex-1 font-medium text-sm leading-4 whitespace-nowrap"},Je={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},He={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Qe={key:3,class:"block w-full"},We={class:"flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1 rtl:space-x-reverse"},Ke=["src","alt"],Xe=e("div",{class:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center"}," +2 ",-1),Ze={key:4,class:"min-w-[220px] block"},et={class:"flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium mt-3"},tt=e("span",{class:"font-normal"},"12/15 Task Completed",-1),lt={key:5,class:"action-btn text-end mr-3"},ot={class:"text-xl"},st=["onClick"],at={class:"text-base"},nt={class:"py-4 px-3"};function dt(b,g,_,q,h,E){const k=M("Button"),x=M("InputGroup"),v=M("ProgressBar"),S=M("Icon"),y=M("MenuItem"),U=M("Dropdown"),z=M("Pagination"),u=M("vue-good-table"),B=M("EditProject"),r=M("Card");return f(),C("div",null,[l(r,{noborder:""},{default:i(()=>[e("div",Ae,[Fe,e("div",qe,[l(k,{icon:"heroicons-outline:arrows-up-down",btnClass:"btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm",iconClass:"text-lg",onClick:E.reloadCrmTable},null,8,["onClick"]),l(x,{modelValue:h.searchTerm,"onUpdate:modelValue":g[0]||(g[0]=c=>h.searchTerm=c),placeholder:"Buscar cliente",type:"text",prependIcon:"heroicons-outline:search",merged:""},null,8,["modelValue"])])]),l(u,{class:"-mx-6",columns:h.columns,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:this.projects,"pagination-options":{enabled:!0,perPage:h.perpage},"search-options":{enabled:!0,externalQuery:h.searchTerm},"sort-options":{enabled:!1}},{"table-row":i(c=>[c.column.field=="name"?(f(),C("span",ze,[e("div",Be,[e("div",Oe,[e("div",Ge,$(c.row.name.charAt(0)+c.row.name.charAt(c.row.name.length-1)),1)]),e("div",Ye,$(c.row.name.length>20?c.row.name.substring(0,20)+"...":c.row.name),1)])])):A("",!0),c.column.field=="startDate"?(f(),C("span",Je,$(c.row.startDate),1)):A("",!0),c.column.field=="endDate"?(f(),C("span",He,$(c.row.endDate),1)):A("",!0),c.column.field=="assignto"?(f(),C("span",Qe,[e("div",We,[(f(!0),C(H,null,Q(c.row.assignto,(V,w)=>(f(),C("div",{class:"h-6 w-6 rounded-full ring-1 ring-slate-100",key:w},[e("img",{src:V.image,alt:V.title,class:"w-full h-full rounded-full"},null,8,Ke)]))),128)),Xe])])):A("",!0),c.column.field=="progress"?(f(),C("span",Ze,[l(v,{value:c.row.progress,barColor:"bg-primary-500"},null,8,["value"]),e("span",et,[tt,xe(" "+$(c.row.progress)+"% ",1)])])):A("",!0),c.column.field=="action"?(f(),C("div",lt,[l(U,{classMenuItems:" w-[140px]"},{menus:i(()=>[(f(!0),C(H,null,Q(h.actions,(V,w)=>(f(),J(y,{key:w},{default:i(()=>[e("div",{onClick:j=>V.doit(c.row),class:de(`
                
                  ${V.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center `)},[e("span",at,[l(S,{icon:V.icon},null,8,["icon"])]),e("span",null,$(V.name),1)],10,st)]),_:2},1024))),128))]),default:i(()=>[e("div",ot,[l(S,{icon:"heroicons-outline:dots-vertical"})])]),_:2},1024)])):A("",!0)]),"pagination-bottom":i(c=>[e("div",nt,[l(z,{total:h.projects.length,current:h.current,"per-page":h.perpage,pageRange:h.pageRange,onPageChanged:g[1]||(g[1]=V=>h.current=V),pageChanged:c.pageChanged,perPageChanged:c.perPageChanged,enableSearch:"",enableSelect:""},null,8,["total","current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options","search-options"]),l(B,{activeModal:h.showEditModal,onClose:g[2]||(g[2]=c=>h.showEditModal=!1),clientData:h.clientData,title:"Actualizar Datos Cliente",onUpdateClientList:E.listarClientes},null,8,["activeModal","clientData","onUpdateClientList"])]),_:1})])}const it=ve(Re,[["render",dt]]),W=b=>(Ve("data-v-fd73aac9"),b=b(),Ce(),b),rt={class:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},ct={class:"flex justify-between items-end"},ut={class:"flex space-x-4 items-center rtl:space-x-reverse"},pt={class:"flex-none"},mt={class:"h-10 w-10 rounded-md text-lg bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex flex-col items-center justify-center font-normal capitalize"},vt={class:"font-medium text-base leading-6"},gt={class:"dark:text-slate-200 text-slate-900 max-w-[160px] truncate"},ht={class:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400"},ft=["onClick"],_t={class:"text-base"},bt={class:"text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8"},xt={class:"flex space-x-4 rtl:space-x-reverse"},yt=W(()=>e("span",{class:"block date-label"},"Start date",-1)),Vt={class:"block date-text"},Ct=W(()=>e("span",{class:"block date-label"},"Start date",-1)),kt={class:"block date-text"},St={class:"ltr:text-right rtl:text-left text-xs text-slate-600 dark:text-slate-300 mb-1 font-medium"},wt={class:"grid grid-cols-2 gap-4 mt-6"},It=W(()=>e("div",{class:"text-slate-400 dark:text-slate-400 text-sm font-normal mb-3"}," Assigned to ",-1)),$t={class:"flex justify-start -space-x-1.5 rtl:space-x-reverse"},Dt=["src","alt"],Et=W(()=>e("div",{class:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center"}," +2 ",-1)),jt={class:"ltr:text-right rtl:text-left"},Mt={class:"inline-flex items-center space-x-1 bg-danger-500 bg-opacity-[0.16] text-danger-500 text-xs font-normal px-2 py-1 rounded-full rtl:space-x-reverse"},Tt=W(()=>e("span",null,"days left",-1)),Ut={__name:"Projects-grid",setup(b){const g=ee(),_=ye(),q=pe(()=>g.projects),h=(k,x)=>{const v=new Date(k);return new Date(x).getDate()-v.getDate()},E=p([{name:"view",icon:"heroicons:eye",doit:()=>{_.push("/app/project-details")}},{name:"Edit",icon:"heroicons-outline:pencil-alt",doit:k=>{g.updateProject(k)}},{name:"Delete",icon:"heroicons-outline:trash",doit:k=>{g.removeProject(k)}}]);return(k,x)=>(f(),C("div",rt,[(f(!0),C(H,null,Q(q.value,(v,S)=>(f(),J(t(re),{bodyClass:"p-6",key:S},{default:i(()=>[e("header",ct,[e("div",ut,[e("div",pt,[e("div",mt,$(v.name.charAt(0)+v.name.charAt(1)),1)]),e("div",vt,[e("div",gt,$(v.name),1)])]),e("div",null,[l(t(ce),{classMenuItems:" w-[130px]"},{menus:i(()=>[(f(!0),C(H,null,Q(E.value,(y,U)=>(f(),J(t(ge),{key:U},{default:i(()=>[e("div",{onClick:z=>y.doit(v),class:de(`
                
                  hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  capitalize rtl:space-x-reverse `)},[e("span",_t,[l(t(X),{icon:y.icon},null,8,["icon"])]),e("span",null,$(y.name),1)],8,ft)]),_:2},1024))),128))]),default:i(()=>[e("span",ht,[l(t(X),{icon:"heroicons-outline:dots-vertical"})])]),_:2},1024)])]),e("div",bt,$(v.des),1),e("div",xt,[e("div",null,[yt,e("span",Vt,$(v.startDate),1)]),e("div",null,[Ct,e("span",kt,$(v.endDate),1)])]),e("div",St,$(v.progress)+"% ",1),l(t(ue),{value:v.progress,barColor:"bg-primary-500"},null,8,["value"]),e("div",wt,[e("div",null,[It,e("div",$t,[(f(!0),C(H,null,Q(v.assignto,(y,U)=>(f(),C("div",{class:"h-6 w-6 rounded-full ring-1 ring-slate-100",key:U},[e("img",{src:y.image,alt:y.title,class:"w-full h-full rounded-full"},null,8,Dt)]))),128)),Et])]),e("div",jt,[e("span",Mt,[e("span",null,[l(t(X),{icon:"heroicons-outline:clock"})]),e("span",null,$(h(v.startDate,v.endDate)),1),Tt])])])]),_:2},1024))),128))]))}},Nt=ve(Ut,[["__scopeId","data-v-fd73aac9"]]),Pt={name:"client_form",id:"client_form",autocomplete:"off",class:"mx-auto space-y-4"},Lt={class:"grid grid-cols-3 lg:grid-cols-3 gap-4"},Rt={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},At={class:"lg:col-span-3"},Ft=e("div",{class:"lg:hidden"},null,-1),qt={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},zt={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Bt={class:"lg:col-span-3"},Ot=e("div",{class:"lg:hidden"},null,-1),Gt={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Yt={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Jt={class:"grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4"},Ht=e("div",{class:"lg:col-span-1"},null,-1),Qt={class:"lg:col-span-3 flex justify-end"},Wt={__name:"ClientAddModal",setup(b){let g=ee();const _=ae().headers(),q=Z(),h=()=>{g.closeModal()},E=p([]),k=p([]),x=p([]),v=async()=>{try{const o=await T.get("https://thtsystemv2.tech/public/api/v1/ubigeo/departments",_);E.value=o.data.data.map(n=>({value:n.id,label:n.name}))}catch(o){console.error("Error fetching departments:",o)}},S=[{value:1,label:"Natural"},{value:2,label:"Jurídico"}],y=[{value:1,label:"DNI"},{value:2,label:"RUC"},{value:3,label:"PASAPORTE"}],U=[{id:1,label:"Soltero"},{id:2,label:"Casado"},{id:2,label:"Viudo"},{id:2,label:"Divorciado"}],z=[{id:1,label:"Masculino"},{id:2,label:"Femenino"}],u=p({typedocument_id:"",department_id:"",province_id:"",district_id:"",type_client:"",fullname:"",document:"",tradename:"",address:"",email:"",telephone:"",cellphone:"",date_birthday:"",sex:"",status:"",typeDocument:""}),B=p(S[0].value),r=p(y[0].value);let c=p(null),V=p(null),w=p(null),j=p(null),N=p(null);const O=()=>{g.closeModal()},G=()=>{const o=document.querySelector(".typecliente-select select");if(o){const s=o.selectedIndex,a=s.toString();o.options[s].text,u.value.type_client=a}const n=document.querySelector(".typedocument-select select");if(o){const s=n.selectedIndex,a=n.options[s].text;u.value.typedocument_id=s,u.value.typeDocument=a}T.post("https://thtsystemv2.tech/public/api/v1/clients/create",u.value,{..._}).then(s=>{O(),q.success(s.data.message)}).catch(s=>{console.error("Error al guardar los datos:",s)})},te=()=>{T.post("https://thtsystemv2.tech/public/api/v1/getDniData",{dni:u.value.document}).then(o=>{u.value.fullname=o.data.data.nombre_completo}).catch(o=>{console.error("Error al obtener datos del DNI:",o)})},le=async()=>{try{const o=await T.get(`https://thtsystemv2.tech/public/api/v1/ubigeo/provinces/${u.value.department_id}`,_);x.value=o.data.data.map(n=>({value:n.id,label:n.name}))}catch(o){console.error("Error fetching provinces:",o)}},oe=async()=>{try{const o=await T.get(`https://thtsystemv2.tech/public/api/v1/ubigeo/districts/${u.value.province_id}`,_);k.value=o.data.data.map(n=>({value:n.id,label:n.name}))}catch(o){console.error("Error fetching provinces:",o)}};R(()=>N.value,(o,n)=>{const s=document.querySelector(".sexo-select select");if(s){const a=s.selectedIndex,I=s.options[a].text;u.value.sex=I}}),R(()=>j.value,(o,n)=>{const s=document.querySelector(".state-select select");if(s){const a=s.selectedIndex,I=s.options[a].text;u.value.status=I}}),R(()=>w.value,(o,n)=>{if(document.querySelector(".district-select select")){const a=o.toString().padStart(6,"0");u.value.district_id=a}}),R(()=>V.value,(o,n)=>{if(document.querySelector(".province-select select")){const a=o.toString().padStart(4,"0");u.value.province_id=a}}),R(()=>c.value,(o,n)=>{if(document.querySelector(".department-select select")){const a=o.toString().padStart(2,"0");u.value.department_id=a}});const K=p("N° DNI"),d=p("RENIEC");return R(()=>r.value,o=>{const n=document.querySelector(".typedocument-select select");if(n){const s=n.selectedIndex,a=n.options[s],I=n.options[s].text;u.value.typedocument_id=s,u.value.typeDocument=I,K.value=`N° ${a.textContent}`,d.value=o==="1"?"RENIEC":o==="2"?"SUNAT":"Validar"}}),R(()=>B.value,(o,n)=>{const s=document.querySelector(".typecliente-select select");if(s){const a=s.selectedIndex,I=a.toString();s.options[a].text,u.value.type_client=I}}),ne(()=>{v()}),(o,n)=>{const s=M("flat-pickr");return f(),C("div",null,[l(t(me),{activeModal:t(g).addmodal,onClose:t(g).closeModal,title:"Registrar nuevo Cliente",sizeClass:"max-w-4xl",centered:""},{default:i(()=>[e("form",Pt,[e("div",Lt,[e("div",null,[l(t(m),{label:"Tipo de cliente"},{default:i(()=>[l(t(D),{options:S,modelValue:B.value,"onUpdate:modelValue":n[0]||(n[0]=a=>B.value=a),class:"typecliente-select",placeholder:"Seleccione Cliente"},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),{label:"Tipo documento"},{default:i(()=>[l(t(D),{options:y,modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=a=>r.value=a),class:"typedocument-select"},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),{label:"N° Documento"},{default:i(()=>[l(t(se),{type:"text",placeholder:K.value,modelValue:u.value.document,"onUpdate:modelValue":n[2]||(n[2]=a=>u.value.document=a)},{append:i(()=>[l(t(F),{text:d.value,btnClass:"btn-outline-dark",onClick:Y(te,["prevent"])},null,8,["text"])]),_:1},8,["placeholder","modelValue"])]),_:1})])]),e("div",Rt,[e("div",At,[l(t(m),{label:"Nombre ó Razón Social"},{default:i(()=>[l(t(L),{type:"text",id:"client_fullname",modelValue:u.value.fullname,"onUpdate:modelValue":n[3]||(n[3]=a=>u.value.fullname=a),modelModifiers:{trim:!0},placeholder:"Ingrese Nombre ó Razón Social "},null,8,["modelValue"])]),_:1})]),Ft]),e("div",qt,[e("div",null,[l(t(m),null,{default:i(()=>[l(t(D),{options:E.value,label:"Departamento",modelValue:t(c),"onUpdate:modelValue":n[4]||(n[4]=a=>P(c)?c.value=a:c=a),class:"department-select",onChange:le},null,8,["options","modelValue"])]),_:1})]),e("div",null,[l(t(m),null,{default:i(()=>[l(t(D),{options:x.value,label:"Provincias",modelValue:t(V),"onUpdate:modelValue":n[5]||(n[5]=a=>P(V)?V.value=a:V=a),class:"province-select",onChange:oe,placeholder:""},null,8,["options","modelValue"])]),_:1})]),e("div",null,[l(t(m),null,{default:i(()=>[l(t(D),{options:k.value,label:"Distritos",modelValue:t(w),"onUpdate:modelValue":n[6]||(n[6]=a=>P(w)?w.value=a:w=a),class:"district-select",placeholder:""},null,8,["options","modelValue"])]),_:1})])]),e("div",zt,[e("div",Bt,[l(t(m),{label:"Dirección"},{default:i(()=>[l(t(L),{type:"text",modelValue:u.value.address,"onUpdate:modelValue":n[7]||(n[7]=a=>u.value.address=a),modelModifiers:{trim:!0},placeholder:"Ingrese Direción"},null,8,["modelValue"])]),_:1})]),Ot]),e("div",Gt,[e("div",null,[l(t(m),{label:"Celular"},{default:i(()=>[l(t(L),{type:"text",modelValue:u.value.cellphone,"onUpdate:modelValue":n[8]||(n[8]=a=>u.value.cellphone=a),modelModifiers:{trim:!0},placeholder:"Ingrese N° de celular"},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),{label:"Teléfono fijo"},{default:i(()=>[l(t(L),{type:"text",modelValue:u.value.telephone,"onUpdate:modelValue":n[9]||(n[9]=a=>u.value.telephone=a),modelModifiers:{trim:!0},placeholder:"Ingrese N° de telefono fijo"},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),{label:"Correo electrónico"},{default:i(()=>[l(t(L),{type:"email",modelValue:u.value.email,"onUpdate:modelValue":n[10]||(n[10]=a=>u.value.email=a),modelModifiers:{trim:!0},placeholder:"Ingrese correo electrónico"},null,8,["modelValue"])]),_:1})])]),e("div",Yt,[e("div",null,[l(t(m),{label:"Fecha de nacimiento"},{default:i(()=>[l(s,{modelValue:u.value.date_birthday,"onUpdate:modelValue":n[11]||(n[11]=a=>u.value.date_birthday=a),class:"form-control",id:"date_birthday",placeholder:"yyyy, dd M",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),null,{default:i(()=>[l(t(D),{options:U,label:"Estado",modelValue:t(j),"onUpdate:modelValue":n[12]||(n[12]=a=>P(j)?j.value=a:j=a),class:"state-select",placeholder:"Seleccione"},null,8,["modelValue"])]),_:1})]),e("div",null,[l(t(m),null,{default:i(()=>[l(t(D),{options:z,label:"Sexo",modelValue:t(N),"onUpdate:modelValue":n[13]||(n[13]=a=>P(N)?N.value=a:N=a),class:"sexo-select",placeholder:"Seleccione"},null,8,["modelValue"])]),_:1})])]),e("div",Jt,[Ht,e("div",Qt,[l(t(F),{text:"Cancelar",btnClass:"btn-light mr-2",onClick:Y(h,["prevent"])}),l(t(F),{type:"submit",text:"Guardar Cambios",btnClass:"btn-dark",onClick:Y(G,["prevent"])})])])])]),_:1},8,["activeModal","onClose"])])}}},Kt={class:"flex flex-wrap justify-between items-center mb-4"},jl={__name:"banking",setup(b){const g=ee();let _=p("list");const q=()=>{g.openProject()},h=p(0),E=()=>{h.value=window.innerWidth};ne(()=>{window.addEventListener("resize",E),E()});const k=pe(()=>g.projects),x=p(!0),v=p(!1);return setTimeout(()=>{x.value=!1},1e3),R(_,(S,y)=>{S!==y&&(S==="list"?(x.value=!0,v.value=!1):(x.value=!1,v.value=!0),setTimeout(()=>{x.value=!1,v.value=!1},1e3))}),(S,y)=>(f(),C("div",null,[e("div",Kt,[e("div",{class:de(["md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse",h.value<768?"space-x-rb":""])},[l(t(F),{icon:"heroicons:list-bullet",text:"Vista de Lista",btnClass:`${t(_)==="list"?"bg-slate-900 dark:bg-slate-700  text-white":" bg-white dark:bg-slate-800 dark:text-slate-300"}   h-min text-sm font-normal`,iconClass:" text-lg",onClick:y[0]||(y[0]=U=>P(_)?_.value="list":_="list"),isLoading:x.value,isDisabled:x.value},null,8,["btnClass","isLoading","isDisabled"]),l(t(F),{icon:"heroicons-outline:plus",text:"Agregar Cliente",btnClass:"btn-dark dark:bg-slate-800  h-min text-sm font-normal",iconClass:" text-lg",onClick:q,isLoading:t(g).isLoading},null,8,["isLoading"])],2)]),x.value?(f(),J(t(fe),{key:0,count:k.value.length},null,8,["count"])):A("",!0),t(_)==="grid"&&!v.value?(f(),J(t(Nt),{key:1})):A("",!0),t(_)==="list"&&!x.value?(f(),J(t(it),{key:2})):A("",!0),l(Wt),l(he)]))}};export{jl as default};
