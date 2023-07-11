import{o as E,c as k,a,r as m,w as Q,d as O,b as f,e as M,f as P,A as C,F,B as le,p as q,i as B,C as Xe,D as Qe,E as Ye,n as Ke,k as ae,j as p,h as S,u as T,q as Je,l as ue,t as G,s as Ze,m as J,g as et,G as be,H as xe}from"./index-15cc0426.js";import{f as de,a as ce,_ as re}from"./InputForm-1268c34f.js";import{_ as V}from"./ButtonPrimary-ecbc244e.js";import{d as tt,e as ot,m as Y,H,S as j,o as b,u as oe,P as te,b as A,T as lt,t as me,p as nt,l as Z,F as at,N as Ee,a as rt}from"./use-outside-click-c63e230e.js";import{t as st,r as it,h as Se,S as ut}from"./transition-45ed099b.js";import{_ as dt}from"./HeaderPage-5c251d77.js";function Te(e,t){return E(),k("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[a("path",{d:"M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13z"})])}function ke(e,t){return E(),k("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[a("path",{d:"M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"})])}function ct(e,t){return E(),k("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[a("path",{d:"M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"})])}function se(e,t){return E(),k("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[a("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"})])}var X=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(X||{});function pt(){let e=m(0);return tt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Me(e,t,o,n){ot.isServer||Q(l=>{e=e??window,e.addEventListener(t,o,n),l(()=>e.removeEventListener(t,o,n))})}function Pe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function vt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Oe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let o of e.value){let n=b(o);n instanceof HTMLElement&&t.add(n)}return t}var Fe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Fe||{});let I=Object.assign(O({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:m(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:o,expose:n}){let l=m(null);n({el:l,$el:l});let r=f(()=>Y(l)),s=m(!1);M(()=>s.value=!0),P(()=>s.value=!1),mt({ownerDocument:r},f(()=>s.value&&!!(e.features&16)));let i=ht({ownerDocument:r,container:l,initialFocus:f(()=>e.initialFocus)},f(()=>s.value&&!!(e.features&2)));gt({ownerDocument:r,container:l,containers:e.containers,previousActiveElement:i},f(()=>s.value&&!!(e.features&8)));let d=pt();function u(c){let y=b(l);y&&(x=>x())(()=>{oe(d.value,{[X.Forwards]:()=>{te(y,A.First,{skipElements:[c.relatedTarget]})},[X.Backwards]:()=>{te(y,A.Last,{skipElements:[c.relatedTarget]})}})})}let h=m(!1);function _(c){c.key==="Tab"&&(h.value=!0,requestAnimationFrame(()=>{h.value=!1}))}function g(c){if(!s.value)return;let y=Oe(e.containers);b(l)instanceof HTMLElement&&y.add(b(l));let x=c.relatedTarget;x instanceof HTMLElement&&x.dataset.headlessuiFocusGuard!=="true"&&(Ae(y,x)||(h.value?te(b(l),oe(d.value,{[X.Forwards]:()=>A.Next,[X.Backwards]:()=>A.Previous})|A.WrapAround,{relativeTo:c.target}):c.target instanceof HTMLElement&&j(c.target)))}return()=>{let c={},y={ref:l,onKeydown:_,onFocusout:g},{features:x,initialFocus:ge,containers:_e,...z}=e;return C(F,[!!(x&4)&&C(de,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ce.Focusable}),H({ourProps:y,theirProps:{...t,...z},slot:c,attrs:t,slots:o,name:"FocusTrap"}),!!(x&4)&&C(de,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ce.Focusable})])}}}),{features:Fe}),D=[];vt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(o=>o!=null&&o.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ft(e){let t=m(D.slice());return le([e],([o],[n])=>{n===!0&&o===!1?Pe(()=>{t.value.splice(0)}):n===!1&&o===!0&&(t.value=D.slice())},{flush:"post"}),()=>{var o;return(o=t.value.find(n=>n!=null&&n.isConnected))!=null?o:null}}function mt({ownerDocument:e},t){let o=ft(t);M(()=>{Q(()=>{var n,l;t.value||((n=e.value)==null?void 0:n.activeElement)===((l=e.value)==null?void 0:l.body)&&j(o())},{flush:"post"})}),P(()=>{t.value&&j(o())})}function ht({ownerDocument:e,container:t,initialFocus:o},n){let l=m(null),r=m(!1);return M(()=>r.value=!0),P(()=>r.value=!1),M(()=>{le([t,o,n],(s,i)=>{if(s.every((u,h)=>(i==null?void 0:i[h])===u)||!n.value)return;let d=b(t);d&&Pe(()=>{var u,h;if(!r.value)return;let _=b(o),g=(u=e.value)==null?void 0:u.activeElement;if(_){if(_===g){l.value=g;return}}else if(d.contains(g)){l.value=g;return}_?j(_):te(d,A.First|A.NoScroll)===lt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(h=e.value)==null?void 0:h.activeElement})},{immediate:!0,flush:"post"})}),l}function gt({ownerDocument:e,container:t,containers:o,previousActiveElement:n},l){var r;Me((r=e.value)==null?void 0:r.defaultView,"focus",s=>{if(!l.value)return;let i=Oe(o);b(t)instanceof HTMLElement&&i.add(b(t));let d=n.value;if(!d)return;let u=s.target;u&&u instanceof HTMLElement?Ae(i,u)?(n.value=u,j(u)):(s.preventDefault(),s.stopPropagation(),j(d)):j(n.value)},!0)}function Ae(e,t){for(let o of e)if(o.contains(t))return!0;return!1}let ie=new Map,W=new Map;function Ce(e,t=m(!0)){Q(o=>{var n;if(!t.value)return;let l=b(e);if(!l)return;o(function(){var s;if(!l)return;let i=(s=W.get(l))!=null?s:1;if(i===1?W.delete(l):W.set(l,i-1),i!==1)return;let d=ie.get(l);d&&(d["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",d["aria-hidden"]),l.inert=d.inert,ie.delete(l))});let r=(n=W.get(l))!=null?n:0;W.set(l,r+1),r===0&&(ie.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}let De=Symbol("ForcePortalRootContext");function _t(){return B(De,!1)}let $e=O({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:o}){return q(De,e.force),()=>{let{force:n,...l}=e;return H({theirProps:l,ourProps:{},slot:{},slots:t,attrs:o,name:"ForcePortalRoot"})}}});function yt(e){let t=Y(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let o=t.getElementById("headlessui-portal-root");if(o)return o;let n=t.createElement("div");return n.setAttribute("id","headlessui-portal-root"),t.body.appendChild(n)}let wt=O({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:o}){let n=m(null),l=f(()=>Y(n)),r=_t(),s=B(Re,null),i=m(r===!0||s==null?yt(n.value):s.resolveTarget());Q(()=>{r||s!=null&&(i.value=s.resolveTarget())});let d=B(pe,null);return M(()=>{let u=b(n);u&&d&&P(d.register(u))}),P(()=>{var u,h;let _=(u=l.value)==null?void 0:u.getElementById("headlessui-portal-root");_&&i.value===_&&i.value.children.length<=0&&((h=i.value.parentElement)==null||h.removeChild(i.value))}),()=>{if(i.value===null)return null;let u={ref:n,"data-headlessui-portal":""};return C(Xe,{to:i.value},H({ourProps:u,theirProps:e,slot:{},attrs:o,slots:t,name:"Portal"}))}}}),pe=Symbol("PortalParentContext");function bt(){let e=B(pe,null),t=m([]);function o(r){return t.value.push(r),e&&e.register(r),()=>n(r)}function n(r){let s=t.value.indexOf(r);s!==-1&&t.value.splice(s,1),e&&e.unregister(r)}let l={register:o,unregister:n,portals:t};return[t,O({name:"PortalWrapper",setup(r,{slots:s}){return q(pe,l),()=>{var i;return(i=s.default)==null?void 0:i.call(s)}}})]}let Re=Symbol("PortalGroupContext"),xt=O({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:o}){let n=Qe({resolveTarget(){return e.target}});return q(Re,n),()=>{let{target:l,...r}=e;return H({theirProps:r,ourProps:{},slot:{},attrs:t,slots:o,name:"PortalGroup"})}}}),je=Symbol("StackContext");var ve=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ve||{});function Et(){return B(je,()=>{})}function St({type:e,enabled:t,element:o,onUpdate:n}){let l=Et();function r(...s){n==null||n(...s),l(...s)}M(()=>{le(t,(s,i)=>{s?r(0,e,o):i===!0&&r(1,e,o)},{immediate:!0,flush:"sync"})}),P(()=>{t.value&&r(1,e,o)}),q(je,r)}let Tt=Symbol("DescriptionContext");function kt({slot:e=m({}),name:t="Description",props:o={}}={}){let n=m([]);function l(r){return n.value.push(r),()=>{let s=n.value.indexOf(r);s!==-1&&n.value.splice(s,1)}}return q(Tt,{register:l,slot:e,name:t,props:o}),f(()=>n.value.length>0?n.value.join(" "):void 0)}function Ct(e){let t=Ye(e.getSnapshot());return P(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function $t(e,t){let o=e(),n=new Set;return{getSnapshot(){return o},subscribe(l){return n.add(l),()=>n.delete(l)},dispatch(l,...r){let s=t[l].call(o,...r);s&&(o=s,n.forEach(i=>i()))}}}function Lt(){let e;return{before({doc:t}){var o;let n=t.documentElement;e=((o=t.defaultView)!=null?o:window).innerWidth-n.clientWidth},after({doc:t,d:o}){let n=t.documentElement,l=n.clientWidth-n.offsetWidth,r=e-l;o.style(n,"paddingRight",`${r}px`)}}}function Mt(){if(!st())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:o,meta:n}){function l(s){return n.containers.flatMap(i=>i()).some(i=>i.contains(s))}o.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let r=null;o.addEventListener(t,"click",s=>{if(s.target instanceof HTMLElement)try{let i=s.target.closest("a");if(!i)return;let{hash:d}=new URL(i.href),u=t.querySelector(d);u&&!l(u)&&(r=u)}catch{}},!0),o.addEventListener(t,"touchmove",s=>{s.target instanceof HTMLElement&&!l(s.target)&&s.preventDefault()},{passive:!1}),o.add(()=>{window.scrollTo(0,window.pageYOffset+e),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null)})}}}function Pt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ot(e){let t={};for(let o of e)Object.assign(t,o(t));return t}let R=$t(()=>new Map,{PUSH(e,t){var o;let n=(o=this.get(e))!=null?o:{doc:e,count:0,d:it(),meta:new Set};return n.count++,n.meta.add(t),this.set(e,n),this},POP(e,t){let o=this.get(e);return o&&(o.count--,o.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:o}){let n={doc:e,d:t,meta:Ot(o)},l=[Mt(),Lt(),Pt()];l.forEach(({before:r})=>r==null?void 0:r(n)),l.forEach(({after:r})=>r==null?void 0:r(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});R.subscribe(()=>{let e=R.getSnapshot(),t=new Map;for(let[o]of e)t.set(o,o.documentElement.style.overflow);for(let o of e.values()){let n=t.get(o.doc)==="hidden",l=o.count!==0;(l&&!n||!l&&n)&&R.dispatch(o.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",o),o.count===0&&R.dispatch("TEARDOWN",o)}});function Ft(e,t,o){let n=Ct(R),l=f(()=>{let r=e.value?n.value.get(e.value):void 0;return r?r.count>0:!1});return le([e,t],([r,s],[i],d)=>{if(!r||!s)return;R.dispatch("PUSH",r,o);let u=!1;d(()=>{u||(R.dispatch("POP",i??r,o),u=!0)})},{immediate:!0}),l}function At({defaultContainers:e=[],portals:t}={}){let o=m(null),n=Y(o);function l(){var r;let s=[];for(let i of e)i!==null&&(i instanceof HTMLElement?s.push(i):"value"in i&&i.value instanceof HTMLElement&&s.push(i.value));if(t!=null&&t.value)for(let i of t.value)s.push(i);for(let i of(r=n==null?void 0:n.querySelectorAll("html > *, body > *"))!=null?r:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(b(o))||s.some(d=>i.contains(d))||s.push(i));return s}return{resolveContainers:l,contains(r){return l().some(s=>s.contains(r))},mainTreeNodeRef:o,MainTreeNode(){return C(de,{features:ce.Hidden,ref:o})}}}var Dt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Dt||{});let fe=Symbol("DialogContext");function he(e){let t=B(fe,null);if(t===null){let o=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,he),o}return t}let ee="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Rt=O({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ee},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${me()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:o,slots:n,expose:l}){var r;let s=m(!1);M(()=>{s.value=!0});let i=m(0),d=nt(),u=f(()=>e.open===ee&&d!==null?(d.value&Z.Open)===Z.Open:e.open),h=m(null),_=f(()=>Y(h));if(l({el:h,$el:h}),!(e.open!==ee||d!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===ee?void 0:e.open}`);let g=f(()=>s.value&&u.value?0:1),c=f(()=>g.value===0),y=f(()=>i.value>1),x=B(fe,null)!==null,[ge,_e]=bt(),{resolveContainers:z,mainTreeNodeRef:ye,MainTreeNode:Be}=At({portals:ge,defaultContainers:[f(()=>{var v;return(v=U.panelRef.value)!=null?v:h.value})]}),He=f(()=>y.value?"parent":"leaf"),we=f(()=>d!==null?(d.value&Z.Closing)===Z.Closing:!1),Ne=f(()=>x||we.value?!1:c.value),Ve=f(()=>{var v,w,$;return($=Array.from((w=(v=_.value)==null?void 0:v.querySelectorAll("body > *"))!=null?w:[]).find(L=>L.id==="headlessui-portal-root"?!1:L.contains(b(ye))&&L instanceof HTMLElement))!=null?$:null});Ce(Ve,Ne);let qe=f(()=>y.value?!0:c.value),ze=f(()=>{var v,w,$;return($=Array.from((w=(v=_.value)==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(L=>L.contains(b(ye))&&L instanceof HTMLElement))!=null?$:null});Ce(ze,qe),St({type:"Dialog",enabled:f(()=>g.value===0),element:h,onUpdate:(v,w)=>{if(w==="Dialog")return oe(v,{[ve.Add]:()=>i.value+=1,[ve.Remove]:()=>i.value-=1})}});let Ue=kt({name:"DialogDescription",slot:f(()=>({open:u.value}))}),K=m(null),U={titleId:K,panelRef:m(null),dialogState:g,setTitleId(v){K.value!==v&&(K.value=v)},close(){t("close",!1)}};q(fe,U);let Ie=f(()=>!(!c.value||y.value));at(z,(v,w)=>{U.close(),Ke(()=>w==null?void 0:w.focus())},Ie);let We=f(()=>!(y.value||g.value!==0));Me((r=_.value)==null?void 0:r.defaultView,"keydown",v=>{We.value&&(v.defaultPrevented||v.key===rt.Escape&&(v.preventDefault(),v.stopPropagation(),U.close()))});let Ge=f(()=>!(we.value||g.value!==0||x));return Ft(_,Ge,v=>{var w;return{containers:[...(w=v.containers)!=null?w:[],z]}}),Q(v=>{if(g.value!==0)return;let w=b(h);if(!w)return;let $=new ResizeObserver(L=>{for(let ne of L){let N=ne.target.getBoundingClientRect();N.x===0&&N.y===0&&N.width===0&&N.height===0&&U.close()}});$.observe(w),v(()=>$.disconnect())}),()=>{let{id:v,open:w,initialFocus:$,...L}=e,ne={...o,ref:h,id:v,role:"dialog","aria-modal":g.value===0?!0:void 0,"aria-labelledby":K.value,"aria-describedby":Ue.value},N={open:g.value===0};return C($e,{force:!0},()=>[C(wt,()=>C(xt,{target:h.value},()=>C($e,{force:!1},()=>C(I,{initialFocus:$,containers:z,features:c.value?oe(He.value,{parent:I.features.RestoreFocus,leaf:I.features.All&~I.features.FocusLock}):I.features.None},()=>C(_e,{},()=>H({ourProps:ne,theirProps:{...L,...o},slot:N,attrs:o,slots:n,visible:g.value===0,features:Ee.RenderStrategy|Ee.Static,name:"Dialog"})))))),C(Be)])}}}),jt=O({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${me()}`}},setup(e,{attrs:t,slots:o,expose:n}){let l=he("DialogPanel");n({el:l.panelRef,$el:l.panelRef});function r(s){s.stopPropagation()}return()=>{let{id:s,...i}=e,d={id:s,ref:l.panelRef,onClick:r};return H({ourProps:d,theirProps:i,slot:{open:l.dialogState.value===0},attrs:t,slots:o,name:"DialogPanel"})}}}),Bt=O({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${me()}`}},setup(e,{attrs:t,slots:o}){let n=he("DialogTitle");return M(()=>{n.setTitleId(e.id),P(()=>n.setTitleId(null))}),()=>{let{id:l,...r}=e;return H({ourProps:{id:l},theirProps:r,slot:{open:n.dialogState.value===0},attrs:t,slots:o,name:"DialogTitle"})}}});const Ht={class:""},Nt=a("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Vt={class:"fixed inset-0 overflow-y-auto"},qt={class:"flex min-h-full items-center justify-center p-4 text-center"},zt={class:"mt-2"},Ut=a("p",{class:"text-sm text-gray-500"}," contenido del modal ",-1),It={class:"mt-2 flex justify-end"},Le={__name:"HModal",props:{title:String,density:{type:String,default:"max-w-md"}},setup(e){const t=m(!1);function o(){t.value=!1}function n(){t.value=!0}return(l,r)=>(E(),k(F,null,[a("div",Ht,[ae(l.$slots,"activator",{modal:()=>t.value=!t.value},()=>[a("button",{type:"button",onClick:n,class:"rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"}," Open dialog ")])]),p(T(ut),{appear:"",show:t.value,as:"template"},{default:S(()=>[p(T(Rt),{as:"div",onClose:o,class:"relative z-10"},{default:S(()=>[p(T(Se),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:S(()=>[Nt]),_:1}),a("div",Vt,[a("div",qt,[p(T(Se),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:S(()=>[p(T(jt),{class:Je(["w-full transform overflow-hidden rounded-md bg-white p-4 text-left align-middle shadow-xl transition-all",e.density])},{default:S(()=>[p(T(Bt),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:S(()=>[ue(G(e.title),1)]),_:1}),a("div",zt,[ae(l.$slots,"content",{modal:()=>t.value=!t.value},()=>[Ut])]),a("div",It,[ae(l.$slots,"actions",{modal:()=>t.value=!t.value},()=>[a("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:o}," Cerrar ")])])]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"])],64))}},Wt={class:"flex"},Gt={class:"flex-none w-1/5 h-screen bg-white shadow-inner p-4"},Xt=a("h3",{class:"text-md mb-3 font-bold"}," Topicos ",-1),Qt={class:"group p-3 border flex justify-between rounded-lg cursor-pointer mb-2"},Yt={class:"flex items-center"},Kt={class:"h-5 w-5 text-gray-400"},Jt={class:"ms-3 font-medium text-gray-600"},Zt={class:""},eo={class:"group-hover:bg-slate-300 group-hover:text-white h-6 w-6 text-gray-400 rounded-md"},to={class:"group p-3 border border-gray-300 flex justify-between border-dashed rounded-lg bg-gray-50 cursor-pointer mb-2"},oo={class:"flex items-center"},lo={class:"h-5 w-5 text-gray-400"},no=a("div",{class:"ms-3 font-medium text-gray-600"}," Añadir topico ",-1),ao={class:"grow py-4 px-4"},ro={class:"max-w-4xl mx-auto"},so={class:"bg-white rounded-md p-4 mb-4"},io={class:"flex justify-between items-start"},uo=a("div",null,[a("h2",{class:"text-lg font-medium text-gray-600 mb-3"},"Titulo de la encuesta"),a("p",{class:"text-sm font-medium text-gray-600"},"Descripcion de la encuesta")],-1),co={class:"h-3 w-3"},po={class:"bg-white rounded-md"},vo={class:"p-4"},fo=["onClick"],mo={class:"flex items-center"},ho={class:"h-5 w-5 text-gray-400"},go=a("div",{class:"ms-3 font-medium text-gray-600"}," Añadir pregunta ",-1),_o=["onClick"],yo={class:"mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"},wo={class:"h-6 w-6 text-gray-600 group-hover:text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},bo=["d"],xo={class:"font-semibold text-gray-900"},Eo={class:"mt-1 text-gray-600"},So={key:1,class:"grid grid-cols-1 divide-y"},To={class:"py-2"},ko={class:"py-2"},Co=a("h4",{class:"text-sm font-medium"}," Opciones ",-1),$o={class:"flex justify-between items-center"},Lo={class:"w-11/12"},Mo=["onClick"],Po=a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15"})],-1),Oo=[Po],Fo={class:"py-2 flex justify-between items-center"},Ao={class:"flex-none w-1/5 shadow p-4"},Do=a("h3",{class:"text-md mb-3 font-bold"}," Secciones ",-1),Ro={class:"group p-3 border flex justify-between rounded-lg cursor-pointer mb-2"},jo={class:"flex items-center"},Bo={class:"h-5 w-5 text-gray-400"},Ho={class:"ms-3 font-medium text-gray-600"},No={class:""},Vo={class:"group-hover:bg-slate-300 group-hover:text-white h-6 w-6 text-gray-400 rounded-md"},qo={class:"group p-3 border border-gray-300 flex justify-between border-dashed rounded-lg bg-gray-50 cursor-pointer mb-2"},zo={class:"flex items-center"},Uo={class:"h-5 w-5 text-gray-400"},Io=a("div",{class:"ms-3 font-medium text-gray-600"}," Añadir Seccion ",-1),Jo={__name:"create",setup(e){const t=m({title:"Encuesta de ejemplo",topics:[{title:"Seccion 1",secctions:[{title:"Seccion 1",description:"Descripcion de la seccion ",questions:[]}]}]}),o=m(null),n=[{title:"Texto de respuesta",description:"Permite escribir un texto pequeño",svg:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12",structure:{type:"TEXT",required:!0,inline:!0}},{title:"Seleccion Simple",description:"Permite elegir una opcion",svg:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",structure:{type:"RADIO",required:!0,inline:!0}},{title:"Seleccion simple despleable",description:"Permite elegir una opcion de un desplegable",svg:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9",structure:{type:"SELECT",required:!0,inline:!0}},{title:"Seleccion multiple",description:"Permite seleccionar multiples opciones",svg:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",structure:{type:"CHECKBOX",required:!0,inline:!0}}],l=m({statement:"",options:[{title:"Option 1"},{title:"Option 2"},{title:"Option 3"}]}),r=d=>{o.value=d,l.value={...l.value,...d.structure}},s=()=>{l.value.options.push({title:""})},i=()=>{t.value.topics[0].secctions[0].questions.push({...l.value})};return(d,u)=>{const h=Ze("router-link");return E(),k(F,null,[p(dt,{title:"Nueva Encuesta"},{actions:S(()=>[p(h,{to:"/admin/surveys/create"},{default:S(()=>[p(V,{title:"Nueva"})]),_:1})]),_:1}),a("div",Wt,[a("div",Gt,[Xt,a("ul",null,[(E(),k(F,null,J(2,_=>a("li",Qt,[a("div",Yt,[a("div",Kt,[p(T(Te))]),a("div",Jt," Topico "+G(_),1)]),a("div",Zt,[a("div",eo,[p(T(ke))])])])),64)),a("li",to,[a("div",oo,[a("div",lo,[p(T(se))]),no])])])]),a("div",ao,[a("div",ro,[a("div",so,[a("div",io,[uo,p(V,null,{content:S(()=>[a("div",co,[p(T(ct))])]),_:1})])]),a("div",po,[a("div",vo,[p(Le,null,{activator:S(({modal:_})=>[a("button",{class:"group p-3 border border-gray-300 flex justify-center border-dashed rounded-lg bg-gray-50 cursor-pointer w-full",onClick:_},[a("div",mo,[a("div",ho,[p(T(se))]),go])],8,fo)]),content:S(({modal:_})=>[p(Le,{density:"max-w-3xl"},{activator:S(({modal:g})=>[(E(),k(F,null,J(n,c=>a("div",{class:"group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 cursor-pointer",onClick:y=>{r(c),g()}},[a("div",yo,[(E(),k("svg",wo,[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:c.svg},null,8,bo)]))]),a("div",null,[a("p",xo,G(c.title),1),a("p",Eo,G(c.description),1)])],8,_o)),64))]),content:S(({modal:g})=>[o.value.structure.type=="TEXT"?(E(),et(re,{key:0,label:"Enunciado de la pregunta"})):(E(),k("div",So,[a("div",To,[p(re,{modelValue:l.value.statement,"onUpdate:modelValue":u[0]||(u[0]=c=>l.value.statement=c),label:"Enunciado de la pregunta"},null,8,["modelValue"])]),a("div",ko,[Co,(E(!0),k(F,null,J(l.value.options,(c,y)=>(E(),k("div",{key:y,class:"mb-2"},[a("div",$o,[a("div",Lo,[p(re,{modelValue:c.title,"onUpdate:modelValue":x=>c.title=x,placeholder:"Opcion 1"},null,8,["modelValue","onUpdate:modelValue"])]),a("button",{class:"flex-none bg-gray-200 p-2 rounded-md",onClick:x=>l.value.options.splice(y,1)},Oo,8,Mo)])]))),128))]),a("div",Fo,[a("div",null,[a("p",null,[be(a("input",{"onUpdate:modelValue":u[1]||(u[1]=c=>l.value.required=c),type:"checkbox",class:"mb-1 me-2"},null,512),[[xe,l.value.required]]),ue(" Requerido ")]),a("p",null,[be(a("input",{"onUpdate:modelValue":u[2]||(u[2]=c=>l.value.inline=c),type:"checkbox",class:"mb-1 me-2"},null,512),[[xe,l.value.inline]]),ue(" Inline ")])]),a("div",null,[p(V,{title:"Agregar opcion",class:"me-2",onClick:s}),p(V,{title:"Agregar 'otra' respuesta "})])])]))]),actions:S(({modal:g})=>[p(V,{title:"Cerrar",onClick:g},null,8,["onClick"]),p(V,{title:"Guardar",class:"ms-2",onClick:c=>{i(),g()}},null,8,["onClick"])]),_:2},1024)]),_:1})])])])]),a("div",Ao,[Do,a("ul",null,[(E(),k(F,null,J(2,_=>a("li",Ro,[a("div",jo,[a("div",Bo,[p(T(Te))]),a("div",Ho," Seccion "+G(_),1)]),a("div",No,[a("div",Vo,[p(T(ke))])])])),64)),a("li",qo,[a("div",zo,[a("div",Uo,[p(T(se))]),Io])])])])])],64)}}};export{Jo as default};
