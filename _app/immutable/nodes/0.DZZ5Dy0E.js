import{d as br,e as _n,b as qt,o as Ze,c as h,a as s,f as P,g as qr,i as yn,j as bn,t as We,s as Bt,k as Mt,p as wn}from"../chunks/CHYZP8Rr.js";import{t as me,h as wr,d as xr,a2 as xn,aX as pn,N as pr,ak as kn,aB as Tn,aO as In,aI as Sn,T as Pn,aC as Dt,x as Ue,z as Ke,u as He,ad as X,i as t,k as c,a0 as vt,af as m,aW as fr,p as J,f,a as Q,s as M,o as Vt,c as Y,r as U,aQ as Mn,aR as kr,aS as Cn,n as ae,l as Vr,e as Ur,m as nt,q as Qe,j as ar,g as Nt,aY as En}from"../chunks/D2l8O0Ot.js";import{P as V,l as sr,L as Xe,M as Je,Q as ye,R as Ge,S as er,s as te,U as An,a as Wr,V as Bn,I as $e,c as Dn,B as ze,z as Nn,T as Kr,d as Yr,e as ht,f as Ne,b as It,F as Tt,J as Tr,H as Ir,w as Sr,X as St,A as Pr,Y as tr,Z as pt,_ as Mr,$ as Cr,a0 as Er,a1 as Ar,y as Rt,a2 as Br,a3 as Rn,a4 as Ln,r as On,a5 as zn,a6 as Hn,h as Fn,i as Dr,a7 as rr,a8 as nr,j as jn}from"../chunks/DQ9hpf83.js";import{p as qn}from"../chunks/EVYgI7kX.js";import{M as Vn,s as Un}from"../chunks/BnK6ph1T.js";import{i as I,p as x,b as Gr,s as ke,r as Ce}from"../chunks/C8aRbOnS.js";import{c as rt}from"../chunks/CHRJgWt6.js";import{i as Ct}from"../chunks/Cx3GOipP.js";import{C as Xr,l as Wn,w as ir,p as Kn,S as Yn,m as Nr,q as Rr,V as Gn,k as Xn,j as Jn,r as Qn,a as Ve,u as Zn}from"../chunks/KbrC5Pwm.js";import{H as $n,C as eo,M as to,R as Jr,D as Qr,a as Zr,b as $r,c as en}from"../chunks/_2wnUpDV.js";import{D as tn}from"../chunks/DJ6DKGG8.js";import{R as ro}from"../chunks/CThsl-j0.js";function no(n,e,r=!1,o=!1,a=!1){var l=n,i="";me(()=>{var u=xn;if(i===(i=e()??"")){wr&&xr();return}if(u.nodes_start!==null&&(pn(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),i!==""){if(wr){pr.data;for(var g=xr(),y=g;g!==null&&(g.nodeType!==kn||g.data!=="");)y=g,g=Tn(g);if(g===null)throw In(),Sn;br(pr,y),l=Pn(g);return}var b=i+"";r?b=`<svg>${b}</svg>`:o&&(b=`<math>${b}</math>`);var D=_n(b);if((r||o)&&(D=Dt(D)),br(Dt(D),D.lastChild),r||o)for(;Dt(D);)l.before(Dt(D));else l.before(D)}})}const oo=!1,ao=!0,so="always",qs=Object.freeze(Object.defineProperty({__proto__:null,prerender:ao,ssr:oo,trailingSlash:so},Symbol.toStringTag,{value:"Module"})),io=""+new URL("../assets/favicon.DDmz9QoX.ico",import.meta.url).href,rn=typeof window<"u"?window:void 0;function lo(n){let e=n.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}let co=class{#t;#e;constructor(e={}){const{window:r=rn,document:o=r?.document}=e;r!==void 0&&(this.#t=o,this.#e=qt(a=>{const l=Ze(r,"focusin",a),i=Ze(r,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?lo(this.#t):null}};new co;function uo(n,e){switch(n){case"post":Ke(e);break;case"pre":Ue(e);break}}function nn(n,e,r,o={}){const{lazy:a=!1}=o;let l=!a,i=Array.isArray(n)?[]:void 0;uo(e,()=>{const u=Array.isArray(n)?n.map(y=>y()):n();if(!l){l=!0,i=u;return}const g=He(()=>r(u,i));return i=u,g})}function hr(n,e,r){nn(n,"post",e,r)}function fo(n,e,r){nn(n,"pre",e,r)}hr.pre=fo;function ho(n,e){switch(n){case"local":return e.localStorage;case"session":return e.sessionStorage}}class on{#t;#e;#r;#n;#o;#a=X(0);constructor(e,r,o={}){const{storage:a="local",serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:i=!0,window:u=rn}=o;if(this.#t=r,this.#e=e,this.#r=l,u===void 0)return;const g=ho(a,u);this.#n=g;const y=g.getItem(e);y!==null?this.#t=this.#i(y):this.#l(r),i&&a==="local"&&(this.#o=qt(()=>Ze(u,"storage",this.#s)))}get current(){this.#o?.(),t(this.#a);const e=this.#i(this.#n?.getItem(this.#e))??this.#t,r=new WeakMap,o=a=>{if(a===null||a?.constructor.name==="Date"||typeof a!="object")return a;let l=r.get(a);return l||(l=new Proxy(a,{get:(i,u)=>(t(this.#a),o(Reflect.get(i,u))),set:(i,u,g)=>(c(this.#a,t(this.#a)+1),Reflect.set(i,u,g),this.#l(e),!0)}),r.set(a,l)),l};return o(e)}set current(e){this.#l(e),c(this.#a,t(this.#a)+1)}#s=e=>{e.key!==this.#e||e.newValue===null||(this.#t=this.#i(e.newValue),c(this.#a,t(this.#a)+1))};#i(e){try{return this.#r.deserialize(e)}catch(r){console.error(`Error when parsing "${e}" from persisted store "${this.#e}"`,r);return}}#l(e){try{e!=null&&this.#n?.setItem(this.#e,this.#r.serialize(e))}catch(r){console.error(`Error when writing value from persisted store "${this.#e}" to ${this.#n}`,r)}}}function Lr(n){return n.filter(e=>e.length>0)}const an={getItem:n=>null,setItem:(n,e)=>{}},Et=typeof document<"u";function vo(n){return typeof n=="function"}function mo(n){return n!==null&&typeof n=="object"}const Pt=Symbol("box"),vr=Symbol("is-writable");function go(n){return mo(n)&&Pt in n}function _o(n){return ce.isBox(n)&&vr in n}function ce(n){let e=X(vt(n));return{[Pt]:!0,[vr]:!0,get current(){return t(e)},set current(r){c(e,r,!0)}}}function yo(n,e){const r=m(n);return e?{[Pt]:!0,[vr]:!0,get current(){return t(r)},set current(o){e(o)}}:{[Pt]:!0,get current(){return n()}}}function bo(n){return ce.isBox(n)?n:vo(n)?ce.with(n):ce(n)}function wo(n){return Object.entries(n).reduce((e,[r,o])=>ce.isBox(o)?(ce.isWritableBox(o)?Object.defineProperty(e,r,{get(){return o.current},set(a){o.current=a}}):Object.defineProperty(e,r,{get(){return o.current}}),e):Object.assign(e,{[r]:o}),{})}function xo(n){return ce.isWritableBox(n)?{[Pt]:!0,get current(){return n.current}}:n}ce.from=bo;ce.with=yo;ce.flatten=wo;ce.readonly=xo;ce.isBox=go;ce.isWritableBox=_o;function po(n,e){const r=RegExp(n,"g");return o=>{if(typeof o!="string")throw new TypeError(`expected an argument of type string, but got ${typeof o}`);return o.match(r)?o.replace(r,e):o}}const ko=po(/[A-Z]/,n=>`-${n.toLowerCase()}`);function To(n){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError(`expected an argument of type object, but got ${typeof n}`);return Object.keys(n).map(e=>`${ko(e)}: ${n[e]};`).join(`
`)}function Io(n={}){return To(n).replace(`
`," ")}const So={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",transform:"translateX(-100%)"};Io(So);const Po=typeof window<"u"?window:void 0;function Mo(n){let e=n.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}let Co=class{#t;#e;constructor(e={}){const{window:r=Po,document:o=r?.document}=e;r!==void 0&&(this.#t=o,this.#e=qt(a=>{const l=Ze(r,"focusin",a),i=Ze(r,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?Mo(this.#t):null}};new Co;const st=ce("mode-watcher-mode"),it=ce("mode-watcher-theme"),Eo=["dark","light","system"];function lr(n){return typeof n!="string"?!1:Eo.includes(n)}class Ao{#t="system";#e=Et?localStorage:an;#r=this.#e.getItem(st.current);#n=lr(this.#r)?this.#r:this.#t;#o=X(vt(this.#a()));#a(e=this.#n){return new on(st.current,e,{serializer:{serialize:r=>r,deserialize:r=>lr(r)?r:this.#t}})}constructor(){fr(()=>hr.pre(()=>st.current,(e,r)=>{const o=t(this.#o).current;c(this.#o,this.#a(o),!0),r&&localStorage.removeItem(r)}))}get current(){return t(this.#o).current}set current(e){t(this.#o).current=e}}class Bo{#t=void 0;#e=!0;#r=X(vt(this.#t));#n=typeof window<"u"&&typeof window.matchMedia=="function"?new Vn("prefers-color-scheme: light"):{current:!1};query(){Et&&c(this.#r,this.#n.current?"light":"dark",!0)}tracking(e){this.#e=e}constructor(){fr(()=>{Ue(()=>{this.#e&&this.query()})}),this.query=this.query.bind(this),this.tracking=this.tracking.bind(this)}get current(){return t(this.#r)}}const zt=new Ao,cr=new Bo;class Do{#t=Et?localStorage:an;#e=this.#t.getItem(it.current);#r=this.#e===null||this.#e===void 0?"":this.#e;#n=X(vt(this.#o()));#o(e=this.#r){return new on(it.current,e,{serializer:{serialize:r=>typeof r!="string"?"":r,deserialize:r=>r}})}constructor(){fr(()=>hr.pre(()=>it.current,(e,r)=>{const o=t(this.#n).current;c(this.#n,this.#o(o),!0),r&&localStorage.removeItem(r)}))}get current(){return t(this.#n).current}set current(e){t(this.#n).current=e}}const Ot=new Do;let Or,zr,Hr=!1,kt=null;function No(){return kt||(kt=document.createElement("style"),kt.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)),kt)}function sn(n,e=!1){if(typeof document>"u")return;if(!Hr){Hr=!0,n();return}if(typeof window<"u"&&window.__vitest_worker__){n();return}clearTimeout(Or),clearTimeout(zr);const o=No(),a=()=>document.head.appendChild(o),l=()=>{o.parentNode&&document.head.removeChild(o)};function i(){n(),window.requestAnimationFrame(l)}if(typeof window.requestAnimationFrame<"u"){a(),e?i():window.requestAnimationFrame(()=>{i()});return}a(),Or=window.setTimeout(()=>{n(),zr=window.setTimeout(l,16)},16)}const ot=ce(void 0),Ht=ce(!0),Ft=ce(!1),ur=ce([]),dr=ce([]);function Ro(){const n=m(()=>{if(!Et)return;const e=zt.current==="system"?cr.current:zt.current,r=Lr(ur.current),o=Lr(dr.current);function a(){const l=document.documentElement,i=document.querySelector('meta[name="theme-color"]');e==="light"?(r.length&&l.classList.remove(...r),o.length&&l.classList.add(...o),l.style.colorScheme="light",i&&ot.current&&i.setAttribute("content",ot.current.light)):(o.length&&l.classList.remove(...o),r.length&&l.classList.add(...r),l.style.colorScheme="dark",i&&ot.current&&i.setAttribute("content",ot.current.dark))}return Ht.current?sn(a,Ft.current):a(),e});return{get current(){return t(n)}}}function Lo(){const n=m(()=>{if(Ot.current,!Et)return;function e(){document.documentElement.setAttribute("data-theme",Ot.current)}return Ht.current?sn(e,He(()=>Ft.current)):e(),Ot.current});return{get current(){return t(n)}}}const mr=Ro(),Oo=Lo();function zo(){zt.current=mr.current==="dark"?"light":"dark"}function Ho(n){zt.current=n}function Fo(n){Ot.current=n}function jo({defaultMode:n="system",themeColors:e,darkClassNames:r=["dark"],lightClassNames:o=[],defaultTheme:a="",modeStorageKey:l="mode-watcher-mode",themeStorageKey:i="mode-watcher-theme"}){const u=document.documentElement,g=localStorage.getItem(l)??n,y=localStorage.getItem(i)??a,b=g==="light"||g==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(b?(r.length&&u.classList.remove(...r.filter(Boolean)),o.length&&u.classList.add(...o.filter(Boolean))):(o.length&&u.classList.remove(...o.filter(Boolean)),r.length&&u.classList.add(...r.filter(Boolean))),u.style.colorScheme=b?"light":"dark",e){const D=document.querySelector('meta[name="theme-color"]');D&&D.setAttribute("content",g==="light"?e.light:e.dark)}y&&(u.setAttribute("data-theme",y),localStorage.setItem(i,y)),localStorage.setItem(l,g)}var qo=P('<meta name="theme-color"/>');function Vo(n,e){J(e,!0);var r=h(),o=f(r);{var a=l=>{var i=qo();me(()=>V(i,"content",e.themeColors.dark)),s(l,i)};I(o,l=>{e.themeColors&&l(a)})}s(n,r),Q()}var Uo=P('<meta name="theme-color"/>'),Wo=P("<!> <!>",1);function Ko(n,e){J(e,!0);let r=x(e,"trueNonce",3,"");qr(o=>{var a=Wo(),l=f(a);{var i=g=>{var y=Uo();me(()=>V(y,"content",e.themeColors.dark)),s(g,y)};I(l,g=>{e.themeColors&&g(i)})}var u=M(l,2);no(u,()=>`<script${r()?` nonce=${r()}`:""}>(`+jo.toString()+")("+JSON.stringify(e.initConfig)+");<\/script>"),s(o,a)}),Q()}function Yo(n,e){J(e,!0);let r=x(e,"track",3,!0),o=x(e,"defaultMode",3,"system"),a=x(e,"disableTransitions",3,!0),l=x(e,"darkClassNames",19,()=>["dark"]),i=x(e,"lightClassNames",19,()=>[]),u=x(e,"defaultTheme",3,""),g=x(e,"nonce",3,""),y=x(e,"themeStorageKey",3,"mode-watcher-theme"),b=x(e,"modeStorageKey",3,"mode-watcher-mode"),D=x(e,"disableHeadScriptInjection",3,!1),C=x(e,"synchronousModeChanges",3,!1);st.current=b(),it.current=y(),ur.current=l(),dr.current=i(),Ht.current=a(),ot.current=e.themeColors,Ft.current=C(),Ue(()=>{Ft.current=C()}),Ue(()=>{Ht.current=a()}),Ue(()=>{ot.current=e.themeColors}),Ue(()=>{ur.current=l()}),Ue(()=>{dr.current=i()}),Ue(()=>{st.current=b()}),Ue(()=>{it.current=y()}),Ue(()=>{mr.current,st.current,it.current,Oo.current}),Vt(()=>{cr.tracking(r()),cr.query();const A=localStorage.getItem(st.current);Ho(lr(A)?A:o());const Se=localStorage.getItem(it.current);Fo(Se||u())});const p={defaultMode:o(),themeColors:e.themeColors,darkClassNames:l(),lightClassNames:i(),defaultTheme:u(),modeStorageKey:b(),themeStorageKey:y()},E=m(()=>typeof window>"u"?g():"");var H=h(),Z=f(H);{var R=A=>{Vo(A,{get themeColors(){return ot.current}})},L=A=>{Ko(A,{get trueNonce(){return t(E)},get initConfig(){return p},get themeColors(){return ot.current}})};I(Z,A=>{D()?A(R):A(L,!1)})}s(n,H),Q()}const Go=Array(12).fill(0);var Xo=P('<div class="sonner-loading-bar"></div>'),Jo=P('<div><div class="sonner-spinner"></div></div>');function Qo(n,e){J(e,!0);var r=Jo(),o=Y(r);sr(o,23,()=>Go,(a,l)=>`spinner-bar-${l}`,(a,l)=>{var i=Xo();s(a,i)}),U(o),U(r),me(a=>{Je(r,1,a),V(r,"data-visible",e.visible)},[()=>Xe(["sonner-loading-wrapper",e.class].filter(Boolean).join(" "))]),s(n,r),Q()}const Zo=typeof window<"u"?window:void 0;function $o(n){let e=n.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class ea{#t;#e;constructor(e={}){const{window:r=Zo,document:o=r?.document}=e;r!==void 0&&(this.#t=o,this.#e=qt(a=>{const l=Ze(r,"focusin",a),i=Ze(r,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?$o(this.#t):null}}new ea;class ta{#t;#e;constructor(e){this.#t=e,this.#e=Symbol(e)}get key(){return this.#e}exists(){return Mn(this.#e)}get(){const e=kr(this.#e);if(e===void 0)throw new Error(`Context "${this.#t}" not found`);return e}getOr(e){const r=kr(this.#e);return r===void 0?e:r}set(e){return Cn(this.#e,e)}}const ra=new ta("<Toaster/>");function jt(n){return n.label!==void 0}function na(){let n=X(vt(typeof document<"u"?document.hidden:!1));return Ke(()=>Ze(document,"visibilitychange",()=>{c(n,document.hidden,!0)})),{get current(){return t(n)}}}const Fr=4e3,oa=14,aa=45,sa=200,ia=.05,la={toast:"",title:"",description:"",loader:"",closeButton:"",cancelButton:"",actionButton:"",action:"",warning:"",error:"",success:"",default:"",info:"",loading:""};function ca(n){const[e,r]=n.split("-"),o=[];return e&&o.push(e),r&&o.push(r),o}function jr(n){return 1/(1.5+Math.abs(n)/20)}var ua=P("<div><!></div>"),da=(n,e,r,o,a)=>{t(e)||!t(r)||(o(),a.toast.onDismiss?.(a.toast))},fa=P('<button data-close-button=""><!></button>'),ha=P('<div data-icon=""><!> <!></div>'),va=P('<div data-description=""><!></div>'),ma=(n,e,r,o)=>{jt(e.toast.cancel)&&t(r)&&(e.toast.cancel?.onClick?.(n),o())},ga=P('<button data-button="" data-cancel=""> </button>'),_a=(n,e,r)=>{jt(e.toast.action)&&(e.toast.action?.onClick(n),!n.defaultPrevented&&r())},ya=P('<button data-button=""> </button>'),ba=P('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>',1),wa=P('<li data-sonner-toast=""><!> <!></li>');function xa(n,e){J(e,!0);const r=k=>{var N=h(),F=f(N);{var K=j=>{var ge=ua(),at=Y(ge);te(at,()=>e.loadingIcon),U(ge),me(mt=>{Je(ge,1,mt),V(ge,"data-visible",t(w)==="loading")},[()=>Xe(Ge(t(re)?.loader,e.toast?.classes?.loader,"sonner-loader"))]),s(j,ge)},ee=j=>{{let ge=m(()=>Ge(t(re)?.loader,e.toast.classes?.loader)),at=m(()=>t(w)==="loading");Qo(j,{get class(){return t(ge)},get visible(){return t(at)}})}};I(F,j=>{e.loadingIcon?j(K):j(ee,!1)})}s(k,N)};let o=x(e,"cancelButtonStyle",3,""),a=x(e,"actionButtonStyle",3,""),l=x(e,"descriptionClass",3,""),i=x(e,"unstyled",3,!1),u=x(e,"defaultRichColors",3,!1);const g={...la};let y=X(!1),b=X(!1),D=X(!1),C=X(!1),p=X(!1),E=X(0),H=X(0),Z=e.toast.duration||e.duration||Fr,R=X(void 0),L=X(null),A=X(null);const Se=m(()=>e.index===0),G=m(()=>e.index+1<=e.visibleToasts),w=m(()=>e.toast.type),ve=m(()=>e.toast.dismissable!==!1),se=m(()=>e.toast.class||""),be=m(()=>e.toast.descriptionClass||""),ue=m(()=>ye.heights.findIndex(k=>k.toastId===e.toast.id)||0),Te=m(()=>e.toast.closeButton??e.closeButton),Pe=m(()=>e.toast.duration??e.duration??Fr);let we=null;const Fe=m(()=>e.position.split("-")),et=m(()=>ye.heights.reduce((k,N,F)=>F>=t(ue)?k:k+N.height,0)),lt=na(),je=m(()=>e.toast.invert||e.invert),qe=m(()=>t(w)==="loading"),re=m(()=>({...g,...e.classes})),Ee=m(()=>e.toast.title),Me=m(()=>e.toast.description);let ne=X(0),Ae=X(0);const d=m(()=>Math.round(t(ue)*oa+t(et)));Ke(()=>{t(Ee),t(Me);let k;e.expanded||e.expandByDefault?k=1:k=1-e.index*ia;const N=He(()=>t(R));if(N===void 0)return;N.style.setProperty("height","auto");const F=N.offsetHeight,K=N.getBoundingClientRect().height,ee=Math.round(K/k+Number.EPSILON&100)/100;N.style.removeProperty("height");let j;Math.abs(ee-F)<1?j=ee:j=F,c(H,j,!0),He(()=>{ye.setHeight({toastId:e.toast.id,height:j})})});function S(){c(b,!0),c(E,t(d),!0),ye.removeHeight(e.toast.id),setTimeout(()=>{ye.remove(e.toast.id)},sa)}let $;const W=m(()=>e.toast.promise&&t(w)==="loading"||e.toast.duration===Number.POSITIVE_INFINITY);function ie(){c(ne,new Date().getTime(),!0),$=setTimeout(()=>{e.toast.onAutoClose?.(e.toast),S()},Z)}function le(){if(t(Ae)<t(ne)){const k=new Date().getTime()-t(ne);Z=Z-k}c(Ae,new Date().getTime(),!0)}Ke(()=>{e.toast.updated&&(clearTimeout($),Z=t(Pe),ie())}),Ke(()=>(t(W)||(e.expanded||e.interacting||lt.current?le():ie()),()=>clearTimeout($))),Vt(()=>{c(y,!0);const k=t(R)?.getBoundingClientRect().height;return c(H,k,!0),ye.setHeight({toastId:e.toast.id,height:k}),()=>{ye.removeHeight(e.toast.id)}}),Ke(()=>{e.toast.delete&&He(()=>{S(),e.toast.onDismiss?.(e.toast)})});const tt=k=>{if(t(qe))return;c(E,t(d),!0);const N=k.target;N.setPointerCapture(k.pointerId),N.tagName!=="BUTTON"&&(c(D,!0),we={x:k.clientX,y:k.clientY})},ct=()=>{if(t(C)||!t(ve))return;we=null;const k=Number(t(R)?.style.getPropertyValue("--swipe-amount-x").replace("px","")||0),N=Number(t(R)?.style.getPropertyValue("--swipe-amount-y").replace("px","")||0),F=new Date().getTime()-0,K=t(L)==="x"?k:N,ee=Math.abs(K)/F;if(Math.abs(K)>=aa||ee>.11){c(E,t(d),!0),e.toast.onDismiss?.(e.toast),t(L)==="x"?c(A,k>0?"right":"left",!0):c(A,N>0?"down":"up",!0),S(),c(C,!0);return}else t(R)?.style.setProperty("--swipe-amount-x","0px"),t(R)?.style.setProperty("--swipe-amount-y","0px");c(p,!1),c(D,!1),c(L,null)},Re=k=>{if(!we||!t(ve)||(window.getSelection()?.toString().length??-1)>0)return;const F=k.clientY-we.y,K=k.clientX-we.x,ee=e.swipeDirections??ca(e.position);!t(L)&&(Math.abs(K)>1||Math.abs(F)>1)&&c(L,Math.abs(K)>Math.abs(F)?"x":"y",!0);let j={x:0,y:0};if(t(L)==="y"){if(ee.includes("top")||ee.includes("bottom"))if(ee.includes("top")&&F<0||ee.includes("bottom")&&F>0)j.y=F;else{const ge=F*jr(F);j.y=Math.abs(ge)<Math.abs(F)?ge:F}}else if(t(L)==="x"&&(ee.includes("left")||ee.includes("right")))if(ee.includes("left")&&K<0||ee.includes("right")&&K>0)j.x=K;else{const ge=K*jr(K);j.x=Math.abs(ge)<Math.abs(K)?ge:K}(Math.abs(j.x)>0||Math.abs(j.y)>0)&&c(p,!0),t(R)?.style.setProperty("--swipe-amount-x",`${j.x}px`),t(R)?.style.setProperty("--swipe-amount-y",`${j.y}px`)},Ye=()=>{c(D,!1),c(L,null),we=null},Ie=m(()=>e.toast.icon?e.toast.icon:t(w)==="success"?e.successIcon:t(w)==="error"?e.errorIcon:t(w)==="warning"?e.warningIcon:t(w)==="info"?e.infoIcon:t(w)==="loading"?e.loadingIcon:null);var B=wa();V(B,"tabindex",0);let At;B.__pointermove=Re,B.__pointerup=ct,B.__pointerdown=tt;var Ut=Y(B);{var Wt=k=>{var N=fa();N.__click=[da,qe,ve,S,e];var F=Y(N);te(F,()=>e.closeIcon??ae),U(N),me(K=>{V(N,"aria-label",e.closeButtonAriaLabel),V(N,"data-disabled",t(qe)),Je(N,1,K)},[()=>Xe(Ge(t(re)?.closeButton,e.toast?.classes?.closeButton))]),s(k,N)};I(Ut,k=>{t(Te)&&!e.toast.component&&t(w)!=="loading"&&e.closeIcon!==null&&k(Wt)})}var Kt=M(Ut,2);{var Yt=k=>{const N=m(()=>e.toast.component);var F=h(),K=f(F);rt(K,()=>t(N),(ee,j)=>{j(ee,ke(()=>e.toast.componentProps,{closeToast:S}))}),s(k,F)},Gt=k=>{var N=ba(),F=f(N);{var K=O=>{var v=ha(),T=Y(v);{var q=z=>{var fe=h(),pe=f(fe);{var he=_e=>{var De=h(),gt=f(De);rt(gt,()=>e.toast.icon,(_t,yt)=>{yt(_t,{})}),s(_e,De)},oe=_e=>{r(_e)};I(pe,_e=>{e.toast.icon?_e(he):_e(oe,!1)})}s(z,fe)};I(T,z=>{(e.toast.promise||t(w)==="loading")&&z(q)})}var de=M(T,2);{var _=z=>{var fe=h(),pe=f(fe);{var he=_e=>{var De=h(),gt=f(De);rt(gt,()=>e.toast.icon,(_t,yt)=>{yt(_t,{})}),s(_e,De)},oe=_e=>{var De=h(),gt=f(De);{var _t=ut=>{var bt=h(),Jt=f(bt);te(Jt,()=>e.successIcon??ae),s(ut,bt)},yt=ut=>{var bt=h(),Jt=f(bt);{var dn=dt=>{var wt=h(),Qt=f(wt);te(Qt,()=>e.errorIcon??ae),s(dt,wt)},fn=dt=>{var wt=h(),Qt=f(wt);{var hn=ft=>{var xt=h(),Zt=f(xt);te(Zt,()=>e.warningIcon??ae),s(ft,xt)},vn=ft=>{var xt=h(),Zt=f(xt);{var mn=$t=>{var yr=h(),gn=f(yr);te(gn,()=>e.infoIcon??ae),s($t,yr)};I(Zt,$t=>{t(w)==="info"&&$t(mn)},!0)}s(ft,xt)};I(Qt,ft=>{t(w)==="warning"?ft(hn):ft(vn,!1)},!0)}s(dt,wt)};I(Jt,dt=>{t(w)==="error"?dt(dn):dt(fn,!1)},!0)}s(ut,bt)};I(gt,ut=>{t(w)==="success"?ut(_t):ut(yt,!1)},!0)}s(_e,De)};I(pe,_e=>{e.toast.icon?_e(he):_e(oe,!1)})}s(z,fe)};I(de,z=>{e.toast.type!=="loading"&&z(_)})}U(v),me(z=>Je(v,1,z),[()=>Xe(Ge(t(re)?.icon,e.toast?.classes?.icon))]),s(O,v)};I(F,O=>{(t(w)||e.toast.icon||e.toast.promise)&&e.toast.icon!==null&&(t(Ie)!==null||e.toast.icon)&&O(K)})}var ee=M(F,2),j=Y(ee),ge=Y(j);{var at=O=>{var v=h(),T=f(v);{var q=_=>{const z=m(()=>e.toast.title);var fe=h(),pe=f(fe);rt(pe,()=>t(z),(he,oe)=>{oe(he,ke(()=>e.toast.componentProps))}),s(_,fe)},de=_=>{var z=We();me(()=>Bt(z,e.toast.title)),s(_,z)};I(T,_=>{typeof e.toast.title!="string"?_(q):_(de,!1)})}s(O,v)};I(ge,O=>{e.toast.title&&O(at)})}U(j);var mt=M(j,2);{var Xt=O=>{var v=va(),T=Y(v);{var q=_=>{const z=m(()=>e.toast.description);var fe=h(),pe=f(fe);rt(pe,()=>t(z),(he,oe)=>{oe(he,ke(()=>e.toast.componentProps))}),s(_,fe)},de=_=>{var z=We();me(()=>Bt(z,e.toast.description)),s(_,z)};I(T,_=>{typeof e.toast.description!="string"?_(q):_(de,!1)})}U(v),me(_=>Je(v,1,_),[()=>Xe(Ge(l(),t(be),t(re)?.description,e.toast.classes?.description))]),s(O,v)};I(mt,O=>{e.toast.description&&O(Xt)})}U(ee);var Be=M(ee,2);{var xe=O=>{var v=h(),T=f(v);{var q=_=>{var z=h(),fe=f(z);rt(fe,()=>e.toast.cancel,(pe,he)=>{he(pe,{})}),s(_,z)},de=_=>{var z=h(),fe=f(z);{var pe=he=>{var oe=ga();oe.__click=[ma,e,ve,S];var _e=Y(oe,!0);U(oe),me(De=>{er(oe,e.toast.cancelButtonStyle??o()),Je(oe,1,De),Bt(_e,e.toast.cancel.label)},[()=>Xe(Ge(t(re)?.cancelButton,e.toast?.classes?.cancelButton))]),s(he,oe)};I(fe,he=>{jt(e.toast.cancel)&&he(pe)},!0)}s(_,z)};I(T,_=>{typeof e.toast.cancel=="function"?_(q):_(de,!1)})}s(O,v)};I(Be,O=>{e.toast.cancel&&O(xe)})}var Le=M(Be,2);{var Oe=O=>{var v=h(),T=f(v);{var q=_=>{var z=h(),fe=f(z);rt(fe,()=>e.toast.action,(pe,he)=>{he(pe,{})}),s(_,z)},de=_=>{var z=h(),fe=f(z);{var pe=he=>{var oe=ya();oe.__click=[_a,e,S];var _e=Y(oe,!0);U(oe),me(De=>{er(oe,e.toast.actionButtonStyle??a()),Je(oe,1,De),Bt(_e,e.toast.action.label)},[()=>Xe(Ge(t(re)?.actionButton,e.toast?.classes?.actionButton))]),s(he,oe)};I(fe,he=>{jt(e.toast.action)&&he(pe)},!0)}s(_,z)};I(T,_=>{typeof e.toast.action=="function"?_(q):_(de,!1)})}s(O,v)};I(Le,O=>{e.toast.action&&O(Oe)})}me(O=>Je(j,1,O),[()=>Xe(Ge(t(re)?.title,e.toast?.classes?.title))]),s(k,N)};I(Kt,k=>{e.toast.component?k(Yt):k(Gt,!1)})}U(B),Gr(B,k=>c(R,k),()=>t(R)),me((k,N,F,K)=>{Je(B,1,k),V(B,"data-rich-colors",e.toast.richColors??u()),V(B,"data-styled",!(e.toast.component||e.toast.unstyled||i())),V(B,"data-mounted",t(y)),V(B,"data-promise",N),V(B,"data-swiped",t(p)),V(B,"data-removed",t(b)),V(B,"data-visible",t(G)),V(B,"data-y-position",t(Fe)[0]),V(B,"data-x-position",t(Fe)[1]),V(B,"data-index",e.index),V(B,"data-front",t(Se)),V(B,"data-swiping",t(D)),V(B,"data-dismissable",t(ve)),V(B,"data-type",t(w)),V(B,"data-invert",t(je)),V(B,"data-swipe-out",t(C)),V(B,"data-swipe-direction",t(A)),V(B,"data-expanded",F),At=er(B,`${e.style} ${e.toast.style}`,At,K)},[()=>Xe(Ge(e.class,t(se),t(re)?.toast,e.toast?.classes?.toast,t(re)?.[t(w)],e.toast?.classes?.[t(w)])),()=>!!e.toast.promise,()=>!!(e.expanded||e.expandByDefault&&t(y)),()=>({"--index":e.index,"--toasts-before":e.index,"--z-index":ye.toasts.length-e.index,"--offset":`${t(b)?t(E):t(d)}px`,"--initial-height":e.expandByDefault?"auto":`${t(H)}px`})]),yn("dragend",B,Ye),s(n,B),Q()}bn(["pointermove","pointerup","pointerdown","click"]);var pa=Mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');function ka(n){var e=pa();s(n,e)}var Ta=Mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');function Ia(n){var e=Ta();s(n,e)}var Sa=Mt('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');function Pa(n){var e=Sa();s(n,e)}var Ma=Mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');function Ca(n){var e=Ma();s(n,e)}var Ea=Mt('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');function Aa(n){var e=Ea();s(n,e)}const Ba=3,ln="24px",cn="16px",Da=4e3,Na=356,Ra=14,or="dark",Lt="light";function La(n,e){const r={};return[n,e].forEach((o,a)=>{const l=a===1,i=l?"--mobile-offset":"--offset",u=l?cn:ln;function g(y){["top","right","bottom","left"].forEach(b=>{r[`${i}-${b}`]=typeof y=="number"?`${y}px`:y})}typeof o=="number"||typeof o=="string"?g(o):typeof o=="object"?["top","right","bottom","left"].forEach(y=>{const b=o[y];b===void 0?r[`${i}-${y}`]=u:r[`${i}-${y}`]=typeof b=="number"?`${b}px`:b}):g(u)}),r}var Oa=P("<ol></ol>"),za=P('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-nbs0zk"><!></section>');function Ha(n,e){J(e,!0);function r(d){return d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?or:Lt}let o=x(e,"invert",3,!1),a=x(e,"position",3,"bottom-right"),l=x(e,"hotkey",19,()=>["altKey","KeyT"]),i=x(e,"expand",3,!1),u=x(e,"closeButton",3,!1),g=x(e,"offset",3,ln),y=x(e,"mobileOffset",3,cn),b=x(e,"theme",3,"light"),D=x(e,"richColors",3,!1),C=x(e,"duration",3,Da),p=x(e,"visibleToasts",3,Ba),E=x(e,"toastOptions",19,()=>({})),H=x(e,"dir",7,"auto"),Z=x(e,"gap",3,Ra),R=x(e,"containerAriaLabel",3,"Notifications"),L=x(e,"closeButtonAriaLabel",3,"Close toast"),A=Ce(e,["$$slots","$$events","$$legacy","invert","position","hotkey","expand","closeButton","offset","mobileOffset","theme","richColors","duration","visibleToasts","toastOptions","dir","gap","loadingIcon","successIcon","errorIcon","warningIcon","closeIcon","infoIcon","containerAriaLabel","class","closeButtonAriaLabel","onblur","onfocus","onmouseenter","onmousemove","onmouseleave","ondragend","onpointerdown","onpointerup"]);function Se(){if(H()!=="auto")return H();if(typeof window>"u"||typeof document>"u")return"ltr";const d=document.documentElement.getAttribute("dir");return d==="auto"||!d?(He(()=>H(window.getComputedStyle(document.documentElement).direction??"ltr")),H()):(He(()=>H(d)),d)}const G=m(()=>Array.from(new Set([a(),...ye.toasts.filter(d=>d.position).map(d=>d.position)].filter(Boolean))));let w=X(!1),ve=X(!1),se=X(vt(r(b()))),be=X(void 0),ue=X(null),Te=X(!1);const Pe=m(()=>l().join("+").replace(/Key/g,"").replace(/Digit/g,""));Ke(()=>{ye.toasts.length<=1&&c(w,!1)}),Ke(()=>{const d=ye.toasts.filter(S=>S.dismiss&&!S.delete);if(d.length>0){const S=ye.toasts.map($=>d.find(ie=>ie.id===$.id)?{...$,delete:!0}:$);ye.toasts=S}}),Ke(()=>()=>{t(be)&&t(ue)&&(t(ue).focus({preventScroll:!0}),c(ue,null),c(Te,!1))}),Vt(()=>(ye.reset(),Ze(document,"keydown",S=>{l().every(W=>S[W]||S.code===W)&&(c(w,!0),t(be)?.focus()),S.code==="Escape"&&(document.activeElement===t(be)||t(be)?.contains(document.activeElement))&&c(w,!1)}))),Ke(()=>{if(b()!=="system"&&c(se,b()),typeof window<"u"){b()==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?c(se,or):c(se,Lt));const d=window.matchMedia("(prefers-color-scheme: dark)"),S=({matches:$})=>{c(se,$?or:Lt,!0)};"addEventListener"in d?d.addEventListener("change",S):d.addListener(S)}});const we=d=>{e.onblur?.(d),t(Te)&&!d.currentTarget.contains(d.relatedTarget)&&(c(Te,!1),t(ue)&&(t(ue).focus({preventScroll:!0}),c(ue,null)))},Fe=d=>{e.onfocus?.(d),!(d.target instanceof HTMLElement&&d.target.dataset.dismissable==="false")&&(t(Te)||(c(Te,!0),c(ue,d.relatedTarget,!0)))},et=d=>{e.onpointerdown?.(d),!(d.target instanceof HTMLElement&&d.target.dataset.dismissable==="false")&&c(ve,!0)},lt=d=>{e.onmouseenter?.(d),c(w,!0)},je=d=>{e.onmouseleave?.(d),t(ve)||c(w,!1)},qe=d=>{e.onmousemove?.(d),c(w,!0)},re=d=>{e.ondragend?.(d),c(w,!1)},Ee=d=>{e.onpointerup?.(d),c(ve,!1)};ra.set(new An);var Me=za();V(Me,"tabindex",-1);var ne=Y(Me);{var Ae=d=>{var S=h(),$=f(S);sr($,18,()=>t(G),W=>W,(W,ie,le,tt)=>{const ct=m(()=>{const[Ie,B]=ie.split("-");return{y:Ie,x:B}}),Re=m(()=>La(g(),y()));var Ye=Oa();Wr(Ye,(Ie,B)=>({tabindex:-1,dir:Ie,class:e.class,"data-sonner-toaster":!0,"data-sonner-theme":t(se),"data-y-position":t(ct).y,"data-x-position":t(ct).x,style:e.style,onblur:we,onfocus:Fe,onmouseenter:lt,onmousemove:qe,onmouseleave:je,ondragend:re,onpointerdown:et,onpointerup:Ee,...A,[Bn]:B}),[Se,()=>({"--front-toast-height":`${ye.heights[0]?.height}px`,"--width":`${Na}px`,"--gap":`${Z()}px`,"--offset-top":t(Re)["--offset-top"],"--offset-right":t(Re)["--offset-right"],"--offset-bottom":t(Re)["--offset-bottom"],"--offset-left":t(Re)["--offset-left"],"--mobile-offset-top":t(Re)["--mobile-offset-top"],"--mobile-offset-right":t(Re)["--mobile-offset-right"],"--mobile-offset-bottom":t(Re)["--mobile-offset-bottom"],"--mobile-offset-left":t(Re)["--mobile-offset-left"]})],void 0,"svelte-nbs0zk"),sr(Ye,23,()=>ye.toasts.filter(Ie=>!Ie.position&&t(le)===0||Ie.position===ie),Ie=>Ie.id,(Ie,B,At,Ut)=>{{const Wt=Be=>{var xe=h(),Le=f(xe);{var Oe=v=>{var T=h(),q=f(T);te(q,()=>e.successIcon??ae),s(v,T)},O=v=>{var T=h(),q=f(T);{var de=_=>{ka(_)};I(q,_=>{e.successIcon!==null&&_(de)},!0)}s(v,T)};I(Le,v=>{e.successIcon?v(Oe):v(O,!1)})}s(Be,xe)},Kt=Be=>{var xe=h(),Le=f(xe);{var Oe=v=>{var T=h(),q=f(T);te(q,()=>e.errorIcon??ae),s(v,T)},O=v=>{var T=h(),q=f(T);{var de=_=>{Ia(_)};I(q,_=>{e.errorIcon!==null&&_(de)},!0)}s(v,T)};I(Le,v=>{e.errorIcon?v(Oe):v(O,!1)})}s(Be,xe)},Yt=Be=>{var xe=h(),Le=f(xe);{var Oe=v=>{var T=h(),q=f(T);te(q,()=>e.warningIcon??ae),s(v,T)},O=v=>{var T=h(),q=f(T);{var de=_=>{Pa(_)};I(q,_=>{e.warningIcon!==null&&_(de)},!0)}s(v,T)};I(Le,v=>{e.warningIcon?v(Oe):v(O,!1)})}s(Be,xe)},Gt=Be=>{var xe=h(),Le=f(xe);{var Oe=v=>{var T=h(),q=f(T);te(q,()=>e.infoIcon??ae),s(v,T)},O=v=>{var T=h(),q=f(T);{var de=_=>{Ca(_)};I(q,_=>{e.infoIcon!==null&&_(de)},!0)}s(v,T)};I(Le,v=>{e.infoIcon?v(Oe):v(O,!1)})}s(Be,xe)},k=Be=>{var xe=h(),Le=f(xe);{var Oe=v=>{var T=h(),q=f(T);te(q,()=>e.closeIcon??ae),s(v,T)},O=v=>{var T=h(),q=f(T);{var de=_=>{Aa(_)};I(q,_=>{e.closeIcon!==null&&_(de)},!0)}s(v,T)};I(Le,v=>{e.closeIcon?v(Oe):v(O,!1)})}s(Be,xe)};let N=m(()=>E()?.duration??C()),F=m(()=>E()?.class??""),K=m(()=>E()?.descriptionClass||""),ee=m(()=>E()?.style??""),j=m(()=>E().classes||{}),ge=m(()=>E().unstyled??!1),at=m(()=>E()?.cancelButtonStyle??""),mt=m(()=>E()?.actionButtonStyle??""),Xt=m(()=>E()?.closeButtonAriaLabel??L());xa(Ie,{get index(){return t(At)},get toast(){return t(B)},get defaultRichColors(){return D()},get duration(){return t(N)},get class(){return t(F)},get descriptionClass(){return t(K)},get invert(){return o()},get visibleToasts(){return p()},get closeButton(){return u()},get interacting(){return t(ve)},get position(){return ie},get style(){return t(ee)},get classes(){return t(j)},get unstyled(){return t(ge)},get cancelButtonStyle(){return t(at)},get actionButtonStyle(){return t(mt)},get closeButtonAriaLabel(){return t(Xt)},get expandByDefault(){return i()},get expanded(){return t(w)},get loadingIcon(){return e.loadingIcon},successIcon:Wt,errorIcon:Kt,warningIcon:Yt,infoIcon:Gt,closeIcon:k,$$slots:{successIcon:!0,errorIcon:!0,warningIcon:!0,infoIcon:!0,closeIcon:!0}})}}),U(Ye),Gr(Ye,Ie=>c(be,Ie),()=>t(be)),me(()=>Ye.dir=Ye.dir),s(W,Ye)}),s(d,S)};I(ne,d=>{ye.toasts.length>0&&d(Ae)})}U(Me),me(()=>V(Me,"aria-label",`${R()??""} ${t(Pe)??""}`)),s(n,Me),Q()}function Fa(n,e){J(e,!0);let r=Ce(e,["$$slots","$$events","$$legacy"]);Ha(n,ke({get theme(){return mr.current},class:"toaster group",style:"--normal-bg: var(--color-popover); --normal-text: var(--color-popover-foreground); --normal-border: var(--color-border);"},()=>r)),Q()}function ja(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.561.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]];$e(n,ke({name:"arrow-right-to-line"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function qa(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.561.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];$e(n,ke({name:"book-open"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Va(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.561.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];$e(n,ke({name:"calculator"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Ua(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.561.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];$e(n,ke({name:"clipboard"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Wa(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.561.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];$e(n,ke({name:"cog"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Ka(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.561.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];$e(n,ke({name:"download"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Ya(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.561.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];$e(n,ke({name:"github"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Ga(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.561.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];$e(n,ke({name:"info"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Xa(n,e){J(e,!0);/**
 * @license @lucide/svelte v0.561.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 2v2"}],["path",{d:"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"}],["path",{d:"M16 12a4 4 0 0 0-4-4"}],["path",{d:"m19 5-1.256 1.256"}],["path",{d:"M20 12h2"}]];$e(n,ke({name:"sun-moon"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}const Ja=Xn({component:"checkbox",parts:["root","group","group-label","input"]}),Qa=new Xr("Checkbox.Group"),un=new Xr("Checkbox.Root");class gr{static create(e,r=null){return un.set(new gr(e,r))}opts;group;#t=m(()=>this.group&&this.group.opts.name.current?this.group.opts.name.current:this.opts.name.current);get trueName(){return t(this.#t)}set trueName(e){c(this.#t,e)}#e=m(()=>this.group&&this.group.opts.required.current?!0:this.opts.required.current);get trueRequired(){return t(this.#e)}set trueRequired(e){c(this.#e,e)}#r=m(()=>this.group&&this.group.opts.disabled.current?!0:this.opts.disabled.current);get trueDisabled(){return t(this.#r)}set trueDisabled(e){c(this.#r,e)}#n=m(()=>this.group&&this.group.opts.readonly.current?!0:this.opts.readonly.current);get trueReadonly(){return t(this.#n)}set trueReadonly(e){c(this.#n,e)}attachment;constructor(e,r){this.opts=e,this.group=r,this.attachment=Wn(this.opts.ref),this.onkeydown=this.onkeydown.bind(this),this.onclick=this.onclick.bind(this),ir.pre([()=>Un(this.group?.opts.value.current),()=>this.opts.value.current],([o,a])=>{!o||!a||(this.opts.checked.current=o.includes(a))}),ir.pre(()=>this.opts.checked.current,o=>{this.group&&(o?this.group?.addValue(this.opts.value.current):this.group?.removeValue(this.opts.value.current))})}onkeydown(e){if(!(this.trueDisabled||this.trueReadonly)){if(e.key===Kn){e.preventDefault(),this.opts.type.current==="submit"&&e.currentTarget.closest("form")?.requestSubmit();return}e.key===Yn&&(e.preventDefault(),this.#o())}}#o(){this.opts.indeterminate.current?(this.opts.indeterminate.current=!1,this.opts.checked.current=!0):this.opts.checked.current=!this.opts.checked.current}onclick(e){if(!(this.trueDisabled||this.trueReadonly)){if(this.opts.type.current==="submit"){this.#o();return}e.preventDefault(),this.#o()}}#a=m(()=>({checked:this.opts.checked.current,indeterminate:this.opts.indeterminate.current}));get snippetProps(){return t(this.#a)}set snippetProps(e){c(this.#a,e)}#s=m(()=>({id:this.opts.id.current,role:"checkbox",type:this.opts.type.current,disabled:this.trueDisabled,"aria-checked":Gn(this.opts.checked.current,this.opts.indeterminate.current),"aria-required":Rr(this.trueRequired),"aria-readonly":Rr(this.trueReadonly),"data-disabled":Nr(this.trueDisabled),"data-readonly":Nr(this.trueReadonly),"data-state":Za(this.opts.checked.current,this.opts.indeterminate.current),[Ja.root]:"",onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment}));get props(){return t(this.#s)}set props(e){c(this.#s,e)}}class _r{static create(){return new _r(un.get())}root;#t=m(()=>this.root.group?!!(this.root.opts.value.current!==void 0&&this.root.group.opts.value.current.includes(this.root.opts.value.current)):this.root.opts.checked.current);get trueChecked(){return t(this.#t)}set trueChecked(e){c(this.#t,e)}#e=m(()=>!!this.root.trueName);get shouldRender(){return t(this.#e)}set shouldRender(e){c(this.#e,e)}constructor(e){this.root=e,this.onfocus=this.onfocus.bind(this)}onfocus(e){Jn(this.root.opts.ref.current)&&this.root.opts.ref.current.focus()}#r=m(()=>({type:"checkbox",checked:this.root.opts.checked.current===!0,disabled:this.root.trueDisabled,required:this.root.trueRequired,name:this.root.trueName,value:this.root.opts.value.current,readonly:this.root.trueReadonly,onfocus:this.onfocus}));get props(){return t(this.#r)}set props(e){c(this.#r,e)}}function Za(n,e){return e?"indeterminate":n?"checked":"unchecked"}function $a(n,e){J(e,!1);const r=_r.create();Ct();var o=h(),a=f(o);{var l=i=>{$n(i,ke(()=>r.props))};I(a,i=>{r.shouldRender&&i(l)})}s(n,o),Q()}var es=P("<button><!></button>"),ts=P("<!> <!>",1);function rs(n,e){const r=wn();J(e,!0);let o=x(e,"checked",15,!1),a=x(e,"ref",15,null),l=x(e,"disabled",3,!1),i=x(e,"required",3,!1),u=x(e,"name",3,void 0),g=x(e,"value",3,"on"),y=x(e,"id",19,()=>Qn(r)),b=x(e,"indeterminate",15,!1),D=x(e,"type",3,"button"),C=Ce(e,["$$slots","$$events","$$legacy","checked","ref","onCheckedChange","children","disabled","required","name","value","id","indeterminate","onIndeterminateChange","child","type","readonly"]);const p=Qa.getOr(null);p&&g()&&(p.opts.value.current.includes(g())?o(!0):o(!1)),ir.pre(()=>g(),()=>{p&&g()&&(p.opts.value.current.includes(g())?o(!0):o(!1))});const E=gr.create({checked:Ve(()=>o(),G=>{o(G),e.onCheckedChange?.(G)}),disabled:Ve(()=>l()??!1),required:Ve(()=>i()),name:Ve(()=>u()),value:Ve(()=>g()),id:Ve(()=>y()),ref:Ve(()=>a(),G=>a(G)),indeterminate:Ve(()=>b(),G=>{b(G),e.onIndeterminateChange?.(G)}),type:Ve(()=>D()),readonly:Ve(()=>!!e.readonly)},p),H=m(()=>Zn({...C},E.props));var Z=ts(),R=f(Z);{var L=G=>{var w=h(),ve=f(w);{let se=m(()=>({props:t(H),...E.snippetProps}));te(ve,()=>e.child,()=>t(se))}s(G,w)},A=G=>{var w=es();Wr(w,()=>({...t(H)}));var ve=Y(w);te(ve,()=>e.children??ae,()=>E.snippetProps),U(w),s(G,w)};I(R,G=>{e.child?G(L):G(A,!1)})}var Se=M(R,2);$a(Se,{}),s(n,Z),Q()}var ns=P('<div data-slot="checkbox-indicator" class="text-current transition-none"><!></div>');function os(n,e){J(e,!0);let r=x(e,"ref",15,null),o=x(e,"checked",15,!1),a=x(e,"indeterminate",15,!1),l=Ce(e,["$$slots","$$events","$$legacy","ref","checked","indeterminate","class"]);var i=h(),u=f(i);{const g=(b,D)=>{let C=()=>D?.().checked,p=()=>D?.().indeterminate;var E=ns(),H=Y(E);{var Z=L=>{eo(L,{class:"size-3.5"})},R=L=>{var A=h(),Se=f(A);{var G=w=>{to(w,{class:"size-3.5"})};I(Se,w=>{p()&&w(G)},!0)}s(L,A)};I(H,L=>{C()?L(Z):L(R,!1)})}U(E),s(b,E)};let y=m(()=>Dn("border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e.class));rt(u,()=>rs,(b,D)=>{D(b,ke({"data-slot":"checkbox",get class(){return t(y)}},()=>l,{get ref(){return r()},set ref(C){r(C)},get checked(){return o()},set checked(C){o(C)},get indeterminate(){return a()},set indeterminate(C){a(C)},children:g,$$slots:{default:!0}}))})}s(n,i),Q()}var as=P("<!> <!>",1),ss=P("Interval <!>",1),is=P("<!> <!>",1),ls=P("<!> <!>",1),cs=P("<!> <!>",1),us=P("<!> <!> <!> <!>",1),ds=P("<!> <!>",1),fs=P('<div class="flex flex-row gap-2"><!> <!> <!></div>'),hs=P("<!> <!>",1),vs=P("<div><!> <!></div>");function ms(n,e){J(e,!1);let r=nt(!1),o=nt(Ar),a=nt(pt),l,i=null,u=nt(!1);function g(H){const Z=[["rpcs",St],["callAbis",Sr],["txAbis",Ir],["testKeys",Tr]];for(const[R,L]of Z){const A=H[R];A&&L.set(A)}}function y(){if(!t(o)||t(o)<tr){Tt.warning(`invalid depth: depth must be at least ${tr}`);return}if(!t(a)||t(a)<pt){Tt.warning(`invalid interval: interval must be at least ${pt}`);return}Mr.set(t(o)),Cr.set(t(a)),Er.set(t(u)),l&&g(l),c(r,!1),Tt.info("successfully saved")}function b(H){if(i=H.target.files?.[0]??null,i){const R=new FileReader;R.onload=L=>{Pr(()=>{const A=L.target?.result;if(typeof A=="string")l=JSON.parse(A);else throw new Error("invalid file content")})},R.readAsText(i)}}function D(){const H={rpcs:St.get(),callAbis:Sr.get(),txAbis:Ir.get(),testKeys:Tr.get()};Pr(()=>{const Z=JSON.stringify(H,null,2),R=new Blob([Z],{type:"application/json"}),L=URL.createObjectURL(R),A=document.createElement("a");A.href=L,A.download=`env_${Date.now()}.json`,A.click(),URL.revokeObjectURL(L)})}Vr(()=>(t(r),Nn),()=>{t(r)&&(c(o,Mr.get()),c(a,Cr.get()),c(u,Er.get()))}),Ur(),Ct();var C=vs(),p=Y(C);ze(p,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{c(r,!0)},children:(H,Z)=>{Wa(H,{})},$$slots:{default:!0}});var E=M(p,2);Jr(E,{get open(){return t(r)},set open(H){c(r,H)},children:(H,Z)=>{Qr(H,{children:(R,L)=>{var A=hs(),Se=f(A);Zr(Se,{children:(w,ve)=>{var se=ds(),be=f(se);$r(be,{children:(Te,Pe)=>{Qe();var we=We("Setting");s(Te,we)},$$slots:{default:!0}});var ue=M(be,2);en(ue,{children:(Te,Pe)=>{Kr(Te,{children:(we,Fe)=>{Yr(we,{children:(et,lt)=>{var je=us(),qe=f(je);ht(qe,{children:(ne,Ae)=>{var d=as(),S=f(d);Ne(S,{children:(W,ie)=>{Qe();var le=We("Depth");s(W,le)},$$slots:{default:!0}});var $=M(S,2);Ne($,{children:(W,ie)=>{{let le=ar(()=>(Nt(Rt),He(()=>Ar.toString())));It(W,{type:"number",get min(){return Nt(Rt),He(()=>tr)},get placeholder(){return t(le)},get value(){return t(o)},set value(tt){c(o,tt)},$$legacy:!0})}},$$slots:{default:!0}}),s(ne,d)},$$slots:{default:!0}});var re=M(qe,2);ht(re,{children:(ne,Ae)=>{var d=is(),S=f(d);Ne(S,{children:(W,ie)=>{Qe();var le=ss(),tt=M(f(le));ze(tt,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{Tt.info("effective only for http/https rpc endpoints",{class:"whitespace-pre-line"})},children:(ct,Re)=>{Ga(ct,{})},$$slots:{default:!0}}),s(W,le)},$$slots:{default:!0}});var $=M(S,2);Ne($,{children:(W,ie)=>{{let le=ar(()=>(Nt(Rt),He(()=>`${pt.toString()} ms`)));It(W,{type:"number",get min(){return Nt(Rt),He(()=>pt)},get placeholder(){return t(le)},get value(){return t(a)},set value(tt){c(a,tt)},$$legacy:!0})}},$$slots:{default:!0}}),s(ne,d)},$$slots:{default:!0}});var Ee=M(re,2);ht(Ee,{children:(ne,Ae)=>{var d=ls(),S=f(d);Ne(S,{children:(W,ie)=>{Qe();var le=We("Metrics");s(W,le)},$$slots:{default:!0}});var $=M(S,2);Ne($,{children:(W,ie)=>{os(W,{get checked(){return t(u)},set checked(le){c(u,le)},$$legacy:!0})},$$slots:{default:!0}}),s(ne,d)},$$slots:{default:!0}});var Me=M(Ee,2);ht(Me,{children:(ne,Ae)=>{var d=cs(),S=f(d);Ne(S,{children:(W,ie)=>{Qe();var le=We("Environment");s(W,le)},$$slots:{default:!0}});var $=M(S,2);Ne($,{children:(W,ie)=>{It(W,{type:"file",class:"cursor-pointer",onchange:b})},$$slots:{default:!0}}),s(ne,d)},$$slots:{default:!0}}),s(et,je)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(w,se)},$$slots:{default:!0}});var G=M(Se,2);tn(G,{children:(w,ve)=>{var se=fs(),be=Y(se);ze(be,{variant:"outline",class:"cursor-pointer",onclick:D,children:(Pe,we)=>{Ka(Pe,{})},$$slots:{default:!0}});var ue=M(be,2);ze(ue,{class:"cursor-pointer",size:"icon",variant:"outline",get onclick(){return zo},children:(Pe,we)=>{Xa(Pe,{})},$$slots:{default:!0}});var Te=M(ue,2);ze(Te,{class:"cursor-pointer",variant:"outline",onclick:y,children:(Pe,we)=>{Qe();var Fe=We("Save");s(Pe,Fe)},$$slots:{default:!0}}),U(se),s(w,se)},$$slots:{default:!0}}),s(R,A)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),U(C),s(n,C),Q()}var gs=P("<!> <!>",1),_s=P('<div class="flex gap-2"><!> <!> <!></div>'),ys=P("<!> <!>",1),bs=P("<!> <!>",1),ws=P("<!> <!>",1),xs=P("<!> <!>",1),ps=P("<div><!> <!></div>");function ks(n,e){J(e,!1);let r=nt(!1),o=nt("0"),a=nt("0x00");function l(C){const p=C.currentTarget.value;p!==""&&/^\d+$/.test(p)&&(c(o,p),c(a,Br(p)))}function i(C){let p=C.currentTarget.value.trim();p===""||p==="0x"||(p.startsWith("0x")&&(p=p.slice(2)),/^[0-9a-fA-F]+$/.test(p)&&(c(a,`0x${p}`),c(o,Rn(t(a)).toString())))}function u(){t(o).length!==0&&c(a,Br(t(o),32))}async function g(){t(a).length!==0&&(await navigator.clipboard.writeText(t(a)),Tt.info(`copied hex: ${t(a)}`))}Vr(()=>t(r),()=>{t(r)&&(c(o,"0"),c(a,"0x00"))}),Ur(),Ct();var y=ps(),b=Y(y);ze(b,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{c(r,!0)},children:(C,p)=>{Va(C,{})},$$slots:{default:!0}});var D=M(b,2);Jr(D,{get open(){return t(r)},set open(C){c(r,C)},children:(C,p)=>{Qr(C,{children:(E,H)=>{var Z=xs(),R=f(Z);Zr(R,{children:(A,Se)=>{var G=ws(),w=f(G);$r(w,{children:(se,be)=>{Qe();var ue=We("Hex Converter");s(se,ue)},$$slots:{default:!0}});var ve=M(w,2);en(ve,{children:(se,be)=>{Kr(se,{children:(ue,Te)=>{Yr(ue,{children:(Pe,we)=>{var Fe=bs(),et=f(Fe);ht(et,{children:(je,qe)=>{var re=gs(),Ee=f(re);Ne(Ee,{children:(ne,Ae)=>{Qe();var d=We("Decimal");s(ne,d)},$$slots:{default:!0}});var Me=M(Ee,2);Ne(Me,{children:(ne,Ae)=>{It(ne,{placeholder:"0",get value(){return t(o)},oninput:l})},$$slots:{default:!0}}),s(je,re)},$$slots:{default:!0}});var lt=M(et,2);ht(lt,{children:(je,qe)=>{var re=ys(),Ee=f(re);Ne(Ee,{children:(ne,Ae)=>{Qe();var d=We("Hex");s(ne,d)},$$slots:{default:!0}});var Me=M(Ee,2);Ne(Me,{children:(ne,Ae)=>{var d=_s(),S=Y(d);It(S,{placeholder:"0x00",get value(){return t(a)},oninput:i});var $=M(S,2);ze($,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:u,children:(ie,le)=>{ja(ie,{})},$$slots:{default:!0}});var W=M($,2);ze(W,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:g,children:(ie,le)=>{Ua(ie,{})},$$slots:{default:!0}}),U(d),s(ne,d)},$$slots:{default:!0}}),s(je,re)},$$slots:{default:!0}}),s(Pe,Fe)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(A,G)},$$slots:{default:!0}});var L=M(R,2);tn(L,{}),s(E,Z)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),U(y),s(n,y),Q()}var Ts=P('<div class="flex w-full flex-row"><div class="ml-4 flex-1"><a class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">ETH UI</a></div> <div class="mr-4 flex flex-1 justify-end gap-2"><!> <!> <!></div></div>');function Is(n,e){J(e,!1);let r=nt("idle");Ln.subscribe(b=>{c(r,b)}),Ct();var o=Ts(),a=Y(o),l=Y(a);U(a);var i=M(a,2),u=Y(i);ze(u,{variant:"ghost",size:"icon",children:(b,D)=>{{let C=ar(()=>t(r)==="processing"?"animate-spin":"");ro(b,{get class(){return t(C)}})}},$$slots:{default:!0}});var g=M(u,2);ks(g,{});var y=M(g,2);ms(y,{}),U(i),U(o),me(b=>V(l,"href",b),[()=>On("/")]),s(n,o),Q()}var Ss=P('<div class="grid w-full grid-cols-3 items-center"><div></div> <p class="text-center">© 2025 code0xff</p> <div class="mr-4 flex justify-end gap-2"><!> <!></div></div>');function Ps(n,e){J(e,!1),Ct();var r=Ss(),o=M(Y(r),4),a=Y(o);ze(a,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(zn),children:(i,u)=>{qa(i,{})},$$slots:{default:!0}});var l=M(a,2);ze(l,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(Hn),children:(i,u)=>{Ya(i,{})},$$slots:{default:!0}}),U(o),U(r),s(n,r),Q()}var Ms=P('<link rel="icon"/>'),Cs=P('<!> <!> <div class="flex h-screen flex-col overflow-hidden"><div class="my-4 shrink-0"><!></div> <div class="flex min-h-0 flex-1 flex-col"><!></div> <div class="my-4 shrink-0"><!></div></div>',1);function Ws(n,e){J(e,!0);async function r(){let p=qn.url.searchParams.get("rpc"),E=St.get();p?(rr.set(p),[...E,...nr].includes(p)||St.set([...E,p])):p=rr.get(),E=St.get(),(!p||p.trim().length===0||![...E,...nr].includes(p))&&rr.set(nr[0]),await jn(),Dr.set(!0)}Vt(async()=>{await Fn(r,!1,async()=>{Dr.set(!0)})});var o=Cs();qr(p=>{var E=Ms();En.title="ETH UI",me(()=>V(E,"href",io)),s(p,E)});var a=f(o);Fa(a,{position:"top-right"});var l=M(a,2);Yo(l,{});var i=M(l,2),u=Y(i),g=Y(u);Is(g,{}),U(u);var y=M(u,2),b=Y(y);te(b,()=>e.children??ae),U(y);var D=M(y,2),C=Y(D);Ps(C,{}),U(D),U(i),s(n,o),Q()}export{Ws as component,qs as universal};
