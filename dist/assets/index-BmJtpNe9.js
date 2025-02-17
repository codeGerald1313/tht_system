import{_ as E}from"./Breadcrumbs-wRdYD_Lw.js";import{C as S}from"./index-COOwjdNO.js";import{B as D}from"./index-CvW4wJPB.js";import{F as j}from"./index-z1TsTTdr.js";import{I as _}from"./index-BffMpWx5.js";import{T as b}from"./index-CsPMTo4u.js";import{P as f}from"./index-DEP2tP3N.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{D as M,_ as V}from"./SelectMonth-CUibLU_3.js";import{s as F,a as R,b as $,c as I}from"./shade-4-BPphsoTg.js";import{u as A,b as N,B as h,d as s,f as n,e as i,g as r,c,o as l,t as p,q as d,h as g,w as H}from"./index-BFn_3Gdk.js";import"./index-CRJE58yX.js";/* empty css                                              */import"./vue-tailwind-datepicker-CG1Mmuub.js";import"./index-BaZVwneS.js";import"./index-Bs_uOHMv.js";import"./menu-BIf-sRSE.js";import"./keyboard-CmTzE63w.js";import"./use-outside-click-RVZZ1L_X.js";import"./focus-management-C7_eiYjk.js";import"./use-resolve-button-type-0pot5Y2u.js";import"./open-closed-Bo1bAx4t.js";import"./listbox-f-mNa9Vm.js";import"./hidden-Br4jqfTk.js";const L={components:{Pagination:f,Icon:_,Tooltip:b},data(){return{}}};function U(e,a,C,v,o,m){return null}const W=x(L,[["render",U],["__scopeId","data-v-095bb5b0"]]),q=A().headers(),G={components:{Card:S,Button:D,Tooltip:b,Pagination:f,Icon:_,CrmTable:W,DropEvent:M,FromGroup:j,SelectMonth:V,Breadcrumb:E},data(){return{advancedTable:[],toast:N(),current:1,perpage:10,pageRange:5,searchTerm:"",options:[{value:"1",label:"1"},{value:"3",label:"3"},{value:"5",label:"5"}],columns:[{label:"Caja",field:"branch_box"},{label:"Fecha Apertura	",field:"date_opening"},{label:"Monto Apertura	",field:"amount_opening"},{label:"Fecha Cierre	",field:"date_closing"},{label:"Monto Cierre	",field:"amount_closing"},{label:"Usuario	",field:"user"},{label:"Action",field:"action"}],reloadKey:0,rangeDate:null,statistics:[{title:"Sales",count:"354",bg:"bg-warning-500",text:"text-primary-500",percent:"25.67% ",icon:"heroicons:arrow-trending-up",img:F,percentClass:"text-primary-500"},{title:"Revenue ",count:"$86,954",bg:"bg-info-500",text:"text-primary-500",percent:"8.67%",icon:"heroicons:arrow-trending-up",img:R,percentClass:"text-primary-500"},{title:"Conversion",count:"15%",bg:"bg-primary-500",text:"text-danger-500",percent:"1.67%  ",icon:"heroicons:arrow-trending-down",img:$,percentClass:"text-danger-500"},{title:"Leads",count:"654",bg:"bg-success-500",text:"text-primary-500",percent:"11.67%  ",icon:"heroicons:arrow-trending-up",img:I,percentClass:"text-primary-500"}],Campaigns:[{name:"Channel",value:"roi"},{name:"Email",value:"40%"},{name:"Website",value:"28%"},{name:"Facebook",value:"34%"},{name:"Offline",value:"17%"}]}},methods:{handleVerDocumento(e){h.get(`https://thtsystemv2.tech/public/api/v1/list-box-cuadre/${e}`).then(a=>{}).catch(a=>{console.error("Error al obtener la URL del PDF:",a),window.open(a.config.url,"_blank")})},async reloadCrmTable(){try{await this.fetchMoneyBoxes()}catch(e){console.error("Error al recargar Cajas de Dinero :",e)}},showSuccessToast(e){this.toast.success(e,{position:"top-right",timeout:3e3})},showErrorToast(e){this.toast.error(e,{position:"top-right",timeout:3e3})},fetchMoneyBoxes(){h.get("https://thtsystemv2.tech/public/api/v1/moneyboxes/list-normally",q).then(e=>{this.advancedTable=e.data.data,this.showSuccessToast("Historial de caja recuperado correctamente!")}).catch(e=>{console.error("Error al obtener los registros de dinero:",e),this.showErrorToast("Error al obtener el Historial de caja. Por favor, inténtalo de nuevo.")})}},mounted(){this.fetchMoneyBoxes()}},K={class:"card-auto space-y-5"},O={class:"-mx-6"},z={key:0,class:"font-medium",style:{fontWeight:"bold"}},J={key:1,class:"font-medium text-blue-500"},Q={key:2,class:"font-medium text-purple-500"},X={key:3,class:"font-medium"},Y=n("br",null,null,-1),Z={key:4},ee={class:"flex space-x-3 justify-center rtl:space-x-reverse"},te=["onClick"],oe=n("span",null,"Ver Cuadre",-1),ne={class:"py-4 px-3 flex justify-center"};function ae(e,a,C,v,o,m){const y=c("Button"),w=c("Icon"),T=c("Tooltip"),k=c("Pagination"),B=c("vue-good-table"),P=c("Card");return l(),s("div",null,[n("div",K,[i(P,{title:"Historial de Caja",noborder:""},{header:r(()=>[i(y,{icon:"heroicons-outline:arrow-path",btnClass:" btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm ",iconClass:"text-lg",onClick:m.reloadCrmTable},null,8,["onClick"])]),default:r(()=>[n("div",O,[n("div",null,[i(B,{columns:o.columns,styleClass:" vgt-table  lesspadding2 centered ",rows:o.advancedTable,"pagination-options":{enabled:!0,perPage:o.perpage},"sort-options":{enabled:!1}},{"table-row":r(t=>[t.column.field=="branch_box"?(l(),s("span",z,p(t.row.branch_box.description),1)):d("",!0),t.column.field=="amount_opening"?(l(),s("span",J," S/. "+p(t.row.amount_opening),1)):d("",!0),t.column.field=="amount_closing"?(l(),s("span",Q," S/. "+p(t.row.amount_closing),1)):d("",!0),t.column.field=="user"?(l(),s("span",X,[g(p(t.row.user.name)+" ",1),Y])):d("",!0),t.column.field=="action"?(l(),s("span",Z,[n("div",ee,[i(T,{placement:"top",arrow:"",theme:"info-500"},{button:r(()=>[n("div",{class:"action-btn",onClick:H(u=>m.handleVerDocumento(t.row.id),["prevent"])},[i(w,{class:"text-2xl",icon:"heroicons-outline:clipboard-document-check"})],8,te)]),default:r(()=>[oe]),_:2},1024)])])):d("",!0)]),"pagination-bottom":r(t=>[n("div",ne,[i(k,{total:o.advancedTable.length,current:o.current,"per-page":o.perpage,pageRange:o.pageRange,onPageChanged:a[0]||(a[0]=u=>o.current=u),pageChanged:t.pageChanged,perPageChanged:t.perPageChanged,enableSearch:"",enableSelect:"",options:o.options},{default:r(()=>[g(" > ")]),_:2},1032,["total","current","per-page","pageRange","pageChanged","perPageChanged","options"])])]),_:1},8,["columns","rows","pagination-options"])])])]),_:1})])])}const Se=x(G,[["render",ae]]);export{Se as default};
