import{B as N}from"./index-DCMPjbua.js";import{C as B}from"./index-Hsd0Z0_R.js";import{F as z}from"./index-I9bOp0dW.js";import{I as D}from"./index-BcFOD9Ey.js";import{u as O,J as k,b as w,d as u,f as s,e as n,h,c as b,o as d,p as m,L as E,n as P,i as T,t as f,F as G,l as H,w as q,z as L,A as J}from"./index-BLl1OigC.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as X}from"./index-BTHsGrD3.js";import{C as Y}from"./index-lgafHr2M.js";import{I as K}from"./index-DCC49QXr.js";import{S as Q}from"./index-DPFbVGd7.js";import{_ as Z,C as $,A as ee,E as oe}from"./ModalAddReserve-Skdiss-h.js";import{D as le}from"./index-DFq5MbAK.js";import{P as te}from"./index-C66Q9vME.js";import{u as se}from"./project-DZP6XSnf.js";import{V as ne}from"./VueSelect-DI5dOEtm.js";import{M as ie}from"./index-MSlXG-Ka.js";import{a as ae}from"./basic-tablle-data-AN7MRnVF.js";import{b as re}from"./menu-CM83wd2-.js";import"./vue-cleave.min-DAvglPmz.js";import"./index-B_wjOnuw.js";/* empty css                                              */import"./TotalTable-Da2l-zhh.js";import"./index-CwPxZwdQ.js";import"./av-2-D6_jNZbn.js";import"./v4-D8aEg3BZ.js";import"./VueSelect.vue_vue_type_style_index_0_lang-B1s-zvio.js";import"./transition-CNElC_4N.js";import"./focus-management-Dc3XsveG.js";import"./keyboard-9WePWYgZ.js";import"./use-outside-click-CPWvQZIF.js";import"./hidden-BR_kr5_G.js";import"./micro-task-CxIZtCgj.js";import"./open-closed-0CPOhxDd.js";import"./user-1-Dmhlt7-s.js";import"./user-4-_9lLfOE2.js";import"./user-6-Bk4CTUVR.js";import"./use-resolve-button-type-BwPomRAb.js";const _=O().headers(),de={components:{Dropdown:le,Select:Q,Button:N,FromGroup:z,EditProject:Z,ComisionarModal:$,AmortizarModal:ee,EditProject2:oe,Textinput:X,Modal:ie,Checkbox:Y,InputGroup:K,Icon:D,VueSelect:ne,MenuItem:re,Card:B,ProgressBar:te},data(){return{advancedTable:ae,idsReservesHotels:[],commissionIds:[],moneyIds:[],searchTerm:"",showEditModal:!1,showReserveModal:!1,selectedTour:null,store:null,formattedTotal:"S/.0.00",formattedTotalHotel:"S/.0.00",totalHotelValue:"0.00",reservasHotel:[],projects:[],filteredRows:[],includeBreakfast:!1,book:{is_breakfast:!1,nro_breakfast:"",start_breakfast:"",end_breakfast:""},originsbooking:[{value:1,label:"Oficina"},{value:2,label:"Colaboradores"},{value:3,label:"Facebook"},{value:4,label:"Whatsapp"},{value:5,label:"Instagram"},{value:6,label:"Página web"}],originsReserve:[{value:5,label:"Sin Asignar"},{value:1,label:"Aeropuerto"},{value:2,label:"Terminar Terrestre"},{value:3,label:"Otros"}],toursOptions:[],customerOptions:[],showReferences:!1,nro_pax_childs:"",nro_pax_adults:"",nro_pax_olds:"",current:1,basicTableData:[{codigo:"HRS2024-000231",nombreHotel:"HOTEL POSADA LODGE (TARAPOTO)",detallehotel:"HAB. TRIPLE (AC) (2 hab. x 6 noches)",contacto:"Cel: 963122673"}],client:{document:"",fullname:"",tradename:"",address:"",cellphone:"",telephone:"",email:"",date_birthday:""},tour:{esAbierto:null,tourDescription:null,vehiculo:null,turno:null,nPasajseros:null,fechaTour:null,observacion:null,realizado:null,totalTour:"0.00"},booking:{clients:null,phoneNumber:null,originReserve:1,numPassengers:null,referenciar:!1,numChildren:null,numAdults:null,reference_location:null,numSeniors:null,dateTimeArrival:null,dateArrival:null,timeArrival:null,arrivalBy:5,placeArrivalReference:null,voucherReference:null,is_voucher_external:null,emergencyContact:null,emergencyPhone:null,observations:null,isFavorite:!1,includeBreakfast:!1,numBreakfasts:null,startDate:null,endDate:null,total:null,totalPagado:null},perpage:3,idCliente:null,show:!1,showEdit:!1,showAmortizar:!1,showComisionar:!1,show2:!1,realizado:"--",pageRange:10,actions:[{name:"edit",icon:"heroicons:pencil-square",doit:t=>{this.openModalEdit(t)}},{name:"delete",icon:"heroicons-outline:trash",doit:t=>{this.removeProject(t)}}],vehiculos:[{value:1,label:"Compartido"},{value:2,label:"Privado"}],turnos:[{value:1,label:"Full Day"},{value:2,label:"Mañana"},{value:3,label:"Tarde"},{value:4,label:"Noche"}],columns:[{label:"¿Es Abierto?",field:"abierto"},{label:"Tours Turístico",field:"tour"},{label:"Vehículo",field:"vehiculo"},{label:"Turno",field:"turno"},{label:"N° pax",field:"pasajero"},{label:"Fecha",field:"fecha"},{label:"Observación",field:"observation"},{label:"Realizado",field:"realizado"},{label:"Action",field:"action"}],columnsReservaHotelExpense:[{label:"Habitacion",field:"habitacion"},{label:"N° PAX	",field:"pasajeross"},{label:"Cant. HAB",field:"cantidad"},{label:"Check-In",field:"checkin"},{label:"Check-out",field:"checkout"},{label:"#Noches",field:"noches"},{label:"Precio",field:"precio"},{label:"Descuento",field:"descuento"},{label:"Adicional",field:"adicional"},{label:"Observación",field:"observacion"},{label:"Subtotal",field:"subtotal"},{label:"",field:"action"}],selectedTourDescription:"",tourOptions:[],totalBooking:null,bedroomOptions:[],rows:[{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"}],columnsReservasAlojamiento:[{label:"Código",field:"code",type:"text",html:!0,width:"100px"},{label:"Nombre del Hotel",field:"nombreHotel",type:"text",html:!0,width:"150px"},{label:"Detalle del Hotel",field:"detallehotel",type:"text",html:!0,width:"250px"},{label:"Acciones",field:"action",type:"text",html:!0,width:"120px"}]}},watch:{selectedTour(t,l){t!==l&&(this.projects.find(c=>c.id===t)?w().warning("¡Este tour ya está seleccionado!"):k.get(`https://thtbackend-production.up.railway.app/api/v1/tours/description/${t}`,_).then(c=>{const e={id:t,description:c.data.data,esAbierto:null,vehiculo:null,turno:null,nPasajseros:null,fechaTour:null,observacion:null,realizado:null,totalTour:null};this.projects.push(e),console.log(this.projects)}).catch(c=>{console.error("Error al obtener la descripción del tour:",c)}))},"booking.clients":function(t,l){this.idCliente=t,console.log(this.idCliente),k.get(`https://thtbackend-production.up.railway.app/api/v1/clients/cellphone&telephone/${t}`,_).then(i=>{console.log(i),this.booking.phoneNumber=i.data.contact_numbers}).catch(i=>{console.error("Error al obtener la descripción del tour:",i)})},"booking.dateTimeArrival"(t){if(t){const[l,i]=t.split(" ");this.booking.dateArrival=l,this.booking.timeArrival=i,console.log(this.booking.dateArrival),console.log(this.booking.timeArrival)}else this.booking.dateArrival=null,this.booking.timeArrival=null},"tour.totalTour":function(t){const l=parseFloat(t);(!isNaN(l)||t==="")&&(this.formattedTotal="S/."+(t===""?"0.00":l.toFixed(2)))},totalHotelValue(t){const l=parseFloat(t);(!isNaN(l)||t==="")&&(this.formattedTotalHotel="S/."+(t===""?"0.00":l.toFixed(2)))}},async created(){await this.fetchClients()},computed:{totalReserva(){const t=isNaN(parseFloat(this.formattedTotal.substring(3)))?0:parseFloat(this.formattedTotal.substring(3)),l=isNaN(parseFloat(this.formattedTotalHotel.substring(3)))?0:parseFloat(this.formattedTotalHotel.substring(3)),i=t+l,c=i.toFixed(2);return this.booking.total=c,console.log(this.booking.total),"S/."+i.toFixed(2)},limitedCustomerOptions(){return this.customerOptions.slice(0,6)}},methods:{capturarDatos(){console.log(this.projects)},handleCommissionProcessed(t){const i=[t.data.commission.id];this.commissionIds=i,console.log("ID de la comisión:",this.commissionIds)},handleFormSubmitted(t){const l=t.data.id;this.booking.totalPagado=parseInt(t.data.amount);const i=[l];this.moneyIds=i,console.log("ID del ingreso amortización:",this.booking.totalPagado)},deleteProject(t){this.projects.splice(t,1),console.log(this.projects)},deleteItem(t,l){window.confirm("¿Estás seguro de que deseas eliminar este elemento?")?k.delete(`https://thtbackend-production.up.railway.app/api/v1/hotelsbookings/destroy/${t}`,_).then(i=>{console.log("El elemento con ID:",t,"se ha eliminado correctamente en el backend"),this.reservasHotel.splice(l,1);let c=0;this.reservasHotel.forEach(a=>{c+=parseFloat(a.total)}),this.totalHotelValue=c,w().success("Elemento eliminado con éxito",{position:"top-right"})}).catch(i=>{console.error("Error al eliminar el elemento:",i),w().error("Error al eliminar el elemento",{position:"top-right"})}):console.log("El usuario ha cancelado la eliminación del elemento con ID:",t)},handlePostComplete(t){const l=t.data;Array.isArray(l)?l.forEach(e=>{this.reservasHotel.push(e)}):this.reservasHotel.push(l);const i=this.reservasHotel.map(e=>parseFloat(e.total)),c=this.reservasHotel.map(e=>e.id);this.totalHotelValue=i.reduce((e,a)=>e+a,0),this.idsReservesHotels=c,console.log(this.idsReservesHotels)},handleAction(t){t.name==="edit"&&this.openModalEdit()},saveReserva(){const t=this.booking.voucherReference?1:0,l=this.booking.includeBreakfast?1:0,i=this.booking.isFavorite?1:0,c={bookingorigin_id:this.booking.originReserve,client_id:this.booking.clients,agency_id:this.booking.agency_id,arrivalplace_id:this.booking.arrivalBy,arrival_place2:this.booking.placeArrivalReference,date_arrival:this.booking.dateArrival,time_arrival:this.booking.timeArrival,nro_pax:this.booking.numPassengers,is_reference_pax:this.booking.referenciar,nro_pax_childs:this.booking.numChildren,nro_pax_adults:this.booking.numAdults,nro_pax_olds:this.booking.numSeniors,reference_voucher:this.booking.voucherReference,is_voucher_external:t,observations:this.booking.observations,contact_emergency:this.booking.emergencyContact,telephone_emergency:this.booking.emergencyPhone,reference_location:this.booking.reference_location,subtotal_tour:this.tour.totalTour,subtotal_hotel:this.totalHotelValue,total:this.booking.total,total_paid:this.booking.totalPagado,is_favorite:i,is_breakfast:l,nro_breakfast:this.booking.numBreakfasts,start_breakfast:this.booking.startDate,end_breakfast:this.booking.endDate,tours:this.projects.map(e=>({id:e.id,vehicle_tour:e.vehiculo,shift_tour:e.turno,quantity:e.nPasajseros,date_assigned:e.date_assigned,observation:e.observacion,is_open:e.esAbierto})),hotelsbooking_ids:this.idsReservesHotels,commission_ids:this.commissionIds,money_ids:this.moneyIds};console.log(c),k.post("https://thtbackend-production.up.railway.app/api/v1/bookings/create",c,{..._}).then(e=>{const a=w();console.log(e.data),a.success(e.data.message,{duration:3e3});const x=e.data.data.id;setTimeout(()=>{this.$router.push({name:"reserve-preview",params:{id:x}})},3e3)}).catch(e=>{w().error("Error al enviar los datos al backend",{duration:3e3})})},toggleReferences(){this.showReferences=!this.showReferences},openModal(){this.showEditModal=!0},openModalEdit(){this.showEdit=!this.showEdit},openModalComisionar(){this.showComisionar=!0},openModalAmortizar(){this.idCliente=this.idCliente,this.totalBooking=this.booking.total,this.showAmortizar=!0,console.log(this.idCliente)},handleComisionEnviada(t){console.log("Datos de la comisión recibidos en el componente padre:",t)},openModalReservaHotel(){this.showReserveModal=!0},async fetchClients(){console.log("Fetching clients...");try{const t=await k.get("https://thtbackend-production.up.railway.app/api/v1/clients/list",_);this.customerOptions=t.data.data.map(l=>({value:l.id,label:l.fullname}))}catch(t){console.error("Error fetching departments:",t)}},async fetchHotelsBooking(){console.log("Fetching HotelsBooking...");try{const t=await k.get("https://thtbackend-production.up.railway.app/api/v1/clients/list",_);this.customerOptions=t.data.data.map(l=>({value:l.id,label:l.fullname}))}catch(t){console.error("Error fetching departments:",t)}},async fetchTours(){console.log("Fetching tours...");try{const t=await k.get("https://thtbackend-production.up.railway.app/api/v1/tours/list",_);console.log(t),this.tourOptions=t.data.data.map(l=>({value:l.id,label:l.description})),console.log(this.projects)}catch(t){console.error("Error fetching tours:",t)}}},created(){this.store=se()},mounted(){this.fetchClients(),this.fetchTours()}},g=t=>(L("data-v-68448de9"),t=t(),J(),t),ce={class:"flex justify-end space-x-4 mb-3"},ue={class:"text-lg"},me=g(()=>s("span",null,"Comisionar",-1)),pe={class:"text-lg"},he=g(()=>s("span",null,"Amortizar(Total)",-1)),be={class:"grid grid-cols-1 lg:grid-cols-1 gap-5"},ge={class:"grid grid-cols-3 gap-5"},fe={class:"flex items-center"},ve={class:"grid grid-cols-3 gap-5"},ke={style:{display:"flex","align-items":"center"}},_e={key:0},xe={class:"flex items-center"},ye={class:"grid grid-cols-4 gap-5"},Ve={class:"grid grid-cols-3 gap-5"},Ce={key:0,class:"form-group col-lg-9"},we={class:"flex"},Ae={class:"flex flex-col w-1/2 mr-4"},je={class:"flex flex-col w-1/2"},Te={class:"flex flex-col w-1/2"},Re={class:"grid grid-cols-1"},Pe={class:"flex flex-col"},He={class:"border-b border-slate-100 dark:border-slate-700 pb-3 flex justify-between items-center"},Ue=g(()=>s("div",{class:"flex items-center"},[s("h6",{class:"card-title mb-0"},"Datos de Tours turístico")],-1)),Ee={class:"flex items-center"},Ie={class:"flex-grow mr-2"},Me={key:0},Fe={class:"flex space-x-3 items-center text-left rtl:space-x-reverse"},Se={key:4,class:"block w-full"},Ne={key:5},Be={key:6,class:"block w-full"},ze={key:7},De={key:0,style:{position:"relative"}},Oe={key:8,class:"action-btn text-end mr-3"},Ge=["onClick"],qe={class:"mt-5 self-end"},Le={class:"grid grid-cols-1"},Je={class:"flex flex-col"},We={class:"md:flex pb-6 items-center"},Xe=g(()=>s("h6",{class:"flex-1 md:mb-0 mb-3"},"Reservas de Alojamiento",-1)),Ye={class:"md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse"},Ke={key:0,class:"text-blue-900 font-bold"},Qe={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Ze={class:"font-bold"},$e=g(()=>s("br",null,null,-1)),eo={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},oo={key:3,class:"action-btn text-end mr-3"},lo={class:"text-xl"},to={class:"mt-5 self-end"},so={class:"grid grid-cols-1 lg:grid-cols-1 gap-5"},no={class:"grid grid-cols-3 gap-5"},io={class:"grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4"},ao=g(()=>s("div",{class:"lg:col-span-1"},null,-1)),ro={class:"lg:col-span-3 flex justify-end"},co={class:"flex justify-center"},uo={class:"flex justify-center"},mo={class:"w-full"},po=g(()=>s("th",null,"Total tours",-1)),ho=g(()=>s("th",null,"Total hotel",-1)),bo=g(()=>s("tr",null,[s("td",{colspan:"2"},[s("hr",{class:"book__summary__hrdivider"})])],-1)),go=g(()=>s("th",{class:"text-primary bold text-uppercase f-s-15"},"Total reserva",-1)),fo={class:"text-primary bold f-s-15"};function vo(t,l,i,c,e,a){const x=b("Icon"),y=b("Select"),v=b("FromGroup"),p=b("Textinput"),A=b("Checkbox"),V=b("InputGroup"),j=b("flat-pickr"),C=b("Card"),U=b("vue-good-table"),R=b("Button"),I=b("EditProject"),M=b("EditProject2"),F=b("ComisionarModal"),S=b("AmortizarModal");return d(),u("div",null,[s("div",ce,[s("button",{class:"invoice-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse",onClick:l[0]||(l[0]=o=>a.openModalComisionar())},[s("span",ue,[n(x,{icon:"heroicons-solid:cash"})]),me]),s("button",{class:"invoice-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse",onClick:l[1]||(l[1]=o=>a.openModalAmortizar())},[s("span",pe,[n(x,{icon:"heroicons-solid:banknotes"})]),he])]),n(C,{title:"Datos Generales"},{default:h(()=>[s("div",be,[s("div",ge,[s("div",fe,[n(v,{label:"Clientes",class:"flex-1"},{default:h(()=>[n(y,{options:a.limitedCustomerOptions,modelValue:e.booking.clients,"onUpdate:modelValue":l[2]||(l[2]=o=>e.booking.clients=o),class:"client-select"},null,8,["options","modelValue"])]),_:1}),s("button",{onClick:l[3]||(l[3]=(...o)=>a.openModal&&a.openModal(...o)),class:"ml-2 mt-7 p-2 btn-outline-dark"},"+")]),n(p,{label:"Número teléfono",type:"text",placeholder:"Tel 1",modelValue:e.booking.phoneNumber,"onUpdate:modelValue":l[4]||(l[4]=o=>e.booking.phoneNumber=o)},null,8,["modelValue"]),n(v,{label:"Origen de Reserva",class:"flex-1"},{default:h(()=>[n(y,{options:e.originsbooking,modelValue:e.booking.originReserve,"onUpdate:modelValue":l[5]||(l[5]=o=>e.booking.originReserve=o),class:"client-select"},null,8,["options","modelValue"])]),_:1})]),s("div",ve,[s("div",ke,[n(p,{label:"N° Pax",type:"text",placeholder:"N° pax",modelValue:e.booking.numPassengers,"onUpdate:modelValue":l[6]||(l[6]=o=>e.booking.numPassengers=o)},null,8,["modelValue"]),n(A,{label:"¿Referenciar?",onClick:a.toggleReferences,modelValue:e.booking.referenciar,"onUpdate:modelValue":l[7]||(l[7]=o=>e.booking.referenciar=o)},null,8,["onClick","modelValue"])]),e.booking.referenciar?(d(),u("div",_e,[n(v,{label:"Referencia de pasajeros:",class:"flex-1"},{default:h(()=>[s("div",xe,[n(V,{name:"nro_pax_childs",type:"text",placeholder:"N° niños",modelValue:e.booking.numChildren,"onUpdate:modelValue":l[8]||(l[8]=o=>e.booking.numChildren=o),prepend:"#Niños"},null,8,["modelValue"]),n(V,{name:"nro_pax_adults",type:"text",placeholder:"N° adultos",modelValue:e.booking.numAdults,"onUpdate:modelValue":l[9]||(l[9]=o=>e.booking.numAdults=o),prepend:"#Adultos"},null,8,["modelValue"]),n(V,{name:"nro_pax_olds",type:"text",placeholder:"N° ancianos",modelValue:e.booking.numSeniors,"onUpdate:modelValue":l[10]||(l[10]=o=>e.booking.numSeniors=o),prepend:"#Ancianos"},null,8,["modelValue"])])]),_:1})])):m("",!0),n(v,{label:"Fecha y hora llegada"},{default:h(()=>[n(j,{modelValue:e.booking.dateTimeArrival,"onUpdate:modelValue":l[11]||(l[11]=o=>e.booking.dateTimeArrival=o),class:"form-control",placeholder:"Fecha & Hora",id:"d2",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"])]),_:1}),n(v,{label:"Llegada por"},{default:h(()=>[n(y,{options:e.originsReserve,modelValue:e.booking.arrivalBy,"onUpdate:modelValue":l[12]||(l[12]=o=>e.booking.arrivalBy=o),class:"client-select"},null,8,["options","modelValue"])]),_:1}),n(p,{label:"Referencia lugar llegada",type:"text",placeholder:"Referencia lugar llegada",modelValue:e.booking.placeArrivalReference,"onUpdate:modelValue":l[13]||(l[13]=o=>e.booking.placeArrivalReference=o)},null,8,["modelValue"])]),s("div",ye,[n(p,{label:"N° ref. comprobante",type:"text",placeholder:"N° ref. comprobante",modelValue:e.booking.voucherReference,"onUpdate:modelValue":l[14]||(l[14]=o=>e.booking.voucherReference=o)},null,8,["modelValue"]),n(p,{label:"Contacto emergencia",type:"text",placeholder:"Contacto emergencia",modelValue:e.booking.emergencyContact,"onUpdate:modelValue":l[15]||(l[15]=o=>e.booking.emergencyContact=o)},null,8,["modelValue"]),n(p,{label:"Tel. emergencia",type:"text",placeholder:"Tel. emergencia",modelValue:e.booking.emergencyPhone,"onUpdate:modelValue":l[16]||(l[16]=o=>e.booking.emergencyPhone=o)},null,8,["modelValue"]),n(p,{label:"Observaciones",type:"text",placeholder:"Observaciones",modelValue:e.booking.observations,"onUpdate:modelValue":l[17]||(l[17]=o=>e.booking.observations=o)},null,8,["modelValue"])]),s("div",Ve,[s("div",null,[n(A,{label:"¿Es favorito (reserva)?",modelValue:e.booking.isFavorite,"onUpdate:modelValue":l[18]||(l[18]=o=>e.booking.isFavorite=o)},null,8,["modelValue"])]),s("div",null,[n(A,{label:"¿Incluye desayuno?",modelValue:e.booking.includeBreakfast,"onUpdate:modelValue":l[19]||(l[19]=o=>e.booking.includeBreakfast=o)},null,8,["modelValue"])]),e.booking.includeBreakfast?(d(),u("div",Ce,[s("div",we,[s("div",Ae,[n(p,{label:"N° Desayunos",type:"text",placeholder:"Ingrese número",modelValue:e.booking.numBreakfasts,"onUpdate:modelValue":l[20]||(l[20]=o=>e.booking.numBreakfasts=o)},null,8,["modelValue"])]),s("div",je,[n(v,{label:"Fecha Inicio",name:"d1"},{default:h(()=>[n(j,{modelValue:e.booking.startDate,"onUpdate:modelValue":l[21]||(l[21]=o=>e.booking.startDate=o),class:"form-control",id:"d1",placeholder:"yyyy, dd M"},null,8,["modelValue"])]),_:1})]),s("div",Te,[n(v,{label:"Fecha Fin",name:"d1"},{default:h(()=>[n(j,{modelValue:e.booking.endDate,"onUpdate:modelValue":l[22]||(l[22]=o=>e.booking.endDate=o),class:"form-control",id:"d1",placeholder:"yyyy, dd M"},null,8,["modelValue"])]),_:1})])])])):m("",!0)])])]),_:1}),n(C,{class:"mt-4",noborder:""},{default:h(()=>[s("div",Re,[s("div",Pe,[s("header",He,[Ue,s("div",Ee,[s("div",Ie,[n(y,{options:e.tourOptions,modelValue:e.selectedTour,"onUpdate:modelValue":l[23]||(l[23]=o=>e.selectedTour=o),placeholder:"Seleccionar Tipo",class:"w-full"},null,8,["options","modelValue"])])])]),n(U,{class:"-mx-6 mb-5",columns:e.columns,styleClass:"vgt-table table-head v-middle striped lesspadding2 listview",rows:e.projects,"pagination-options":{enabled:!1,perPage:e.perpage},"sort-options":{enabled:!1}},{"table-row":h(o=>[o.column.field=="abierto"?(d(),u("span",Me,[s("div",Fe,[n(A,{modelValue:e.projects[o.index].esAbierto,"onUpdate:modelValue":r=>e.projects[o.index].esAbierto=r},null,8,["modelValue","onUpdate:modelValue"])])])):m("",!0),o.column.field=="tour"?(d(),u("span",{key:1,style:E({color:e.projects[o.index].esAbierto?"red":""}),class:P([{"text-underline-red":e.projects[o.index].esAbierto},"text-slate-500 dark:text-slate-400 block min-w-[208px]"])},[T(f(o.row.description)+" ",1),e.projects[o.index].esAbierto?(d(),u(G,{key:0},[T(" (Estado abierto) ")],64)):m("",!0)],6)):m("",!0),o.column.field=="vehiculo"?(d(),u("span",{key:2,class:P([{"text-underline-red":e.projects[o.index].esAbierto&&o.column.field=="vehiculo"},"text-slate-500 dark:text-slate-400 block min-w-[108px]"])},[n(y,{options:e.vehiculos,modelValue:e.projects[o.index].vehiculo,"onUpdate:modelValue":r=>e.projects[o.index].vehiculo=r},null,8,["options","modelValue","onUpdate:modelValue"])],2)):m("",!0),o.column.field=="turno"?(d(),u("span",{key:3,class:P([{"text-underline-red":e.projects[o.index].esAbierto&&o.column.field=="turno"},"text-slate-500 dark:text-slate-400 block min-w-[108px]"])},[n(y,{options:e.turnos,modelValue:e.projects[o.index].turno,"onUpdate:modelValue":r=>e.projects[o.index].turno=r},null,8,["options","modelValue","onUpdate:modelValue"])],2)):m("",!0),o.column.field=="pasajero"?(d(),u("span",Se,[n(p,{type:"text",placeholder:"N° pax",modelValue:e.projects[o.index].nPasajseros,"onUpdate:modelValue":r=>e.projects[o.index].nPasajseros=r},null,8,["modelValue","onUpdate:modelValue"])])):m("",!0),o.column.field=="fecha"?(d(),u("span",Ne,[e.projects[o.index].esAbierto?(d(),H(p,{key:1,type:"text",placeholder:"Sin asignar Fecha",disabled:""})):(d(),H(j,{key:0,class:"form-control",id:"d1",placeholder:"yyyy, dd M",modelValue:e.projects[o.index].date_assigned,"onUpdate:modelValue":r=>e.projects[o.index].date_assigned=r},null,8,["modelValue","onUpdate:modelValue"]))])):m("",!0),o.column.field=="observation"?(d(),u("span",Be,[n(p,{type:"text",placeholder:"Observación",modelValue:e.projects[o.index].observacion,"onUpdate:modelValue":r=>e.projects[o.index].observacion=r},null,8,["modelValue","onUpdate:modelValue"])])):m("",!0),o.column.field=="realizado"?(d(),u("span",ze,[e.projects[o.index].esAbierto?(d(),u("div",De,[s("span",{style:E({color:e.projects[o.index].esAbierto?"red":""})},[n(p,{type:"text",class:"text-danger-500",placeholder:"---",modelValue:e.projects[o.index].realizado,"onUpdate:modelValue":r=>e.projects[o.index].realizado=r,disabled:""},null,8,["modelValue","onUpdate:modelValue"])],4)])):(d(),H(p,{key:1,type:"text",placeholder:"-",modelValue:e.projects[o.index].realizado,"onUpdate:modelValue":r=>e.projects[o.index].realizado=r,disabled:""},null,8,["modelValue","onUpdate:modelValue"]))])):m("",!0),o.column.field=="action"?(d(),u("div",Oe,[s("div",{class:"text-xl",onClick:r=>a.deleteProject(o.index)},[n(x,{icon:"heroicons-outline:trash",class:"text-danger-500"})],8,Ge)])):m("",!0)]),_:1},8,["columns","rows","pagination-options"]),s("div",qe,[n(V,{label:"T. TOURS S/. ",class:"append",name:"hi_Fullname",modelValue:e.tour.totalTour,"onUpdate:modelValue":l[24]||(l[24]=o=>e.tour.totalTour=o),type:"text",placeholder:"",horizontal:"",appendIcon:"heroicons-outline:cash",classInput:"text-right"},null,8,["modelValue"])])])])]),_:1}),n(C,{class:"mt-4",noborder:""},{default:h(()=>[s("div",Le,[s("div",Je,[s("div",We,[Xe,s("div",Ye,[n(R,{icon:"heroicons-outline:plus-sm",text:"Agregar Reserva",btnClass:" btn-dark font-normal btn-sm ",iconClass:"text-lg",onClick:q(a.openModalReservaHotel,["prevent"])},null,8,["onClick"])])]),n(U,{class:"-mx-6",columns:e.columnsReservasAlojamiento,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:this.reservasHotel,"sort-options":{enabled:!1}},{"table-row":h(o=>[o.column.field=="code"?(d(),u("span",Ke,f(o.row.code),1)):m("",!0),o.column.field=="nombreHotel"?(d(),u("span",Qe,[s("span",Ze,f(o.row.hotel.tradename),1),T("("+f(o.row.hotel.citie_turistic.description)+") ",1),$e,T(" Cell: "+f(o.row.hotel.cellphone),1)])):m("",!0),o.column.field=="detallehotel"?(d(),u("span",eo,f(o.row.typebedrooms.map(r=>`${r.typebedroom.description} (${r.quantity} hab. x
                ${r.nights} noches)`).join(", ")),1)):m("",!0),o.column.field==="action"?(d(),u("div",oo,[s("div",lo,[n(x,{icon:"heroicons-outline:trash",class:"text-danger-500",onClick:r=>a.deleteItem(o.row.id)},null,8,["onClick"])])])):m("",!0)]),_:1},8,["columns","rows"]),s("div",to,[n(V,{label:"T. HOTEL S/. ",class:"append",name:"hi_Fullname",modelValue:e.totalHotelValue,"onUpdate:modelValue":l[25]||(l[25]=o=>e.totalHotelValue=o),type:"text",placeholder:"",horizontal:"",appendIcon:"heroicons-outline:cash",classInput:"text-right"},null,8,["modelValue"])])])])]),_:1}),n(C,{class:"mt-4",noborder:""},{default:h(()=>[s("div",so,[s("div",no,[n(p,{label:"Ubicación y referencias para recojo del turista",type:"text",placeholder:"Referencia lugar llegada",modelValue:e.booking.reference_location,"onUpdate:modelValue":l[26]||(l[26]=o=>e.booking.reference_location=o)},null,8,["modelValue"])])])]),_:1}),s("div",io,[ao,s("div",ro,[n(R,{text:"Cancelar",btnClass:"btn-light mr-2",onClick:l[27]||(l[27]=o=>t.closeModal())}),n(R,{type:"submit",text:"Guardar Reserva",onClick:l[28]||(l[28]=o=>a.saveReserva()),btnClass:"btn-dark"})])]),s("div",co,[n(C,{class:"mb-0 book__summary max-w-md"},{default:h(()=>[s("div",uo,[s("table",mo,[s("tr",null,[po,s("td",null,f(e.formattedTotal),1)]),s("tr",null,[ho,s("td",null,f(e.formattedTotalHotel),1)]),bo,s("tr",null,[go,s("td",fo,f(a.totalReserva),1)])])])]),_:1})]),n(I,{activeModal:e.showEditModal,onClose:l[29]||(l[29]=o=>e.showEditModal=!1),title:"Actualizar Registro de Colaborador",onUpdateClientList:a.fetchClients},null,8,["activeModal","onUpdateClientList"]),n(M,{activeModal:e.showReserveModal,title:"Actualizar Registro de Colaborador",onPostComplete:a.handlePostComplete,idCliente:e.idCliente,onClose:l[30]||(l[30]=o=>e.showReserveModal=!1)},null,8,["activeModal","onPostComplete","idCliente"]),n(F,{activeModal:e.showComisionar,title:"Actualizar Registro de Colaborador",onCommissionProcessed:a.handleCommissionProcessed,onClose:l[31]||(l[31]=o=>e.showComisionar=!1)},null,8,["activeModal","onCommissionProcessed"]),n(S,{activeModal:e.showAmortizar,title:"Actualizar Registro de Colaborador",onFormSubmitted:a.handleFormSubmitted,idCliente:e.idCliente,totalBooking:e.booking.total,onClose:l[32]||(l[32]=o=>e.showAmortizar=!1)},null,8,["activeModal","onFormSubmitted","idCliente","totalBooking"])])}const ll=W(de,[["render",vo],["__scopeId","data-v-68448de9"]]);export{ll as default};
