import{B as A}from"./index-CRJE58yX.js";import{_ as q,l as O,a as U,b as F,c as V,N as Y,s as J,F as K,S as Q,d as R,M as X}from"./FooterMenu-CGG-XHpG.js";import{j,o as e,d as o,f as t,e as l,k as C,t as $,F as S,u as N,c as n,l as d,g as h,m as M,p as _,h as H,q as r,s as W,T as L,v as Z,x as ee}from"./index-BFn_3Gdk.js";import{I as y}from"./index-BffMpWx5.js";import{c as te}from"./counter-button-5S_IoSv1.js";import{D as z}from"./index-Bs_uOHMv.js";import{p as se,n as oe,m as re,t as ne,a as ae}from"./data-gS5vGOMl.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as T}from"./menu-BIf-sRSE.js";import{j as le,A as ie,F as ce,I as de}from"./listbox-f-mNa9Vm.js";import{a as P,_ as E}from"./logo-CZW9Td9a.js";import{w as G}from"./window-Ds9AqdYU.js";import{g as B}from"./index-ZORhgBxb.js";/* empty css                                              */import"./index-CvW4wJPB.js";import"./user-1-Dmhlt7-s.js";import"./av-2-D6_jNZbn.js";import"./keyboard-CmTzE63w.js";import"./use-outside-click-RVZZ1L_X.js";import"./focus-management-C7_eiYjk.js";import"./use-resolve-button-type-0pot5Y2u.js";import"./open-closed-Bo1bAx4t.js";import"./hidden-Br4jqfTk.js";const ue={class:"absolute lg:right-0 lg:top-0 -top-2 -right-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]"},he={__name:"Carti",setup(s){const a=j(),p=()=>{a.toggleCartDrawer()},b=te();return(g,m)=>(e(),o(S,null,[t("span",{onClick:p,class:"relative lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"},[l(C(y),{icon:"heroicons:shopping-cart"}),t("span",ue,$(C(b).items.length),1)]),l(C(q))],64))}},me={components:{Icon:y,Dropdown:z,MenuItem:T},data(){return{profileImg:se,userName:"",ProfileMenu:[{label:"Guaros Group",icon:"heroicons-outline:shield-check",link:this.redirectToGuaros},{label:"Cerrar Sesión",icon:"heroicons-outline:login",link:this.handleLogout}]}},methods:{handleLogout(){this.$router,N().logout()},redirectToGuaros(){this.$router.push("/login3")}},created(){const s=N();this.userName=s.user.name}},pe={class:"flex items-center"},_e={class:"flex-1 ltr:mr-[10px] rtl:ml-[10px]"},xe={class:"flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap"},ge={class:"overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block"},fe={class:"text-base inline-block ltr:ml-[10px] rtl:mr-[10px]"},be=["onClick"],ke={class:"flex-none text-lg"},$e={class:"flex-1 text-sm"};function we(s,a,p,b,g,m){const u=n("Icon"),x=n("MenuItem"),i=n("Dropdown");return e(),d(i,{classMenuItems:"w-[180px] top-[58px]"},{menus:h(()=>[(e(!0),o(S,null,M(g.ProfileMenu,(f,c)=>(e(),d(x,{key:c},{default:h(({active:w})=>[t("div",{type:"button",class:_([`${w?"bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 text-slate-900 dark:text-slate-300":"text-slate-600 dark:text-slate-300"} `,"inline-flex items-center space-x-2 rtl:space-x-reverse w-full px-4 py-2 first:rounded-t last:rounded-b font-normal cursor-pointer"]),onClick:k=>f.link()},[t("div",ke,[l(u,{icon:f.icon},null,8,["icon"])]),t("div",$e,$(f.label),1)],10,be)]),_:2},1024))),128))]),default:h(()=>[t("div",pe,[t("div",_e,[l(u,{icon:"heroicons-outline:user-circle",class:"lg:h-8 lg:w-8 h-7 w-7 rounded-full text-gray-600 dark:text-white"})]),t("div",xe,[t("span",ge,$(g.userName),1),t("span",fe,[l(u,{icon:"heroicons-outline:chevron-down"})])])])]),_:1})}const ve=v(me,[["render",we]]),Se={components:{Icon:y,Dropdown:z,MenuItem:T},data(){return{notifications:oe}}},ye={class:"relative lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900 dark:text-white cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"},Me=t("span",{class:"absolute lg:right-0 lg:top-0 -top-2 -right-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]"},"2",-1),Ce={class:"flex justify-between px-4 py-4 border-b border-slate-100 dark:border-slate-600"},Ie=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 font-medium leading-6"}," Notifications ",-1),De={class:"text-slate-800 dark:text-slate-200 text-xs md:text-right"},je={class:"divide-y divide-slate-100 dark:divide-slate-800"},Le={class:"flex ltr:text-left rtl:text-right"},He={class:"flex-none ltr:mr-3 rtl:ml-3"},ze={class:"h-8 w-8 bg-white rounded-full"},Te=["src"],Ne={class:"flex-1"},Be=t("div",{class:"text-slate-400 dark:text-slate-400 text-xs mt-1"}," 3 min ago ",-1),Fe={key:0,class:"flex-0"},Ve=t("span",{class:"h-[10px] w-[10px] bg-danger-500 border border-white dark:border-slate-400 rounded-full inline-block"},null,-1),We=[Ve];function Pe(s,a,p,b,g,m){const u=n("Icon"),x=n("router-link"),i=n("MenuItem"),f=n("Dropdown");return e(),d(f,{classMenuItems:"md:w-[300px] top-[58px]",classItem:"px-4 py-2"},{menus:h(()=>[t("div",Ce,[Ie,t("div",De,[l(x,{to:{name:"notifications"},class:"underline"},{default:h(()=>[H("View all")]),_:1})])]),t("div",je,[(e(!0),o(S,null,M(g.notifications,(c,w)=>(e(),d(i,{key:w},{default:h(({active:k})=>[t("div",{class:_(`${k?"bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 text-slate-800":"text-slate-600 dark:text-slate-300"} block w-full px-4 py-2 text-sm  cursor-pointer`)},[t("div",Le,[t("div",He,[t("div",ze,[t("img",{src:c.image,alt:"",class:_(`${k?" border-white":" border-transparent"} block w-full h-full object-cover rounded-full border`)},null,10,Te)])]),t("div",Ne,[t("div",{class:_(`${k?"text-slate-600 dark:text-slate-300":" text-slate-600 dark:text-slate-300"} text-sm`)},$(c.title),3),t("div",{class:_(`${k?"text-slate-500 dark:text-slate-200":" text-slate-600 dark:text-slate-300"} text-xs leading-4`)},$(c.desc),3),Be]),c.unread?(e(),o("div",Fe,We)):r("",!0)])],2)]),_:2},1024))),128))])]),default:h(()=>[t("span",ye,[l(u,{icon:"heroicons-outline:bell",class:"animate-tada"}),Me])]),_:1})}const Ee=v(Se,[["render",Pe]]),Ge={components:{Icon:y,Dropdown:z,MenuItem:T},data(){return{message:re}}},Ae={class:"relative lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"},qe=t("span",{class:"absolute lg:right-0 lg:top-0 -top-2 -right-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]"},"10",-1),Oe={class:"flex justify-between px-4 py-4 border-b border-slate-100 dark:border-slate-600"},Ue=t("div",{class:"text-sm text-slate-800 dark:text-white font-medium leading-6"}," Messages ",-1),Ye={class:"text-slate-800 dark:text-white text-xs md:text-right"},Je={class:"divide-y divide-slate-100 dark:divide-slate-800"},Ke={class:"flex ltr:text-left rtl:text-right space-x-3 rtl:space-x-reverse"},Qe={class:"flex-none"},Re={class:"h-8 w-8 bg-white dark:bg-slate-700 rounded-full relative"},Xe=["src"],Ze={class:"flex-1"},et={class:"text-slate-800 dark:text-slate-300 text-sm font-medium mb-1`"},tt={class:"text-xs hover:text-[#68768A] text-slate-600 dark:text-slate-300 mb-1"},st=t("div",{class:"text-slate-400 dark:text-slate-400 text-xs"}," 3 min ago ",-1),ot={key:0,class:"flex-0"},rt={class:"h-4 w-4 bg-danger-500 border border-white rounded-full text-[10px] flex items-center justify-center text-white"};function nt(s,a,p,b,g,m){const u=n("Icon"),x=n("router-link"),i=n("MenuItem"),f=n("Dropdown");return e(),d(f,{classMenuItems:"md:w-[335px] w-min top-[58px]",classItem:"px-4 py-2"},{menus:h(()=>[t("div",Oe,[Ue,t("div",Ye,[l(x,{to:{name:"chat"},class:"underline"},{default:h(()=>[H("View all")]),_:1})])]),t("div",Je,[(e(!0),o(S,null,M(g.message.slice(0,3),(c,w)=>(e(),d(i,{key:w},{default:h(({active:k})=>[t("div",{class:_(`${k?"bg-slate-100 text-slate-800 dark:bg-slate-600 dark:bg-opacity-70":"text-slate-600 dark:text-slate-300"} block w-full px-4 py-2 text-sm  cursor-pointer`)},[t("div",Ke,[t("div",Qe,[t("div",Re,[t("span",{class:_(`${c.active?"bg-secondary-500":"bg-green-500"} w-[10px] h-[10px] rounded-full border border-white dark:border-slate-700  inline-block absolute right-0 top-0`)},null,2),t("img",{src:c.image,alt:"",class:"block w-full h-full object-cover rounded-full border hover:border-white border-transparent"},null,8,Xe)])]),t("div",Ze,[t("div",et,$(c.title),1),t("div",tt,$(c.desc),1),st]),c.hasnotifaction?(e(),o("div",ot,[t("span",rt,$(c.notification_count),1)])):r("",!0)])],2)]),_:2},1024))),128))])]),default:h(()=>[t("span",Ae,[l(u,{icon:"heroicons-outline:mail"}),qe])]),_:1})}const at=v(Ge,[["render",nt]]),lt=j(),it={components:{Icon:y},methods:{toogleDark(){lt.toogleDark()}}};function ct(s,a,p,b,g,m){const u=n("Icon");return e(),o("span",{onClick:a[0]||(a[0]=(...x)=>m.toogleDark&&m.toogleDark(...x)),class:"h-[28px] w-[28px] lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"},[this.$store.themeSettingsStore.isDark?this.$store.themeSettingsStore.isDark?(e(),d(u,{key:1,icon:"heroicons-outline:sun"})):r("",!0):(e(),d(u,{key:0,icon:"heroicons-outline:moon"}))])}const dt=v(it,[["render",ct]]),ut=j(),ht={components:{Icon:y},methods:{toggleMonochrome(){ut.toggleMonochrome()}}};function mt(s,a,p,b,g,m){const u=n("Icon");return e(),o("span",{onClick:a[0]||(a[0]=(...x)=>m.toggleMonochrome&&m.toggleMonochrome(...x)),class:"lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900 text-slate-900 dark:text-white cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"},[l(u,{icon:"mdi:palette-outline",class:"font-bold"})])}const pt=v(ht,[["render",mt]]),_t={components:{Icon:y},data(){return{topMenu:ne}},computed:{newMenulist:function(){return this.topMenu.filter(function(s){return!s.isHeadr})}}},xt={class:"flex flex-1 items-center space-x-[6px] rtl:space-x-reverse"},gt={key:0,class:"icon-box"},ft={key:1,class:"text-box"},bt={key:1,href:"javascript: void(0);"},kt={class:"flex flex-1 items-center space-x-[6px] rtl:space-x-reverse"},$t={key:0,class:"icon-box"},wt={key:1,class:"text-box"},vt={class:"flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1"},St={key:2,class:"sub-menu"},yt={class:"flex space-x-2 items-start rtl:space-x-reverse"},Mt={class:"leading-[1]"},Ct={key:1,href:"javascript: void(0);"},It={key:2,class:"sub-menu"},Dt={key:3,class:"rt-mega-menu"},jt={class:"flex flex-wrap space-x-8 justify-between rtl:space-x-reverse"},Lt={class:"text-sm font-medium text-slate-900 dark:text-white mb-2 flex space-x-1 items-center"};function Ht(s,a,p,b,g,m){const u=n("Icon"),x=n("router-link");return e(),o("ul",null,[(e(!0),o(S,null,M(m.newMenulist,(i,f)=>(e(),o("li",{key:f,class:_(i.child?"menu-item-has-children":i.megamenu?"menu-item-has-children has-megamenu":"")},[!i.child&&!i.megamenu?(e(),d(x,{key:0,to:i.link},{default:h(()=>[t("div",xt,[i.icon?(e(),o("span",gt,[l(u,{icon:i.icon},null,8,["icon"])])):r("",!0),i.title?(e(),o("div",ft,$(i.title),1)):r("",!0)])]),_:2},1032,["to"])):r("",!0),i.child||i.megamenu?(e(),o("a",bt,[t("div",kt,[i.icon?(e(),o("span",$t,[l(u,{icon:i.icon},null,8,["icon"])])):r("",!0),i.title?(e(),o("div",wt,$(i.title),1)):r("",!0)]),t("div",vt,[l(u,{icon:"heroicons-outline:chevron-down"})])])):r("",!0),i.child?(e(),o("ul",St,[(e(!0),o(S,null,M(i.child,(c,w)=>(e(),o("li",{key:w,class:_(c.submenu?"menu-item-has-children":"")},[c.submenu?r("",!0):(e(),d(x,{key:0,to:c.childlink},{default:h(()=>[t("div",yt,[l(u,{icon:c.childicon,class:"leading-[1] text-base"},null,8,["icon"]),t("span",Mt,$(c.childtitle),1)])]),_:2},1032,["to"])),c.submenu?(e(),o("a",Ct,$(c.childtitle),1)):r("",!0),c.submenu?(e(),o("ul",It,[(e(!0),o(S,null,M(c.submenu,(k,I)=>(e(),o("li",{key:I},[l(x,{to:k.subMenuLink},{default:h(()=>[H($(k.submenutitle),1)]),_:2},1032,["to"])]))),128))])):r("",!0)],2))),128))])):r("",!0),i.megamenu?(e(),o("div",Dt,[t("div",jt,[(e(!0),o(S,null,M(i.megamenu,(c,w)=>(e(),o("div",{key:w},[t("div",Lt,[l(u,{icon:c.megamenuicon},null,8,["icon"]),t("span",null,$(c.megamenutitle),1)]),(e(!0),o(S,null,M(c.singleMegamenu,(k,I)=>(e(),d(x,{to:k.m_childlink,key:I,class:"flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse"},{default:h(({isActive:D})=>[t("span",{class:_(["h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none",D?" bg-slate-900 dark:bg-white":""])},null,2),t("span",{class:_(["capitalize",D?" text-slate-900 dark:text-white font-medium":"text-slate-600 dark:text-slate-300"])},$(k.m_childtitle),3)]),_:2},1032,["to"]))),128))]))),128))])])):r("",!0)],2))),128))])}const zt=v(_t,[["render",Ht]]),Tt={components:{DesktopMenu:zt}},Nt={class:"main-menu"};function Bt(s,a,p,b,g,m){const u=n("DesktopMenu");return e(),o("div",Nt,[l(u)])}const Ft=v(Tt,[["render",Bt]]),Vt={class:"flex items-center xl:text-sm text-lg xl:text-slate-400 text-slate-800 dark:text-slate-300 px-1 space-x-3 rtl:space-x-reverse"},Wt=t("span",{class:"xl:inline-block hidden font-bold"},"Oficina Principal",-1),Pt={__name:"SearchModal",setup(s){return(a,p)=>(e(),o("div",Vt,[l(C(y),{icon:"heroicons-outline:home",class:"h-8 w-8 border border-gray-300 dark:border-gray-600 rounded-full p-1"}),Wt]))}},Et={class:"relative z-[22]"},Gt={class:"inline-block md:h-6 md:w-6 w-5 h-5 rounded-full"},At=["src"],qt={class:"text-sm md:block hidden font-medium text-slate-600 dark:text-slate-300"},Ot={class:"flex items-center space-x-2 rtl:space-x-reverse"},Ut={class:"flex-none"},Yt={class:"lg:w-6 lg:h-6 w-4 h-4 rounded-full inline-block"},Jt=["src"],Kt={class:"flex-1 lg:text-base text-sm capitalize"},Qt={__name:"Language",setup(s){const a=[{name:"En",image:O},{name:"Gn",image:U}],p=W(a[0]);return(b,g)=>(e(),o("div",null,[l(C(de),{modelValue:p.value,"onUpdate:modelValue":g[0]||(g[0]=m=>p.value=m)},{default:h(()=>[t("div",Et,[l(C(le),{class:"relative w-full flex items-center cursor-pointer space-x-[6px] rtl:space-x-reverse"},{default:h(()=>[t("span",Gt,[t("img",{src:p.value.image,alt:"",class:"h-full w-full object-cover rounded-full"},null,8,At)]),t("span",qt,$(p.value.name),1)]),_:1}),l(L,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:h(()=>[l(C(ie),{class:"absolute min-w-[100px] ltr:right-0 rtl:left-0 md:top-[49px] top-[34px] w-auto max-h-60 overflow-auto border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 mt-1"},{default:h(()=>[(e(),o(S,null,M(a,m=>l(C(ce),{key:m.name,value:m,as:"template"},{default:h(({active:u})=>[t("li",{class:_([u?"bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 bg-opacity-50 dark:text-white ":"text-slate-600 dark:text-slate-300","w-full border-b border-b-gray-500 border-opacity-10 px-2 py-2 last:border-none last:mb-0 cursor-pointer first:rounded-t last:rounded-b"])},[t("div",Ot,[t("span",Ut,[t("span",Yt,[t("img",{src:m.image,alt:"",class:"w-full h-full object-cover relative top-1 rounded-full"},null,8,Jt)])]),t("span",Kt,$(m.name),1)])],2)]),_:2},1032,["value"])),64))]),_:1})]),_:1})])]),_:1},8,["modelValue"])]))}},Rt={},Xt={key:0,src:P,alt:""},Zt={key:1,src:E,alt:""};function es(s,a){const p=n("router-link");return e(),d(p,{to:{name:"home"}},{default:h(()=>[this.$store.themeSettingsStore.isDark?r("",!0):(e(),o("img",Xt)),this.$store.themeSettingsStore.isDark?(e(),o("img",Zt)):r("",!0)]),_:1})}const ts=v(Rt,[["render",es]]),ss={},os={key:0,src:F,alt:""},rs={key:1,src:V,alt:""};function ns(s,a){const p=n("router-link");return e(),d(p,{to:{name:"home"}},{default:h(()=>[this.$store.themeSettingsStore.isDark?r("",!0):(e(),o("img",os)),this.$store.themeSettingsStore.isDark?(e(),o("img",rs)):r("",!0)]),_:1})}const as=v(ss,[["render",ns]]),ls={__name:"HandleMobileMenu",setup(s){const a=j(),p=()=>{a.toggleMsidebar()};return(b,g)=>(e(),o("div",{class:"cursor-pointer text-slate-900 dark:text-white text-2xl",onClick:p},[l(C(y),{icon:"heroicons-outline:menu-alt-3"})]))}},is={mixins:[G],components:{Carti:he,Profile:ve,Notification:Ee,Message:at,SwitchDark:dt,MonochromeMode:pt,Mainnav:Ft,Icon:y,LanguageVue:Qt,SearchModal:Pt,Logo:ts,MobileLogo:as,HandleMobileMenu:ls},methods:{navbarTypeClass(){switch(j().navbarType){case"floating":return"floating";case"sticky":return"sticky top-0 z-[999]";case"static":return"static";case"hidden":return"hidden";default:return"sticky top-0"}},borderSwicthClass(){const s=j();return s.skin==="bordered"&&s.navbarType!=="floating"?"border-b border-gray-5002 dark:border-slate-700":s.skin==="bordered"&&s.navbarType==="floating"?"border border-gray-5002 dark:border-slate-700":"dark:border-b dark:border-slate-700 dark:border-opacity-60"}}},cs={class:"flex justify-between items-center h-full"},ds={key:0,class:"flex items-center md:space-x-4 space-x-2 rtl:space-x-reverse"},us={key:1,class:"flex items-center space-x-4 rtl:space-x-reverse"},hs={class:"nav-tools flex items-center lg:space-x-5 space-x-3 rtl:space-x-reverse"};function ms(s,a,p,b,g,m){const u=n("Icon"),x=n("MobileLogo"),i=n("handle-mobile-menu"),f=n("SearchModal"),c=n("Logo"),w=n("Mainnav"),k=n("SwitchDark"),I=n("MonochromeMode"),D=n("Profile");return e(),o("header",{class:_(m.navbarTypeClass())},[t("div",{class:_(`app-header md:px-6 px-[15px]  dark:bg-slate-800 shadow-base dark:shadow-base3 bg-white ${m.borderSwicthClass()} ${this.$store.themeSettingsStore.navbarColor}
      ${this.$store.themeSettingsStore.menuLayout==="horizontal"&&s.window.width>1280?"py-1":"md:py-6 py-3"}
      `)},[t("div",cs,[this.$store.themeSettingsStore.menuLayout==="vertical"?(e(),o("div",ds,[this.$store.themeSettingsStore.sidebarCollasp&&s.window.width>1280?(e(),o("button",{key:0,class:"ltr:mr-5 rtl:ml-5 text-xl text-slate-900 dark:text-white",onClick:a[0]||(a[0]=ys=>this.$store.themeSettingsStore.sidebarCollasp=!1)},[this.$store.themeSettingsStore.direction?r("",!0):(e(),d(u,{key:0,icon:"akar-icons:arrow-right"})),this.$store.themeSettingsStore.direction?(e(),d(u,{key:1,icon:"akar-icons:arrow-left"})):r("",!0)])):r("",!0),s.window.width<1280?(e(),d(x,{key:1})):r("",!0),s.window.width<1280&&s.window.width>768?(e(),d(i,{key:2})):r("",!0),l(f)])):r("",!0),this.$store.themeSettingsStore.menuLayout==="horizontal"?(e(),o("div",us,[s.window.width>1280?(e(),d(c,{key:0})):(e(),d(x,{key:1})),s.window.width<1280?(e(),d(i,{key:2})):r("",!0)])):r("",!0),this.$store.themeSettingsStore.menuLayout==="horizontal"&&s.window.width>1280?(e(),d(w,{key:2})):r("",!0),t("div",hs,[l(k),l(I),s.window.width>768?(e(),d(D,{key:0})):r("",!0),s.window.width<768?(e(),d(i,{key:1})):r("",!0)])])],2)],2)}const ps=v(is,[["render",ms],["__scopeId","data-v-0d92198e"]]),_s=Z({components:{Navmenu:Y,simplebar:J},data(){return{menuItems:ae,openClass:"w-[248px]",closeClass:"w-[72px] close_sidebar"}},setup(){const s=W(!1);return{enterWidget:b=>{B.fromTo(b,{x:0,opacity:0,scale:.5},{x:0,opacity:1,duration:.3,scale:1})},leaveWidget:b=>{B.fromTo(b,{x:0,opacity:1,scale:1},{x:0,opacity:0,duration:.3,scale:.5})},shallShadowBottom:s}}}),xs={key:0,src:P,alt:""},gs={key:1,src:E,alt:""},fs={key:0,src:F,alt:""},bs={key:1,src:V,alt:""};function ks(s,a,p,b,g,m){const u=n("router-link"),x=n("Navmenu"),i=n("perfect-scrollbar");return e(),o("div",{class:_(this.$store.themeSettingsStore.semidark?"dark":"")},[t("div",{class:_(`sidebar-wrapper bg-white dark:bg-slate-800    ${this.$store.themeSettingsStore.skin==="bordered"?"border-r border-gray-5002 dark:border-slate-700":"shadow-base"}   ${this.$store.themeSettingsStore.sidebarCollasp?this.closeClass:this.openClass}
      ${this.$store.themeSettingsStore.isMouseHovered?"sidebar-hovered":""}
      
      `),onMouseenter:a[2]||(a[2]=f=>this.$store.themeSettingsStore.isMouseHovered=!0),onMouseleave:a[3]||(a[3]=f=>this.$store.themeSettingsStore.isMouseHovered=!1)},[t("div",{class:_(`logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] py-6  sticky top-0   px-4  ${this.$store.themeSettingsStore.sidebarCollasp?this.closeClass:this.openClass} ${this.$store.themeSettingsStore.skin==="bordered"?" border-b border-r border-gray-5002 dark:border-slate-700":" border-none"}
        ${this.$store.themeSettingsStore.isMouseHovered?"logo-hovered":""}
        
        `)},[!this.$store.themeSettingsStore.sidebarCollasp||this.$store.themeSettingsStore.isMouseHovered?(e(),d(u,{key:0,to:{name:"home"}},{default:h(()=>[!this.$store.themeSettingsStore.isDark&&!this.$store.themeSettingsStore.semidark?(e(),o("img",xs)):r("",!0),this.$store.themeSettingsStore.isDark||this.$store.themeSettingsStore.semidark?(e(),o("img",gs)):r("",!0)]),_:1})):r("",!0),this.$store.themeSettingsStore.sidebarCollasp&&!this.$store.themeSettingsStore.isMouseHovered?(e(),d(u,{key:1,to:{name:"home"}},{default:h(()=>[!this.$store.themeSettingsStore.isDark&&!this.$store.themeSettingsStore.semidark?(e(),o("img",fs)):r("",!0),this.$store.themeSettingsStore.isDark||this.$store.themeSettingsStore.semidark?(e(),o("img",bs)):r("",!0)]),_:1})):r("",!0),!this.$store.themeSettingsStore.sidebarCollasp||this.$store.themeSettingsStore.isMouseHovered?(e(),o("span",{key:2,class:"cursor-pointer text-slate-900 dark:text-white text-2xl",onClick:a[0]||(a[0]=f=>this.$store.themeSettingsStore.sidebarCollasp=!this.$store.themeSettingsStore.sidebarCollasp)},[t("div",{class:_(["h-4 w-4 border-[1.5px] border-slate-900 dark:border-slate-700 rounded-full transition-all duration-150",this.$store.themeSettingsStore.sidebarCollasp?"":"ring-2 ring-inset ring-offset-4 ring-black-900 dark:ring-slate-400 bg-slate-900 dark:bg-slate-400 dark:ring-offset-slate-700"])},null,2)])):r("",!0)],2),t("div",{class:_(["h-[60px] absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none",[s.shallShadowBottom?" opacity-100":" opacity-0"]])},null,2),l(i,{class:"sidebar-menu px-4 h-[calc(100%-80px)]",onPsScrollY:a[1]||(a[1]=f=>{s.shallShadowBottom=f.srcElement.scrollTop>0}),ref:"shadowbase"},{default:h(()=>[l(x,{items:s.menuItems},null,8,["items"]),l(L,{onEnter:s.enterWidget,onLeave:s.leaveWidget},null,8,["onEnter","onLeave"])]),_:1},512)],34)],2)}const $s=v(_s,[["render",ks]]),ws={mixins:[G],components:{Header:ps,Footer:K,Sidebar:$s,Settings:Q,Breadcrumbs:A,FooterMenu:R,MobileSidebar:X},methods:{switchHeaderClass(){return this.$store.themeSettingsStore.menuLayout==="horizontal"||this.$store.themeSettingsStore.sidebarHidden?"ltr:ml-0 rtl:mr-0":this.$store.themeSettingsStore.sidebarCollasp?"ltr:ml-[72px] rtl:mr-[72px]":"ltr:ml-[248px] rtl:mr-[248px]"}}},vs={class:"app-wrapper"};function Ss(s,a,p,b,g,m){const u=n("Header"),x=n("Sidebar"),i=n("mobile-sidebar"),f=n("Settings"),c=n("Breadcrumbs"),w=n("router-view"),k=n("FooterMenu"),I=n("Footer");return e(),o("main",vs,[l(u,{class:_(s.window.width>1280?m.switchHeaderClass():"")},null,8,["class"]),this.$store.themeSettingsStore.menuLayout==="vertical"&&this.$store.themeSettingsStore.sidebarHidden===!1&&s.window.width>1280?(e(),d(x,{key:0})):r("",!0),l(L,{name:"mobilemenu"},{default:h(()=>[s.window.width<1280&&this.$store.themeSettingsStore.mobielSidebar?(e(),d(i,{key:0})):r("",!0)]),_:1}),l(L,{name:"overlay-fade"},{default:h(()=>[s.window.width<1280&&this.$store.themeSettingsStore.mobielSidebar?(e(),o("div",{key:0,class:"overlay bg-slate-900 bg-opacity-70 backdrop-filter backdrop-blur-[3px] backdrop-brightness-10 fixed inset-0 z-[999]",onClick:a[0]||(a[0]=D=>this.$store.themeSettingsStore.mobielSidebar=!1)})):r("",!0)]),_:1}),l(f),t("div",{class:_(["content-wrapper transition-all duration-150",s.window.width>1280?m.switchHeaderClass():""])},[t("div",{class:_(["page-content",this.$route.meta.appheight?"h-full":"page-min-height"])},[t("div",{class:_(` transition-all duration-150 ${this.$store.themeSettingsStore.cWidth==="boxed"?"container mx-auto":"container-fluid"}`)},[this.$route.meta.hide?r("",!0):(e(),d(c,{key:0})),l(w,null,{default:h(({Component:D})=>[l(L,{name:"router-animation",mode:"out-in",appear:""},{default:h(()=>[(e(),d(ee(D)))]),_:2},1024)]),_:1})],2)],2)],2),s.window.width<768?(e(),d(k,{key:1})):r("",!0),s.window.width>768?(e(),d(I,{key:2,class:_(s.window.width>1280?m.switchHeaderClass():"")},null,8,["class"])):r("",!0)])}const Ks=v(ws,[["render",Ss]]);export{Ks as default};
