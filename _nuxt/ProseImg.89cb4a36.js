import{M as a,N as i,a5 as n,a6 as c,z as h,w as o,U as u}from"./app.config.3e8b7945.js";const d=["src","alt","width","height"],m=a({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,s=i(()=>{var r;return(r=e.src)!=null&&r.startsWith("/")&&!e.src.startsWith("//")?o(e.src,u().app.baseURL):e.src});return(r,l)=>(n(),c("img",{src:h(s),alt:t.alt,width:t.width,height:t.height},null,8,d))}});export{m as default};
