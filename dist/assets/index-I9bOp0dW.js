import{_ as i}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as t,d as a,n as l,t as s,p as n,f as r,R as c}from"./index-BLl1OigC.js";const d={components:{},props:{label:{type:String},classLabel:{type:String,default:" "},classInput:{type:String,default:"classinput"},name:{type:String},error:{type:String},horizontal:{type:Boolean,default:!1},validate:{type:String},msgTooltip:{type:Boolean,default:!1},description:{type:String}}},m=["for"],u={class:"relative"},f={key:3,class:"block text-secondary-500 font-light leading-4 text-xs mt-2"};function x(o,g,e,y,b,_){return t(),a("div",{class:l(["fromGroup relative",`${e.error?"has-error":""}  ${e.horizontal?"flex":""}  ${e.validate?"is-valid":""} `])},[e.label?(t(),a("label",{key:0,class:l(`${e.classLabel} inline-block input-label `),for:e.name},s(e.label),11,m)):n("",!0),r("div",u,[c(o.$slots,"default")]),e.error?(t(),a("span",{key:1,class:l(["mt-2",e.msgTooltip?" inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded":" text-danger-500 block text-sm"])},s(e.error),3)):n("",!0),e.validate?(t(),a("span",{key:2,class:l(["mt-2",e.msgTooltip?" inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded":" text-success-500 block text-sm"])},s(e.validate),3)):n("",!0),e.description?(t(),a("span",f,s(e.description),1)):n("",!0)],2)}const h=i(d,[["render",x]]);export{h as F};