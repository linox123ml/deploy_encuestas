import{I as f,r as _,o as u,c,j as l,u as t,_ as p,a as o,h as r,l as x,P as b,J as V,K as v,L as U,F as I,m as L,N,g as h,U as S}from"./index-16aab99a.js";const $="/una-surveys/logo.png",k=["onSubmit"],B={class:"flex justify-end mt-4"},C=o("svg",{class:"ml-2 -mr-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),M={__name:"LoginRegularForm",setup(g){const m=f(),i=new v,e=_({user:"70757845",password:"235679"}),n=async()=>{await i.login(e.value),m.push({name:"home"})};return(w,s)=>(u(),c("form",{class:"mt-4",onSubmit:V(n,["prevent"])},[l(t(p),{modelValue:e.value.user,"onUpdate:modelValue":s[0]||(s[0]=a=>e.value.user=a),class:"mb-2",placeholder:"Ingrese su usuario",label:"Usuario"},null,8,["modelValue"]),l(t(p),{modelValue:e.value.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.value.password=a),class:"mb-2",placeholder:"Ingrese su contaseña",label:"Contraseña",type:"password"},null,8,["modelValue"]),o("div",B,[l(t(b),{color:"default",tyep:"submit"},{suffix:r(()=>[C]),default:r(()=>[x(" Ingresar ")]),_:1})])],40,k))}},j=["onSubmit"],F={class:"flex justify-end mt-4"},P=o("svg",{class:"ml-2 -mr-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),R={__name:"LoginEntrantsForm",setup(g){const m=f(),i=new v,e=_({user:"70757845",password:"235679"}),n=async()=>{await i.login(e.value),m.push({name:"home"})};return(w,s)=>(u(),c("form",{class:"mt-4",onSubmit:V(n,["prevent"])},[l(t(p),{modelValue:e.value.user,"onUpdate:modelValue":s[0]||(s[0]=a=>e.value.user=a),modelModifiers:{trim:!0},class:"mb-2",placeholder:"Ingrese su numero de DNI",label:"DNI"},null,8,["modelValue"]),l(t(p),{modelValue:e.value.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.value.password=a),modelModifiers:{trim:!0},class:"mb-2",placeholder:"Ingrese su contaseña",label:"Contraseña",type:"password"},null,8,["modelValue"]),o("div",F,[l(t(b),{color:"default",tyep:"submit"},{suffix:r(()=>[P]),default:r(()=>[x(" Ingresar ")]),_:1})])],40,j))}},z={class:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},A=o("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[o("img",{class:"mx-auto h-24 w-auto",src:$,alt:"UNA PUNO"})],-1),E={__name:"login",setup(g){const m=f(),i=new v,e=[{name:"entrants",title:"Ingresante"},{name:"regular",title:"Regulares"}],n=_("entrants");return(async()=>{i.validateUser()&&m.push({name:"home"})})(),(s,a)=>(u(),c("div",z,[A,l(t(S),{class:"sm:mx-auto sm:w-full sm:max-w-sm mt-10",variant:"image"},{default:r(()=>[l(t(U),{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=d=>n.value=d)},{default:r(()=>[(u(),c(I,null,L(e,(d,y)=>l(t(N),{key:y,name:d.name,title:d.title},{default:r(()=>[d.name==="regular"?(u(),h(M,{key:0})):(u(),h(R,{key:1}))]),_:2},1032,["name","title"])),64))]),_:1},8,["modelValue"])]),_:1})]))}};export{E as default};
