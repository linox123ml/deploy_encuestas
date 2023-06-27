import{_ as g}from"./InputForm-eed7e9dd.js";import{_ as r}from"./ButtonPrimary-016e0b7f.js";import{o as l,c as i,a as e,e as _,t as I,h as D,n as q,i as B,j as h,k as C,v as E,F as f,l as V,b as t,g as $,w as c}from"./index-4eec3473.js";import{_ as S}from"./HSelect-448f3bb9.js";import"./use-outside-click-bb517905.js";import"./use-text-value-12d304eb.js";import"./hidden-64c51462.js";const w={class:"flex justify-between align-center"},N={class:"text-base font-semibold mt-2"},U={key:0,class:"h-px flex-auto bg-gray-100 my-3"},k={__name:"WrapperSection",props:{listClass:{default:"rounded-lg border-solid border-2 border-gray-100",type:String},title:String,withHeader:{default:!0,type:Boolean}},setup(o){return(n,d)=>(l(),i("div",{class:q(["mt-4",o.listClass])},[e("div",w,[_(n.$slots,"title",{},()=>[e("h4",N,I(o.title),1)]),_(n.$slots,"actions")]),o.withHeader?(l(),i("div",U)):D("",!0),_(n.$slots,"inputs"),_(n.$slots,"content")],2))}},T=["id","value","name"],P=["for"],b={__name:"CheckBoxesFrom",props:{questionIndex:[Number,String],options:Array,modelValue:{type:Array,default:[]}},emits:["update:modelValue"],setup(o,{emit:n}){const d=o,v=B({get:()=>d.modelValue,set:u=>n("update:modelValue",u)});return(u,a)=>(l(!0),i(f,null,h(o.options,(p,s)=>(l(),i("div",{key:p.title,class:"flex items-center my-2"},[C(e("input",{id:`checkbox-${s}${o.questionIndex}`,type:"checkbox",value:p.id,"onUpdate:modelValue":a[0]||(a[0]=x=>v.value=x),name:`name-${s}${o.questionIndex}`,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,T),[[E,v.value]]),e("label",{for:`checkbox-${s}${o.questionIndex}`,class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},I(p.title),9,P)]))),128))}},j={class:"grid grid-cols-7 gap-6"},A={class:"col-span-7"},F={class:"grid grid-cols-2 gap-4"},H={class:"col-span-2 p-4 bg-white rounded-lg"},X=e("h2",{class:"text-lg mb-3 font-bold"}," Nueva encuesta",-1),L={class:"grid grid-cols-4"},M={class:"col-span-2 p-4"},R={class:"col-span-2 p-4"},z=e("label",{class:"block text-sm font-medium leading-6 text-gray-900"}," Dirigido a:",-1),K={class:"grid grid-cols-3 gap-4"},Q={class:"col-span-2"},W={class:"col-span-1"},G=e("label",{class:"block text-sm font-medium leading-6 text-gray-900"}," Tipipo de pregunta ",-1),J={class:"py2"},Y={class:"section-item bg-gray-200 rounded-md p-3 mt-4"},Z={class:"grid grid-cols-12 gap-1 mt-2"},ee={class:"col-span-10"},te={class:"col-span-2 flex items-end"},re={__name:"dashboard",setup(o){const n=[{id:"TEXT",title:"Texto"},{id:"NUMBER",title:"Número"},{id:"SELECT",title:"Desplegable"},{id:"RADIO",title:"Opcion unica"},{id:"CHECKBOX",title:"Opcion multiple"}],d=V({title:"Encuesta de ejemplo",secctions:[{title:"Seccion 1",description:"Descripcion de la seccion ",questions:[{statement:"Pregunta",options:[{title:"Opcion"},{title:"Opcion"},{title:"Opcion"}]},{statement:"Pregunta",options:[{title:"Opcion"},{title:"Opcion"},{title:"Opcion"}]}]},{title:"Seccion 2",description:"Descripcion de la seccion ",questions:{statement:"Pregunta",options:[{title:"Opcion"},{title:"Opcion"},{title:"Opcion"}]}}]});return V({id:1,title:"",to:"",topics:[{id:1,title:"",description:"",sections:[{id:1,title:"",description:"",isDependent:"",questions:[{id:1,statement:"",description:"",structure:{type:"TEXT ...",required:!0,inline:!0},options:[{id:1,title:""}]}]}]}]}),(v,u)=>(l(),i("div",j,[e("div",A,[e("div",F,[e("div",H,[X,e("div",L,[e("div",M,[t(g,{modelValue:d.value.title,"onUpdate:modelValue":u[0]||(u[0]=a=>d.value.title=a),label:"Nombre de la encuesta",placeholder:"Ingrese el nombre de la encuesta"},null,8,["modelValue"])]),e("div",R,[z,t(b,{options:[{id:1,title:"Estudiantes"},{id:2,title:"Docente"}]})])])]),(l(!0),i(f,null,h(d.value.secctions,(a,p)=>(l(),$(k,{title:"Sección "+(p+1),class:"col-span-2 rounded-lg border-solid border-2 border-gray-100 p-3 bg-white"},{actions:c(()=>[e("div",null,[t(r,{title:"Borrar"}),t(r,{class:"ms-2",title:"Duplicar"})])]),inputs:c(()=>[t(g,{modelValue:a.title,"onUpdate:modelValue":s=>a.title=s,label:"Nombre de sección",placeholder:"Ingrese el nombre de la encuesta"},null,8,["modelValue","onUpdate:modelValue"])]),content:c(()=>[(l(!0),i(f,null,h(a.questions,(s,x)=>(l(),$(k,{title:"Pregunta "+(x+1),class:"p-3 border-t-2 border-gray-400"},{actions:c(()=>[e("div",null,[t(r,{title:"Borrar"}),t(r,{class:"ms-2",title:"Duplicar"})])]),inputs:c(()=>[e("div",K,[e("div",Q,[t(g,{modelValue:s.statement,"onUpdate:modelValue":m=>s.statement=m,label:"Enunciado de la pregunta",placeholder:"Ingrese el enunciado de la pregunta"},null,8,["modelValue","onUpdate:modelValue"])]),e("div",W,[G,t(S,{options:n})])])]),content:c(()=>[e("div",J,[t(b,{questionIndex:`${s.id}-required`,options:[{title:"Obligatorio"}]},null,8,["questionIndex"]),t(b,{questionIndex:`${s.id}-inline`,options:[{title:"Inline"}]},null,8,["questionIndex"]),t(b,{questionIndex:`${s.id}-depent`,options:[{title:"Depende de otra pregunta"}]},null,8,["questionIndex"])]),e("div",Y,[(l(!0),i(f,null,h(s.options,(m,y)=>(l(),i("div",Z,[e("div",ee,[t(g,{modelValue:m.title,"onUpdate:modelValue":O=>m.title=O,label:"Opcion "+(y+1),placeholder:"Ingrese la opcion "+(y+1)},null,8,["modelValue","onUpdate:modelValue","label","placeholder"])]),e("div",te,[t(r,{class:"ms-2",title:"-"}),t(r,{class:"ms-2",title:"+"})])]))),256))])]),_:2},1032,["title"]))),256))]),_:2},1032,["title"]))),256))])])]))}};export{re as default};
