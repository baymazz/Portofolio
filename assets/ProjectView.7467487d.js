import{o as a,c as n,a as r,t as i,_ as c,h as p,r as m,i as s,j as l,F as d}from"./index.e8db1dfa.js";const k={class:"tempProject"},b=["src","alt"],g={__name:"BaseProject",props:{label:{type:String,required:!0},source:{type:String,required:!0},detail:{type:String,required:!0}},setup(e){return(o,u)=>(a(),n("div",k,[r("h1",null,i(e.label),1),r("img",{src:e.source,alt:e.label},null,8,b),r("p",null,i(e.detail),1)]))}},h={name:"ProjectView",components:{BaseProject:g},data:()=>({temp:p().currentRoute.value.params.projectName,webku:{name:"Blog Pribadi",src:"/src/assets/webFauzi.png",detail:"Merupakan tugas mata kuliah Pengantar Teknik"},dietku:{name:"Diet KU",src:"/src/assets/dietku.png",detail:"Merupakan proyek akhir dari mata kuliah Desain & Pemrograman Web"},mobileApp:{name:"Mobile App",src:"/src/assets/mobile.png",detail:"Merupakan proyek akhir dari mata kuliah Pengembangan Berbasis Platform"}})};function P(e,o,u,_,y,B){const t=m("BaseProject");return a(),n(d,null,[this.temp=="webku"?(a(),s(t,{key:0,label:e.webku.name,source:e.webku.src,detail:e.webku.detail},null,8,["label","source","detail"])):l("",!0),this.temp=="dietku"?(a(),s(t,{key:1,label:e.dietku.name,source:e.dietku.src,detail:e.dietku.detail},null,8,["label","source","detail"])):l("",!0),this.temp=="mobileApp"?(a(),s(t,{key:2,label:e.mobileApp.name,source:e.mobileApp.src,detail:e.mobileApp.detail},null,8,["label","source","detail"])):l("",!0)],64)}const f=c(h,[["render",P]]);export{f as default};
