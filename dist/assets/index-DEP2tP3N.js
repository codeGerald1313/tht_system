import{I as f}from"./index-BffMpWx5.js";import{S as m}from"./index-BaZVwneS.js";import{v,c as d,o as n,d as r,p as l,W as y,a2 as P,f as a,w as i,q as o,e as b,t as u,l as c,F as k,m as C,D as S,E as w}from"./index-BFn_3Gdk.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const $=v({name:"Pagination",components:{Icon:f,Select:m},props:{options:{type:Array,default:()=>[{}]},enableText:{type:Boolean,default:!1},enableInput:{type:Boolean,default:!1},enableSelect:{type:Boolean,default:!1},enableSearch:{type:Boolean,default:!1},pageChanged:{type:Function},perPageChanged:{type:Function},current:{type:Number,default:1},total:{type:Number,default:0},perPage:{type:Number,default:10},pageRange:{type:Number,default:2},textBeforeInput:{type:String,default:"Go to page"},textAfterInput:{type:String,default:"Go"},paginationClass:{type:String,default:"default"},searchClasss:{type:String,default:"default"},wrapperClass:{type:String,default:"justify-between"}},data(){return{input:"",input2:null}},methods:{hasFirst:function(){return this.rangeStart!==1},hasLast:function(){return this.rangeEnd<this.totalPages},hasPrev:function(){return this.current>1},hasNext:function(){return this.current<this.totalPages},changePage:function(e){e>0&&e<=this.totalPages&&this.$emit("page-changed",e),this.pageChanged&&this.pageChanged({currentPage:e})},customPerPageChange(e){this.perPageChanged({currentPerPage:e})}},computed:{pages:function(){for(var e=[],t=this.rangeStart;t<=this.rangeEnd;t++)e.push(t);return e},rangeStart:function(){var e=this.current-this.pageRange;return e>0?e:1},rangeEnd:function(){var e=this.current+this.pageRange;return e<this.totalPages?e:this.totalPages},totalPages:function(){return Math.ceil(this.total/this.perPage)},nextPage:function(){return this.current+1},prevPage:function(){return this.current-1}}}),B=e=>(S("data-v-fdaa0b10"),e=e(),w(),e),N={key:0,class:"flex items-center space-x-2 rtl:space-x-reverse"},F={key:1,class:"flex items-center"},V={class:"text-sm text-slate-500 inline-block ltr:ml-2 rtl:mr-2"},T={class:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180"},E=["disabled"],G={key:1,class:"text-sm inline-block rtl:-rotate-180"},L={key:0,class:""},M=B(()=>a("div",null,[a("span",null," 1 ")],-1)),D=[M],R={key:1,class:"text-slate-600 dark:text-slate-300"},j=["onClick"],x={class:""},A={key:2,class:"text-slate-600 dark:text-slate-300"},U={key:3,class:""},q={class:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180"},z=["disabled"],W={key:1,class:"text-sm rtl:-rotate-180 inline-block"};function H(e,t,J,K,O,Q){const g=d("Select"),p=d("Icon");return n(),r("div",{class:l(["md:flex md:space-y-0 space-y-5",e.wrapperClass])},[e.enableSearch?(n(),r("div",{key:0,class:l(["flex items-center space-x-4 rtl:space-x-reverse",e.searchClasss])},[e.enableSearch&&e.enableInput?(n(),r("div",N,[y(a("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>e.input=s),class:"form-control w-9 overflow-auto h-9",type:"text",placeholder:"0"},null,512),[[P,e.input,void 0,{number:!0}]]),a("div",{onClick:t[1]||(t[1]=i(s=>e.changePage(e.input),["prevent"])),class:"flex-0 cursor-pointer text-sm h-9 w-9 bg-slate-900 text-white flex items-center justify-center rounded"}," Go ")])):o("",!0),e.enableSearch&&e.enableSelect?(n(),r("div",F,[b(g,{modelValue:e.input2,"onUpdate:modelValue":t[2]||(t[2]=s=>e.input2=s),modelModifiers:{number:!0},onChange:t[3]||(t[3]=s=>e.changePage(e.input2)),placeholder:"Go",classInput:" w-[60px] h-9 ",options:e.options},null,8,["modelValue","options"]),a("span",V," of "+u(e.perPage)+" entries",1)])):o("",!0)],2)):o("",!0),a("ul",{class:l(["pagination",e.paginationClass])},[a("li",T,[a("button",{onClick:t[4]||(t[4]=i(s=>e.changePage(e.prevPage),["prevent"])),disabled:e.current===1,class:l(e.current===1?" opacity-50 cursor-not-allowed":"")},[e.enableText?o("",!0):(n(),c(p,{key:0,icon:"heroicons-outline:chevron-left"})),e.enableText?(n(),r("span",G,"Previous")):o("",!0)],10,E)]),e.hasFirst()?(n(),r("li",L,[a("button",{onClick:t[5]||(t[5]=i(s=>e.changePage(1),["prevent"]))},D)])):o("",!0),e.hasFirst()?(n(),r("li",R,"...")):o("",!0),(n(!0),r(k,null,C(e.pages,(s,h)=>(n(),r("li",{class:"",key:h},[a("button",{onClick:i(X=>e.changePage(s),["prevent"])},[a("div",{class:l([{active:e.current===s},""])},[a("span",x,u(s),1)],2)],8,j)]))),128)),e.hasLast()?(n(),r("li",A,"...")):o("",!0),e.hasLast()?(n(),r("li",U,[a("button",{onClick:t[6]||(t[6]=i(s=>e.changePage(e.totalPages),["prevent"]))},[a("div",null,[a("span",null,u(e.totalPages),1)])])])):o("",!0),a("li",q,[a("button",{onClick:t[7]||(t[7]=i(s=>e.changePage(e.nextPage),["prevent"])),disabled:e.current===e.totalPages,class:l(e.current===e.totalPages?" opacity-50 cursor-not-allowed":"")},[e.enableText?o("",!0):(n(),c(p,{key:0,icon:"heroicons-outline:chevron-right"})),e.enableText?(n(),r("span",W,"Next")):o("",!0)],10,z)])],2)],2)}const te=I($,[["render",H],["__scopeId","data-v-fdaa0b10"]]);export{te as P};
