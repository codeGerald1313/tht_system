import{C as K}from"./index-Hsd0Z0_R.js";import{I as m}from"./index-BcFOD9Ey.js";import{w as V}from"./window-Ds9AqdYU.js";import{_ as se,Q as oe,o as a,d as r,f as e,p as b,K as E,F as Q,m as U,n as L,t as A,c as f,l as z,h as d,e as s,j as o,q as S,H as R,s as W,a2 as D,aC as Z,w as T,z as Y,A as O,T as X,i as ae,aj as P}from"./index-BLl1OigC.js";import{u as j}from"./user-1-Dmhlt7-s.js";import{u as g,a as le,b as ne}from"./user-4-_9lLfOE2.js";import{u as re,a as ie}from"./user-6-Bk4CTUVR.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{D as N}from"./index-DFq5MbAK.js";import{B as ce}from"./index-DCMPjbua.js";import{R as de}from"./index-C7qOaKQ4.js";import{T as ue}from"./index-CwPxZwdQ.js";import{T as G}from"./index-BAo57mri.js";import{g as F}from"./index-ZORhgBxb.js";import"./menu-CM83wd2-.js";import"./keyboard-9WePWYgZ.js";import"./use-outside-click-CPWvQZIF.js";import"./focus-management-Dc3XsveG.js";import"./use-resolve-button-type-BwPomRAb.js";import"./open-closed-0CPOhxDd.js";const I=se("chat",{state:()=>({settingToggle:!1,openinfo:!0,activechat:!1,searchContact:"",mobileChatSidebar:!1,profileinfo:{},messFeed:[],user:{},contacts:[{id:1,fullName:"Kathryn Murphy",role:"Frontend Developer",lastmessage:"Hey! there I'm available",lastmessageTime:"2:30 PM",unredmessage:Math.floor(Math.random()*10),avatar:g,status:"offline"},{id:2,fullName:"Felecia Rower",role:" UI/UX Designer",lastmessage:"Hey! there I'm available",lastmessageTime:"2:30 PM",unredmessage:Math.floor(Math.random()*10),avatar:le,status:"active"},{id:3,fullName:" Aileen Chavez",role:" Backend Developer",lastmessage:"Hey! there I'm available",lastmessageTime:"2:30 PM",unredmessage:Math.floor(Math.random()*10),avatar:ne,status:"offline"},{id:4,fullName:"Alec Thompson",role:" Full Stack Developer",lastmessage:"Hey! there I'm available",lastmessageTime:"2:30 PM",unredmessage:Math.floor(Math.random()*10),avatar:re,status:"active"},{id:5,fullName:"Murphy Aileen",role:"Frontend Developer",lastmessage:"Hey! there I'm available",lastmessageTime:"2:30 PM",unredmessage:Math.floor(Math.random()*10),avatar:ie,status:"offline"}],chats:[{id:1,userId:1,messages:[{img:g,content:"Hey! How are you?",time:"10:00",sender:"them"},{img:g,content:"Good, I will book the meeting room for you.",time:"10:02",sender:"them"},{content:"Hi, I am good, what about you?",img:j,time:"10:01",sender:"me"},{content:"Thanks, It will be great.",img:j,time:"10:03",sender:"me"},{img:g,content:"Hey! How are you?",time:"10:00",sender:"them"},{img:g,content:"Good, I will book the meeting room for you.",time:"10:02",sender:"them"},{content:"Hi, I am good, what about you?",img:j,time:"10:01",sender:"me"},{content:"Thanks, It will be great.",img:j,time:"10:03",sender:"me"}]},{id:2,userId:2,messages:[{img:g,content:"Hey! How are you?",time:"10:00",sender:"them"},{img:g,content:"Good, I will book the meeting room for you.",time:"10:02",sender:"them"}]},{id:3,userId:3,messages:[{img:g,content:"Hey! How are you?",time:"10:00",sender:"them"},{img:g,content:"Good, I will book the meeting room for you.",time:"10:02",sender:"me"}]},{id:4,userId:4,messages:[{img:g,content:"Hey! How are you?",time:"10:00",sender:"me"},{img:g,content:"Good, I will book the meeting room for you.",time:"10:02",sender:"them"}]},{id:5,userId:5,messages:[{img:g,content:"Hey! How are you?",time:"10:00",sender:"them"},{img:g,content:"Good, I will book the meeting room for you.",time:"10:02",sender:"them"}]}]}),getters:{getprofileinfo:t=>t.profileinfo,getContacts:t=>t.searchContact?t.contacts.filter(l=>l.fullName.toLowerCase().includes(t.searchContact.toLowerCase())):t.contacts,getChats:t=>t.chats},actions:{toggleUserSetting(){this.settingToggle=!this.settingToggle},sendMessage(t){this.messFeed.push(t)},notOpenInfo(){this.openinfo=!this.openinfo},openChat(t){this.activechat=!0,this.mobileChatSidebar=!1,this.user=t,this.chats.map(l=>{l.userId===t.id&&(this.messFeed=l.messages)})},openMobileSidebar(){this.mobileChatSidebar=!this.mobileChatSidebar}}}),he="data:image/svg+xml,%3csvg%20id='chats-circle'%20xmlns='http://www.w3.org/2000/svg'%20width='76'%20height='76'%20viewBox='0%200%2076%2076'%3e%3cline%20id='Line_51'%20data-name='Line%2051'%20x2='15'%20transform='translate(40.5%2050.5)'%20fill='none'%20stroke='%23bcbfc9'%20stroke-linecap='round'%20stroke-width='3'%20stroke-dasharray='0%207'%3e%3c/line%3e%3crect%20id='Rectangle_2812'%20data-name='Rectangle%202812'%20width='76'%20height='76'%20fill='none'%3e%3c/rect%3e%3cpath%20id='Path_3222'%20data-name='Path%203222'%20d='M26.994,64.4A21.417,21.417,0,1,1,34.487,71.9h0l-7.4,2.114A1.785,1.785,0,0,1,24.88,71.8l2.114-7.4Z'%20transform='translate(-16.855%20-22.52)'%20fill='none'%20stroke='%23bcbfc9'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%3e%3c/path%3e%3cpath%20id='Path_3223'%20data-name='Path%203223'%20d='M92.059,108.61a21.439,21.439,0,0,0,31.154,11.319h0l7.4,2.114a1.785,1.785,0,0,0,2.207-2.207l-2.114-7.4h0a21.432,21.432,0,0,0-17.257-32.33'%20transform='translate(-64.664%20-56.268)'%20fill='none'%20stroke='%23bcbfc9'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%3e%3c/path%3e%3cline%20id='Line_49'%20data-name='Line%2049'%20x2='14.977'%20transform='translate(21.07%2025.959)'%20fill='none'%20stroke='%23bcbfc9'%20stroke-linecap='round'%20stroke-width='3'%20stroke-dasharray='0%207'%3e%3c/line%3e%3cline%20id='Line_50'%20data-name='Line%2050'%20x2='15.112'%20transform='translate(21.07%2035.959)'%20fill='none'%20stroke='%23bcbfc9'%20stroke-linecap='round'%20stroke-width='3'%20stroke-dasharray='0%207'%3e%3c/line%3e%3ccircle%20id='Ellipse_1258'%20data-name='Ellipse%201258'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(53%2039)'%20fill='%23bcbfc9'%3e%3c/circle%3e%3c/svg%3e",me=I(),pe={mixins:[V],methods:{...oe(I,["openMobileSidebar"]),open(){me.openMobileSidebar()}}},fe={class:"h-full flex flex-col items-center justify-center xl:space-y-2 space-y-6"},xe=e("img",{src:he,alt:""},null,-1),be=e("h4",{class:"text-2xl text-slate-600 dark:text-slate-300 font-medium"}," No message yet... ",-1),ve={class:"text-sm text-slate-500 lg:pt-0 pt-4"},ge={key:0};function _e(t,l,v,i,u,p){return a(),r("div",fe,[xe,be,e("p",ve,[t.window.width>1024?(a(),r("span",ge,` don't worry, just take a deep breath & say "Hello"`)):b("",!0),t.window.width<=1024?(a(),r("span",{key:1,class:"btn btn-dark cursor-pointer",onClick:l[0]||(l[0]=(...c)=>p.open&&p.open(...c))},"Start Conversation")):b("",!0)])])}const ke=B(pe,[["render",_e]]),we={class:"divide-y divide-slate-100 dark:divide-slate-700"},Ae=["onClick"],ye={class:"flex space-x-3 px-6 rtl:space-x-reverse"},Ce={class:"flex-none"},Ie={class:"h-10 w-10 rounded-full relative"},Me=["src"],Se={class:"flex-1 text-start flex"},je={class:"flex-1"},ze={class:"block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px]"},He={class:"block text-slate-600 dark:text-slate-300 text-xs font-normal"},Be={class:"flex-none ltr:text-right rtl:text-end"},Ee=e("span",{class:"block text-xs text-slate-400 dark:text-slate-400 font-normal"},"12:20 pm",-1),Qe={key:0,class:"inline-flex flex-col items-center justify-center text-[10px] font-medium w-4 h-4 bg-[#FFC155] text-white rounded-full"},J={__name:"Concats",setup(t){const l=I(),v=E(()=>l.getContacts),i=u=>{l.openChat(u)};return(u,p)=>(a(),r("div",we,[(a(!0),r(Q,null,U(v.value,(c,_)=>(a(),r("div",{key:_,onClick:n=>i(c),class:"block w-full py-5 focus:ring-0 outline-none cursor-pointer group transition-all duration-150 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:bg-opacity-70"},[e("div",ye,[e("div",Ce,[e("div",Ie,[e("span",{class:L([c.status==="active"?"bg-success-500":"bg-secondary-500","status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0"])},null,2),e("img",{src:c.avatar,alt:"",class:"block w-full h-full object-cover rounded-full"},null,8,Me)])]),e("div",Se,[e("div",je,[e("span",ze,A(c.fullName),1),e("span",He,A(c.lastmessage.slice(0,14)+"..."),1)]),e("div",Be,[Ee,c.unredmessage>0?(a(),r("span",Qe,A(c.unredmessage),1)):b("",!0)])])])],8,Ae))),128))]))}},Ue="data:image/png;base64,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",Le="/assets/sd2-WmnyYpo7.png",Ge="/assets/sd3-BI_UGxmq.png",Xe="/assets/sd4-DL36xUSc.png",We="data:image/png;base64,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",De="/assets/sd6-CSu8UHX4.png",Ze=e("h4",{class:"text-xl text-slate-900 font-medium mb-8"},"About",-1),Te={class:"h-[100px] w-[100px] rounded-full mx-auto mb-4"},Ne=["src"],Fe={class:"text-center"},Ke={class:"text-base text-slate-600 dark:text-slate-300 font-medium mb-1"},Ve={class:"text-xs text-slate-600 dark:text-slate-300 font-normal"},Re={class:"list-item mt-5 space-y-4 border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6"},Ye={class:"flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]"},Oe={class:"flex space-x-2 items-start rtl:space-x-reverse"},Pe=e("span",null,"Location",-1),Je=e("div",{class:"font-medium"},"Bangladesh",-1),qe={class:"flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]"},$e={class:"flex space-x-2 items-start rtl:space-x-reverse"},et=e("span",null,"Members since",-1),tt=e("div",{class:"font-medium"},"Oct 2021",-1),st={class:"flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]"},ot={class:"flex space-x-2 items-start rtl:space-x-reverse"},at=e("span",null,"Language",-1),lt=e("div",{class:"font-medium"},"English",-1),nt={class:"list-item space-y-3 border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6 mt-5"},rt={class:"capitalize font-normal text-slate-600 dark:text-slate-300"},it=e("h4",{class:"py-4 text-sm text-secondary-500 dark:text-slate-300 font-normal"}," Shared documents ",-1),ct=e("ul",{class:"grid grid-cols-3 gap-2"},[e("li",{class:"h-[46px]"},[e("img",{src:Ue,alt:"",class:"w-full h-full object-cover rounded-[3px]"})]),e("li",{class:"h-[46px]"},[e("img",{src:Le,alt:"",class:"w-full h-full object-cover rounded-[3px]"})]),e("li",{class:"h-[46px]"},[e("img",{src:Ge,alt:"",class:"w-full h-full object-cover rounded-[3px]"})]),e("li",{class:"h-[46px]"},[e("img",{src:Xe,alt:"",class:"w-full h-full object-cover rounded-[3px]"})]),e("li",{class:"h-[46px]"},[e("img",{src:We,alt:"",class:"w-full h-full object-cover rounded-[3px]"})]),e("li",{class:"h-[46px]"},[e("img",{src:De,alt:"",class:"w-full h-full object-cover rounded-[3px]"})])],-1),dt={__name:"Info",setup(t){const l=I(),v=[{name:"facebook",icon:"bi:facebook",link:"#"},{name:"twitter",link:"#",icon:"bi:twitter"},{name:"instagram",link:"#",icon:"bi:instagram"}],i=E(()=>l.user);return(u,p)=>{const c=f("router-link"),_=f("perfect-scrollbar");return a(),z(_,{class:"h-full p-6"},{default:d(()=>[Ze,e("div",Te,[e("img",{src:i.value.avatar,alt:"",class:"block w-full h-full object-cover rounded-full"},null,8,Ne)]),e("div",Fe,[e("h5",Ke,A(i.value.fullName),1),e("h6",Ve,A(i.value.role),1)]),e("ul",Re,[e("li",Ye,[e("div",Oe,[s(o(m),{icon:"heroicons-outline:location-marker",class:"text-base"}),Pe]),Je]),e("li",qe,[e("div",$e,[s(o(m),{icon:"heroicons-outline:user",class:"text-base"}),et]),tt]),e("li",st,[e("div",ot,[s(o(m),{icon:"heroicons-outline:translate",class:"text-base"}),at]),lt])]),e("ul",nt,[(a(),r(Q,null,U(v,(n,h)=>e("li",{key:h,class:"text-sm text-slate-600 dark:text-slate-300 leading-[1]"},[s(c,{to:"#",class:"flex space-x-2 rtl:space-x-reverse"},{default:d(()=>[s(o(m),{icon:n.icon,class:"text-base"},null,8,["icon"]),e("span",rt,A(n.name),1)]),_:2},1024)])),64))]),it,ct]),_:1})}}},q=t=>(Y("data-v-bc4e81ed"),t=t(),O(),t),ut={class:"h-full"},ht={class:"border-b border-slate-100 dark:border-slate-700"},mt={class:"flex py-6 md:px-6 px-3 items-center"},pt={class:"flex-1"},ft={class:"flex space-x-3 rtl:space-x-reverse"},xt={class:"flex-none"},bt={class:"h-10 w-10 rounded-full relative"},vt=["src"],gt={class:"flex-1 text-start"},_t={class:"block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px] truncate"},kt=q(()=>e("span",{class:"block text-slate-500 dark:text-slate-300 text-xs font-normal"},"Active now",-1)),wt={class:"flex-none flex md:space-x-3 space-x-1 items-center rtl:space-x-reverse"},At={class:"msg-action-btn"},yt={class:"msg-action-btn"},Ct={class:"chat-content parent-height"},It={key:0,class:"flex space-x-2 items-start group rtl:space-x-reverse"},Mt={class:"flex-none"},St={class:"h-8 w-8 rounded-full"},jt=["src"],zt={class:"flex-1 flex space-x-4 rtl:space-x-reverse"},Ht={class:"text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all"},Bt=q(()=>e("span",{class:"font-normal text-xs text-slate-400 dark:text-slate-400"},"12:20 pm",-1)),Et={class:"opacity-0 invisible group-hover:opacity-100 group-hover:visible"},Qt={class:"h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full"},Ut={key:1,class:"flex space-x-2 items-start justify-end group w-full rtl:space-x-reverse"},Lt={class:"no flex space-x-4 rtl:space-x-reverse"},Gt={class:"opacity-0 invisible group-hover:opacity-100 group-hover:visible"},Xt={class:"h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900"},Wt={class:"whitespace-pre-wrap break-all"},Dt={class:"text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1"},Zt={class:"font-normal text-xs text-slate-400"},Tt={class:"flex-none"},Nt={class:"h-8 w-8 rounded-full"},Ft=["src"],Kt={class:"md:px-6 px-4 sm:flex md:space-x-4 sm:space-x-2 rtl:space-x-reverse border-t md:pt-6 pt-4 border-slate-100 dark:border-slate-700"},Vt={class:"flex-none sm:flex hidden md:space-x-3 space-x-1 rtl:space-x-reverse"},Rt={class:"h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full"},Yt={class:"h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full"},Ot={class:"flex-1 relative flex space-x-3 rtl:space-x-reverse"},Pt={class:"flex-1"},Jt=["onKeydown"],qt={class:"flex-none md:pr-0 pr-3"},$t={__name:"Message",setup(t){const l=S(0),v=()=>{l.value=window.innerWidth};R(()=>{window.addEventListener("resize",v),v()});const i=S(""),u=I(),p=E(()=>u.messFeed),c=S(null),_=()=>{setTimeout(()=>{const y=c.value;y.scrollTop=y.scrollHeight-y.clientHeight},50)},n=()=>{i.value&&u.sendMessage({content:i.value,sender:"me",img:j}),i.value="",_()},h=E(()=>{const y=new Date,k=y.getHours(),x=y.getMinutes(),H=k>=12?"pm":"am",ee=k%12||12,te=x<10?"0"+x:x;return ee+":"+te+" "+H}),w=[{label:"Remove",link:"#"},{label:"Forward",link:"#"}],M=()=>{u.notOpenInfo()};return(y,k)=>(a(),r("div",ut,[e("header",ht,[e("div",mt,[e("div",pt,[e("div",ft,[l.value<=1024?(a(),r("span",{key:0,onClick:k[0]||(k[0]=x=>o(u).mobileChatSidebar=!0),class:"text-slate-900 dark:text-white cursor-pointer text-xl self-center ltr:mr-3 rtl:ml-3"},[s(o(m),{icon:"heroicons-outline:menu-alt-1"})])):b("",!0),e("div",xt,[e("div",bt,[e("span",{class:L([o(u).user.status==="active"?"bg-success-500":"bg-secondary-500","status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0"])},null,2),e("img",{src:o(u).user.avatar,alt:"",class:"w-full h-full object-cover rounded-full"},null,8,vt)])]),e("div",gt,[e("span",_t,A(o(u).user.fullName),1),kt])])]),e("div",wt,[e("div",At,[s(o(m),{icon:"heroicons-outline:phone"})]),e("div",yt,[s(o(m),{icon:"heroicons-outline:video-camera"})]),e("div",{onClick:M,class:"msg-action-btn"},[s(o(m),{icon:"heroicons-outline:dots-horizontal"})])])])]),e("div",Ct,[e("div",{class:"msgs overflow-y-auto msg-height pt-6 space-y-6",ref_key:"chatheight",ref:c},[(a(!0),r(Q,null,U(p.value,(x,H)=>(a(),r("div",{class:"block md:px-6 px-4",key:H},[x.sender==="them"?(a(),r("div",It,[e("div",Mt,[e("div",St,[e("img",{src:x.img,alt:"",class:"block w-full h-full object-cover rounded-full"},null,8,jt)])]),e("div",zt,[e("div",null,[e("div",Ht,A(x.content),1),Bt]),e("div",Et,[s(o(N),{classMenuItems:" w-[100px] top-0",items:w},{default:d(()=>[e("div",Qt,[s(o(m),{icon:"heroicons-outline:dots-horizontal"})])]),_:1})])])])):b("",!0),x.sender==="me"?(a(),r("div",Ut,[e("div",Lt,[e("div",Gt,[s(o(N),{classMenuItems:" w-[100px] left-0 top-0  ",items:w},{default:d(()=>[e("div",Xt,[s(o(m),{icon:"heroicons-outline:dots-horizontal"})])]),_:1})]),e("div",Wt,[e("div",Dt,A(x.content),1),e("span",Zt,A(h.value),1)])]),e("div",Tt,[e("div",Nt,[e("img",{src:o(u).user.avatar,alt:"",class:"block w-full h-full object-cover rounded-full"},null,8,Ft)])])])):b("",!0)]))),128))],512)]),e("footer",Kt,[e("div",Vt,[e("div",Rt,[s(o(m),{icon:"heroicons-outline:link"})]),e("div",Yt,[s(o(m),{icon:"heroicons-outline:emoji-happy"})])]),e("div",Ot,[e("div",Pt,[W(e("textarea",{type:"text",placeholder:"Type your message...",class:"focus:ring-0 focus:outline-0 block w-full bg-transparent dark:text-white resize-none","onUpdate:modelValue":k[1]||(k[1]=x=>i.value=x),onKeydown:[Z(T(n,["exact","prevent"]),["enter"]),k[2]||(k[2]=Z(T(x=>i.value+=`
`,["shift","exact","prevent"]),["enter"]))]},null,40,Jt),[[D,i.value,void 0,{trim:!0}]])]),e("div",qt,[e("button",{type:"button",onClick:n,class:"h-8 w-8 bg-slate-900 text-white flex flex-col justify-center items-center text-lg rounded-full"},[s(o(m),{icon:"heroicons-outline:paper-airplane",class:"transform rotate-[60deg]"})])])])])]))}},es=B($t,[["__scopeId","data-v-bc4e81ed"]]),C=t=>(Y("data-v-27ddee89"),t=t(),O(),t),ts={class:"flex px-6 pt-6"},ss={class:"flex-1"},os={class:"flex space-x-3 rtl:space-x-reverse"},as={class:"flex-none"},ls=C(()=>e("img",{src:j,alt:"",class:"w-full h-full object-cover rounded-full"},null,-1)),ns=[ls],rs=C(()=>e("div",{class:"flex-1 text-start"},[e("span",{class:"block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px]"},[ae("Jane Cooper "),e("span",{class:"status bg-success-500 inline-block h-[10px] w-[10px] rounded-full ml-3"})]),e("span",{class:"block text-slate-500 dark:text-slate-300 text-xs font-normal"},"Available")],-1)),is={class:"flex-none"},cs=C(()=>e("span",null,"Settings",-1)),ds=C(()=>e("span",null,"close",-1)),us={key:0,class:"absolute bg-white dark:bg-slate-800 rounded-md h-full left-0 top-0 bottom-0 p-6 w-full z-[9]"},hs={class:"text-right"},ms=C(()=>e("span",null,"Close Setting",-1)),ps={class:"mx-auto max-w-[200px] mt-6 text-center"},fs={class:"h-16 w-16 rounded-full border border-slate-400 p-[2px] shadow-md mx-auto mb-3 relative"},xs=C(()=>e("img",{src:j,alt:"",class:"block w-full h-full rounded-full object-contain"},null,-1)),bs=C(()=>e("span",{class:"block text-slate-600 dark:text-slate-300 text-sm"},"Jane Cooper ",-1)),vs=C(()=>e("span",{class:"block text-slate-500 dark:text-slate-300 text-xs"},"Admin",-1)),gs={class:"my-8"},_s={class:"mb-8"},ks=C(()=>e("span",{class:"form-label"},"Status",-1)),ws={__name:"Myprofile",setup(t){const l=S(0),v=()=>{l.value=window.innerWidth};R(()=>{window.addEventListener("resize",v),v()});const i=I(),u=S("Dessert chocolate cake lemon drops "),p=S("online"),c=S([{value:"online",label:"Active",activeClass:"ring-success-500 border-success-500"},{value:"busy",label:"Do Not Disturb",activeClass:"ring-danger-500 border-danger-500"},{value:"away",label:"Away",activeClass:"ring-warning-500 border-warning-500"},{value:"offline",label:"Offline",activeClass:"ring-warning-500 border-warning-500"}]);return(_,n)=>(a(),r("div",null,[e("header",null,[e("div",ts,[e("div",ss,[e("div",os,[e("div",as,[e("div",{class:"h-10 w-10 rounded-full",onClick:n[0]||(n[0]=(...h)=>_.toggleuserSetting&&_.toggleuserSetting(...h))},ns)]),rs])]),e("div",is,[l.value>1024?(a(),z(o(G),{key:0,placement:"top",arrow:""},{button:d(()=>[e("div",{onClick:n[1]||(n[1]=h=>o(i).toggleUserSetting()),class:"h-8 w-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full cursor-pointer"},[s(o(m),{icon:"heroicons-outline:dots-horizontal"})])]),default:d(()=>[cs]),_:1})):b("",!0),l.value<1024?(a(),z(o(G),{key:1,placement:"top",arrow:""},{button:d(()=>[e("div",{onClick:n[2]||(n[2]=h=>o(i).mobileChatSidebar=!1),class:"h-8 w-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full cursor-pointer"},[s(o(m),{icon:"heroicons-outline:x"})])]),default:d(()=>[ds]),_:1})):b("",!0)])]),s(X,{name:"chat-user-setting"},{default:d(()=>[o(i).settingToggle?(a(),r("div",us,[e("div",hs,[s(o(G),{placement:"top",arrow:"",theme:"danger-500"},{button:d(()=>[e("div",{onClick:n[3]||(n[3]=h=>o(i).settingToggle=!1),class:"h-8 w-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 inline-flex ml-auto flex-col justify-center items-center text-xl rounded-full cursor-pointer"},[s(o(m),{icon:"heroicons-outline:x"})])]),default:d(()=>[ms]),_:1})]),e("header",ps,[e("div",fs,[xs,e("span",{class:L(["status inline-block h-3 w-3 rounded-full absolute -right-1 top-3 border border-white",{"bg-success-500":p.value==="online","bg-warning-500":p.value==="away","bg-danger-500":p.value==="busy","bg-secondary-500":p.value==="offline"}])},null,2)]),bs,vs]),e("div",gs,[s(o(ue),{label:"About",placeholder:"About ypur self",modelValue:u.value,"onUpdate:modelValue":n[4]||(n[4]=h=>u.value=h)},null,8,["modelValue"])]),e("div",_s,[ks,(a(!0),r(Q,null,U(c.value,(h,w)=>(a(),z(o(de),{key:w,label:h.label,activeClass:h.activeClass,class:"mb-5",modelValue:p.value,"onUpdate:modelValue":n[5]||(n[5]=M=>p.value=M),value:h.value},null,8,["label","activeClass","modelValue","value"]))),128))]),s(o(ce),{text:"Logout",btnClass:"btn-dark "})])):b("",!0)]),_:1})])]))}},$=B(ws,[["__scopeId","data-v-27ddee89"]]),As={components:{Card:K,Myprofile:$,Contact:J,Icon:m},computed:{...P(I,["searchContact"])}},ys={class:"absolute ltr:left-0 rtl:right-0 top-0 w-[260px] z-[99] h-full"},Cs={class:"border-b border-slate-100 dark:border-slate-700 pb-4 mb-4"},Is={class:"border-b border-slate-100 dark:border-slate-700 pb-4"},Ms={class:"search px-3 mx-6 rounded flex items-center space-x-3 rtl:space-x-reverse"},Ss={class:"flex-none text-base text-slate-500"};function js(t,l,v,i,u,p){const c=f("Myprofile"),_=f("Icon"),n=f("Contact"),h=f("perfect-scrollbar"),w=f("Card");return a(),r("div",ys,[s(w,{bodyClass:" relative p-0 h-full overflow-hidden ",class:"h-full rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none"},{default:d(()=>[e("div",Cs,[s(c)]),e("div",Is,[e("div",Ms,[e("div",Ss,[s(_,{icon:"bytesize:search"})]),W(e("input",{"onUpdate:modelValue":l[0]||(l[0]=M=>this.searchContact=M),placeholder:"Search...",class:"w-full flex-1 block bg-transparent py-2 focus:ring-0 focus:outline-none"},null,512),[[D,this.searchContact]])])]),s(h,{class:"mobile-contact-height"},{default:d(()=>[s(n)]),_:1})]),_:1})])}const zs=B(As,[["render",js]]),Hs={mixins:[V],components:{Card:K,Icon:m,Blank:ke,Contact:J,infomation:dt,Chats:es,Myprofile:$,MobileSidebar:zs},beforeRouteLeave(t,l,v){this.activechat=!1,v()},methods:{enterMobileSidebar(t){F.from(t,{x:this.$store.themeSettingsStore.direction?100:-100,duration:.3,ease:"power3.out"})},leaveMobileSidebar(t){F.to(t,{x:this.$store.themeSettingsStore.direction?100:-100,duration:.3,ease:"power3.out"})}},computed:{...P(I,["searchContact","mobileChatSidebar","openinfo","activechat"])}},Bs={class:"flex space-x-5 chat-height overflow-hidden relative rtl:space-x-reverse"},Es={key:0,class:"flex-none min-w-[260px]"},Qs={class:"border-b border-slate-100 dark:border-slate-700 pb-4"},Us={class:"border-b border-slate-100 dark:border-slate-700 py-1"},Ls={class:"search px-3 mx-6 rounded flex items-center space-x-3 rtl:space-x-reverse"},Gs={class:"flex-none text-base text-slate-900 dark:text-slate-400"},Xs={class:"flex-1"},Ws={class:"parent flex space-x-5 h-full rtl:space-x-reverse"},Ds={key:0,class:"flex-none w-[285px]"};function Zs(t,l,v,i,u,p){const c=f("Myprofile"),_=f("Icon"),n=f("Contact"),h=f("perfect-scrollbar"),w=f("Card"),M=f("mobile-sidebar"),y=f("Chats"),k=f("Blank"),x=f("infomation");return a(),r("div",Bs,[t.window.width>1024?(a(),r("div",Es,[s(w,{bodyClass:" relative p-0 h-full overflow-hidden ",class:"h-full"},{default:d(()=>[e("div",Qs,[s(c)]),e("div",Us,[e("div",Ls,[e("div",Gs,[s(_,{icon:"bytesize:search"})]),W(e("input",{"onUpdate:modelValue":l[0]||(l[0]=H=>this.searchContact=H),placeholder:"Search...",class:"w-full flex-1 block bg-transparent placeholder:font-normal placeholder:text-slate-400 py-2 focus:ring-0 focus:outline-none dark:text-slate-200 dark:placeholder:text-slate-400"},null,512),[[D,this.searchContact]])])]),s(h,{class:"contact-height"},{default:d(()=>[s(n)]),_:1})]),_:1})])):b("",!0),s(X,{onEnter:p.enterMobileSidebar,onLeave:p.leaveMobileSidebar},{default:d(()=>[t.window.width<=1024&&this.mobileChatSidebar?(a(),z(M,{key:0})):b("",!0)]),_:1},8,["onEnter","onLeave"]),s(X,{name:"overlay-fade"},{default:d(()=>[t.window.width<=1024&&this.mobileChatSidebar?(a(),r("div",{key:0,class:"overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter backdrop-blur-sm absolute w-full flex-1 inset-0 z-[9] rounded-md",onClick:l[1]||(l[1]=H=>this.mobileChatSidebar=!1)})):b("",!0)]),_:1}),e("div",Xs,[e("div",Ws,[e("div",{class:L(["",(this.openinfo&&this.activechat===!0,"flex-1")])},[s(w,{bodyClass:"p-0 h-full",class:"h-full"},{default:d(()=>[this.activechat===!0?(a(),z(y,{key:0})):b("",!0),this.activechat===!1?(a(),z(k,{key:1})):b("",!0)]),_:1})],2),this.openinfo&&this.activechat===!0&&t.window.width>1280?(a(),r("div",Ds,[s(w,{bodyClass:"p-0 h-full",class:"h-full"},{default:d(()=>[s(x)]),_:1})])):b("",!0)])])])}const io=B(Hs,[["render",Zs],["__scopeId","data-v-6b91dc8a"]]);export{io as default};
