import{C as K}from"./index-COOwjdNO.js";import{C as le,w as ne}from"./widget-bg-1-CWD4kKyL.js";import{e as ie,f as ce,m as de,g as ue,h as me,i as be}from"./data-Bltf9LnN.js";import{D as fe,_ as he}from"./SelectMonth-CUibLU_3.js";import{M as pe}from"./Map-Bo_i-sdf.js";import"./vue-tailwind-datepicker-CG1Mmuub.js";import{I as q}from"./index-BffMpWx5.js";import{B as A}from"./index-CvW4wJPB.js";import{d as ge}from"./dayjs.min-DusE5vfB.js";import{M as J}from"./index-2mWc_vCg.js";import{u as _e}from"./project-BEvoPr6t.js";import{s as h,u as ve,z as H,C as U,y as ke,c as P,o as t,d as o,f as r,e as b,k as p,F as n,m as C,p as S,t as l,g,h as m,q as i,b as k,B as M}from"./index-BFn_3Gdk.js";import"./vue-cleave.min-ClV1fVcS.js";/* empty css                                              */import{w as ye}from"./window-Ds9AqdYU.js";import{u as W}from"./user-1-Dmhlt7-s.js";import{u as xe,a as X,b as G}from"./user-4-_9lLfOE2.js";import{u as we,a as Ce}from"./user-6-Bk4CTUVR.js";import{_ as Se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DEP2tP3N.js";import"./index-BaZVwneS.js";import"./basic-tablle-data-AN7MRnVF.js";import"./index-Bs_uOHMv.js";import"./menu-BIf-sRSE.js";import"./keyboard-CmTzE63w.js";import"./use-outside-click-RVZZ1L_X.js";import"./focus-management-C7_eiYjk.js";import"./use-resolve-button-type-0pot5Y2u.js";import"./open-closed-Bo1bAx4t.js";import"./listbox-f-mNa9Vm.js";import"./hidden-Br4jqfTk.js";import"./tslib.es6-loakx6tV.js";import"./transition-DUAAdbaG.js";import"./micro-task-CxIZtCgj.js";import"./av-2-D6_jNZbn.js";import"./v4-D8aEg3BZ.js";const Ee={class:"flex flex-col justify-center items-center"},$e=r("h1",{class:"text-3xl font-bold mb-4"},"Cronograma de salidas",-1),Te={class:"flex flex-col lg:flex-row justify-center items-center w-full mt-4"},De={class:"flex items-center"},Fe=r("span",{class:"mb-2 lg:mb-0 s mr-4 lg:mr-0 font-bold"},"Seleccionar fecha",-1),Ae={class:"flex items-center"},Me={class:"ml-3"},Pe={class:"grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 mt-8"},Ie=["onClick"],Be={class:"block mb-6 text-sm text-slate-900 dark:text-white font-bold"},Ne={class:"block mb- text-2xl text-purple-600 dark:text-purple-300 font-bold mb-6"},Re={class:"flex space-x-2 rtl:space-x-reverse"},Oe={class:"flex-none text-4xl text-purple-600 dark:text-purple-300"},je={class:"flex-1"},ze={class:"block mb-[2px] bg-blue-200 dark:bg-blue-300 bg-opacity-25 dark:bg-opacity-50 border-dotted border-blue-500 border rounded-full py-1 px-3 text-blue-600 dark:text-blue-300"},Ve={class:"block mb-[2px] bg-yellow-200 dark:bg-yellow-300 bg-opacity-25 dark:bg-opacity-50 border-dotted border-yellow-500 border rounded-full py-1 px-3 text-yellow-600 dark:text-yellow-300"},Ye=r("span",{class:"block mb-1 text-slate-600 dark:text-slate-300"},"Click para ver detalles",-1),Le={class:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6"},qe={class:"py-3 px-5"},Je={key:0,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},He={key:2,style:{"font-weight":"bold"}},Ue={key:3,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},We={key:4,class:"flex flex-col items-center"},Xe={key:5},Ge={key:6},Ke=r("strong",null,"Cliente C:",-1),Qe=r("strong",null,"Teléfono E:",-1),Ze=r("br",null,null,-1),et=r("strong",null,"Contacto E:",-1),tt=r("br",null,null,-1),ot={key:7,class:"uppercase"},at={key:8,style:{color:"red","font-weight":"bold"}},st={key:0},rt={key:1},lt={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},nt={key:3,class:"flex flex-col items-center"},it={key:4},ct={key:5},dt={key:6,class:"uppercase"},ut={key:7,style:{color:"red","font-weight":"bold"}},mt={__name:"Breadcrumbs2",setup(I){const _=h(null),y=ve().headers();_e();const E=h(R());function R(){const a=new Date;return a.setHours(a.getHours()-5),a.toISOString().slice(0,10)}const v=h([]),$=h([]);H(()=>{const a=ge().format("YYYY-MM-DD");_.value=a});const Q=U(()=>B.value.map(a=>`${a.description} (${a.total} pax)`).join(", ")),Z=[{label:"N° pax",field:"pasajero"},{label:"Vehículo",field:"vehiculo"},{label:"Turno",field:"turno"},{label:"Responsable y Código",field:"responsablecode"},{label:"Porforma",field:"proforma"},{label:"Hotel / Ubicacion",field:"hotelubi"},{label:"Teléfonos",field:"telephone"},{label:"Observaciones",field:"observaciones"},{label:"Deuda",field:"deuda"}],B=h([]),ee=[{label:"Nombre de Tours",field:"tourp"},{label:"N° pax",field:"pasajerop"},{label:"Proforma",field:"proformap"},{label:"Responsable y Código",field:"responsablecodep"},{label:"Hotel / Ubicacion",field:"hotelubip"},{label:"Teléfonos",field:"telephonep"},{label:"Observaciones",field:"observacionesp"},{label:"Deuda",field:"deudap"}],T=h(!1),D=h(!1),te=async a=>{T.value=!T.value;const s=k();try{const c=await M.get(`https://thtsystemv2.tech/public/api/v1/bookings/booking-tours/${a}`,{...y,params:{date:_.value}});if(c.data&&c.data.data&&c.data.data.length>0){v.value=c.data.data,console.log(v.value);let u=0;v.value.forEach(w=>{w.tours&&w.tours.length>0&&w.tours.forEach(F=>{F.id===w.tour_id&&F.pivot&&F.pivot.quantity&&(u+=F.pivot.quantity)})});const{tour_description:f,booking_tour_date_assigned:e}=v.value[0],d=e;O.value=`Datos de salida | ${f} (${d}) ${u} PASAJEROS`,s.info("Tours Pendientes encontrados con éxito")}else s.info("Este Tour no tiene Reservas Pendientes"),this.projects=[]}catch(c){s.error("Error al cargar las reservas pendientes para este tour o Este Tour no tiene Reservas Pendientes"),console.error("Error al llamar al método en el backend:",c),this.projects=[]}},O=h(""),oe=async()=>{D.value=!D.value;const a=k();try{const s=await M.get("https://thtsystemv2.tech/public/api/v1/bookings/booking-tours-open",{...y,params:{date:_.value}});s.data&&s.data.data&&s.data.data.length>0?($.value=s.data.data,a.info("Tours Pendientes encontrados con éxito")):(a.info("Este Tour no tiene Reservas Pendientes"),this.projects=[])}catch(s){a.error("Error al cargar las reservas pendientes para este tour o Este Tour no tiene Reservas Pendientes"),console.error("Error al llamar al método en el backend:",s),this.projects=[]}},ae=()=>{j()},x=h([]),j=()=>{M.get(`https://thtsystemv2.tech/public/api/v1/bookings/cronograma/${_.value}`,y).then(a=>{const s=a.data.results;if(B.value=a.data.tours_open,s&&s.length>0)x.value=s.map((u,f)=>({id:u.id,title:`${u.description}`,count:`${u.total} PASAJEROS`,bg:V(),text:"",percent:u.vehicle_shared,private:u.vehicle_private,icon:Y(u.vehicle_shared),percentClass:"text-slate-500 dark:text-slate-400 font-bold"})),k().success("Tours normales y abiertos encontrados para este día");else{const c=k();(!s||s.length===0)&&(c.info("Para este día no hay salidas programadas"),x.value=[])}}).catch(a=>{console.error("Error fetching data:",a)})},N=a=>a.tours&&Array.isArray(a.tours)&&a.tours.length>0,z=a=>{if(a.tours&&Array.isArray(a.tours)&&a.tours.length>0){const s=a.tours.find(c=>c.id===a.tour_id);return s?s.id:null}return null},V=a=>{const s=["bg-yellow-500","bg-blue-500","bg-green-500","bg-purple-500","bg-red-500","bg-teal-500","bg-pink-500","bg-orange-500","bg-indigo-500","bg-cyan-500","bg-amber-500","bg-lime-500","bg-emerald-500","bg-violet-500","bg-fuchsia-500","bg-rose-500"],c=Math.floor(Math.random()*s.length);return s[c]},Y=a=>a>0?"heroicons:users":"heroicons:user",se=h(""),re=[{title:"Reservas Abiertas(Pendientes de asignar fecha)",border:"border-info-500",color:"text-info-500",icon:"heroicons-outline:information-circle"}],L=U(()=>x.value.filter(a=>a.title.toLowerCase().includes(se.value.toLowerCase())));return console.log(L.value),ke(E,async a=>{_.value=a;try{const s=await M.get(`https://thtsystemv2.tech/public/api/v1/bookings/cronograma/${a}`,y),c=s.data.results;if(B.value=s.data.tours_open,c&&c.length>0)x.value=c.map((f,e)=>({id:f.id,title:`${f.description}`,count:`${f.total} PASAJEROS`,bg:V(e),text:"",percent:f.vehicle_shared,private:f.vehicle_private,icon:Y(f.vehicle_shared),percentClass:"text-slate-500 dark:text-slate-400 font-bold"})),k().success("Tours normales y abiertos encontrados para este día");else{const u=k();(!c||c.length===0)&&(u.info("Para este día no hay salidas programadas"),x.value=[])}}catch(s){console.error("Error fetching data:",s)}}),H(()=>{j()}),(a,s)=>{const c=P("flat-pickr"),u=P("router-link"),f=P("vue-good-table");return t(),o(n,null,[r("div",Ee,[$e,r("div",Te,[r("div",De,[Fe,r("div",Ae,[b(p(A),{icon:"heroicons-outline:calendar-days",btnClass:"btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm mr-3",iconClass:"text-lg"}),b(c,{class:"form-control",id:"date_birthday",placeholder:"yyyy, dd M",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"},modelValue:E.value,"onUpdate:modelValue":s[0]||(s[0]=e=>E.value=e)},null,8,["modelValue"]),r("div",Me,[b(p(A),{icon:"heroicons-outline:arrows-up-down",btnClass:"btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm ",iconClass:"text-lg",onClick:ae})])])])])]),r("div",Pe,[(t(!0),o(n,null,C(L.value,(e,d)=>(t(),o("div",{key:d,class:S([e.bg,"rounded-md p-4 bg-opacity-25 dark:bg-opacity-25 relative z-10 cursor-pointer"]),onClick:w=>te(e.id)},[r("span",Be,l(e.title),1),r("span",Ne,l(e.count),1),r("div",Re,[r("div",Oe,[b(p(q),{icon:e.icon,class:"text-purple-600 dark:text-purple-300"},null,8,["icon"])]),r("div",je,[r("span",ze,l(e.percent)+" Compartidos",1),r("span",Ve,l(e.private)+" Privado",1),Ye])])],10,Ie))),128))]),r("div",Le,[r("div",{onClick:oe},[(t(),o(n,null,C(re,(e,d)=>b(p(K),{bodyClass:"p-0",key:d,noborder:""},{default:g(()=>[r("header",{class:S(["border-b px-4 pt-4 pb-3 flex items-center",e.border])},[r("span",{class:S(["text-3xl inline-block ltr:mr-2 rtl:ml-2",e.color])},[b(p(q),{icon:e.icon},null,8,["icon"])],2),r("h6",{class:S(["card-title mb-0",e.color])},l(e.title),3)],2),r("div",qe,l(Q.value),1)]),_:2},1024)),64))]),b(p(J),{title:O.value,label:"Modal title",activeModal:T.value,onClose:s[1]||(s[1]=e=>T.value=!1),sizeClass:"max-w-7xl"},{default:g(()=>[b(f,{columns:Z,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:v.value,"pagination-options":{enabled:!1},"sort-options":{enabled:!1}},{"table-row":g(e=>[e.column.field=="pasajero"?(t(),o("span",Je,[N(e.row)?(t(),o(n,{key:0},[(t(!0),o(n,null,C(e.row.tours,d=>(t(),o(n,{key:d.id},[d.id===e.row.tour_id?(t(),o(n,{key:0},[d.pivot&&d.pivot.quantity?(t(),o(n,{key:0},[m(l(d.pivot.quantity),1)],64)):(t(),o(n,{key:1},[m(" - No hay cantidad disponible ")],64))],64)):i("",!0)],64))),128)),e.row.tours.some(d=>d.id===e.row.tour_id)?i("",!0):(t(),o(n,{key:0},[m(" - No hay información disponible ")],64))],64)):(t(),o(n,{key:1},[m(" - No hay información disponible ")],64))])):i("",!0),e.column.field=="vehiculo"?(t(),o("span",{key:1,class:S({"text-yellow-500":e.row.booking_tour_vehicle_tour===2,"text-blue-500":e.row.booking_tour_vehicle_tour===1})},l(e.row.booking_tour_vehicle_tour===2?"Privado":"Compartido"),3)):i("",!0),e.column.field=="turno"?(t(),o("span",He,l(e.row.booking_tour_shift_tour===1?"Full Day":e.row.booking_tour_shift_tour===2?"Mañana":e.row.booking_tour_shift_tour===3?"Tarde":"Noche"),1)):i("",!0),e.column.field=="proforma"?(t(),o("span",Ue,l(e.row.booking_reference_voucher),1)):i("",!0),e.column.field=="responsablecode"?(t(),o("span",We,[r("span",null,l(e.row.client_fullname),1),b(u,{to:"reserve-preview/"+e.row.booking_id},{default:g(()=>[b(p(A),{btnClass:"btn-dark btn-sm"},{default:g(()=>[m(l(e.row.booking_code),1)]),_:2},1024)]),_:2},1032,["to"])])):i("",!0),e.column.field=="hotelubi"?(t(),o("span",Xe,[r("div",null,[r("div",null,l(e.row.booking_reference_location),1)])])):i("",!0),e.column.field=="telephone"?(t(),o("span",Ge,[Ke,m(" "+l(e.row.client_cellphone)+" ",1),e.row.booking_telephone_emergency?(t(),o(n,{key:0},[Qe,m(" "+l(e.row.booking_telephone_emergency)+" ",1),Ze],64)):e.row.booking_contact_emergency?(t(),o(n,{key:1},[et,m(" "+l(e.row.booking_contact_emergency)+" ",1),tt],64)):i("",!0)])):i("",!0),e.column.field=="observaciones"?(t(),o("span",ot,[N(e.row)?(t(!0),o(n,{key:0},C(e.row.tours,d=>(t(),o(n,null,[d.id===z(e.row)?(t(),o(n,{key:0},[d.pivot.observation?(t(),o(n,{key:0},[m(l(d.pivot.observation),1)],64)):(t(),o(n,{key:1},[m(" - No hay información disponible ")],64))],64)):i("",!0)],64))),256)):(t(),o(n,{key:1},[m(" - No hay información disponible ")],64))])):i("",!0),e.column.field==="deuda"?(t(),o("span",at,l(e.row.deuda),1)):i("",!0)]),_:1},8,["rows"])]),_:1},8,["title","activeModal"]),b(p(J),{title:"RESERVAS ABIERTAS (Pendientes de asignar fechas)",label:"Modal title",activeModal:D.value,onClose:s[2]||(s[2]=e=>D.value=!1),sizeClass:"max-w-6xl"},{default:g(()=>[b(f,{columns:ee,styleClass:" vgt-table  table-head   v-middle striped  listview",rows:$.value,"pagination-options":{enabled:!1},"sort-options":{enabled:!1}},{"table-row":g(e=>[e.column.field=="tourp"?(t(),o("span",st,l(e.row.tour_description),1)):i("",!0),e.column.field=="pasajerop"?(t(),o("span",rt,l(e.row.booking_nro_pax),1)):i("",!0),e.column.field=="proformap"?(t(),o("span",lt,l(e.row.booking_reference_voucher),1)):i("",!0),e.column.field=="responsablecodep"?(t(),o("span",nt,[r("span",null,l(e.row.client_fullname),1),b(u,{to:"reserve-preview/"+e.row.booking_id},{default:g(()=>[b(p(A),{btnClass:"btn-dark btn-sm"},{default:g(()=>[m(l(e.row.booking_code),1)]),_:2},1024)]),_:2},1032,["to"])])):i("",!0),e.column.field=="hotelubip"?(t(),o("span",it,[r("div",null,[r("div",null,l(e.row.booking_reference_location),1)])])):i("",!0),e.column.field=="telephonep"?(t(),o("span",ct,l(e.row.client_cellphone),1)):i("",!0),e.column.field=="observacionesp"?(t(),o("span",dt,[N(e.row)?(t(!0),o(n,{key:0},C(e.row.tours,d=>(t(),o(n,null,[d.id===z(e.row)?(t(),o(n,{key:0},[d.pivot.observation?(t(),o(n,{key:0},[m(l(d.pivot.observation),1)],64)):(t(),o(n,{key:1},[m(" - No hay información disponible ")],64))],64)):i("",!0)],64))),256)):(t(),o(n,{key:1},[m(" - No hay información disponible ")],64))])):i("",!0),e.column.field==="deudap"?(t(),o("span",ut,l(e.row.deuda),1)):i("",!0)]),_:1},8,["rows"])]),_:1},8,["title","activeModal"])])],64)}}},bt={mixins:[ye],components:{Card:K,CompanyTable:le,Map:pe,DropEvent:fe,SelectMonth:he,Breadcrumb:mt},data(){return{widget1:ne,columnCharthome:ie,columnCharthomeDark:ce,mostSales:de,fillterMap:"usa",statistics:[{name:ue,title:"Totel revenue",count:"3,564",bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:me,title:"Products sold",count:"564",bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:be,title:"Growth",count:"+5.0%",bg:"bg-[#EAE5FF] dark:bg-slate-900	"}],activity:[{id:1,img:W},{id:2,img:xe},{id:3,img:X},{id:4,img:G},{id:5,img:we},{id:6,img:Ce},{id:7,img:W},{id:8,img:G},{id:9,img:X}]}},computed:{columnCharthomeComputed(){return{series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}],chartOptions:{chart:{toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"45%"}},legend:{show:!0,position:"top",horizontalAlign:"right",fontSize:"12px",fontFamily:"Inter",offsetY:-30,markers:{width:8,height:8,offsetY:-1,offsetX:-5,radius:12},labels:{colors:this.$store.themeSettingsStore.isDark?"#CBD5E1":"#475569"},itemMargin:{horizontal:18,vertical:0}},title:{text:"Revenue Report",align:"left",offsetX:this.$store.themeSettingsStore.direction?"0%":0,offsetY:13,floating:!1,style:{fontSize:"20px",fontWeight:"500",fontFamily:"Inter",color:this.$store.themeSettingsStore.isDark?"#fff":"#0f172a"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},yaxis:{opposite:!!this.$store.themeSettingsStore.direction,labels:{style:{colors:this.$store.themeSettingsStore.isDark?"#CBD5E1":"#475569",fontFamily:"Inter"}}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],labels:{style:{colors:this.$store.themeSettingsStore.isDark?"#CBD5E1":"#475569",fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},fill:{opacity:1},tooltip:{y:{formatter:function(I){return"$ "+I+" thousands"}}},colors:["#4669FA","#0CE7FA","#FA916B"],grid:{show:!0,borderColor:this.$store.themeSettingsStore.isDark?"#334155":"#E2E8F0",strokeDashArray:10,position:"back"},responsive:[{breakpoint:600,options:{legend:{position:"bottom",offsetY:8,horizontalAlign:"center"},plotOptions:{bar:{columnWidth:"80%"}}}}]}}}}};function ft(I,_,y,E,R,v){const $=P("Breadcrumb");return t(),o("div",null,[b($)])}const Kt=Se(bt,[["render",ft]]);export{Kt as default};
