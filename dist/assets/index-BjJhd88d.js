import{I as U}from"./index-BcFOD9Ey.js";/* empty css                                              */import{B as S}from"./index-DCMPjbua.js";import{T as Z}from"./Table-CxPcO8df.js";import{C as F}from"./index-Hsd0Z0_R.js";import{D as q}from"./index-DFq5MbAK.js";import{P as ee}from"./index-vl95iEIB.js";import{P as H}from"./index-C66Q9vME.js";import{a as te}from"./basic-tablle-data-AN7MRnVF.js";import{u as L}from"./project-DZP6XSnf.js";import{I as B}from"./index-DCC49QXr.js";import{b as z,u as A,q as C,G as J,o as u,l as I,h as n,f as e,w as j,e as a,j as t,d as f,p as k,J as D,c as V,F as R,m as T,n as N,t as w,a as ae,K,z as le,A as oe,H as se,I as re}from"./index-BLl1OigC.js";import{F as _}from"./index-I9bOp0dW.js";import{M as O}from"./index-MSlXG-Ka.js";import{T as y}from"./index-BTHsGrD3.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as W}from"./menu-CM83wd2-.js";import"./index-DPFbVGd7.js";import"./user-1-Dmhlt7-s.js";import"./user-4-_9lLfOE2.js";import"./user-6-Bk4CTUVR.js";import"./av-2-D6_jNZbn.js";import"./v4-D8aEg3BZ.js";import"./vue-cleave.min-DAvglPmz.js";import"./transition-CNElC_4N.js";import"./focus-management-Dc3XsveG.js";import"./keyboard-9WePWYgZ.js";import"./use-outside-click-CPWvQZIF.js";import"./hidden-BR_kr5_G.js";import"./micro-task-CxIZtCgj.js";import"./open-closed-0CPOhxDd.js";import"./use-resolve-button-type-BwPomRAb.js";const ne={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},ie={key:0,class:"text-red-500"},de={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},ce={key:0,class:"text-red-500"},ue={key:0,class:"text-red-500"},pe={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},me={class:"form-group col-lg-12 form__footerBtn"},ve={class:"text-right"},X={__name:"PartnerCompanyEditModal",props:{activeModal:Boolean,empresaSociaData:Object},emits:["close","updateEmpresaSociaList"],setup(p,{emit:d}){L();const h=z(),M=A().headers(),o=p,x=d,m=()=>{x("close")},l=C({id:"",tradename:"",document:"",fullname:"",cellphone:"",telephone:"",email:"",address:""}),i=()=>{D.post(`https://thtbackend-production.up.railway.app/api/v1/partnercompanies/edit/${l.value.id}`,l.value,{...M}).then(s=>{console.log("Datos guardados exitosamente:",s.data),x("updateEmpresaSociaList"),m(),h.success(s.data.message)}).catch(s=>{console.error("Error al guardar los datos:",s)})},b=s=>!!l.value[s],r=s=>b(s);C(!1);const c=()=>{D.get(`https://thtbackend-production.up.railway.app/api/v1/apiruc/${l.value.document}`).then(s=>{console.log("Respuesta de la API RUC:",s.data),l.value.fullname=s.data.razonSocial,l.value.address=s.data.direccion}).catch(s=>{console.error("Error al obtener datos del DNI:",s)})};return J(()=>o.empresaSociaData,s=>{s&&(l.value.id=s.id,l.value.tradename=s.tradename,l.value.document=s.document,l.value.fullname=s.fullname,l.value.cellphone=s.cellphone,l.value.telephone=s.telephone,l.value.email=s.email,l.value.address=s.address)}),(s,v)=>(u(),I(t(O),{activeModal:o.activeModal,onClose:m,title:"Acualizar Registro de Empresa Socia",sizeClass:"max-w-3xl",centered:""},{default:n(()=>[e("form",{onSubmit:j(i,["prevent"]),class:"space-y-4"},[e("div",ne,[e("div",null,[a(t(_),{label:"N° RUC"},{default:n(()=>[a(t(B),{type:"text",placeholder:"Ingrese el número de RUC",modelValue:l.value.document,"onUpdate:modelValue":v[0]||(v[0]=g=>l.value.document=g),modelModifiers:{trim:!0}},{append:n(()=>[a(t(S),{text:"Sunat",btnClass:"btn-outline-dark ",onClick:j(c,["prevent"])})]),_:1},8,["modelValue"]),r("document")?k("",!0):(u(),f("span",ie,"Por favor ingresa un RUC valido"))]),_:1})]),e("div",null,[a(t(_),{label:"Razón social"},{default:n(()=>[a(t(y),{type:"text",placeholder:"Ingrese la razón social",name:"client_fullname",modelValue:l.value.fullname,"onUpdate:modelValue":v[1]||(v[1]=g=>l.value.fullname=g),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})])]),e("div",de,[e("div",null,[a(t(_),{label:"Nombre de la empresa"},{default:n(()=>[a(t(y),{type:"text",placeholder:"Ingrese el nombre de la empresa",name:"client_tradename",modelValue:l.value.tradename,"onUpdate:modelValue":v[2]||(v[2]=g=>l.value.tradename=g),modelModifiers:{trim:!0}},null,8,["modelValue"]),r("tradename")?k("",!0):(u(),f("span",ce,"Por favor ingresa un nombre valido"))]),_:1})]),e("div",null,[a(t(_),{label:"Celular"},{default:n(()=>[a(t(y),{type:"text",placeholder:"Ingrese el número de celular",modelValue:l.value.cellphone,"onUpdate:modelValue":v[3]||(v[3]=g=>l.value.cellphone=g),modelModifiers:{trim:!0}},null,8,["modelValue"]),r("cellphone")?k("",!0):(u(),f("span",ue,"Por favor ingresa un número valido"))]),_:1})]),e("div",null,[a(t(_),{label:"Teléfono fijo"},{default:n(()=>[a(t(y),{type:"text",placeholder:"Ingrese el número de teléfono fijo",name:"client_telephone",modelValue:l.value.telephone,"onUpdate:modelValue":v[4]||(v[4]=g=>l.value.telephone=g),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})])]),e("div",pe,[e("div",null,[a(t(_),{label:"Correo electrónico"},{default:n(()=>[a(t(y),{type:"email",placeholder:"Ingrese el correo electrónico",name:"client_email",modelValue:l.value.email,"onUpdate:modelValue":v[5]||(v[5]=g=>l.value.email=g),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})]),e("div",null,[a(t(_),{label:"Dirección"},{default:n(()=>[a(t(y),{type:"text",placeholder:"Dirección Completa",name:"client_address",modelValue:l.value.address,"onUpdate:modelValue":v[6]||(v[6]=g=>l.value.address=g),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})])]),e("div",me,[e("div",ve,[a(t(S),{text:"Cancelar",btnClass:"btn-light mr-2",onClick:j(m,["prevent"])}),a(t(S),{type:"submit",text:"Guardar",btnClass:"btn-dark"})])])],32)]),_:1},8,["activeModal"]))}},G=A().headers(),ge={components:{Button:S,InputGroup:B,Pagination:ee,Dropdown:q,EditProject:X,Icon:U,MenuItem:W,Card:F,ProgressBar:H},data(){return{searchTerm:"",empresaSociaData:{},showEditModal:!1,advancedTable:te,current:1,perpage:6,pageRange:10,actions:[{name:"edit",icon:"heroicons:pencil-square",doit:p=>{console.log(p),this.empresaSociaData=p,this.showEditModal=!0}},{name:"delete",icon:"heroicons-outline:trash",doit:async p=>{try{await D.delete(`https://thtbackend-production.up.railway.app/api/v1/partnercompanies/delete/${p.id}`,G),z().success("Empresa Socia eliminada correctamente",{timeout:1500}),this.listarEmpresasSocias()}catch(d){console.error("Error al eliminar empleado:",d)}}}],columns:[{label:"Nomnre Empresa",field:"tradename"},{label:"N° Documento",field:"document"},{label:"Celular",field:"cellphone"},{label:"Dirección",field:"address"},{label:"Action",field:"action"}],projects:[]}},methods:{async reloadCrmTable(){try{await this.listarEmpresasSocias()}catch(p){console.error("Error al recargar Emresas Socias :",p)}},async listarEmpresasSocias(){try{const p=await D.get("https://thtbackend-production.up.railway.app/api/v1/partnercompanies/list",G);this.projects=p.data.data,z().success("Empresas Socias listadas correctamente",{timeout:1500}),console.log(this.projects)}catch(p){console.error("Error al obtener los datos de los empleados:",p)}}},mounted(){this.listarEmpresasSocias()}},fe={class:"md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center"},he=e("h5",null,"Todos las Empresas Socias ",-1),_e={class:"flex items-center space-x-3"},xe={key:0,class:"action-btn text-end mr-3"},be={class:"text-xl"},ye=["onClick"],Ce={class:"text-base"},ke={class:"py-4 px-3"};function Ve(p,d,h,M,o,x){const m=V("Button"),l=V("InputGroup"),i=V("Icon"),b=V("MenuItem"),r=V("Dropdown"),c=V("Pagination"),s=V("vue-good-table"),v=V("EditProject"),g=V("Card");return u(),f("div",null,[a(g,{noborder:""},{default:n(()=>[e("div",fe,[he,e("div",_e,[a(m,{icon:"heroicons-outline:arrows-up-down",btnClass:"btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm",iconClass:"text-lg",onClick:x.reloadCrmTable},null,8,["onClick"]),a(l,{modelValue:o.searchTerm,"onUpdate:modelValue":d[0]||(d[0]=E=>o.searchTerm=E),placeholder:"Buscar empresa",type:"text",prependIcon:"heroicons-outline:search",merged:""},null,8,["modelValue"])])]),a(s,{class:"-mx-6",columns:o.columns,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:this.projects,"pagination-options":{enabled:!0,perPage:o.perpage},"search-options":{enabled:!0,externalQuery:o.searchTerm},"sort-options":{enabled:!1}},{"table-row":n(E=>[E.column.field=="action"?(u(),f("div",xe,[a(r,{classMenuItems:" w-[140px]"},{menus:n(()=>[(u(!0),f(R,null,T(o.actions,($,Y)=>(u(),I(b,{key:Y},{default:n(()=>[e("div",{onClick:dt=>$.doit(E.row),class:N(`
                
                  ${$.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center `)},[e("span",Ce,[a(i,{icon:$.icon},null,8,["icon"])]),e("span",null,w($.name),1)],10,ye)]),_:2},1024))),128))]),default:n(()=>[e("div",be,[a(i,{icon:"heroicons-outline:dots-vertical"})])]),_:2},1024)])):k("",!0)]),"pagination-bottom":n(E=>[e("div",ke,[a(c,{total:o.projects.length,current:o.current,"per-page":o.perpage,pageRange:o.pageRange,onPageChanged:d[1]||(d[1]=$=>o.current=$),pageChanged:E.pageChanged,perPageChanged:E.perPageChanged,enableSearch:"",enableSelect:""},null,8,["total","current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options","search-options"]),a(v,{activeModal:o.showEditModal,onClose:d[2]||(d[2]=E=>o.showEditModal=!1),empresaSociaData:o.empresaSociaData,title:"Acualizar Registro de Empresa Socia",onUpdateEmpresaSociaList:x.listarEmpresasSocias},null,8,["activeModal","empresaSociaData","onUpdateEmpresaSociaList"])]),_:1})])}const we=Q(ge,[["render",Ve]]),P=p=>(le("data-v-7ac35cf6"),p=p(),oe(),p),Se={class:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},Me={class:"flex justify-between items-end"},Ee={class:"flex space-x-4 items-center rtl:space-x-reverse"},Ie={class:"flex-none"},$e={class:"h-10 w-10 rounded-md text-lg bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex flex-col items-center justify-center font-normal capitalize"},je={class:"font-medium text-base leading-6"},De={class:"dark:text-slate-200 text-slate-900 max-w-[160px] truncate"},Pe={class:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400"},Ue=["onClick"],Re={class:"text-base"},Te={class:"text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8"},ze={class:"flex space-x-4 rtl:space-x-reverse"},Le=P(()=>e("span",{class:"block date-label"},"Start date",-1)),Be={class:"block date-text"},Ae=P(()=>e("span",{class:"block date-label"},"Start date",-1)),Ne={class:"block date-text"},Ge={class:"ltr:text-right rtl:text-left text-xs text-slate-600 dark:text-slate-300 mb-1 font-medium"},Fe={class:"grid grid-cols-2 gap-4 mt-6"},qe=P(()=>e("div",{class:"text-slate-400 dark:text-slate-400 text-sm font-normal mb-3"}," Assigned to ",-1)),He={class:"flex justify-start -space-x-1.5 rtl:space-x-reverse"},Je=["src","alt"],Ke=P(()=>e("div",{class:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center"}," +2 ",-1)),Oe={class:"ltr:text-right rtl:text-left"},Qe={class:"inline-flex items-center space-x-1 bg-danger-500 bg-opacity-[0.16] text-danger-500 text-xs font-normal px-2 py-1 rounded-full rtl:space-x-reverse"},We=P(()=>e("span",null,"days left",-1)),Xe={__name:"Projects-grid",setup(p){const d=L(),h=ae(),M=K(()=>d.projects),o=(m,l)=>{const i=new Date(m);return new Date(l).getDate()-i.getDate()},x=C([{name:"view",icon:"heroicons:eye",doit:()=>{h.push("/app/project-details")}},{name:"Edit",icon:"heroicons-outline:pencil-alt",doit:m=>{d.updateProject(m)}},{name:"Delete",icon:"heroicons-outline:trash",doit:m=>{d.removeProject(m)}}]);return(m,l)=>(u(),f("div",Se,[(u(!0),f(R,null,T(M.value,(i,b)=>(u(),I(t(F),{bodyClass:"p-6",key:b},{default:n(()=>[e("header",Me,[e("div",Ee,[e("div",Ie,[e("div",$e,w(i.name.charAt(0)+i.name.charAt(1)),1)]),e("div",je,[e("div",De,w(i.name),1)])]),e("div",null,[a(t(q),{classMenuItems:" w-[130px]"},{menus:n(()=>[(u(!0),f(R,null,T(x.value,(r,c)=>(u(),I(t(W),{key:c},{default:n(()=>[e("div",{onClick:s=>r.doit(i),class:N(`
                
                  hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  capitalize rtl:space-x-reverse `)},[e("span",Re,[a(t(U),{icon:r.icon},null,8,["icon"])]),e("span",null,w(r.name),1)],8,Ue)]),_:2},1024))),128))]),default:n(()=>[e("span",Pe,[a(t(U),{icon:"heroicons-outline:dots-vertical"})])]),_:2},1024)])]),e("div",Te,w(i.des),1),e("div",ze,[e("div",null,[Le,e("span",Be,w(i.startDate),1)]),e("div",null,[Ae,e("span",Ne,w(i.endDate),1)])]),e("div",Ge,w(i.progress)+"% ",1),a(t(H),{value:i.progress,barColor:"bg-primary-500"},null,8,["value"]),e("div",Fe,[e("div",null,[qe,e("div",He,[(u(!0),f(R,null,T(i.assignto,(r,c)=>(u(),f("div",{class:"h-6 w-6 rounded-full ring-1 ring-slate-100",key:c},[e("img",{src:r.image,alt:r.title,class:"w-full h-full rounded-full"},null,8,Je)]))),128)),Ke])]),e("div",Oe,[e("span",Qe,[e("span",null,[a(t(U),{icon:"heroicons-outline:clock"})]),e("span",null,w(o(i.startDate,i.endDate)),1),We])])])]),_:2},1024))),128))]))}},Ye=Q(Xe,[["__scopeId","data-v-7ac35cf6"]]),Ze={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},et={key:0,class:"text-red-500"},tt={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},at={key:0,class:"text-red-500"},lt={key:0,class:"text-red-500"},ot={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},st={class:"form-group col-lg-12 form__footerBtn"},rt={class:"text-right"},nt={__name:"PartnerCompanyAddModal",setup(p){const d=L(),h=z(),M=A().headers(),o=C({tradename:"",document:"",fullname:"",cellphone:"",telephone:"",email:"",address:""});C(null),C(null);const x=()=>{D.post("https://thtbackend-production.up.railway.app/api/v1/partnercompanies/create",o.value,{...M}).then(r=>{console.log("Datos guardados exitosamente:",r.data),i(),h.success(r.data.message)}).catch(r=>{console.error("Error al guardar los datos:",r)})},m=r=>!!o.value[r],l=r=>m(r),i=()=>{d.closeModal()};C(!1);const b=()=>{D.get(`https://thtbackend-production.up.railway.app/api/v1/apiruc/${o.value.document}`).then(r=>{console.log("Respuesta de la API RUC:",r.data),o.value.fullname=r.data.razonSocial,o.value.address=r.data.direccion}).catch(r=>{console.error("Error al obtener datos del DNI:",r)})};return(r,c)=>(u(),I(t(O),{activeModal:t(d).addmodal,onClose:t(d).closeModal,title:"Registrar nueva Empresa Socia",sizeClass:"max-w-4xl",centered:""},{default:n(()=>[e("form",{onSubmit:j(x,["prevent"]),class:"space-y-4"},[e("div",Ze,[e("div",null,[a(t(_),{label:"N° RUC"},{default:n(()=>[a(t(B),{type:"text",placeholder:"Ingrese el número de RUC",modelValue:o.value.document,"onUpdate:modelValue":c[0]||(c[0]=s=>o.value.document=s),modelModifiers:{trim:!0}},{append:n(()=>[a(t(S),{text:"Sunat",btnClass:"btn-outline-dark ",onClick:j(b,["prevent"])})]),_:1},8,["modelValue"]),l("document")?k("",!0):(u(),f("span",et,"Por favor ingresa un RUC valido"))]),_:1})]),e("div",null,[a(t(_),{label:"Razón social"},{default:n(()=>[a(t(y),{type:"text",placeholder:"Ingrese la razón social",name:"client_fullname",modelValue:o.value.fullname,"onUpdate:modelValue":c[1]||(c[1]=s=>o.value.fullname=s),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})])]),e("div",tt,[e("div",null,[a(t(_),{label:"Nombre de la empresa"},{default:n(()=>[a(t(y),{type:"text",placeholder:"Ingrese el nombre de la empresa",name:"client_tradename",modelValue:o.value.tradename,"onUpdate:modelValue":c[2]||(c[2]=s=>o.value.tradename=s),modelModifiers:{trim:!0}},null,8,["modelValue"]),l("tradename")?k("",!0):(u(),f("span",at,"Por favor ingresa un nombre valido"))]),_:1})]),e("div",null,[a(t(_),{label:"Celular"},{default:n(()=>[a(t(y),{type:"text",placeholder:"Ingrese el número de celular",modelValue:o.value.cellphone,"onUpdate:modelValue":c[3]||(c[3]=s=>o.value.cellphone=s),modelModifiers:{trim:!0}},null,8,["modelValue"]),l("cellphone")?k("",!0):(u(),f("span",lt,"Por favor ingresa un número valido"))]),_:1})]),e("div",null,[a(t(_),{label:"Teléfono fijo"},{default:n(()=>[a(t(y),{type:"text",placeholder:"Ingrese el número de teléfono fijo",name:"client_telephone",modelValue:o.value.telephone,"onUpdate:modelValue":c[4]||(c[4]=s=>o.value.telephone=s),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})])]),e("div",ot,[e("div",null,[a(t(_),{label:"Correo electrónico"},{default:n(()=>[a(t(y),{type:"email",placeholder:"Ingrese el correo electrónico",name:"client_email",modelValue:o.value.email,"onUpdate:modelValue":c[5]||(c[5]=s=>o.value.email=s),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})]),e("div",null,[a(t(_),{label:"Dirección"},{default:n(()=>[a(t(y),{type:"text",placeholder:"Dirección Completa",name:"client_address",modelValue:o.value.address,"onUpdate:modelValue":c[6]||(c[6]=s=>o.value.address=s),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})])]),e("div",st,[e("div",rt,[a(t(S),{text:"Cancelar",btnClass:"btn-light mr-2",onClick:j(i,["prevent"])}),a(t(S),{type:"submit",text:"Guardar",btnClass:"btn-dark"})])])],32)]),_:1},8,["activeModal","onClose"]))}},it={class:"flex flex-wrap justify-between items-center mb-4"},Gt={__name:"index",setup(p){const d=L();let h=C("list");const M=()=>{d.openProject()},o=C(0),x=()=>{o.value=window.innerWidth};se(()=>{window.addEventListener("resize",x),x()});const m=K(()=>d.projects),l=C(!0),i=C(!1);return setTimeout(()=>{l.value=!1},1e3),J(h,(b,r)=>{b!==r&&(b==="list"?(l.value=!0,i.value=!1):(l.value=!1,i.value=!0),setTimeout(()=>{l.value=!1,i.value=!1},1e3))}),(b,r)=>(u(),f("div",null,[e("div",it,[e("div",{class:N(["md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse",o.value<768?"space-x-rb":""])},[a(t(S),{icon:"heroicons:list-bullet",text:"Vista de Lista",btnClass:`${t(h)==="list"?"bg-slate-900 dark:bg-slate-700  text-white":" bg-white dark:bg-slate-800 dark:text-slate-300"}   h-min text-sm font-normal`,iconClass:" text-lg",onClick:r[0]||(r[0]=c=>re(h)?h.value="list":h="list"),isLoading:l.value,isDisabled:l.value},null,8,["btnClass","isLoading","isDisabled"]),a(t(S),{icon:"heroicons-outline:plus",text:"Agregar Empresa Socia",btnClass:"btn-dark dark:bg-slate-800  h-min text-sm font-normal",iconClass:" text-lg",onClick:M,isLoading:t(d).isLoading},null,8,["isLoading"])],2)]),l.value?(u(),I(t(Z),{key:0,count:m.value.length},null,8,["count"])):k("",!0),t(h)==="grid"&&!i.value?(u(),I(t(Ye),{key:1})):k("",!0),t(h)==="list"&&!l.value?(u(),I(t(we),{key:2})):k("",!0),a(nt),a(X)]))}};export{Gt as default};
