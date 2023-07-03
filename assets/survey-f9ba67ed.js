var z=Object.defineProperty;var B=(o,r,s)=>r in o?z(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s;var U=(o,r,s)=>(B(o,typeof r!="symbol"?r+"":r,s),s);import{M as k,c as w,r as y,o as c,a as p,b as t,t as g,e as _,F as b,E as I,K as L,n as R,d as N,k as P,u as Z,I as G,j as D,w as S,N as M,g as A,S as Q}from"./index-268b0318.js";import{_ as C}from"./ButtonPrimary-568f6ff1.js";import{_ as K}from"./IndexSurvey-59ffc25f.js";import{_ as F,a as T}from"./OneSelection-30d5dcdf.js";import{_ as $}from"./HAutoComplete-464c11d7.js";import{_ as H}from"./InputForm-b0adc6cf.js";import"./use-outside-click-d33dc97a.js";import"./use-tracked-pointer-192cf0a0.js";import"./use-tree-walker-75aafe16.js";import"./hidden-d69ad78d.js";import"./use-controllable-d1e4f78c.js";import"./transition-883dd484.js";class E{constructor(){U(this,"getDepartamentos",async()=>(await k.get("http://38.43.133.27/API/lugar/")).data);U(this,"getProvincias",async r=>(await k.get(`http://38.43.133.27/API/provincias/${r}/`)).data);U(this,"getDistritos",async r=>(await k.get(`http://38.43.133.27/API/distritos/${r}/`)).data)}}const J={class:"block text-sm font-medium leading-6 text-gray-900 capitalize"},W={class:"grid grid-cols-3 gap-x-5"},X={class:"col-span-3"},Y={__name:"UbigeoOtherForm",props:{modelValue:[String,Number],question:[Object,Array],error:{type:Boolean,default:!1}},emits:["update:modelValue","clickInput"],setup(o,{emit:r}){const s=o,m=new E,v=w({get:()=>s.modelValue,set:d=>r("update:modelValue",d)}),f=y([]),V=y([]),h=y([]),a=y({departamento:null,provincia:null,distrito:null}),x=async d=>{a.value.provincia=null,V.value=[],a.value.distrito=null,h.value=[],V.value=await m.getProvincias(d.id),r("update:modelValue",null)},e=async d=>{r("update:modelValue",null),h.value=[],a.value.distrito=null,h.value=await m.getDistritos(d.id)};return(async()=>{f.value=await m.getDepartamentos()})(),(d,n)=>(c(),p(b,null,[t("label",J,g(o.question.statement),1),t("div",W,[t("div",null,[_($,{placeholder:"Departamento",error:o.error,items:f.value,itemTitle:"name",modelValue:a.value.departamento,"onUpdate:modelValue":[n[0]||(n[0]=u=>a.value.departamento=u),x]},null,8,["error","items","modelValue"])]),t("div",null,[_($,{error:o.error,items:V.value,itemTitle:"name",placeholder:"Provincia",modelValue:a.value.provincia,"onUpdate:modelValue":[n[1]||(n[1]=u=>a.value.provincia=u),e]},null,8,["error","items","modelValue"])]),t("div",null,[_($,{error:o.error,items:h.value,itemTitle:"name",placeholder:"Distrito",modelValue:a.value.distrito,"onUpdate:modelValue":[n[2]||(n[2]=u=>a.value.distrito=u),n[3]||(n[3]=u=>v.value=u.id)]},null,8,["error","items","modelValue"])]),t("div",X,[_(H,{modelValue:o.question.other,"onUpdate:modelValue":n[4]||(n[4]=u=>o.question.other=u),label:"Dirección"},null,8,["modelValue"])])])],64))}},q={class:"block text-sm font-medium leading-6 text-gray-900 capitalize"},ee={class:"grid grid-cols-3 gap-5"},te={__name:"UbigeoForm",props:{modelValue:[String,Number],question:[Object,Array],error:{type:Boolean,default:!1}},emits:["update:modelValue","clickInput"],setup(o,{emit:r}){const s=o,m=new E,v=w({get:()=>s.modelValue,set:d=>r("update:modelValue",d)}),f=y([]),V=y([]),h=y([]),a=y({departamento:null,provincia:null,distrito:null}),x=async d=>{a.value.provincia=null,V.value=[],a.value.distrito=null,h.value=[],V.value=await m.getProvincias(d.id),r("update:modelValue",null)},e=async d=>{r("update:modelValue",null),h.value=[],a.value.distrito=null,h.value=await m.getDistritos(d.id)};return(async()=>{f.value=await m.getDepartamentos()})(),(d,n)=>(c(),p(b,null,[t("label",q,g(o.question.statement),1),t("div",ee,[t("div",null,[_($,{placeholder:"Departamento",error:o.error,items:f.value,itemTitle:"name",modelValue:a.value.departamento,"onUpdate:modelValue":[n[0]||(n[0]=u=>a.value.departamento=u),x]},null,8,["error","items","modelValue"])]),t("div",null,[_($,{error:o.error,items:V.value,itemTitle:"name",placeholder:"Provincia",modelValue:a.value.provincia,"onUpdate:modelValue":[n[1]||(n[1]=u=>a.value.provincia=u),e]},null,8,["error","items","modelValue"])]),t("div",null,[_($,{error:o.error,items:h.value,itemTitle:"name",placeholder:"Distrito",modelValue:a.value.distrito,"onUpdate:modelValue":[n[2]||(n[2]=u=>a.value.distrito=u),n[3]||(n[3]=u=>v.value=u.id)]},null,8,["error","items","modelValue"])])])],64))}},le={class:"block text-sm font-medium leading-6 text-gray-900"},ae={class:"relative mt-1 rounded-md shadow-sm"},se=["id"],oe={__name:"EmailForm",props:{question:Object,placeholder:String,modelValue:[String,Number]},emits:["update:modelValue","onError"],setup(o,{emit:r}){const s=o,m=w({get:()=>s.modelValue,set:v=>r("update:modelValue",v)});return(v,f)=>(c(),p(b,null,[t("label",le,g(o.question.statement),1),t("div",ae,[I(t("input",{"onUpdate:modelValue":f[0]||(f[0]=V=>m.value=V),type:"email",id:"id-"+o.question.id,class:R(["block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6",o.question.error!=null?"ring-red-600 focus:ring-red-600 ":""])},null,10,se),[[L,m.value]])])],64))}},re={class:"grid grid-cols-2 mt-4 bg-white mx-auto justify-center"},ne={class:"col-span-2 rounded-lg p-4"},ie={key:0,class:"mb-4"},de={class:"w-full text-end"},ue={class:"text-xs text-red-600"},ce={key:1,class:"mb-4"},me={class:"w-full text-end"},pe={class:"text-xs text-red-600"},ve={key:2,class:"mb-4"},_e={class:"w-full text-end"},ge={class:"text-xs text-red-600"},Ve={key:3,class:"mb-4"},fe={class:"w-full text-end"},he={class:"text-xs text-red-600"},xe={key:4,class:"mb-4"},ye={class:"w-full text-end"},we={class:"text-xs text-red-600"},be={key:5,class:"mb-4"},$e={class:"w-full text-end"},Ue={class:"text-xs text-red-600"},ke={key:6,class:"mb-4"},De={class:"w-full text-end"},Se={class:"text-xs text-red-600"},Te={key:7,class:"mb-4"},Pe={class:"w-full text-end"},Ae={class:"text-xs text-red-600"},Fe=t("div",null,null,-1),Ne={class:"flex justify-end mt-4"},Ce={__name:"Form",props:{questions:Array},setup(o){const r=o,s=w(()=>r.questions),m=y(!0),v=(a,x)=>{let e=!0;e=f(a,x),m.value=e},f=(a,x)=>{var e=null;return s.value.map(l=>{l.id==x.id&&(a===null||a===""?(l.error="Obligatorio",e=!1):(delete l.error,e=!0))}),e},V=()=>{m.value=!0,s.value.forEach(a=>{a.answer?delete a.error:(a.error="Obligatorio",m.value=!1)}),m.value&&console.log("Guardando ...")},h=(a,x)=>{var e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return s.value.map(l=>{l.id==x.id&&(a===null||a===""?l.error="Obligatorio":a.match(e)?(delete l.error,i):l.error="Formato no valido")}),a.match(e)?(console.log("alido"),!0):(console.log("ahora si eno es valido"),!1)};return(a,x)=>(c(),p("div",re,[t("div",ne,[(c(!0),p(b,null,N(s.value,e=>(c(),p("div",null,[t("ul",null,[e.isDependent===null?(c(),p(b,{key:0},[e.type===0?(c(),p("li",ie,[t("div",null,[_(F,{question:e,modelValue:e.answer,"onUpdate:modelValue":[l=>e.answer=l,l=>v(e.answer,e)]},null,8,["question","modelValue","onUpdate:modelValue"]),t("div",de,[t("span",ue,g(e.error),1)])])])):e.type===1?(c(),p("li",ce,[t("div",null,[_(T,{question:e,modelValue:e.answer,"onUpdate:modelValue":[l=>e.answer=l,l=>v(e.answer,e)]},null,8,["question","modelValue","onUpdate:modelValue"]),t("div",me,[t("span",pe,g(e.error),1)])])])):e.type===2?(c(),p("li",ve,[_(T,{type:"date",question:e,modelValue:e.answer,"onUpdate:modelValue":[l=>e.answer=l,l=>v(e.answer,e)]},null,8,["question","modelValue","onUpdate:modelValue"]),t("div",_e,[t("span",ge,g(e.error),1)])])):e.type===3?(c(),p("li",Ve,[_(T,{type:"number",question:e,modelValue:e.answer,"onUpdate:modelValue":[l=>e.answer=l,l=>v(e.answer,e)]},null,8,["question","modelValue","onUpdate:modelValue"]),t("div",fe,[t("span",he,g(e.error),1)])])):e.type===8?(c(),p("li",xe,[_(oe,{question:e,modelValue:e.answer,"onUpdate:modelValue":[l=>e.answer=l,l=>h(l,e)]},null,8,["question","modelValue","onUpdate:modelValue"]),t("div",ye,[t("span",we,g(e.error),1)])])):e.type===10?(c(),p("li",be,[_(te,{question:e,modelValue:e.answer,"onUpdate:modelValue":[l=>e.answer=l,l=>v(e.answer,e)],error:!!e.error},null,8,["question","modelValue","onUpdate:modelValue","error"]),t("div",$e,[t("span",Ue,g(e.error),1)])])):e.type===11?(c(),p("li",ke,[_(Y,{question:e,modelValue:e.answer,"onUpdate:modelValue":[l=>e.answer=l,l=>v(e.answer,e)],error:!!e.error},null,8,["question","modelValue","onUpdate:modelValue","error"]),t("div",De,[t("span",Se,g(e.error),1)])])):e.type===1e5?(c(),p("li",Te,[t("div",null,[_(F,{question:e,modelValue:e.answer,"onUpdate:modelValue":[l=>e.answer=l,l=>v(e.answer,e)]},null,8,["question","modelValue","onUpdate:modelValue"]),t("div",Pe,[t("span",Ae,g(e.error),1)])]),Fe])):P("",!0)],64)):P("",!0)])]))),256)),t("div",Ne,[_(C,{title:"Guardar sección",isDisabled:!m.value,onClick:V},null,8,["isDisabled"])]),t("pre",null,"                "+g(s.value)+`
            `,1)])]))}},Ee={class:"grid grid-cols-4 gap-4"},Oe=t("div",{class:"col-span-4 rounded-lg bg-blue-100 p-4 text-blue-700 mb-1 text-sm"}," ¡Lea y responda! detenidamente todas las preguntas planteadas. Estudiante que no declare correctamente tendrá la sanción respectiva. ",-1),je={class:"col-span-1"},ze={class:"col-span-3 rounded-lg bg-white p-4 shadow-lg"},Be={class:""},Ie={class:"text-lg font-semibold mb-3 uppercase"},Le={key:0,class:"text-center text-lg uppercase font-extrabold text-gray-400 align-items-center"},tt={__name:"survey",setup(o){const r=new Q,s=Z(),m=G(),v=w(()=>s.sections),f=w(()=>[...s.questions]),V=w(()=>s.currentSurvey),h=w(()=>s.currentTopic),a=e=>{s.topics.map(l=>{l.id===s.currentTopic.id&&l.sections.map(async d=>{if(d.id==e)if(d.questions)s.questions=d.questions;else{let u=await r.getQuestions(d.id);u.sort((O,j)=>O.ordinal-j.ordinal),d.questions=u,s.questions=u}})})};return(()=>{s.setCurrentSurvey(m.params.id)})(),(e,l)=>(c(),D(M,null,{"header.title":S(()=>[A(g(V.value.title),1)]),"header.subtitle":S(()=>[A(g(V.value.subtitle),1)]),default:S(()=>{var d;return[t("div",Ee,[Oe,t("div",je,[_(K)]),t("div",ze,[t("div",Be,[t("h3",Ie,g(h.value.title),1)]),v.value.length==0?(c(),p("h4",Le," no hay secciones ")):(c(),p(b,{key:1},[(c(!0),p(b,null,N(v.value,n=>(c(),D(C,{key:n.id,title:n.title,onClick:u=>a(n.id),class:"me-3"},null,8,["title","onClick"]))),128)),((d=f.value)==null?void 0:d.length)>0?(c(),D(Ce,{key:0,questions:f.value},null,8,["questions"])):P("",!0)],64))])])]}),_:1}))}};export{tt as default};
