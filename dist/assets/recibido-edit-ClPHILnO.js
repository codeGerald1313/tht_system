import{B as I}from"./index-DOAnfiMc.js";import{C as N}from"./index-CoHYOsAq.js";import{F as U}from"./index-B8UWVO2a.js";import{I as F}from"./index-DxXSMpKh.js";import{u as z,B as v,b as y,d,f as s,e as i,g as h,c as u,o as c,q as m,t as f,w as B,h as j,D as O,E as D}from"./index-CyQKzwXM.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as G}from"./index-C6OqzQN-.js";import{C as L}from"./index-2iT3jdVW.js";import{I as J}from"./index-BVBpVZEi.js";import{S as X}from"./index-Jp7OXFH1.js";import{_ as K,C as Q,A as W,E as Y}from"./ModalAddReserve-B6EPPdMy.js";import{D as Z}from"./index-Br1mhpyn.js";import{P as $}from"./index-BrRQqvEE.js";import{u as ee}from"./project-7SCfM68f.js";import{V as oe}from"./VueSelect-CeaoYkHk.js";import{M as te}from"./index-D1RHiM9F.js";import{a as le}from"./basic-tablle-data-AN7MRnVF.js";import{b as se}from"./menu-BlqYkBdn.js";import"./vue-cleave.min-BqMPJFk5.js";/* empty css                                              */import"./index-CHzOSQ-h.js";/* empty css                                              */import"./TotalTable-Cwp9GymN.js";import"./VueSelect.vue_vue_type_style_index_0_lang-XABNT5P5.js";import"./index-B-jw8vvV.js";import"./av-2-D6_jNZbn.js";import"./v4-D8aEg3BZ.js";import"./transition-BehYXQjK.js";import"./focus-management-DKnT3RdX.js";import"./keyboard-C8YEoqI_.js";import"./use-outside-click-WivoOT8p.js";import"./hidden-1JsWbmcm.js";import"./micro-task-CxIZtCgj.js";import"./open-closed-CLDwNzJK.js";import"./user-1-Dmhlt7-s.js";import"./user-4-_9lLfOE2.js";import"./user-6-Bk4CTUVR.js";import"./use-resolve-button-type-DXZUzXBT.js";const _=z().headers(),ie={components:{Dropdown:Z,Select:X,Button:I,FromGroup:U,EditProject:K,ComisionarModal:Q,AmortizarModal:W,EditProject2:Y,Textinput:G,Modal:te,Checkbox:L,InputGroup:J,Icon:F,VueSelect:oe,MenuItem:se,Card:N,ProgressBar:$},data(){return{advancedTable:le,idsReservesHotels:[],commissionIds:[],moneyIds:[],searchTerm:"",showEditModal:!1,showReserveModal:!1,selectedTour:null,store:null,formattedTotal:"S/.0.00",formattedTotalHotel:"S/.0.00",totalHotelValue:"0.00",reservasHotel:[],projects:[],filteredRows:[],includeBreakfast:!1,book:{is_breakfast:!1,nro_breakfast:"",start_breakfast:"",end_breakfast:""},originsbooking:[],originsReserve:[{value:1,label:"Sin Asignar"},{value:2,label:"Aeropuerto"},{value:3,label:"Terminar Terrestre"},{value:4,label:"Otros"}],toursOptions:[],customerOptions:[],showReferences:!1,nro_pax_childs:"",nro_pax_adults:"",nro_pax_olds:"",current:1,basicTableData:[{codigo:"HRS2024-000231",nombreHotel:"HOTEL POSADA LODGE (TARAPOTO)",detallehotel:"HAB. TRIPLE (AC) (2 hab. x 6 noches)",contacto:"Cel: 963122673"}],client:{document:"",fullname:"",tradename:"",address:"",cellphone:"",telephone:"",email:"",date_birthday:""},tour:{esAbierto:null,tourDescription:null,vehiculo:null,turno:null,nPasajseros:null,fechaTour:null,observacion:null,realizado:null,totalTour:"0.00"},booking:{clients:null,agency_id:null,phoneNumber:null,originReserve:null,numPassengers:null,referenciar:!1,numChildren:null,numAdults:null,numSeniors:null,dateTimeArrival:null,dateArrival:null,timeArrival:null,arrivalBy:null,placeArrivalReference:null,voucherReference:null,emergencyContact:null,emergencyPhone:null,observations:null,isFavorite:!1,includeBreakfast:!1,numBreakfasts:null,startDate:null,endDate:null,total:null},perpage:3,idCliente:null,show:!1,showEdit:!1,showAmortizar:!1,showComisionar:!1,show2:!1,realizado:"--",pageRange:10,actions:[{name:"edit",icon:"heroicons:pencil-square",doit:l=>{this.openModalEdit(l)}},{name:"delete",icon:"heroicons-outline:trash",doit:l=>{this.removeProject(l)}}],vehiculos:[{value:1,label:"Compartido"},{value:2,label:"Privado"}],turnos:[{value:1,label:"Full Day"},{value:2,label:"Mañana"},{value:3,label:"Tarde"},{value:4,label:"Noche"}],columns:[{label:"¿Es Abierto?",field:"abierto"},{label:"Tours Turístico",field:"tour"},{label:"Vehículo",field:"vehiculo"},{label:"Turno",field:"turno"},{label:"N° pax",field:"pasajero"},{label:"Fecha",field:"fecha"},{label:"Observación",field:"observation"},{label:"Realizado",field:"realizado"},{label:"Action",field:"action"}],columnsReservaHotelExpense:[{label:"Habitacion",field:"habitacion"},{label:"N° PAX	",field:"pasajeross"},{label:"Cant. HAB",field:"cantidad"},{label:"Check-In",field:"checkin"},{label:"Check-out",field:"checkout"},{label:"#Noches",field:"noches"},{label:"Precio",field:"precio"},{label:"Descuento",field:"descuento"},{label:"Adicional",field:"adicional"},{label:"Observación",field:"observacion"},{label:"Subtotal",field:"subtotal"},{label:"",field:"action"}],selectedTourDescription:"",tourOptions:[],totalBooking:null,bedroomOptions:[],rows:[{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"}],columnsReservasAlojamiento:[{label:"Código",field:"code",type:"text",html:!0,width:"100px"},{label:"Nombre del Hotel",field:"nombreHotel",type:"text",html:!0,width:"150px"},{label:"Detalle del Hotel",field:"detallehotel",type:"text",html:!0,width:"250px"},{label:"Acciones",field:"action",type:"text",html:!0,width:"120px"}]}},watch:{selectedTour(l,e){l!==e&&(this.projects.find(p=>p.id===l)?y().warning("¡Este tour ya está seleccionado!"):v.get(`https://thtsystemv2.tech/public/api/v1/tours/description/${l}`,_).then(p=>{const o={id:l,description:p.data.data,esAbierto:null,vehiculo:null,turno:null,nPasajseros:null,fechaTour:null,observacion:null,realizado:null,totalTour:null};this.projects.push(o)}).catch(p=>{console.error("Error al obtener la descripción del tour:",p)}))},"booking.clients":function(l,e){this.idCliente=l,v.get(`https://thtsystemv2.tech/public/api/v1/clients/cellphone&telephone/${l}`,_).then(n=>{this.booking.phoneNumber=n.data.contact_numbers}).catch(n=>{console.error("Error al obtener la descripción del tour:",n)})},"booking.dateTimeArrival"(l){if(l){const[e,n]=l.split(" ");this.booking.dateArrival=e,this.booking.timeArrival=n}else this.booking.dateArrival=null,this.booking.timeArrival=null},"tour.totalTour":function(l){const e=parseFloat(l);(!isNaN(e)||l==="")&&(this.formattedTotal="S/."+(l===""?"0.00":e.toFixed(2)))},totalHotelValue(l){const e=parseFloat(l);(!isNaN(e)||l==="")&&(this.formattedTotalHotel="S/."+(l===""?"0.00":e.toFixed(2)))},$route:{immediate:!0,handler(l,e){l.params.recibido_id,JSON.parse(l.query.recivied_data)}}},async created(){await this.fetchClients()},computed:{totalReserva(){const l=isNaN(parseFloat(this.formattedTotal.substring(3)))?0:parseFloat(this.formattedTotal.substring(3)),e=isNaN(parseFloat(this.formattedTotalHotel.substring(3)))?0:parseFloat(this.formattedTotalHotel.substring(3)),n=l+e,p=n.toFixed(2);return this.booking.total=p,"S/."+n.toFixed(2)}},methods:{capturarDatos(){},fetchAgencies(){v.get("https://thtsystemv2.tech/public/api/v1/agencies/list",_).then(l=>{this.originsbooking=l.data.data.map(e=>({value:e.id,label:e.fullname}))}).catch(l=>{console.error("Error al obtener las agencias:",l)})},handleCommissionProcessed(l){const n=[l.data.data.id];this.commissionIds=n},handleFormSubmitted(l){const n=[l.data.id];this.moneyIds=n},deleteProject(l){this.projects.splice(l,1)},deleteItem(l,e){window.confirm("¿Estás seguro de que deseas eliminar este elemento?")&&v.delete(`https://thtsystemv2.tech/public/api/v1/hotelsbookings/destroy/${l}`,_).then(n=>{this.reservasHotel.splice(e,1),y().success("Elemento eliminado con éxito",{position:"top-right"})}).catch(n=>{console.error("Error al eliminar el elemento:",n),y().error("Error al eliminar el elemento",{position:"top-right"})})},handlePostComplete(l){const e=l.data;Array.isArray(e)?e.forEach(o=>{this.reservasHotel.push(o)}):this.reservasHotel.push(e);const n=this.reservasHotel.map(o=>parseFloat(o.total)),p=this.reservasHotel.map(o=>o.id);this.totalHotelValue=n.reduce((o,r)=>o+r,0),this.idsReservesHotels=p},handleAction(l){l.name==="edit"&&this.openModalEdit()},saveReserva(){const l={bookingorigin_id:this.booking.originReserve,client_id:this.booking.clients,agency_id:this.booking.agency_id,arrivalplace_id:this.booking.arrivalBy,arrival_place:this.booking.placeArrivalReference,date_arrival:this.booking.dateArrival,time_arrival:this.booking.timeArrival,nro_pax:this.booking.numPassengers,is_reference_pax:this.booking.referenciar,nro_pax_childs:this.booking.numChildren,nro_pax_adults:this.booking.numAdults,nro_pax_olds:this.booking.numSeniors,reference_voucher:this.booking.voucherReference,observations:this.booking.observations,contact_emergency:this.booking.emergencyContact,telephone_emergency:this.booking.emergencyPhone,subtotal_tour:this.tour.totalTour,subtotal_hotel:this.totalHotelValue,total:this.booking.total,is_favorite:this.booking.isFavorite,is_breakfast:this.booking.includeBreakfast,nro_breakfast:this.booking.numBreakfasts,start_breakfast:this.booking.startDate,end_breakfast:this.booking.endDate,tours:this.projects.map(e=>({id:e.id,vehicle_tour:e.vehiculo,shift_tour:e.turno,quantity:e.nPasajseros,date_assigned:e.date_assigned,observation:e.observacion,is_open:e.esAbierto})),hotelsbooking_ids:this.idsReservesHotels,commission_ids:this.commissionIds,money_ids:this.moneyIds};v.post("https://thtsystemv2.tech/public/api/v1/bookings/create-recivied",l,{..._}).then(e=>{y().success(e.data.message,{duration:3e3})}).catch(e=>{y().error("Error al enviar los datos al backend",{duration:3e3})})},toggleReferences(){this.showReferences=!this.showReferences},openModal(){this.showEditModal=!0},openModalEdit(){this.showEdit=!this.showEdit},openModalComisionar(){this.showComisionar=!0},openModalAmortizar(){this.idCliente=this.idCliente,this.totalBooking=this.booking.total,this.showAmortizar=!0},handleComisionEnviada(l){},openModalReservaHotel(){this.showReserveModal=!0},async fetchClients(){try{const l=await v.get("https://thtsystemv2.tech/public/api/v1/clients/list",_);this.customerOptions=l.data.data.map(e=>({value:e.id,label:e.fullname}))}catch(l){console.error("Error fetching departments:",l)}},async fetchHotelsBooking(){try{const l=await v.get("https://thtsystemv2.tech/public/api/v1/clients/list",_);this.customerOptions=l.data.data.map(e=>({value:e.id,label:e.fullname}))}catch{}},async fetchTours(){try{const l=await v.get("https://thtsystemv2.tech/public/api/v1/tours/list",_);this.tourOptions=l.data.data.map(e=>({value:e.id,label:e.description}))}catch{}}},created(){this.store=ee()},mounted(){this.fetchClients(),this.fetchTours(),this.fetchAgencies()}},b=l=>(O("data-v-17be4788"),l=l(),D(),l),ne={class:"flex justify-end space-x-4 mb-3"},ae={class:"text-lg"},re=b(()=>s("span",null,"Comisionar",-1)),de={class:"text-lg"},ce=b(()=>s("span",null,"Amortizar(Total)",-1)),ue={class:"grid grid-cols-1 lg:grid-cols-1 gap-5"},me={class:"grid grid-cols-2 gap-5"},pe={class:"flex items-center"},he={class:"grid grid-cols-3 gap-5"},be={key:0},fe={class:"flex items-center"},ve={class:"grid grid-cols-1"},_e={class:"flex flex-col"},ge={class:"border-b border-slate-100 dark:border-slate-700 pb-3 flex justify-between items-center"},xe=b(()=>s("div",{class:"flex items-center"},[s("h6",{class:"card-title mb-0"},"Datos de Tours turístico")],-1)),ke={class:"flex items-center"},ye={class:"flex-grow mr-2"},Ce={key:0},Ve={class:"flex space-x-3 items-center text-left rtl:space-x-reverse"},we={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[208px]"},Ae={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Te={key:3,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},je={key:4,class:"block w-full"},Pe={key:5},Re={key:6},He={key:7},Me={key:8,class:"action-btn text-end mr-3"},Ee=["onClick"],Se={class:"mt-5 self-end"},Ie={class:"grid grid-cols-1"},Ne={class:"flex flex-col"},Ue={class:"md:flex pb-6 items-center"},Fe=b(()=>s("h6",{class:"flex-1 md:mb-0 mb-3"},"Reservas de Alojamiento",-1)),ze={class:"md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse"},Be={key:0,class:"text-blue-900 font-bold"},Oe={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},De={class:"font-bold"},qe=b(()=>s("br",null,null,-1)),Ge={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},Le={key:3,class:"action-btn text-end mr-3"},Je={class:"text-xl"},Xe={class:"mt-5 self-end"},Ke={class:"grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4"},Qe=b(()=>s("div",{class:"lg:col-span-1"},null,-1)),We={class:"lg:col-span-3 flex justify-end"},Ye={class:"flex justify-center"},Ze={class:"flex justify-center"},$e={class:"w-full"},eo=b(()=>s("th",null,"Total tours",-1)),oo=b(()=>s("th",null,"Total hotel",-1)),to=b(()=>s("tr",null,[s("td",{colspan:"2"},[s("hr",{class:"book__summary__hrdivider"})])],-1)),lo=b(()=>s("th",{class:"text-primary bold text-uppercase f-s-15"},"Total reserva",-1)),so={class:"text-primary bold f-s-15"};function io(l,e,n,p,o,r){const C=u("Icon"),x=u("Select"),V=u("FromGroup"),g=u("Textinput"),k=u("InputGroup"),w=u("Card"),P=u("Checkbox"),R=u("flat-pickr"),T=u("vue-good-table"),A=u("Button"),H=u("EditProject"),M=u("EditProject2"),E=u("ComisionarModal"),S=u("AmortizarModal");return c(),d("div",null,[s("div",ne,[s("button",{class:"invoice-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse",onClick:e[0]||(e[0]=t=>r.openModalComisionar())},[s("span",ae,[i(C,{icon:"heroicons-solid:cash"})]),re]),s("button",{class:"invoice-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse",onClick:e[1]||(e[1]=t=>r.openModalAmortizar())},[s("span",de,[i(C,{icon:"heroicons-solid:banknotes"})]),ce])]),i(w,{title:"Datos Generales"},{default:h(()=>[s("div",ue,[s("div",me,[i(V,{label:"Seleccionar Agencia que esta pasando",class:"flex-1"},{default:h(()=>[i(x,{options:o.originsbooking,modelValue:o.booking.agency_id,"onUpdate:modelValue":e[2]||(e[2]=t=>o.booking.agency_id=t),class:"client-select"},null,8,["options","modelValue"])]),_:1}),s("div",pe,[i(V,{label:"Clientes",class:"flex-1"},{default:h(()=>[i(x,{options:o.customerOptions,modelValue:o.booking.clients,"onUpdate:modelValue":e[3]||(e[3]=t=>o.booking.clients=t),class:"client-select"},null,8,["options","modelValue"])]),_:1}),s("button",{onClick:e[4]||(e[4]=(...t)=>r.openModal&&r.openModal(...t)),class:"ml-2 mt-7 p-2 btn-outline-dark"},"+")])]),s("div",he,[s("div",null,[i(g,{label:"Tel. emergencia",type:"text",placeholder:"Tel. emergencia",modelValue:o.booking.emergencyPhone,"onUpdate:modelValue":e[5]||(e[5]=t=>o.booking.emergencyPhone=t)},null,8,["modelValue"])]),o.booking.referenciar?(c(),d("div",be,[i(V,{label:"Referencia de pasajeros:",class:"flex-1"},{default:h(()=>[s("div",fe,[i(k,{name:"nro_pax_childs",type:"text",placeholder:"N° niños",modelValue:o.booking.numChildren,"onUpdate:modelValue":e[6]||(e[6]=t=>o.booking.numChildren=t),prepend:"#Niños"},null,8,["modelValue"]),i(k,{name:"nro_pax_adults",type:"text",placeholder:"N° adultos",modelValue:o.booking.numAdults,"onUpdate:modelValue":e[7]||(e[7]=t=>o.booking.numAdults=t),prepend:"#Adultos"},null,8,["modelValue"]),i(k,{name:"nro_pax_olds",type:"text",placeholder:"N° ancianos",modelValue:o.booking.numSeniors,"onUpdate:modelValue":e[8]||(e[8]=t=>o.booking.numSeniors=t),prepend:"#Ancianos"},null,8,["modelValue"])])]),_:1})])):m("",!0),i(g,{label:"N° Pax",type:"text",placeholder:"N° pax",modelValue:o.booking.numPassengers,"onUpdate:modelValue":e[9]||(e[9]=t=>o.booking.numPassengers=t)},null,8,["modelValue"]),i(V,{label:"Observaciones"},{default:h(()=>[i(g,{type:"text",placeholder:"Observaciones",modelValue:o.booking.observations,"onUpdate:modelValue":e[10]||(e[10]=t=>o.booking.observations=t)},null,8,["modelValue"])]),_:1})])])]),_:1}),i(w,{class:"mt-4",noborder:""},{default:h(()=>[s("div",ve,[s("div",_e,[s("header",ge,[xe,s("div",ke,[s("div",ye,[i(x,{options:o.tourOptions,modelValue:o.selectedTour,"onUpdate:modelValue":e[11]||(e[11]=t=>o.selectedTour=t),placeholder:"Seleccionar Tipo",class:"w-full"},null,8,["options","modelValue"])])])]),i(T,{class:"-mx-6 mb-5",columns:o.columns,styleClass:" vgt-table  table-head   v-middle striped lesspadding2 listview",rows:o.projects,"pagination-options":{enabled:!1,perPage:o.perpage},"sort-options":{enabled:!1}},{"table-row":h(t=>[t.column.field=="abierto"?(c(),d("span",Ce,[s("div",Ve,[i(P,{modelValue:o.projects[t.index].esAbierto,"onUpdate:modelValue":a=>o.projects[t.index].esAbierto=a},null,8,["modelValue","onUpdate:modelValue"])])])):m("",!0),t.column.field=="tour"?(c(),d("span",we,f(t.row.description),1)):m("",!0),t.column.field=="vehiculo"?(c(),d("span",Ae,[i(x,{options:o.vehiculos,modelValue:o.projects[t.index].vehiculo,"onUpdate:modelValue":a=>o.projects[t.index].vehiculo=a},null,8,["options","modelValue","onUpdate:modelValue"])])):m("",!0),t.column.field=="turno"?(c(),d("span",Te,[i(x,{options:o.turnos,modelValue:o.projects[t.index].turno,"onUpdate:modelValue":a=>o.projects[t.index].turno=a},null,8,["options","modelValue","onUpdate:modelValue"])])):m("",!0),t.column.field=="pasajero"?(c(),d("span",je,[i(g,{type:"text",placeholder:"N° pax",modelValue:o.projects[t.index].nPasajseros,"onUpdate:modelValue":a=>o.projects[t.index].nPasajseros=a},null,8,["modelValue","onUpdate:modelValue"])])):m("",!0),t.column.field=="fecha"?(c(),d("span",Pe,[i(R,{class:"form-control",id:"d1",placeholder:"yyyy, dd M",modelValue:o.projects[t.index].date_assigned,"onUpdate:modelValue":a=>o.projects[t.index].date_assigned=a},null,8,["modelValue","onUpdate:modelValue"])])):m("",!0),t.column.field=="observation"?(c(),d("span",Re,[i(g,{type:"text",placeholder:"Observación",modelValue:o.projects[t.index].observacion,"onUpdate:modelValue":a=>o.projects[t.index].observacion=a},null,8,["modelValue","onUpdate:modelValue"])])):m("",!0),t.column.field=="realizado"?(c(),d("span",He,[i(g,{type:"text",placeholder:"-",modelValue:o.projects[t.index].realizado,"onUpdate:modelValue":a=>o.projects[t.index].realizado=a,disabled:""},null,8,["modelValue","onUpdate:modelValue"])])):m("",!0),t.column.field=="action"?(c(),d("div",Me,[s("div",{class:"text-xl",onClick:a=>r.deleteProject(t.index)},[i(C,{icon:"heroicons-outline:trash",class:"text-danger-500"})],8,Ee)])):m("",!0)]),_:1},8,["columns","rows","pagination-options"]),s("div",Se,[i(k,{label:"T. TOURS S/. ",class:"append",name:"hi_Fullname",modelValue:o.tour.totalTour,"onUpdate:modelValue":e[12]||(e[12]=t=>o.tour.totalTour=t),type:"text",placeholder:"",horizontal:"",appendIcon:"heroicons-outline:cash",classInput:"text-right"},null,8,["modelValue"])])])])]),_:1}),i(w,{class:"mt-4",noborder:""},{default:h(()=>[s("div",Ie,[s("div",Ne,[s("div",Ue,[Fe,s("div",ze,[i(A,{icon:"heroicons-outline:plus-sm",text:"Agregar Reserva",btnClass:" btn-dark font-normal btn-sm ",iconClass:"text-lg",onClick:B(r.openModalReservaHotel,["prevent"])},null,8,["onClick"])])]),i(T,{class:"-mx-6",columns:o.columnsReservasAlojamiento,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:this.reservasHotel,"sort-options":{enabled:!1}},{"table-row":h(t=>[t.column.field=="code"?(c(),d("span",Be,f(t.row.code),1)):m("",!0),t.column.field=="nombreHotel"?(c(),d("span",Oe,[s("span",De,f(t.row.hotel.tradename),1),j("("+f(t.row.hotel.citie_turistic.description)+") ",1),qe,j(" Cell: "+f(t.row.hotel.cellphone),1)])):m("",!0),t.column.field=="detallehotel"?(c(),d("span",Ge,f(t.row.typebedrooms.map(a=>`${a.typebedroom.description} (${a.quantity} hab. x
                ${a.nights} noches)`).join(", ")),1)):m("",!0),t.column.field==="action"?(c(),d("div",Le,[s("div",Je,[i(C,{icon:"heroicons-outline:trash",class:"text-danger-500",onClick:a=>r.deleteItem(t.row.id)},null,8,["onClick"])])])):m("",!0)]),_:1},8,["columns","rows"]),s("div",Xe,[i(k,{label:"T. HOTEL S/. ",class:"append",name:"hi_Fullname",modelValue:o.totalHotelValue,"onUpdate:modelValue":e[13]||(e[13]=t=>o.totalHotelValue=t),type:"text",placeholder:"",horizontal:"",appendIcon:"heroicons-outline:cash",classInput:"text-right"},null,8,["modelValue"])])])])]),_:1}),s("div",Ke,[Qe,s("div",We,[i(A,{text:"Cancelar",btnClass:"btn-light mr-2",onClick:e[14]||(e[14]=t=>l.closeModal())}),i(A,{type:"submit",text:"Guardar Reserva",onClick:e[15]||(e[15]=t=>r.saveReserva()),btnClass:"btn-dark"})])]),s("div",Ye,[i(w,{class:"mb-0 book__summary max-w-md"},{default:h(()=>[s("div",Ze,[s("table",$e,[s("tr",null,[eo,s("td",null,f(o.formattedTotal),1)]),s("tr",null,[oo,s("td",null,f(o.formattedTotalHotel),1)]),to,s("tr",null,[lo,s("td",so,f(r.totalReserva),1)])])])]),_:1})]),i(H,{activeModal:o.showEditModal,onClose:e[16]||(e[16]=t=>o.showEditModal=!1),title:"Actualizar Registro de Colaborador",onUpdateClientList:r.fetchClients},null,8,["activeModal","onUpdateClientList"]),i(M,{activeModal:o.showReserveModal,title:"Actualizar Registro de Colaborador",onPostComplete:r.handlePostComplete,onClose:e[17]||(e[17]=t=>o.showReserveModal=!1)},null,8,["activeModal","onPostComplete"]),i(E,{activeModal:o.showComisionar,title:"Actualizar Registro de Colaborador",onCommissionProcessed:r.handleCommissionProcessed,onClose:e[18]||(e[18]=t=>o.showComisionar=!1)},null,8,["activeModal","onCommissionProcessed"]),i(S,{activeModal:o.showAmortizar,title:"Actualizar Registro de Colaborador",onFormSubmitted:r.handleFormSubmitted,idCliente:o.idCliente,totalBooking:o.booking.total,onClose:e[19]||(e[19]=t=>o.showAmortizar=!1)},null,8,["activeModal","onFormSubmitted","idCliente","totalBooking"])])}const Lo=q(ie,[["render",io],["__scopeId","data-v-17be4788"]]);export{Lo as default};
