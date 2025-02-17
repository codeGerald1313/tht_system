import{B as U}from"./index-DOAnfiMc.js";import{C as B}from"./index-CoHYOsAq.js";import{F as G}from"./index-B8UWVO2a.js";import{T as A}from"./index-B-jw8vvV.js";import{T as P}from"./index-C6OqzQN-.js";import{_ as q}from"./repeater-Btx_aIdJ.js";import{I as L}from"./index-DxXSMpKh.js";import{u as R}from"./project-7SCfM68f.js";import{C as W}from"./index-2iT3jdVW.js";import{V as z}from"./VueSelect-CeaoYkHk.js";import{S as M}from"./index-Jp7OXFH1.js";import{u as H,B as b,b as C,d as a,e as n,g as h,c as p,o as r,f as l,q as d,w as x,F as c,m as S,h as g,t as m,p as Y,n as J,l as K}from"./index-CyQKzwXM.js";import{C as Q}from"./VueSelect.vue_vue_type_style_index_0_lang-XABNT5P5.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-cleave.min-BqMPJFk5.js";import"./vee-validate.esm-BhM9XJEy.js";import"./av-2-D6_jNZbn.js";import"./v4-D8aEg3BZ.js";const f=H().headers(),Z={components:{Button:U,Checkbox:W,vSelect:Q,Icon:L,VueSelect:z,Select:M,Card:B,Textinput:P,FromGroup:G,Textarea:A,Repeater:q,noDataTemplate:{template:'<div class="custom-no-data">Tu diseño personalizado aquí</div>'}},data(){return{shouldWatchTourId:!0,isChecked:!1,trasnportOptions:[],tourOptions:[],currentDate:this.getCurrentDate(),guiaOptions:[],bookingTourIds:[],projects:[],isLoading:!1,group:{user_id:null,tour_id:null,transport_id:null,guide_id:null,date_departure:this.getCurrentDate(),code:"",correlative:null,capacity_vehicle:null,capacity_selected:null,viatic_assigned:null,is_generated:!1,is_confirmed:!1,observations:""},columnsTraspase:[{label:"",field:"abierto"},{label:"N° pax",field:"pasajero"},{label:"Vehículo",field:"vehiculo"},{label:"Turno",field:"turno"},{label:"Porforma",field:"proforma"},{label:"Responsable y Código	",field:"responsablecode"},{label:"Hotel / Ubicacion	",field:"hotelubi"},{label:"Teléfonos",field:"telephone"},{label:"Observaciones	",field:"observaciones"},{label:"Deuda	",field:"deuda"}]}},watch:{"group.transport_id":function(t,o){b.get(`https://thtsystemv2.tech/public/api/v1/transports/record-capacity/${t.value}`,f).then(i=>{this.group.capacity_vehicle=i.data.data.capacity}).catch(i=>{console.error("Error al llamar al método en el backend:",i)})},"group.tour_id":async function(t,o){this.shouldWatchTourId&&await this.fetchBookingTours(t)}},methods:{async fetchTransports(){try{const t=await b.get("https://thtsystemv2.tech/public/api/v1/transports/list",f);this.trasnportOptions=t.data.data.map(o=>({value:o.id,label:o.owner}))}catch(t){console.error("Error fetching departments:",t)}},hasHotelInfo(t){return t.hotel_tradename||t.hotel_document||t.hotel_address},getCurrentDate(){const t=new Date,o=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),v=String(t.getDate()).padStart(2,"0");return`${o}-${i}-${v}`},async fetchBookingTours(t){const o=C();try{const i=await b.get(`https://thtsystemv2.tech/public/api/v1/bookings/booking-tours/${t}`,{...f,params:{date:this.group.date_departure}});i.data&&i.data.data&&i.data.data.length>0?(this.projects=i.data.data,o.info("Tours Pendientes encontrados con éxito"),console.log(this.projects)):(o.info("Este Tour no tiene Reservas Pendientes"),this.projects=[])}catch(i){o.error("Error al cargar las reservas pendientes para este tour o Este Tour no tiene Reservas Pendientes"),console.error("Error al llamar al método en el backend:",i),this.projects=[]}},resetSelectAndTable(){this.group.tour_id=null,this.projects=[],this.group.capacity_selected=0,this.group.capacity_available=0,this.group.capacity_exceeded=0,this.shouldWatchTourId=!1,setTimeout(()=>{this.shouldWatchTourId=!0},100)},hasTourInformation(t){return t.tours&&Array.isArray(t.tours)&&t.tours.length>0},groupTourIdFromPivot(t){if(t.tours&&Array.isArray(t.tours)&&t.tours.length>0){const o=t.tours.find(i=>i.id===t.booking_tour_tour_id);return o?o.id:null}return null},capturarValor(t){this.$router.push({name:"reserve-preview",params:{id:t}})},updateCapacitySelected(t){const o=t.tours.find(i=>i.id===t.tour_id);if(o)if(t.booking_is_grouped)this.group.capacity_selected+=o.pivot.quantity||0,this.bookingTourIds.push(t.booking_tour_id);else{this.group.capacity_selected-=o.pivot.quantity||0;const i=this.bookingTourIds.indexOf(t.booking_tour_id);i!==-1&&this.bookingTourIds.splice(i,1)}this.group.capacity_available=this.group.capacity_vehicle-this.group.capacity_selected},async storeGroup(){const t=C();if(!this.isLoading){this.isLoading=!0;try{const o={tour_id:this.group.tour_id,transport_id:this.group.transport_id.value,guide_id:this.group.guide_id.value,date_departure:this.group.date_departure,capacity_vehicle:this.group.capacity_vehicle,observations:this.group.observations,capacity_selected:this.group.capacity_selected,is_generated:this.group.is_generated,is_confirmed:this.group.is_confirmed,bookings:this.bookingTourIds},v=(await b.post("https://thtsystemv2.tech/public/api/v1/groups/create",o,f)).data.data.id;t.success("El grupo se creó exitosamente",{position:"top-right",timeout:2e3}),setTimeout(()=>{this.$router.push({name:"grupo-preview",params:{group_id:v}})},3e3)}catch(o){console.error("Error al almacenar el grupo:",o),t.error("Error al almacenar el grupo",{position:"top-right",timeout:2e3}),this.isLoading=!1}}},getTurnoTexto(t){switch(t){case 1:return"Full Day";case 2:return"Mañana";case 3:return"Tarde";case 4:return"Noche";default:return""}},async fetchGuides(){try{const t=await b.get("https://thtsystemv2.tech/public/api/v1/guides/list",f);this.guiaOptions=t.data.data.map(o=>({value:o.id,label:o.fullname}))}catch(t){console.error("Error fetching departments:",t)}},async fetchTours(){try{const t=await b.get("https://thtsystemv2.tech/public/api/v1/tours/list",f);this.tourOptions=t.data.data.map(o=>({value:o.id,label:o.description}))}catch(t){console.error("Error fetching departments:",t)}}},created(){this.store=R(),this.fetchTransports(),this.fetchGuides(),this.fetchTours()}},$={class:"grid lg:grid-cols-5 grid-cols-1 gap-5"},ee={key:0,class:"text-red-500"},te={class:"grid lg:grid-cols-3 grid-cols-1 gap-5 my-6"},oe={key:0,class:"text-red-500"},re={class:"flex items-center"},ae={key:0,class:"text-red-500 ml-6"},se={key:0},le={class:"flex space-x-3 items-center text-left rtl:space-x-reverse"},ie={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},ne={key:2,class:"block min-w-[108px]"},de={key:3,class:"font-bold"},ue={key:4,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},ce={key:5,class:"block min-w-[208px]"},pe={class:"flex flex-col"},me=["onClick"],_e={key:6},he={key:7},ge={class:"flex flex-col"},be={key:8,class:"uppercase"},fe={key:9,style:{color:"red","font-weight":"bold"}},ve=l("div",{class:"text-center text-gray-500 py-4"},[l("p",null,"No hay datos disponibles en este momento."),l("p",null,"Por favor, vuelva a intentarlo más tarde.")],-1),ye={key:0,class:"text-red-500"},ke={class:"grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4"},xe=l("div",{class:"lg:col-span-1"},null,-1),Te={class:"lg:col-span-3 flex justify-end"},Ve={key:1,class:"text-green-500 font-bold animate-pulse"};function we(t,o,i,v,s,_){const T=p("vSelect"),V=p("VueSelect"),k=p("FromGroup"),y=p("Textinput"),I=p("flat-pickr"),j=p("Select"),D=p("Icon"),N=p("Checkbox"),E=p("vue-good-table"),O=p("Textarea"),w=p("Button"),F=p("Card");return r(),a("div",null,[n(F,{title:"Registrar grupo"},{default:h(()=>[l("div",null,[l("div",$,[n(k,{label:"Transporte"},{default:h(()=>[n(V,null,{default:h(()=>[n(T,{options:s.trasnportOptions,modelValue:s.group.transport_id,"onUpdate:modelValue":o[0]||(o[0]=e=>s.group.transport_id=e)},null,8,["options","modelValue"])]),_:1}),s.group.transport_id?d("",!0):(r(),a("span",ee,"Seleccione un transporte"))]),_:1}),n(y,{disabled:"",modelValue:s.group.capacity_vehicle,"onUpdate:modelValue":o[1]||(o[1]=e=>s.group.capacity_vehicle=e),label:"N° asientos",type:"number",placeholder:"Número de asientos"},null,8,["modelValue"]),n(y,{disabled:"",modelValue:s.group.capacity_selected,"onUpdate:modelValue":o[2]||(o[2]=e=>s.group.capacity_selected=e),label:"Seleccionados",type:"number",placeholder:"",class:"bg-green-200 dark:bg-green-700 border-green-500 dark:border-green-600 rounded-md text-center"},null,8,["modelValue"]),n(y,{disabled:"",modelValue:s.group.capacity_available,"onUpdate:modelValue":o[3]||(o[3]=e=>s.group.capacity_available=e),label:"Disponibles",type:"number",placeholder:"",class:"bg-blue-200 dark:bg-blue-700 border-blue-500 dark:border-blue-600 rounded-md text-center"},null,8,["modelValue"]),n(y,{disabled:"",modelValue:s.group.capacity_exceeded,"onUpdate:modelValue":o[4]||(o[4]=e=>s.group.capacity_exceeded=e),label:"Excedidos",type:"number",placeholder:"",class:"bg-red-200 dark:bg-red-700 border-red-500 dark:border-red-600 rounded-md text-center"},null,8,["modelValue"])]),l("div",te,[n(k,{label:"Guía Turístico"},{default:h(()=>[n(V,null,{default:h(()=>[n(T,{options:s.guiaOptions,modelValue:s.group.guide_id,"onUpdate:modelValue":o[5]||(o[5]=e=>s.group.guide_id=e),placeholder:"Seleccione Guía"},null,8,["options","modelValue"])]),_:1}),s.group.guide_id?d("",!0):(r(),a("span",oe,"Seleccione un guía de viaje"))]),_:1}),n(k,{label:"Fecha de partida",name:"d1"},{default:h(()=>[n(I,{modelValue:s.group.date_departure,"onUpdate:modelValue":o[6]||(o[6]=e=>s.group.date_departure=e),class:"form-control",id:"d1",placeholder:"Fecha de partida"},null,8,["modelValue"])]),_:1}),l("div",re,[n(j,{options:s.tourOptions,modelValue:s.group.tour_id,"onUpdate:modelValue":o[7]||(o[7]=e=>s.group.tour_id=e),label:"Destino turístico",placeholder:"Seleccione Tour"},null,8,["options","modelValue"]),s.group.tour_id?d("",!0):(r(),a("span",ae,"Seleccione un destino turístico")),l("button",{onClick:o[8]||(o[8]=x((...e)=>_.resetSelectAndTable&&_.resetSelectAndTable(...e),["prevent"])),class:"ml-2 mt-7 p-2 btn-outline-dark border border-red-500"},[n(D,{icon:"heroicons-outline:x-circle",class:"w-6 h-6 text-red-500"})])])])]),n(E,{class:"-mx-6 mt-6 mb-5",columns:s.columnsTraspase,styleClass:" vgt-table  table-head   v-middle striped  listview","no-data-template":t.noDataTemplate,rows:this.projects,"sort-options":{enabled:!1}},{"table-row":h(e=>[e.column.field=="abierto"?(r(),a("span",se,[l("div",le,[n(N,{modelValue:e.row.booking_is_grouped,"onUpdate:modelValue":u=>e.row.booking_is_grouped=u,onChange:u=>_.updateCapacitySelected(e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])])])):d("",!0),e.column.field=="pasajero"?(r(),a("span",ie,[_.hasTourInformation(e.row)?(r(),a(c,{key:0},[(r(!0),a(c,null,S(e.row.tours,u=>(r(),a(c,{key:u.id},[u.id===e.row.tour_id?(r(),a(c,{key:0},[u.pivot&&u.pivot.quantity?(r(),a(c,{key:0},[g(m(u.pivot.quantity),1)],64)):(r(),a(c,{key:1},[g(" - No hay cantidad disponible ")],64))],64)):d("",!0)],64))),128)),e.row.tours.some(u=>u.id===e.row.tour_id)?d("",!0):(r(),a(c,{key:0},[g(" - No hay información disponible ")],64))],64)):(r(),a(c,{key:1},[g(" - No hay información disponible ")],64))])):d("",!0),e.column.field=="vehiculo"?(r(),a("span",ne,[l("span",{class:Y([{"font-bold":!0,"text-blue-500":e.row.booking_tour_vehicle_tour===1,"text-yellow-500":e.row.booking_tour_vehicle_tour===2},"border rounded-full px-2 py-1"]),style:J({backgroundColor:e.row.booking_tour_vehicle_tour===1?"#90cdf4":"#fff9db",borderColor:"transparent"})},m(e.row.booking_tour_vehicle_tour===1?"Compartido":"Privado"),7)])):d("",!0),e.column.field=="turno"?(r(),a("span",de,[l("b",null,m(_.getTurnoTexto(e.row.booking_tour_shift_tour)),1)])):d("",!0),e.column.field=="proforma"?(r(),a("span",ue,m(e.row.booking_reference_voucher),1)):d("",!0),e.column.field=="responsablecode"?(r(),a("span",ce,[l("div",pe,[l("div",null,m(e.row.client_fullname),1),l("div",{class:"text-blue-900 dark:text-blue-300 font-bold underline cursor-pointer",onClick:x(u=>_.capturarValor(e.row.booking_id),["prevent"])},m(e.row.booking_code),9,me)])])):d("",!0),e.column.field=="hotelubi"?(r(),a("span",_e,[l("div",null,[l("div",null,m(e.row.booking_reference_location),1)])])):d("",!0),e.column.field=="telephone"?(r(),a("span",he,[l("div",ge,[l("div",null,m(e.row.client_telephone),1),l("div",null,m(e.row.client_cellphone),1)])])):d("",!0),e.column.field=="observaciones"?(r(),a("span",be,[_.hasTourInformation(e.row)?(r(!0),a(c,{key:0},S(e.row.tours,u=>(r(),a(c,null,[u.id===_.groupTourIdFromPivot(e.row)?(r(),a(c,{key:0},[u.pivot.observation?(r(),a(c,{key:0},[g(m(u.pivot.observation),1)],64)):(r(),a(c,{key:1},[g(" - No hay información disponible ")],64))],64)):d("",!0)],64))),256)):(r(),a(c,{key:1},[g(" - No hay información disponible ")],64))])):d("",!0),e.column.field==="deuda"?(r(),a("span",fe,m(e.row.deuda),1)):d("",!0)]),"no-data":h(()=>[ve]),_:1},8,["columns","no-data-template","rows"]),!this.projects||this.projects.length===0?(r(),a("div",ye,"Debe seleccionar el tour para cargar los pasajeros de las reservas pendientes.")):d("",!0),n(O,{label:"Observaciones",type:"text",placeholder:"Observaciones",modelValue:s.group.observations,"onUpdate:modelValue":o[9]||(o[9]=e=>s.group.observations=e),class:"lg:w-1/2 my-6"},null,8,["modelValue"]),l("div",ke,[xe,l("div",Te,[n(w,{text:"Cancelar",btnClass:"btn-light mr-2",link:"/app/grupo"}),s.isLoading?(r(),a("p",Ve,"Guardando...")):(r(),K(w,{key:0,onClick:x(_.storeGroup,["prevent"]),text:"Generar",btnClass:"btn-dark"},null,8,["onClick"]))])])]),_:1})])}const ze=X(Z,[["render",we]]);export{ze as default};
