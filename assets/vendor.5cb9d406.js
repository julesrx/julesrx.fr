var m=Object.defineProperty,f=(i,e,t)=>e in i?m(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,r=(i,e,t)=>(f(i,typeof e!="symbol"?e+"":e,t),t);const n=i=>Math.floor(Math.random()*i)+1,u=i=>Math.floor(1/i*1e3);class c{constructor(e){r(this,"interval"),r(this,"elements",[]),r(this,"width",window.innerWidth),r(this,"height",window.innerHeight),this.setup(e),window.addEventListener("resize",this.setup.bind(this,e))}setup(e){var t,l;this.interval&&clearInterval(this.interval),this.width=window.innerWidth-5,this.height=window.innerHeight-5,this.elements=[...document.querySelectorAll((t=e==null?void 0:e.selector)!=null?t:".bounce")].map(h=>{var a,d;return h.style.position="absolute",{element:h,x:n(this.width),y:n(this.height),xSpeed:n(2)*(Math.random()>.5?1:-1),ySpeed:n(3)*(Math.random()>.5?1:-1),direction:Math.random()>.5?1:-1,tranformers:(a=e==null?void 0:e.frameTransformers)!=null?a:[],data:((d=e==null?void 0:e.frameTransformers)!=null?d:[]).reduce((s,o)=>(s[o.key]=o.initialValue,s),{})}}),this.interval=setInterval(this.frame.bind(this),u((l=e==null?void 0:e.fps)!=null?l:120))}frame(){for(const e of this.elements){for(const t of e.tranformers)e.data[t.key]=t.tranformer(e,e.data[t.key]);e.x=e.x+e.xSpeed,e.y=e.y+e.ySpeed,e.element.style.left=`${e.x}px`,e.element.style.top=`${e.y}px`,e.x+e.element.clientWidth>=this.width?(e.xSpeed=-e.xSpeed,e.x=this.width-e.element.clientWidth):e.x<=0&&(e.xSpeed=-e.xSpeed,e.x=0),e.y+e.element.clientHeight>=this.height?(e.ySpeed=-e.ySpeed,e.y=this.height-e.element.clientHeight):e.y<=0&&(e.ySpeed=-e.ySpeed,e.y=0)}}}export{c as B};
