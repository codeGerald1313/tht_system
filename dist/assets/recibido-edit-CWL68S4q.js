import{B as S}from"./index-DCMPjbua.js";import{C as N}from"./index-Hsd0Z0_R.js";import{F}from"./index-I9bOp0dW.js";import{I as U}from"./index-BcFOD9Ey.js";import{u as D,J as g,b as y,d as c,f as s,e as i,h,c as m,o as u,p,t as f,w as z,i as j,z as B,A as O}from"./index-BLl1OigC.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as G}from"./index-BTHsGrD3.js";import{C as L}from"./index-lgafHr2M.js";import{I as J}from"./index-DCC49QXr.js";import{S as X}from"./index-DPFbVGd7.js";import{_ as K,C as Q,A as W,E as Y}from"./ModalAddReserve-Skdiss-h.js";import{D as Z}from"./index-DFq5MbAK.js";import{P as $}from"./index-C66Q9vME.js";import{u as ee}from"./project-DZP6XSnf.js";import{V as oe}from"./VueSelect-DI5dOEtm.js";import{M as te}from"./index-MSlXG-Ka.js";import{a as le}from"./basic-tablle-data-AN7MRnVF.js";import{b as se}from"./menu-CM83wd2-.js";import"./vue-cleave.min-DAvglPmz.js";import"./index-B_wjOnuw.js";/* empty css                                              */import"./TotalTable-Da2l-zhh.js";import"./index-CwPxZwdQ.js";import"./av-2-D6_jNZbn.js";import"./v4-D8aEg3BZ.js";import"./VueSelect.vue_vue_type_style_index_0_lang-B1s-zvio.js";import"./transition-CNElC_4N.js";import"./focus-management-Dc3XsveG.js";import"./keyboard-9WePWYgZ.js";import"./use-outside-click-CPWvQZIF.js";import"./hidden-BR_kr5_G.js";import"./micro-task-CxIZtCgj.js";import"./open-closed-0CPOhxDd.js";import"./user-1-Dmhlt7-s.js";import"./user-4-_9lLfOE2.js";import"./user-6-Bk4CTUVR.js";import"./use-resolve-button-type-BwPomRAb.js";const _=D().headers(),ie={components:{Dropdown:Z,Select:X,Button:S,FromGroup:F,EditProject:K,ComisionarModal:Q,AmortizarModal:W,EditProject2:Y,Textinput:G,Modal:te,Checkbox:L,InputGroup:J,Icon:U,VueSelect:oe,MenuItem:se,Card:N,ProgressBar:$},data(){return{advancedTable:le,idsReservesHotels:[],commissionIds:[],moneyIds:[],searchTerm:"",showEditModal:!1,showReserveModal:!1,selectedTour:null,store:null,formattedTotal:"S/.0.00",formattedTotalHotel:"S/.0.00",totalHotelValue:"0.00",reservasHotel:[],projects:[],filteredRows:[],includeBreakfast:!1,book:{is_breakfast:!1,nro_breakfast:"",start_breakfast:"",end_breakfast:""},originsbooking:[],originsReserve:[{value:1,label:"Sin Asignar"},{value:2,label:"Aeropuerto"},{value:3,label:"Terminar Terrestre"},{value:4,label:"Otros"}],toursOptions:[],customerOptions:[],showReferences:!1,nro_pax_childs:"",nro_pax_adults:"",nro_pax_olds:"",current:1,basicTableData:[{codigo:"HRS2024-000231",nombreHotel:"HOTEL POSADA LODGE (TARAPOTO)",detallehotel:"HAB. TRIPLE (AC) (2 hab. x 6 noches)",contacto:"Cel: 963122673"}],client:{document:"",fullname:"",tradename:"",address:"",cellphone:"",telephone:"",email:"",date_birthday:""},tour:{esAbierto:null,tourDescription:null,vehiculo:null,turno:null,nPasajseros:null,fechaTour:null,observacion:null,realizado:null,totalTour:"0.00"},booking:{clients:null,agency_id:null,phoneNumber:null,originReserve:null,numPassengers:null,referenciar:!1,numChildren:null,numAdults:null,numSeniors:null,dateTimeArrival:null,dateArrival:null,timeArrival:null,arrivalBy:null,placeArrivalReference:null,voucherReference:null,emergencyContact:null,emergencyPhone:null,observations:null,isFavorite:!1,includeBreakfast:!1,numBreakfasts:null,startDate:null,endDate:null,total:null},perpage:3,idCliente:null,show:!1,showEdit:!1,showAmortizar:!1,showComisionar:!1,show2:!1,realizado:"--",pageRange:10,actions:[{name:"edit",icon:"heroicons:pencil-square",doit:o=>{this.openModalEdit(o)}},{name:"delete",icon:"heroicons-outline:trash",doit:o=>{this.removeProject(o)}}],vehiculos:[{value:1,label:"Compartido"},{value:2,label:"Privado"}],turnos:[{value:1,label:"Full Day"},{value:2,label:"Mañana"},{value:3,label:"Tarde"},{value:4,label:"Noche"}],columns:[{label:"¿Es Abierto?",field:"abierto"},{label:"Tours Turístico",field:"tour"},{label:"Vehículo",field:"vehiculo"},{label:"Turno",field:"turno"},{label:"N° pax",field:"pasajero"},{label:"Fecha",field:"fecha"},{label:"Observación",field:"observation"},{label:"Realizado",field:"realizado"},{label:"Action",field:"action"}],columnsReservaHotelExpense:[{label:"Habitacion",field:"habitacion"},{label:"N° PAX	",field:"pasajeross"},{label:"Cant. HAB",field:"cantidad"},{label:"Check-In",field:"checkin"},{label:"Check-out",field:"checkout"},{label:"#Noches",field:"noches"},{label:"Precio",field:"precio"},{label:"Descuento",field:"descuento"},{label:"Adicional",field:"adicional"},{label:"Observación",field:"observacion"},{label:"Subtotal",field:"subtotal"},{label:"",field:"action"}],selectedTourDescription:"",tourOptions:[],totalBooking:null,bedroomOptions:[],rows:[{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"}],columnsReservasAlojamiento:[{label:"Código",field:"code",type:"text",html:!0,width:"100px"},{label:"Nombre del Hotel",field:"nombreHotel",type:"text",html:!0,width:"150px"},{label:"Detalle del Hotel",field:"detallehotel",type:"text",html:!0,width:"250px"},{label:"Acciones",field:"action",type:"text",html:!0,width:"120px"}]}},watch:{selectedTour(o,e){o!==e&&(this.projects.find(r=>r.id===o)?y().warning("¡Este tour ya está seleccionado!"):g.get(`https://thtbackend-production.up.railway.app/api/v1/tours/description/${o}`,_).then(r=>{const t={id:o,description:r.data.data,esAbierto:null,vehiculo:null,turno:null,nPasajseros:null,fechaTour:null,observacion:null,realizado:null,totalTour:null};this.projects.push(t),console.log(this.projects)}).catch(r=>{console.error("Error al obtener la descripción del tour:",r)}))},"booking.clients":function(o,e){this.idCliente=o,console.log(this.idCliente),g.get(`https://thtbackend-production.up.railway.app/api/v1/clients/cellphone&telephone/${o}`,_).then(n=>{console.log(n),this.booking.phoneNumber=n.data.contact_numbers}).catch(n=>{console.error("Error al obtener la descripción del tour:",n)})},"booking.dateTimeArrival"(o){if(o){const[e,n]=o.split(" ");this.booking.dateArrival=e,this.booking.timeArrival=n,console.log(this.booking.dateArrival),console.log(this.booking.timeArrival)}else this.booking.dateArrival=null,this.booking.timeArrival=null},"tour.totalTour":function(o){const e=parseFloat(o);(!isNaN(e)||o==="")&&(this.formattedTotal="S/."+(o===""?"0.00":e.toFixed(2)))},totalHotelValue(o){const e=parseFloat(o);(!isNaN(e)||o==="")&&(this.formattedTotalHotel="S/."+(o===""?"0.00":e.toFixed(2)))},$route:{immediate:!0,handler(o,e){const n=o.params.recibido_id,r=JSON.parse(o.query.recivied_data);console.log("ID del la reserva recibida:",n),console.log("Data de la reserva recibida:",r)}}},async created(){await this.fetchClients()},computed:{totalReserva(){const o=isNaN(parseFloat(this.formattedTotal.substring(3)))?0:parseFloat(this.formattedTotal.substring(3)),e=isNaN(parseFloat(this.formattedTotalHotel.substring(3)))?0:parseFloat(this.formattedTotalHotel.substring(3)),n=o+e,r=n.toFixed(2);return this.booking.total=r,console.log(this.booking.total),"S/."+n.toFixed(2)}},methods:{capturarDatos(){console.log(this.projects)},fetchAgencies(){g.get("https://thtbackend-production.up.railway.app/api/v1/agencies/list",_).then(o=>{this.originsbooking=o.data.data.map(e=>({value:e.id,label:e.fullname})),console.log(o)}).catch(o=>{console.error("Error al obtener las agencias:",o)})},handleCommissionProcessed(o){const n=[o.data.data.id];this.commissionIds=n,console.log("ID de la comisión:",this.commissionIds)},handleFormSubmitted(o){const n=[o.data.id];this.moneyIds=n,console.log("ID del ingreso amortización:",this.moneyIds)},deleteProject(o){this.projects.splice(o,1),console.log(this.projects)},deleteItem(o,e){window.confirm("¿Estás seguro de que deseas eliminar este elemento?")?g.delete(`https://thtbackend-production.up.railway.app/api/v1/hotelsbookings/destroy/${o}`,_).then(n=>{console.log("El elemento con ID:",o,"se ha eliminado correctamente en el backend"),this.reservasHotel.splice(e,1),y().success("Elemento eliminado con éxito",{position:"top-right"})}).catch(n=>{console.error("Error al eliminar el elemento:",n),y().error("Error al eliminar el elemento",{position:"top-right"})}):console.log("El usuario ha cancelado la eliminación del elemento con ID:",o)},handlePostComplete(o){const e=o.data;Array.isArray(e)?e.forEach(t=>{this.reservasHotel.push(t)}):this.reservasHotel.push(e);const n=this.reservasHotel.map(t=>parseFloat(t.total)),r=this.reservasHotel.map(t=>t.id);this.totalHotelValue=n.reduce((t,d)=>t+d,0),this.idsReservesHotels=r,console.log(this.idsReservesHotels)},handleAction(o){o.name==="edit"&&this.openModalEdit()},saveReserva(){const o={bookingorigin_id:this.booking.originReserve,client_id:this.booking.clients,agency_id:this.booking.agency_id,arrivalplace_id:this.booking.arrivalBy,arrival_place:this.booking.placeArrivalReference,date_arrival:this.booking.dateArrival,time_arrival:this.booking.timeArrival,nro_pax:this.booking.numPassengers,is_reference_pax:this.booking.referenciar,nro_pax_childs:this.booking.numChildren,nro_pax_adults:this.booking.numAdults,nro_pax_olds:this.booking.numSeniors,reference_voucher:this.booking.voucherReference,observations:this.booking.observations,contact_emergency:this.booking.emergencyContact,telephone_emergency:this.booking.emergencyPhone,subtotal_tour:this.tour.totalTour,subtotal_hotel:this.totalHotelValue,total:this.booking.total,is_favorite:this.booking.isFavorite,is_breakfast:this.booking.includeBreakfast,nro_breakfast:this.booking.numBreakfasts,start_breakfast:this.booking.startDate,end_breakfast:this.booking.endDate,tours:this.projects.map(e=>({id:e.id,vehicle_tour:e.vehiculo,shift_tour:e.turno,quantity:e.nPasajseros,date_assigned:e.date_assigned,observation:e.observacion,is_open:e.esAbierto})),hotelsbooking_ids:this.idsReservesHotels,commission_ids:this.commissionIds,money_ids:this.moneyIds};console.log(o),g.post("https://thtbackend-production.up.railway.app/api/v1/bookings/create-recivied",o,{..._}).then(e=>{const n=y();console.log(e.data),n.success(e.data.message,{duration:3e3})}).catch(e=>{y().error("Error al enviar los datos al backend",{duration:3e3})})},toggleReferences(){this.showReferences=!this.showReferences},openModal(){this.showEditModal=!0},openModalEdit(){this.showEdit=!this.showEdit},openModalComisionar(){this.showComisionar=!0},openModalAmortizar(){this.idCliente=this.idCliente,this.totalBooking=this.booking.total,this.showAmortizar=!0,console.log(this.idCliente)},handleComisionEnviada(o){console.log("Datos de la comisión recibidos en el componente padre:",o)},openModalReservaHotel(){this.showReserveModal=!0},async fetchClients(){console.log("Fetching clients...");try{const o=await g.get("https://thtbackend-production.up.railway.app/api/v1/clients/list",_);this.customerOptions=o.data.data.map(e=>({value:e.id,label:e.fullname}))}catch(o){console.error("Error fetching departments:",o)}},async fetchHotelsBooking(){console.log("Fetching HotelsBooking...");try{const o=await g.get("https://thtbackend-production.up.railway.app/api/v1/clients/list",_);this.customerOptions=o.data.data.map(e=>({value:e.id,label:e.fullname}))}catch(o){console.error("Error fetching departments:",o)}},async fetchTours(){console.log("Fetching tours...");try{const o=await g.get("https://thtbackend-production.up.railway.app/api/v1/tours/list",_);console.log(o),this.tourOptions=o.data.data.map(e=>({value:e.id,label:e.description})),console.log(this.projects)}catch(o){console.error("Error fetching tours:",o)}}},created(){this.store=ee()},mounted(){this.fetchClients(),this.fetchTours(),this.fetchAgencies()}},b=o=>(B("data-v-f6aa13c1"),o=o(),O(),o),ne={class:"flex justify-end space-x-4 mb-3"},ae={class:"text-lg"},re=b(()=>s("span",null,"Comisionar",-1)),de={class:"text-lg"},ce=b(()=>s("span",null,"Amortizar(Total)",-1)),ue={class:"grid grid-cols-1 lg:grid-cols-1 gap-5"},me={class:"grid grid-cols-2 gap-5"},pe={class:"flex items-center"},he={class:"grid grid-cols-3 gap-5"},be={key:0},fe={class:"flex items-center"},ge={class:"grid grid-cols-1"},_e={class:"flex flex-col"},ve={class:"border-b border-slate-100 dark:border-slate-700 pb-3 flex justify-between items-center"},ke=b(()=>s("div",{class:"flex items-center"},[s("h6",{class:"card-title mb-0"},"Datos de Tours turístico")],-1)),xe={class:"flex items-center"},ye={class:"flex-grow mr-2"},Ce={key:0},we={class:"flex space-x-3 items-center text-left rtl:space-x-reverse"},Ve={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[208px]"},Ae={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Te={key:3,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},je={key:4,class:"block w-full"},Pe={key:5},Re={key:6},He={key:7},Ee={key:8,class:"action-btn text-end mr-3"},Ie=["onClick"],Me={class:"mt-5 self-end"},Se={class:"grid grid-cols-1"},Ne={class:"flex flex-col"},Fe={class:"md:flex pb-6 items-center"},Ue=b(()=>s("h6",{class:"flex-1 md:mb-0 mb-3"},"Reservas de Alojamiento",-1)),De={class:"md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse"},ze={key:0,class:"text-blue-900 font-bold"},Be={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Oe={class:"font-bold"},qe=b(()=>s("br",null,null,-1)),Ge={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Le={key:3,class:"action-btn text-end mr-3"},Je={class:"text-xl"},Xe={class:"mt-5 self-end"},Ke={class:"grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4"},Qe=b(()=>s("div",{class:"lg:col-span-1"},null,-1)),We={class:"lg:col-span-3 flex justify-end"},Ye={class:"flex justify-center"},Ze={class:"flex justify-center"},$e={class:"w-full"},eo=b(()=>s("th",null,"Total tours",-1)),oo=b(()=>s("th",null,"Total hotel",-1)),to=b(()=>s("tr",null,[s("td",{colspan:"2"},[s("hr",{class:"book__summary__hrdivider"})])],-1)),lo=b(()=>s("th",{class:"text-primary bold text-uppercase f-s-15"},"Total reserva",-1)),so={class:"text-primary bold f-s-15"};function io(o,e,n,r,t,d){const C=m("Icon"),k=m("Select"),w=m("FromGroup"),v=m("Textinput"),x=m("InputGroup"),V=m("Card"),P=m("Checkbox"),R=m("flat-pickr"),T=m("vue-good-table"),A=m("Button"),H=m("EditProject"),E=m("EditProject2"),I=m("ComisionarModal"),M=m("AmortizarModal");return u(),c("div",null,[s("div",ne,[s("button",{class:"invoice-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse",onClick:e[0]||(e[0]=l=>d.openModalComisionar())},[s("span",ae,[i(C,{icon:"heroicons-solid:cash"})]),re]),s("button",{class:"invoice-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse",onClick:e[1]||(e[1]=l=>d.openModalAmortizar())},[s("span",de,[i(C,{icon:"heroicons-solid:banknotes"})]),ce])]),i(V,{title:"Datos Generales"},{default:h(()=>[s("div",ue,[s("div",me,[i(w,{label:"Seleccionar Agencia que esta pasando",class:"flex-1"},{default:h(()=>[i(k,{options:t.originsbooking,modelValue:t.booking.agency_id,"onUpdate:modelValue":e[2]||(e[2]=l=>t.booking.agency_id=l),class:"client-select"},null,8,["options","modelValue"])]),_:1}),s("div",pe,[i(w,{label:"Clientes",class:"flex-1"},{default:h(()=>[i(k,{options:t.customerOptions,modelValue:t.booking.clients,"onUpdate:modelValue":e[3]||(e[3]=l=>t.booking.clients=l),class:"client-select"},null,8,["options","modelValue"])]),_:1}),s("button",{onClick:e[4]||(e[4]=(...l)=>d.openModal&&d.openModal(...l)),class:"ml-2 mt-7 p-2 btn-outline-dark"},"+")])]),s("div",he,[s("div",null,[i(v,{label:"Tel. emergencia",type:"text",placeholder:"Tel. emergencia",modelValue:t.booking.emergencyPhone,"onUpdate:modelValue":e[5]||(e[5]=l=>t.booking.emergencyPhone=l)},null,8,["modelValue"])]),t.booking.referenciar?(u(),c("div",be,[i(w,{label:"Referencia de pasajeros:",class:"flex-1"},{default:h(()=>[s("div",fe,[i(x,{name:"nro_pax_childs",type:"text",placeholder:"N° niños",modelValue:t.booking.numChildren,"onUpdate:modelValue":e[6]||(e[6]=l=>t.booking.numChildren=l),prepend:"#Niños"},null,8,["modelValue"]),i(x,{name:"nro_pax_adults",type:"text",placeholder:"N° adultos",modelValue:t.booking.numAdults,"onUpdate:modelValue":e[7]||(e[7]=l=>t.booking.numAdults=l),prepend:"#Adultos"},null,8,["modelValue"]),i(x,{name:"nro_pax_olds",type:"text",placeholder:"N° ancianos",modelValue:t.booking.numSeniors,"onUpdate:modelValue":e[8]||(e[8]=l=>t.booking.numSeniors=l),prepend:"#Ancianos"},null,8,["modelValue"])])]),_:1})])):p("",!0),i(v,{label:"N° Pax",type:"text",placeholder:"N° pax",modelValue:t.booking.numPassengers,"onUpdate:modelValue":e[9]||(e[9]=l=>t.booking.numPassengers=l)},null,8,["modelValue"]),i(w,{label:"Observaciones"},{default:h(()=>[i(v,{type:"text",placeholder:"Observaciones",modelValue:t.booking.observations,"onUpdate:modelValue":e[10]||(e[10]=l=>t.booking.observations=l)},null,8,["modelValue"])]),_:1})])])]),_:1}),i(V,{class:"mt-4",noborder:""},{default:h(()=>[s("div",ge,[s("div",_e,[s("header",ve,[ke,s("div",xe,[s("div",ye,[i(k,{options:t.tourOptions,modelValue:t.selectedTour,"onUpdate:modelValue":e[11]||(e[11]=l=>t.selectedTour=l),placeholder:"Seleccionar Tipo",class:"w-full"},null,8,["options","modelValue"])])])]),i(T,{class:"-mx-6 mb-5",columns:t.columns,styleClass:" vgt-table  table-head   v-middle striped lesspadding2 listview",rows:t.projects,"pagination-options":{enabled:!1,perPage:t.perpage},"sort-options":{enabled:!1}},{"table-row":h(l=>[l.column.field=="abierto"?(u(),c("span",Ce,[s("div",we,[i(P,{modelValue:t.projects[l.index].esAbierto,"onUpdate:modelValue":a=>t.projects[l.index].esAbierto=a},null,8,["modelValue","onUpdate:modelValue"])])])):p("",!0),l.column.field=="tour"?(u(),c("span",Ve,f(l.row.description),1)):p("",!0),l.column.field=="vehiculo"?(u(),c("span",Ae,[i(k,{options:t.vehiculos,modelValue:t.projects[l.index].vehiculo,"onUpdate:modelValue":a=>t.projects[l.index].vehiculo=a},null,8,["options","modelValue","onUpdate:modelValue"])])):p("",!0),l.column.field=="turno"?(u(),c("span",Te,[i(k,{options:t.turnos,modelValue:t.projects[l.index].turno,"onUpdate:modelValue":a=>t.projects[l.index].turno=a},null,8,["options","modelValue","onUpdate:modelValue"])])):p("",!0),l.column.field=="pasajero"?(u(),c("span",je,[i(v,{type:"text",placeholder:"N° pax",modelValue:t.projects[l.index].nPasajseros,"onUpdate:modelValue":a=>t.projects[l.index].nPasajseros=a},null,8,["modelValue","onUpdate:modelValue"])])):p("",!0),l.column.field=="fecha"?(u(),c("span",Pe,[i(R,{class:"form-control",id:"d1",placeholder:"yyyy, dd M",modelValue:t.projects[l.index].date_assigned,"onUpdate:modelValue":a=>t.projects[l.index].date_assigned=a},null,8,["modelValue","onUpdate:modelValue"])])):p("",!0),l.column.field=="observation"?(u(),c("span",Re,[i(v,{type:"text",placeholder:"Observación",modelValue:t.projects[l.index].observacion,"onUpdate:modelValue":a=>t.projects[l.index].observacion=a},null,8,["modelValue","onUpdate:modelValue"])])):p("",!0),l.column.field=="realizado"?(u(),c("span",He,[i(v,{type:"text",placeholder:"-",modelValue:t.projects[l.index].realizado,"onUpdate:modelValue":a=>t.projects[l.index].realizado=a,disabled:""},null,8,["modelValue","onUpdate:modelValue"])])):p("",!0),l.column.field=="action"?(u(),c("div",Ee,[s("div",{class:"text-xl",onClick:a=>d.deleteProject(l.index)},[i(C,{icon:"heroicons-outline:trash",class:"text-danger-500"})],8,Ie)])):p("",!0)]),_:1},8,["columns","rows","pagination-options"]),s("div",Me,[i(x,{label:"T. TOURS S/. ",class:"append",name:"hi_Fullname",modelValue:t.tour.totalTour,"onUpdate:modelValue":e[12]||(e[12]=l=>t.tour.totalTour=l),type:"text",placeholder:"",horizontal:"",appendIcon:"heroicons-outline:cash",classInput:"text-right"},null,8,["modelValue"])])])])]),_:1}),i(V,{class:"mt-4",noborder:""},{default:h(()=>[s("div",Se,[s("div",Ne,[s("div",Fe,[Ue,s("div",De,[i(A,{icon:"heroicons-outline:plus-sm",text:"Agregar Reserva",btnClass:" btn-dark font-normal btn-sm ",iconClass:"text-lg",onClick:z(d.openModalReservaHotel,["prevent"])},null,8,["onClick"])])]),i(T,{class:"-mx-6",columns:t.columnsReservasAlojamiento,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:this.reservasHotel,"sort-options":{enabled:!1}},{"table-row":h(l=>[l.column.field=="code"?(u(),c("span",ze,f(l.row.code),1)):p("",!0),l.column.field=="nombreHotel"?(u(),c("span",Be,[s("span",Oe,f(l.row.hotel.tradename),1),j("("+f(l.row.hotel.citie_turistic.description)+") ",1),qe,j(" Cell: "+f(l.row.hotel.cellphone),1)])):p("",!0),l.column.field=="detallehotel"?(u(),c("span",Ge,f(l.row.typebedrooms.map(a=>`${a.typebedroom.description} (${a.quantity} hab. x
                ${a.nights} noches)`).join(", ")),1)):p("",!0),l.column.field==="action"?(u(),c("div",Le,[s("div",Je,[i(C,{icon:"heroicons-outline:trash",class:"text-danger-500",onClick:a=>d.deleteItem(l.row.id)},null,8,["onClick"])])])):p("",!0)]),_:1},8,["columns","rows"]),s("div",Xe,[i(x,{label:"T. HOTEL S/. ",class:"append",name:"hi_Fullname",modelValue:t.totalHotelValue,"onUpdate:modelValue":e[13]||(e[13]=l=>t.totalHotelValue=l),type:"text",placeholder:"",horizontal:"",appendIcon:"heroicons-outline:cash",classInput:"text-right"},null,8,["modelValue"])])])])]),_:1}),s("div",Ke,[Qe,s("div",We,[i(A,{text:"Cancelar",btnClass:"btn-light mr-2",onClick:e[14]||(e[14]=l=>o.closeModal())}),i(A,{type:"submit",text:"Guardar Reserva",onClick:e[15]||(e[15]=l=>d.saveReserva()),btnClass:"btn-dark"})])]),s("div",Ye,[i(V,{class:"mb-0 book__summary max-w-md"},{default:h(()=>[s("div",Ze,[s("table",$e,[s("tr",null,[eo,s("td",null,f(t.formattedTotal),1)]),s("tr",null,[oo,s("td",null,f(t.formattedTotalHotel),1)]),to,s("tr",null,[lo,s("td",so,f(d.totalReserva),1)])])])]),_:1})]),i(H,{activeModal:t.showEditModal,onClose:e[16]||(e[16]=l=>t.showEditModal=!1),title:"Actualizar Registro de Colaborador",onUpdateClientList:d.fetchClients},null,8,["activeModal","onUpdateClientList"]),i(E,{activeModal:t.showReserveModal,title:"Actualizar Registro de Colaborador",onPostComplete:d.handlePostComplete,onClose:e[17]||(e[17]=l=>t.showReserveModal=!1)},null,8,["activeModal","onPostComplete"]),i(I,{activeModal:t.showComisionar,title:"Actualizar Registro de Colaborador",onCommissionProcessed:d.handleCommissionProcessed,onClose:e[18]||(e[18]=l=>t.showComisionar=!1)},null,8,["activeModal","onCommissionProcessed"]),i(M,{activeModal:t.showAmortizar,title:"Actualizar Registro de Colaborador",onFormSubmitted:d.handleFormSubmitted,idCliente:t.idCliente,totalBooking:t.booking.total,onClose:e[19]||(e[19]=l=>t.showAmortizar=!1)},null,8,["activeModal","onFormSubmitted","idCliente","totalBooking"])])}const Go=q(ie,[["render",io],["__scopeId","data-v-f6aa13c1"]]);export{Go as default};