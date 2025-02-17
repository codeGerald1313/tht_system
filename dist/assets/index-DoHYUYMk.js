import{C as b}from"./index-CoHYOsAq.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as t,d as r,p as m,q as o,h as C,f as l,e as s,g as i,c as g,F as v,m as k,l as w}from"./index-CyQKzwXM.js";const y={props:{src:{type:String,required:!0},alt:{type:String,default:"image title"},imageClass:{type:String,default:""},parentClass:{type:String,default:""}}},I=["src","alt"],S={key:1,class:"bg-neutral-300 w-full h-[200px] flex flex-col items-center justify-center font-medium rounded-md text-xl text-slate-900 capitalize"},B=l("code",{class:"text-sm text-primary-500 lowercase mt-3"},' [src="images/all-img/image-1.png"] ',-1);function V(u,p,e,_,a,f){return t(),r("div",{class:m(["relative",e.parentClass])},[e.src?(t(),r("img",{key:0,src:e.src,alt:e.alt,class:m([e.imageClass,"max-w-full block"])},null,10,I)):o("",!0),e.src?o("",!0):(t(),r("div",S,[C(" Please Set Image "),B]))],2)}const q=d(y,[["render",V]]),F="/assets/image-1-Bn2rc4V9.png",L="/assets/image-2-Bnbj3-PQ.png",N="/assets/image-3-D4qXdTwm.png",P="/assets/thumb-1-DGlY5L9L.png",D="/assets/thumb-2-itP3T5VC.png",T="/assets/thumb-3-eGsJYF3o.png",$="/assets/thumb-4-C8-x18KH.png",j="/assets/thumb-5-F3Dq0P9Z.png",z="/assets/thumb-6-npHdby1v.png",G={components:{Card:b,Image:q},data(){return{image1:F,image2:L,image3:N,images:[{src:P},{src:D},{src:T},{src:$},{src:j},{src:z}]}}},H={class:"space-y-5"},R=l("span",{class:"block text-base font-medium tracking-[0.01em] dark:text-slate-300 text-slate-500 uppercase mb-6 mt-5"},"Small image with fluid",-1),Y=l("span",{class:"block text-base font-medium tracking-[0.01em] dark:text-slate-300 text-slate-500 uppercase mb-6 mt-5"},"Large image with fluid-grow:",-1),E={class:"grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"};function J(u,p,e,_,a,f){const n=g("Image"),c=g("Card");return t(),r("div",H,[s(c,{title:"Images"},{default:i(()=>[s(n,{src:a.image1,alt:"image one",imageClass:"rounded-md"},null,8,["src"])]),_:1}),s(c,{title:"Responsive images"},{default:i(()=>[R,s(n,{src:a.image2,alt:"Small image with fluid:",imageClass:"rounded-md mb-6"},null,8,["src"]),Y,s(n,{src:a.image3,alt:"Small image with fluid-grow:",imageClass:"rounded-md w-full "},null,8,["src"])]),_:1}),s(c,{title:"Responsive images"},{default:i(()=>[l("div",E,[(t(!0),r(v,null,k(a.images,(x,h)=>(t(),w(n,{src:x.src,alt:"thumb-1",imageClass:"rounded-md border-4 border-slate-300",key:h},null,8,["src"]))),128))])]),_:1})])}const Z=d(G,[["render",J]]);export{Z as default};
