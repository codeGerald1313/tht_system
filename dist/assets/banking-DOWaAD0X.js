import{I as te}from"./index-BcFOD9Ey.js";/* empty css                                              */import{B as F}from"./index-DCMPjbua.js";import{T as be}from"./Table-CxPcO8df.js";import{C as ue}from"./index-Hsd0Z0_R.js";import{D as pe}from"./index-DFq5MbAK.js";import{P as xe}from"./index-vl95iEIB.js";import{P as me}from"./index-C66Q9vME.js";import{a as ye}from"./basic-tablle-data-AN7MRnVF.js";import{u as ae}from"./project-DZP6XSnf.js";import{I as ne}from"./index-DCC49QXr.js";import{u as de,b as oe,q as p,G as R,H as ie,c as E,o as h,d as y,e as o,h as c,f as e,j as t,w as K,I as U,J as j,t as I,p as A,F as W,m as X,i as Ve,l as Q,n as ce,a as Ce,K as ve,z as ke,A as we}from"./index-BLl1OigC.js";import{F as m}from"./index-I9bOp0dW.js";import{T as L}from"./index-BTHsGrD3.js";import{M as ge}from"./index-MSlXG-Ka.js";import{S as $}from"./index-DPFbVGd7.js";import{_ as he}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as fe}from"./menu-CM83wd2-.js";import"./user-1-Dmhlt7-s.js";import"./user-4-_9lLfOE2.js";import"./user-6-Bk4CTUVR.js";import"./av-2-D6_jNZbn.js";import"./v4-D8aEg3BZ.js";import"./vue-cleave.min-DAvglPmz.js";import"./transition-CNElC_4N.js";import"./focus-management-Dc3XsveG.js";import"./keyboard-9WePWYgZ.js";import"./use-outside-click-CPWvQZIF.js";import"./hidden-BR_kr5_G.js";import"./micro-task-CxIZtCgj.js";import"./open-closed-0CPOhxDd.js";import"./use-resolve-button-type-BwPomRAb.js";const Se={name:"client_form",id:"client_form",autocomplete:"off",class:"mx-auto space-y-4"},Ie={class:"grid grid-cols-3 lg:grid-cols-3 gap-4"},$e={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},De={class:"lg:col-span-3"},Ee=e("div",{class:"lg:hidden"},null,-1),je={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Me={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Ne={class:"lg:col-span-3"},Te=e("div",{class:"lg:hidden"},null,-1),Ue={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Pe={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Le={class:"grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4"},Re=e("div",{class:"lg:col-span-1"},null,-1),Ae={class:"lg:col-span-3 flex justify-end"},_e={__name:"ClientEditModal",props:{activeModal:Boolean,clientData:Object},emits:["close","updateClientList"],setup(_,{emit:g}){let V=ae();const M=de().headers(),f=oe(),D=()=>{V.closeModal()},C=_,x=g,v=()=>{x("close")},k=p([]),b=p([]),N=p([]),H=async()=>{try{const l=await j.get("https://thtbackend-production.up.railway.app/api/v1/ubigeo/departments",M);k.value=l.data.data.map(a=>({value:a.id,label:a.name}))}catch(l){console.error("Error fetching departments:",l)}},i=[{value:1,label:"Natural"},{value:2,label:"Jurídico"}],q=[{value:1,label:"DNI"},{value:2,label:"RUC"}],B=[{id:1,label:"Soltero"},{id:2,label:"Casado"},{id:2,label:"Viudo"},{id:2,label:"Divorciado"}],u=[{id:1,label:"Masculino"},{id:2,label:"Femenino"}],n=p({id:"",typedocument_id:"",department_id:"",province_id:"",district_id:"",type_client:"",fullname:"",document:"",tradename:"",address:"",email:"",telephone:"",cellphone:"",date_birthday:"",sex:"",status:"",typeDocument:""}),w=p(i[0].value),P=p(q[0].value);let T=p(null),O=p(null),G=p(null),Y=p(null),J=p(null);const se=()=>{const l=document.querySelector(".typecliente-select select");if(l){const S=l.selectedIndex,z=S.toString();l.options[S].text,n.value.type_client=z,console.log("Label seleccionado:",n.value.type_client),console.log("Índice seleccionado como cadena:",z)}else console.log("No se ha seleccionado ninguna opción.");const a=document.querySelector(".state-select select");if(l){const S=a.selectedIndex,z=a.options[S].text;n.value.status=z,console.log("Label seleccionado:",n.value.status)}else console.log("No se ha seleccionado ninguna opción.");const s=document.querySelector(".sexo-select select");if(l){const S=s.selectedIndex,z=s.options[S].text;n.value.sex=z,console.log("Label seleccionado:",n.value.sex)}else console.log("No se ha seleccionado ninguna opción.");const d=document.querySelector(".typedocument-select select");if(l){const S=d.selectedIndex,z=d.options[S].text;n.value.typedocument_id=S,n.value.typeDocument=z,console.log("Id & Label seleccionado:",n.value.type_client)}else console.log("No se ha seleccionado ninguna opción.");n.value.type_client=w.value,console.log(n.value),j.post(`https://thtbackend-production.up.railway.app/api/v1/clients/edit/${n.value.id}`,n.value,{...M}).then(S=>{console.log("Datos guardados exitosamente:",S.data),x("updateClientList"),v(),f.success(S.data.message)}).catch(S=>{console.error("Error al guardar los datos:",S)})},ee=()=>{j.get(`https://thtbackend-production.up.railway.app/api/v1/apidni/${n.value.document}`).then(l=>{console.log("Respuesta de la API DNI:",l.data),n.value.fullname=`${l.data.nombres} ${l.data.apellidoPaterno} ${l.data.apellidoMaterno}`}).catch(l=>{console.error("Error al obtener datos del DNI:",l)})},le=async()=>{try{const l=await j.get(`https://thtbackend-production.up.railway.app/api/v1/ubigeo/provinces/${n.value.department_id}`,M);N.value=l.data.data.map(a=>({value:a.id,label:a.name}))}catch(l){console.error("Error fetching provinces:",l)}},r=async()=>{try{const l=await j.get(`https://thtbackend-production.up.railway.app/api/v1/ubigeo/districts/${n.value.province_id}`,M);b.value=l.data.data.map(a=>({value:a.id,label:a.name}))}catch(l){console.error("Error fetching provinces:",l)}};return R(()=>C.clientData,l=>{l&&(n.value.id=l.id,n.value.fullname=l.fullname,n.value.document=l.document,n.value.address=l.address,n.value.tradename=l.tradename,n.value.email=l.email,n.value.telephone=l.telephone,n.value.cellphone=l.cellphone,n.value.date_birthday=l.date_birthday,J.value=l.sex,Y.value=l.status,w.value=l.type_client,P.value=l.typedocument_id,T.value=(l.department_id??"").toString().padStart(2,"0"),O.value=(l.province_id??"").toString().padStart(4,"0"),G.value=(l.district_id??"").toString().padStart(6,"0"),console.log(n.value.id))}),ie(()=>{H()}),(l,a)=>{const s=E("flat-pickr");return h(),y("div",null,[o(t(ge),{activeModal:C.activeModal,onClose:v,title:"Actualizar Datos del Clientesss",sizeClass:"max-w-6xl",centered:""},{default:c(()=>[e("form",Se,[e("div",Ie,[e("div",null,[o(t(m),{label:"Tipo de cliente"},{default:c(()=>[o(t($),{options:i,modelValue:w.value,"onUpdate:modelValue":a[0]||(a[0]=d=>w.value=d),class:"typecliente-select",placeholder:"Selccione Cliente"},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),{label:"Tipo documento"},{default:c(()=>[o(t($),{options:q,modelValue:P.value,"onUpdate:modelValue":a[1]||(a[1]=d=>P.value=d),class:"typedocument-select"},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),{label:"N° Documento"},{default:c(()=>[o(t(ne),{type:"text",placeholder:"DNI",modelValue:n.value.document,"onUpdate:modelValue":a[2]||(a[2]=d=>n.value.document=d)},{append:c(()=>[o(t(F),{text:"RENIEC",btnClass:"btn-outline-dark",onClick:K(ee,["prevent"])})]),_:1},8,["modelValue"])]),_:1})])]),e("div",$e,[e("div",De,[o(t(m),{label:"Nombre ó Razón Social"},{default:c(()=>[o(t(L),{type:"text",id:"client_fullname",modelValue:n.value.fullname,"onUpdate:modelValue":a[3]||(a[3]=d=>n.value.fullname=d),modelModifiers:{trim:!0},placeholder:"Ingrese Nombre ó Razón Social "},null,8,["modelValue"])]),_:1})]),Ee]),e("div",je,[e("div",null,[o(t(m),null,{default:c(()=>[o(t($),{options:k.value,label:"Departamento",modelValue:t(T),"onUpdate:modelValue":a[4]||(a[4]=d=>U(T)?T.value=d:T=d),class:"department-select",onChange:le},null,8,["options","modelValue"])]),_:1})]),e("div",null,[o(t(m),null,{default:c(()=>[o(t($),{options:N.value,label:"Provincias",modelValue:t(O),"onUpdate:modelValue":a[5]||(a[5]=d=>U(O)?O.value=d:O=d),class:"province-select",onChange:r,placeholder:""},null,8,["options","modelValue"])]),_:1})]),e("div",null,[o(t(m),null,{default:c(()=>[o(t($),{options:b.value,label:"Distritos",modelValue:t(G),"onUpdate:modelValue":a[6]||(a[6]=d=>U(G)?G.value=d:G=d),class:"district-select",placeholder:""},null,8,["options","modelValue"])]),_:1})])]),e("div",Me,[e("div",Ne,[o(t(m),{label:"Dirección"},{default:c(()=>[o(t(L),{type:"text",modelValue:n.value.address,"onUpdate:modelValue":a[7]||(a[7]=d=>n.value.address=d),modelModifiers:{trim:!0},placeholder:"Ingrese Direción"},null,8,["modelValue"])]),_:1})]),Te]),e("div",Ue,[e("div",null,[o(t(m),{label:"Celular"},{default:c(()=>[o(t(L),{type:"text",modelValue:n.value.cellphone,"onUpdate:modelValue":a[8]||(a[8]=d=>n.value.cellphone=d),modelModifiers:{trim:!0},placeholder:"Ingrese N° de celular"},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),{label:"Teléfono fijo"},{default:c(()=>[o(t(L),{type:"text",modelValue:n.value.telephone,"onUpdate:modelValue":a[9]||(a[9]=d=>n.value.telephone=d),modelModifiers:{trim:!0},placeholder:"Ingrese N° de telefono fijo"},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),{label:"Correo electrónico"},{default:c(()=>[o(t(L),{type:"email",modelValue:n.value.email,"onUpdate:modelValue":a[10]||(a[10]=d=>n.value.email=d),modelModifiers:{trim:!0},placeholder:"Ingrese correo electrónico"},null,8,["modelValue"])]),_:1})])]),e("div",Pe,[e("div",null,[o(t(m),{label:"Fecha de nacimiento"},{default:c(()=>[o(s,{modelValue:n.value.date_birthday,"onUpdate:modelValue":a[11]||(a[11]=d=>n.value.date_birthday=d),class:"form-control",id:"date_birthday",placeholder:"yyyy, dd M",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),null,{default:c(()=>[o(t($),{options:B,label:"Estado",modelValue:t(Y),"onUpdate:modelValue":a[12]||(a[12]=d=>U(Y)?Y.value=d:Y=d),class:"state-select",placeholder:"Seleccione"},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),null,{default:c(()=>[o(t($),{options:u,label:"Sexo",modelValue:t(J),"onUpdate:modelValue":a[13]||(a[13]=d=>U(J)?J.value=d:J=d),class:"sexo-select",placeholder:"Seleccione"},null,8,["modelValue"])]),_:1})])]),e("div",Le,[Re,e("div",Ae,[o(t(F),{text:"Cancelar",btnClass:"btn-light mr-2",onClick:K(D,["prevent"])}),o(t(F),{type:"submit",text:"Guardar Cambios",btnClass:"btn-dark",onClick:K(se,["prevent"])})])])])]),_:1},8,["activeModal"])])}}},re=de().headers(),Fe={components:{InputGroup:ne,Button:F,Pagination:xe,Dropdown:pe,Icon:te,MenuItem:fe,EditProject:_e,Card:ue,ProgressBar:me},data(){return{searchTerm:"",clientData:{},showEditModal:!1,advancedTable:ye,current:1,perpage:3,pageRange:10,actions:[{name:"edit",icon:"heroicons:pencil-square",doit:_=>{console.log(_),this.clientData=_,this.showEditModal=!0}},{name:"delete",icon:"heroicons-outline:trash",doit:async _=>{try{await j.delete(`https://thtbackend-production.up.railway.app/api/v1/clients/delete/${_.id}`,re),oe().success("Cliente eliminado correctamente",{timeout:1500}),this.listarHoteles()}catch(g){console.error("Error al eliminar empleado:",g)}}}],columns:[{label:"Nombre	",field:"fullname"},{label:"Documento",field:"document"},{label:"Celular",field:"cellphone"},{label:"Correo",field:"email"},{label:"Action",field:"action"}],projects:[]}},methods:{async reloadCrmTable(){try{await this.listarClientes()}catch(_){console.error("Error al recargar Clientes :",_)}},async listarClientes(){try{const _=await j.get("https://thtbackend-production.up.railway.app/api/v1/clients/list",re);this.projects=_.data.data,oe().success("Clientes listados correctamente",{timeout:1500}),console.log(this.projects)}catch(_){console.error("Error al obtener los datos de los empleados:",_)}}},mounted(){this.listarClientes()}},qe={class:"md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center"},ze=e("h5",null,"Todos los Clientes",-1),Be={class:"flex items-center space-x-3"},Oe={key:0},Ge={class:"flex space-x-3 items-center text-left rtl:space-x-reverse"},Ye={class:"flex-none"},Je={class:"h-10 w-10 rounded-full text-sm bg-[#E0EAFF] dark:bg-slate-700 flex flex-col items-center justify-center font-medium -tracking-[1px]"},He={class:"flex-1 font-medium text-sm leading-4 whitespace-nowrap"},Ke={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Qe={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},We={key:3,class:"block w-full"},Xe={class:"flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1 rtl:space-x-reverse"},Ze=["src","alt"],el=e("div",{class:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center"}," +2 ",-1),ll={key:4,class:"min-w-[220px] block"},tl={class:"flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium mt-3"},ol=e("span",{class:"font-normal"},"12/15 Task Completed",-1),al={key:5,class:"action-btn text-end mr-3"},sl={class:"text-xl"},nl=["onClick"],dl={class:"text-base"},il={class:"py-4 px-3"};function cl(_,g,V,M,f,D){const C=E("Button"),x=E("InputGroup"),v=E("ProgressBar"),k=E("Icon"),b=E("MenuItem"),N=E("Dropdown"),H=E("Pagination"),i=E("vue-good-table"),q=E("EditProject"),B=E("Card");return h(),y("div",null,[o(B,{noborder:""},{default:c(()=>[e("div",qe,[ze,e("div",Be,[o(C,{icon:"heroicons-outline:arrows-up-down",btnClass:"btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm",iconClass:"text-lg",onClick:D.reloadCrmTable},null,8,["onClick"]),o(x,{modelValue:f.searchTerm,"onUpdate:modelValue":g[0]||(g[0]=u=>f.searchTerm=u),placeholder:"Buscar cliente",type:"text",prependIcon:"heroicons-outline:search",merged:""},null,8,["modelValue"])])]),o(i,{class:"-mx-6",columns:f.columns,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:this.projects,"pagination-options":{enabled:!0,perPage:f.perpage},"search-options":{enabled:!0,externalQuery:f.searchTerm},"sort-options":{enabled:!1}},{"table-row":c(u=>[u.column.field=="name"?(h(),y("span",Oe,[e("div",Ge,[e("div",Ye,[e("div",Je,I(u.row.name.charAt(0)+u.row.name.charAt(u.row.name.length-1)),1)]),e("div",He,I(u.row.name.length>20?u.row.name.substring(0,20)+"...":u.row.name),1)])])):A("",!0),u.column.field=="startDate"?(h(),y("span",Ke,I(u.row.startDate),1)):A("",!0),u.column.field=="endDate"?(h(),y("span",Qe,I(u.row.endDate),1)):A("",!0),u.column.field=="assignto"?(h(),y("span",We,[e("div",Xe,[(h(!0),y(W,null,X(u.row.assignto,(n,w)=>(h(),y("div",{class:"h-6 w-6 rounded-full ring-1 ring-slate-100",key:w},[e("img",{src:n.image,alt:n.title,class:"w-full h-full rounded-full"},null,8,Ze)]))),128)),el])])):A("",!0),u.column.field=="progress"?(h(),y("span",ll,[o(v,{value:u.row.progress,barColor:"bg-primary-500"},null,8,["value"]),e("span",tl,[ol,Ve(" "+I(u.row.progress)+"% ",1)])])):A("",!0),u.column.field=="action"?(h(),y("div",al,[o(N,{classMenuItems:" w-[140px]"},{menus:c(()=>[(h(!0),y(W,null,X(f.actions,(n,w)=>(h(),Q(b,{key:w},{default:c(()=>[e("div",{onClick:P=>n.doit(u.row),class:ce(`
                
                  ${n.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center `)},[e("span",dl,[o(k,{icon:n.icon},null,8,["icon"])]),e("span",null,I(n.name),1)],10,nl)]),_:2},1024))),128))]),default:c(()=>[e("div",sl,[o(k,{icon:"heroicons-outline:dots-vertical"})])]),_:2},1024)])):A("",!0)]),"pagination-bottom":c(u=>[e("div",il,[o(H,{total:f.projects.length,current:f.current,"per-page":f.perpage,pageRange:f.pageRange,onPageChanged:g[1]||(g[1]=n=>f.current=n),pageChanged:u.pageChanged,perPageChanged:u.perPageChanged,enableSearch:"",enableSelect:""},null,8,["total","current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options","search-options"]),o(q,{activeModal:f.showEditModal,onClose:g[2]||(g[2]=u=>f.showEditModal=!1),clientData:f.clientData,title:"Actualizar Datos Cliente",onUpdateClientList:D.listarClientes},null,8,["activeModal","clientData","onUpdateClientList"])]),_:1})])}const rl=he(Fe,[["render",cl]]),Z=_=>(ke("data-v-fd73aac9"),_=_(),we(),_),ul={class:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},pl={class:"flex justify-between items-end"},ml={class:"flex space-x-4 items-center rtl:space-x-reverse"},vl={class:"flex-none"},gl={class:"h-10 w-10 rounded-md text-lg bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex flex-col items-center justify-center font-normal capitalize"},hl={class:"font-medium text-base leading-6"},fl={class:"dark:text-slate-200 text-slate-900 max-w-[160px] truncate"},_l={class:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400"},bl=["onClick"],xl={class:"text-base"},yl={class:"text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8"},Vl={class:"flex space-x-4 rtl:space-x-reverse"},Cl=Z(()=>e("span",{class:"block date-label"},"Start date",-1)),kl={class:"block date-text"},wl=Z(()=>e("span",{class:"block date-label"},"Start date",-1)),Sl={class:"block date-text"},Il={class:"ltr:text-right rtl:text-left text-xs text-slate-600 dark:text-slate-300 mb-1 font-medium"},$l={class:"grid grid-cols-2 gap-4 mt-6"},Dl=Z(()=>e("div",{class:"text-slate-400 dark:text-slate-400 text-sm font-normal mb-3"}," Assigned to ",-1)),El={class:"flex justify-start -space-x-1.5 rtl:space-x-reverse"},jl=["src","alt"],Ml=Z(()=>e("div",{class:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center"}," +2 ",-1)),Nl={class:"ltr:text-right rtl:text-left"},Tl={class:"inline-flex items-center space-x-1 bg-danger-500 bg-opacity-[0.16] text-danger-500 text-xs font-normal px-2 py-1 rounded-full rtl:space-x-reverse"},Ul=Z(()=>e("span",null,"days left",-1)),Pl={__name:"Projects-grid",setup(_){const g=ae(),V=Ce(),M=ve(()=>g.projects),f=(C,x)=>{const v=new Date(C);return new Date(x).getDate()-v.getDate()},D=p([{name:"view",icon:"heroicons:eye",doit:()=>{V.push("/app/project-details")}},{name:"Edit",icon:"heroicons-outline:pencil-alt",doit:C=>{g.updateProject(C)}},{name:"Delete",icon:"heroicons-outline:trash",doit:C=>{g.removeProject(C)}}]);return(C,x)=>(h(),y("div",ul,[(h(!0),y(W,null,X(M.value,(v,k)=>(h(),Q(t(ue),{bodyClass:"p-6",key:k},{default:c(()=>[e("header",pl,[e("div",ml,[e("div",vl,[e("div",gl,I(v.name.charAt(0)+v.name.charAt(1)),1)]),e("div",hl,[e("div",fl,I(v.name),1)])]),e("div",null,[o(t(pe),{classMenuItems:" w-[130px]"},{menus:c(()=>[(h(!0),y(W,null,X(D.value,(b,N)=>(h(),Q(t(fe),{key:N},{default:c(()=>[e("div",{onClick:H=>b.doit(v),class:ce(`
                
                  hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  capitalize rtl:space-x-reverse `)},[e("span",xl,[o(t(te),{icon:b.icon},null,8,["icon"])]),e("span",null,I(b.name),1)],8,bl)]),_:2},1024))),128))]),default:c(()=>[e("span",_l,[o(t(te),{icon:"heroicons-outline:dots-vertical"})])]),_:2},1024)])]),e("div",yl,I(v.des),1),e("div",Vl,[e("div",null,[Cl,e("span",kl,I(v.startDate),1)]),e("div",null,[wl,e("span",Sl,I(v.endDate),1)])]),e("div",Il,I(v.progress)+"% ",1),o(t(me),{value:v.progress,barColor:"bg-primary-500"},null,8,["value"]),e("div",$l,[e("div",null,[Dl,e("div",El,[(h(!0),y(W,null,X(v.assignto,(b,N)=>(h(),y("div",{class:"h-6 w-6 rounded-full ring-1 ring-slate-100",key:N},[e("img",{src:b.image,alt:b.title,class:"w-full h-full rounded-full"},null,8,jl)]))),128)),Ml])]),e("div",Nl,[e("span",Tl,[e("span",null,[o(t(te),{icon:"heroicons-outline:clock"})]),e("span",null,I(f(v.startDate,v.endDate)),1),Ul])])])]),_:2},1024))),128))]))}},Ll=he(Pl,[["__scopeId","data-v-fd73aac9"]]),Rl={name:"client_form",id:"client_form",autocomplete:"off",class:"mx-auto space-y-4"},Al={class:"grid grid-cols-3 lg:grid-cols-3 gap-4"},Fl={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},ql={class:"lg:col-span-3"},zl=e("div",{class:"lg:hidden"},null,-1),Bl={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Ol={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Gl={class:"lg:col-span-3"},Yl=e("div",{class:"lg:hidden"},null,-1),Jl={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Hl={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Kl={class:"grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4"},Ql=e("div",{class:"lg:col-span-1"},null,-1),Wl={class:"lg:col-span-3 flex justify-end"},Xl={__name:"ClientAddModal",setup(_){let g=ae();const V=de().headers(),M=oe(),f=()=>{g.closeModal()},D=p([]),C=p([]),x=p([]),v=async()=>{try{const r=await j.get("https://thtbackend-production.up.railway.app/api/v1/ubigeo/departments",V);D.value=r.data.data.map(l=>({value:l.id,label:l.name}))}catch(r){console.error("Error fetching departments:",r)}},k=[{value:1,label:"Natural"},{value:2,label:"Jurídico"}],b=[{value:1,label:"DNI"},{value:2,label:"RUC"},{value:3,label:"PASAPORTE"}],N=[{id:1,label:"Soltero"},{id:2,label:"Casado"},{id:2,label:"Viudo"},{id:2,label:"Divorciado"}],H=[{id:1,label:"Masculino"},{id:2,label:"Femenino"}],i=p({typedocument_id:"",department_id:"",province_id:"",district_id:"",type_client:"",fullname:"",document:"",tradename:"",address:"",email:"",telephone:"",cellphone:"",date_birthday:"",sex:"",status:"",typeDocument:""}),q=p(k[0].value),B=p(b[0].value);let u=p(null),n=p(null),w=p(null),P=p(null),T=p(null);const O=()=>{g.closeModal()},G=()=>{console.log(i.value);const r=document.querySelector(".typecliente-select select");if(r){const a=r.selectedIndex,s=a.toString();r.options[a].text,i.value.type_client=s,console.log("Label seleccionado:",i.value.type_client),console.log("Índice seleccionado como cadena:",s)}else console.log("No se ha seleccionado ninguna opción.");const l=document.querySelector(".typedocument-select select");if(r){const a=l.selectedIndex,s=l.options[a].text;i.value.typedocument_id=a,i.value.typeDocument=s,console.log("Id & Label seleccionado:",i.value.type_client)}else console.log("No se ha seleccionado ninguna opción.");j.post("https://thtbackend-production.up.railway.app/api/v1/clients/create",i.value,{...V}).then(a=>{console.log("Datos guardados exitosamente:",a.data),O(),M.success(a.data.message)}).catch(a=>{console.error("Error al guardar los datos:",a)})},Y=()=>{j.get(`https://thtbackend-production.up.railway.app/api/v1/apidni/${i.value.document}`).then(r=>{console.log("Respuesta de la API DNI:",r.data),i.value.fullname=`${r.data.nombres} ${r.data.apellidoPaterno} ${r.data.apellidoMaterno}`}).catch(r=>{console.error("Error al obtener datos del DNI:",r)})},J=async()=>{try{const r=await j.get(`https://thtbackend-production.up.railway.app/api/v1/ubigeo/provinces/${i.value.department_id}`,V);x.value=r.data.data.map(l=>({value:l.id,label:l.name}))}catch(r){console.error("Error fetching provinces:",r)}},se=async()=>{try{const r=await j.get(`https://thtbackend-production.up.railway.app/api/v1/ubigeo/districts/${i.value.province_id}`,V);C.value=r.data.data.map(l=>({value:l.id,label:l.name}))}catch(r){console.error("Error fetching provinces:",r)}};R(()=>T.value,(r,l)=>{const a=document.querySelector(".sexo-select select");if(a){const s=a.selectedIndex,d=a.options[s].text;i.value.sex=d,console.log("Label seleccionado:",i.value.sex)}else console.log("No se ha seleccionado ninguna opción.")}),R(()=>P.value,(r,l)=>{const a=document.querySelector(".state-select select");if(a){const s=a.selectedIndex,d=a.options[s].text;i.value.status=d,console.log("Label seleccionado:",i.value.status)}else console.log("No se ha seleccionado ninguna opción.")}),R(()=>w.value,(r,l)=>{if(document.querySelector(".district-select select")){const s=r.toString().padStart(6,"0");console.log("Id seleccionado:",s),i.value.district_id=s}else console.log("No se ha seleccionado ninguna opción.")}),R(()=>n.value,(r,l)=>{if(document.querySelector(".province-select select")){const s=r.toString().padStart(4,"0");console.log("Id seleccionado:",s),i.value.province_id=s}else console.log("No se ha seleccionado ninguna opción.")}),R(()=>u.value,(r,l)=>{if(document.querySelector(".department-select select")){const s=r.toString().padStart(2,"0");console.log("Id seleccionado:",s),i.value.department_id=s}else console.log("No se ha seleccionado ninguna opción.")});const ee=p("N° DNI"),le=p("RENIEC");return R(()=>B.value,r=>{const l=document.querySelector(".typedocument-select select");if(l){const a=l.selectedIndex,s=l.options[a],d=l.options[a].text;i.value.typedocument_id=a,i.value.typeDocument=d,ee.value=`N° ${s.textContent}`,le.value=r==="1"?"RENIEC":r==="2"?"SUNAT":"Validar",console.log(i.value.typeDocument)}else console.log("No se ha encontrado el elemento del selector.")}),R(()=>q.value,(r,l)=>{const a=document.querySelector(".typecliente-select select");if(a){const s=a.selectedIndex,d=s.toString();a.options[s].text,i.value.type_client=d,console.log("Label seleccionado:",i.value.type_client),console.log("Índice seleccionado como cadena:",d)}else console.log("No se ha seleccionado ninguna opción.")}),ie(()=>{v()}),(r,l)=>{const a=E("flat-pickr");return h(),y("div",null,[o(t(ge),{activeModal:t(g).addmodal,onClose:t(g).closeModal,title:"Registrar nuevo Cliente",sizeClass:"max-w-4xl",centered:""},{default:c(()=>[e("form",Rl,[e("div",Al,[e("div",null,[o(t(m),{label:"Tipo de cliente"},{default:c(()=>[o(t($),{options:k,modelValue:q.value,"onUpdate:modelValue":l[0]||(l[0]=s=>q.value=s),class:"typecliente-select",placeholder:"Seleccione Cliente"},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),{label:"Tipo documento"},{default:c(()=>[o(t($),{options:b,modelValue:B.value,"onUpdate:modelValue":l[1]||(l[1]=s=>B.value=s),class:"typedocument-select"},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),{label:"N° Documento"},{default:c(()=>[o(t(ne),{type:"text",placeholder:ee.value,modelValue:i.value.document,"onUpdate:modelValue":l[2]||(l[2]=s=>i.value.document=s)},{append:c(()=>[o(t(F),{text:le.value,btnClass:"btn-outline-dark",onClick:K(Y,["prevent"])},null,8,["text"])]),_:1},8,["placeholder","modelValue"])]),_:1})])]),e("div",Fl,[e("div",ql,[o(t(m),{label:"Nombre ó Razón Social"},{default:c(()=>[o(t(L),{type:"text",id:"client_fullname",modelValue:i.value.fullname,"onUpdate:modelValue":l[3]||(l[3]=s=>i.value.fullname=s),modelModifiers:{trim:!0},placeholder:"Ingrese Nombre ó Razón Social "},null,8,["modelValue"])]),_:1})]),zl]),e("div",Bl,[e("div",null,[o(t(m),null,{default:c(()=>[o(t($),{options:D.value,label:"Departamento",modelValue:t(u),"onUpdate:modelValue":l[4]||(l[4]=s=>U(u)?u.value=s:u=s),class:"department-select",onChange:J},null,8,["options","modelValue"])]),_:1})]),e("div",null,[o(t(m),null,{default:c(()=>[o(t($),{options:x.value,label:"Provincias",modelValue:t(n),"onUpdate:modelValue":l[5]||(l[5]=s=>U(n)?n.value=s:n=s),class:"province-select",onChange:se,placeholder:""},null,8,["options","modelValue"])]),_:1})]),e("div",null,[o(t(m),null,{default:c(()=>[o(t($),{options:C.value,label:"Distritos",modelValue:t(w),"onUpdate:modelValue":l[6]||(l[6]=s=>U(w)?w.value=s:w=s),class:"district-select",placeholder:""},null,8,["options","modelValue"])]),_:1})])]),e("div",Ol,[e("div",Gl,[o(t(m),{label:"Dirección"},{default:c(()=>[o(t(L),{type:"text",modelValue:i.value.address,"onUpdate:modelValue":l[7]||(l[7]=s=>i.value.address=s),modelModifiers:{trim:!0},placeholder:"Ingrese Direción"},null,8,["modelValue"])]),_:1})]),Yl]),e("div",Jl,[e("div",null,[o(t(m),{label:"Celular"},{default:c(()=>[o(t(L),{type:"text",modelValue:i.value.cellphone,"onUpdate:modelValue":l[8]||(l[8]=s=>i.value.cellphone=s),modelModifiers:{trim:!0},placeholder:"Ingrese N° de celular"},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),{label:"Teléfono fijo"},{default:c(()=>[o(t(L),{type:"text",modelValue:i.value.telephone,"onUpdate:modelValue":l[9]||(l[9]=s=>i.value.telephone=s),modelModifiers:{trim:!0},placeholder:"Ingrese N° de telefono fijo"},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),{label:"Correo electrónico"},{default:c(()=>[o(t(L),{type:"email",modelValue:i.value.email,"onUpdate:modelValue":l[10]||(l[10]=s=>i.value.email=s),modelModifiers:{trim:!0},placeholder:"Ingrese correo electrónico"},null,8,["modelValue"])]),_:1})])]),e("div",Hl,[e("div",null,[o(t(m),{label:"Fecha de nacimiento"},{default:c(()=>[o(a,{modelValue:i.value.date_birthday,"onUpdate:modelValue":l[11]||(l[11]=s=>i.value.date_birthday=s),class:"form-control",id:"date_birthday",placeholder:"yyyy, dd M",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),null,{default:c(()=>[o(t($),{options:N,label:"Estado",modelValue:t(P),"onUpdate:modelValue":l[12]||(l[12]=s=>U(P)?P.value=s:P=s),class:"state-select",placeholder:"Seleccione"},null,8,["modelValue"])]),_:1})]),e("div",null,[o(t(m),null,{default:c(()=>[o(t($),{options:H,label:"Sexo",modelValue:t(T),"onUpdate:modelValue":l[13]||(l[13]=s=>U(T)?T.value=s:T=s),class:"sexo-select",placeholder:"Seleccione"},null,8,["modelValue"])]),_:1})])]),e("div",Kl,[Ql,e("div",Wl,[o(t(F),{text:"Cancelar",btnClass:"btn-light mr-2",onClick:K(f,["prevent"])}),o(t(F),{type:"submit",text:"Guardar Cambios",btnClass:"btn-dark",onClick:K(G,["prevent"])})])])])]),_:1},8,["activeModal","onClose"])])}}},Zl={class:"flex flex-wrap justify-between items-center mb-4"},Mt={__name:"banking",setup(_){const g=ae();let V=p("list");const M=()=>{g.openProject()},f=p(0),D=()=>{f.value=window.innerWidth};ie(()=>{window.addEventListener("resize",D),D()});const C=ve(()=>g.projects),x=p(!0),v=p(!1);return setTimeout(()=>{x.value=!1},1e3),R(V,(k,b)=>{k!==b&&(k==="list"?(x.value=!0,v.value=!1):(x.value=!1,v.value=!0),setTimeout(()=>{x.value=!1,v.value=!1},1e3))}),(k,b)=>(h(),y("div",null,[e("div",Zl,[e("div",{class:ce(["md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse",f.value<768?"space-x-rb":""])},[o(t(F),{icon:"heroicons:list-bullet",text:"Vista de Lista",btnClass:`${t(V)==="list"?"bg-slate-900 dark:bg-slate-700  text-white":" bg-white dark:bg-slate-800 dark:text-slate-300"}   h-min text-sm font-normal`,iconClass:" text-lg",onClick:b[0]||(b[0]=N=>U(V)?V.value="list":V="list"),isLoading:x.value,isDisabled:x.value},null,8,["btnClass","isLoading","isDisabled"]),o(t(F),{icon:"heroicons-outline:plus",text:"Agregar Cliente",btnClass:"btn-dark dark:bg-slate-800  h-min text-sm font-normal",iconClass:" text-lg",onClick:M,isLoading:t(g).isLoading},null,8,["isLoading"])],2)]),x.value?(h(),Q(t(be),{key:0,count:C.value.length},null,8,["count"])):A("",!0),t(V)==="grid"&&!v.value?(h(),Q(t(Ll),{key:1})):A("",!0),t(V)==="list"&&!x.value?(h(),Q(t(rl),{key:2})):A("",!0),o(Xl),o(_e)]))}};export{Mt as default};