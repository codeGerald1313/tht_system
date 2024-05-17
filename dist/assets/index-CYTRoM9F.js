import{I as b}from"./index-BcFOD9Ey.js";import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as x,o as r,d as s,f as i,e as c,p as a,R as y,n as p}from"./index-BLl1OigC.js";const m={components:{Icon:b},name:"Alert",type:"primary-500",props:{type:{type:String},dismissible:{type:Boolean,default:!1},icon:{type:String},class:{type:String,default:""},customClass:{type:String,default:""}},data(){return{isDestroy:!1}},methods:{destroy(){this.isDestroy=!0},alertClass(){switch(this.type){case"primary-light":return"bg-primary-500 bg-opacity-[14%] text-primary-500";case"secondary-light":return"bg-secondary-500 bg-opacity-[14%] text-slate-600";case"success-light":return"bg-success-500 bg-opacity-[14%] text-success-500";case"info-light":return"bg-info-500 bg-opacity-[14%] text-info-500";case"warning-light":return"bg-warning-500 bg-opacity-[14%] text-warning-500";case"danger-light":return"bg-danger-500 bg-opacity-[14%] text-danger-500";case"dark-light":return"bg-slate-800 bg-opacity-[14%] text-slate-800 dark:bg-slate-500 dark:bg-opacity-[14%]  dark:text-slate-300";case"primary":return"bg-primary-500 text-white";case"secondary":return"bg-secondary-500 text-white";case"success":return"bg-success-500 text-white";case"info":return"bg-info-500 text-white";case"warning":return"bg-warning-500 text-white";case"danger":return"bg-danger-500 text-white";case"dark":return"bg-slate-800 text-white dark:bg-slate-900 dark:text-slate-300";case"primary-outline":return"bg-white text-primary-500 border border-primary-500 dark:bg-slate-800";case"secondary-outline":return"bg-white text-secondary-500 border border-secondary-500 dark:bg-slate-800";case"success-outline":return"bg-white text-success-500 border border-success-500 dark:bg-slate-800";case"info-outline":return"bg-white text-info-500 border border-info-500 dark:bg-slate-800";case"warning-outline":return"bg-white text-warning-500 border border-warning-500 dark:bg-slate-800";case"danger-outline":return"bg-white text-danger-500 border border-danger-500 dark:bg-slate-800";case"dark-outline":return"bg-white text-slate-800 dark:text-slate-300 border border-slate-800 dark:border-slate-600  dark:bg-slate-800";default:return"bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-300"}}}},h={class:"flex items-start space-x-3 rtl:space-x-reverse"},f={key:0,class:"flex-0 text-[22px]"},k={class:"flex-1"};function w(d,n,e,_,l,t){const o=x("Icon");return l.isDestroy?a("",!0):(r(),s("div",{key:0,class:p(["py-[18px] px-6 font-normal text-sm rounded-md",t.alertClass()+" "+e.customClass])},[i("div",h,[e.icon?(r(),s("div",f,[c(o,{icon:e.icon},null,8,["icon"])])):a("",!0),i("div",k,[y(d.$slots,"default")]),e.dismissible?(r(),s("div",{key:1,class:"flex-0 text-2xl cursor-pointer",onClick:n[0]||(n[0]=(...g)=>t.destroy&&t.destroy(...g))},[c(o,{icon:"heroicons-outline:x"})])):a("",!0)])],2))}const B=u(m,[["render",w]]);export{B as A};
