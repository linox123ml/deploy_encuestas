import{i,o as d,c as u,a,t as c,k as m,J as p,F as g}from"./index-4eec3473.js";const y={class:"block text-sm font-medium leading-6 text-gray-900"},b={class:"relative mt-1 rounded-md shadow-sm"},f=["type","placeholder"],h={__name:"InputForm",props:{label:String,placeholder:String,type:{default:"text",type:String},modelValue:[String,Number]},emits:["update:modelValue","clickInput"],setup(e,{emit:s}){const r=e,n=i({get:()=>r.modelValue,set:l=>s("update:modelValue",l)});return(l,t)=>(d(),u(g,null,[a("label",y,c(e.label),1),a("div",b,[m(a("input",{onClick:t[0]||(t[0]=o=>l.$emit("clickInput")),"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),type:e.type,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6",placeholder:e.placeholder},null,8,f),[[p,n.value]])])],64))}};export{h as _};
