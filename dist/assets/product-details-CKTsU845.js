import{c as ae,_ as re}from"./counter-button-DMBcacvp.js";import{I as g}from"./index-BcFOD9Ey.js";import{B as ne}from"./index-BuuRHWNJ.js";import{C as oe}from"./index-Hsd0Z0_R.js";import{B as D}from"./index-DCMPjbua.js";import{i as ie,$,a as N,S as J}from"./swiper.min-Bxo5mh52.js";import{N as ce}from"./navigation.min-DC2gzMM7.js";import{ak as de,al as M,am as ue,an as X,ao as W,ap as pe,aq as he,ar as xe,as as G,at as me,au as fe,P as be,a4 as ve,av as ge,K as H,r as _e,G as E,aw as Y,ax as ye,ay as ke,ag as we,X as Re,j as l,az as Ce,aA as Se,q,k as Ie,o as S,d as O,e as i,h as I,F as j,m as F,f as e,n as B,J as Oe,t as C,l as Qe,aB as Te,L as Z}from"./index-BLl1OigC.js";import{m as Le,p as Pe,x as je,I as Ae,y as ee}from"./tabs-CkhIUISu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./keyboard-9WePWYgZ.js";import"./use-resolve-button-type-BwPomRAb.js";import"./hidden-BR_kr5_G.js";import"./focus-management-Dc3XsveG.js";import"./micro-task-CxIZtCgj.js";class Ee extends de{constructor(s,t){super(),this.client=s,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),te(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return z(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return z(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(s,t){const n=this.options,v=this.currentQuery;if(this.options=this.client.defaultQueryOptions(s),M(n,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();const m=this.hasListeners();m&&se(this.currentQuery,v,this.options,n)&&this.executeFetch(),this.updateResult(t),m&&(this.currentQuery!==v||this.options.enabled!==n.enabled||this.options.staleTime!==n.staleTime)&&this.updateStaleTimeout();const f=this.computeRefetchInterval();m&&(this.currentQuery!==v||this.options.enabled!==n.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)}getOptimisticResult(s){const t=this.client.getQueryCache().build(this.client,s),n=this.createResult(t,s);return De(this,n,s)&&(this.currentResult=n,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),n}getCurrentResult(){return this.currentResult}trackResult(s){const t={};return Object.keys(s).forEach(n=>{Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(n),s[n])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:s,...t}={}){return this.fetch({...t,meta:{refetchPage:s}})}fetchOptimistic(s){const t=this.client.defaultQueryOptions(s),n=this.client.getQueryCache().build(this.client,t);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,t))}fetch(s){var t;return this.executeFetch({...s,cancelRefetch:(t=s.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(s){this.updateQuery();let t=this.currentQuery.fetch(this.options,s);return s!=null&&s.throwOnError||(t=t.catch(ue)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),X||this.currentResult.isStale||!W(this.options.staleTime))return;const t=pe(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var s;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(s=this.options.refetchInterval)!=null?s:!1}updateRefetchInterval(s){this.clearRefetchInterval(),this.currentRefetchInterval=s,!(X||this.options.enabled===!1||!W(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||he.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(s,t){const n=this.currentQuery,v=this.options,m=this.currentResult,f=this.currentResultState,d=this.currentResultOptions,c=s!==n,r=c?s.state:this.currentQueryInitialState,h=c?this.currentResult:this.previousQueryResult,{state:u}=s;let{dataUpdatedAt:y,error:w,errorUpdatedAt:b,fetchStatus:o,status:x}=u,k=!1,R=!1,_;if(t._optimisticResults){const p=this.hasListeners(),Q=!p&&te(s,t),A=p&&se(s,n,t,v);(Q||A)&&(o=xe(s.options.networkMode)?"fetching":"paused",y||(x="loading")),t._optimisticResults==="isRestoring"&&(o="idle")}if(t.keepPreviousData&&!u.dataUpdatedAt&&h!=null&&h.isSuccess&&x!=="error")_=h.data,y=h.dataUpdatedAt,x=h.status,k=!0;else if(t.select&&typeof u.data<"u")if(m&&u.data===(f==null?void 0:f.data)&&t.select===this.selectFn)_=this.selectResult;else try{this.selectFn=t.select,_=t.select(u.data),_=G(m==null?void 0:m.data,_,t),this.selectResult=_,this.selectError=null}catch(p){this.selectError=p}else _=u.data;if(typeof t.placeholderData<"u"&&typeof _>"u"&&x==="loading"){let p;if(m!=null&&m.isPlaceholderData&&t.placeholderData===(d==null?void 0:d.placeholderData))p=m.data;else if(p=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof p<"u")try{p=t.select(p),this.selectError=null}catch(Q){this.selectError=Q}typeof p<"u"&&(x="success",_=G(m==null?void 0:m.data,p,t),R=!0)}this.selectError&&(w=this.selectError,_=this.selectResult,b=Date.now(),x="error");const T=o==="fetching",L=x==="loading",P=x==="error";return{status:x,fetchStatus:o,isLoading:L,isSuccess:x==="success",isError:P,isInitialLoading:L&&T,data:_,dataUpdatedAt:y,error:w,errorUpdatedAt:b,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>r.dataUpdateCount||u.errorUpdateCount>r.errorUpdateCount,isFetching:T,isRefetching:T&&!L,isLoadingError:P&&u.dataUpdatedAt===0,isPaused:o==="paused",isPlaceholderData:R,isPreviousData:k,isRefetchError:P&&u.dataUpdatedAt!==0,isStale:K(s,t),refetch:this.refetch,remove:this.remove}}updateResult(s){const t=this.currentResult,n=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,M(n,t))return;this.currentResult=n;const v={cache:!0},m=()=>{if(!t)return!0;const{notifyOnChangeProps:f}=this.options,d=typeof f=="function"?f():f;if(d==="all"||!d&&!this.trackedProps.size)return!0;const c=new Set(d??this.trackedProps);return this.options.useErrorBoundary&&c.add("error"),Object.keys(this.currentResult).some(r=>{const h=r;return this.currentResult[h]!==t[h]&&c.has(h)})};(s==null?void 0:s.listeners)!==!1&&m()&&(v.listeners=!0),this.notify({...v,...s})}updateQuery(){const s=this.client.getQueryCache().build(this.client,this.options);if(s===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=s,this.currentQueryInitialState=s.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),s.addObserver(this))}onQueryUpdate(s){const t={};s.type==="success"?t.onSuccess=!s.manual:s.type==="error"&&!me(s.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(s){fe.batch(()=>{if(s.onSuccess){var t,n,v,m;(t=(n=this.options).onSuccess)==null||t.call(n,this.currentResult.data),(v=(m=this.options).onSettled)==null||v.call(m,this.currentResult.data,null)}else if(s.onError){var f,d,c,r;(f=(d=this.options).onError)==null||f.call(d,this.currentResult.error),(c=(r=this.options).onSettled)==null||c.call(r,void 0,this.currentResult.error)}s.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)}),s.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Fe(a,s){return s.enabled!==!1&&!a.state.dataUpdatedAt&&!(a.state.status==="error"&&s.retryOnMount===!1)}function te(a,s){return Fe(a,s)||a.state.dataUpdatedAt>0&&z(a,s,s.refetchOnMount)}function z(a,s,t){if(s.enabled!==!1){const n=typeof t=="function"?t(a):t;return n==="always"||n!==!1&&K(a,s)}return!1}function se(a,s,t,n){return t.enabled!==!1&&(a!==s||n.enabled===!1)&&(!t.suspense||a.state.status!=="error")&&K(a,t)}function K(a,s){return a.isStaleByTime(s.staleTime)}function De(a,s,t){return t.keepPreviousData?!1:t.placeholderData!==void 0?s.isPlaceholderData:!M(a.getCurrentResult(),s)}function Be(a=""){const s=ge(a),t=be(s,null);if(!t){var n;throw((n=ve())==null?void 0:n.proxy)?new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library."):new Error("vue-query hooks can only be used inside setup() function.")}return t}function qe(a,s,t={},n={}){var v;const m=H(()=>Ue(s,t,n)),f=(v=m.value.queryClient)!=null?v:Be(m.value.queryClientKey),d=H(()=>{const o=f.defaultQueryOptions(m.value);return o._optimisticResults=f.isRestoring.value?"isRestoring":"optimistic",o}),c=new a(f,d.value),r=_e(c.getCurrentResult());let h=()=>{};E(f.isRestoring,o=>{o||(h(),h=c.subscribe(x=>{Y(r,x)}))},{immediate:!0});const u=()=>{c.setOptions(d.value),Y(r,c.getCurrentResult())};E(d,u),ye(()=>{h()});const y=(...o)=>(u(),r.refetch(...o)),w=()=>new Promise((o,x)=>{let k=()=>{};const R=()=>{if(d.value.enabled!==!1){const _=c.getOptimisticResult(d.value);_.isStale?(k(),c.fetchOptimistic(d.value).then(o,x)):(k(),o(_))}};R(),k=E(d,R)});E(()=>r.error,o=>{if(r.isError&&!r.isFetching&&ke(d.value.useErrorBoundary,[o,c.getCurrentQuery()]))throw o});const b=we(Re(r));for(const o in r)typeof r[o]=="function"&&(b[o]=r[o]);return b.suspense=w,b.refetch=y,b}function Ue(a,s={},t={}){const n=l(a),v=l(s),m=l(t);let f=n;Ce(n)?typeof v=="function"?f={...m,queryKey:n,queryFn:v}:f={...v,queryKey:n}:f=n;const d=Se(f);return typeof d.enabled=="function"&&(d.enabled=d.enabled()),d}function Me(a,s,t){return qe(Ee,a,s,t)}const V="/assets/classical-black-tshirt-C3RohLUi.png",ze="/assets/black-t-shirt-DKeKAF0_.png",Ve="/assets/check-shirt-8HvCuqpz.png",Ke="/assets/gray-jumper-BQKJe_Po.png",$e="/assets/gray-t-shirt-1K8AkAgb.png",Ne="/assets/pink-blazer-hi3DRK7S.png",Je="/assets/red-t-shirt-BuWvIA_V.png",Xe="/assets/yellow-frok-BF2LE4MN.png",We="/assets/yellow-jumper-Nr294YCt.png";function Ge({swiper:a,extendParams:s,on:t}){s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let n=!1,v=!1;a.thumbs={swiper:null};function m(){const c=a.thumbs.swiper;if(!c||c.destroyed)return;const r=c.clickedIndex,h=c.clickedSlide;if(h&&$(h).hasClass(a.params.thumbs.slideThumbActiveClass)||typeof r>"u"||r===null)return;let u;if(c.params.loop?u=parseInt($(c.clickedSlide).attr("data-swiper-slide-index"),10):u=r,a.params.loop){let y=a.activeIndex;a.slides.eq(y).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,y=a.activeIndex);const w=a.slides.eq(y).prevAll(`[data-swiper-slide-index="${u}"]`).eq(0).index(),b=a.slides.eq(y).nextAll(`[data-swiper-slide-index="${u}"]`).eq(0).index();typeof w>"u"?u=b:typeof b>"u"?u=w:b-y<y-w?u=b:u=w}a.slideTo(u)}function f(){const{thumbs:c}=a.params;if(n)return!1;n=!0;const r=a.constructor;if(c.swiper instanceof r)a.thumbs.swiper=c.swiper,Object.assign(a.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(a.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(ie(c.swiper)){const h=Object.assign({},c.swiper);Object.assign(h,{watchSlidesProgress:!0,slideToClickedSlide:!1}),a.thumbs.swiper=new r(h),v=!0}return a.thumbs.swiper.$el.addClass(a.params.thumbs.thumbsContainerClass),a.thumbs.swiper.on("tap",m),!0}function d(c){const r=a.thumbs.swiper;if(!r||r.destroyed)return;const h=r.params.slidesPerView==="auto"?r.slidesPerViewDynamic():r.params.slidesPerView;let u=1;const y=a.params.thumbs.slideThumbActiveClass;if(a.params.slidesPerView>1&&!a.params.centeredSlides&&(u=a.params.slidesPerView),a.params.thumbs.multipleActiveThumbs||(u=1),u=Math.floor(u),r.slides.removeClass(y),r.params.loop||r.params.virtual&&r.params.virtual.enabled)for(let o=0;o<u;o+=1)r.$wrapperEl.children(`[data-swiper-slide-index="${a.realIndex+o}"]`).addClass(y);else for(let o=0;o<u;o+=1)r.slides.eq(a.realIndex+o).addClass(y);const w=a.params.thumbs.autoScrollOffset,b=w&&!r.params.loop;if(a.realIndex!==r.realIndex||b){let o=r.activeIndex,x,k;if(r.params.loop){r.slides.eq(o).hasClass(r.params.slideDuplicateClass)&&(r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft,o=r.activeIndex);const R=r.slides.eq(o).prevAll(`[data-swiper-slide-index="${a.realIndex}"]`).eq(0).index(),_=r.slides.eq(o).nextAll(`[data-swiper-slide-index="${a.realIndex}"]`).eq(0).index();typeof R>"u"?x=_:typeof _>"u"?x=R:_-o===o-R?x=r.params.slidesPerGroup>1?_:o:_-o<o-R?x=_:x=R,k=a.activeIndex>a.previousIndex?"next":"prev"}else x=a.realIndex,k=x>a.previousIndex?"next":"prev";b&&(x+=k==="next"?w:-1*w),r.visibleSlidesIndexes&&r.visibleSlidesIndexes.indexOf(x)<0&&(r.params.centeredSlides?x>o?x=x-Math.floor(h/2)+1:x=x+Math.floor(h/2)-1:x>o&&r.params.slidesPerGroup,r.slideTo(x,c?0:void 0))}}t("beforeInit",()=>{const{thumbs:c}=a.params;!c||!c.swiper||(f(),d(!0))}),t("slideChange update resize observerUpdate",()=>{d()}),t("setTransition",(c,r)=>{const h=a.thumbs.swiper;!h||h.destroyed||h.setTransition(r)}),t("beforeDestroy",()=>{const c=a.thumbs.swiper;!c||c.destroyed||v&&c.destroy()}),Object.assign(a.thumbs,{init:f,update:d})}const He="/assets/1-0o4XAI-R.png",Ye="/assets/2-DuqO0_hs.png",le="/assets/3-hBYh5dkT.png",Ze="/assets/gmail-CVw9Saet.svg",et="/assets/facebook-Cahc3jJh.svg",tt="/assets/twitter-DsZUSu5u.svg",st="/assets/insta-DZ2btu8y.svg",lt="/assets/linkedin-11JdL4wH.svg",at=["src"],rt=["src"],nt={__name:"thumb-slider",props:{product:Object,id:String},setup(a){const s=[V,ze,Ve,$e,Ke,Ne,Je,Xe,We],t=q(null),n=d=>{t.value=d},v=Ie(),m=q(!1);E(v,d=>{m.value=d.direction});const f=[ce,Ge];return(d,c)=>(S(),O(j,null,[i(l(J),{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},loop:!0,spaceBetween:10,navigation:!1,thumbs:{swiper:t.value},modules:f,class:"mySwiper2"},{default:I(()=>[(S(),O(j,null,F(s,(r,h)=>i(l(N),{key:h,class:"h-[409px] w-[396px] py-11 px-14 bg-secondary-200 rounded-md"},{default:I(()=>[e("img",{class:"h-full w-full object-contain transition-all duration-300 group-hover:scale-105",src:r,alt:"."},null,8,at)]),_:2},1024)),64))]),_:1},8,["thumbs"]),e("div",{class:B(["flex mt-6 space-x-3",m.value?"space-x-reverse":""])},[i(l(J),{onSwiper:n,loop:!0,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:f,class:"mySwiper"},{default:I(()=>[(S(),O(j,null,F(s,(r,h)=>i(l(N),{key:h,class:"h-[90px] w-[90px] py-[14px] px-[17px] bg-secondary-200 rounded"},{default:I(()=>[e("img",{class:"h-full w-full object-contain",src:r,alt:"."},null,8,rt)]),_:2},1024)),64))]),_:1})],2)],64))}},ot="/api",it=Oe.create({baseURL:ot,timeout:1e3}),ct=async a=>(await it.get(`/products/${a}`)).data,dt={key:0},ut={key:1,class:"w-full bg-white dark:bg-slate-800 p-6 rounded-lg"},pt={class:"pb-5"},ht={class:"grid grid-cols-12 md:space-x-6 md:space-y-0 space-y-4 sm:space-y-4 rtl:space-x-reverse"},xt={class:"col-span-12 md:col-span-5 lg:col-span-4 space-y-4"},mt={class:"col-span-12 md:col-span-7 lg:col-span-8 space-y-2"},ft={class:"space-y-2"},bt={class:"text-slate-900 dark:text-slate-300 text-xl lg:text-2xl font-medium"},vt={class:"flex items-center text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base space-x-1.5 rtl:space-x-reverse"},gt=e("span",{class:"ltr:pl-2 rtl:pr-2 text-slate-500 dark:text-slate-400"}," (789 reviews) ",-1),_t={class:"flex items-center space-x-2 rtl:space-x-reverse"},yt=e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Brand: ",-1),kt={class:"font-medium text-sm lg:text-base text-slate-900 dark:text-slate-300 capitalize"},wt=e("div",{class:"flex items-center space-x-2 rtl:space-x-reverse"},[e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Available: "),e("p",{class:"font-medium text-sm lg:text-base text-slate-900 dark:text-slate-300"}," In Stock ")],-1),Rt={class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"},Ct={class:"flex flex-col space-y-4 py-4 !mt-0"},St={class:"flex flex-col space-y-3"},It={class:"flex items-center space-x-2 rtl:space-x-reverse"},Ot=e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Color: ",-1),Qt={class:"font-medium text-sm lg:text-base text-slate-900 dark:text-slate-300 capitalize"},Tt={class:"flex space-x-4 rtl:space-x-reverse h-6"},Lt=["value","onChange"],Pt={class:"flex flex-col space-y-3"},jt={class:"flex items-center space-x-2 rtl:space-x-reverse"},At=e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Size: ",-1),Et={class:"font-medium text-base text-slate-900 dark:text-slate-300"},Ft={class:"flex items-center space-x-4 rtl:space-x-reverse mb-4 h-6"},Dt=["value","onChange"],Bt=e("div",{class:"w-full border-t border-slate-300 dark:border-slate-600"},null,-1),qt={class:"overflow-x-auto"},Ut={class:"inline-block max-w-full align-middle"},Mt={class:"overflow-hidden"},zt={class:"min-w-full"},Vt={class:"bg-white dark:bg-slate-800"},Kt=e("td",{class:"table-td py-2 pl-0 rtl:pr-0 font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Price: ",-1),$t={class:"table-td py-2 px-8 space-x-3 rtl:space-x-reverse"},Nt={class:"text-slate-900 dark:text-slate-300 font-semibold text-base lg:text-xl"},Jt={class:"text-slate-500 dark:text-slate-400 font-semibold text-base lg:text-xl"},Xt=e("td",{class:"table-td py-2 pl-0 rtl:pr-0 font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Quantity: ",-1),Wt={class:"table-td py-2 px-8"},Gt={key:1},Ht={class:"flex space-x-4 rtl:space-x-reverse items-center cursor-not-allowed"},Yt={class:"flex-1 h-8 flex border border-1 border-slate-400 delay-150 ease-in-out dark:border-slate-600 divide-x-[1px] rtl:divide-x-reverse text-sm font-normal divide-slate-500 dark:divide-slate-600 rounded cursor-not-allowed"},Zt={type:"button",class:"flex-none px-2 dark:text-white text-slate-900 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 cursor-not-allowed opacity-50"},es=e("div",{class:"flex-1 w-[62px] text-center text-slate-500 dark:text-slate-300 flex items-center justify-center cursor-not-allowed"}," 0 ",-1),ts={type:"button",class:"flex-none px-2 cursor-not-allowed opacity-50 text-slate-900 hover:bg-slate-900 hover:text-white dark:text-white dark:hover:bg-slate-700 rtl:dark:hover:rounded-l ltr:dark:hover:rounded-r"},ss=e("td",{class:"table-td py-2 pl-0 rtl:pr-0 font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Total Price: ",-1),ls={key:0,class:"table-td py-2 px-8 text-slate-900 dark:text-slate-300 font-semibold text-base lg:text-xl"},as={key:1,class:"table-td py-2 px-8 text-slate-900 dark:text-slate-300 font-semibold text-base lg:text-xl"},rs={class:"flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse pb-5"},ns={class:"flex space-x-3 rtl:space-x-reverse"},os={class:"flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3 rtl:space-x-reverse"},is=e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Share to: ",-1),cs={class:"flex items-center space-x-3 rtl:space-x-reverse"},ds={type:"button",class:"border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"},us=["src"],ps={type:"button",class:"border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"},hs=["src"],xs={type:"button",class:"border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"},ms=["src"],fs={type:"button",class:"border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"},bs=["src"],vs={type:"button",class:"border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"},gs=["src"],_s={class:"space-y-5"},ys={class:"border border-1 dark:border-slate-700 rounded"},ks=e("div",{class:"text-slate-600 dark:text-slate-400 text-sm lg:text-base font-normal"},[e("p",null," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. "),e("ul",{class:"space-y-3 p-6 sm:ml-14 lg:ml-28 ml-0 rounded-md bg-slate-white dark:bg-slate-800"},[e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[10px] w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Lorem ipsum dolor sit amet.")])]),e("p",{class:"text-slate-600 dark:text-slate-400 text-sm lg:text-base font-normal"}," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. ")],-1),ws=e("div",{class:"text-slate-600 dark:text-slate-400 text-sm font-normal"},[e("div",{class:"flex justify-between items-start pb-4 overflow-auto space-x-3 rtl:space-x-reverse"},[e("ul",{class:"space-y-3 rounded-md bg-slate-white dark:bg-slate-800 min-w-[200px]"},[e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null," Brand : Easy")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null," Material : Cotton")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null," Pattern : Solid Color")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Collar : Square Neck")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Color : As given picture")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Sleeve Length : Long Sleeve")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Plate Type : Slim")])]),e("ul",{class:"space-y-3 rounded-md bg-slate-white dark:bg-slate-800 min-w-[200px]"},[e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,"Sales Channel Type : E-commerce Only Sells Online")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null," Material Composition : 100% Cotton")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null," Size : M,L,XL")]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,' M- long: 29", body: 40"')]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,' L- long: 30 ", body: 42"')]),e("li",{class:"text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"},[e("span",{class:"h-[5px] md:h-[10px] w-[5px] md:w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"}),e("span",null,' XL- long: 31", body: 44"')])])]),e("p",{class:"text-slate-600 dark:text-slate-400 text-sm lg:text-base font-normal"}," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. ")],-1),Rs={class:"border border-1 dark:border-slate-700 rounded p-6"},Cs=e("h6",{class:"text-slate-900 dark:text-slate-300 pb-6 text-lg lg:text-xl"}," Reviews & Ratings ",-1),Ss={class:"space-y-12"},Is={class:"bg-secondary-100 dark:bg-slate-700 p-6 rounded grid grid-cols-12"},Os={class:"col-span-12 items-center md:col-span-6 flex space-x-3 justify-center md:justify-start rtl:space-x-reverse order-2 md:order-1 mt-3 md:mt-0"},Qs=e("div",{class:"font-medium items-center flex"},[e("p",{class:"text-slate-900 dark:text-slate-300 text-base lg:text-lg"}," 4.2 "),e("p",{class:"text-slate-500 dark:text-slate-400 text-sm lg:text-base"}," /5 ")],-1),Ts={class:"flex flex-col sm:flex-row sm:items-center md:justify-start text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base"},Ls={class:"flex items-center space-x-1.5"},Ps=e("div",{class:"text-slate-500 dark:text-slate-400"}," (789 reviews) ",-1),js=e("div",{class:"col-span-12 md:col-span-6 flex justify-center md:justify-end items-center order-1 md:order-2"},[e("button",{type:"button",class:"bg-yellow-500 text-white rounded px-6 py-3 text-sm lg:text-base"}," Rate this product ")],-1),As={class:"flex space-x-3 rtl:space-x-reverse"},Es={class:"h-14 w-14 rounded-full object-cover bg-white ring-1 overflow-hidden flex-none"},Fs=["src"],Ds=e("p",{class:"text-slate-900 dark:text-slate-300 font-medium text-sm lg:text-base pb-1"}," Devied Beakhum ",-1),Bs=e("p",{class:"text-slate-500 dark:text-slate-400 font-normal text-xs pb-1"}," 08-03-2023 ",-1),qs={class:"flex items-center text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base space-x-1.5 rtl:space-x-reverse pb-3"},Us=e("p",{class:"pb-4 text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lori ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. ",-1),Ms=e("div",{class:"flex space-x-2 rtl:space-x-reverse pb-3"},[e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Info: "),e("p",{class:"font-medium text-sm lg:text-base text-[#10B26C]"}," Verified Purchase ")],-1),zs={class:"grid grid-cols-12"},Vs={class:"col-span-12 flex justify-end space-x-4 rtl:space-x-reverse dark:text-slate-400"},Ks={class:"flex items-center space-x-2 rtl:space-x-reverse"},$s={class:"cursor-pointer"},Ns=e("span",null,"02",-1),Js={class:"flex items-center space-x-2 rtl:space-x-reverse"},Xs={class:"cursor-pointer"},Ws=e("span",null,"00",-1),Gs={class:"flex space-x-3 rtl:space-x-reverse"},Hs={class:"h-14 w-14 rounded-full object-cover bg-white ring-1 overflow-hidden flex-none"},Ys=["src"],Zs=e("p",{class:"text-slate-900 dark:text-slate-300 font-medium text-sm lg:text-base pb-1"}," Devied Beakhum ",-1),el=e("p",{class:"text-slate-500 dark:text-slate-400 font-normal text-xs pb-1"}," 08-03-2023 ",-1),tl={class:"flex items-center text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base space-x-1.5 rtl:space-x-reverse pb-3"},sl=e("p",{class:"pb-4 text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lori ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. ",-1),ll=e("div",{class:"flex space-x-2 rtl:space-x-reverse pb-3"},[e("p",{class:"font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"}," Info: "),e("p",{class:"font-medium text-sm lg:text-base text-[#10B26C]"}," Verified Purchase ")],-1),al={class:"grid grid-cols-12"},rl={class:"col-span-12 mb-3"},nl={class:"flex space-x-2 rtl:space-x-reverse mb-9"},ol={class:"h-[90px] w-[90px] rounded bg-slate-100 p-1 overflow-hidden"},il=["src"],cl={class:"h-[90px] w-[90px] rounded bg-slate-100 overflow-hidden p-1"},dl=["src"],ul={class:"h-[90px] w-[90px] rounded bg-slate-100 overflow-hidden p-1"},pl=["src"],hl={class:"max-h-[400px] max-w-[346px] rounded bg-slate-100 overflow-hidden p-1"},xl=["src"],ml={class:"col-span-12 flex justify-end dark:text-slate-400 space-x-4 rtl:space-x-reverse"},fl={class:"flex items-center space-x-2 rtl:space-x-reverse"},bl={class:"cursor-pointer"},vl=e("span",null,"02",-1),gl={class:"flex items-center space-x-2 rtl:space-x-reverse"},_l={class:"cursor-pointer"},yl=e("span",null,"00",-1),Dl={__name:"product-details",props:{product:Object,id:String},setup(a){const s=q("black"),t=q("S"),n=[{code:"black"},{code:"pink"},{code:"orange"},{code:"red"},{code:"yellow"}],v=[{code:"S"},{code:"M"},{code:"L"},{code:"XL"},{code:"XXL"}],m=k=>{t.value=k},f=k=>{s.value=k},d=ae(),r=Te().params.id,h=[{title:"Description"},{title:"Additional Info"}],{isLoading:u,isError:y,isFetching:w,data:b,error:o,refetch:x}=Me({queryKey:["product"],queryFn:()=>ct(r)});return(k,R)=>{var _,T,L,P,U;return l(u)?(S(),O("span",dt," loading...")):(S(),O("div",ut,[e("div",pt,[e("div",ht,[e("div",xt,[i(nt,{product:l(b).product},null,8,["product"])]),e("div",mt,[e("div",ft,[e("h1",bt,C(l(b).product.name),1),e("p",vt,[i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-slate-300/80"}),gt]),e("div",_t,[yt,e("p",kt,C(l(b).product.brand),1)]),wt,e("p",Rt,C(l(b).product.desc),1)]),e("div",Ct,[e("div",St,[e("div",It,[Ot,e("p",Qt,C(s.value),1)]),e("div",Tt,[(S(),O(j,null,F(n,(p,Q)=>e("label",{key:Q},[e("input",{type:"radio",name:"color",value:p.code,onChange:A=>f(p.code),class:"hidden"},null,40,Lt),e("div",{style:Z({backgroundColor:p.code}),class:B(["h-7 w-7",{"ring-slate-900 dark:ring-slate-50":p.code===s.value,"ring-slate-300 dark:ring-slate-700":p.code!==s.value,"ring-1":!0,"ring-offset-2":!0,"dark:ring-offset-slate-800 ring-offset-slate-50":!0,"cursor-pointer":!0,"rounded-sm":!0}])},null,6)])),64))])]),e("div",Pt,[e("div",jt,[At,e("p",Et,C(t.value),1)]),e("div",Ft,[(S(),O(j,null,F(v,(p,Q)=>e("label",{key:Q},[e("input",{type:"radio",name:"size",value:p.code,onChange:A=>m(p.code),class:"hidden h-7 w-7"},null,40,Dt),e("div",{style:Z({backgroundColor:p.code}),class:B(["h-7 w-7",{"ring-slate-900 dark:ring-slate-50":p.code===t.value,"ring-slate-300 dark:ring-slate-700":p.code!==t.value,"ring-1":!0,"dark:text-slate-300 text-slate-900":!0,"dark:ring-slate-900":p.code===t.value,"ring-offset-2":!0,flex:!0,"justify-center":!0,"items-center":!0,"ring-offset-white dark:ring-offset-slate-900":!0,"cursor-pointer":!0,"dark:ring-offset-transparent":!0,"rounded-sm":!0}])},C(p.code),7)])),64))])])]),Bt,e("div",qt,[e("div",Ut,[e("div",Mt,[e("table",zt,[e("tbody",Vt,[e("tr",null,[Kt,e("td",$t,[e("span",Nt," $"+C(l(b).product.price),1),e("del",Jt,C(l(b).product.oldPrice),1),i(l(ne),{class:"font-normal text-[10px] bg-danger-600 text-white"},{default:I(()=>[e("span",null,C(l(b).product.percent),1)]),_:1})])]),e("tr",null,[Xt,e("td",Wt,[l(d).getItems.find(p=>p.id==l(r))?(S(),Qe(re,{key:0,product:(_=l(b))==null?void 0:_.product},null,8,["product"])):(S(),O("span",Gt,[e("div",Ht,[e("div",Yt,[e("button",Zt,[i(l(g),{icon:"eva:minus-fill"})]),es,e("button",ts,[i(l(g),{icon:"eva:plus-fill"})])])])]))])]),e("tr",null,[ss,l(d).getItems.find(p=>p.id===l(r))?(S(),O("td",ls," $"+C(((L=(T=l(b))==null?void 0:T.product)==null?void 0:L.price)*l(d).getItems.find(p=>p.id===l(r)).quantity),1)):(S(),O("td",as," $"+C((U=(P=l(b))==null?void 0:P.product)==null?void 0:U.price),1))])])])])])]),e("div",rs,[i(l(D),{onClick:R[0]||(R[0]=p=>l(d).addToCart(l(b).product)),disabled:l(d).getItems.find(p=>p.id===l(r)),text:"Add to Cart",icon:"heroicons:shopping-bag",btnClass:"btn-outline-dark w-[180px] btn-sm font-medium hover:bg-slate-900 dark:text-white hover:text-white dark:hover:text-white dark:hover:bg-slate-700 flex items-center  disabled:cursor-not-allowed disabled:opacity-50",iconClass:" text-sm leading-none"},null,8,["disabled"]),i(l(D),{text:"Buy Now",btnClass:"btn-outline-dark w-[180px] btn-sm bg-slate-900 dark:bg-slate-800 font-medium hover:bg-white text-white hover:text-slate-900 dark:hover:text-white dark:hover:!bg-slate-700 flex items-center",iconClass:" text-sm leading-none"}),e("div",ns,[i(l(D),{icon:"octicon:heart-16",btnClass:"btn-outline-secondary w-[40px] border dark:border-slate-600 dark:hover:border-slate-600 btn-sm font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white dark:hover:bg-slate-700 flex items-center",iconClass:" text-sm leading-none"}),i(l(D),{icon:"eva:repeat-fill",btnClass:"btn-outline-secondary w-[40px] border dark:border-slate-600 dark:hover:border-slate-600 btn-sm font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white dark:hover:bg-slate-700 flex items-center",iconClass:" text-sm leading-none"})])]),e("div",os,[is,e("div",cs,[e("button",ds,[e("img",{class:"w-full h-full",src:l(Ze)},null,8,us)]),e("button",ps,[e("img",{class:"w-full h-full",src:l(et)},null,8,hs)]),e("button",xs,[e("img",{class:"w-full h-full",src:l(tt)},null,8,ms)]),e("button",fs,[e("img",{class:"w-full h-full",src:l(st)},null,8,bs)]),e("button",vs,[e("img",{class:"w-full h-full",src:l(lt)},null,8,gs)])])])])])]),e("div",_s,[e("div",ys,[i(l(oe),null,{default:I(()=>[i(l(Le),null,{default:I(()=>[i(l(Pe),{class:"lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse"},{default:I(()=>[(S(),O(j,null,F(h,(p,Q)=>i(l(je),{as:"template",key:Q},{default:I(({selected:A})=>[e("button",{class:B([[A?"text-slate-900 dark:text-slate-300 before:w-full":"text-slate-500 before:w-0 dark:text-slate-500"],"text-lg lg:text-xl font-medium mb-7 capitalize bg-white dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-slate-900 dark:before:bg-slate-300 before:-translate-x-1/2"])},C(p.title),3)]),_:2},1024)),64))]),_:1}),i(l(Ae),null,{default:I(()=>[i(l(ee),null,{default:I(()=>[ks]),_:1}),i(l(ee),null,{default:I(()=>[ws]),_:1})]),_:1})]),_:1})]),_:1})]),e("div",Rs,[Cs,e("div",Ss,[e("div",Is,[e("div",Os,[Qs,e("div",Ts,[e("div",Ls,[i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-slate-300/80"})]),Ps])]),js]),e("div",As,[e("div",Es,[e("img",{class:"h-full w-full object-contain",src:l(V)},null,8,Fs)]),e("div",null,[e("div",null,[Ds,Bs,e("p",qs,[i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"})]),Us,Ms]),e("div",zs,[e("div",Vs,[e("p",Ks,[e("span",$s,[i(l(g),{icon:"heroicons:hand-thumb-up"})]),Ns]),e("p",Js,[e("span",Xs,[i(l(g),{icon:"carbon:reply"})]),Ws])])])])]),e("div",Gs,[e("div",Hs,[e("img",{class:"h-full w-full object-contain",src:l(V)},null,8,Ys)]),e("div",null,[e("div",null,[Zs,el,e("p",tl,[i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"}),i(l(g),{icon:"ph:star-fill",class:"text-yellow-400"})]),sl,ll]),e("div",al,[e("div",rl,[e("div",nl,[e("div",ol,[e("img",{class:"h-full w-full object-contain",src:l(le)},null,8,il)]),e("div",cl,[e("img",{class:"h-full w-full object-contain",src:l(He)},null,8,dl)]),e("div",ul,[e("img",{class:"h-full w-full object-contain",src:l(Ye)},null,8,pl)])]),e("div",hl,[e("img",{class:"h-full w-full object-contain",src:l(le)},null,8,xl)])]),e("div",ml,[e("p",fl,[e("span",bl,[i(l(g),{icon:"heroicons:hand-thumb-up"})]),vl]),e("p",gl,[e("span",_l,[i(l(g),{icon:"carbon:reply"})]),yl])])])])])])])])]))}}};export{Dl as default};
