import{j as pe,o as w,d as v,p as y,k as h,f as R,t as O,q as S,M as H,n as ge,F as me}from"./index-CyQKzwXM.js";import{_ as he}from"./_plugin-vue_export-helper-DlAUqK2U.js";function ae(e){var t,o,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(o=ae(e[t]))&&(r&&(r+=" "),r+=o)}else for(o in e)e[o]&&(r&&(r+=" "),r+=o);return r}function ye(){for(var e,t,o=0,r="",i=arguments.length;o<i;o++)(e=arguments[o])&&(t=ae(e))&&(r&&(r+=" "),r+=t);return r}const Q="-";function xe(e){const t=ve(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:r}=e;function i(s){const a=s.split(Q);return a[0]===""&&a.length!==1&&a.shift(),ce(a,t)||we(s)}function n(s,a){const u=o[s]||[];return a&&r[s]?[...u,...r[s]]:u}return{getClassGroupId:i,getConflictingClassGroupIds:n}}function ce(e,t){var s;if(e.length===0)return t.classGroupId;const o=e[0],r=t.nextPart.get(o),i=r?ce(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const n=e.join(Q);return(s=t.validators.find(({validator:a})=>a(n)))==null?void 0:s.classGroupId}const ie=/^\[(.+)\]$/;function we(e){if(ie.test(e)){const t=ie.exec(e)[1],o=t==null?void 0:t.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}}function ve(e){const{theme:t,prefix:o}=e,r={nextPart:new Map,validators:[]};return Ce(Object.entries(e.classGroups),o).forEach(([n,s])=>{K(s,r,n,t)}),r}function K(e,t,o,r){e.forEach(i=>{if(typeof i=="string"){const n=i===""?t:le(t,i);n.classGroupId=o;return}if(typeof i=="function"){if(ke(i)){K(i(r),t,o,r);return}t.validators.push({validator:i,classGroupId:o});return}Object.entries(i).forEach(([n,s])=>{K(s,le(t,n),o,r)})})}function le(e,t){let o=e;return t.split(Q).forEach(r=>{o.nextPart.has(r)||o.nextPart.set(r,{nextPart:new Map,validators:[]}),o=o.nextPart.get(r)}),o}function ke(e){return e.isThemeGetter}function Ce(e,t){return t?e.map(([o,r])=>{const i=r.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,a])=>[t+s,a])):n);return[o,i]}):e}function Se(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,o=new Map,r=new Map;function i(n,s){o.set(n,s),t++,t>e&&(t=0,r=o,o=new Map)}return{get(n){let s=o.get(n);if(s!==void 0)return s;if((s=r.get(n))!==void 0)return i(n,s),s},set(n,s){o.has(n)?o.set(n,s):i(n,s)}}}const de="!";function ze(e){const t=e.separator,o=t.length===1,r=t[0],i=t.length;return function(s){const a=[];let u=0,b=0,f;for(let p=0;p<s.length;p++){let m=s[p];if(u===0){if(m===r&&(o||s.slice(p,p+i)===t)){a.push(s.slice(b,p)),b=p+i;continue}if(m==="/"){f=p;continue}}m==="["?u++:m==="]"&&u--}const g=a.length===0?s:s.substring(b),k=g.startsWith(de),M=k?g.substring(1):g,j=f&&f>b?f-b:void 0;return{modifiers:a,hasImportantModifier:k,baseClassName:M,maybePostfixModifierPosition:j}}}function Me(e){if(e.length<=1)return e;const t=[];let o=[];return e.forEach(r=>{r[0]==="["?(t.push(...o.sort(),r),o=[]):o.push(r)}),t.push(...o.sort()),t}function Ae(e){return{cache:Se(e.cacheSize),splitModifiers:ze(e),...xe(e)}}const Te=/\s+/;function Ie(e,t){const{splitModifiers:o,getClassGroupId:r,getConflictingClassGroupIds:i}=t,n=new Set;return e.trim().split(Te).map(s=>{const{modifiers:a,hasImportantModifier:u,baseClassName:b,maybePostfixModifierPosition:f}=o(s);let g=r(f?b.substring(0,f):b),k=!!f;if(!g){if(!f)return{isTailwindClass:!1,originalClassName:s};if(g=r(b),!g)return{isTailwindClass:!1,originalClassName:s};k=!1}const M=Me(a).join(":");return{isTailwindClass:!0,modifierId:u?M+de:M,classGroupId:g,originalClassName:s,hasPostfixModifier:k}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:u,hasPostfixModifier:b}=s,f=a+u;return n.has(f)?!1:(n.add(f),i(u,b).forEach(g=>n.add(a+g)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Re(){let e=0,t,o,r="";for(;e<arguments.length;)(t=arguments[e++])&&(o=ue(t))&&(r&&(r+=" "),r+=o);return r}function ue(e){if(typeof e=="string")return e;let t,o="";for(let r=0;r<e.length;r++)e[r]&&(t=ue(e[r]))&&(o&&(o+=" "),o+=t);return o}function Ge(e,...t){let o,r,i,n=s;function s(u){const b=t.reduce((f,g)=>g(f),e());return o=Ae(b),r=o.cache.get,i=o.cache.set,n=a,a(u)}function a(u){const b=r(u);if(b)return b;const f=Ie(u,o);return i(u,f),f}return function(){return n(Re.apply(null,arguments))}}function c(e){const t=o=>o[e]||[];return t.isThemeGetter=!0,t}const fe=/^\[(?:([a-z-]+):)?(.+)\]$/i,je=/^\d+\/\d+$/,Pe=new Set(["px","full","screen"]),Ee=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Be=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ne=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Le=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$e=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function z(e){return G(e)||Pe.has(e)||je.test(e)}function T(e){return P(e,"length",Xe)}function G(e){return!!e&&!Number.isNaN(Number(e))}function F(e){return P(e,"number",G)}function N(e){return!!e&&Number.isInteger(Number(e))}function Ve(e){return e.endsWith("%")&&G(e.slice(0,-1))}function l(e){return fe.test(e)}function I(e){return Ee.test(e)}const We=new Set(["length","size","percentage"]);function Oe(e){return P(e,We,be)}function Fe(e){return P(e,"position",be)}const Ue=new Set(["image","url"]);function qe(e){return P(e,Ue,He)}function Je(e){return P(e,"",Ze)}function L(){return!0}function P(e,t,o){const r=fe.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):o(r[2]):!1}function Xe(e){return Be.test(e)&&!Ne.test(e)}function be(){return!1}function Ze(e){return Le.test(e)}function He(e){return $e.test(e)}function Ke(){const e=c("colors"),t=c("spacing"),o=c("blur"),r=c("brightness"),i=c("borderColor"),n=c("borderRadius"),s=c("borderSpacing"),a=c("borderWidth"),u=c("contrast"),b=c("grayscale"),f=c("hueRotate"),g=c("invert"),k=c("gap"),M=c("gradientColorStops"),j=c("gradientColorStopPositions"),p=c("inset"),m=c("margin"),A=c("opacity"),C=c("padding"),Y=c("saturate"),U=c("scale"),D=c("sepia"),_=c("skew"),ee=c("space"),te=c("translate"),q=()=>["auto","contain","none"],J=()=>["auto","hidden","clip","visible","scroll"],X=()=>["auto",l,t],d=()=>[l,t],re=()=>["",z,T],$=()=>["auto",G,l],oe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],ne=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],Z=()=>["start","end","center","between","around","evenly","stretch"],E=()=>["","0",l],se=()=>["auto","avoid","all","avoid-page","page","left","right","column"],B=()=>[G,F],W=()=>[G,l];return{cacheSize:500,separator:":",theme:{colors:[L],spacing:[z,T],blur:["none","",I,l],brightness:B(),borderColor:[e],borderRadius:["none","","full",I,l],borderSpacing:d(),borderWidth:re(),contrast:B(),grayscale:E(),hueRotate:W(),invert:E(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[Ve,T],inset:X(),margin:X(),opacity:B(),padding:d(),saturate:B(),scale:B(),sepia:E(),skew:W(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[I]}],"break-after":[{"break-after":se()}],"break-before":[{"break-before":se()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...oe(),l]}],overflow:[{overflow:J()}],"overflow-x":[{"overflow-x":J()}],"overflow-y":[{"overflow-y":J()}],overscroll:[{overscroll:q()}],"overscroll-x":[{"overscroll-x":q()}],"overscroll-y":[{"overscroll-y":q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[p]}],"inset-x":[{"inset-x":[p]}],"inset-y":[{"inset-y":[p]}],start:[{start:[p]}],end:[{end:[p]}],top:[{top:[p]}],right:[{right:[p]}],bottom:[{bottom:[p]}],left:[{left:[p]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",N,l]}],basis:[{basis:X()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:E()}],shrink:[{shrink:E()}],order:[{order:["first","last","none",N,l]}],"grid-cols":[{"grid-cols":[L]}],"col-start-end":[{col:["auto",{span:["full",N,l]},l]}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":[L]}],"row-start-end":[{row:["auto",{span:[N,l]},l]}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[k]}],"gap-x":[{"gap-x":[k]}],"gap-y":[{"gap-y":[k]}],"justify-content":[{justify:["normal",...Z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[ee]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ee]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,t]}],"min-w":[{"min-w":[l,t,"min","max","fit"]}],"max-w":[{"max-w":[l,t,"none","full","min","max","fit","prose",{screen:[I]},I]}],h:[{h:[l,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,t,"auto","min","max","fit"]}],"font-size":[{text:["base",I,T]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",F]}],"font-family":[{font:[L]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",G,F]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,T]}],"underline-offset":[{"underline-offset":["auto",z,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...oe(),Fe]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Oe]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[j]}],"gradient-via-pos":[{via:[j]}],"gradient-to-pos":[{to:[j]}],"gradient-from":[{from:[M]}],"gradient-via":[{via:[M]}],"gradient-to":[{to:[M]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:V()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[z,l]}],"outline-w":[{outline:[z,T]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[z,T]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",I,Je]}],"shadow-color":[{shadow:[L]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":ne()}],"bg-blend":[{"bg-blend":ne()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",I,l]}],grayscale:[{grayscale:[b]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[g]}],saturate:[{saturate:[Y]}],sepia:[{sepia:[D]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[b]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[Y]}],"backdrop-sepia":[{"backdrop-sepia":[D]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:W()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:W()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[U]}],"scale-x":[{"scale-x":[U]}],"scale-y":[{"scale-y":[U]}],rotate:[{rotate:[N,l]}],"translate-x":[{"translate-x":[te]}],"translate-y":[{"translate-y":[te]}],"skew-x":[{"skew-x":[_]}],"skew-y":[{"skew-y":[_]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,T,F]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Qe=Ge(Ke);function x(...e){return Qe(ye(e))}const Ye={class:"flex-1"},De={key:0,class:"flex-0"},_e=["src"],et={class:"mb-5"},tt={class:"card-text h-full"},rt={__name:"index",props:{class:{type:String,default:""},title:{type:String,default:""},titleClass:{type:String,default:""},subtitle:{type:String,default:""},subtitleClass:{type:String,default:""},img:{type:String,default:""},imaClass:{type:String,default:""},imgTop:{type:Boolean,default:!1},imgBottom:{type:Boolean,default:!1},gapNull:{type:Boolean,default:!1},overlay:{type:Boolean,default:!1},noborder:{type:Boolean,default:!1},bodyClass:{type:String,default:"p-6"},customClass:{type:String,default:""}},setup(e){const t=pe(),o=e;return(r,i)=>(w(),v(me,null,[e.overlay?S("",!0):(w(),v("div",{key:0,class:y(h(x)("card rounded-md bg-white dark:bg-slate-800",o.class,{" border border-gray-5002 dark:border-slate-700":h(t).skin==="bordered","shadow-base":h(t).skin!=="bordered"}))},[R("div",{class:y(h(x)("card-body flex flex-col",e.bodyClass))},[e.title||e.subtitle?(w(),v("header",{key:0,class:y(h(x)("flex mb-5 items-center",{"order-1":e.imgTop,"border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6":!e.noborder}))},[R("div",Ye,[e.title?(w(),v("div",{key:0,class:y(h(x)("card-title text-slate-900 dark:text-white",e.titleClass))},O(e.title),3)):S("",!0),e.subtitle?(w(),v("div",{key:1,class:y(h(x)("card-subtitle",e.subtitleClass))},O(e.subtitle),3)):S("",!0)]),r.$slots.header?(w(),v("div",De,[H(r.$slots,"header",{},void 0,!0)])):S("",!0)],2)):S("",!0),e.img?(w(),v("div",{key:1,class:y(h(x)("image-box",{"order-0":e.imgTop,"-mx-6":e.gapNull,"-mt-6":e.gapNull&&e.imgTop,"-mb-6":e.gapNull&&e.imgBottom,"order-3 mt-6":e.imgBottom,"mb-6":!e.imgBottom}))},[R("img",{src:e.img,alt:"",class:y(h(x)("block w-full h-full object-cover",e.imaClass))},null,10,_e)],2)):S("",!0),R("div",{class:y(h(x)("card-text h-full",{"order-2":e.imgTop}))},[H(r.$slots,"default",{},void 0,!0)],2)],2)],2)),e.overlay?(w(),v("div",{key:1,class:y(h(x)("rounded-md overlay bg-no-repeat bg-center bg-cover card",e.customClass)),style:ge({backgroundImage:`url(${e.img})`})},[R("div",{class:y(h(x)("card-body h-full flex flex-col justify-center",e.bodyClass))},[R("header",et,[e.title?(w(),v("div",{key:0,class:y(h(x)("card-title text-slate-900 dark:text-white",e.titleClass))},O(e.title),3)):S("",!0),e.subtitle?(w(),v("div",{key:1,class:y(h(x)("card-subtitle",e.subtitleClass))},O(e.subtitle),3)):S("",!0)]),R("div",tt,[H(r.$slots,"default",{},void 0,!0)])],2)],6)):S("",!0)],64))}},st=he(rt,[["__scopeId","data-v-0e7b5642"]]);export{st as C,x as c};
