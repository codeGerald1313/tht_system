import{C as g}from"./index-CoHYOsAq.js";import{C as u}from"./index-2iT3jdVW.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as n,f as l,e,g as t,c as d,o as c,F as h,m,t as f}from"./index-CyQKzwXM.js";const C={components:{Card:g,Checkbox:u},data(){return{ss:"",option:[],options:[{value:"Orange",label:"Orange"},{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"}]}}},k={class:"grid grid-cols-1 gap-5"},v={class:"flex space-x-rb flex-wrap"},x={class:"flex flex-wrap space-x-rb"},y=l("div",{class:"flex space-x-5 flex-wrap"},null,-1),w={class:"text-slate-900 dark:text-white mt-3"};function B(V,r,U,A,s,F){const a=d("Checkbox",!0),o=d("Card");return c(),n("div",null,[l("div",k,[e(o,{title:"Checkboxes"},{default:t(()=>[l("div",v,[e(a,{label:"Checked"}),e(a,{label:"UnChecked",checked:""}),e(a,{label:"Checked disabled",disabled:""}),e(a,{label:"UnChecked disabled",checked:"",disabled:""})])]),_:1}),e(o,{title:"Color"},{default:t(()=>[l("div",x,[e(a,{label:"primary",activeClass:"ring-primary-500 bg-primary-500",checked:""}),e(a,{label:"secondary",activeClass:"ring-secondary-500 bg-secondary-500",checked:""}),e(a,{label:"success",activeClass:"ring-success-500 bg-success-500",checked:""}),e(a,{label:"danger",activeClass:"ring-danger-500 bg-danger-500",checked:""}),e(a,{label:"warning",activeClass:"ring-warning-500 bg-warning-500",checked:""}),e(a,{label:"info",activeClass:"ring-info-500 bg-info-500",checked:""})])]),_:1}),e(o,{title:"Using options array"},{default:t(()=>[y,(c(!0),n(h,null,m(s.options,(i,p)=>(c(),n("div",{key:p},[e(a,{label:i.label,name:"jorina",modelValue:s.option,"onUpdate:modelValue":r[0]||(r[0]=b=>s.option=b),value:i.value},null,8,["label","modelValue","value"])]))),128)),l("div",w," Selected: "+f(s.option),1)]),_:1})])])}const D=_(C,[["render",B]]);export{D as default};
