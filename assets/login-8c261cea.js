import{C as w,r as m,o as r,c as d,j as a,u as l,D as b,x as V,_ as f,a as n,h as u,l as g,P as L,E as U,G as h,A as S,H as k,t as I,M,F as N,L as $,m as C,N as B,g as y,U as j}from"./index-63e2209e.js";const D="/una-surveys/logo.png",E=["onSubmit"],F={key:0,class:"loading"},R={class:"flex justify-end mt-4"},A=n("svg",{class:"ml-2 -mr-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),H={__name:"LoginRegularForm",setup(x){const c=w(),p=new h,o=m(!1),e=m({username:"conxuro",password:"eriksoneira"}),i=async()=>{o.value=!0,await p.loginRegular(e.value),o.value=!1,c.push({name:"home"})};return(v,t)=>(r(),d("form",{class:"mt-4",onSubmit:U(i,["prevent"])},[o.value?(r(),d("div",F,[a(l(b))])):V("",!0),a(l(f),{modelValue:e.value.username,"onUpdate:modelValue":t[0]||(t[0]=s=>e.value.username=s),class:"mb-2",placeholder:"Ingrese su usuario",label:"Usuario"},null,8,["modelValue"]),a(l(f),{modelValue:e.value.password,"onUpdate:modelValue":t[1]||(t[1]=s=>e.value.password=s),class:"mb-2",placeholder:"Ingrese su contaseña",label:"Contraseña",type:"password"},null,8,["modelValue"]),n("div",R,[a(l(L),{color:"default",tyep:"submit"},{suffix:u(()=>[A]),default:u(()=>[g(" Ingresar ")]),_:1})])],40,E))}},P=["onSubmit"],z={key:0,class:"loading"},T={class:"flex justify-end mt-4"},G=n("svg",{class:"ml-2 -mr-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),O={__name:"LoginEntrantsForm",setup(x){const c=w(),p=new h,o=m(!1),e=m({username:"70757838",password:"230001"}),i=m(null),v=async()=>{i.value=null,o.value=!0;let t=await p.loginEntrants(e.value);console.log(t),o.value=!1,c.push({name:"home"})};return(t,s)=>(r(),d(N,null,[S(a(l(M),{type:"danger",class:"mt-4",closable:""},{default:u(()=>[g(I(i.value),1)]),_:1},512),[[k,i.value!==null]]),n("form",{class:"mt-4",onSubmit:U(v,["prevent"])},[o.value?(r(),d("div",z,[a(l(b))])):V("",!0),a(l(f),{modelValue:e.value.username,"onUpdate:modelValue":s[0]||(s[0]=_=>e.value.username=_),modelModifiers:{trim:!0},class:"mb-2",placeholder:"Ingrese su numero de DNI",label:"DNI"},null,8,["modelValue"]),a(l(f),{modelValue:e.value.password,"onUpdate:modelValue":s[1]||(s[1]=_=>e.value.password=_),modelModifiers:{trim:!0},class:"mb-2",placeholder:"Ingrese su contaseña",label:"Contraseña",type:"password"},null,8,["modelValue"]),n("div",T,[a(l(L),{color:"default",tyep:"submit"},{suffix:u(()=>[G]),default:u(()=>[g(" Ingresar ")]),_:1})])],40,P)],64))}};const q={class:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},J=n("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[n("img",{class:"mx-auto h-24 w-auto",src:D,alt:"UNA PUNO"})],-1),Q={__name:"login",setup(x){const c=w(),p=new h,o=[{name:"entrants",title:"Ingresante"},{name:"regular",title:"Regulares"}],e=m("entrants");return(async()=>{p.validateUser()&&c.push({name:"home"})})(),(v,t)=>(r(),d("div",q,[J,a(l(j),{class:"relative sm:mx-auto sm:w-full sm:max-w-sm mt-10",variant:"image"},{default:u(()=>[a(l($),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=s=>e.value=s)},{default:u(()=>[(r(),d(N,null,C(o,(s,_)=>a(l(B),{key:_,name:s.name,title:s.title},{default:u(()=>[s.name==="regular"?(r(),y(H,{key:0})):(r(),y(O,{key:1}))]),_:2},1032,["name","title"])),64))]),_:1},8,["modelValue"])]),_:1})]))}};export{Q as default};
