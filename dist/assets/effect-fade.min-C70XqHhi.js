import{$ as B,g as q,n as G}from"./swiper.min-Bxo5mh52.js";import{c as j}from"./navigation.min-DC2gzMM7.js";import{e as U,a as V,b as X}from"./effect-virtual-transition-end-DQxSYi8n.js";function F(a=""){return`.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K({swiper:a,extendParams:P,on:f,emit:m}){const d="swiper-pagination";P({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),a.pagination={el:null,$el:null,bullets:[]};let b,y=0;function $(){return!a.params.pagination.el||!a.pagination.el||!a.pagination.$el||a.pagination.$el.length===0}function h(t,n){const{bulletActiveClass:r}=a.params.pagination;t[n]().addClass(`${r}-${n}`)[n]().addClass(`${r}-${n}-${n}`)}function g(){const t=a.rtl,n=a.params.pagination;if($())return;const r=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,c=a.pagination.$el;let u;const T=a.params.loop?Math.ceil((r-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(u=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup),u>r-1-a.loopedSlides*2&&(u-=r-a.loopedSlides*2),u>T-1&&(u-=T),u<0&&a.params.paginationType!=="bullets"&&(u=T+u)):typeof a.snapIndex<"u"?u=a.snapIndex:u=a.activeIndex||0,n.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const C=a.pagination.bullets;let D,M,O;if(n.dynamicBullets&&(b=C.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),c.css(a.isHorizontal()?"width":"height",`${b*(n.dynamicMainBullets+4)}px`),n.dynamicMainBullets>1&&a.previousIndex!==void 0&&(y+=u-(a.previousIndex-a.loopedSlides||0),y>n.dynamicMainBullets-1?y=n.dynamicMainBullets-1:y<0&&(y=0)),D=Math.max(u-y,0),M=D+(Math.min(C.length,n.dynamicMainBullets)-1),O=(M+D)/2),C.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(L=>`${n.bulletActiveClass}${L}`).join(" ")),c.length>1)C.each(L=>{const z=B(L),s=z.index();s===u&&z.addClass(n.bulletActiveClass),n.dynamicBullets&&(s>=D&&s<=M&&z.addClass(`${n.bulletActiveClass}-main`),s===D&&h(z,"prev"),s===M&&h(z,"next"))});else{const L=C.eq(u),z=L.index();if(L.addClass(n.bulletActiveClass),n.dynamicBullets){const s=C.eq(D),l=C.eq(M);for(let e=D;e<=M;e+=1)C.eq(e).addClass(`${n.bulletActiveClass}-main`);if(a.params.loop)if(z>=C.length){for(let e=n.dynamicMainBullets;e>=0;e-=1)C.eq(C.length-e).addClass(`${n.bulletActiveClass}-main`);C.eq(C.length-n.dynamicMainBullets-1).addClass(`${n.bulletActiveClass}-prev`)}else h(s,"prev"),h(l,"next");else h(s,"prev"),h(l,"next")}}if(n.dynamicBullets){const L=Math.min(C.length,n.dynamicMainBullets+4),z=(b*L-b)/2-O*b,s=t?"right":"left";C.css(a.isHorizontal()?s:"top",`${z}px`)}}if(n.type==="fraction"&&(c.find(F(n.currentClass)).text(n.formatFractionCurrent(u+1)),c.find(F(n.totalClass)).text(n.formatFractionTotal(T))),n.type==="progressbar"){let C;n.progressbarOpposite?C=a.isHorizontal()?"vertical":"horizontal":C=a.isHorizontal()?"horizontal":"vertical";const D=(u+1)/T;let M=1,O=1;C==="horizontal"?M=D:O=D,c.find(F(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${M}) scaleY(${O})`).transition(a.params.speed)}n.type==="custom"&&n.renderCustom?(c.html(n.renderCustom(a,u+1,T)),m("paginationRender",c[0])):m("paginationUpdate",c[0]),a.params.watchOverflow&&a.enabled&&c[a.isLocked?"addClass":"removeClass"](n.lockClass)}function v(){const t=a.params.pagination;if($())return;const n=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,r=a.pagination.$el;let c="";if(t.type==="bullets"){let u=a.params.loop?Math.ceil((n-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&!a.params.loop&&u>n&&(u=n);for(let T=0;T<u;T+=1)t.renderBullet?c+=t.renderBullet.call(a,T,t.bulletClass):c+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;r.html(c),a.pagination.bullets=r.find(F(t.bulletClass))}t.type==="fraction"&&(t.renderFraction?c=t.renderFraction.call(a,t.currentClass,t.totalClass):c=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,r.html(c)),t.type==="progressbar"&&(t.renderProgressbar?c=t.renderProgressbar.call(a,t.progressbarFillClass):c=`<span class="${t.progressbarFillClass}"></span>`,r.html(c)),t.type!=="custom"&&m("paginationRender",a.pagination.$el[0])}function E(){a.params.pagination=j(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const t=a.params.pagination;if(!t.el)return;let n=B(t.el);n.length!==0&&(a.params.uniqueNavElements&&typeof t.el=="string"&&n.length>1&&(n=a.$el.find(t.el),n.length>1&&(n=n.filter(r=>B(r).parents(".swiper")[0]===a.el))),t.type==="bullets"&&t.clickable&&n.addClass(t.clickableClass),n.addClass(t.modifierClass+t.type),n.addClass(a.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(n.addClass(`${t.modifierClass}${t.type}-dynamic`),y=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&n.addClass(t.progressbarOppositeClass),t.clickable&&n.on("click",F(t.bulletClass),function(c){c.preventDefault();let u=B(this).index()*a.params.slidesPerGroup;a.params.loop&&(u+=a.loopedSlides),a.slideTo(u)}),Object.assign(a.pagination,{$el:n,el:n[0]}),a.enabled||n.addClass(t.lockClass))}function S(){const t=a.params.pagination;if($())return;const n=a.pagination.$el;n.removeClass(t.hiddenClass),n.removeClass(t.modifierClass+t.type),n.removeClass(a.isHorizontal()?t.horizontalClass:t.verticalClass),a.pagination.bullets&&a.pagination.bullets.removeClass&&a.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&n.off("click",F(t.bulletClass))}f("init",()=>{a.params.pagination.enabled===!1?I():(E(),v(),g())}),f("activeIndexChange",()=>{(a.params.loop||typeof a.snapIndex>"u")&&g()}),f("snapIndexChange",()=>{a.params.loop||g()}),f("slidesLengthChange",()=>{a.params.loop&&(v(),g())}),f("snapGridLengthChange",()=>{a.params.loop||(v(),g())}),f("destroy",()=>{S()}),f("enable disable",()=>{const{$el:t}=a.pagination;t&&t[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)}),f("lock unlock",()=>{g()}),f("click",(t,n)=>{const r=n.target,{$el:c}=a.pagination;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&c&&c.length>0&&!B(r).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&r===a.navigation.nextEl||a.navigation.prevEl&&r===a.navigation.prevEl))return;const u=c.hasClass(a.params.pagination.hiddenClass);m(u===!0?"paginationShow":"paginationHide"),c.toggleClass(a.params.pagination.hiddenClass)}});const H=()=>{a.$el.removeClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass),E(),v(),g()},I=()=>{a.$el.addClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass),S()};Object.assign(a.pagination,{enable:H,disable:I,render:v,update:g,init:E,destroy:S})}function J({swiper:a,extendParams:P,on:f,emit:m}){const d=q();let b=!1,y=null,$=null,h,g,v,E;P({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),a.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null};function S(){if(!a.params.scrollbar.el||!a.scrollbar.el)return;const{scrollbar:s,rtlTranslate:l,progress:e}=a,{$dragEl:o,$el:i}=s,x=a.params.scrollbar;let k=g,p=(v-g)*e;l?(p=-p,p>0?(k=g-p,p=0):-p+g>v&&(k=v+p)):p<0?(k=g+p,p=0):p+g>v&&(k=v-p),a.isHorizontal()?(o.transform(`translate3d(${p}px, 0, 0)`),o[0].style.width=`${k}px`):(o.transform(`translate3d(0px, ${p}px, 0)`),o[0].style.height=`${k}px`),x.hide&&(clearTimeout(y),i[0].style.opacity=1,y=setTimeout(()=>{i[0].style.opacity=0,i.transition(400)},1e3))}function H(s){!a.params.scrollbar.el||!a.scrollbar.el||a.scrollbar.$dragEl.transition(s)}function I(){if(!a.params.scrollbar.el||!a.scrollbar.el)return;const{scrollbar:s}=a,{$dragEl:l,$el:e}=s;l[0].style.width="",l[0].style.height="",v=a.isHorizontal()?e[0].offsetWidth:e[0].offsetHeight,E=a.size/(a.virtualSize+a.params.slidesOffsetBefore-(a.params.centeredSlides?a.snapGrid[0]:0)),a.params.scrollbar.dragSize==="auto"?g=v*E:g=parseInt(a.params.scrollbar.dragSize,10),a.isHorizontal()?l[0].style.width=`${g}px`:l[0].style.height=`${g}px`,E>=1?e[0].style.display="none":e[0].style.display="",a.params.scrollbar.hide&&(e[0].style.opacity=0),a.params.watchOverflow&&a.enabled&&s.$el[a.isLocked?"addClass":"removeClass"](a.params.scrollbar.lockClass)}function t(s){return a.isHorizontal()?s.type==="touchstart"||s.type==="touchmove"?s.targetTouches[0].clientX:s.clientX:s.type==="touchstart"||s.type==="touchmove"?s.targetTouches[0].clientY:s.clientY}function n(s){const{scrollbar:l,rtlTranslate:e}=a,{$el:o}=l;let i;i=(t(s)-o.offset()[a.isHorizontal()?"left":"top"]-(h!==null?h:g/2))/(v-g),i=Math.max(Math.min(i,1),0),e&&(i=1-i);const x=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*i;a.updateProgress(x),a.setTranslate(x),a.updateActiveIndex(),a.updateSlidesClasses()}function r(s){const l=a.params.scrollbar,{scrollbar:e,$wrapperEl:o}=a,{$el:i,$dragEl:x}=e;b=!0,h=s.target===x[0]||s.target===x?t(s)-s.target.getBoundingClientRect()[a.isHorizontal()?"left":"top"]:null,s.preventDefault(),s.stopPropagation(),o.transition(100),x.transition(100),n(s),clearTimeout($),i.transition(0),l.hide&&i.css("opacity",1),a.params.cssMode&&a.$wrapperEl.css("scroll-snap-type","none"),m("scrollbarDragStart",s)}function c(s){const{scrollbar:l,$wrapperEl:e}=a,{$el:o,$dragEl:i}=l;b&&(s.preventDefault?s.preventDefault():s.returnValue=!1,n(s),e.transition(0),o.transition(0),i.transition(0),m("scrollbarDragMove",s))}function u(s){const l=a.params.scrollbar,{scrollbar:e,$wrapperEl:o}=a,{$el:i}=e;b&&(b=!1,a.params.cssMode&&(a.$wrapperEl.css("scroll-snap-type",""),o.transition("")),l.hide&&(clearTimeout($),$=G(()=>{i.css("opacity",0),i.transition(400)},1e3)),m("scrollbarDragEnd",s),l.snapOnRelease&&a.slideToClosest())}function T(s){const{scrollbar:l,touchEventsTouch:e,touchEventsDesktop:o,params:i,support:x}=a,k=l.$el;if(!k)return;const p=k[0],A=x.passiveListener&&i.passiveListeners?{passive:!1,capture:!1}:!1,N=x.passiveListener&&i.passiveListeners?{passive:!0,capture:!1}:!1;if(!p)return;const R=s==="on"?"addEventListener":"removeEventListener";x.touch?(p[R](e.start,r,A),p[R](e.move,c,A),p[R](e.end,u,N)):(p[R](o.start,r,A),d[R](o.move,c,A),d[R](o.end,u,N))}function C(){!a.params.scrollbar.el||!a.scrollbar.el||T("on")}function D(){!a.params.scrollbar.el||!a.scrollbar.el||T("off")}function M(){const{scrollbar:s,$el:l}=a;a.params.scrollbar=j(a,a.originalParams.scrollbar,a.params.scrollbar,{el:"swiper-scrollbar"});const e=a.params.scrollbar;if(!e.el)return;let o=B(e.el);a.params.uniqueNavElements&&typeof e.el=="string"&&o.length>1&&l.find(e.el).length===1&&(o=l.find(e.el)),o.addClass(a.isHorizontal()?e.horizontalClass:e.verticalClass);let i=o.find(`.${a.params.scrollbar.dragClass}`);i.length===0&&(i=B(`<div class="${a.params.scrollbar.dragClass}"></div>`),o.append(i)),Object.assign(s,{$el:o,el:o[0],$dragEl:i,dragEl:i[0]}),e.draggable&&C(),o&&o[a.enabled?"removeClass":"addClass"](a.params.scrollbar.lockClass)}function O(){const s=a.params.scrollbar,l=a.scrollbar.$el;l&&l.removeClass(a.isHorizontal()?s.horizontalClass:s.verticalClass),D()}f("init",()=>{a.params.scrollbar.enabled===!1?z():(M(),I(),S())}),f("update resize observerUpdate lock unlock",()=>{I()}),f("setTranslate",()=>{S()}),f("setTransition",(s,l)=>{H(l)}),f("enable disable",()=>{const{$el:s}=a.scrollbar;s&&s[a.enabled?"removeClass":"addClass"](a.params.scrollbar.lockClass)}),f("destroy",()=>{O()});const L=()=>{a.$el.removeClass(a.params.scrollbar.scrollbarDisabledClass),a.scrollbar.$el&&a.scrollbar.$el.removeClass(a.params.scrollbar.scrollbarDisabledClass),M(),I(),S()},z=()=>{a.$el.addClass(a.params.scrollbar.scrollbarDisabledClass),a.scrollbar.$el&&a.scrollbar.$el.addClass(a.params.scrollbar.scrollbarDisabledClass),O()};Object.assign(a.scrollbar,{enable:L,disable:z,updateSize:I,setTranslate:S,init:M,destroy:O})}function Q({swiper:a,extendParams:P,on:f}){P({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),a.a11y={clicked:!1};let m=null;function d(l){const e=m;e.length!==0&&(e.html(""),e.html(l))}function b(l=16){const e=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(l).replace(/x/g,e)}function y(l){l.attr("tabIndex","0")}function $(l){l.attr("tabIndex","-1")}function h(l,e){l.attr("role",e)}function g(l,e){l.attr("aria-roledescription",e)}function v(l,e){l.attr("aria-controls",e)}function E(l,e){l.attr("aria-label",e)}function S(l,e){l.attr("id",e)}function H(l,e){l.attr("aria-live",e)}function I(l){l.attr("aria-disabled",!0)}function t(l){l.attr("aria-disabled",!1)}function n(l){if(l.keyCode!==13&&l.keyCode!==32)return;const e=a.params.a11y,o=B(l.target);a.navigation&&a.navigation.$nextEl&&o.is(a.navigation.$nextEl)&&(a.isEnd&&!a.params.loop||a.slideNext(),a.isEnd?d(e.lastSlideMessage):d(e.nextSlideMessage)),a.navigation&&a.navigation.$prevEl&&o.is(a.navigation.$prevEl)&&(a.isBeginning&&!a.params.loop||a.slidePrev(),a.isBeginning?d(e.firstSlideMessage):d(e.prevSlideMessage)),a.pagination&&o.is(F(a.params.pagination.bulletClass))&&o[0].click()}function r(){if(a.params.loop||a.params.rewind||!a.navigation)return;const{$nextEl:l,$prevEl:e}=a.navigation;e&&e.length>0&&(a.isBeginning?(I(e),$(e)):(t(e),y(e))),l&&l.length>0&&(a.isEnd?(I(l),$(l)):(t(l),y(l)))}function c(){return a.pagination&&a.pagination.bullets&&a.pagination.bullets.length}function u(){return c()&&a.params.pagination.clickable}function T(){const l=a.params.a11y;c()&&a.pagination.bullets.each(e=>{const o=B(e);a.params.pagination.clickable&&(y(o),a.params.pagination.renderBullet||(h(o,"button"),E(o,l.paginationBulletMessage.replace(/\{\{index\}\}/,o.index()+1)))),o.is(`.${a.params.pagination.bulletActiveClass}`)?o.attr("aria-current","true"):o.removeAttr("aria-current")})}const C=(l,e,o)=>{y(l),l[0].tagName!=="BUTTON"&&(h(l,"button"),l.on("keydown",n)),E(l,o),v(l,e)},D=()=>{a.a11y.clicked=!0},M=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{a.destroyed||(a.a11y.clicked=!1)})})},O=l=>{if(a.a11y.clicked)return;const e=l.target.closest(`.${a.params.slideClass}`);if(!e||!a.slides.includes(e))return;const o=a.slides.indexOf(e)===a.activeIndex,i=a.params.watchSlidesProgress&&a.visibleSlides&&a.visibleSlides.includes(e);o||i||l.sourceCapabilities&&l.sourceCapabilities.firesTouchEvents||(a.isHorizontal()?a.el.scrollLeft=0:a.el.scrollTop=0,a.slideTo(a.slides.indexOf(e),0))},L=()=>{const l=a.params.a11y;l.itemRoleDescriptionMessage&&g(B(a.slides),l.itemRoleDescriptionMessage),l.slideRole&&h(B(a.slides),l.slideRole);const e=a.params.loop?a.slides.filter(o=>!o.classList.contains(a.params.slideDuplicateClass)).length:a.slides.length;l.slideLabelMessage&&a.slides.each((o,i)=>{const x=B(o),k=a.params.loop?parseInt(x.attr("data-swiper-slide-index"),10):i,p=l.slideLabelMessage.replace(/\{\{index\}\}/,k+1).replace(/\{\{slidesLength\}\}/,e);E(x,p)})},z=()=>{const l=a.params.a11y;a.$el.append(m);const e=a.$el;l.containerRoleDescriptionMessage&&g(e,l.containerRoleDescriptionMessage),l.containerMessage&&E(e,l.containerMessage);const o=a.$wrapperEl,i=l.id||o.attr("id")||`swiper-wrapper-${b(16)}`,x=a.params.autoplay&&a.params.autoplay.enabled?"off":"polite";S(o,i),H(o,x),L();let k,p;a.navigation&&a.navigation.$nextEl&&(k=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(p=a.navigation.$prevEl),k&&k.length&&C(k,i,l.nextSlideMessage),p&&p.length&&C(p,i,l.prevSlideMessage),u()&&a.pagination.$el.on("keydown",F(a.params.pagination.bulletClass),n),a.$el.on("focus",O,!0),a.$el.on("pointerdown",D,!0),a.$el.on("pointerup",M,!0)};function s(){m&&m.length>0&&m.remove();let l,e;a.navigation&&a.navigation.$nextEl&&(l=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(e=a.navigation.$prevEl),l&&l.off("keydown",n),e&&e.off("keydown",n),u()&&a.pagination.$el.off("keydown",F(a.params.pagination.bulletClass),n),a.$el.off("focus",O,!0),a.$el.off("pointerdown",D,!0),a.$el.off("pointerup",M,!0)}f("beforeInit",()=>{m=B(`<span class="${a.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)}),f("afterInit",()=>{a.params.a11y.enabled&&z()}),f("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{a.params.a11y.enabled&&L()}),f("fromEdge toEdge afterInit lock unlock",()=>{a.params.a11y.enabled&&r()}),f("paginationUpdate",()=>{a.params.a11y.enabled&&T()}),f("destroy",()=>{a.params.a11y.enabled&&s()})}function Z({swiper:a,extendParams:P,on:f,emit:m}){let d;a.autoplay={running:!1,paused:!1},P({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function b(){if(!a.size){a.autoplay.running=!1,a.autoplay.paused=!1;return}const t=a.slides.eq(a.activeIndex);let n=a.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(n=t.attr("data-swiper-autoplay")||a.params.autoplay.delay),clearTimeout(d),d=G(()=>{let r;a.params.autoplay.reverseDirection?a.params.loop?(a.loopFix(),r=a.slidePrev(a.params.speed,!0,!0),m("autoplay")):a.isBeginning?a.params.autoplay.stopOnLastSlide?$():(r=a.slideTo(a.slides.length-1,a.params.speed,!0,!0),m("autoplay")):(r=a.slidePrev(a.params.speed,!0,!0),m("autoplay")):a.params.loop?(a.loopFix(),r=a.slideNext(a.params.speed,!0,!0),m("autoplay")):a.isEnd?a.params.autoplay.stopOnLastSlide?$():(r=a.slideTo(0,a.params.speed,!0,!0),m("autoplay")):(r=a.slideNext(a.params.speed,!0,!0),m("autoplay")),(a.params.cssMode&&a.autoplay.running||r===!1)&&b()},n)}function y(){return typeof d<"u"||a.autoplay.running?!1:(a.autoplay.running=!0,m("autoplayStart"),b(),!0)}function $(){return!a.autoplay.running||typeof d>"u"?!1:(d&&(clearTimeout(d),d=void 0),a.autoplay.running=!1,m("autoplayStop"),!0)}function h(t){a.autoplay.running&&(a.autoplay.paused||(d&&clearTimeout(d),a.autoplay.paused=!0,t===0||!a.params.autoplay.waitForTransition?(a.autoplay.paused=!1,b()):["transitionend","webkitTransitionEnd"].forEach(n=>{a.$wrapperEl[0].addEventListener(n,v)})))}function g(){const t=q();t.visibilityState==="hidden"&&a.autoplay.running&&h(),t.visibilityState==="visible"&&a.autoplay.paused&&(b(),a.autoplay.paused=!1)}function v(t){!a||a.destroyed||!a.$wrapperEl||t.target===a.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(n=>{a.$wrapperEl[0].removeEventListener(n,v)}),a.autoplay.paused=!1,a.autoplay.running?b():$())}function E(){a.params.autoplay.disableOnInteraction?$():(m("autoplayPause"),h()),["transitionend","webkitTransitionEnd"].forEach(t=>{a.$wrapperEl[0].removeEventListener(t,v)})}function S(){a.params.autoplay.disableOnInteraction||(a.autoplay.paused=!1,m("autoplayResume"),b())}function H(){a.params.autoplay.pauseOnMouseEnter&&(a.$el.on("mouseenter",E),a.$el.on("mouseleave",S))}function I(){a.$el.off("mouseenter",E),a.$el.off("mouseleave",S)}f("init",()=>{a.params.autoplay.enabled&&(y(),q().addEventListener("visibilitychange",g),H())}),f("beforeTransitionStart",(t,n,r)=>{a.autoplay.running&&(r||!a.params.autoplay.disableOnInteraction?a.autoplay.pause(n):$())}),f("sliderFirstMove",()=>{a.autoplay.running&&(a.params.autoplay.disableOnInteraction?$():h())}),f("touchEnd",()=>{a.params.cssMode&&a.autoplay.paused&&!a.params.autoplay.disableOnInteraction&&b()}),f("destroy",()=>{I(),a.autoplay.running&&$(),q().removeEventListener("visibilitychange",g)}),Object.assign(a.autoplay,{pause:h,run:b,start:y,stop:$})}function w({swiper:a,extendParams:P,on:f}){P({fadeEffect:{crossFade:!1,transformEl:null}}),U({effect:"fade",swiper:a,on:f,setTranslate:()=>{const{slides:b}=a,y=a.params.fadeEffect;for(let $=0;$<b.length;$+=1){const h=a.slides.eq($);let v=-h[0].swiperSlideOffset;a.params.virtualTranslate||(v-=a.translate);let E=0;a.isHorizontal()||(E=v,v=0);const S=a.params.fadeEffect.crossFade?Math.max(1-Math.abs(h[0].progress),0):1+Math.min(Math.max(h[0].progress,-1),0);V(y,h).css({opacity:S}).transform(`translate3d(${v}px, ${E}px, 0px)`)}},setTransition:b=>{const{transformEl:y}=a.params.fadeEffect;(y?a.slides.find(y):a.slides).transition(b),X({swiper:a,duration:b,transformEl:y,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!a.params.cssMode})})}export{Q as A,w as E,K as P,J as S,Z as a};
