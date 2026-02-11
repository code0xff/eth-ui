import{d as wn,e as _r,b as qt,o as Ze,c as h,a as s,f as P,g as Vn,i as yr,j as br,t as We,s as Bt,k as Mt,p as wr}from"../chunks/CHYZP8Rr.js";import{t as me,h as xn,d as pn,a2 as xr,aX as pr,N as kn,ak as kr,aB as Tr,aO as Ir,aI as Sr,T as Pr,aC as Dt,x as Ue,z as Ke,u as He,ad as X,i as t,k as c,a0 as vt,af as m,aW as hn,p as J,f,a as Q,s as M,o as Vt,c as G,r as U,aQ as Mr,aR as Tn,aS as Cr,n as ae,l as Un,e as Wn,m as rt,q as Qe,j as an,g as Nt,aY as Er}from"../chunks/D2l8O0Ot.js";import{Q as V,k as sn,M as Xe,O as Je,R as ye,S as Ye,U as en,s as te,V as Ar,n as Kn,X as Br,I as $e,o as Dr,B as ze,A as Nr,T as Gn,b as Yn,c as ht,d as Ne,a as It,G as Tt,K as In,J as Sn,x as Pn,Y as St,C as Mn,Z as tn,_ as pt,$ as Cn,a0 as En,a1 as An,a2 as Bn,z as Rt,a3 as Dn,a4 as Rr,a5 as Lr,r as Or,a6 as zr,a7 as Hr,f as Fr,i as Nn,a8 as nn,a9 as rn,g as jr}from"../chunks/LiiiQ8RH.js";import{p as qr}from"../chunks/D2JpLCvx.js";import{M as Vr,s as Ur}from"../chunks/BnK6ph1T.js";import{i as I,p as x,b as Xn,s as ke,r as Ce}from"../chunks/C8aRbOnS.js";import{c as nt}from"../chunks/CHRJgWt6.js";import{i as Ct}from"../chunks/Cx3GOipP.js";import{C as Jn,l as Wr,w as ln,p as Kr,S as Gr,m as Rn,q as Ln,V as Yr,k as Xr,j as Jr,r as Qr,a as Ve,u as Zr}from"../chunks/BP4UjDc6.js";import{H as $r,C as eo,M as to,R as Qn,D as Zn,a as $n,b as er,c as tr,d as nr}from"../chunks/DL5BHiv-.js";import{R as no}from"../chunks/DAuQdN5r.js";function ro(r,e,n=!1,o=!1,a=!1){var l=r,i="";me(()=>{var u=xr;if(i===(i=e()??"")){xn&&pn();return}if(u.nodes_start!==null&&(pr(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),i!==""){if(xn){kn.data;for(var g=pn(),y=g;g!==null&&(g.nodeType!==kr||g.data!=="");)y=g,g=Tr(g);if(g===null)throw Ir(),Sr;wn(kn,y),l=Pr(g);return}var b=i+"";n?b=`<svg>${b}</svg>`:o&&(b=`<math>${b}</math>`);var D=_r(b);if((n||o)&&(D=Dt(D)),wn(Dt(D),D.lastChild),n||o)for(;Dt(D);)l.before(Dt(D));else l.before(D)}})}const oo=!1,ao=!0,so="always",js=Object.freeze(Object.defineProperty({__proto__:null,prerender:ao,ssr:oo,trailingSlash:so},Symbol.toStringTag,{value:"Module"})),io=""+new URL("../assets/favicon.DDmz9QoX.ico",import.meta.url).href,rr=typeof window<"u"?window:void 0;function lo(r){let e=r.activeElement;for(;e?.shadowRoot;){const n=e.shadowRoot.activeElement;if(n===e)break;e=n}return e}let co=class{#t;#e;constructor(e={}){const{window:n=rr,document:o=n?.document}=e;n!==void 0&&(this.#t=o,this.#e=qt(a=>{const l=Ze(n,"focusin",a),i=Ze(n,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?lo(this.#t):null}};new co;function uo(r,e){switch(r){case"post":Ke(e);break;case"pre":Ue(e);break}}function or(r,e,n,o={}){const{lazy:a=!1}=o;let l=!a,i=Array.isArray(r)?[]:void 0;uo(e,()=>{const u=Array.isArray(r)?r.map(y=>y()):r();if(!l){l=!0,i=u;return}const g=He(()=>n(u,i));return i=u,g})}function vn(r,e,n){or(r,"post",e,n)}function fo(r,e,n){or(r,"pre",e,n)}vn.pre=fo;function ho(r,e){switch(r){case"local":return e.localStorage;case"session":return e.sessionStorage}}class ar{#t;#e;#n;#r;#o;#a=X(0);constructor(e,n,o={}){const{storage:a="local",serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:i=!0,window:u=rr}=o;if(this.#t=n,this.#e=e,this.#n=l,u===void 0)return;const g=ho(a,u);this.#r=g;const y=g.getItem(e);y!==null?this.#t=this.#i(y):this.#l(n),i&&a==="local"&&(this.#o=qt(()=>Ze(u,"storage",this.#s)))}get current(){this.#o?.(),t(this.#a);const e=this.#i(this.#r?.getItem(this.#e))??this.#t,n=new WeakMap,o=a=>{if(a===null||a?.constructor.name==="Date"||typeof a!="object")return a;let l=n.get(a);return l||(l=new Proxy(a,{get:(i,u)=>(t(this.#a),o(Reflect.get(i,u))),set:(i,u,g)=>(c(this.#a,t(this.#a)+1),Reflect.set(i,u,g),this.#l(e),!0)}),n.set(a,l)),l};return o(e)}set current(e){this.#l(e),c(this.#a,t(this.#a)+1)}#s=e=>{e.key!==this.#e||e.newValue===null||(this.#t=this.#i(e.newValue),c(this.#a,t(this.#a)+1))};#i(e){try{return this.#n.deserialize(e)}catch(n){console.error(`Error when parsing "${e}" from persisted store "${this.#e}"`,n);return}}#l(e){try{e!=null&&this.#r?.setItem(this.#e,this.#n.serialize(e))}catch(n){console.error(`Error when writing value from persisted store "${this.#e}" to ${this.#r}`,n)}}}function On(r){return r.filter(e=>e.length>0)}const sr={getItem:r=>null,setItem:(r,e)=>{}},Et=typeof document<"u";function vo(r){return typeof r=="function"}function mo(r){return r!==null&&typeof r=="object"}const Pt=Symbol("box"),mn=Symbol("is-writable");function go(r){return mo(r)&&Pt in r}function _o(r){return ce.isBox(r)&&mn in r}function ce(r){let e=X(vt(r));return{[Pt]:!0,[mn]:!0,get current(){return t(e)},set current(n){c(e,n,!0)}}}function yo(r,e){const n=m(r);return e?{[Pt]:!0,[mn]:!0,get current(){return t(n)},set current(o){e(o)}}:{[Pt]:!0,get current(){return r()}}}function bo(r){return ce.isBox(r)?r:vo(r)?ce.with(r):ce(r)}function wo(r){return Object.entries(r).reduce((e,[n,o])=>ce.isBox(o)?(ce.isWritableBox(o)?Object.defineProperty(e,n,{get(){return o.current},set(a){o.current=a}}):Object.defineProperty(e,n,{get(){return o.current}}),e):Object.assign(e,{[n]:o}),{})}function xo(r){return ce.isWritableBox(r)?{[Pt]:!0,get current(){return r.current}}:r}ce.from=bo;ce.with=yo;ce.flatten=wo;ce.readonly=xo;ce.isBox=go;ce.isWritableBox=_o;function po(r,e){const n=RegExp(r,"g");return o=>{if(typeof o!="string")throw new TypeError(`expected an argument of type string, but got ${typeof o}`);return o.match(n)?o.replace(n,e):o}}const ko=po(/[A-Z]/,r=>`-${r.toLowerCase()}`);function To(r){if(!r||typeof r!="object"||Array.isArray(r))throw new TypeError(`expected an argument of type object, but got ${typeof r}`);return Object.keys(r).map(e=>`${ko(e)}: ${r[e]};`).join(`
`)}function Io(r={}){return To(r).replace(`
`," ")}const So={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",transform:"translateX(-100%)"};Io(So);const Po=typeof window<"u"?window:void 0;function Mo(r){let e=r.activeElement;for(;e?.shadowRoot;){const n=e.shadowRoot.activeElement;if(n===e)break;e=n}return e}let Co=class{#t;#e;constructor(e={}){const{window:n=Po,document:o=n?.document}=e;n!==void 0&&(this.#t=o,this.#e=qt(a=>{const l=Ze(n,"focusin",a),i=Ze(n,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?Mo(this.#t):null}};new Co;const st=ce("mode-watcher-mode"),it=ce("mode-watcher-theme"),Eo=["dark","light","system"];function cn(r){return typeof r!="string"?!1:Eo.includes(r)}class Ao{#t="system";#e=Et?localStorage:sr;#n=this.#e.getItem(st.current);#r=cn(this.#n)?this.#n:this.#t;#o=X(vt(this.#a()));#a(e=this.#r){return new ar(st.current,e,{serializer:{serialize:n=>n,deserialize:n=>cn(n)?n:this.#t}})}constructor(){hn(()=>vn.pre(()=>st.current,(e,n)=>{const o=t(this.#o).current;c(this.#o,this.#a(o),!0),n&&localStorage.removeItem(n)}))}get current(){return t(this.#o).current}set current(e){t(this.#o).current=e}}class Bo{#t=void 0;#e=!0;#n=X(vt(this.#t));#r=typeof window<"u"&&typeof window.matchMedia=="function"?new Vr("prefers-color-scheme: light"):{current:!1};query(){Et&&c(this.#n,this.#r.current?"light":"dark",!0)}tracking(e){this.#e=e}constructor(){hn(()=>{Ue(()=>{this.#e&&this.query()})}),this.query=this.query.bind(this),this.tracking=this.tracking.bind(this)}get current(){return t(this.#n)}}const zt=new Ao,un=new Bo;class Do{#t=Et?localStorage:sr;#e=this.#t.getItem(it.current);#n=this.#e===null||this.#e===void 0?"":this.#e;#r=X(vt(this.#o()));#o(e=this.#n){return new ar(it.current,e,{serializer:{serialize:n=>typeof n!="string"?"":n,deserialize:n=>n}})}constructor(){hn(()=>vn.pre(()=>it.current,(e,n)=>{const o=t(this.#r).current;c(this.#r,this.#o(o),!0),n&&localStorage.removeItem(n)}))}get current(){return t(this.#r).current}set current(e){t(this.#r).current=e}}const Ot=new Do;let zn,Hn,Fn=!1,kt=null;function No(){return kt||(kt=document.createElement("style"),kt.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)),kt)}function ir(r,e=!1){if(typeof document>"u")return;if(!Fn){Fn=!0,r();return}if(typeof window<"u"&&window.__vitest_worker__){r();return}clearTimeout(zn),clearTimeout(Hn);const o=No(),a=()=>document.head.appendChild(o),l=()=>{o.parentNode&&document.head.removeChild(o)};function i(){r(),window.requestAnimationFrame(l)}if(typeof window.requestAnimationFrame<"u"){a(),e?i():window.requestAnimationFrame(()=>{i()});return}a(),zn=window.setTimeout(()=>{r(),Hn=window.setTimeout(l,16)},16)}const ot=ce(void 0),Ht=ce(!0),Ft=ce(!1),dn=ce([]),fn=ce([]);function Ro(){const r=m(()=>{if(!Et)return;const e=zt.current==="system"?un.current:zt.current,n=On(dn.current),o=On(fn.current);function a(){const l=document.documentElement,i=document.querySelector('meta[name="theme-color"]');e==="light"?(n.length&&l.classList.remove(...n),o.length&&l.classList.add(...o),l.style.colorScheme="light",i&&ot.current&&i.setAttribute("content",ot.current.light)):(o.length&&l.classList.remove(...o),n.length&&l.classList.add(...n),l.style.colorScheme="dark",i&&ot.current&&i.setAttribute("content",ot.current.dark))}return Ht.current?ir(a,Ft.current):a(),e});return{get current(){return t(r)}}}function Lo(){const r=m(()=>{if(Ot.current,!Et)return;function e(){document.documentElement.setAttribute("data-theme",Ot.current)}return Ht.current?ir(e,He(()=>Ft.current)):e(),Ot.current});return{get current(){return t(r)}}}const gn=Ro(),Oo=Lo();function zo(){zt.current=gn.current==="dark"?"light":"dark"}function Ho(r){zt.current=r}function Fo(r){Ot.current=r}function jo({defaultMode:r="system",themeColors:e,darkClassNames:n=["dark"],lightClassNames:o=[],defaultTheme:a="",modeStorageKey:l="mode-watcher-mode",themeStorageKey:i="mode-watcher-theme"}){const u=document.documentElement,g=localStorage.getItem(l)??r,y=localStorage.getItem(i)??a,b=g==="light"||g==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(b?(n.length&&u.classList.remove(...n.filter(Boolean)),o.length&&u.classList.add(...o.filter(Boolean))):(o.length&&u.classList.remove(...o.filter(Boolean)),n.length&&u.classList.add(...n.filter(Boolean))),u.style.colorScheme=b?"light":"dark",e){const D=document.querySelector('meta[name="theme-color"]');D&&D.setAttribute("content",g==="light"?e.light:e.dark)}y&&(u.setAttribute("data-theme",y),localStorage.setItem(i,y)),localStorage.setItem(l,g)}var qo=P('<meta name="theme-color"/>');function Vo(r,e){J(e,!0);var n=h(),o=f(n);{var a=l=>{var i=qo();me(()=>V(i,"content",e.themeColors.dark)),s(l,i)};I(o,l=>{e.themeColors&&l(a)})}s(r,n),Q()}var Uo=P('<meta name="theme-color"/>'),Wo=P("<!> <!>",1);function Ko(r,e){J(e,!0);let n=x(e,"trueNonce",3,"");Vn(o=>{var a=Wo(),l=f(a);{var i=g=>{var y=Uo();me(()=>V(y,"content",e.themeColors.dark)),s(g,y)};I(l,g=>{e.themeColors&&g(i)})}var u=M(l,2);ro(u,()=>`<script${n()?` nonce=${n()}`:""}>(`+jo.toString()+")("+JSON.stringify(e.initConfig)+");<\/script>"),s(o,a)}),Q()}function Go(r,e){J(e,!0);let n=x(e,"track",3,!0),o=x(e,"defaultMode",3,"system"),a=x(e,"disableTransitions",3,!0),l=x(e,"darkClassNames",19,()=>["dark"]),i=x(e,"lightClassNames",19,()=>[]),u=x(e,"defaultTheme",3,""),g=x(e,"nonce",3,""),y=x(e,"themeStorageKey",3,"mode-watcher-theme"),b=x(e,"modeStorageKey",3,"mode-watcher-mode"),D=x(e,"disableHeadScriptInjection",3,!1),C=x(e,"synchronousModeChanges",3,!1);st.current=b(),it.current=y(),dn.current=l(),fn.current=i(),Ht.current=a(),ot.current=e.themeColors,Ft.current=C(),Ue(()=>{Ft.current=C()}),Ue(()=>{Ht.current=a()}),Ue(()=>{ot.current=e.themeColors}),Ue(()=>{dn.current=l()}),Ue(()=>{fn.current=i()}),Ue(()=>{st.current=b()}),Ue(()=>{it.current=y()}),Ue(()=>{gn.current,st.current,it.current,Oo.current}),Vt(()=>{un.tracking(n()),un.query();const A=localStorage.getItem(st.current);Ho(cn(A)?A:o());const Se=localStorage.getItem(it.current);Fo(Se||u())});const p={defaultMode:o(),themeColors:e.themeColors,darkClassNames:l(),lightClassNames:i(),defaultTheme:u(),modeStorageKey:b(),themeStorageKey:y()},E=m(()=>typeof window>"u"?g():"");var H=h(),Z=f(H);{var R=A=>{Vo(A,{get themeColors(){return ot.current}})},L=A=>{Ko(A,{get trueNonce(){return t(E)},get initConfig(){return p},get themeColors(){return ot.current}})};I(Z,A=>{D()?A(R):A(L,!1)})}s(r,H),Q()}const Yo=Array(12).fill(0);var Xo=P('<div class="sonner-loading-bar"></div>'),Jo=P('<div><div class="sonner-spinner"></div></div>');function Qo(r,e){J(e,!0);var n=Jo(),o=G(n);sn(o,23,()=>Yo,(a,l)=>`spinner-bar-${l}`,(a,l)=>{var i=Xo();s(a,i)}),U(o),U(n),me(a=>{Je(n,1,a),V(n,"data-visible",e.visible)},[()=>Xe(["sonner-loading-wrapper",e.class].filter(Boolean).join(" "))]),s(r,n),Q()}const Zo=typeof window<"u"?window:void 0;function $o(r){let e=r.activeElement;for(;e?.shadowRoot;){const n=e.shadowRoot.activeElement;if(n===e)break;e=n}return e}class ea{#t;#e;constructor(e={}){const{window:n=Zo,document:o=n?.document}=e;n!==void 0&&(this.#t=o,this.#e=qt(a=>{const l=Ze(n,"focusin",a),i=Ze(n,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?$o(this.#t):null}}new ea;class ta{#t;#e;constructor(e){this.#t=e,this.#e=Symbol(e)}get key(){return this.#e}exists(){return Mr(this.#e)}get(){const e=Tn(this.#e);if(e===void 0)throw new Error(`Context "${this.#t}" not found`);return e}getOr(e){const n=Tn(this.#e);return n===void 0?e:n}set(e){return Cr(this.#e,e)}}const na=new ta("<Toaster/>");function jt(r){return r.label!==void 0}function ra(){let r=X(vt(typeof document<"u"?document.hidden:!1));return Ke(()=>Ze(document,"visibilitychange",()=>{c(r,document.hidden,!0)})),{get current(){return t(r)}}}const jn=4e3,oa=14,aa=45,sa=200,ia=.05,la={toast:"",title:"",description:"",loader:"",closeButton:"",cancelButton:"",actionButton:"",action:"",warning:"",error:"",success:"",default:"",info:"",loading:""};function ca(r){const[e,n]=r.split("-"),o=[];return e&&o.push(e),n&&o.push(n),o}function qn(r){return 1/(1.5+Math.abs(r)/20)}var ua=P("<div><!></div>"),da=(r,e,n,o,a)=>{t(e)||!t(n)||(o(),a.toast.onDismiss?.(a.toast))},fa=P('<button data-close-button=""><!></button>'),ha=P('<div data-icon=""><!> <!></div>'),va=P('<div data-description=""><!></div>'),ma=(r,e,n,o)=>{jt(e.toast.cancel)&&t(n)&&(e.toast.cancel?.onClick?.(r),o())},ga=P('<button data-button="" data-cancel=""> </button>'),_a=(r,e,n)=>{jt(e.toast.action)&&(e.toast.action?.onClick(r),!r.defaultPrevented&&n())},ya=P('<button data-button=""> </button>'),ba=P('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>',1),wa=P('<li data-sonner-toast=""><!> <!></li>');function xa(r,e){J(e,!0);const n=k=>{var N=h(),F=f(N);{var K=j=>{var ge=ua(),at=G(ge);te(at,()=>e.loadingIcon),U(ge),me(mt=>{Je(ge,1,mt),V(ge,"data-visible",t(w)==="loading")},[()=>Xe(Ye(t(ne)?.loader,e.toast?.classes?.loader,"sonner-loader"))]),s(j,ge)},ee=j=>{{let ge=m(()=>Ye(t(ne)?.loader,e.toast.classes?.loader)),at=m(()=>t(w)==="loading");Qo(j,{get class(){return t(ge)},get visible(){return t(at)}})}};I(F,j=>{e.loadingIcon?j(K):j(ee,!1)})}s(k,N)};let o=x(e,"cancelButtonStyle",3,""),a=x(e,"actionButtonStyle",3,""),l=x(e,"descriptionClass",3,""),i=x(e,"unstyled",3,!1),u=x(e,"defaultRichColors",3,!1);const g={...la};let y=X(!1),b=X(!1),D=X(!1),C=X(!1),p=X(!1),E=X(0),H=X(0),Z=e.toast.duration||e.duration||jn,R=X(void 0),L=X(null),A=X(null);const Se=m(()=>e.index===0),Y=m(()=>e.index+1<=e.visibleToasts),w=m(()=>e.toast.type),ve=m(()=>e.toast.dismissable!==!1),se=m(()=>e.toast.class||""),be=m(()=>e.toast.descriptionClass||""),ue=m(()=>ye.heights.findIndex(k=>k.toastId===e.toast.id)||0),Te=m(()=>e.toast.closeButton??e.closeButton),Pe=m(()=>e.toast.duration??e.duration??jn);let we=null;const Fe=m(()=>e.position.split("-")),et=m(()=>ye.heights.reduce((k,N,F)=>F>=t(ue)?k:k+N.height,0)),lt=ra(),je=m(()=>e.toast.invert||e.invert),qe=m(()=>t(w)==="loading"),ne=m(()=>({...g,...e.classes})),Ee=m(()=>e.toast.title),Me=m(()=>e.toast.description);let re=X(0),Ae=X(0);const d=m(()=>Math.round(t(ue)*oa+t(et)));Ke(()=>{t(Ee),t(Me);let k;e.expanded||e.expandByDefault?k=1:k=1-e.index*ia;const N=He(()=>t(R));if(N===void 0)return;N.style.setProperty("height","auto");const F=N.offsetHeight,K=N.getBoundingClientRect().height,ee=Math.round(K/k+Number.EPSILON&100)/100;N.style.removeProperty("height");let j;Math.abs(ee-F)<1?j=ee:j=F,c(H,j,!0),He(()=>{ye.setHeight({toastId:e.toast.id,height:j})})});function S(){c(b,!0),c(E,t(d),!0),ye.removeHeight(e.toast.id),setTimeout(()=>{ye.remove(e.toast.id)},sa)}let $;const W=m(()=>e.toast.promise&&t(w)==="loading"||e.toast.duration===Number.POSITIVE_INFINITY);function ie(){c(re,new Date().getTime(),!0),$=setTimeout(()=>{e.toast.onAutoClose?.(e.toast),S()},Z)}function le(){if(t(Ae)<t(re)){const k=new Date().getTime()-t(re);Z=Z-k}c(Ae,new Date().getTime(),!0)}Ke(()=>{e.toast.updated&&(clearTimeout($),Z=t(Pe),ie())}),Ke(()=>(t(W)||(e.expanded||e.interacting||lt.current?le():ie()),()=>clearTimeout($))),Vt(()=>{c(y,!0);const k=t(R)?.getBoundingClientRect().height;return c(H,k,!0),ye.setHeight({toastId:e.toast.id,height:k}),()=>{ye.removeHeight(e.toast.id)}}),Ke(()=>{e.toast.delete&&He(()=>{S(),e.toast.onDismiss?.(e.toast)})});const tt=k=>{if(t(qe))return;c(E,t(d),!0);const N=k.target;N.setPointerCapture(k.pointerId),N.tagName!=="BUTTON"&&(c(D,!0),we={x:k.clientX,y:k.clientY})},ct=()=>{if(t(C)||!t(ve))return;we=null;const k=Number(t(R)?.style.getPropertyValue("--swipe-amount-x").replace("px","")||0),N=Number(t(R)?.style.getPropertyValue("--swipe-amount-y").replace("px","")||0),F=new Date().getTime()-0,K=t(L)==="x"?k:N,ee=Math.abs(K)/F;if(Math.abs(K)>=aa||ee>.11){c(E,t(d),!0),e.toast.onDismiss?.(e.toast),t(L)==="x"?c(A,k>0?"right":"left",!0):c(A,N>0?"down":"up",!0),S(),c(C,!0);return}else t(R)?.style.setProperty("--swipe-amount-x","0px"),t(R)?.style.setProperty("--swipe-amount-y","0px");c(p,!1),c(D,!1),c(L,null)},Re=k=>{if(!we||!t(ve)||(window.getSelection()?.toString().length??-1)>0)return;const F=k.clientY-we.y,K=k.clientX-we.x,ee=e.swipeDirections??ca(e.position);!t(L)&&(Math.abs(K)>1||Math.abs(F)>1)&&c(L,Math.abs(K)>Math.abs(F)?"x":"y",!0);let j={x:0,y:0};if(t(L)==="y"){if(ee.includes("top")||ee.includes("bottom"))if(ee.includes("top")&&F<0||ee.includes("bottom")&&F>0)j.y=F;else{const ge=F*qn(F);j.y=Math.abs(ge)<Math.abs(F)?ge:F}}else if(t(L)==="x"&&(ee.includes("left")||ee.includes("right")))if(ee.includes("left")&&K<0||ee.includes("right")&&K>0)j.x=K;else{const ge=K*qn(K);j.x=Math.abs(ge)<Math.abs(K)?ge:K}(Math.abs(j.x)>0||Math.abs(j.y)>0)&&c(p,!0),t(R)?.style.setProperty("--swipe-amount-x",`${j.x}px`),t(R)?.style.setProperty("--swipe-amount-y",`${j.y}px`)},Ge=()=>{c(D,!1),c(L,null),we=null},Ie=m(()=>e.toast.icon?e.toast.icon:t(w)==="success"?e.successIcon:t(w)==="error"?e.errorIcon:t(w)==="warning"?e.warningIcon:t(w)==="info"?e.infoIcon:t(w)==="loading"?e.loadingIcon:null);var B=wa();V(B,"tabindex",0);let At;B.__pointermove=Re,B.__pointerup=ct,B.__pointerdown=tt;var Ut=G(B);{var Wt=k=>{var N=fa();N.__click=[da,qe,ve,S,e];var F=G(N);te(F,()=>e.closeIcon??ae),U(N),me(K=>{V(N,"aria-label",e.closeButtonAriaLabel),V(N,"data-disabled",t(qe)),Je(N,1,K)},[()=>Xe(Ye(t(ne)?.closeButton,e.toast?.classes?.closeButton))]),s(k,N)};I(Ut,k=>{t(Te)&&!e.toast.component&&t(w)!=="loading"&&e.closeIcon!==null&&k(Wt)})}var Kt=M(Ut,2);{var Gt=k=>{const N=m(()=>e.toast.component);var F=h(),K=f(F);nt(K,()=>t(N),(ee,j)=>{j(ee,ke(()=>e.toast.componentProps,{closeToast:S}))}),s(k,F)},Yt=k=>{var N=ba(),F=f(N);{var K=O=>{var v=ha(),T=G(v);{var q=z=>{var fe=h(),pe=f(fe);{var he=_e=>{var De=h(),gt=f(De);nt(gt,()=>e.toast.icon,(_t,yt)=>{yt(_t,{})}),s(_e,De)},oe=_e=>{n(_e)};I(pe,_e=>{e.toast.icon?_e(he):_e(oe,!1)})}s(z,fe)};I(T,z=>{(e.toast.promise||t(w)==="loading")&&z(q)})}var de=M(T,2);{var _=z=>{var fe=h(),pe=f(fe);{var he=_e=>{var De=h(),gt=f(De);nt(gt,()=>e.toast.icon,(_t,yt)=>{yt(_t,{})}),s(_e,De)},oe=_e=>{var De=h(),gt=f(De);{var _t=ut=>{var bt=h(),Jt=f(bt);te(Jt,()=>e.successIcon??ae),s(ut,bt)},yt=ut=>{var bt=h(),Jt=f(bt);{var dr=dt=>{var wt=h(),Qt=f(wt);te(Qt,()=>e.errorIcon??ae),s(dt,wt)},fr=dt=>{var wt=h(),Qt=f(wt);{var hr=ft=>{var xt=h(),Zt=f(xt);te(Zt,()=>e.warningIcon??ae),s(ft,xt)},vr=ft=>{var xt=h(),Zt=f(xt);{var mr=$t=>{var bn=h(),gr=f(bn);te(gr,()=>e.infoIcon??ae),s($t,bn)};I(Zt,$t=>{t(w)==="info"&&$t(mr)},!0)}s(ft,xt)};I(Qt,ft=>{t(w)==="warning"?ft(hr):ft(vr,!1)},!0)}s(dt,wt)};I(Jt,dt=>{t(w)==="error"?dt(dr):dt(fr,!1)},!0)}s(ut,bt)};I(gt,ut=>{t(w)==="success"?ut(_t):ut(yt,!1)},!0)}s(_e,De)};I(pe,_e=>{e.toast.icon?_e(he):_e(oe,!1)})}s(z,fe)};I(de,z=>{e.toast.type!=="loading"&&z(_)})}U(v),me(z=>Je(v,1,z),[()=>Xe(Ye(t(ne)?.icon,e.toast?.classes?.icon))]),s(O,v)};I(F,O=>{(t(w)||e.toast.icon||e.toast.promise)&&e.toast.icon!==null&&(t(Ie)!==null||e.toast.icon)&&O(K)})}var ee=M(F,2),j=G(ee),ge=G(j);{var at=O=>{var v=h(),T=f(v);{var q=_=>{const z=m(()=>e.toast.title);var fe=h(),pe=f(fe);nt(pe,()=>t(z),(he,oe)=>{oe(he,ke(()=>e.toast.componentProps))}),s(_,fe)},de=_=>{var z=We();me(()=>Bt(z,e.toast.title)),s(_,z)};I(T,_=>{typeof e.toast.title!="string"?_(q):_(de,!1)})}s(O,v)};I(ge,O=>{e.toast.title&&O(at)})}U(j);var mt=M(j,2);{var Xt=O=>{var v=va(),T=G(v);{var q=_=>{const z=m(()=>e.toast.description);var fe=h(),pe=f(fe);nt(pe,()=>t(z),(he,oe)=>{oe(he,ke(()=>e.toast.componentProps))}),s(_,fe)},de=_=>{var z=We();me(()=>Bt(z,e.toast.description)),s(_,z)};I(T,_=>{typeof e.toast.description!="string"?_(q):_(de,!1)})}U(v),me(_=>Je(v,1,_),[()=>Xe(Ye(l(),t(be),t(ne)?.description,e.toast.classes?.description))]),s(O,v)};I(mt,O=>{e.toast.description&&O(Xt)})}U(ee);var Be=M(ee,2);{var xe=O=>{var v=h(),T=f(v);{var q=_=>{var z=h(),fe=f(z);nt(fe,()=>e.toast.cancel,(pe,he)=>{he(pe,{})}),s(_,z)},de=_=>{var z=h(),fe=f(z);{var pe=he=>{var oe=ga();oe.__click=[ma,e,ve,S];var _e=G(oe,!0);U(oe),me(De=>{en(oe,e.toast.cancelButtonStyle??o()),Je(oe,1,De),Bt(_e,e.toast.cancel.label)},[()=>Xe(Ye(t(ne)?.cancelButton,e.toast?.classes?.cancelButton))]),s(he,oe)};I(fe,he=>{jt(e.toast.cancel)&&he(pe)},!0)}s(_,z)};I(T,_=>{typeof e.toast.cancel=="function"?_(q):_(de,!1)})}s(O,v)};I(Be,O=>{e.toast.cancel&&O(xe)})}var Le=M(Be,2);{var Oe=O=>{var v=h(),T=f(v);{var q=_=>{var z=h(),fe=f(z);nt(fe,()=>e.toast.action,(pe,he)=>{he(pe,{})}),s(_,z)},de=_=>{var z=h(),fe=f(z);{var pe=he=>{var oe=ya();oe.__click=[_a,e,S];var _e=G(oe,!0);U(oe),me(De=>{en(oe,e.toast.actionButtonStyle??a()),Je(oe,1,De),Bt(_e,e.toast.action.label)},[()=>Xe(Ye(t(ne)?.actionButton,e.toast?.classes?.actionButton))]),s(he,oe)};I(fe,he=>{jt(e.toast.action)&&he(pe)},!0)}s(_,z)};I(T,_=>{typeof e.toast.action=="function"?_(q):_(de,!1)})}s(O,v)};I(Le,O=>{e.toast.action&&O(Oe)})}me(O=>Je(j,1,O),[()=>Xe(Ye(t(ne)?.title,e.toast?.classes?.title))]),s(k,N)};I(Kt,k=>{e.toast.component?k(Gt):k(Yt,!1)})}U(B),Xn(B,k=>c(R,k),()=>t(R)),me((k,N,F,K)=>{Je(B,1,k),V(B,"data-rich-colors",e.toast.richColors??u()),V(B,"data-styled",!(e.toast.component||e.toast.unstyled||i())),V(B,"data-mounted",t(y)),V(B,"data-promise",N),V(B,"data-swiped",t(p)),V(B,"data-removed",t(b)),V(B,"data-visible",t(Y)),V(B,"data-y-position",t(Fe)[0]),V(B,"data-x-position",t(Fe)[1]),V(B,"data-index",e.index),V(B,"data-front",t(Se)),V(B,"data-swiping",t(D)),V(B,"data-dismissable",t(ve)),V(B,"data-type",t(w)),V(B,"data-invert",t(je)),V(B,"data-swipe-out",t(C)),V(B,"data-swipe-direction",t(A)),V(B,"data-expanded",F),At=en(B,`${e.style} ${e.toast.style}`,At,K)},[()=>Xe(Ye(e.class,t(se),t(ne)?.toast,e.toast?.classes?.toast,t(ne)?.[t(w)],e.toast?.classes?.[t(w)])),()=>!!e.toast.promise,()=>!!(e.expanded||e.expandByDefault&&t(y)),()=>({"--index":e.index,"--toasts-before":e.index,"--z-index":ye.toasts.length-e.index,"--offset":`${t(b)?t(E):t(d)}px`,"--initial-height":e.expandByDefault?"auto":`${t(H)}px`})]),yr("dragend",B,Ge),s(r,B),Q()}br(["pointermove","pointerup","pointerdown","click"]);var pa=Mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');function ka(r){var e=pa();s(r,e)}var Ta=Mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');function Ia(r){var e=Ta();s(r,e)}var Sa=Mt('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');function Pa(r){var e=Sa();s(r,e)}var Ma=Mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');function Ca(r){var e=Ma();s(r,e)}var Ea=Mt('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');function Aa(r){var e=Ea();s(r,e)}const Ba=3,lr="24px",cr="16px",Da=4e3,Na=356,Ra=14,on="dark",Lt="light";function La(r,e){const n={};return[r,e].forEach((o,a)=>{const l=a===1,i=l?"--mobile-offset":"--offset",u=l?cr:lr;function g(y){["top","right","bottom","left"].forEach(b=>{n[`${i}-${b}`]=typeof y=="number"?`${y}px`:y})}typeof o=="number"||typeof o=="string"?g(o):typeof o=="object"?["top","right","bottom","left"].forEach(y=>{const b=o[y];b===void 0?n[`${i}-${y}`]=u:n[`${i}-${y}`]=typeof b=="number"?`${b}px`:b}):g(u)}),n}var Oa=P("<ol></ol>"),za=P('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-nbs0zk"><!></section>');function Ha(r,e){J(e,!0);function n(d){return d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?on:Lt}let o=x(e,"invert",3,!1),a=x(e,"position",3,"bottom-right"),l=x(e,"hotkey",19,()=>["altKey","KeyT"]),i=x(e,"expand",3,!1),u=x(e,"closeButton",3,!1),g=x(e,"offset",3,lr),y=x(e,"mobileOffset",3,cr),b=x(e,"theme",3,"light"),D=x(e,"richColors",3,!1),C=x(e,"duration",3,Da),p=x(e,"visibleToasts",3,Ba),E=x(e,"toastOptions",19,()=>({})),H=x(e,"dir",7,"auto"),Z=x(e,"gap",3,Ra),R=x(e,"containerAriaLabel",3,"Notifications"),L=x(e,"closeButtonAriaLabel",3,"Close toast"),A=Ce(e,["$$slots","$$events","$$legacy","invert","position","hotkey","expand","closeButton","offset","mobileOffset","theme","richColors","duration","visibleToasts","toastOptions","dir","gap","loadingIcon","successIcon","errorIcon","warningIcon","closeIcon","infoIcon","containerAriaLabel","class","closeButtonAriaLabel","onblur","onfocus","onmouseenter","onmousemove","onmouseleave","ondragend","onpointerdown","onpointerup"]);function Se(){if(H()!=="auto")return H();if(typeof window>"u"||typeof document>"u")return"ltr";const d=document.documentElement.getAttribute("dir");return d==="auto"||!d?(He(()=>H(window.getComputedStyle(document.documentElement).direction??"ltr")),H()):(He(()=>H(d)),d)}const Y=m(()=>Array.from(new Set([a(),...ye.toasts.filter(d=>d.position).map(d=>d.position)].filter(Boolean))));let w=X(!1),ve=X(!1),se=X(vt(n(b()))),be=X(void 0),ue=X(null),Te=X(!1);const Pe=m(()=>l().join("+").replace(/Key/g,"").replace(/Digit/g,""));Ke(()=>{ye.toasts.length<=1&&c(w,!1)}),Ke(()=>{const d=ye.toasts.filter(S=>S.dismiss&&!S.delete);if(d.length>0){const S=ye.toasts.map($=>d.find(ie=>ie.id===$.id)?{...$,delete:!0}:$);ye.toasts=S}}),Ke(()=>()=>{t(be)&&t(ue)&&(t(ue).focus({preventScroll:!0}),c(ue,null),c(Te,!1))}),Vt(()=>(ye.reset(),Ze(document,"keydown",S=>{l().every(W=>S[W]||S.code===W)&&(c(w,!0),t(be)?.focus()),S.code==="Escape"&&(document.activeElement===t(be)||t(be)?.contains(document.activeElement))&&c(w,!1)}))),Ke(()=>{if(b()!=="system"&&c(se,b()),typeof window<"u"){b()==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?c(se,on):c(se,Lt));const d=window.matchMedia("(prefers-color-scheme: dark)"),S=({matches:$})=>{c(se,$?on:Lt,!0)};"addEventListener"in d?d.addEventListener("change",S):d.addListener(S)}});const we=d=>{e.onblur?.(d),t(Te)&&!d.currentTarget.contains(d.relatedTarget)&&(c(Te,!1),t(ue)&&(t(ue).focus({preventScroll:!0}),c(ue,null)))},Fe=d=>{e.onfocus?.(d),!(d.target instanceof HTMLElement&&d.target.dataset.dismissable==="false")&&(t(Te)||(c(Te,!0),c(ue,d.relatedTarget,!0)))},et=d=>{e.onpointerdown?.(d),!(d.target instanceof HTMLElement&&d.target.dataset.dismissable==="false")&&c(ve,!0)},lt=d=>{e.onmouseenter?.(d),c(w,!0)},je=d=>{e.onmouseleave?.(d),t(ve)||c(w,!1)},qe=d=>{e.onmousemove?.(d),c(w,!0)},ne=d=>{e.ondragend?.(d),c(w,!1)},Ee=d=>{e.onpointerup?.(d),c(ve,!1)};na.set(new Ar);var Me=za();V(Me,"tabindex",-1);var re=G(Me);{var Ae=d=>{var S=h(),$=f(S);sn($,18,()=>t(Y),W=>W,(W,ie,le,tt)=>{const ct=m(()=>{const[Ie,B]=ie.split("-");return{y:Ie,x:B}}),Re=m(()=>La(g(),y()));var Ge=Oa();Kn(Ge,(Ie,B)=>({tabindex:-1,dir:Ie,class:e.class,"data-sonner-toaster":!0,"data-sonner-theme":t(se),"data-y-position":t(ct).y,"data-x-position":t(ct).x,style:e.style,onblur:we,onfocus:Fe,onmouseenter:lt,onmousemove:qe,onmouseleave:je,ondragend:ne,onpointerdown:et,onpointerup:Ee,...A,[Br]:B}),[Se,()=>({"--front-toast-height":`${ye.heights[0]?.height}px`,"--width":`${Na}px`,"--gap":`${Z()}px`,"--offset-top":t(Re)["--offset-top"],"--offset-right":t(Re)["--offset-right"],"--offset-bottom":t(Re)["--offset-bottom"],"--offset-left":t(Re)["--offset-left"],"--mobile-offset-top":t(Re)["--mobile-offset-top"],"--mobile-offset-right":t(Re)["--mobile-offset-right"],"--mobile-offset-bottom":t(Re)["--mobile-offset-bottom"],"--mobile-offset-left":t(Re)["--mobile-offset-left"]})],void 0,"svelte-nbs0zk"),sn(Ge,23,()=>ye.toasts.filter(Ie=>!Ie.position&&t(le)===0||Ie.position===ie),Ie=>Ie.id,(Ie,B,At,Ut)=>{{const Wt=Be=>{var xe=h(),Le=f(xe);{var Oe=v=>{var T=h(),q=f(T);te(q,()=>e.successIcon??ae),s(v,T)},O=v=>{var T=h(),q=f(T);{var de=_=>{ka(_)};I(q,_=>{e.successIcon!==null&&_(de)},!0)}s(v,T)};I(Le,v=>{e.successIcon?v(Oe):v(O,!1)})}s(Be,xe)},Kt=Be=>{var xe=h(),Le=f(xe);{var Oe=v=>{var T=h(),q=f(T);te(q,()=>e.errorIcon??ae),s(v,T)},O=v=>{var T=h(),q=f(T);{var de=_=>{Ia(_)};I(q,_=>{e.errorIcon!==null&&_(de)},!0)}s(v,T)};I(Le,v=>{e.errorIcon?v(Oe):v(O,!1)})}s(Be,xe)},Gt=Be=>{var xe=h(),Le=f(xe);{var Oe=v=>{var T=h(),q=f(T);te(q,()=>e.warningIcon??ae),s(v,T)},O=v=>{var T=h(),q=f(T);{var de=_=>{Pa(_)};I(q,_=>{e.warningIcon!==null&&_(de)},!0)}s(v,T)};I(Le,v=>{e.warningIcon?v(Oe):v(O,!1)})}s(Be,xe)},Yt=Be=>{var xe=h(),Le=f(xe);{var Oe=v=>{var T=h(),q=f(T);te(q,()=>e.infoIcon??ae),s(v,T)},O=v=>{var T=h(),q=f(T);{var de=_=>{Ca(_)};I(q,_=>{e.infoIcon!==null&&_(de)},!0)}s(v,T)};I(Le,v=>{e.infoIcon?v(Oe):v(O,!1)})}s(Be,xe)},k=Be=>{var xe=h(),Le=f(xe);{var Oe=v=>{var T=h(),q=f(T);te(q,()=>e.closeIcon??ae),s(v,T)},O=v=>{var T=h(),q=f(T);{var de=_=>{Aa(_)};I(q,_=>{e.closeIcon!==null&&_(de)},!0)}s(v,T)};I(Le,v=>{e.closeIcon?v(Oe):v(O,!1)})}s(Be,xe)};let N=m(()=>E()?.duration??C()),F=m(()=>E()?.class??""),K=m(()=>E()?.descriptionClass||""),ee=m(()=>E()?.style??""),j=m(()=>E().classes||{}),ge=m(()=>E().unstyled??!1),at=m(()=>E()?.cancelButtonStyle??""),mt=m(()=>E()?.actionButtonStyle??""),Xt=m(()=>E()?.closeButtonAriaLabel??L());xa(Ie,{get index(){return t(At)},get toast(){return t(B)},get defaultRichColors(){return D()},get duration(){return t(N)},get class(){return t(F)},get descriptionClass(){return t(K)},get invert(){return o()},get visibleToasts(){return p()},get closeButton(){return u()},get interacting(){return t(ve)},get position(){return ie},get style(){return t(ee)},get classes(){return t(j)},get unstyled(){return t(ge)},get cancelButtonStyle(){return t(at)},get actionButtonStyle(){return t(mt)},get closeButtonAriaLabel(){return t(Xt)},get expandByDefault(){return i()},get expanded(){return t(w)},get loadingIcon(){return e.loadingIcon},successIcon:Wt,errorIcon:Kt,warningIcon:Gt,infoIcon:Yt,closeIcon:k,$$slots:{successIcon:!0,errorIcon:!0,warningIcon:!0,infoIcon:!0,closeIcon:!0}})}}),U(Ge),Xn(Ge,Ie=>c(be,Ie),()=>t(be)),me(()=>Ge.dir=Ge.dir),s(W,Ge)}),s(d,S)};I(re,d=>{ye.toasts.length>0&&d(Ae)})}U(Me),me(()=>V(Me,"aria-label",`${R()??""} ${t(Pe)??""}`)),s(r,Me),Q()}function Fa(r,e){J(e,!0);let n=Ce(e,["$$slots","$$events","$$legacy"]);Ha(r,ke({get theme(){return gn.current},class:"toaster group",style:"--normal-bg: var(--color-popover); --normal-text: var(--color-popover-foreground); --normal-border: var(--color-border);"},()=>n)),Q()}function ja(r,e){J(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]];$e(r,ke({name:"arrow-right-to-line"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function qa(r,e){J(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];$e(r,ke({name:"book-open"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Va(r,e){J(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];$e(r,ke({name:"calculator"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Ua(r,e){J(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];$e(r,ke({name:"clipboard"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Wa(r,e){J(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];$e(r,ke({name:"cog"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Ka(r,e){J(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];$e(r,ke({name:"download"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Ga(r,e){J(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];$e(r,ke({name:"github"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Ya(r,e){J(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];$e(r,ke({name:"info"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}function Xa(r,e){J(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 2v2"}],["path",{d:"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"}],["path",{d:"M16 12a4 4 0 0 0-4-4"}],["path",{d:"m19 5-1.256 1.256"}],["path",{d:"M20 12h2"}]];$e(r,ke({name:"sun-moon"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=f(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),Q()}const Ja=Xr({component:"checkbox",parts:["root","group","group-label","input"]}),Qa=new Jn("Checkbox.Group"),ur=new Jn("Checkbox.Root");class _n{static create(e,n=null){return ur.set(new _n(e,n))}opts;group;#t=m(()=>this.group&&this.group.opts.name.current?this.group.opts.name.current:this.opts.name.current);get trueName(){return t(this.#t)}set trueName(e){c(this.#t,e)}#e=m(()=>this.group&&this.group.opts.required.current?!0:this.opts.required.current);get trueRequired(){return t(this.#e)}set trueRequired(e){c(this.#e,e)}#n=m(()=>this.group&&this.group.opts.disabled.current?!0:this.opts.disabled.current);get trueDisabled(){return t(this.#n)}set trueDisabled(e){c(this.#n,e)}#r=m(()=>this.group&&this.group.opts.readonly.current?!0:this.opts.readonly.current);get trueReadonly(){return t(this.#r)}set trueReadonly(e){c(this.#r,e)}attachment;constructor(e,n){this.opts=e,this.group=n,this.attachment=Wr(this.opts.ref),this.onkeydown=this.onkeydown.bind(this),this.onclick=this.onclick.bind(this),ln.pre([()=>Ur(this.group?.opts.value.current),()=>this.opts.value.current],([o,a])=>{!o||!a||(this.opts.checked.current=o.includes(a))}),ln.pre(()=>this.opts.checked.current,o=>{this.group&&(o?this.group?.addValue(this.opts.value.current):this.group?.removeValue(this.opts.value.current))})}onkeydown(e){if(!(this.trueDisabled||this.trueReadonly)){if(e.key===Kr){e.preventDefault(),this.opts.type.current==="submit"&&e.currentTarget.closest("form")?.requestSubmit();return}e.key===Gr&&(e.preventDefault(),this.#o())}}#o(){this.opts.indeterminate.current?(this.opts.indeterminate.current=!1,this.opts.checked.current=!0):this.opts.checked.current=!this.opts.checked.current}onclick(e){if(!(this.trueDisabled||this.trueReadonly)){if(this.opts.type.current==="submit"){this.#o();return}e.preventDefault(),this.#o()}}#a=m(()=>({checked:this.opts.checked.current,indeterminate:this.opts.indeterminate.current}));get snippetProps(){return t(this.#a)}set snippetProps(e){c(this.#a,e)}#s=m(()=>({id:this.opts.id.current,role:"checkbox",type:this.opts.type.current,disabled:this.trueDisabled,"aria-checked":Yr(this.opts.checked.current,this.opts.indeterminate.current),"aria-required":Ln(this.trueRequired),"aria-readonly":Ln(this.trueReadonly),"data-disabled":Rn(this.trueDisabled),"data-readonly":Rn(this.trueReadonly),"data-state":Za(this.opts.checked.current,this.opts.indeterminate.current),[Ja.root]:"",onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment}));get props(){return t(this.#s)}set props(e){c(this.#s,e)}}class yn{static create(){return new yn(ur.get())}root;#t=m(()=>this.root.group?!!(this.root.opts.value.current!==void 0&&this.root.group.opts.value.current.includes(this.root.opts.value.current)):this.root.opts.checked.current);get trueChecked(){return t(this.#t)}set trueChecked(e){c(this.#t,e)}#e=m(()=>!!this.root.trueName);get shouldRender(){return t(this.#e)}set shouldRender(e){c(this.#e,e)}constructor(e){this.root=e,this.onfocus=this.onfocus.bind(this)}onfocus(e){Jr(this.root.opts.ref.current)&&this.root.opts.ref.current.focus()}#n=m(()=>({type:"checkbox",checked:this.root.opts.checked.current===!0,disabled:this.root.trueDisabled,required:this.root.trueRequired,name:this.root.trueName,value:this.root.opts.value.current,readonly:this.root.trueReadonly,onfocus:this.onfocus}));get props(){return t(this.#n)}set props(e){c(this.#n,e)}}function Za(r,e){return e?"indeterminate":r?"checked":"unchecked"}function $a(r,e){J(e,!1);const n=yn.create();Ct();var o=h(),a=f(o);{var l=i=>{$r(i,ke(()=>n.props))};I(a,i=>{n.shouldRender&&i(l)})}s(r,o),Q()}var es=P("<button><!></button>"),ts=P("<!> <!>",1);function ns(r,e){const n=wr();J(e,!0);let o=x(e,"checked",15,!1),a=x(e,"ref",15,null),l=x(e,"disabled",3,!1),i=x(e,"required",3,!1),u=x(e,"name",3,void 0),g=x(e,"value",3,"on"),y=x(e,"id",19,()=>Qr(n)),b=x(e,"indeterminate",15,!1),D=x(e,"type",3,"button"),C=Ce(e,["$$slots","$$events","$$legacy","checked","ref","onCheckedChange","children","disabled","required","name","value","id","indeterminate","onIndeterminateChange","child","type","readonly"]);const p=Qa.getOr(null);p&&g()&&(p.opts.value.current.includes(g())?o(!0):o(!1)),ln.pre(()=>g(),()=>{p&&g()&&(p.opts.value.current.includes(g())?o(!0):o(!1))});const E=_n.create({checked:Ve(()=>o(),Y=>{o(Y),e.onCheckedChange?.(Y)}),disabled:Ve(()=>l()??!1),required:Ve(()=>i()),name:Ve(()=>u()),value:Ve(()=>g()),id:Ve(()=>y()),ref:Ve(()=>a(),Y=>a(Y)),indeterminate:Ve(()=>b(),Y=>{b(Y),e.onIndeterminateChange?.(Y)}),type:Ve(()=>D()),readonly:Ve(()=>!!e.readonly)},p),H=m(()=>Zr({...C},E.props));var Z=ts(),R=f(Z);{var L=Y=>{var w=h(),ve=f(w);{let se=m(()=>({props:t(H),...E.snippetProps}));te(ve,()=>e.child,()=>t(se))}s(Y,w)},A=Y=>{var w=es();Kn(w,()=>({...t(H)}));var ve=G(w);te(ve,()=>e.children??ae,()=>E.snippetProps),U(w),s(Y,w)};I(R,Y=>{e.child?Y(L):Y(A,!1)})}var Se=M(R,2);$a(Se,{}),s(r,Z),Q()}var rs=P('<div data-slot="checkbox-indicator" class="text-current transition-none"><!></div>');function os(r,e){J(e,!0);let n=x(e,"ref",15,null),o=x(e,"checked",15,!1),a=x(e,"indeterminate",15,!1),l=Ce(e,["$$slots","$$events","$$legacy","ref","checked","indeterminate","class"]);var i=h(),u=f(i);{const g=(b,D)=>{let C=()=>D?.().checked,p=()=>D?.().indeterminate;var E=rs(),H=G(E);{var Z=L=>{eo(L,{class:"size-3.5"})},R=L=>{var A=h(),Se=f(A);{var Y=w=>{to(w,{class:"size-3.5"})};I(Se,w=>{p()&&w(Y)},!0)}s(L,A)};I(H,L=>{C()?L(Z):L(R,!1)})}U(E),s(b,E)};let y=m(()=>Dr("border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e.class));nt(u,()=>ns,(b,D)=>{D(b,ke({"data-slot":"checkbox",get class(){return t(y)}},()=>l,{get ref(){return n()},set ref(C){n(C)},get checked(){return o()},set checked(C){o(C)},get indeterminate(){return a()},set indeterminate(C){a(C)},children:g,$$slots:{default:!0}}))})}s(r,i),Q()}var as=P("<!> <!>",1),ss=P("Interval <!>",1),is=P("<!> <!>",1),ls=P("<!> <!>",1),cs=P("<!> <!>",1),us=P("<!> <!> <!> <!>",1),ds=P("<!> <!>",1),fs=P('<div class="flex flex-row gap-2"><!> <!> <!></div>'),hs=P("<!> <!>",1),vs=P("<div><!> <!></div>");function ms(r,e){J(e,!1);let n=rt(!1),o=rt(Bn),a=rt(pt),l,i=null,u=rt(!1);function g(H){const Z=[["rpcs",St],["callAbis",Pn],["txAbis",Sn],["testKeys",In]];for(const[R,L]of Z){const A=H[R];A&&L.set(A)}}function y(){if(!t(o)||t(o)<tn){Tt.warning(`invalid depth: depth must be at least ${tn}`);return}if(!t(a)||t(a)<pt){Tt.warning(`invalid interval: interval must be at least ${pt}`);return}Cn.set(t(o)),En.set(t(a)),An.set(t(u)),l&&g(l),c(n,!1),Tt.info("successfully saved")}function b(H){if(i=H.target.files?.[0]??null,i){const R=new FileReader;R.onload=L=>{Mn(()=>{const A=L.target?.result;if(typeof A=="string")l=JSON.parse(A);else throw new Error("invalid file content")})},R.readAsText(i)}}function D(){const H={rpcs:St.get(),callAbis:Pn.get(),txAbis:Sn.get(),testKeys:In.get()};Mn(()=>{const Z=JSON.stringify(H,null,2),R=new Blob([Z],{type:"application/json"}),L=URL.createObjectURL(R),A=document.createElement("a");A.href=L,A.download=`env_${Date.now()}.json`,A.click(),URL.revokeObjectURL(L)})}Un(()=>(t(n),Nr),()=>{t(n)&&(c(o,Cn.get()),c(a,En.get()),c(u,An.get()))}),Wn(),Ct();var C=vs(),p=G(C);ze(p,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{c(n,!0)},children:(H,Z)=>{Wa(H,{})},$$slots:{default:!0}});var E=M(p,2);Qn(E,{get open(){return t(n)},set open(H){c(n,H)},children:(H,Z)=>{Zn(H,{children:(R,L)=>{var A=hs(),Se=f(A);$n(Se,{children:(w,ve)=>{var se=ds(),be=f(se);er(be,{children:(Te,Pe)=>{Qe();var we=We("Setting");s(Te,we)},$$slots:{default:!0}});var ue=M(be,2);tr(ue,{children:(Te,Pe)=>{Gn(Te,{children:(we,Fe)=>{Yn(we,{children:(et,lt)=>{var je=us(),qe=f(je);ht(qe,{children:(re,Ae)=>{var d=as(),S=f(d);Ne(S,{children:(W,ie)=>{Qe();var le=We("Depth");s(W,le)},$$slots:{default:!0}});var $=M(S,2);Ne($,{children:(W,ie)=>{{let le=an(()=>(Nt(Rt),He(()=>Bn.toString())));It(W,{type:"number",get min(){return Nt(Rt),He(()=>tn)},get placeholder(){return t(le)},get value(){return t(o)},set value(tt){c(o,tt)},$$legacy:!0})}},$$slots:{default:!0}}),s(re,d)},$$slots:{default:!0}});var ne=M(qe,2);ht(ne,{children:(re,Ae)=>{var d=is(),S=f(d);Ne(S,{children:(W,ie)=>{Qe();var le=ss(),tt=M(f(le));ze(tt,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{Tt.info("effective only for http/https rpc endpoints",{class:"whitespace-pre-line"})},children:(ct,Re)=>{Ya(ct,{})},$$slots:{default:!0}}),s(W,le)},$$slots:{default:!0}});var $=M(S,2);Ne($,{children:(W,ie)=>{{let le=an(()=>(Nt(Rt),He(()=>`${pt.toString()} ms`)));It(W,{type:"number",get min(){return Nt(Rt),He(()=>pt)},get placeholder(){return t(le)},get value(){return t(a)},set value(tt){c(a,tt)},$$legacy:!0})}},$$slots:{default:!0}}),s(re,d)},$$slots:{default:!0}});var Ee=M(ne,2);ht(Ee,{children:(re,Ae)=>{var d=ls(),S=f(d);Ne(S,{children:(W,ie)=>{Qe();var le=We("Metrics");s(W,le)},$$slots:{default:!0}});var $=M(S,2);Ne($,{children:(W,ie)=>{os(W,{get checked(){return t(u)},set checked(le){c(u,le)},$$legacy:!0})},$$slots:{default:!0}}),s(re,d)},$$slots:{default:!0}});var Me=M(Ee,2);ht(Me,{children:(re,Ae)=>{var d=cs(),S=f(d);Ne(S,{children:(W,ie)=>{Qe();var le=We("Environment");s(W,le)},$$slots:{default:!0}});var $=M(S,2);Ne($,{children:(W,ie)=>{It(W,{type:"file",class:"cursor-pointer",onchange:b})},$$slots:{default:!0}}),s(re,d)},$$slots:{default:!0}}),s(et,je)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(w,se)},$$slots:{default:!0}});var Y=M(Se,2);nr(Y,{children:(w,ve)=>{var se=fs(),be=G(se);ze(be,{variant:"outline",class:"cursor-pointer",onclick:D,children:(Pe,we)=>{Ka(Pe,{})},$$slots:{default:!0}});var ue=M(be,2);ze(ue,{class:"cursor-pointer",size:"icon",variant:"outline",get onclick(){return zo},children:(Pe,we)=>{Xa(Pe,{})},$$slots:{default:!0}});var Te=M(ue,2);ze(Te,{class:"cursor-pointer",variant:"outline",onclick:y,children:(Pe,we)=>{Qe();var Fe=We("Save");s(Pe,Fe)},$$slots:{default:!0}}),U(se),s(w,se)},$$slots:{default:!0}}),s(R,A)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),U(C),s(r,C),Q()}var gs=P("<!> <!>",1),_s=P('<div class="flex gap-2"><!> <!> <!></div>'),ys=P("<!> <!>",1),bs=P("<!> <!>",1),ws=P("<!> <!>",1),xs=P("<!> <!>",1),ps=P("<div><!> <!></div>");function ks(r,e){J(e,!1);let n=rt(!1),o=rt("0"),a=rt("0x00");function l(C){const p=C.currentTarget.value;p!==""&&/^\d+$/.test(p)&&(c(o,p),c(a,Dn(p)))}function i(C){let p=C.currentTarget.value.trim();p===""||p==="0x"||(p.startsWith("0x")&&(p=p.slice(2)),/^[0-9a-fA-F]+$/.test(p)&&(c(a,`0x${p}`),c(o,Rr(t(a)).toString())))}function u(){t(o).length!==0&&c(a,Dn(t(o),32))}async function g(){t(a).length!==0&&(await navigator.clipboard.writeText(t(a)),Tt.info(`copied hex: ${t(a)}`))}Un(()=>t(n),()=>{t(n)&&(c(o,"0"),c(a,"0x00"))}),Wn(),Ct();var y=ps(),b=G(y);ze(b,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{c(n,!0)},children:(C,p)=>{Va(C,{})},$$slots:{default:!0}});var D=M(b,2);Qn(D,{get open(){return t(n)},set open(C){c(n,C)},children:(C,p)=>{Zn(C,{children:(E,H)=>{var Z=xs(),R=f(Z);$n(R,{children:(A,Se)=>{var Y=ws(),w=f(Y);er(w,{children:(se,be)=>{Qe();var ue=We("Hex Converter");s(se,ue)},$$slots:{default:!0}});var ve=M(w,2);tr(ve,{children:(se,be)=>{Gn(se,{children:(ue,Te)=>{Yn(ue,{children:(Pe,we)=>{var Fe=bs(),et=f(Fe);ht(et,{children:(je,qe)=>{var ne=gs(),Ee=f(ne);Ne(Ee,{children:(re,Ae)=>{Qe();var d=We("Decimal");s(re,d)},$$slots:{default:!0}});var Me=M(Ee,2);Ne(Me,{children:(re,Ae)=>{It(re,{placeholder:"0",get value(){return t(o)},oninput:l})},$$slots:{default:!0}}),s(je,ne)},$$slots:{default:!0}});var lt=M(et,2);ht(lt,{children:(je,qe)=>{var ne=ys(),Ee=f(ne);Ne(Ee,{children:(re,Ae)=>{Qe();var d=We("Hex");s(re,d)},$$slots:{default:!0}});var Me=M(Ee,2);Ne(Me,{children:(re,Ae)=>{var d=_s(),S=G(d);It(S,{placeholder:"0x00",get value(){return t(a)},oninput:i});var $=M(S,2);ze($,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:u,children:(ie,le)=>{ja(ie,{})},$$slots:{default:!0}});var W=M($,2);ze(W,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:g,children:(ie,le)=>{Ua(ie,{})},$$slots:{default:!0}}),U(d),s(re,d)},$$slots:{default:!0}}),s(je,ne)},$$slots:{default:!0}}),s(Pe,Fe)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(A,Y)},$$slots:{default:!0}});var L=M(R,2);nr(L,{}),s(E,Z)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),U(y),s(r,y),Q()}var Ts=P('<div class="flex w-full flex-row"><div class="ml-4 flex-1"><a class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">ETH UI</a></div> <div class="mr-4 flex flex-1 justify-end gap-2"><!> <!> <!></div></div>');function Is(r,e){J(e,!1);let n=rt("idle");Lr.subscribe(b=>{c(n,b)}),Ct();var o=Ts(),a=G(o),l=G(a);U(a);var i=M(a,2),u=G(i);ze(u,{variant:"ghost",size:"icon",children:(b,D)=>{{let C=an(()=>t(n)==="processing"?"animate-spin":"");no(b,{get class(){return t(C)}})}},$$slots:{default:!0}});var g=M(u,2);ks(g,{});var y=M(g,2);ms(y,{}),U(i),U(o),me(b=>V(l,"href",b),[()=>Or("/")]),s(r,o),Q()}var Ss=P('<div class="grid w-full grid-cols-3 items-center"><div></div> <p class="text-center">© 2025 code0xff</p> <div class="mr-4 flex justify-end gap-2"><!> <!></div></div>');function Ps(r,e){J(e,!1),Ct();var n=Ss(),o=M(G(n),4),a=G(o);ze(a,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(zr),children:(i,u)=>{qa(i,{})},$$slots:{default:!0}});var l=M(a,2);ze(l,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(Hr),children:(i,u)=>{Ga(i,{})},$$slots:{default:!0}}),U(o),U(n),s(r,n),Q()}var Ms=P('<link rel="icon"/>'),Cs=P('<!> <!> <div class="flex h-screen flex-col overflow-hidden"><div class="my-4 shrink-0"><!></div> <div class="flex min-h-0 flex-1 flex-col"><!></div> <div class="my-4 shrink-0"><!></div></div>',1);function Us(r,e){J(e,!0);async function n(){let p=qr.url.searchParams.get("rpc"),E=St.get();p?(nn.set(p),[...E,...rn].includes(p)||St.set([...E,p])):p=nn.get(),E=St.get(),(!p||p.trim().length===0||![...E,...rn].includes(p))&&nn.set(rn[0]),await jr(),Nn.set(!0)}Vt(async()=>{await Fr(n,!1,async()=>{Nn.set(!0)})});var o=Cs();Vn(p=>{var E=Ms();Er.title="ETH UI",me(()=>V(E,"href",io)),s(p,E)});var a=f(o);Fa(a,{position:"top-right"});var l=M(a,2);Go(l,{});var i=M(l,2),u=G(i),g=G(u);Is(g,{}),U(u);var y=M(u,2),b=G(y);te(b,()=>e.children??ae),U(y);var D=M(y,2),C=G(D);Ps(C,{}),U(D),U(i),s(r,o),Q()}export{Us as component,js as universal};
