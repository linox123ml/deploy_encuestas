import{f as l,o as i,j as m,w as t,N as _,g as r,b as e,e as a,a as u,d as p,t as d,F as g}from"./index-2d42e2a7.js";import{_ as n}from"./ButtonPrimary-23d09a12.js";import{_ as v}from"./IndexSurvey-375f447b.js";const y={class:"grid grid-cols-4 gap-4"},x={class:"col-span-1"},f={class:"col-span-3 rounded-lg bg-white p-3"},h=e("div",{class:"px-6"},[e("h3",{class:"text-base font-semibold leading-7 text-gray-900"}," Bienvenido(a) "),e("p",{class:"mt-1 max-w-2xl text-sm leading-6 text-gray-500"}," FICHA INTEGRAL. ")],-1),k={class:"px-8 mt-6 border-t border-gray-100"},b={class:"divide-y divide-gray-100"},L={class:"px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},N={class:"text-sm font-medium leading-6 text-gray-900"},D={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},I={class:"border-t border-gray-100 pt-4 flex justify-end"},C={__name:"welcome",setup(A){const c=[{key:"Nombre(s)",value:"Denis Lino"},{key:"Apellidos",value:"Puma Ticona"},{key:"Lugar de origen",value:"Departamento, Provincia, Ditstrito"},{key:"Lugar de residencia",value:"Departamento, Provincia, Ditstrito"},{key:"Fecha de nacimiento",value:"25 de Julio del 1230"},{key:"Correo electronico",value:"dpumaticona@gmail.com"},{key:"Número de celular",value:"951208106"}];return(E,T)=>{const s=l("RouterLink");return i(),m(_,null,{"header.title":t(()=>[r("FICHA INTEGRAL DEL ESTUDIANTE UNIVERSITARIO")]),"header.subtitle":t(()=>[r("Los datos a registrar son de carácter confidencial")]),default:t(()=>[e("div",y,[e("div",x,[a(v)]),e("div",f,[h,e("div",k,[e("dl",b,[(i(),u(g,null,p(c,o=>e("div",L,[e("dt",N,d(o.key),1),e("dd",D,d(o.value),1)])),64))]),e("div",I,[a(s,{to:"/encuesta/1"},{default:t(()=>[a(n,{title:"Guardar"})]),_:1}),a(s,{to:"/encuesta/1"},{default:t(()=>[a(n,{class:"ms-3",title:"Guardar y continuar"})]),_:1})])])])])]),_:1})}}};export{C as default};
