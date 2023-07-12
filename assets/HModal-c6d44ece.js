import{d as et,e as Be,m as le,H,S as I,o as y,u as W,P as ce,b as N,f as tt,t as fe,p as He,F as nt,l as $,N as Se,a as lt,C as at,c as rt,T as ot,g as U}from"./use-outside-click-974b3af5.js";import{f as Te,a as Le}from"./InputForm-8049f59b.js";import{r as f,w as k,d as x,b as c,e as T,f as O,O as S,F as _e,K as ae,p as B,i as A,Y as it,Z as ut,$ as st,n as dt,q as je,o as ct,c as ft,a as R,k as be,j as z,h as K,u as Q,l as vt,t as pt}from"./index-83fc9fff.js";function Ne(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function mt(){return/Android/gi.test(window.navigator.userAgent)}function on(){return Ne()||mt()}function ve(){let e=[],t={addEventListener(n,l,a,r){return n.addEventListener(l,a,r),t.add(()=>n.removeEventListener(l,a,r))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},style(n,l,a){let r=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:a}),this.add(()=>{Object.assign(n.style,{[l]:r})})},group(n){let l=ve();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let a of e.splice(l,1))a()}},dispose(){for(let n of e.splice(0))n()}};return t}var ne=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ne||{});function gt(){let e=f(0);return et("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ve(e,t,n,l){Be.isServer||k(a=>{e=e??window,e.addEventListener(t,n,l),a(()=>e.removeEventListener(t,n,l))})}function Ue(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ht(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function qe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=y(n);l instanceof HTMLElement&&t.add(l)}return t}var Ie=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ie||{});let ee=Object.assign(x({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:f(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let a=f(null);l({el:a,$el:a});let r=c(()=>le(a)),o=f(!1);T(()=>o.value=!0),O(()=>o.value=!1),bt({ownerDocument:r},c(()=>o.value&&!!(e.features&16)));let i=wt({ownerDocument:r,container:a,initialFocus:c(()=>e.initialFocus)},c(()=>o.value&&!!(e.features&2)));Et({ownerDocument:r,container:a,containers:e.containers,previousActiveElement:i},c(()=>o.value&&!!(e.features&8)));let s=gt();function u(g){let b=y(a);b&&(w=>w())(()=>{W(s.value,{[ne.Forwards]:()=>{ce(b,N.First,{skipElements:[g.relatedTarget]})},[ne.Backwards]:()=>{ce(b,N.Last,{skipElements:[g.relatedTarget]})}})})}let d=f(!1);function m(g){g.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function p(g){if(!o.value)return;let b=qe(e.containers);y(a)instanceof HTMLElement&&b.add(y(a));let w=g.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(We(b,w)||(d.value?ce(y(a),W(s.value,{[ne.Forwards]:()=>N.Next,[ne.Backwards]:()=>N.Previous})|N.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&I(g.target)))}return()=>{let g={},b={ref:a,onKeydown:m,onFocusout:p},{features:w,initialFocus:L,containers:X,...F}=e;return S(_e,[!!(w&4)&&S(Te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Le.Focusable}),H({ourProps:b,theirProps:{...t,...F},slot:g,attrs:t,slots:n,name:"FocusTrap"}),!!(w&4)&&S(Te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Le.Focusable})])}}}),{features:Ie}),V=[];ht(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&V[0]!==t.target&&(V.unshift(t.target),V=V.filter(n=>n!=null&&n.isConnected),V.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function yt(e){let t=f(V.slice());return ae([e],([n],[l])=>{l===!0&&n===!1?Ue(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=V.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function bt({ownerDocument:e},t){let n=yt(t);T(()=>{k(()=>{var l,a;t.value||((l=e.value)==null?void 0:l.activeElement)===((a=e.value)==null?void 0:a.body)&&I(n())},{flush:"post"})}),O(()=>{t.value&&I(n())})}function wt({ownerDocument:e,container:t,initialFocus:n},l){let a=f(null),r=f(!1);return T(()=>r.value=!0),O(()=>r.value=!1),T(()=>{ae([t,n,l],(o,i)=>{if(o.every((u,d)=>(i==null?void 0:i[d])===u)||!l.value)return;let s=y(t);s&&Ue(()=>{var u,d;if(!r.value)return;let m=y(n),p=(u=e.value)==null?void 0:u.activeElement;if(m){if(m===p){a.value=p;return}}else if(s.contains(p)){a.value=p;return}m?I(m):ce(s,N.First|N.NoScroll)===tt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),a}function Et({ownerDocument:e,container:t,containers:n,previousActiveElement:l},a){var r;Ve((r=e.value)==null?void 0:r.defaultView,"focus",o=>{if(!a.value)return;let i=qe(n);y(t)instanceof HTMLElement&&i.add(y(t));let s=l.value;if(!s)return;let u=o.target;u&&u instanceof HTMLElement?We(i,u)?(l.value=u,I(u)):(o.preventDefault(),o.stopPropagation(),I(s)):I(l.value)},!0)}function We(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let we=new Map,te=new Map;function Me(e,t=f(!0)){k(n=>{var l;if(!t.value)return;let a=y(e);if(!a)return;n(function(){var o;if(!a)return;let i=(o=te.get(a))!=null?o:1;if(i===1?te.delete(a):te.set(a,i-1),i!==1)return;let s=we.get(a);s&&(s["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",s["aria-hidden"]),a.inert=s.inert,we.delete(a))});let r=(l=te.get(a))!=null?l:0;te.set(a,r+1),r===0&&(we.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0)})}let Ge=Symbol("ForcePortalRootContext");function St(){return A(Ge,!1)}let Re=x({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return B(Ge,e.force),()=>{let{force:l,...a}=e;return H({theirProps:a,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Tt(e){let t=le(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let Lt=x({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=f(null),a=c(()=>le(l)),r=St(),o=A(Ye,null),i=f(r===!0||o==null?Tt(l.value):o.resolveTarget());k(()=>{r||o!=null&&(i.value=o.resolveTarget())});let s=A(Fe,null);return T(()=>{let u=y(l);u&&s&&O(s.register(u))}),O(()=>{var u,d;let m=(u=a.value)==null?void 0:u.getElementById("headlessui-portal-root");m&&i.value===m&&i.value.children.length<=0&&((d=i.value.parentElement)==null||d.removeChild(i.value))}),()=>{if(i.value===null)return null;let u={ref:l,"data-headlessui-portal":""};return S(it,{to:i.value},H({ourProps:u,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Fe=Symbol("PortalParentContext");function Ft(){let e=A(Fe,null),t=f([]);function n(r){return t.value.push(r),e&&e.register(r),()=>l(r)}function l(r){let o=t.value.indexOf(r);o!==-1&&t.value.splice(o,1),e&&e.unregister(r)}let a={register:n,unregister:l,portals:t};return[t,x({name:"PortalWrapper",setup(r,{slots:o}){return B(Fe,a),()=>{var i;return(i=o.default)==null?void 0:i.call(o)}}})]}let Ye=Symbol("PortalGroupContext"),$t=x({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=ut({resolveTarget(){return e.target}});return B(Ye,l),()=>{let{target:a,...r}=e;return H({theirProps:r,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),ze=Symbol("StackContext");var $e=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))($e||{});function Pt(){return A(ze,()=>{})}function Ct({type:e,enabled:t,element:n,onUpdate:l}){let a=Pt();function r(...o){l==null||l(...o),a(...o)}T(()=>{ae(t,(o,i)=>{o?r(0,e,n):i===!0&&r(1,e,n)},{immediate:!0,flush:"sync"})}),O(()=>{t.value&&r(1,e,n)}),B(ze,r)}let Ot=Symbol("DescriptionContext");function At({slot:e=f({}),name:t="Description",props:n={}}={}){let l=f([]);function a(r){return l.value.push(r),()=>{let o=l.value.indexOf(r);o!==-1&&l.value.splice(o,1)}}return B(Ot,{register:a,slot:e,name:t,props:n}),c(()=>l.value.length>0?l.value.join(" "):void 0)}function xt(e){let t=st(e.getSnapshot());return O(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Dt(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(a){return l.add(a),()=>l.delete(a)},dispatch(a,...r){let o=t[a].call(n,...r);o&&(n=o,l.forEach(i=>i()))}}}function Mt(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,a=l.clientWidth-l.offsetWidth,r=e-a;n.style(l,"paddingRight",`${r}px`)}}}function Rt(){if(!Ne())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:l}){function a(o){return l.containers.flatMap(i=>i()).some(i=>i.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let r=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),u=t.querySelector(s);u&&!a(u)&&(r=u)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!a(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null)})}}}function kt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Bt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let q=Dt(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:ve(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Bt(n)},a=[Rt(),Mt(),kt()];a.forEach(({before:r})=>r==null?void 0:r(l)),a.forEach(({after:r})=>r==null?void 0:r(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});q.subscribe(()=>{let e=q.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!l||!a&&l)&&q.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&q.dispatch("TEARDOWN",n)}});function Ht(e,t,n){let l=xt(q),a=c(()=>{let r=e.value?l.value.get(e.value):void 0;return r?r.count>0:!1});return ae([e,t],([r,o],[i],s)=>{if(!r||!o)return;q.dispatch("PUSH",r,n);let u=!1;s(()=>{u||(q.dispatch("POP",i??r,n),u=!0)})},{immediate:!0}),a}function _t({defaultContainers:e=[],portals:t}={}){let n=f(null),l=le(n);function a(){var r;let o=[];for(let i of e)i!==null&&(i instanceof HTMLElement?o.push(i):"value"in i&&i.value instanceof HTMLElement&&o.push(i.value));if(t!=null&&t.value)for(let i of t.value)o.push(i);for(let i of(r=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?r:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(y(n))||o.some(s=>i.contains(s))||o.push(i));return o}return{resolveContainers:a,contains(r){return a().some(o=>o.contains(r))},mainTreeNodeRef:n,MainTreeNode(){return S(Te,{features:Le.Hidden,ref:n})}}}var jt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(jt||{});let Pe=Symbol("DialogContext");function Ae(e){let t=A(Pe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ae),n}return t}let se="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Nt=x({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:se},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${fe()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){var r;let o=f(!1);T(()=>{o.value=!0});let i=f(0),s=He(),u=c(()=>e.open===se&&s!==null?(s.value&$.Open)===$.Open:e.open),d=f(null),m=c(()=>le(d));if(a({el:d,$el:d}),!(e.open!==se||s!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===se?void 0:e.open}`);let p=c(()=>o.value&&u.value?0:1),g=c(()=>p.value===0),b=c(()=>i.value>1),w=A(Pe,null)!==null,[L,X]=Ft(),{resolveContainers:F,mainTreeNodeRef:_,MainTreeNode:re}=_t({portals:L,defaultContainers:[c(()=>{var v;return(v=E.panelRef.value)!=null?v:d.value})]}),oe=c(()=>b.value?"parent":"leaf"),Z=c(()=>s!==null?(s.value&$.Closing)===$.Closing:!1),me=c(()=>w||Z.value?!1:g.value),ie=c(()=>{var v,h,P;return(P=Array.from((h=(v=m.value)==null?void 0:v.querySelectorAll("body > *"))!=null?h:[]).find(C=>C.id==="headlessui-portal-root"?!1:C.contains(y(_))&&C instanceof HTMLElement))!=null?P:null});Me(ie,me);let ge=c(()=>b.value?!0:g.value),he=c(()=>{var v,h,P;return(P=Array.from((h=(v=m.value)==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?h:[]).find(C=>C.contains(y(_))&&C instanceof HTMLElement))!=null?P:null});Me(he,ge),Ct({type:"Dialog",enabled:c(()=>p.value===0),element:d,onUpdate:(v,h)=>{if(h==="Dialog")return W(v,{[$e.Add]:()=>i.value+=1,[$e.Remove]:()=>i.value-=1})}});let ye=At({name:"DialogDescription",slot:c(()=>({open:u.value}))}),G=f(null),E={titleId:G,panelRef:f(null),dialogState:p,setTitleId(v){G.value!==v&&(G.value=v)},close(){t("close",!1)}};B(Pe,E);let J=c(()=>!(!g.value||b.value));nt(F,(v,h)=>{E.close(),dt(()=>h==null?void 0:h.focus())},J);let D=c(()=>!(b.value||p.value!==0));Ve((r=m.value)==null?void 0:r.defaultView,"keydown",v=>{D.value&&(v.defaultPrevented||v.key===lt.Escape&&(v.preventDefault(),v.stopPropagation(),E.close()))});let Y=c(()=>!(Z.value||p.value!==0||w));return Ht(m,Y,v=>{var h;return{containers:[...(h=v.containers)!=null?h:[],F]}}),k(v=>{if(p.value!==0)return;let h=y(d);if(!h)return;let P=new ResizeObserver(C=>{for(let ue of C){let M=ue.target.getBoundingClientRect();M.x===0&&M.y===0&&M.width===0&&M.height===0&&E.close()}});P.observe(h),v(()=>P.disconnect())}),()=>{let{id:v,open:h,initialFocus:P,...C}=e,ue={...n,ref:d,id:v,role:"dialog","aria-modal":p.value===0?!0:void 0,"aria-labelledby":G.value,"aria-describedby":ye.value},M={open:p.value===0};return S(Re,{force:!0},()=>[S(Lt,()=>S($t,{target:d.value},()=>S(Re,{force:!1},()=>S(ee,{initialFocus:P,containers:F,features:g.value?W(oe.value,{parent:ee.features.RestoreFocus,leaf:ee.features.All&~ee.features.FocusLock}):ee.features.None},()=>S(X,{},()=>H({ourProps:ue,theirProps:{...C,...n},slot:M,attrs:n,slots:l,visible:p.value===0,features:Se.RenderStrategy|Se.Static,name:"Dialog"})))))),S(re)])}}}),Vt=x({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${fe()}`}},setup(e,{attrs:t,slots:n,expose:l}){let a=Ae("DialogPanel");l({el:a.panelRef,$el:a.panelRef});function r(o){o.stopPropagation()}return()=>{let{id:o,...i}=e,s={id:o,ref:a.panelRef,onClick:r};return H({ourProps:s,theirProps:i,slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),Ut=x({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${fe()}`}},setup(e,{attrs:t,slots:n}){let l=Ae("DialogTitle");return T(()=>{l.setTitleId(e.id),O(()=>l.setTitleId(null))}),()=>{let{id:a,...r}=e;return H({ourProps:{id:a},theirProps:r,slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function qt(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Ee(e,...t){e&&t.length>0&&e.classList.add(...t)}function de(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Ce=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ce||{});function It(e,t){let n=ve();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:a}=getComputedStyle(e),[r,o]=[l,a].map(i=>{let[s=0]=i.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return s});return r!==0?n.setTimeout(()=>t("finished"),r+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function ke(e,t,n,l,a,r){let o=ve(),i=r!==void 0?qt(r):()=>{};return de(e,...a),Ee(e,...t,...n),o.nextFrame(()=>{de(e,...n),Ee(e,...l),o.add(It(e,s=>(de(e,...l,...t),Ee(e,...a),i(s))))}),o.add(()=>de(e,...t,...n,...l,...a)),o.add(()=>i("cancelled")),o.dispose}function j(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let xe=Symbol("TransitionContext");var Wt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Wt||{});function Gt(){return A(xe,null)!==null}function Yt(){let e=A(xe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function zt(){let e=A(De,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let De=Symbol("NestingContext");function pe(e){return"children"in e?pe(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Ke(e){let t=f([]),n=f(!1);T(()=>n.value=!0),O(()=>n.value=!1);function l(r,o=U.Hidden){let i=t.value.findIndex(({id:s})=>s===r);i!==-1&&(W(o,{[U.Unmount](){t.value.splice(i,1)},[U.Hidden](){t.value[i].state="hidden"}}),!pe(t)&&n.value&&(e==null||e()))}function a(r){let o=t.value.find(({id:i})=>i===r);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:r,state:"visible"}),()=>l(r,U.Unmount)}return{children:t,register:a,unregister:l}}let Qe=Se.RenderStrategy,Oe=x({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){let r=f(0);function o(){r.value|=$.Opening,t("beforeEnter")}function i(){r.value&=~$.Opening,t("afterEnter")}function s(){r.value|=$.Closing,t("beforeLeave")}function u(){r.value&=~$.Closing,t("afterLeave")}if(!Gt()&&at())return()=>S(Xe,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:s,onAfterLeave:u},l);let d=f(null),m=c(()=>e.unmount?U.Unmount:U.Hidden);a({el:d,$el:d});let{show:p,appear:g}=Yt(),{register:b,unregister:w}=zt(),L=f(p.value?"visible":"hidden"),X={value:!0},F=fe(),_={value:!1},re=Ke(()=>{!_.value&&L.value!=="hidden"&&(L.value="hidden",w(F),u())});T(()=>{let E=b(F);O(E)}),k(()=>{if(m.value===U.Hidden&&F){if(p.value&&L.value!=="visible"){L.value="visible";return}W(L.value,{hidden:()=>w(F),visible:()=>b(F)})}});let oe=j(e.enter),Z=j(e.enterFrom),me=j(e.enterTo),ie=j(e.entered),ge=j(e.leave),he=j(e.leaveFrom),ye=j(e.leaveTo);T(()=>{k(()=>{if(L.value==="visible"){let E=y(d);if(E instanceof Comment&&E.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function G(E){let J=X.value&&!g.value,D=y(d);!D||!(D instanceof HTMLElement)||J||(_.value=!0,p.value&&o(),p.value||s(),E(p.value?ke(D,oe,Z,me,ie,Y=>{_.value=!1,Y===Ce.Finished&&i()}):ke(D,ge,he,ye,ie,Y=>{_.value=!1,Y===Ce.Finished&&(pe(re)||(L.value="hidden",w(F),u()))})))}return T(()=>{ae([p],(E,J,D)=>{G(D),X.value=!1},{immediate:!0})}),B(De,re),rt(c(()=>W(L.value,{visible:$.Open,hidden:$.Closed})|r.value)),()=>{let{appear:E,show:J,enter:D,enterFrom:Y,enterTo:v,entered:h,leave:P,leaveFrom:C,leaveTo:ue,...M}=e,Ze={ref:d},Je={...M,...g.value&&p.value&&Be.isServer?{class:je([n.class,M.class,...oe,...Z])}:{}};return H({theirProps:Je,ourProps:Ze,slot:{},slots:l,attrs:n,features:Qe,visible:L.value==="visible",name:"TransitionChild"})}}}),Kt=Oe,Xe=x({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let a=He(),r=c(()=>e.show===null&&a!==null?(a.value&$.Open)===$.Open:e.show);k(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=f(r.value?"visible":"hidden"),i=Ke(()=>{o.value="hidden"}),s=f(!0),u={show:r,appear:c(()=>e.appear||!s.value)};return T(()=>{k(()=>{s.value=!1,r.value?o.value="visible":pe(i)||(o.value="hidden")})}),B(De,i),B(xe,u),()=>{let d=ot(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),m={unmount:e.unmount};return H({ourProps:{...m,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[S(Kt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...m,...d},l.default)]},attrs:{},features:Qe,visible:o.value==="visible",name:"Transition"})}}});const Qt={class:""},Xt=R("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Zt={class:"fixed inset-0 overflow-y-auto"},Jt={class:"flex min-h-full items-center justify-center p-4 text-center"},en={class:"mt-2"},tn=R("p",{class:"text-sm text-gray-500"}," contenido del modal ",-1),nn={class:"mt-2 flex justify-end"},un={__name:"HModal",props:{title:String,density:{type:String,default:"max-w-md"}},setup(e){const t=f(!1);function n(){t.value=!1}function l(){t.value=!0}return(a,r)=>(ct(),ft(_e,null,[R("div",Qt,[be(a.$slots,"activator",{modal:()=>t.value=!t.value},()=>[R("button",{type:"button",onClick:l,class:"rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"}," Open dialog ")])]),z(Q(Xe),{appear:"",show:t.value,as:"template"},{default:K(()=>[z(Q(Nt),{as:"div",onClose:n,class:"relative z-10"},{default:K(()=>[z(Q(Oe),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:K(()=>[Xt]),_:1}),R("div",Zt,[R("div",Jt,[z(Q(Oe),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:K(()=>[z(Q(Vt),{class:je(["w-full transform overflow-hidden rounded-md bg-white p-4 text-left align-middle shadow-xl transition-all",e.density])},{default:K(()=>[z(Q(Ut),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:K(()=>[vt(pt(e.title),1)]),_:1}),R("div",en,[be(a.$slots,"content",{modal:()=>t.value=!t.value},()=>[tn])]),R("div",nn,[be(a.$slots,"actions",{modal:()=>t.value=!t.value},()=>[R("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:n}," Cerrar ")])])]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"])],64))}};export{Xe as S,un as _,on as n,ve as r};
