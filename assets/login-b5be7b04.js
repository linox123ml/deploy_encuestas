import{H as d,I as c,r as m,o as f,a as p,b as e,J as g,E as r,K as n,_ as x,L as b}from"./index-2d42e2a7.js";const v={class:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},h=e("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[e("img",{class:"mx-auto h-24 w-auto",src:x,alt:"UNA PUNO"})],-1),w={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},_=["onSubmit"],y=e("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"DNI",-1),k={class:"mt-2"},U=e("div",{class:"flex items-center justify-between"},[e("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Contraseña"),e("div",{class:"text-sm"},[e("a",{href:"#",class:"font-semibold text-blue-600 hover:text-blue-500"},"Olvidaste tu contraseña?")])],-1),N={class:"mt-2"},S=e("div",null,[e("button",{type:"submit",class:"flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"}," Ingresar ")],-1),L={__name:"login",setup(j){const l=d();c();const a=new b,s=m({user:"10102020",password:""}),u=async()=>{try{await a.login(s.value),l.push({name:"home"})}catch{alert("Ocurrio un error")}};return(async()=>{a.validateUser()&&l.push({name:"home"})})(),(i,t)=>(f(),p("div",v,[h,e("div",w,[e("form",{class:"space-y-6",onSubmit:g(u,["prevent"])},[e("div",null,[y,e("div",k,[r(e("input",{id:"text",name:"user",type:"user",autocomplete:"user",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>s.value.user=o),class:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"},null,512),[[n,s.value.user]])])]),e("div",null,[U,e("div",N,[r(e("input",{id:"password",name:"password",type:"password",autocomplete:"current-password",required:"","onUpdate:modelValue":t[1]||(t[1]=o=>s.value.password=o),class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"},null,512),[[n,s.value.password]])])]),S],40,_)])]))}};export{L as default};
