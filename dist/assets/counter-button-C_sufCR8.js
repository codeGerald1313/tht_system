import{I as d}from"./index-DxXSMpKh.js";import{_ as u,o as h,d as m,f as a,k as r,e as n,t as p}from"./index-CyQKzwXM.js";const x=u("cart",{state:()=>({items:[],totalPrice:0}),actions:{addToCart(t){const e=this.items.find(s=>s.id===t.id);e?e.quantity+=1:this.items.push({...t,quantity:1}),this.getTotalPrice()},removeFromCart(t){this.items.find(s=>t.id==s.id)&&(this.items=this.items.filter(s=>t.id!==s.id)),this.getTotalPrice()},removeAllFromCart(){this.items=[],this.totalPrice=0},getTotalPrice(){this.totalPrice=0,this.items.map(t=>{let e=parseInt(t.quantity),s=parseInt(t.price);this.totalPrice+=s*e})}},getters:{getItems(){return this.items}}}),f={class:"flex space-x-4 rtl:space-x-reverse items-center"},b={class:"flex-1 h-8 flex border border-1 border-slate-900 delay-150 ease-in-out dark:border-slate-600 divide-x-[1px] rtl:divide-x-reverse text-sm font-normal divide-slate-900 dark:divide-slate-600 rounded"},v=["disabled"],_={class:"flex-1 w-[62px] text-center text-slate-900 dark:text-slate-300 flex items-center justify-center"},y=["disabled"],q={__name:"counter-button",props:{product:Object},setup(t){const e=x(),s=t,l=()=>e.addToCart(i),c=()=>{i.quantity===1||i.quantity--,e.getTotalPrice()},i=e.getItems.find(o=>o.id==s.product.id);return(o,k)=>(h(),m("div",f,[a("div",b,[a("button",{onClick:c,disabled:r(i).quantity===1,type:"button",class:"flex-none px-2 dark:text-white text-slate-900 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"},[n(r(d),{icon:"eva:minus-fill"})],8,v),a("div",_,p(r(i).quantity),1),a("button",{onClick:l,disabled:r(i).quantity===10,type:"button",class:"flex-none px-2 disabled:cursor-not-allowed disabled:opacity-50 text-slate-900 hover:bg-slate-900 hover:text-white dark:text-white dark:hover:bg-slate-700 rtl:dark:hover:rounded-l ltr:dark:hover:rounded-r"},[n(r(d),{icon:"eva:plus-fill"})],8,y)])]))}};export{q as _,x as c};
