import{I as L}from"./index-BffMpWx5.js";/* empty css                                              */import{B as T}from"./index-CvW4wJPB.js";import{T as ne}from"./Table-DeKGPd3l.js";import{c as w,o as i,d as p,e as l,g as d,f as e,w as H,k as t,A as $,t as g,b as re,C as R,ah as ie,L as de,q as k,F as I,m as F,h as ce,l as V,p as z,a as ue,s as S,D as me,E as pe,z as ge,y as fe}from"./index-BFn_3Gdk.js";import{F as q}from"./index-z1TsTTdr.js";import{M as J}from"./index-2mWc_vCg.js";import{V as N}from"./VueSelect-QFU_7fbT.js";import{T as K}from"./index-DERosrGp.js";import{T as X}from"./index-BL9tae9R.js";import{u as Z,b as C}from"./vee-validate.esm-BPxu6-Ac.js";import{C as B}from"./VueSelect.vue_vue_type_style_index_0_lang-CworQ5tj.js";import{u as P}from"./project-BEvoPr6t.js";import{c as _e,a as U,b as W}from"./object-BL0XNg70.js";import{c as ee,d as xe}from"./data-gS5vGOMl.js";import{v as he}from"./v4-D8aEg3BZ.js";import{C as te}from"./index-COOwjdNO.js";import{D as se}from"./index-Bs_uOHMv.js";import{P as ve}from"./index-DEP2tP3N.js";import{P as le}from"./index-Dr9vJUyq.js";import{a as be}from"./basic-tablle-data-AN7MRnVF.js";import{I as ye}from"./index-2H-cusMd.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as oe}from"./menu-BIf-sRSE.js";import"./transition-DUAAdbaG.js";import"./focus-management-C7_eiYjk.js";import"./keyboard-CmTzE63w.js";import"./use-outside-click-RVZZ1L_X.js";import"./hidden-Br4jqfTk.js";import"./micro-task-CxIZtCgj.js";import"./open-closed-Bo1bAx4t.js";import"./vue-cleave.min-ClV1fVcS.js";import"./av-2-D6_jNZbn.js";import"./index-BaZVwneS.js";import"./user-1-Dmhlt7-s.js";import"./user-4-_9lLfOE2.js";import"./user-6-Bk4CTUVR.js";/* empty css                                              */import"./use-resolve-button-type-0pot5Y2u.js";const we={class:"assagin space-y-4"},ke={class:"grid lg:grid-cols-2 gap-4 grid-cols-1"},De={class:"flex items-center space-x-4"},$e={class:"flex-none"},je={class:"h-7 w-7 rounded-full"},Ce=["src"],Ve={class:"flex-1"},Pe={class:"flex items-center space-x-4"},Me={class:"flex-none"},Se={class:"h-7 w-7 rounded-full"},Te=["src"],Ie={class:"flex-1"},Fe={class:"text-right"},Ee={__name:"AddProject",setup(h){let s=P();const m=[{value:"team",label:"team"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"}],D=_e({newTodoText:U().required("Title is required"),desc:U().required("Description is required"),category:W().nullable().required("Please select category"),assign:W().nullable().required("Please select One"),startDate:U().required("Start date is required"),endDate:U().required("End date is required")}),{handleSubmit:u}=Z({validationSchema:D}),{value:v,errorMessage:b}=C("newTodoText"),{value:a,errorMessage:n}=C("desc"),{value:o,errorMessage:c}=C("category"),{value:y,errorMessage:A}=C("assign"),{value:j,errorMessage:r}=C("startDate"),{value:_,errorMessage:M}=C("endDate"),Y=u(()=>{s.addProject({id:he(),name:v.value,des:a.value,assignto:y.value,category:o.value.map(O=>O.value),startDate:j.value,endDate:_.value,progress:40})});return(O,x)=>{const Q=w("flat-pickr");return i(),p("div",null,[l(t(J),{activeModal:t(s).addmodal,onClose:t(s).closeModal,title:"Create Project",centered:""},{default:d(()=>[e("form",{onSubmit:x[6]||(x[6]=H((...f)=>t(Y)&&t(Y)(...f),["prevent"])),class:"space-y-4"},[l(t(X),{label:"title",type:"text",placeholder:"Project Name",name:"title",modelValue:t(v),"onUpdate:modelValue":x[0]||(x[0]=f=>$(v)?v.value=f:null),modelModifiers:{trim:!0},error:t(b)},null,8,["modelValue","error"]),e("div",we,[e("div",ke,[l(t(q),{label:"Start Date",name:"d1",error:t(r)},{default:d(()=>[l(Q,{modelValue:t(j),"onUpdate:modelValue":x[1]||(x[1]=f=>$(j)?j.value=f:null),class:"form-control",id:"d1",placeholder:"yyyy, dd M",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"])]),_:1},8,["error"]),l(t(q),{label:"End Date",name:"d2",error:t(M)},{default:d(()=>[l(Q,{modelValue:t(_),"onUpdate:modelValue":x[2]||(x[2]=f=>$(_)?_.value=f:null),class:"form-control",id:"d2",placeholder:"yyyy, dd M",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"])]),_:1},8,["error"])]),l(t(N),{label:"Assignee",error:t(A)},{default:d(()=>[l(t(B),{options:t(ee),label:"title",modelValue:t(y),"onUpdate:modelValue":x[3]||(x[3]=f=>$(y)?y.value=f:null),multiple:""},{option:d(({title:f,image:G})=>[e("span",De,[e("div",$e,[e("div",je,[e("img",{src:G,alt:"",class:"w-full h-full rounded-full"},null,8,Ce)])]),e("span",Ve,g(f),1)])]),"selected-option":d(({title:f,image:G})=>[e("span",Pe,[e("div",Me,[e("div",Se,[e("img",{src:G,alt:"",class:"w-full h-full rounded-full"},null,8,Te)])]),e("span",Ie,g(f),1)])]),_:1},8,["options","modelValue"])]),_:1},8,["error"]),l(t(N),{label:"Tag",error:t(c)},{default:d(()=>[l(t(B),{options:m,modelValue:t(o),"onUpdate:modelValue":x[4]||(x[4]=f=>$(o)?o.value=f:null),multiple:""},null,8,["modelValue"])]),_:1},8,["error"]),l(t(K),{label:"Project description",placeholder:"Project description",modelValue:t(a),"onUpdate:modelValue":x[5]||(x[5]=f=>$(a)?a.value=f:null),error:t(n)},null,8,["modelValue","error"])]),e("div",Fe,[l(t(T),{text:"Add",btnClass:"btn-dark"})])],32)]),_:1},8,["activeModal","onClose"])])}}},Ae={class:"assagin space-y-4"},Ue={class:"grid lg:grid-cols-2 gap-4 grid-cols-1"},Le={class:"flex items-center space-x-4"},qe={class:"flex-none"},Ne={class:"h-7 w-7 rounded-full"},Be=["src"],Ye={class:"flex-1"},Ge={class:"flex items-center space-x-4"},Re={class:"flex-none"},ze={class:"h-7 w-7 rounded-full"},Oe=["src"],Qe={class:"flex-1"},We={class:"text-right"},He={__name:"EditProject",setup(h){let s=P();const{handleSubmit:m}=Z(),D=re(),u=R(()=>s.editName.length>0&&s.editassignto&&s.editcta&&s.editStartDate&&s.editEndDate&&s.editdesc),v=m(()=>{u.value&&(s.updateProject({id:s.editId,name:s.editName,des:s.editdesc,assignto:s.editassignto,catagory:s.editcta,startDate:s.editStartDate,endDate:s.editEndDate,progress:60}),s.editModal=!1,D.success("Task updated",{timeout:2e3}))});return(b,a)=>{const n=w("flat-pickr");return i(),p("div",null,[l(t(J),{activeModal:t(s).editModal,onClose:a[7]||(a[7]=o=>t(s).closeEditModal()),title:"Update Project",centered:""},{default:d(()=>[e("form",{onSubmit:a[6]||(a[6]=H((...o)=>t(v)&&t(v)(...o),["prevent"])),class:"space-y-4"},[l(t(X),{label:"title",type:"text",placeholder:"Task Name",name:"title",modelValue:t(s).editName,"onUpdate:modelValue":a[0]||(a[0]=o=>t(s).editName=o),modelModifiers:{trim:!0}},null,8,["modelValue"]),e("div",Ae,[e("div",Ue,[l(t(q),{label:"Start Date",name:"d1"},{default:d(()=>[l(n,{modelValue:t(s).editStartDate,"onUpdate:modelValue":a[1]||(a[1]=o=>t(s).editStartDate=o),class:"form-control",id:"d1",placeholder:"yyyy, dd M",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"])]),_:1}),l(t(q),{label:"End Date",name:"d2"},{default:d(()=>[l(n,{modelValue:t(s).editEndDate,"onUpdate:modelValue":a[2]||(a[2]=o=>t(s).editEndDate=o),class:"form-control",id:"d2",placeholder:"yyyy, dd M",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"])]),_:1})]),l(t(N),{label:"Assignee"},{default:d(()=>[l(t(B),{options:t(ee),label:"title",modelValue:t(s).editassignto,"onUpdate:modelValue":a[3]||(a[3]=o=>t(s).editassignto=o),multiple:""},{option:d(({title:o,image:c})=>[e("span",Le,[e("div",qe,[e("div",Ne,[e("img",{src:c,alt:"",class:"w-full h-full rounded-full"},null,8,Be)])]),e("span",Ye,g(o),1)])]),"selected-option":d(({title:o,image:c})=>[e("span",Ge,[e("div",Re,[e("div",ze,[e("img",{src:c,alt:"",class:"w-full h-full rounded-full"},null,8,Oe)])]),e("span",Qe,g(o),1)])]),_:1},8,["options","modelValue"])]),_:1}),l(t(N),{label:"Project category"},{default:d(()=>[l(t(B),{options:t(xe),modelValue:t(s).editcta,"onUpdate:modelValue":a[4]||(a[4]=o=>t(s).editcta=o),multiple:""},null,8,["options","modelValue"])]),_:1}),l(t(K),{label:"Description",placeholder:"Description",modelValue:t(s).editdesc,"onUpdate:modelValue":a[5]||(a[5]=o=>t(s).editdesc=o)},null,8,["modelValue"])]),e("div",We,[l(t(T),{text:"Update",btnClass:"btn-dark",isDisabled:!u.value},null,8,["isDisabled"])])],32)]),_:1},8,["activeModal"])])}}},Je={components:{InputGroup:ye,Pagination:ve,Dropdown:se,Icon:L,MenuItem:oe,Card:te,ProgressBar:le},data(){return{searchTerm:"",advancedTable:be,current:1,perpage:3,pageRange:10,actions:[{name:"view",icon:"heroicons:eye",doit:()=>{this.$router.push({name:"project-details"})}},{name:"edit",icon:"heroicons:pencil-square",doit:h=>{this.updateProject(h)}},{name:"delete",icon:"heroicons-outline:trash",doit:h=>{this.removeProject(h)}}],columns:[{label:"Name",field:"name"},{label:"Start Date",field:"startDate"},{label:"End Date",field:"endDate"},{label:"Assigned To",field:"assignto"},{label:"Status",field:"progress"},{label:"Action",field:"action"}]}},computed:{...ie(P,["projects"])},methods:{...de(P,["updateProject","removeProject"])}},Ke={class:"md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center"},Xe=e("h5",null,"Todos los empleados",-1),Ze={key:0},et={class:"flex space-x-3 items-center text-left rtl:space-x-reverse"},tt={class:"flex-none"},st={class:"h-10 w-10 rounded-full text-sm bg-[#E0EAFF] dark:bg-slate-700 flex flex-col items-center justify-center font-medium -tracking-[1px]"},lt={class:"flex-1 font-medium text-sm leading-4 whitespace-nowrap"},at={key:1,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},ot={key:2,class:"text-slate-500 dark:text-slate-400 block min-w-[108px]"},nt={key:3,class:"block w-full"},rt={class:"flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1 rtl:space-x-reverse"},it=["src","alt"],dt=e("div",{class:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center"}," +2 ",-1),ct={key:4,class:"min-w-[220px] block"},ut={class:"flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium mt-3"},mt=e("span",{class:"font-normal"},"12/15 Task Completed",-1),pt={key:5,class:"action-btn text-end mr-3"},gt={class:"text-xl"},ft=["onClick"],_t={class:"text-base"},xt={class:"py-4 px-3"};function ht(h,s,m,D,u,v){const b=w("InputGroup"),a=w("ProgressBar"),n=w("Icon"),o=w("MenuItem"),c=w("Dropdown"),y=w("Pagination"),A=w("vue-good-table"),j=w("Card");return i(),p("div",null,[l(j,{noborder:""},{default:d(()=>[e("div",Ke,[Xe,l(b,{modelValue:u.searchTerm,"onUpdate:modelValue":s[0]||(s[0]=r=>u.searchTerm=r),placeholder:"Search",type:"text",prependIcon:"heroicons-outline:search",merged:""},null,8,["modelValue"])]),l(A,{class:"-mx-6",columns:u.columns,styleClass:" vgt-table  table-head   v-middle striped lesspadding2 listview",rows:this.projects,"pagination-options":{enabled:!0,perPage:u.perpage},"search-options":{enabled:!0,externalQuery:u.searchTerm},"sort-options":{enabled:!1}},{"table-row":d(r=>[r.column.field=="name"?(i(),p("span",Ze,[e("div",et,[e("div",tt,[e("div",st,g(r.row.name.charAt(0)+r.row.name.charAt(r.row.name.length-1)),1)]),e("div",lt,g(r.row.name.length>20?r.row.name.substring(0,20)+"...":r.row.name),1)])])):k("",!0),r.column.field=="startDate"?(i(),p("span",at,g(r.row.startDate),1)):k("",!0),r.column.field=="endDate"?(i(),p("span",ot,g(r.row.endDate),1)):k("",!0),r.column.field=="assignto"?(i(),p("span",nt,[e("div",rt,[(i(!0),p(I,null,F(r.row.assignto,(_,M)=>(i(),p("div",{class:"h-6 w-6 rounded-full ring-1 ring-slate-100",key:M},[e("img",{src:_.image,alt:_.title,class:"w-full h-full rounded-full"},null,8,it)]))),128)),dt])])):k("",!0),r.column.field=="progress"?(i(),p("span",ct,[l(a,{value:r.row.progress,barColor:"bg-primary-500"},null,8,["value"]),e("span",ut,[mt,ce(" "+g(r.row.progress)+"% ",1)])])):k("",!0),r.column.field=="action"?(i(),p("div",pt,[l(c,{classMenuItems:" w-[140px]"},{menus:d(()=>[(i(!0),p(I,null,F(u.actions,(_,M)=>(i(),V(o,{key:M},{default:d(()=>[e("div",{onClick:Y=>_.doit(r.row),class:z(`
                
                  ${_.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center `)},[e("span",_t,[l(n,{icon:_.icon},null,8,["icon"])]),e("span",null,g(_.name),1)],10,ft)]),_:2},1024))),128))]),default:d(()=>[e("div",gt,[l(n,{icon:"heroicons-outline:dots-vertical"})])]),_:2},1024)])):k("",!0)]),"pagination-bottom":d(r=>[e("div",xt,[l(y,{total:h.projects.length,current:u.current,"per-page":u.perpage,pageRange:u.pageRange,onPageChanged:s[1]||(s[1]=_=>u.current=_),pageChanged:r.pageChanged,perPageChanged:r.perPageChanged,enableSearch:"",enableSelect:""},null,8,["total","current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options","search-options"])]),_:1})])}const vt=ae(Je,[["render",ht]]),E=h=>(me("data-v-a71a09de"),h=h(),pe(),h),bt={class:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"},yt={class:"flex justify-between items-end"},wt={class:"flex space-x-4 items-center rtl:space-x-reverse"},kt={class:"flex-none"},Dt={class:"h-10 w-10 rounded-md text-lg bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex flex-col items-center justify-center font-normal capitalize"},$t={class:"font-medium text-base leading-6"},jt={class:"dark:text-slate-200 text-slate-900 max-w-[160px] truncate"},Ct={class:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400"},Vt=["onClick"],Pt={class:"text-base"},Mt={class:"text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8"},St={class:"flex space-x-4 rtl:space-x-reverse"},Tt=E(()=>e("span",{class:"block date-label"},"Start date",-1)),It={class:"block date-text"},Ft=E(()=>e("span",{class:"block date-label"},"Start date",-1)),Et={class:"block date-text"},At={class:"ltr:text-right rtl:text-left text-xs text-slate-600 dark:text-slate-300 mb-1 font-medium"},Ut={class:"grid grid-cols-2 gap-4 mt-6"},Lt=E(()=>e("div",{class:"text-slate-400 dark:text-slate-400 text-sm font-normal mb-3"}," Assigned to ",-1)),qt={class:"flex justify-start -space-x-1.5 rtl:space-x-reverse"},Nt=["src","alt"],Bt=E(()=>e("div",{class:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center"}," +2 ",-1)),Yt={class:"ltr:text-right rtl:text-left"},Gt={class:"inline-flex items-center space-x-1 bg-danger-500 bg-opacity-[0.16] text-danger-500 text-xs font-normal px-2 py-1 rounded-full rtl:space-x-reverse"},Rt=E(()=>e("span",null,"days left",-1)),zt={__name:"Projects-grid",setup(h){const s=P(),m=ue(),D=R(()=>s.projects),u=(b,a)=>{const n=new Date(b);return new Date(a).getDate()-n.getDate()},v=S([{name:"view",icon:"heroicons:eye",doit:()=>{m.push("/app/project-details")}},{name:"Edit",icon:"heroicons-outline:pencil-alt",doit:b=>{s.updateProject(b)}},{name:"Delete",icon:"heroicons-outline:trash",doit:b=>{s.removeProject(b)}}]);return(b,a)=>(i(),p("div",bt,[(i(!0),p(I,null,F(D.value,(n,o)=>(i(),V(t(te),{bodyClass:"p-6",key:o},{default:d(()=>[e("header",yt,[e("div",wt,[e("div",kt,[e("div",Dt,g(n.name.charAt(0)+n.name.charAt(1)),1)]),e("div",$t,[e("div",jt,g(n.name),1)])]),e("div",null,[l(t(se),{classMenuItems:" w-[130px]"},{menus:d(()=>[(i(!0),p(I,null,F(v.value,(c,y)=>(i(),V(t(oe),{key:y},{default:d(()=>[e("div",{onClick:A=>c.doit(n),class:z(`
                
                  hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  capitalize rtl:space-x-reverse `)},[e("span",Pt,[l(t(L),{icon:c.icon},null,8,["icon"])]),e("span",null,g(c.name),1)],8,Vt)]),_:2},1024))),128))]),default:d(()=>[e("span",Ct,[l(t(L),{icon:"heroicons-outline:dots-vertical"})])]),_:2},1024)])]),e("div",Mt,g(n.des),1),e("div",St,[e("div",null,[Tt,e("span",It,g(n.startDate),1)]),e("div",null,[Ft,e("span",Et,g(n.endDate),1)])]),e("div",At,g(n.progress)+"% ",1),l(t(le),{value:n.progress,barColor:"bg-primary-500"},null,8,["value"]),e("div",Ut,[e("div",null,[Lt,e("div",qt,[(i(!0),p(I,null,F(n.assignto,(c,y)=>(i(),p("div",{class:"h-6 w-6 rounded-full ring-1 ring-slate-100",key:y},[e("img",{src:c.image,alt:c.title,class:"w-full h-full rounded-full"},null,8,Nt)]))),128)),Bt])]),e("div",Yt,[e("span",Gt,[e("span",null,[l(t(L),{icon:"heroicons-outline:clock"})]),e("span",null,g(u(n.startDate,n.endDate)),1),Rt])])])]),_:2},1024))),128))]))}},Ot=ae(zt,[["__scopeId","data-v-a71a09de"]]),Qt={class:"flex flex-wrap justify-between items-center mb-4"},Is={__name:"index",setup(h){const s=P();let m=S("list");const D=()=>{s.openProject()},u=S(0),v=()=>{u.value=window.innerWidth};ge(()=>{window.addEventListener("resize",v),v()});const b=R(()=>s.projects),a=S(!0),n=S(!1);return setTimeout(()=>{a.value=!1},1e3),fe(m,(o,c)=>{o!==c&&(o==="list"?(a.value=!0,n.value=!1):(a.value=!1,n.value=!0),setTimeout(()=>{a.value=!1,n.value=!1},1e3))}),(o,c)=>(i(),p("div",null,[e("div",Qt,[e("div",{class:z(["md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse",u.value<768?"space-x-rb":""])},[l(t(T),{icon:"heroicons:list-bullet",text:"List view",btnClass:`${t(m)==="list"?"bg-slate-900 dark:bg-slate-700  text-white":" bg-white dark:bg-slate-800 dark:text-slate-300"}   h-min text-sm font-normal`,iconClass:" text-lg",onClick:c[0]||(c[0]=y=>$(m)?m.value="list":m="list"),isLoading:a.value,isDisabled:a.value},null,8,["btnClass","isLoading","isDisabled"]),l(t(T),{icon:"heroicons-outline:view-grid",text:"Grid view",btnClass:`${t(m)==="grid"?"bg-slate-900 dark:bg-slate-700 text-white":" bg-white dark:bg-slate-800 dark:text-slate-300"}   h-min text-sm font-normal`,iconClass:" text-lg",onClick:c[1]||(c[1]=y=>$(m)?m.value="grid":m="grid"),isLoading:n.value,isDisabled:n.value},null,8,["btnClass","isLoading","isDisabled"]),l(t(T),{icon:"heroicons-outline:plus",text:"Add Project",btnClass:"btn-dark dark:bg-slate-800  h-min text-sm font-normal",iconClass:" text-lg",onClick:D,isLoading:t(s).isLoading},null,8,["isLoading"])],2)]),a.value?(i(),V(t(ne),{key:0,count:b.value.length},null,8,["count"])):k("",!0),t(m)==="grid"&&!n.value?(i(),V(t(Ot),{key:1})):k("",!0),t(m)==="list"&&!a.value?(i(),V(t(vt),{key:2})):k("",!0),l(t(Ee)),l(t(He))]))}};export{Is as default};
