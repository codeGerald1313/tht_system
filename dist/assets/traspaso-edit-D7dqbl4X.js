import{B as I}from"./index-DOAnfiMc.js";import{C as E}from"./index-CoHYOsAq.js";import{F as z}from"./index-B8UWVO2a.js";import{I as H}from"./index-BVBpVZEi.js";import{a as B}from"./basic-tablle-data-AN7MRnVF.js";import{u as N}from"./project-7SCfM68f.js";import{T as P}from"./index-B-jw8vvV.js";import{T as S}from"./index-C6OqzQN-.js";import{_ as R}from"./repeater-Btx_aIdJ.js";import{V as L}from"./VueSelect-CeaoYkHk.js";import{I as D}from"./index-DxXSMpKh.js";import{C as G}from"./index-2iT3jdVW.js";import{S as U}from"./index-Jp7OXFH1.js";import{u as q,s as F,y as M,B as _,b as T,d as r,e as i,g as f,c as d,o as c,f as s,t as h,q as u,p as j}from"./index-CyQKzwXM.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-cleave.min-BqMPJFk5.js";/* empty css                                              */import"./user-1-Dmhlt7-s.js";import"./user-4-_9lLfOE2.js";import"./user-6-Bk4CTUVR.js";import"./av-2-D6_jNZbn.js";import"./v4-D8aEg3BZ.js";import"./vee-validate.esm-BhM9XJEy.js";import"./VueSelect.vue_vue_type_style_index_0_lang-XABNT5P5.js";const g=q().headers(),J={components:{Button:I,VueSelect:L,id:null,otherData:null,Card:E,Checkbox:G,Textinput:S,Select:U,InputGroup:H,FromGroup:z,Icon:D,Textarea:P,Repeater:R},data(){return{advancedTable:B,store:null,cellClient:null,totalCobranza:null,tours:[],fechas:[],agencyOptions:[],booking:{id:"",type_booking:"",user_id:"",tour_id:"",bookingorigin_id:"",arrivalplace_id:"",client_id:"",agency_id:"",origintransfer_id:"",code:"",correlative:"",date_arrival:"",time_arrival:"",nro_pax:"",is_reference_pax:"",nro_pax_childs:"",nro_pax_adults:"",nro_pax_olds:"",reference_voucher:"",observations:"",arrival_place:"",contact_emergency:"",telephone_emergency:"",reference_location:"",is_igv:"",igv:"",is_detail_subtotaltour:"",subtotal_tour:"",subtotal_hotel:"",subtotal_flight:"",subtotal_catalog:"",discount:"",total:"",total_paid:"",total_billing:"",is_grouped:"",description_grouped:"",is_checkin:"",is_checkout:"",is_postponed:"",user_id_postponed:"",postponed_description:"",text_amount:"",register_flight:"",is_favorite:"",is_breakfast:"",nro_breakfast:"",start_breakfast:"",end_breakfast:"",pending_tours:"",origintransfer:"",program_transfer:""},current:1,cobranzas:[],tourIds:[],basicTableData:[{codigo:"HRS2024-000231",nombreHotel:"HOTEL POSADA LODGE (TARAPOTO)",detallehotel:"HAB. TRIPLE (AC) (2 hab. x 6 noches)",contacto:"Cel: 963122673"}],client:{document:"",fullname:"",tradename:"",address:"",cellphone:"",telephone:"",email:"",date_birthday:""},modelValue:!1,perpage:3,show:!1,showEdit:!1,show2:!1,realizado:"--",pageRange:10,actions:[{name:"edit",icon:"heroicons:pencil-square",doit:o=>{this.openModalEdit(o)}},{name:"delete",icon:"heroicons-outline:trash",doit:o=>{this.removeProject(o)}}],vehiculos:[{value:1,label:"Compartido"},{value:1,label:"Privado"}],turnos:[{value:1,label:"Full Day"},{value:2,label:"Mañana"},{value:3,label:"Tarde"},{value:4,label:"Noche"}],columns:[{label:"¿Es Abierto?",field:"abierto"},{label:"Tours Turístico",field:"tour"},{label:"Vehículo",field:"vehiculo"},{label:"Turno",field:"turno"},{label:"N° pax",field:"pasajero"},{label:"Fecha",field:"fecha"},{label:"Observación",field:"observation"},{label:"Realizado",field:"realizado"},{label:"Action",field:"action"}],columnsTraspase:[{label:"N° pax",field:"pasajero"},{label:"Tours Turístico",field:"tour"},{label:"Vehículo",field:"vehiculo"},{label:"Turno",field:"turno"},{label:"Fecha Asigsnada",field:"fecha"},{label:"Precio corporativo	",field:"preciocorporativo"},{label:"Cobranza	",field:"cobranza"}],columnsReservaHotelExpense:[{label:"Habitacion",field:"habitacion"},{label:"N° PAX	",field:"pasajeross"},{label:"Cant. HAB",field:"cantidad"},{label:"Check-In",field:"checkin"},{label:"Check-out",field:"checkout"},{label:"#Noches",field:"noches"},{label:"Precio",field:"precio"},{label:"Descuento",field:"descuento"},{label:"Adicional",field:"adicional"},{label:"Observación",field:"observacion"},{label:"Subtotal",field:"subtotal"},{label:"",field:"action"}],selectedBooking:null,searchTerm:"",filteredOptions:[],bookingsOptions:[],bedroomOptions:[{value:"simple",label:"HAB. SIMPLE"},{value:"simple_ac",label:"HAB. SIMPLE (AC)"},{value:"matrimonial",label:"HAB. MATRIMONIAL"},{value:"matrimonial_ac",label:"HAB. MATRIMONIAL (AC)"},{value:"doble",label:"HAB. DOBLE"},{value:"doble_ac",label:"HAB. DOBLE (AC)"},{value:"triple",label:"HAB. TRIPLE"},{value:"triple_ac",label:"HAB. TRIPLE (AC)"},{value:"grupal",label:"HAB. GRUPAL"},{value:"grupal_ac",label:"HAB. GRUPAL (AC)"}],rows:[{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"},{item:"Headphone",qty:2,price:"$600.25",total:"$1200.50"}],selectedTours:[],columnsReservasAlojamiento:[{label:"Código",field:"codigo"},{label:"Nombre Hotel",field:"nombreHotel"},{label:"Detalle Hab.	",field:"detallehotel"},{label:"Action",field:"action"}]}},setup(o){const e=F(null);return M(()=>e.value,(n,a)=>{}),{modelValue:e}},methods:{handleSelectionChange(o){},handleCheckboxChange(o){const e=this.selectedTours.indexOf(o);e!==-1?this.selectedTours.splice(e,1):this.selectedTours.push(o)},handleGuardarTraspaso(){const o={agency_id:this.booking.agency_id,observations:this.booking.observations};_.post(`https://thtsystemv2.tech/public/api/v1/bookings/update-traspase/${this.booking.id}`,o,g).then(a=>{T().success(a.data.message),setTimeout(()=>{this.$router.push("/app/wishlist")},3e3)}).catch(a=>{console.error("Error al guardar el traspaso:",a)});const e=[];this.tourIds.forEach(a=>{this.tours.some(b=>b.id===a)&&e.push(a)}),_.post("https://thtsystemv2.tech/public/api/v1/bookings/update-delegated-payments-transfer",{ids:e,delegated_payments:this.cobranzas,agency_id:this.booking.agency_id,booking_id:this.booking.id},g).then(a=>{}).catch(a=>{const l=T();console.error("Error al guardar el traspaso:",a),l.error("Error al guardar el traspaso")})},filterOptions(){const o=this.searchTerm.toLowerCase();this.bookingsOptions&&(this.filteredOptions=this.bookingsOptions.filter(e=>e.label.toLowerCase().includes(o)))}},watch:{modelValue(o,e){},"booking.tour_id":function(o,e){_.get(`https://thtsystemv2.tech/public/api/v1/bookings/record/${o}`,g).then(n=>{this.cellClient=n.data.data.book.client.cellphone,this.fechas=n.data.data.tours,this.cobranzas=n.data.data.tours.map(a=>a.delegated_payment).filter(a=>a!==null),this.tourIds=n.data.data.tours.map(a=>a.id)}).catch(n=>{console.error("Error al cargar el registro:",n)})},$route:{immediate:!0,handler(o,e){const n=o.params.id;this.booking.id=n;const a=JSON.parse(o.query.otherData);this.booking.tour_id=a.origintransfer_id,this.booking.observations=a.observations,this.tours=a.program_transfer,this.booking.nro_pax=a.origintransfer.nro_pax,this.booking.reference_location=a.origintransfer.reference_location,this.totalCobranza=a.total,this.booking.agency_id=a.agency_id}},tours:{deep:!0,handler(o,e){let n=0;for(let a=0;a<o.length;a++){const l=o[a],b=parseFloat(l.pivot.quantity),m=parseFloat(l.price_corporate);!isNaN(b)&&!isNaN(m)&&(this.cobranzas[a]=b*m,n+=this.cobranzas[a])}this.totalCobranza=n}}},created(){this.store=N()},mounted(){_.get("https://thtsystemv2.tech/public/api/v1/bookings/code-list",g).then(o=>{this.bookingsOptions=o.data.bookings.map(e=>({value:e.id,label:`${e.code}
${e.client}`})),this.bookingsOptions.length>0&&this.filterOptions()}).catch(o=>{console.error("Error al obtener las reservas:",o)}),_.get("https://thtsystemv2.tech/public/api/v1/agencies/list-formated",g).then(o=>{this.agencyOptions=o.data.agencies.map(e=>({value:e.id,label:`${e.firstName}
${e.document}`})),this.agencyOptions.length>0&&this.filterOptions()}).catch(o=>{console.error("Error al obtener las agencias:",o)})}},X={class:"grid grid-cols-2 gap-0"},K={class:"list space-y-8 mt-5"},Q={class:"flex space-x-3 rtl:space-x-reverse"},W={class:"flex-none text-2xl text-slate-600 dark:text-slate-300"},Y={class:"flex-1"},Z=s("div",{class:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"}," N° paxs ",-1),ee={href:"mailto:someone@example.com",class:"text-base text-slate-600 dark:text-slate-50"},te={class:"flex space-x-3 rtl:space-x-reverse"},oe={class:"flex-none text-2xl text-slate-600 dark:text-slate-300"},ae={class:"flex-1"},le=s("div",{class:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"}," Cel ",-1),se={href:"tel:0189749676767",class:"text-base text-slate-600 dark:text-slate-50"},ie={class:"flex space-x-3 rtl:space-x-reverse"},ne={class:"flex-none text-2xl text-slate-600 dark:text-slate-300"},re={class:"flex-1"},ce=s("div",{class:"uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"}," Referencia ubicación ",-1),de={class:"text-base text-slate-600 dark:text-slate-50"},ue={class:"grid grid-cols-1"},pe={class:"flex flex-col"},he={key:0},be={class:"flex space-x-3 items-center text-left rtl:space-x-reverse"},me={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[208px]"},_e={key:3,style:{"font-weight":"bold"}},fe={key:4,class:"block w-full"},ge={key:5},ve={key:6},xe=s("span",null,null,-1),ke={key:7},ye={key:8},Ce={class:"mt-1 self-end"},Te={class:"grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4"},Ve=s("div",{class:"lg:col-span-1"},null,-1),Ae={class:"lg:col-span-3 flex justify-end"};function Oe(o,e,n,a,l,b){const m=d("Select"),x=d("FromGroup"),k=d("Icon"),v=d("Textinput"),V=d("Checkbox"),A=d("vue-good-table"),O=d("InputGroup"),y=d("Button"),w=d("Card");return c(),r("div",null,[i(w,{class:"mb-0",title:"Editar Traspaso"},{default:f(()=>[s("div",X,[i(x,{label:"Seleccionar Reserva",class:"mr-4"},{default:f(()=>[i(m,{modelValue:l.booking.tour_id,"onUpdate:modelValue":e[0]||(e[0]=t=>l.booking.tour_id=t),options:l.filteredOptions,disabled:""},null,8,["modelValue","options"])]),_:1}),i(x,null,{default:f(()=>[i(m,{modelValue:l.booking.agency_id,"onUpdate:modelValue":e[1]||(e[1]=t=>l.booking.agency_id=t),options:l.agencyOptions,label:"Agencia que va operar"},null,8,["modelValue","options"])]),_:1}),s("ul",K,[s("li",Q,[s("div",W,[i(k,{icon:"heroicons:envelope"})]),s("div",Y,[Z,s("a",ee,h(l.booking.nro_pax),1)])]),s("li",te,[s("div",oe,[i(k,{icon:"heroicons:phone-arrow-up-right"})]),s("div",ae,[le,s("a",se,h(l.cellClient),1)])]),s("li",ie,[s("div",ne,[i(k,{icon:"heroicons:map"})]),s("div",re,[ce,s("div",de,h(l.booking.reference_location),1)])])]),i(x,{label:"Observaciones"},{default:f(()=>[i(v,{modelValue:l.booking.observations,"onUpdate:modelValue":e[2]||(e[2]=t=>l.booking.observations=t),type:"text",placeholder:"Ingrese el número de teléfono fijo"},null,8,["modelValue"])]),_:1})]),s("div",ue,[s("div",pe,[i(A,{class:"-mx-6 mt-6 mb-5",columns:l.columnsTraspase,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:this.tours,"pagination-options":{enabled:!1,perPage:l.perpage},"sort-options":{enabled:!1}},{"table-row":f(t=>{var C;return[t.column.field=="abierto"?(c(),r("span",he,[s("div",be,[i(V,{modelValue:l.selectedTours,"onUpdate:modelValue":e[3]||(e[3]=p=>l.selectedTours=p),onChange:p=>b.handleCheckboxChange(t.row.id)},null,8,["modelValue","onChange"])])])):u("",!0),t.column.field=="tour"?(c(),r("span",me,h(t.row.description),1)):u("",!0),t.column.field=="vehiculo"?(c(),r("span",{key:2,class:j({"text-yellow-500 font-bold":t.row.pivot.vehicle_tour===2,"text-blue-500 font-bold":t.row.pivot.vehicle_tour===1})},h(t.row.pivot.vehicle_tour===2?"Privado":"Compartido"),3)):u("",!0),t.column.field=="turno"?(c(),r("span",_e,h(t.row.pivot.shift_tour===1?"Full Day":t.row.pivot.shift_tour===2?"Mañana":t.row.pivot.shift_tour===3?"Tarde":"Noche"),1)):u("",!0),t.column.field=="pasajero"?(c(),r("span",fe,h(t.row.pivot.quantity),1)):u("",!0),t.column.field=="fecha"?(c(),r("span",ge,h((C=l.fechas[t.index])==null?void 0:C.created_at),1)):u("",!0),t.column.field=="preciocorporativo"?(c(),r("span",ve,[i(v,{type:"text",placeholder:"Precio corporativo",modelValue:l.tours[t.index].price_corporate,"onUpdate:modelValue":p=>l.tours[t.index].price_corporate=p},null,8,["modelValue","onUpdate:modelValue"]),xe])):u("",!0),t.column.field=="realizado"?(c(),r("span",ke,[i(v,{type:"text",placeholder:"Gaaaaaaa",modelValue:l.realizado,"onUpdate:modelValue":e[4]||(e[4]=p=>l.realizado=p),disabled:""},null,8,["modelValue"])])):u("",!0),t.column.field=="cobranza"?(c(),r("span",ye,[i(v,{type:"text",placeholder:"-",modelValue:l.cobranzas[t.index],"onUpdate:modelValue":p=>l.cobranzas[t.index]=p},null,8,["modelValue","onUpdate:modelValue"])])):u("",!0)]}),_:1},8,["columns","rows","pagination-options"]),s("div",Ce,[i(O,{label:"T. TOURS S/. ",modelValue:l.totalCobranza,"onUpdate:modelValue":e[5]||(e[5]=t=>l.totalCobranza=t),class:"append",name:"hi_Fullname",type:"text",placeholder:"",horizontal:"",appendIcon:"heroicons-outline:cash",classInput:"text-right"},null,8,["modelValue"])])])]),s("div",Te,[Ve,s("div",Ae,[i(y,{text:"Cancelar",btnClass:"btn-light mr-2",onClick:e[6]||(e[6]=t=>o.closeModal())}),i(y,{type:"submit",text:"Guardar Traspaso",btnClass:"btn-dark",onClick:b.handleGuardarTraspaso},null,8,["onClick"])])])]),_:1})])}const Ye=$(J,[["render",Oe]]);export{Ye as default};
