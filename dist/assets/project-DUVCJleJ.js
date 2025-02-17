import{C as F}from"./index-CoHYOsAq.js";import{C as D}from"./index-2iT3jdVW.js";import{I as B}from"./index-DxXSMpKh.js";import{b as P,m as U,T as L}from"./data-gS5vGOMl.js";import{s as N,b as T,a as E,p as J,d as S,c as K}from"./data-Bltf9LnN.js";import{D as W,_ as q}from"./SelectMonth-TUHqsJ5l.js";import{D as Q}from"./index-Br1mhpyn.js";import{P as R}from"./index-BXlIw-0P.js";import{u as Z}from"./user-1-Dmhlt7-s.js";import{u as O,a as G,b as z}from"./user-4-_9lLfOE2.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as Y}from"./menu-BlqYkBdn.js";import{c,o,d as l,e as s,g as i,f as e,t as a,q as h,F as m,m as _,l as X,p as x,h as H}from"./index-CyQKzwXM.js";import"./av-2-D6_jNZbn.js";import"./listbox-CtrYeIXY.js";import"./keyboard-C8YEoqI_.js";import"./use-outside-click-WivoOT8p.js";import"./focus-management-DKnT3RdX.js";import"./use-resolve-button-type-DXZUzXBT.js";import"./hidden-1JsWbmcm.js";import"./open-closed-CLDwNzJK.js";import"./index-Jp7OXFH1.js";const $={components:{Pagination:R,Dropdown:Q,Icon:B,MenuItem:Y},data(){return{shapeLine4:N,current:1,perpage:4,pageRange:5,searchTerm:"",actions:[{name:"view",icon:"heroicons-outline:eye"},{name:"edit",icon:"heroicons:pencil-square"},{name:"delete",icon:"heroicons-outline:trash"}],options:[{value:"1",label:"1"},{value:"3",label:"3"},{value:"5",label:"5"}],teamtable:[{customer:{name:"Arlene McCoy",image:Z,deg:"Ux designer"},status:"progress",time:"42.5 hours",chart:null},{customer:{name:"Arlene McCoy",image:O,deg:"Ux designer"},status:"complete",time:"42.5 hours",chart:null},{customer:{name:"Arlene McCoy",image:G,deg:"Ux designer"},status:"progress",time:"42.5 hours",chart:null},{customer:{name:"Arlene McCoy",image:z,deg:"Ux designer"},status:"complete",time:"42.5 hours",chart:null}],columns:[{label:"assignee",field:"customer"},{label:"Amount",field:"status"},{label:"time",field:"time"},{label:"chart",field:"chart"},{label:"Action",field:"action"}]}}},e2={class:"-mx-6 -mb-6"},t2={key:0,class:"flex items-center min-w-[150px]"},s2={class:"w-8 h-8 rounded-full ltr:mr-3 rtl:ml-3 flex-none"},o2=["src","alt"],n2={class:"text-sm text-slate-600 dark:text-slate-300 capitalize"},l2={key:1},i2={key:2,class:"block min-w-[140px] text-left"},r2={class:"inline-block text-center mx-auto py-1"},a2={key:0,class:"flex items-center space-x-3 rtl:space-x-reverse"},c2=e("span",{class:"h-[6px] w-[6px] bg-danger-500 rounded-full inline-block ring-4 ring-opacity-30 ring-danger-500"},null,-1),d2=e("span",null,"In progress",-1),p2=[c2,d2],h2={key:1,class:"flex items-center space-x-3 rtl:space-x-reverse"},u2=e("span",{class:"h-[6px] w-[6px] bg-success-500 rounded-full inline-block ring-4 ring-opacity-30 ring-success-500"},null,-1),g2=e("span",null,"Complete",-1),m2=[u2,g2],_2={key:3,class:"block min-w-[100px] text-left"},x2={key:4,class:"ltr:text-right rtl:text-left"},k2={class:"text-xl"},f2={class:"text-base"},b2={class:"py-4 px-3 justify-center hidden"};function C2(C,f,I,V,n,A){const k=c("apexchart"),b=c("Icon"),p=c("MenuItem"),u=c("Dropdown"),w=c("Pagination"),v=c("vue-good-table");return o(),l("div",e2,[s(v,{columns:n.columns,styleClass:" vgt-table   lesspadding v-middle table-head  rounded-md ",rows:n.teamtable,"pagination-options":{enabled:!0,perPage:n.perpage},"sort-options":{enabled:!1}},{"table-row":i(r=>[r.column.field=="customer"?(o(),l("span",t2,[e("span",s2,[e("img",{src:r.row.customer.image,alt:r.row.customer.name,class:"object-cover w-full h-full rounded-full"},null,8,o2)]),e("span",n2,a(r.row.customer.name),1)])):h("",!0),r.column.field=="chart"?(o(),l("span",l2,[s(k,{type:"area",height:"48",width:"100%",options:n.shapeLine4.chartOptions,series:n.shapeLine4.series},null,8,["options","series"])])):h("",!0),r.column.field=="status"?(o(),l("span",i2,[e("span",r2,[r.row.status==="progress"?(o(),l("span",a2,p2)):h("",!0),r.row.status==="complete"?(o(),l("span",h2,m2)):h("",!0)])])):h("",!0),r.column.field=="time"?(o(),l("span",_2,a(r.row.time),1)):h("",!0),r.column.field=="action"?(o(),l("div",x2,[s(u,{classMenuItems:" w-[140px]"},{menus:i(()=>[(o(!0),l(m,null,_(n.actions,(g,y)=>(o(),X(p,{key:y},{default:i(()=>[e("div",{class:x(`
                
                  ${g.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `)},[e("span",f2,[s(b,{icon:g.icon},null,8,["icon"])]),e("span",null,a(g.name),1)],2)]),_:2},1024))),128))]),default:i(()=>[e("span",k2,[s(b,{icon:"heroicons-outline:dots-vertical"})])]),_:1})])):h("",!0)]),"pagination-bottom":i(r=>[e("div",b2,[s(w,{total:50,current:n.current,"per-page":n.perpage,pageRange:n.pageRange,onPageChanged:f[0]||(f[0]=g=>n.current=g),pageChanged:r.pageChanged,perPageChanged:r.perPageChanged},{default:i(()=>[H(" > ")]),_:2},1032,["current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options"])])}const w2=j($,[["render",C2]]),M="/assets/sk-BU6XOt_w.svg",v2="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ccircle%20cx='16'%20cy='16'%20r='16'%20fill='url(%23pattern0)'/%3e%3cdefs%3e%3cpattern%20id='pattern0'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_1476_69347'%20transform='scale(0.0142857)'/%3e%3c/pattern%3e%3cimage%20id='image0_1476_69347'%20width='70'%20height='70'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAE/UlEQVR4Xu2c/5UPMRDA5ypAB3RABagAFaACVIAKUAEqQAWogA5QAR3wPmzu5faSmckk39vsnbx3b/+4TTbz+WZ+ZDK7RzJfuywid0XkpohcX/7Ws/wkIl9F5O1yHS7F0fAR4wPeEpH7IvKgcYjvIvJcRN409lNvnwEMQJ6KCNeexiq6JyK/egZJfbcEg8q8CKwQTW6g3B6hXluBwYa8FhHgjG7AuSEiqFi4bQGGVfI4PGNfRwwzcMLtLMGwOj5WvIylHghKYww8ladhkJ95bizdc1ZgEAbV8QqFOuBlSu4YOKy4R4YqMsaVmcEAg5XisScI80pEXjq8y1UReWfAxku9j8A59IppgYIADx1AcjkZ/4siOICfzAbGC4VVwuSjARoqWgsKiW1w383tUCumBYoWdxD0YUu4oooIilHlmhpQgFNqU4FBgG8Om4KnAUotUsWjEBGXWm47gIYNmxqM1yVbUDRhAUDwdm0hocVF2C0gNreRqjQKCkLgbYiOtZZUUFud2C4McHMbBWYkFIT46VBFbM0dw10T/abgsAnOKDC4TCt4s9Qnn/jvJinKN3dtC0aA0dxlmnILFPpgTHvTEOHgjgn0gvFAwetgKFvyJIT8GNVoCxvd9MAeMJ5dcjQ/4nX5JXCtq7MIPwpGC6rSg6JQUn9vkJgLNiyLFwHjgcJku3R8kda7KyeuSZvPqPqd6NcKxtq0pcHZDEb3PiXBiGlwzeyo84bafI7uoDWCLWC8SxsggNl184LxGsPwpm02ih4w3qgWPSfSbHHLs/E4no8HjGff0uuBpgNkgfEEcAgFmNCeZDoiS2JLA+N1yxPKFp7SseOogbHyIeEnT96RVMbf7GAJjNctTy5j8/RO7MbXYLweqPmpO+hwIihdg/F4oB3I2DzFUxmAHIyWfG5+0s46nDp/stz1zuQbN93/YCos/4MxwJCNs5LZ49bpPCPhootn22nFeNKU84gzbibVvFECQwKIg6uL1NQkfW5jPGdD5wmcWiKSg+k9stgbNI50qgWMOZiLpE7mudNF3RIc76Jry3wNxsrBpILBvanNer554VFRllKAp1UanJtkt/XLlsBY6UxKRM9FwluDU0tUaZWQow/TrB9vk//X9kpaTBOtO2HLkdf64iq76v0PSawGxjLCagywmjBjUWS4Pl7lNsBQ/e0peD4kh1Nj18BYJ4/eY1jLXqUJYbNQ0VAV9yGIaWkHTShPMVAkIziN/dLAWJUNmhCsONx+pJnBV2TQ1j5WokqrhctrbdfPtWyUNs8pzsAtMJaAteKgiBrlsDZXKQsMkyVPU/Io/K8WCVtArZUdDQmscd3/94Cx0hElm2B5tQR1HdvkE/fMzS1o642eh1tC1myCpU4ABUytbHVTI+wBA2xLyFo2rNQvfz9JKx7YBRhWDduEmq0BXs1g0gcAXLEd2KW0Cd09GASncpKzba21ehPtdKJl29FqQsz7vaqUBvIc+ntf69UCyK43YE2pHTe0gvGoFI9FZQBU2/ugQkCuvVnr3Ys5RIzd0gqGp7QUFuGxsCk/luldWuyNdeq5qRox1wgYr72J/VT/UhChV4KjDyz1i4JJcEZ/uGLImyMjAPWASWqFrdDcuHeeU9UK94JBaAwoGbqeL3xMs1LSrzgCTBqLVQOglk8ppW85hL/a4V2OrfeNBJOenT6+lV6jWXsgPBUr5MPizqc8ivkD7HoIVoQpe3MAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",y2="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32%2016C32%2024.8366%2024.8366%2032%2016%2032C7.16344%2032%200%2024.8366%200%2016C0%207.16344%207.16344%200%2016%200C24.8366%200%2032%207.16344%2032%2016Z'%20fill='%23E0EAFF'/%3e%3cpath%20d='M20%2023.2C19.0133%2023.2%2018.0933%2023.02%2017.24%2022.66C16.4%2022.3%2015.6667%2021.7933%2015.04%2021.14C14.4133%2020.4867%2013.9267%2019.7333%2013.58%2018.88C13.2467%2018.0133%2013.08%2017.0867%2013.08%2016.1C13.08%2015.1133%2013.2467%2014.1933%2013.58%2013.34C13.9267%2012.4733%2014.4067%2011.72%2015.02%2011.08C15.6467%2010.44%2016.38%209.94%2017.22%209.58C18.06%209.22%2018.9667%209.04%2019.94%209.04C20.9933%209.04%2021.9333%209.22667%2022.76%209.6C23.6%209.97333%2024.3333%2010.4867%2024.96%2011.14L23.96%2012.14C23.48%2011.6067%2022.9%2011.1933%2022.22%2010.9C21.54%2010.5933%2020.78%2010.44%2019.94%2010.44C19.1667%2010.44%2018.4533%2010.58%2017.8%2010.86C17.16%2011.14%2016.5933%2011.54%2016.1%2012.06C15.62%2012.5667%2015.2467%2013.1667%2014.98%2013.86C14.7267%2014.54%2014.6%2015.2867%2014.6%2016.1C14.6%2016.9133%2014.7333%2017.6667%2015%2018.36C15.2667%2019.0533%2015.64%2019.66%2016.12%2020.18C16.6%2020.6867%2017.1667%2021.08%2017.82%2021.36C18.4733%2021.64%2019.1867%2021.78%2019.96%2021.78C20.84%2021.78%2021.62%2021.6267%2022.3%2021.32C22.9933%2021.0133%2023.58%2020.5933%2024.06%2020.06L25.06%2021.08C24.4467%2021.7333%2023.7133%2022.2533%2022.86%2022.64C22.0067%2023.0133%2021.0533%2023.2%2020%2023.2Z'%20fill='%23111112'/%3e%3cpath%20d='M9.3%2023V20.58H12.88C13.7867%2020.58%2014.58%2020.3933%2015.26%2020.02C15.94%2019.6333%2016.4667%2019.0933%2016.84%2018.4C17.2267%2017.7067%2017.42%2016.8867%2017.42%2015.94C17.42%2015.02%2017.2267%2014.22%2016.84%2013.54C16.4533%2012.8467%2015.92%2012.3133%2015.24%2011.94C14.56%2011.5533%2013.7733%2011.36%2012.88%2011.36H9.24V8.94H12.92C13.96%208.94%2014.92%209.11333%2015.8%209.46C16.6933%209.80667%2017.4667%2010.3%2018.12%2010.94C18.7867%2011.5667%2019.3%2012.3067%2019.66%2013.16C20.0333%2014.0133%2020.22%2014.9467%2020.22%2015.96C20.22%2016.9733%2020.0333%2017.9133%2019.66%2018.78C19.3%2019.6333%2018.7933%2020.38%2018.14%2021.02C17.4867%2021.6467%2016.7133%2022.1333%2015.82%2022.48C14.94%2022.8267%2013.9867%2023%2012.96%2023H9.3ZM7.44%2023V8.94H10.16V23H7.44Z'%20fill='%23111112'/%3e%3c/svg%3e",A2="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1476_70116)'%3e%3cpath%20d='M20%2020C22.2091%2020%2024%2018.2091%2024%2016C24%2013.7909%2022.2091%2012%2020%2012C17.7909%2012%2016%2013.7909%2016%2016C16%2018.2091%2017.7909%2020%2020%2020Z'%20stroke='%230CE7FA'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20%204H12C9.79086%204%208%205.79086%208%208C8%2010.2091%209.79086%2012%2012%2012H20C22.2091%2012%2024%2010.2091%2024%208C24%205.79086%2022.2091%204%2020%204Z'%20stroke='%230CE7FA'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2012C10.9391%2012%209.92172%2012.4214%209.17157%2013.1716C8.42143%2013.9217%208%2014.9391%208%2016C8%2017.0609%208.42143%2018.0783%209.17157%2018.8284C9.92172%2019.5786%2010.9391%2020%2012%2020M12%2020H16M12%2020C11.2089%2020%2010.4355%2020.2346%209.77772%2020.6741C9.11992%2021.1136%208.60723%2021.7384%208.30448%2022.4693C8.00173%2023.2002%207.92252%2024.0044%208.07686%2024.7804C8.2312%2025.5563%208.61216%2026.269%209.17157%2026.8284C9.73098%2027.3878%2010.4437%2027.7688%2011.2196%2027.9231C11.9956%2028.0775%2012.7998%2027.9983%2013.5307%2027.6955C14.2616%2027.3928%2014.8864%2026.8801%2015.3259%2026.2223C15.7654%2025.5645%2016%2024.7911%2016%2024V4'%20stroke='%230CE7FA'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1476_70116'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",M2="data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1476_70130)'%3e%3cpath%20d='M18.6665%204.69531V10.0286C18.6665%2010.3823%2018.807%2010.7214%2019.057%2010.9715C19.3071%2011.2215%2019.6462%2011.362%2019.9998%2011.362H25.3332'%20stroke='%23FA916B'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.6665%2028.6953H9.33317C8.62593%2028.6953%207.94765%2028.4144%207.44755%2027.9143C6.94746%2027.4142%206.6665%2026.7359%206.6665%2026.0286V7.36198C6.6665%206.65474%206.94746%205.97646%207.44755%205.47636C7.94765%204.97626%208.62593%204.69531%209.33317%204.69531H18.6665L25.3332%2011.362V26.0286C25.3332%2026.7359%2025.0522%2027.4142%2024.5521%2027.9143C24.052%2028.4144%2023.3737%2028.6953%2022.6665%2028.6953Z'%20stroke='%23FA916B'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2012.6953H13.3333'%20stroke='%23FA916B'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2018.0283H20'%20stroke='%23FA916B'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2023.3623H20'%20stroke='%23FA916B'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1476_70130'%3e%3crect%20width='32'%20height='32'%20fill='white'%20transform='translate(0%200.695312)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",B2="data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1476_70143)'%3e%3cpath%20d='M7.99984%2028.342C7.59388%2028.1076%207.25687%2027.7703%207.02279%2027.3642C6.7887%2026.9581%206.66582%2026.4974%206.66651%2026.0286V7.36198C6.66651%206.65474%206.94746%205.97646%207.44756%205.47636C7.94765%204.97626%208.62593%204.69531%209.33317%204.69531H18.6665L25.3332%2011.362V26.0286C25.3332%2026.7359%2025.0522%2027.4142%2024.5521%2027.9143C24.052%2028.4144%2023.3738%2028.6953%2022.6665%2028.6953H21.3332'%20stroke='%2350C793'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.6667%2023.3623C15.3739%2023.3623%2016.0522%2023.6433%2016.5523%2024.1434C17.0524%2024.6435%2017.3333%2025.3217%2017.3333%2026.029V28.6956C17.3333%2029.0493%2017.1929%2029.3884%2016.9428%2029.6384C16.6928%2029.8885%2016.3536%2030.029%2016%2030.029H13.3333C12.9797%2030.029%2012.6406%2029.8885%2012.3905%2029.6384C12.1405%2029.3884%2012%2029.0493%2012%2028.6956V26.029C12%2025.3217%2012.281%2024.6435%2012.781%2024.1434C13.2811%2023.6433%2013.9594%2023.3623%2014.6667%2023.3623Z'%20stroke='%2350C793'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.6668%207.3623H13.3335'%20stroke='%2350C793'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.3333%2010.0283H16'%20stroke='%2350C793'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.6668%2012.6953H13.3335'%20stroke='%2350C793'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.3333%2015.3623H16'%20stroke='%2350C793'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.6668%2018.0283H13.3335'%20stroke='%2350C793'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.3333%2020.6953H16'%20stroke='%2350C793'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1476_70143'%3e%3crect%20width='32'%20height='32'%20fill='white'%20transform='translate(0%200.695312)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",j2="data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1476_70159)'%3e%3cpath%20d='M18.6665%204.69482V10.0282C18.6665%2010.3818%2018.807%2010.7209%2019.057%2010.971C19.3071%2011.221%2019.6462%2011.3615%2019.9998%2011.3615H25.3332'%20stroke='%234669FA'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.6665%2028.6948H9.33317C8.62593%2028.6948%207.94765%2028.4139%207.44755%2027.9138C6.94746%2027.4137%206.6665%2026.7354%206.6665%2026.0282V7.36149C6.6665%206.65425%206.94746%205.97597%207.44755%205.47587C7.94765%204.97578%208.62593%204.69482%209.33317%204.69482H18.6665L25.3332%2011.3615V26.0282C25.3332%2026.7354%2025.0522%2027.4137%2024.5521%2027.9138C24.052%2028.4139%2023.3737%2028.6948%2022.6665%2028.6948Z'%20stroke='%234669FA'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.6665%2019.3618H15.9998V24.6951H17.3332'%20stroke='%234669FA'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2015.3618H16.0133'%20stroke='%234669FA'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1476_70159'%3e%3crect%20width='32'%20height='32'%20fill='white'%20transform='translate(0%200.694824)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",H2="data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1476_70170)'%3e%3cpath%20d='M20%2011.3613H20.0133'%20stroke='%23F1595C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.6666%206.02832H9.33325C7.12411%206.02832%205.33325%207.81918%205.33325%2010.0283V23.3617C5.33325%2025.5708%207.12411%2027.3617%209.33325%2027.3617H22.6666C24.8757%2027.3617%2026.6666%2025.5708%2026.6666%2023.3617V10.0283C26.6666%207.81918%2024.8757%206.02832%2022.6666%206.02832Z'%20stroke='%23F1595C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.33325%2020.6948L10.6666%2015.3614C11.2747%2014.7763%2011.9644%2014.4683%2012.6666%2014.4683C13.3687%2014.4683%2014.0585%2014.7763%2014.6666%2015.3614L21.3333%2022.0281'%20stroke='%23F1595C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.6667%2019.3613L20.0001%2018.0279C20.6082%2017.4428%2021.2979%2017.1348%2022.0001%2017.1348C22.7022%2017.1348%2023.392%2017.4428%2024.0001%2018.0279L26.6667%2020.6946'%20stroke='%23F1595C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1476_70170'%3e%3crect%20width='32'%20height='32'%20fill='white'%20transform='translate(0%200.694824)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",I2={components:{Card:F,Icon:B,Checkbox:D,Teamtable:w2,DropEvent:W,SelectMonth:q},data(){return{basicArea:T,basicAreaDark:E,pieChart:J,donutTwo:S,donutTwoDark:K,trackingParcel:P,message:U,TodoList:L,attributes:[{key:"today",highlight:{color:"gray-500",fillMode:"solid"},dates:new Date},{}],meets:[{img:M,title:"Meeting with client",date:"01 Nov 2021",meet:"Zoom meeting"},{img:v2,title:"Design meeting (team)",date:"01 Nov 2021",meet:"Skyp meeting"},{img:y2,title:"Background research",date:"01 Nov 2021",meet:"Google meeting"},{img:M,title:"Meeting with client",date:"01 Nov 2021",meet:"Zoom meeting"}],files:[{img:A2,title:"Dashboard.fig",date:"06 June 2021 / 155MB"},{img:M2,title:"Ecommerce.pdf",date:"06 June 2021 / 155MB"},{img:B2,title:"Job portal_app.zip",date:"06 June 2021 / 155MB"},{img:j2,title:"Ecommerce.pdf",date:"06 June 2021 / 155MB"},{img:H2,title:"Screenshot.jpg",date:"06 June 2021 / 155MB"}],statistics:[{title:"Total Task",count:"64",bg:"bg-info-500",text:"text-info-500",percent:"25.67% ",icon:"heroicons-outline:menu-alt-1"},{title:"Completed ",count:"45",bg:"bg-warning-500",text:"text-warning-500",percent:"8.67%",icon:"heroicons-outline:chart-pie"},{title:"Hours",count:"190",bg:"bg-primary-500",text:"text-primary-500",percent:"1.67%  ",icon:"heroicons-outline:clock"},{title:"Spendings",count:"$3,564",bg:"bg-success-500",text:"text-success-500",percent:"11.67%  ",icon:"heroicons-outline:calculator"}],Campaigns:[{name:"Channel",value:"roi"},{name:"Email",value:"40%"},{name:"Website",value:"28%"},{name:"Facebook",value:"34%"},{name:"Offline",value:"17%"}]}},methods:{removeTodo(C){this.TodoList=this.TodoList.filter(f=>f.id!==C)}}},V2={class:"card-auto space-y-5"},F2={class:"grid grid-cols-12 gap-5"},D2={class:"lg:col-span-8 col-span-12 space-y-5"},P2={class:"grid grid-cols-12 gap-5"},U2={class:"xl:col-span-8 col-span-12"},L2={class:"grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3"},N2={class:"block text-sm text-slate-600 font-medium dark:text-white mb-1"},T2={class:"block mb- text-2xl text-slate-900 dark:text-white font-medium"},E2={class:"xl:col-span-4 col-span-12"},J2={class:"bg-slate-50 dark:bg-slate-900 rounded-md p-4"},S2=e("span",{class:"block dark:text-slate-400 text-sm text-slate-600"},"Progress",-1),K2={class:"lg:col-span-4 col-span-12 space-y-5"},W2=e("button",{type:"button",class:"btn btn-dark btn-sm"}," Add More ",-1),q2={class:"-mx-6 custom-calender"},Q2={class:"divide-y divide-slate-100 dark:divide-slate-700"},R2={class:"flex space-x-2 rtl:space-x-reverse"},Z2={class:"flex-1 flex space-x-2 rtl:space-x-reverse"},O2={class:"flex-none"},G2={class:"h-8 w-8"},z2=["src"],Y2={class:"flex-1"},X2={class:"block text-slate-600 text-sm dark:text-slate-300 mb-1 font-medium"},$2={class:"flex font-normal text-xs dark:text-slate-400 text-slate-500"},ee={class:"text-base inline-block mr-1"},te={class:"flex-none"},se={class:"block text-xs text-slate-600 dark:text-slate-400"},oe={class:"grid xl:grid-cols-3 grid-cols-1 gap-5"},ne={class:"divide-y divide-slate-100 dark:divide-slate-700 -mx-6 -mb-6"},le={class:"flex-none flex space-x-2 items-center rtl:space-x-reverse"},ie=["src"],re={class:"flex-1 text-sm text-slate-600 dark:text-slate-300"},ae={class:"flex-none space-x-2 text-base text-secondary-500 rtl:space-x-reverse"},ce={key:0,type:"button"},de=["onClick"],pe={class:"divide-y divide-slate-100 dark:divide-slate-700 -mx-6 -mb-6"},he={class:"flex ltr:text-left rtl:text-right"},ue={class:"flex-none ltr:mr-3 rtl:ml-3"},ge={class:"h-8 w-8 bg-white dark:bg-slate-700 rounded-full relative"},me=["src"],_e={class:"flex-1"},xe={class:"text-slate-800 dark:text-slate-300 text-sm font-medium mb-1`"},ke={class:"text-xs hover:text-[#68768A] font-normal text-slate-600 dark:text-slate-300"},fe=e("div",{class:"text-slate-400 dark:text-slate-400 text-xs mt-1"}," 3 min ago ",-1),be={key:0,class:"flex-0"},Ce={class:"h-4 w-4 bg-danger-500 border border-white rounded-full text-[10px] flex items-center justify-center text-white"},we={class:"relative ltr:pl-2 rtl:pr-2"},ve={class:"p-[10px] relative top-[-20px]"},ye={class:"text-sm font-medium dark:text-slate-400-900 mb-1 text-slate-600"},Ae={class:"text-xs capitalize dark:text-slate-400"},Me={class:"grid grid-cols-12 gap-5"},Be={class:"xl:col-span-8 lg:col-span-7 col-span-12"},je={class:"xl:col-span-4 lg:col-span-5 col-span-12"},He={class:"divide-y divide-slate-100 dark:divide-slate-700"},Ie={class:"flex space-x-2 rtl:space-x-reverse"},Ve={class:"flex-1 flex space-x-2 rtl:space-x-reverse"},Fe={class:"flex-none"},De={class:"h-8 w-8"},Pe=["src"],Ue={class:"flex-1"},Le={class:"block text-slate-600 text-sm dark:text-slate-300"},Ne={class:"block font-normal text-xs text-slate-500 mt-1"},Te=e("div",{class:"flex-none"},[e("button",{type:"button",class:"text-xs text-slate-900 dark:text-white"}," Download ")],-1);function Ee(C,f,I,V,n,A){const k=c("Icon"),b=c("apexchart"),p=c("Card"),u=c("DropEvent"),w=c("v-calendar"),v=c("Checkbox"),r=c("router-link"),g=c("SelectMonth"),y=c("Teamtable");return o(),l("div",null,[e("div",V2,[e("div",F2,[e("div",D2,[s(p,null,{default:i(()=>[e("div",P2,[e("div",U2,[e("div",L2,[(o(!0),l(m,null,_(n.statistics,(t,d)=>(o(),l("div",{key:d,class:x([t.bg,"rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-50 text-center"])},[e("div",{class:x(["mx-auto h-10 w-10 flex flex-col items-center justify-center rounded-full bg-white text-2xl mb-4",t.text])},[s(k,{icon:t.icon},null,8,["icon"])],2),e("span",N2,a(t.title),1),e("span",T2,a(t.count),1)],2))),128))])]),e("div",E2,[e("div",J2,[S2,s(b,{type:"donut",height:"113",options:this.$store.themeSettingsStore.isDark?n.donutTwoDark.chartOptions:n.donutTwo.chartOptions,series:n.donutTwo.series},null,8,["options","series"])])])])]),_:1}),s(p,{title:"Deal distribution by stage"},{header:i(()=>[s(u)]),default:i(()=>[s(b,{type:"area",height:"310",options:this.$store.themeSettingsStore.isDark?n.basicAreaDark.chartOptions:n.basicArea.chartOptions,series:n.basicArea.series},null,8,["options","series"])]),_:1})]),e("div",K2,[s(p,{title:"Notes"},{header:i(()=>[W2]),default:i(()=>[e("div",q2,[s(w,{"is-expanded":"",attributes:n.attributes,"is-dark":this.$store.themeSettingsStore.isDark},null,8,["attributes","is-dark"])]),e("ul",Q2,[(o(!0),l(m,null,_(n.meets,(t,d)=>(o(),l("li",{key:d,class:"block py-[10px]"},[e("div",R2,[e("div",Z2,[e("div",O2,[e("div",G2,[e("img",{src:t.img,alt:"",class:"block w-full h-full object-cover rounded-full border hover:border-white border-transparent"},null,8,z2)])]),e("div",Y2,[e("span",X2,a(t.title),1),e("span",$2,[e("span",ee,[s(k,{icon:"heroicons-outline:video-camera"})]),H(" "+a(t.meet),1)])])]),e("div",te,[e("span",se,a(t.date),1)])])]))),128))])]),_:1})])]),e("div",oe,[s(p,{title:"Task list"},{header:i(()=>[s(u)]),default:i(()=>[e("ul",ne,[(o(!0),l(m,null,_(n.TodoList,t=>(o(),l("li",{class:"flex items-center px-6 space-x-4 py-4 rtl:space-x-reverse",key:t.id},[e("div",le,[s(v,{modelValue:t.isDone,"onUpdate:modelValue":d=>t.isDone=d},null,8,["modelValue","onUpdate:modelValue"]),e("div",{class:x(["h-8 w-8 rounded-full text-white",t.isDone?" opacity-20":" opacity-100"])},[e("img",{src:t.image,alt:"",class:"block w-full h-full object-cover rounded-full"},null,8,ie)],2)]),e("div",{class:x(["flex-1 flex",t.isDone?"line-through dark:text-white":""])},[e("span",re,a(t.title.slice(0,20)+"..."),1),e("span",ae,[t.isDone===!1?(o(),l("button",ce,[s(k,{icon:"heroicons-outline:pencil-alt"})])):h("",!0),e("button",{type:"button",onClick:d=>A.removeTodo(t.id),class:"transition duration-150 hover:text-danger-500"},[s(k,{icon:"heroicons-outline:trash"})],8,de)])],2)]))),128))])]),_:1}),s(p,{title:"Messages"},{header:i(()=>[s(u)]),default:i(()=>[e("ul",pe,[(o(!0),l(m,null,_(n.message.slice(0,5),(t,d)=>(o(),l("li",{key:d},[s(r,{to:"chat",class:"hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-slate-800 text-slate-600 dark:text-slate-300 block w-full px-4 py-3 text-sm mb-2 last:mb-0 cursor-pointer"},{default:i(()=>[e("div",he,[e("div",ue,[e("div",ge,[e("span",{class:x(`${t.active?"bg-secondary-500":"bg-success-500"} w-[10px] h-[10px] rounded-full border border-white dark:border-slate-700  inline-block absolute right-0 top-0`)},null,2),e("img",{src:t.image,alt:"",class:"block w-full h-full object-cover rounded-full border hover:border-white border-transparent"},null,8,me)])]),e("div",_e,[e("div",xe,a(t.title),1),e("div",ke,a(t.desc),1),fe]),t.hasnotifaction?(o(),l("div",be,[e("span",Ce,a(t.notification_count),1)])):h("",!0)])]),_:2},1024)]))),128))])]),_:1}),s(p,{title:"Activity"},{header:i(()=>[s(u)]),default:i(()=>[e("ul",we,[(o(!0),l(m,null,_(n.trackingParcel.slice(0,5),(t,d)=>(o(),l("li",{key:d,class:x([t.status==="ok"?"before:opacity-100":" before:opacity-50","ltr:border-l-2 rtl:border-r-2 border-slate-100 dark:border-slate-700 pb-4 last:border-none ltr:pl-[22px] rtl:pr-[22px] relative before:absolute ltr:before:left-[-8px] rtl:before:-right-2 before:top-[0px] before:rounded-full before:w-4 before:h-4 before:bg-slate-900 dark:before:bg-slate-600 before:leading-[2px] before:content-[url('@/assets/images/all-img/ck.svg')]"])},[e("div",ve,[e("h2",ye,a(t.title),1),e("p",Ae,a(t.date),1)])],2))),128))])]),_:1})]),e("div",Me,[e("div",Be,[s(p,{title:"Team members",noborder:""},{header:i(()=>[s(g)]),default:i(()=>[s(y)]),_:1})]),e("div",je,[s(p,{title:"Files"},{header:i(()=>[s(u)]),default:i(()=>[e("ul",He,[(o(!0),l(m,null,_(n.files,(t,d)=>(o(),l("li",{key:d,class:"block py-[8px]"},[e("div",Ie,[e("div",Ve,[e("div",Fe,[e("div",De,[e("img",{src:t.img,alt:"",class:"block w-full h-full object-cover rounded-full border hover:border-white border-transparent"},null,8,Pe)])]),e("div",Ue,[e("span",Le,a(t.title),1),e("span",Ne,a(t.date),1)])]),Te])]))),128))])]),_:1})])])])])}const a0=j(I2,[["render",Ee]]);export{a0 as default};
