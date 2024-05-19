import{C as j}from"./index-Hsd0Z0_R.js";import{I as A}from"./index-BcFOD9Ey.js";import{S as q}from"./index-DPFbVGd7.js";import{T as G}from"./index-BTHsGrD3.js";import{C as Q}from"./index-lgafHr2M.js";import{B as z}from"./index-DCMPjbua.js";import{F as Y}from"./index-I9bOp0dW.js";import{q as J}from"./vue-tailwind-datepicker-DbcSElnr.js";import{u as R,J as b,d as s,e as a,h as u,c as m,o as l,F as h,m as L,l as P,f as r,i as x,t as i,n as X,w as f,p as d}from"./index-BLl1OigC.js";import{P as K}from"./index-vl95iEIB.js";import{S as W}from"./index-PQ3jKUI0.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as $,p as ee,x as te,I as oe,y as ne}from"./tabs-CkhIUISu.js";import"./vue-cleave.min-DAvglPmz.js";import"./keyboard-9WePWYgZ.js";import"./use-resolve-button-type-BwPomRAb.js";import"./hidden-BR_kr5_G.js";import"./focus-management-Dc3XsveG.js";import"./micro-task-CxIZtCgj.js";const w=R().headers();R().headersMultipart();const le={components:{Switch:W,Card:j,TabGroup:$,Textinput:G,FromGroup:Y,VueTailwindDatePicker:J,Checkbox:Q,Button:z,TabList:ee,Tab:te,Pagination:K,TabPanels:oe,TabPanel:ne,Select:q,Icon:A},data(){const o=new Date,p=new Date(o.getFullYear(),o.getMonth(),1).toISOString().split("T")[0]+" 00:00:00",t=new Date(o.getFullYear(),o.getMonth()+1,0).toISOString().split("T")[0]+" 23:59:59";return{searchTerm:"",current:1,perpage:10,pageRange:10,applyForEntireMonth:!1,branchOptions:[{value:1,label:"Caja  Principal"}],conceptOptions:[],conceptExpenseOptions:[],paymentOptions:[],documentTypeOptions:[{value:1,label:"EXCEL"}],selectedBranch:1,selectedConcept:"",selectedPaymentMethod:"",selectedDocumentType:1,includeVoucher:!1,buttons:[{title:"Ingresos",icon:"heroicons-outline:currency-dollar",content:"Contenido de la pestaña Ingresos"},{title:"Egresos",icon:"heroicons-outline:arrow-circle-down",content:"Contenido de la pestaña Egresos"},{title:"Ingresos & Egresos",icon:"heroicons-outline:arrow-circle-down",content:"Contenido de la pestaña Egresos"}],dateValue:{startDate:p,endDate:t},selectedTabIndex:null,ingresos:[],egresos:[],incomeexpense:[],columns:[{label:"N° ingreso",field:"NumeroIngreso"},{label:"Usuario",field:"Usuario"},{label:"Fecha",field:"Fecha"},{label:"Caja",field:"Caja"},{label:"Emisor",field:"Emisor"},{label:"Concepto",field:"Concepto"},{label:"Método pago	",field:"MetodoPago"},{label:"Monto ",field:"Monto"}],columnsExpense:[{label:"N° egreso",field:"NumeroIngreso"},{label:"Usuario",field:"Usuario"},{label:"Fecha",field:"Fecha"},{label:"Caja",field:"Caja"},{label:"Receptor",field:"Receptor"},{label:"Concepto",field:"Concepto"},{label:"Método pago	",field:"MetodoPago"},{label:"Monto ",field:"Monto"}],isVoucherChecked:!1}},methods:{async getData(){try{const o=await b.get("https://thtbackend-production.up.railway.app/api/v1/exports/filters-income",{params:{start_range:this.dateValue.startDate,end_range:this.dateValue.endDate,branchoffice:this.selectedBranch,is_voucher_external:this.isVoucherChecked?1:0,concept_income:this.selectedConcept,payment_method:this.selectedPaymentMethod},...w});this.ingresos=o.data,console.log(o)}catch(o){console.error("Error al obtener datos:",o)}},async getDataPorMes(){try{const o=await b.get("https://thtbackend-production.up.railway.app/api/v1/exports/filters-todos",{params:{start_range:this.dateValue.startDate,end_range:this.dateValue.endDate,branchoffice:this.selectedBranch},...w});this.ingresos=o.data,console.log(o)}catch(o){console.error("Error al obtener datos:",o)}},async getDataIncomeAndExpensePorMes(){try{const o=await b.get("https://thtbackend-production.up.railway.app/api/v1/exports/filters-income-and-expense",{params:{start_range:this.dateValue.startDate,end_range:this.dateValue.endDate,branchoffice:this.selectedBranch,payment_method:this.selectedPaymentMethod},...w});this.incomeexpense=o.data,console.log(this.ingresos)}catch(o){console.error("Error al obtener datos:",o)}},async getDataExpense(){try{const o=await b.get("https://thtbackend-production.up.railway.app/api/v1/exports/filters-expense",{params:{start_range:this.dateValue.startDate,end_range:this.dateValue.endDate,branchoffice:this.selectedBranch,is_voucher_external:this.isVoucherChecked?1:0,concept_income:this.selectedConcept,payment_method:this.selectedPaymentMethod},...w});this.egresos=o.data,console.log(o)}catch(o){console.error("Error al obtener datos:",o)}},async getDataExpensePorMes(){try{const o=await b.get("https://thtbackend-production.up.railway.app/api/v1/exports/filters-todos-expense",{params:{start_range:this.dateValue.startDate,end_range:this.dateValue.endDate,branchoffice:this.selectedBranch},...w});this.egresos=o.data,console.log(o)}catch(o){console.error("Error al obtener datos:",o)}},async downloadFile(){try{const o=await b.get("https://thtbackend-production.up.railway.app/api/v1/export-money-excel",{params:{start_range:this.dateValue.startDate,end_range:this.dateValue.endDate,branchoffice:this.selectedBranch,is_voucher_external:this.isVoucherChecked?1:0,concept_income:this.selectedConcept,payment_method:this.selectedPaymentMethod},responseType:"blob"});console.log(o);const n=o.request.responseURL,p=new URL(n),c=document.createElement("a");c.href=p,c.setAttribute("download","archivo.xlsx"),c.style.display="none",document.body.appendChild(c),c.click(),document.body.removeChild(c),console.log("Descarga iniciada automáticamente.")}catch(o){console.error("Error al descargar el archivo:",o)}},async downloadFilePorMes(){try{const o=await b.get("https://thtbackend-production.up.railway.app/api/v1/export-money-excel-todos",{params:{start_range:this.dateValue.startDate,end_range:this.dateValue.endDate,branchoffice:this.selectedBranch},responseType:"blob"});console.log(o);const n=o.request.responseURL,p=new URL(n),c=document.createElement("a");c.href=p,c.setAttribute("download","archivo.xlsx"),c.style.display="none",document.body.appendChild(c),c.click(),document.body.removeChild(c),console.log("Descarga iniciada automáticamente.")}catch(o){console.error("Error al descargar el archivo:",o)}},async downloadFile2(){try{const o=await b.get("https://thtbackend-production.up.railway.app/api/v1/export-money-excel-expense",{params:{start_range:this.dateValue.startDate,end_range:this.dateValue.endDate,branchoffice:this.selectedBranch,is_voucher_external:this.isVoucherChecked?1:0,concept_income:this.selectedConcept,payment_method:this.selectedPaymentMethod},responseType:"blob"});console.log(o);const n=o.request.responseURL,p=new URL(n),c=document.createElement("a");c.href=p,c.setAttribute("download","archivo.xlsx"),c.style.display="none",document.body.appendChild(c),c.click(),document.body.removeChild(c),console.log("Descarga iniciada automáticamente.")}catch(o){console.error("Error al descargar el archivo:",o)}},async downloadFile2PorMes(){try{const o=await b.get("https://thtbackend-production.up.railway.app/api/v1/export-money-excel-expense-todos",{params:{start_range:this.dateValue.startDate,end_range:this.dateValue.endDate,branchoffice:this.selectedBranch},responseType:"blob"});console.log(o);const n=o.request.responseURL,p=new URL(n),c=document.createElement("a");c.href=p,c.setAttribute("download","archivo.xlsx"),c.style.display="none",document.body.appendChild(c),c.click(),document.body.removeChild(c),console.log("Descarga iniciada automáticamente.")}catch(o){console.error("Error al descargar el archivo:",o)}},async downloadFileIncomeAndExpense(){try{const o=await b.get("https://thtbackend-production.up.railway.app/api/v1/export-money-por-mensual-income-and-expense",{params:{start_range:this.dateValue.startDate,end_range:this.dateValue.endDate,branchoffice:this.selectedBranch,payment_method:this.selectedPaymentMethod},responseType:"blob"});console.log(o);const n=o.request.responseURL,p=new URL(n),c=document.createElement("a");c.href=p,c.setAttribute("download","archivo.xlsx"),c.style.display="none",document.body.appendChild(c),c.click(),document.body.removeChild(c),console.log("Descarga iniciada automáticamente.")}catch(o){console.error("Error al descargar el archivo:",o)}},toggleVoucher(){this.isVoucherChecked=!this.isVoucherChecked,console.log(this.isVoucherChecked)},async fetchConceptsIncome(){try{const n=(await b.get("https://thtbackend-production.up.railway.app/api/v1/moneys/income-concepts",w)).data.data.map(p=>({value:p.id,label:p.description}));console.log(n),this.conceptOptions=n}catch(o){console.error("Error al obtener datos:",o)}},async fetchConceptsExpense(){try{const n=(await b.get("https://thtbackend-production.up.railway.app/api/v1/moneys/expense-concepts",w)).data.data.map(p=>({value:p.id,label:p.description}));console.log(n),this.conceptExpenseOptions=n}catch(o){console.error("Error al obtener datos:",o)}},async fetchMetodosPago(){try{const n=(await b.get("https://thtbackend-production.up.railway.app/api/v1/paymentmethods/list",w)).data.data.map(p=>({value:p.id,label:p.description}));console.log(n),this.paymentOptions=n}catch(o){console.error("Error al obtener datos:",o)}}},mounted(){this.fetchConceptsIncome(),this.fetchConceptsExpense(),this.fetchMetodosPago()},watch:{applyForEntireMonth(o){console.log(o?"Aplicar para todos del Mes activado":"Aplicar para todos del Mes desactivado")}}},se={class:"grid grid-cols-1 gap-5 charts"},ae=["onClick"],re={class:"text-base relative top-[1px] ltr:mr-1 rtl:ml-1"},ce={key:0,class:"text-slate-600 dark:text-slate-400 text-sm font-normal"},ie={class:"row"},de={key:0},pe={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},ue={key:0,class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5"},me={class:"col-span-full flex justify-center items-center"},he={key:1,class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5"},ge={class:"col-span-full flex justify-center items-center"},be={key:0,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},xe={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},ye={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},_e={key:3,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},fe={key:4,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},ke=r("br",null,null,-1),we=["innerHTML"],Ce=r("br",null,null,-1),ve=["innerHTML"],Ve=r("br",null,null,-1),Me=["innerHTML"],Te={key:5,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},De={key:6,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Pe={key:7,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Ee={class:"py-4 px-3"},Fe={key:1},Ue={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},Le={key:0,class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5"},Re={class:"col-span-full flex justify-center items-center"},Ie={key:1,class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5"},Oe={class:"col-span-full flex justify-center items-center"},Be={key:0,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Ne={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Se={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},He={key:3,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},je={key:4,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Ae=r("br",null,null,-1),qe=["innerHTML"],Ge=r("br",null,null,-1),Qe=["innerHTML"],ze=r("br",null,null,-1),Ye=["innerHTML"],Je={key:5,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Xe={key:6,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Ke={key:7,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},We={class:"py-4 px-3"},Ze={key:2},$e={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},et={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5"},tt={class:"col-span-full flex justify-center items-center"},ot={key:0,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},nt={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},lt={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},st={key:3,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},at={key:4,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},rt=r("br",null,null,-1),ct=["innerHTML"],it=r("br",null,null,-1),dt=["innerHTML"],pt=r("br",null,null,-1),ut=["innerHTML"],mt={key:5,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},ht={key:6,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},gt={key:7,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},bt={class:"py-4 px-3"},xt={class:"space-y-6"},yt={class:"flex space-x-3 items-center rtl:space-x-reverse"},_t={class:"flex-none h-8 w-8 rounded-full bg-slate-800 dark:bg-slate-700 text-slate-300 flex flex-col items-center justify-center text-lg"},ft=r("div",{class:"flex-1 text-base text-slate-900 dark:text-white font-medium"}," Reportes control de Caja ",-1),kt=r("div",{class:"text-slate-600 dark:text-slate-300 text-sm"}," Seleccione una opción de reporte ",-1);function wt(o,n,p,c,t,y){const E=m("Icon"),I=m("Tab"),O=m("TabList"),g=m("Select"),M=m("VueTailwindDatePicker"),V=m("FromGroup"),F=m("Switch"),_=m("Button"),T=m("Pagination"),D=m("vue-good-table"),B=m("Checkbox"),U=m("Card"),N=m("TabPanel"),S=m("TabPanels"),H=m("TabGroup");return l(),s("div",se,[a(U,{title:"Reportes"},{default:u(()=>[a(H,null,{default:u(()=>[a(O,{class:"lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse"},{default:u(()=>[(l(!0),s(h,null,L(t.buttons,(C,k)=>(l(),P(I,{key:k},{default:u(()=>[r("button",{class:X([{"text-primary-500":t.selectedTabIndex===k,"text-slate-500 dark:text-slate-300":t.selectedTabIndex!==k,"font-bold":t.selectedTabIndex===k,"font-normal":t.selectedTabIndex!==k},"inline-flex items-start text-sm mb-7 capitalize bg-white dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-primary-500 before:-translate-x-1/2"]),onClick:e=>t.selectedTabIndex=k},[r("span",re,[a(E,{icon:C.icon},null,8,["icon"])]),x(" "+i(C.title),1)],10,ae)]),_:2},1024))),128))]),_:1}),a(S,null,{default:u(()=>[(l(!0),s(h,null,L(t.buttons,(C,k)=>(l(),P(N,{key:k},{default:u(()=>[t.selectedTabIndex===k?(l(),s("div",ce,[r("div",ie,[C.title==="Ingresos"?(l(),s("div",de,[r("div",pe,[a(g,{label:"Sucursal",name:"branch",options:t.branchOptions,modelValue:t.selectedBranch,"onUpdate:modelValue":n[0]||(n[0]=e=>t.selectedBranch=e)},null,8,["options","modelValue"]),a(V,{label:"Rango de Fechas",name:"d1"},{default:u(()=>[a(M,{modelValue:t.dateValue,"onUpdate:modelValue":n[1]||(n[1]=e=>t.dateValue=e),"input-classes":"form-control"},null,8,["modelValue"])]),_:1}),a(g,{label:"Concepto de Ingreso",name:"incomeConcept",options:t.conceptOptions,modelValue:t.selectedConcept,"onUpdate:modelValue":n[2]||(n[2]=e=>t.selectedConcept=e)},null,8,["options","modelValue"]),a(g,{label:"Método de Pago",name:"paymentMethod",options:t.paymentOptions,modelValue:t.selectedPaymentMethod,"onUpdate:modelValue":n[3]||(n[3]=e=>t.selectedPaymentMethod=e)},null,8,["options","modelValue"]),a(F,{label:"Aplicar para todos del Mes",modelValue:t.applyForEntireMonth,"onUpdate:modelValue":n[4]||(n[4]=e=>t.applyForEntireMonth=e),class:"mb-5"},null,8,["modelValue"])]),r("div",null,[t.applyForEntireMonth?(l(),s("div",ue,[r("div",me,[a(_,{icon:"heroicons-outline:filter",text:"Filtrar por Mes",onClick:f(y.getDataPorMes,["prevent"]),btnClass:"bg-green-500 text-white mr-4 text-sm",iconClass:"text-lg"},null,8,["onClick"]),a(g,{name:"documentType",options:t.documentTypeOptions,modelValue:t.selectedDocumentType,"onUpdate:modelValue":n[5]||(n[5]=e=>t.selectedDocumentType=e)},null,8,["options","modelValue"]),a(_,{icon:"heroicons-outline:download",btnClass:"bg-green-700 text-white ml-4 text-sm",onClick:f(y.downloadFilePorMes,["prevent"]),iconClass:"text-lg"},null,8,["onClick"])])])):(l(),s("div",he,[r("div",ge,[a(_,{icon:"heroicons-outline:filter",text:"Filtar",onClick:f(y.getData,["prevent"]),btnClass:"bg-green-500 text-white mr-4 text-sm",iconClass:"text-lg"},null,8,["onClick"]),a(g,{name:"documentType",options:t.documentTypeOptions,modelValue:t.selectedDocumentType,"onUpdate:modelValue":n[6]||(n[6]=e=>t.selectedDocumentType=e)},null,8,["options","modelValue"]),a(_,{icon:"heroicons-outline:download",btnClass:"bg-green-700 text-white ml-4 text-sm",onClick:f(y.downloadFile,["prevent"]),iconClass:"text-lg"},null,8,["onClick"])])]))]),a(D,{class:"-mx-6 mt-5",columns:t.columns,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:this.ingresos,"pagination-options":{enabled:!0,perPage:t.perpage},"search-options":{enabled:!0,externalQuery:t.searchTerm},"sort-options":{enabled:!1}},{"table-row":u(e=>[e.column.field=="NumeroIngreso"?(l(),s("span",be,i(e.row.nro_voucher),1)):d("",!0),e.column.field=="Usuario"?(l(),s("span",xe,i(e.row.user.name),1)):d("",!0),e.column.field=="Fecha"?(l(),s("span",ye,i(e.row.date_movement),1)):d("",!0),e.column.field=="Caja"?(l(),s("span",_e,i(e.row.branch_office.description),1)):d("",!0),e.column.field=="Emisor"?(l(),s("span",fe,[r("div",null,[e.row.client?(l(),s(h,{key:0},[x(" C- "+i(e.row.client.fullname),1),ke,r("span",{class:"font-bold",innerHTML:"N° Doc "+e.row.client.document},null,8,we)],64)):e.row.employee?(l(),s(h,{key:1},[x(" E- "+i(e.row.employee.fullname),1),Ce,r("span",{class:"font-bold",innerHTML:"N° Doc "+e.row.employee.document},null,8,ve)],64)):e.row.provider?(l(),s(h,{key:2},[x(" P- "+i(e.row.provider.fullname),1),Ve,r("span",{class:"font-bold",innerHTML:"N° Doc "+e.row.provider.document},null,8,Me)],64)):(l(),s(h,{key:3},[x(" No hay información disponible ")],64))])])):d("",!0),e.column.field=="Concepto"?(l(),s("span",Te,i(e.row.concept.description),1)):d("",!0),e.column.field=="MetodoPago"?(l(),s("span",De,i(e.row.payment_method.description),1)):d("",!0),e.column.field=="Monto"?(l(),s("span",Pe,i(e.row.amount),1)):d("",!0)]),"pagination-bottom":u(e=>[r("div",Ee,[a(T,{total:t.ingresos.length,current:t.current,"per-page":t.perpage,pageRange:t.pageRange,onPageChanged:n[7]||(n[7]=v=>t.current=v),pageChanged:e.pageChanged,perPageChanged:e.perPageChanged,enableSearch:"",enableSelect:""},null,8,["total","current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options","search-options"])])):C.title==="Egresos"?(l(),s("div",Fe,[r("div",Ue,[a(g,{label:"Sucursal",name:"branch",options:t.branchOptions,modelValue:t.selectedBranch,"onUpdate:modelValue":n[8]||(n[8]=e=>t.selectedBranch=e)},null,8,["options","modelValue"]),a(V,{label:"Rango de Fechas",name:"d1"},{default:u(()=>[a(M,{modelValue:t.dateValue,"onUpdate:modelValue":n[9]||(n[9]=e=>t.dateValue=e),"input-classes":"form-control"},null,8,["modelValue"])]),_:1}),a(g,{label:"Concepto de Egreso",name:"incomeConcept",options:t.conceptExpenseOptions,modelValue:t.selectedConcept,"onUpdate:modelValue":n[10]||(n[10]=e=>t.selectedConcept=e)},null,8,["options","modelValue"]),a(g,{label:"Método de Pago",name:"paymentMethod",options:t.paymentOptions,modelValue:t.selectedPaymentMethod,"onUpdate:modelValue":n[11]||(n[11]=e=>t.selectedPaymentMethod=e)},null,8,["options","modelValue"]),a(V,{label:"Comprobante",class:"block"},{default:u(()=>[a(B,{label:"Incluye Comprobante",checked:t.isVoucherChecked,onChange:y.toggleVoucher},null,8,["checked","onChange"])]),_:1}),a(F,{label:"Aplicar para todos del Mes",modelValue:t.applyForEntireMonth,"onUpdate:modelValue":n[12]||(n[12]=e=>t.applyForEntireMonth=e),class:"mb-5"},null,8,["modelValue"])]),r("div",null,[t.applyForEntireMonth?(l(),s("div",Le,[r("div",Re,[a(_,{icon:"heroicons-outline:filter",text:"Filtrar por Mes",onClick:f(y.getDataExpensePorMes,["prevent"]),btnClass:"bg-green-500 text-white mr-4 text-sm",iconClass:"text-lg"},null,8,["onClick"]),a(g,{name:"documentType",options:t.documentTypeOptions,modelValue:t.selectedDocumentType,"onUpdate:modelValue":n[13]||(n[13]=e=>t.selectedDocumentType=e)},null,8,["options","modelValue"]),a(_,{icon:"heroicons-outline:download",btnClass:"bg-green-700 text-white ml-4 text-sm",onClick:f(y.downloadFile2PorMes,["prevent"]),iconClass:"text-lg"},null,8,["onClick"])])])):(l(),s("div",Ie,[r("div",Oe,[a(_,{icon:"heroicons-outline:filter",text:"Filtar",onClick:f(y.getDataExpense,["prevent"]),btnClass:"bg-green-500 text-white mr-4 text-sm",iconClass:"text-lg"},null,8,["onClick"]),a(g,{name:"documentType",options:t.documentTypeOptions,modelValue:t.selectedDocumentType,"onUpdate:modelValue":n[14]||(n[14]=e=>t.selectedDocumentType=e)},null,8,["options","modelValue"]),a(_,{icon:"heroicons-outline:download",btnClass:"bg-green-700 text-white ml-4 text-sm",iconClass:"text-lg",onClick:f(y.downloadFile2,["prevent"])},null,8,["onClick"])])]))]),a(D,{class:"-mx-6 mt-5",columns:t.columnsExpense,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:this.egresos,"pagination-options":{enabled:!0,perPage:t.perpage},"search-options":{enabled:!0,externalQuery:t.searchTerm},"sort-options":{enabled:!1}},{"table-row":u(e=>[e.column.field=="NumeroIngreso"?(l(),s("span",Be,i(e.row.nro_voucher),1)):d("",!0),e.column.field=="Usuario"?(l(),s("span",Ne,i(e.row.user.name),1)):d("",!0),e.column.field=="Fecha"?(l(),s("span",Se,i(e.row.date_movement),1)):d("",!0),e.column.field=="Caja"?(l(),s("span",He,i(e.row.branch_office.description),1)):d("",!0),e.column.field=="Receptor"?(l(),s("span",je,[r("div",null,[e.row.client?(l(),s(h,{key:0},[x(" C- "+i(e.row.client.fullname),1),Ae,r("span",{class:"font-bold",innerHTML:"N° Doc "+e.row.client.document},null,8,qe)],64)):e.row.employee?(l(),s(h,{key:1},[x(" E- "+i(e.row.employee.fullname),1),Ge,r("span",{class:"font-bold",innerHTML:"N° Doc "+e.row.employee.document},null,8,Qe)],64)):e.row.provider?(l(),s(h,{key:2},[x(" P- "+i(e.row.provider.fullname),1),ze,r("span",{class:"font-bold",innerHTML:"N° Doc "+e.row.provider.document},null,8,Ye)],64)):(l(),s(h,{key:3},[x(" No hay información disponible ")],64))])])):d("",!0),e.column.field=="Concepto"?(l(),s("span",Je,i(e.row.concept.description),1)):d("",!0),e.column.field=="MetodoPago"?(l(),s("span",Xe,i(e.row.payment_method.description),1)):d("",!0),e.column.field=="Monto"?(l(),s("span",Ke,i(e.row.amount),1)):d("",!0)]),"pagination-bottom":u(e=>[r("div",We,[a(T,{total:t.egresos.length,current:t.current,"per-page":t.perpage,pageRange:t.pageRange,onPageChanged:n[15]||(n[15]=v=>t.current=v),pageChanged:e.pageChanged,perPageChanged:e.perPageChanged,enableSearch:"",enableSelect:""},null,8,["total","current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options","search-options"])])):C.title==="Ingresos & Egresos"?(l(),s("div",Ze,[r("div",$e,[a(g,{label:"Sucursal",name:"branch",options:t.branchOptions,modelValue:t.selectedBranch,"onUpdate:modelValue":n[16]||(n[16]=e=>t.selectedBranch=e)},null,8,["options","modelValue"]),a(V,{label:"Rango de Fechas",name:"d1"},{default:u(()=>[a(M,{modelValue:t.dateValue,"onUpdate:modelValue":n[17]||(n[17]=e=>t.dateValue=e),"input-classes":"form-control"},null,8,["modelValue"])]),_:1}),a(g,{label:"Método de Pago",name:"paymentMethod",options:t.paymentOptions,modelValue:t.selectedPaymentMethod,"onUpdate:modelValue":n[18]||(n[18]=e=>t.selectedPaymentMethod=e)},null,8,["options","modelValue"])]),r("div",null,[r("div",et,[r("div",tt,[a(_,{icon:"heroicons-outline:filter",text:"Filtar",onClick:f(y.getDataIncomeAndExpensePorMes,["prevent"]),btnClass:"bg-green-500 text-white mr-4 text-sm",iconClass:"text-lg"},null,8,["onClick"]),a(g,{name:"documentType",options:t.documentTypeOptions,modelValue:t.selectedDocumentType,"onUpdate:modelValue":n[19]||(n[19]=e=>t.selectedDocumentType=e)},null,8,["options","modelValue"]),a(_,{icon:"heroicons-outline:download",btnClass:"bg-green-700 text-white ml-4 text-sm",iconClass:"text-lg",onClick:f(y.downloadFileIncomeAndExpense,["prevent"])},null,8,["onClick"])])])]),a(D,{class:"-mx-6 mt-5",columns:t.columnsExpense,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:this.incomeexpense,"pagination-options":{enabled:!0,perPage:t.perpage},"search-options":{enabled:!0,externalQuery:t.searchTerm},"sort-options":{enabled:!1}},{"table-row":u(e=>[e.column.field=="NumeroIngreso"?(l(),s("span",ot,i(e.row.nro_voucher),1)):d("",!0),e.column.field=="Usuario"?(l(),s("span",nt,i(e.row.user.name),1)):d("",!0),e.column.field=="Fecha"?(l(),s("span",lt,i(e.row.date_movement),1)):d("",!0),e.column.field=="Caja"?(l(),s("span",st,i(e.row.branch_office.description),1)):d("",!0),e.column.field=="Receptor"?(l(),s("span",at,[r("div",null,[e.row.client?(l(),s(h,{key:0},[x(" C- "+i(e.row.client.fullname),1),rt,r("span",{class:"font-bold",innerHTML:"N° Doc "+e.row.client.document},null,8,ct)],64)):e.row.employee?(l(),s(h,{key:1},[x(" E- "+i(e.row.employee.fullname),1),it,r("span",{class:"font-bold",innerHTML:"N° Doc "+e.row.employee.document},null,8,dt)],64)):e.row.provider?(l(),s(h,{key:2},[x(" P- "+i(e.row.provider.fullname),1),pt,r("span",{class:"font-bold",innerHTML:"N° Doc "+e.row.provider.document},null,8,ut)],64)):(l(),s(h,{key:3},[x(" No hay información disponible ")],64))])])):d("",!0),e.column.field=="Concepto"?(l(),s("span",mt,i(e.row.concept.description),1)):d("",!0),e.column.field=="MetodoPago"?(l(),s("span",ht,i(e.row.payment_method.description),1)):d("",!0),e.column.field=="Monto"?(l(),s("span",gt,i(e.row.amount),1)):d("",!0)]),"pagination-bottom":u(e=>[r("div",bt,[a(T,{total:t.incomeexpense.length,current:t.current,"per-page":t.perpage,pageRange:t.pageRange,onPageChanged:n[20]||(n[20]=v=>t.current=v),pageChanged:e.pageChanged,perPageChanged:e.perPageChanged,enableSearch:"",enableSelect:""},null,8,["total","current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options","search-options"])])):d("",!0)])])):(l(),P(U,{key:1},{default:u(()=>[r("div",xt,[r("div",yt,[r("div",_t,[a(E,{icon:"heroicons-outline:cash",class:"m-l-5"})]),ft]),kt])]),_:1}))]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const At=Z(le,[["render",wt]]);export{At as default};