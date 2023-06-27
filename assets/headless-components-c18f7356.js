import{p as ie,_ as re}from"./HDropDown-afefde47.js";import{d as se,e as de,r as pe,a as ve,_ as ce}from"./HSelect-448f3bb9.js";import{u as A,o as C,F as fe,d as be,l as z,K as me,H as K,e as ae,t as Q,a as G,p as xe,O as ge,b as T}from"./use-outside-click-bb517905.js";import{x as ye,a as V,b as Oe,u as he}from"./use-text-value-12d304eb.js";import{f as Se,a as Re}from"./hidden-64c51462.js";import{r as Ce,n as Ve,S as Ie}from"./transition-56ed6b67.js";import{q as M,l as R,i as g,K as x,A as we,s as Z,z as X,y as $,F as le,p as Y,x as Te,B as Pe,E as N,o as L,g as ee,w as j,a as H,b as F,L as te,m as _,c as J,h as oe,j as ke,n as W,t as ne,d as _e}from"./index-4eec3473.js";function De(o,y){return o===y}var Be=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Be||{}),Ee=(o=>(o[o.Single=0]="Single",o[o.Multi=1]="Multi",o))(Ee||{}),Ae=(o=>(o[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o))(Ae||{});let ue=Symbol("ComboboxContext");function q(o){let y=Pe(ue,null);if(y===null){let O=new Error(`<${o} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(O,q),O}return y}let Fe=M({name:"Combobox",emits:{"update:modelValue":o=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>De},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(o,{slots:y,attrs:O,emit:P}){let t=R(1),e=R(null),r=R(null),S=R(null),u=R(null),n=R({static:!1,hold:!1}),c=R([]),f=R(null),I=R(1),w=R(!1);function E(l=d=>d){let d=f.value!==null?c.value[f.value]:null,v=ge(l(c.value.slice()),b=>C(b.dataRef.domRef)),i=d?v.indexOf(d):null;return i===-1&&(i=null),{options:v,activeOptionIndex:i}}let k=g(()=>o.multiple?1:0),a=g(()=>o.nullable),[p,m]=se(g(()=>o.modelValue===void 0?A(k.value,{[1]:[],[0]:void 0}):o.modelValue),l=>P("update:modelValue",l),g(()=>o.defaultValue)),s={comboboxState:t,value:p,mode:k,compare(l,d){if(typeof o.by=="string"){let v=o.by;return(l==null?void 0:l[v])===(d==null?void 0:d[v])}return o.by(l,d)},defaultValue:g(()=>o.defaultValue),nullable:a,inputRef:r,labelRef:e,buttonRef:S,optionsRef:u,disabled:g(()=>o.disabled),options:c,change(l){m(l)},activeOptionIndex:g(()=>{if(w.value&&f.value===null&&c.value.length>0){let l=c.value.findIndex(d=>!d.dataRef.disabled);l!==-1&&(f.value=l)}return f.value}),activationTrigger:I,optionsPropsRef:n,closeCombobox(){w.value=!1,!o.disabled&&t.value!==1&&(t.value=1,f.value=null)},openCombobox(){if(w.value=!0,o.disabled||t.value===0)return;let l=c.value.findIndex(d=>{let v=x(d.dataRef.value);return A(k.value,{[0]:()=>s.compare(x(s.value.value),x(v)),[1]:()=>x(s.value.value).some(i=>s.compare(x(i),x(v)))})});l!==-1&&(f.value=l),t.value=0},goToOption(l,d,v){if(w.value=!1,o.disabled||u.value&&!n.value.static&&t.value===1)return;let i=E();if(i.activeOptionIndex===null){let h=i.options.findIndex(U=>!U.dataRef.disabled);h!==-1&&(i.activeOptionIndex=h)}let b=ye(l===V.Specific?{focus:V.Specific,id:d}:{focus:l},{resolveItems:()=>i.options,resolveActiveIndex:()=>i.activeOptionIndex,resolveId:h=>h.id,resolveDisabled:h=>h.dataRef.disabled});f.value=b,I.value=v??1,c.value=i.options},selectOption(l){let d=c.value.find(i=>i.id===l);if(!d)return;let{dataRef:v}=d;m(A(k.value,{[0]:()=>v.value,[1]:()=>{let i=x(s.value.value).slice(),b=x(v.value),h=i.findIndex(U=>s.compare(b,x(U)));return h===-1?i.push(b):i.splice(h,1),i}}))},selectActiveOption(){if(s.activeOptionIndex.value===null)return;let{dataRef:l,id:d}=c.value[s.activeOptionIndex.value];m(A(k.value,{[0]:()=>l.value,[1]:()=>{let v=x(s.value.value).slice(),i=x(l.value),b=v.findIndex(h=>s.compare(i,x(h)));return b===-1?v.push(i):v.splice(b,1),v}})),s.goToOption(V.Specific,d)},registerOption(l,d){let v={id:l,dataRef:d},i=E(b=>[...b,v]);if(f.value===null){let b=d.value.value;A(k.value,{[0]:()=>s.compare(x(s.value.value),x(b)),[1]:()=>x(s.value.value).some(h=>s.compare(x(h),x(b)))})&&(i.activeOptionIndex=i.options.indexOf(v))}c.value=i.options,f.value=i.activeOptionIndex,I.value=1,i.options.some(b=>!C(b.dataRef.domRef))&&requestAnimationFrame(()=>{let b=E();c.value=b.options,f.value=b.activeOptionIndex})},unregisterOption(l){var d;s.activeOptionIndex.value!==null&&((d=s.options.value[s.activeOptionIndex.value])==null?void 0:d.id)===l&&(w.value=!0);let v=E(i=>{let b=i.findIndex(h=>h.id===l);return b!==-1&&i.splice(b,1),i});c.value=v.options,f.value=v.activeOptionIndex,I.value=1}};fe([r,S,u],()=>s.closeCombobox(),g(()=>t.value===0)),we(ue,s),be(g(()=>A(t.value,{[0]:z.Open,[1]:z.Closed})));let D=g(()=>s.activeOptionIndex.value===null?null:c.value[s.activeOptionIndex.value].dataRef.value),B=g(()=>{var l;return(l=C(r))==null?void 0:l.closest("form")});return Z(()=>{X([B],()=>{if(!B.value||o.defaultValue===void 0)return;function l(){s.change(o.defaultValue)}return B.value.addEventListener("reset",l),()=>{var d;(d=B.value)==null||d.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,disabled:d,form:v,...i}=o,b={open:t.value===0,disabled:d,activeIndex:s.activeOptionIndex.value,activeOption:D.value,value:p.value};return $(le,[...l!=null&&p.value!=null?de({[l]:p.value}).map(([h,U])=>$(Se,me({features:Re.Hidden,key:h,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:v,name:h,value:U}))):[],K({theirProps:{...O,...ae(i,["modelValue","defaultValue","nullable","multiple","onUpdate:modelValue","by"])},ourProps:{},slot:b,slots:y,attrs:O,name:"Combobox"})])}}}),Ne=M({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-combobox-button-${Q()}`}},setup(o,{attrs:y,slots:O,expose:P}){let t=q("ComboboxButton");P({el:t.buttonRef,$el:t.buttonRef});function e(u){t.disabled.value||(t.comboboxState.value===0?t.closeCombobox():(u.preventDefault(),t.openCombobox()),N(()=>{var n;return(n=C(t.inputRef))==null?void 0:n.focus({preventScroll:!0})}))}function r(u){switch(u.key){case T.ArrowDown:u.preventDefault(),u.stopPropagation(),t.comboboxState.value===1&&t.openCombobox(),N(()=>{var n;return(n=t.inputRef.value)==null?void 0:n.focus({preventScroll:!0})});return;case T.ArrowUp:u.preventDefault(),u.stopPropagation(),t.comboboxState.value===1&&(t.openCombobox(),N(()=>{t.value.value||t.goToOption(V.Last)})),N(()=>{var n;return(n=t.inputRef.value)==null?void 0:n.focus({preventScroll:!0})});return;case T.Escape:if(t.comboboxState.value!==0)return;u.preventDefault(),t.optionsRef.value&&!t.optionsPropsRef.value.static&&u.stopPropagation(),t.closeCombobox(),N(()=>{var n;return(n=t.inputRef.value)==null?void 0:n.focus({preventScroll:!0})});return}}let S=Oe(g(()=>({as:o.as,type:y.type})),t.buttonRef);return()=>{var u,n;let c={open:t.comboboxState.value===0,disabled:t.disabled.value,value:t.value.value},{id:f,...I}=o,w={ref:t.buttonRef,id:f,type:S.value,tabindex:"-1","aria-haspopup":"listbox","aria-controls":(u=C(t.optionsRef))==null?void 0:u.id,"aria-expanded":t.disabled.value?void 0:t.comboboxState.value===0,"aria-labelledby":t.labelRef.value?[(n=C(t.labelRef))==null?void 0:n.id,f].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:r,onClick:e};return K({ourProps:w,theirProps:I,slot:c,attrs:y,slots:O,name:"ComboboxButton"})}}}),Le=M({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:()=>`headlessui-combobox-input-${Q()}`}},emits:{change:o=>!0},setup(o,{emit:y,attrs:O,slots:P,expose:t}){let e=q("ComboboxInput"),r={value:!1};t({el:e.inputRef,$el:e.inputRef});let S=g(()=>{var a;let p=e.value.value;return C(e.inputRef)?typeof o.displayValue<"u"&&p!==void 0?(a=o.displayValue(p))!=null?a:"":typeof p=="string"?p:"":""});Z(()=>{X([S,e.comboboxState],([a,p],[m,s])=>{if(r.value)return;let D=C(e.inputRef);D&&(s===0&&p===1||a!==m)&&(D.value=a)},{immediate:!0}),X([e.comboboxState],([a],[p])=>{if(a===0&&p===1){let m=C(e.inputRef);if(!m)return;let s=m.value,{selectionStart:D,selectionEnd:B,selectionDirection:l}=m;m.value="",m.value=s,l!==null?m.setSelectionRange(D,B,l):m.setSelectionRange(D,B)}})});let u=R(!1),n=R(null);function c(){u.value=!0}function f(){Ce().nextFrame(()=>{u.value=!1,n.value&&(e.openCombobox(),y("change",n.value),n.value=null)})}function I(a){switch(r.value=!0,a.key){case T.Backspace:case T.Delete:if(e.mode.value!==0||!e.nullable.value)return;let p=a.currentTarget;requestAnimationFrame(()=>{if(p.value===""){e.change(null);let m=C(e.optionsRef);m&&(m.scrollTop=0),e.goToOption(V.Nothing)}});break;case T.Enter:if(r.value=!1,e.comboboxState.value!==0||u.value)return;if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex.value===null){e.closeCombobox();return}e.selectActiveOption(),e.mode.value===0&&e.closeCombobox();break;case T.ArrowDown:return r.value=!1,a.preventDefault(),a.stopPropagation(),A(e.comboboxState.value,{[0]:()=>e.goToOption(V.Next),[1]:()=>e.openCombobox()});case T.ArrowUp:return r.value=!1,a.preventDefault(),a.stopPropagation(),A(e.comboboxState.value,{[0]:()=>e.goToOption(V.Previous),[1]:()=>{e.openCombobox(),N(()=>{e.value.value||e.goToOption(V.Last)})}});case T.Home:if(a.shiftKey)break;return r.value=!1,a.preventDefault(),a.stopPropagation(),e.goToOption(V.First);case T.PageUp:return r.value=!1,a.preventDefault(),a.stopPropagation(),e.goToOption(V.First);case T.End:if(a.shiftKey)break;return r.value=!1,a.preventDefault(),a.stopPropagation(),e.goToOption(V.Last);case T.PageDown:return r.value=!1,a.preventDefault(),a.stopPropagation(),e.goToOption(V.Last);case T.Escape:if(r.value=!1,e.comboboxState.value!==0)return;a.preventDefault(),e.optionsRef.value&&!e.optionsPropsRef.value.static&&a.stopPropagation(),e.closeCombobox();break;case T.Tab:if(r.value=!1,e.comboboxState.value!==0)return;e.mode.value===0&&e.selectActiveOption(),e.closeCombobox();break}}function w(a){if(u.value){n.value=a;return}e.openCombobox(),y("change",a)}function E(){r.value=!1}let k=g(()=>{var a,p,m,s;return(s=(m=(p=o.defaultValue)!=null?p:e.defaultValue.value!==void 0?(a=o.displayValue)==null?void 0:a.call(o,e.defaultValue.value):null)!=null?m:e.defaultValue.value)!=null?s:""});return()=>{var a,p,m,s,D,B;let l={open:e.comboboxState.value===0},{id:d,displayValue:v,onChange:i,...b}=o,h={"aria-controls":(a=e.optionsRef.value)==null?void 0:a.id,"aria-expanded":e.disabled.value?void 0:e.comboboxState.value===0,"aria-activedescendant":e.activeOptionIndex.value===null||(p=e.options.value[e.activeOptionIndex.value])==null?void 0:p.id,"aria-labelledby":(D=(m=C(e.labelRef))==null?void 0:m.id)!=null?D:(s=C(e.buttonRef))==null?void 0:s.id,"aria-autocomplete":"list",id:d,onCompositionstart:c,onCompositionend:f,onKeydown:I,onInput:w,onBlur:E,role:"combobox",type:(B=O.type)!=null?B:"text",tabIndex:0,ref:e.inputRef,defaultValue:k.value,disabled:e.disabled.value===!0?!0:void 0};return K({ourProps:h,theirProps:b,slot:l,attrs:O,slots:P,features:G.RenderStrategy|G.Static,name:"ComboboxInput"})}}}),Ue=M({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(o,{attrs:y,slots:O,expose:P}){let t=q("ComboboxOptions"),e=`headlessui-combobox-options-${Q()}`;P({el:t.optionsRef,$el:t.optionsRef}),Y(()=>{t.optionsPropsRef.value.static=o.static}),Y(()=>{t.optionsPropsRef.value.hold=o.hold});let r=xe(),S=g(()=>r!==null?(r.value&z.Open)===z.Open:t.comboboxState.value===0);return ie({container:g(()=>C(t.optionsRef)),enabled:g(()=>t.comboboxState.value===0),accept(u){return u.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:u.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(u){u.setAttribute("role","none")}}),()=>{var u,n,c;let f={open:t.comboboxState.value===0},I={"aria-labelledby":(c=(u=C(t.labelRef))==null?void 0:u.id)!=null?c:(n=C(t.buttonRef))==null?void 0:n.id,id:e,ref:t.optionsRef,role:"listbox","aria-multiselectable":t.mode.value===1?!0:void 0},w=ae(o,["hold"]);return K({ourProps:I,theirProps:w,slot:f,attrs:y,slots:O,features:G.RenderStrategy|G.Static,visible:S.value,name:"ComboboxOptions"})}}}),je=M({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(o,{slots:y,attrs:O,expose:P}){let t=q("ComboboxOption"),e=`headlessui-combobox-option-${Q()}`,r=R(null);P({el:r,$el:r});let S=g(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===e:!1),u=g(()=>A(t.mode.value,{[0]:()=>t.compare(x(t.value.value),x(o.value)),[1]:()=>x(t.value.value).some(a=>t.compare(x(a),x(o.value)))})),n=g(()=>({disabled:o.disabled,value:o.value,domRef:r}));Z(()=>t.registerOption(e,n)),Te(()=>t.unregisterOption(e)),Y(()=>{t.comboboxState.value===0&&S.value&&t.activationTrigger.value!==0&&N(()=>{var a,p;return(p=(a=C(r))==null?void 0:a.scrollIntoView)==null?void 0:p.call(a,{block:"nearest"})})});function c(a){if(o.disabled)return a.preventDefault();t.selectOption(e),t.mode.value===0&&t.closeCombobox(),Ve()||requestAnimationFrame(()=>{var p;return(p=C(t.inputRef))==null?void 0:p.focus()})}function f(){if(o.disabled)return t.goToOption(V.Nothing);t.goToOption(V.Specific,e)}let I=he();function w(a){I.update(a)}function E(a){I.wasMoved(a)&&(o.disabled||S.value||t.goToOption(V.Specific,e,0))}function k(a){I.wasMoved(a)&&(o.disabled||S.value&&(t.optionsPropsRef.value.hold||t.goToOption(V.Nothing)))}return()=>{let{disabled:a}=o,p={active:S.value,selected:u.value,disabled:a},m={id:e,ref:r,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-selected":u.value,disabled:void 0,onClick:c,onFocus:f,onPointerenter:w,onMouseenter:w,onPointermove:E,onMousemove:E,onPointerleave:k,onMouseleave:k};return K({ourProps:m,theirProps:o,slot:p,attrs:O,slots:y,name:"ComboboxOption"})}}});const Ke={class:"relative mt-1"},Me={class:"relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"},qe={key:0,class:"relative cursor-default select-none py-2 px-4 text-gray-700"},He={__name:"HAutoComplete",props:{itemValue:{type:String,default:"id"},itemTitle:{type:String,default:"title"},modelValue:{type:[String,Number,Object],default:null}},emits:["update:modelValue"],setup(o,{emit:y}){const O=o,P=R([]),t=g({get:()=>O.modelValue,set:S=>y("update:modelValue",S)});let e=R(""),r=g(()=>e.value===""?[]:P.filter(S=>S.title.toLowerCase().replace(/\s+/g,"").includes(e.value.toLowerCase().replace(/\s+/g,""))));return(S,u)=>(L(),ee(_(Fe),{modelValue:t.value,"onUpdate:modelValue":u[2]||(u[2]=n=>t.value=n)},{default:j(()=>[H("div",Ke,[H("div",Me,[F(_(Le),{class:"w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0",displayValue:n=>n==null?void 0:n[`${this.itemTitle}`],onChange:u[0]||(u[0]=n=>te(e)?e.value=n.target.value:e=n.target.value)},null,8,["displayValue"]),F(_(Ne),{class:"absolute inset-y-0 right-0 flex items-center pr-2"},{default:j(()=>[F(_(pe),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})]),_:1})]),F(_(Ie),{leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",onAfterLeave:u[1]||(u[1]=n=>te(e)?e.value="":e="")},{default:j(()=>[F(_(Ue),{class:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:j(()=>[_(r).length===0&&_(e)!==""?(L(),J("div",qe," Nothing found. ")):oe("",!0),(L(!0),J(le,null,ke(_(r),n=>(L(),ee(_(je),{as:"template",key:n[`${this.itemValue}`],value:n},{default:j(({selected:c,active:f})=>[H("li",{class:W(["relative cursor-default select-none py-2 pl-10 pr-4",{"bg-teal-600 text-white":f,"text-gray-900":!f}])},[H("span",{class:W(["block truncate",{"font-medium":c,"font-normal":!c}])},ne(n[`${this.itemTitle}`]),3),c?(L(),J("span",{key:0,class:W(["absolute inset-y-0 left-0 flex items-center pl-3",{"text-white":f,"text-teal-600":!f}])},[F(_(ve),{class:"h-5 w-5","aria-hidden":"true"})],2)):oe("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"]))}},Ze={__name:"headless-components",setup(o){const y=R(1),O=R({userId:6,id:101,title:"explicabo enim cumque porro aperiam occaecati minima",completed:!1}),P=[{idUser:1,name:"Select Opcion 1"},{idUser:2,name:"Select Opcion 2"},{idUser:3,name:"Select Opcion 3"}];return(t,e)=>(L(),J("div",null,[F(re),F(ce,{options:P,"item-title":"name","item-value":"idUser",modelValue:y.value,"onUpdate:modelValue":e[0]||(e[0]=r=>y.value=r)},null,8,["modelValue"]),F(He,{modelValue:O.value,"onUpdate:modelValue":e[1]||(e[1]=r=>O.value=r)},null,8,["modelValue"]),_e(" "+ne(O.value),1)]))}};export{Ze as default};
