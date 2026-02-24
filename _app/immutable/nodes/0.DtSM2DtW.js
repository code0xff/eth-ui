import{e as wr,g as bn,b as jt,o as et,c as h,a as s,f as P,i as Ur,j as wn,d as pn,t as je,s as Bt,k as Ct,p as xn}from"../chunks/Bz4IE6pF.js";import{t as me,h as pr,d as xr,a2 as kn,aY as Tn,N as kr,al as Sn,aC as In,aP as Pn,aJ as Mn,T as Cn,aD as Nt,x as Ye,z as Je,u as Oe,ad as Z,i as t,k as c,a0 as vt,af as m,aX as hr,p as Q,f as d,a as $,s as I,o as Vt,c as J,r as W,aR as En,aS as Tr,aT as An,n as ie,l as Wr,e as Kr,m as ot,q as Ge,j as sr,g as xt,ag as Dn,aZ as Bn}from"../chunks/CgLCcx4H.js";import{l as U,m as ir,P as Qe,Q as $e,S as we,U as Ze,V as er,s as re,X as Nn,q as Yr,Y as Rn,I as tt,u as Ln,B as Ve,E as Sr,T as Gr,b as Jr,c as lt,d as Ee,a as It,J as St,Z as tr,M as Ir,L as Pr,z as Mr,_ as Pt,F as Cr,$ as rr,a0 as kt,a1 as Er,a2 as Ar,a3 as Dr,a4 as Br,C as Rt,a5 as On,a6 as Nr,a7 as zn,a8 as Hn,r as Fn,a9 as qn,aa as jn,f as Vn,i as Rr,ab as nr,ac as or,g as Un}from"../chunks/CS0Hwn5T.js";import{p as Wn}from"../chunks/Cdzjw52H.js";import{M as Kn,s as Yn}from"../chunks/BoEDK46m.js";import{i as S,p,b as Xr,s as Pe,r as De}from"../chunks/DugkdNnh.js";import{c as nt}from"../chunks/C2W4Aqgo.js";import{i as Et}from"../chunks/DH_0LwQJ.js";import{C as Zr,l as Gn,w as lr,p as Jn,S as Xn,m as Lr,q as Or,V as Zn,k as Qn,j as $n,r as eo,a as Ke,u as to}from"../chunks/8bYsoX51.js";import{H as ro,C as no,M as oo,R as Qr,D as $r,a as en,b as tn,c as rn,E as ao,d as nn}from"../chunks/CPfEqJRQ.js";import{R as so}from"../chunks/DkCBtlb7.js";function io(n,e,r=!1,o=!1,a=!1){var l=n,i="";me(()=>{var u=kn;if(i===(i=e()??"")){pr&&xr();return}if(u.nodes_start!==null&&(Tn(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),i!==""){if(pr){kr.data;for(var g=xr(),y=g;g!==null&&(g.nodeType!==Sn||g.data!=="");)y=g,g=In(g);if(g===null)throw Pn(),Mn;wr(kr,y),l=Cn(g);return}var x=i+"";r?x=`<svg>${x}</svg>`:o&&(x=`<math>${x}</math>`);var M=bn(x);if((r||o)&&(M=Nt(M)),wr(Nt(M),M.lastChild),r||o)for(;Nt(M);)l.before(Nt(M));else l.before(M)}})}const lo=!1,co=!0,uo="always",Ks=Object.freeze(Object.defineProperty({__proto__:null,prerender:co,ssr:lo,trailingSlash:uo},Symbol.toStringTag,{value:"Module"})),fo=""+new URL("../assets/favicon.DDmz9QoX.ico",import.meta.url).href,on=typeof window<"u"?window:void 0;function ho(n){let e=n.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}let vo=class{#t;#e;constructor(e={}){const{window:r=on,document:o=r?.document}=e;r!==void 0&&(this.#t=o,this.#e=jt(a=>{const l=et(r,"focusin",a),i=et(r,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?ho(this.#t):null}};new vo;function mo(n,e){switch(n){case"post":Je(e);break;case"pre":Ye(e);break}}function an(n,e,r,o={}){const{lazy:a=!1}=o;let l=!a,i=Array.isArray(n)?[]:void 0;mo(e,()=>{const u=Array.isArray(n)?n.map(y=>y()):n();if(!l){l=!0,i=u;return}const g=Oe(()=>r(u,i));return i=u,g})}function vr(n,e,r){an(n,"post",e,r)}function go(n,e,r){an(n,"pre",e,r)}vr.pre=go;function _o(n,e){switch(n){case"local":return e.localStorage;case"session":return e.sessionStorage}}class sn{#t;#e;#r;#n;#o;#a=Z(0);constructor(e,r,o={}){const{storage:a="local",serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:i=!0,window:u=on}=o;if(this.#t=r,this.#e=e,this.#r=l,u===void 0)return;const g=_o(a,u);this.#n=g;const y=g.getItem(e);y!==null?this.#t=this.#i(y):this.#l(r),i&&a==="local"&&(this.#o=jt(()=>et(u,"storage",this.#s)))}get current(){this.#o?.(),t(this.#a);const e=this.#i(this.#n?.getItem(this.#e))??this.#t,r=new WeakMap,o=a=>{if(a===null||a?.constructor.name==="Date"||typeof a!="object")return a;let l=r.get(a);return l||(l=new Proxy(a,{get:(i,u)=>(t(this.#a),o(Reflect.get(i,u))),set:(i,u,g)=>(c(this.#a,t(this.#a)+1),Reflect.set(i,u,g),this.#l(e),!0)}),r.set(a,l)),l};return o(e)}set current(e){this.#l(e),c(this.#a,t(this.#a)+1)}#s=e=>{e.key!==this.#e||e.newValue===null||(this.#t=this.#i(e.newValue),c(this.#a,t(this.#a)+1))};#i(e){try{return this.#r.deserialize(e)}catch(r){console.error(`Error when parsing "${e}" from persisted store "${this.#e}"`,r);return}}#l(e){try{e!=null&&this.#n?.setItem(this.#e,this.#r.serialize(e))}catch(r){console.error(`Error when writing value from persisted store "${this.#e}" to ${this.#n}`,r)}}}function zr(n){return n.filter(e=>e.length>0)}const ln={getItem:n=>null,setItem:(n,e)=>{}},At=typeof document<"u";function yo(n){return typeof n=="function"}function bo(n){return n!==null&&typeof n=="object"}const Mt=Symbol("box"),mr=Symbol("is-writable");function wo(n){return bo(n)&&Mt in n}function po(n){return de.isBox(n)&&mr in n}function de(n){let e=Z(vt(n));return{[Mt]:!0,[mr]:!0,get current(){return t(e)},set current(r){c(e,r,!0)}}}function xo(n,e){const r=m(n);return e?{[Mt]:!0,[mr]:!0,get current(){return t(r)},set current(o){e(o)}}:{[Mt]:!0,get current(){return n()}}}function ko(n){return de.isBox(n)?n:yo(n)?de.with(n):de(n)}function To(n){return Object.entries(n).reduce((e,[r,o])=>de.isBox(o)?(de.isWritableBox(o)?Object.defineProperty(e,r,{get(){return o.current},set(a){o.current=a}}):Object.defineProperty(e,r,{get(){return o.current}}),e):Object.assign(e,{[r]:o}),{})}function So(n){return de.isWritableBox(n)?{[Mt]:!0,get current(){return n.current}}:n}de.from=ko;de.with=xo;de.flatten=To;de.readonly=So;de.isBox=wo;de.isWritableBox=po;function Io(n,e){const r=RegExp(n,"g");return o=>{if(typeof o!="string")throw new TypeError(`expected an argument of type string, but got ${typeof o}`);return o.match(r)?o.replace(r,e):o}}const Po=Io(/[A-Z]/,n=>`-${n.toLowerCase()}`);function Mo(n){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError(`expected an argument of type object, but got ${typeof n}`);return Object.keys(n).map(e=>`${Po(e)}: ${n[e]};`).join(`
`)}function Co(n={}){return Mo(n).replace(`
`," ")}const Eo={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",transform:"translateX(-100%)"};Co(Eo);const Ao=typeof window<"u"?window:void 0;function Do(n){let e=n.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}let Bo=class{#t;#e;constructor(e={}){const{window:r=Ao,document:o=r?.document}=e;r!==void 0&&(this.#t=o,this.#e=jt(a=>{const l=et(r,"focusin",a),i=et(r,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?Do(this.#t):null}};new Bo;const ct=de("mode-watcher-mode"),ut=de("mode-watcher-theme"),No=["dark","light","system"];function cr(n){return typeof n!="string"?!1:No.includes(n)}class Ro{#t="system";#e=At?localStorage:ln;#r=this.#e.getItem(ct.current);#n=cr(this.#r)?this.#r:this.#t;#o=Z(vt(this.#a()));#a(e=this.#n){return new sn(ct.current,e,{serializer:{serialize:r=>r,deserialize:r=>cr(r)?r:this.#t}})}constructor(){hr(()=>vr.pre(()=>ct.current,(e,r)=>{const o=t(this.#o).current;c(this.#o,this.#a(o),!0),r&&localStorage.removeItem(r)}))}get current(){return t(this.#o).current}set current(e){t(this.#o).current=e}}class Lo{#t=void 0;#e=!0;#r=Z(vt(this.#t));#n=typeof window<"u"&&typeof window.matchMedia=="function"?new Kn("prefers-color-scheme: light"):{current:!1};query(){At&&c(this.#r,this.#n.current?"light":"dark",!0)}tracking(e){this.#e=e}constructor(){hr(()=>{Ye(()=>{this.#e&&this.query()})}),this.query=this.query.bind(this),this.tracking=this.tracking.bind(this)}get current(){return t(this.#r)}}const zt=new Ro,ur=new Lo;class Oo{#t=At?localStorage:ln;#e=this.#t.getItem(ut.current);#r=this.#e===null||this.#e===void 0?"":this.#e;#n=Z(vt(this.#o()));#o(e=this.#r){return new sn(ut.current,e,{serializer:{serialize:r=>typeof r!="string"?"":r,deserialize:r=>r}})}constructor(){hr(()=>vr.pre(()=>ut.current,(e,r)=>{const o=t(this.#n).current;c(this.#n,this.#o(o),!0),r&&localStorage.removeItem(r)}))}get current(){return t(this.#n).current}set current(e){t(this.#n).current=e}}const Ot=new Oo;let Hr,Fr,qr=!1,Tt=null;function zo(){return Tt||(Tt=document.createElement("style"),Tt.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)),Tt)}function cn(n,e=!1){if(typeof document>"u")return;if(!qr){qr=!0,n();return}if(typeof window<"u"&&window.__vitest_worker__){n();return}clearTimeout(Hr),clearTimeout(Fr);const o=zo(),a=()=>document.head.appendChild(o),l=()=>{o.parentNode&&document.head.removeChild(o)};function i(){n(),window.requestAnimationFrame(l)}if(typeof window.requestAnimationFrame<"u"){a(),e?i():window.requestAnimationFrame(()=>{i()});return}a(),Hr=window.setTimeout(()=>{n(),Fr=window.setTimeout(l,16)},16)}const at=de(void 0),Ht=de(!0),Ft=de(!1),dr=de([]),fr=de([]);function Ho(){const n=m(()=>{if(!At)return;const e=zt.current==="system"?ur.current:zt.current,r=zr(dr.current),o=zr(fr.current);function a(){const l=document.documentElement,i=document.querySelector('meta[name="theme-color"]');e==="light"?(r.length&&l.classList.remove(...r),o.length&&l.classList.add(...o),l.style.colorScheme="light",i&&at.current&&i.setAttribute("content",at.current.light)):(o.length&&l.classList.remove(...o),r.length&&l.classList.add(...r),l.style.colorScheme="dark",i&&at.current&&i.setAttribute("content",at.current.dark))}return Ht.current?cn(a,Ft.current):a(),e});return{get current(){return t(n)}}}function Fo(){const n=m(()=>{if(Ot.current,!At)return;function e(){document.documentElement.setAttribute("data-theme",Ot.current)}return Ht.current?cn(e,Oe(()=>Ft.current)):e(),Ot.current});return{get current(){return t(n)}}}const gr=Ho(),qo=Fo();function jo(){zt.current=gr.current==="dark"?"light":"dark"}function Vo(n){zt.current=n}function Uo(n){Ot.current=n}function Wo({defaultMode:n="system",themeColors:e,darkClassNames:r=["dark"],lightClassNames:o=[],defaultTheme:a="",modeStorageKey:l="mode-watcher-mode",themeStorageKey:i="mode-watcher-theme"}){const u=document.documentElement,g=localStorage.getItem(l)??n,y=localStorage.getItem(i)??a,x=g==="light"||g==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(x?(r.length&&u.classList.remove(...r.filter(Boolean)),o.length&&u.classList.add(...o.filter(Boolean))):(o.length&&u.classList.remove(...o.filter(Boolean)),r.length&&u.classList.add(...r.filter(Boolean))),u.style.colorScheme=x?"light":"dark",e){const M=document.querySelector('meta[name="theme-color"]');M&&M.setAttribute("content",g==="light"?e.light:e.dark)}y&&(u.setAttribute("data-theme",y),localStorage.setItem(i,y)),localStorage.setItem(l,g)}var Ko=P('<meta name="theme-color"/>');function Yo(n,e){Q(e,!0);var r=h(),o=d(r);{var a=l=>{var i=Ko();me(()=>U(i,"content",e.themeColors.dark)),s(l,i)};S(o,l=>{e.themeColors&&l(a)})}s(n,r),$()}var Go=P('<meta name="theme-color"/>'),Jo=P("<!> <!>",1);function Xo(n,e){Q(e,!0);let r=p(e,"trueNonce",3,"");Ur(o=>{var a=Jo(),l=d(a);{var i=g=>{var y=Go();me(()=>U(y,"content",e.themeColors.dark)),s(g,y)};S(l,g=>{e.themeColors&&g(i)})}var u=I(l,2);io(u,()=>`<script${r()?` nonce=${r()}`:""}>(`+Wo.toString()+")("+JSON.stringify(e.initConfig)+");<\/script>"),s(o,a)}),$()}function Zo(n,e){Q(e,!0);let r=p(e,"track",3,!0),o=p(e,"defaultMode",3,"system"),a=p(e,"disableTransitions",3,!0),l=p(e,"darkClassNames",19,()=>["dark"]),i=p(e,"lightClassNames",19,()=>[]),u=p(e,"defaultTheme",3,""),g=p(e,"nonce",3,""),y=p(e,"themeStorageKey",3,"mode-watcher-theme"),x=p(e,"modeStorageKey",3,"mode-watcher-mode"),M=p(e,"disableHeadScriptInjection",3,!1),D=p(e,"synchronousModeChanges",3,!1);ct.current=x(),ut.current=y(),dr.current=l(),fr.current=i(),Ht.current=a(),at.current=e.themeColors,Ft.current=D(),Ye(()=>{Ft.current=D()}),Ye(()=>{Ht.current=a()}),Ye(()=>{at.current=e.themeColors}),Ye(()=>{dr.current=l()}),Ye(()=>{fr.current=i()}),Ye(()=>{ct.current=x()}),Ye(()=>{ut.current=y()}),Ye(()=>{gr.current,ct.current,ut.current,qo.current}),Vt(()=>{ur.tracking(r()),ur.query();const z=localStorage.getItem(ct.current);Vo(cr(z)?z:o());const ee=localStorage.getItem(ut.current);Uo(ee||u())});const b={defaultMode:o(),themeColors:e.themeColors,darkClassNames:l(),lightClassNames:i(),defaultTheme:u(),modeStorageKey:x(),themeStorageKey:y()},C=m(()=>typeof window>"u"?g():"");var le=h(),O=d(le);{var q=z=>{Yo(z,{get themeColors(){return at.current}})},B=z=>{Xo(z,{get trueNonce(){return t(C)},get initConfig(){return b},get themeColors(){return at.current}})};S(O,z=>{M()?z(q):z(B,!1)})}s(n,le),$()}const Qo=Array(12).fill(0);var $o=P('<div class="sonner-loading-bar"></div>'),ea=P('<div><div class="sonner-spinner"></div></div>');function ta(n,e){Q(e,!0);var r=ea(),o=J(r);ir(o,23,()=>Qo,(a,l)=>`spinner-bar-${l}`,(a,l)=>{var i=$o();s(a,i)}),W(o),W(r),me(a=>{$e(r,1,a),U(r,"data-visible",e.visible)},[()=>Qe(["sonner-loading-wrapper",e.class].filter(Boolean).join(" "))]),s(n,r),$()}const ra=typeof window<"u"?window:void 0;function na(n){let e=n.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class oa{#t;#e;constructor(e={}){const{window:r=ra,document:o=r?.document}=e;r!==void 0&&(this.#t=o,this.#e=jt(a=>{const l=et(r,"focusin",a),i=et(r,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?na(this.#t):null}}new oa;class aa{#t;#e;constructor(e){this.#t=e,this.#e=Symbol(e)}get key(){return this.#e}exists(){return En(this.#e)}get(){const e=Tr(this.#e);if(e===void 0)throw new Error(`Context "${this.#t}" not found`);return e}getOr(e){const r=Tr(this.#e);return r===void 0?e:r}set(e){return An(this.#e,e)}}const sa=new aa("<Toaster/>");function qt(n){return n.label!==void 0}function ia(){let n=Z(vt(typeof document<"u"?document.hidden:!1));return Je(()=>et(document,"visibilitychange",()=>{c(n,document.hidden,!0)})),{get current(){return t(n)}}}const jr=4e3,la=14,ca=45,ua=200,da=.05,fa={toast:"",title:"",description:"",loader:"",closeButton:"",cancelButton:"",actionButton:"",action:"",warning:"",error:"",success:"",default:"",info:"",loading:""};function ha(n){const[e,r]=n.split("-"),o=[];return e&&o.push(e),r&&o.push(r),o}function Vr(n){return 1/(1.5+Math.abs(n)/20)}var va=P("<div><!></div>"),ma=(n,e,r,o,a)=>{t(e)||!t(r)||(o(),a.toast.onDismiss?.(a.toast))},ga=P('<button data-close-button=""><!></button>'),_a=P('<div data-icon=""><!> <!></div>'),ya=P('<div data-description=""><!></div>'),ba=(n,e,r,o)=>{qt(e.toast.cancel)&&t(r)&&(e.toast.cancel?.onClick?.(n),o())},wa=P('<button data-button="" data-cancel=""> </button>'),pa=(n,e,r)=>{qt(e.toast.action)&&(e.toast.action?.onClick(n),!n.defaultPrevented&&r())},xa=P('<button data-button=""> </button>'),ka=P('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>',1),Ta=P('<li data-sonner-toast=""><!> <!></li>');function Sa(n,e){Q(e,!0);const r=k=>{var A=h(),F=d(A);{var G=j=>{var ye=va(),it=J(ye);re(it,()=>e.loadingIcon),W(ye),me(mt=>{$e(ye,1,mt),U(ye,"data-visible",t(w)==="loading")},[()=>Qe(Ze(t(oe)?.loader,e.toast?.classes?.loader,"sonner-loader"))]),s(j,ye)},te=j=>{{let ye=m(()=>Ze(t(oe)?.loader,e.toast.classes?.loader)),it=m(()=>t(w)==="loading");ta(j,{get class(){return t(ye)},get visible(){return t(it)}})}};S(F,j=>{e.loadingIcon?j(G):j(te,!1)})}s(k,A)};let o=p(e,"cancelButtonStyle",3,""),a=p(e,"actionButtonStyle",3,""),l=p(e,"descriptionClass",3,""),i=p(e,"unstyled",3,!1),u=p(e,"defaultRichColors",3,!1);const g={...fa};let y=Z(!1),x=Z(!1),M=Z(!1),D=Z(!1),b=Z(!1),C=Z(0),le=Z(0),O=e.toast.duration||e.duration||jr,q=Z(void 0),B=Z(null),z=Z(null);const ee=m(()=>e.index===0),K=m(()=>e.index+1<=e.visibleToasts),w=m(()=>e.toast.type),ce=m(()=>e.toast.dismissable!==!1),Te=m(()=>e.toast.class||""),ge=m(()=>e.toast.descriptionClass||""),ue=m(()=>we.heights.findIndex(k=>k.toastId===e.toast.id)||0),Ae=m(()=>e.toast.closeButton??e.closeButton),ze=m(()=>e.toast.duration??e.duration??jr);let _e=null;const Me=m(()=>e.position.split("-")),Xe=m(()=>we.heights.reduce((k,A,F)=>F>=t(ue)?k:k+A.height,0)),st=ia(),rt=m(()=>e.toast.invert||e.invert),Ue=m(()=>t(w)==="loading"),oe=m(()=>({...g,...e.classes})),Be=m(()=>e.toast.title),Ce=m(()=>e.toast.description);let pe=Z(0),We=Z(0);const f=m(()=>Math.round(t(ue)*la+t(Xe)));Je(()=>{t(Be),t(Ce);let k;e.expanded||e.expandByDefault?k=1:k=1-e.index*da;const A=Oe(()=>t(q));if(A===void 0)return;A.style.setProperty("height","auto");const F=A.offsetHeight,G=A.getBoundingClientRect().height,te=Math.round(G/k+Number.EPSILON&100)/100;A.style.removeProperty("height");let j;Math.abs(te-F)<1?j=te:j=F,c(le,j,!0),Oe(()=>{we.setHeight({toastId:e.toast.id,height:j})})});function N(){c(x,!0),c(C,t(f),!0),we.removeHeight(e.toast.id),setTimeout(()=>{we.remove(e.toast.id)},ua)}let H;const Y=m(()=>e.toast.promise&&t(w)==="loading"||e.toast.duration===Number.POSITIVE_INFINITY);function ne(){c(pe,new Date().getTime(),!0),H=setTimeout(()=>{e.toast.onAutoClose?.(e.toast),N()},O)}function X(){if(t(We)<t(pe)){const k=new Date().getTime()-t(pe);O=O-k}c(We,new Date().getTime(),!0)}Je(()=>{e.toast.updated&&(clearTimeout(H),O=t(ze),ne())}),Je(()=>(t(Y)||(e.expanded||e.interacting||st.current?X():ne()),()=>clearTimeout(H))),Vt(()=>{c(y,!0);const k=t(q)?.getBoundingClientRect().height;return c(le,k,!0),we.setHeight({toastId:e.toast.id,height:k}),()=>{we.removeHeight(e.toast.id)}}),Je(()=>{e.toast.delete&&Oe(()=>{N(),e.toast.onDismiss?.(e.toast)})});const Ne=k=>{if(t(Ue))return;c(C,t(f),!0);const A=k.target;A.setPointerCapture(k.pointerId),A.tagName!=="BUTTON"&&(c(M,!0),_e={x:k.clientX,y:k.clientY})},ae=()=>{if(t(D)||!t(ce))return;_e=null;const k=Number(t(q)?.style.getPropertyValue("--swipe-amount-x").replace("px","")||0),A=Number(t(q)?.style.getPropertyValue("--swipe-amount-y").replace("px","")||0),F=new Date().getTime()-0,G=t(B)==="x"?k:A,te=Math.abs(G)/F;if(Math.abs(G)>=ca||te>.11){c(C,t(f),!0),e.toast.onDismiss?.(e.toast),t(B)==="x"?c(z,k>0?"right":"left",!0):c(z,A>0?"down":"up",!0),N(),c(D,!0);return}else t(q)?.style.setProperty("--swipe-amount-x","0px"),t(q)?.style.setProperty("--swipe-amount-y","0px");c(b,!1),c(M,!1),c(B,null)},xe=k=>{if(!_e||!t(ce)||(window.getSelection()?.toString().length??-1)>0)return;const F=k.clientY-_e.y,G=k.clientX-_e.x,te=e.swipeDirections??ha(e.position);!t(B)&&(Math.abs(G)>1||Math.abs(F)>1)&&c(B,Math.abs(G)>Math.abs(F)?"x":"y",!0);let j={x:0,y:0};if(t(B)==="y"){if(te.includes("top")||te.includes("bottom"))if(te.includes("top")&&F<0||te.includes("bottom")&&F>0)j.y=F;else{const ye=F*Vr(F);j.y=Math.abs(ye)<Math.abs(F)?ye:F}}else if(t(B)==="x"&&(te.includes("left")||te.includes("right")))if(te.includes("left")&&G<0||te.includes("right")&&G>0)j.x=G;else{const ye=G*Vr(G);j.x=Math.abs(ye)<Math.abs(G)?ye:G}(Math.abs(j.x)>0||Math.abs(j.y)>0)&&c(b,!0),t(q)?.style.setProperty("--swipe-amount-x",`${j.x}px`),t(q)?.style.setProperty("--swipe-amount-y",`${j.y}px`)},He=()=>{c(M,!1),c(B,null),_e=null},Se=m(()=>e.toast.icon?e.toast.icon:t(w)==="success"?e.successIcon:t(w)==="error"?e.errorIcon:t(w)==="warning"?e.warningIcon:t(w)==="info"?e.infoIcon:t(w)==="loading"?e.loadingIcon:null);var E=Ta();U(E,"tabindex",0);let Dt;E.__pointermove=xe,E.__pointerup=ae,E.__pointerdown=Ne;var Ut=J(E);{var Wt=k=>{var A=ga();A.__click=[ma,Ue,ce,N,e];var F=J(A);re(F,()=>e.closeIcon??ie),W(A),me(G=>{U(A,"aria-label",e.closeButtonAriaLabel),U(A,"data-disabled",t(Ue)),$e(A,1,G)},[()=>Qe(Ze(t(oe)?.closeButton,e.toast?.classes?.closeButton))]),s(k,A)};S(Ut,k=>{t(Ae)&&!e.toast.component&&t(w)!=="loading"&&e.closeIcon!==null&&k(Wt)})}var Kt=I(Ut,2);{var Yt=k=>{const A=m(()=>e.toast.component);var F=h(),G=d(F);nt(G,()=>t(A),(te,j)=>{j(te,Pe(()=>e.toast.componentProps,{closeToast:N}))}),s(k,F)},Gt=k=>{var A=ka(),F=d(A);{var G=R=>{var v=_a(),T=J(v);{var V=L=>{var he=h(),Ie=d(he);{var ve=be=>{var Le=h(),gt=d(Le);nt(gt,()=>e.toast.icon,(_t,yt)=>{yt(_t,{})}),s(be,Le)},se=be=>{r(be)};S(Ie,be=>{e.toast.icon?be(ve):be(se,!1)})}s(L,he)};S(T,L=>{(e.toast.promise||t(w)==="loading")&&L(V)})}var fe=I(T,2);{var _=L=>{var he=h(),Ie=d(he);{var ve=be=>{var Le=h(),gt=d(Le);nt(gt,()=>e.toast.icon,(_t,yt)=>{yt(_t,{})}),s(be,Le)},se=be=>{var Le=h(),gt=d(Le);{var _t=dt=>{var bt=h(),Xt=d(bt);re(Xt,()=>e.successIcon??ie),s(dt,bt)},yt=dt=>{var bt=h(),Xt=d(bt);{var hn=ft=>{var wt=h(),Zt=d(wt);re(Zt,()=>e.errorIcon??ie),s(ft,wt)},vn=ft=>{var wt=h(),Zt=d(wt);{var mn=ht=>{var pt=h(),Qt=d(pt);re(Qt,()=>e.warningIcon??ie),s(ht,pt)},gn=ht=>{var pt=h(),Qt=d(pt);{var _n=$t=>{var br=h(),yn=d(br);re(yn,()=>e.infoIcon??ie),s($t,br)};S(Qt,$t=>{t(w)==="info"&&$t(_n)},!0)}s(ht,pt)};S(Zt,ht=>{t(w)==="warning"?ht(mn):ht(gn,!1)},!0)}s(ft,wt)};S(Xt,ft=>{t(w)==="error"?ft(hn):ft(vn,!1)},!0)}s(dt,bt)};S(gt,dt=>{t(w)==="success"?dt(_t):dt(yt,!1)},!0)}s(be,Le)};S(Ie,be=>{e.toast.icon?be(ve):be(se,!1)})}s(L,he)};S(fe,L=>{e.toast.type!=="loading"&&L(_)})}W(v),me(L=>$e(v,1,L),[()=>Qe(Ze(t(oe)?.icon,e.toast?.classes?.icon))]),s(R,v)};S(F,R=>{(t(w)||e.toast.icon||e.toast.promise)&&e.toast.icon!==null&&(t(Se)!==null||e.toast.icon)&&R(G)})}var te=I(F,2),j=J(te),ye=J(j);{var it=R=>{var v=h(),T=d(v);{var V=_=>{const L=m(()=>e.toast.title);var he=h(),Ie=d(he);nt(Ie,()=>t(L),(ve,se)=>{se(ve,Pe(()=>e.toast.componentProps))}),s(_,he)},fe=_=>{var L=je();me(()=>Bt(L,e.toast.title)),s(_,L)};S(T,_=>{typeof e.toast.title!="string"?_(V):_(fe,!1)})}s(R,v)};S(ye,R=>{e.toast.title&&R(it)})}W(j);var mt=I(j,2);{var Jt=R=>{var v=ya(),T=J(v);{var V=_=>{const L=m(()=>e.toast.description);var he=h(),Ie=d(he);nt(Ie,()=>t(L),(ve,se)=>{se(ve,Pe(()=>e.toast.componentProps))}),s(_,he)},fe=_=>{var L=je();me(()=>Bt(L,e.toast.description)),s(_,L)};S(T,_=>{typeof e.toast.description!="string"?_(V):_(fe,!1)})}W(v),me(_=>$e(v,1,_),[()=>Qe(Ze(l(),t(ge),t(oe)?.description,e.toast.classes?.description))]),s(R,v)};S(mt,R=>{e.toast.description&&R(Jt)})}W(te);var Re=I(te,2);{var ke=R=>{var v=h(),T=d(v);{var V=_=>{var L=h(),he=d(L);nt(he,()=>e.toast.cancel,(Ie,ve)=>{ve(Ie,{})}),s(_,L)},fe=_=>{var L=h(),he=d(L);{var Ie=ve=>{var se=wa();se.__click=[ba,e,ce,N];var be=J(se,!0);W(se),me(Le=>{er(se,e.toast.cancelButtonStyle??o()),$e(se,1,Le),Bt(be,e.toast.cancel.label)},[()=>Qe(Ze(t(oe)?.cancelButton,e.toast?.classes?.cancelButton))]),s(ve,se)};S(he,ve=>{qt(e.toast.cancel)&&ve(Ie)},!0)}s(_,L)};S(T,_=>{typeof e.toast.cancel=="function"?_(V):_(fe,!1)})}s(R,v)};S(Re,R=>{e.toast.cancel&&R(ke)})}var Fe=I(Re,2);{var qe=R=>{var v=h(),T=d(v);{var V=_=>{var L=h(),he=d(L);nt(he,()=>e.toast.action,(Ie,ve)=>{ve(Ie,{})}),s(_,L)},fe=_=>{var L=h(),he=d(L);{var Ie=ve=>{var se=xa();se.__click=[pa,e,N];var be=J(se,!0);W(se),me(Le=>{er(se,e.toast.actionButtonStyle??a()),$e(se,1,Le),Bt(be,e.toast.action.label)},[()=>Qe(Ze(t(oe)?.actionButton,e.toast?.classes?.actionButton))]),s(ve,se)};S(he,ve=>{qt(e.toast.action)&&ve(Ie)},!0)}s(_,L)};S(T,_=>{typeof e.toast.action=="function"?_(V):_(fe,!1)})}s(R,v)};S(Fe,R=>{e.toast.action&&R(qe)})}me(R=>$e(j,1,R),[()=>Qe(Ze(t(oe)?.title,e.toast?.classes?.title))]),s(k,A)};S(Kt,k=>{e.toast.component?k(Yt):k(Gt,!1)})}W(E),Xr(E,k=>c(q,k),()=>t(q)),me((k,A,F,G)=>{$e(E,1,k),U(E,"data-rich-colors",e.toast.richColors??u()),U(E,"data-styled",!(e.toast.component||e.toast.unstyled||i())),U(E,"data-mounted",t(y)),U(E,"data-promise",A),U(E,"data-swiped",t(b)),U(E,"data-removed",t(x)),U(E,"data-visible",t(K)),U(E,"data-y-position",t(Me)[0]),U(E,"data-x-position",t(Me)[1]),U(E,"data-index",e.index),U(E,"data-front",t(ee)),U(E,"data-swiping",t(M)),U(E,"data-dismissable",t(ce)),U(E,"data-type",t(w)),U(E,"data-invert",t(rt)),U(E,"data-swipe-out",t(D)),U(E,"data-swipe-direction",t(z)),U(E,"data-expanded",F),Dt=er(E,`${e.style} ${e.toast.style}`,Dt,G)},[()=>Qe(Ze(e.class,t(Te),t(oe)?.toast,e.toast?.classes?.toast,t(oe)?.[t(w)],e.toast?.classes?.[t(w)])),()=>!!e.toast.promise,()=>!!(e.expanded||e.expandByDefault&&t(y)),()=>({"--index":e.index,"--toasts-before":e.index,"--z-index":we.toasts.length-e.index,"--offset":`${t(x)?t(C):t(f)}px`,"--initial-height":e.expandByDefault?"auto":`${t(le)}px`})]),wn("dragend",E,He),s(n,E),$()}pn(["pointermove","pointerup","pointerdown","click"]);var Ia=Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');function Pa(n){var e=Ia();s(n,e)}var Ma=Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');function Ca(n){var e=Ma();s(n,e)}var Ea=Ct('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');function Aa(n){var e=Ea();s(n,e)}var Da=Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');function Ba(n){var e=Da();s(n,e)}var Na=Ct('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');function Ra(n){var e=Na();s(n,e)}const La=3,un="24px",dn="16px",Oa=4e3,za=356,Ha=14,ar="dark",Lt="light";function Fa(n,e){const r={};return[n,e].forEach((o,a)=>{const l=a===1,i=l?"--mobile-offset":"--offset",u=l?dn:un;function g(y){["top","right","bottom","left"].forEach(x=>{r[`${i}-${x}`]=typeof y=="number"?`${y}px`:y})}typeof o=="number"||typeof o=="string"?g(o):typeof o=="object"?["top","right","bottom","left"].forEach(y=>{const x=o[y];x===void 0?r[`${i}-${y}`]=u:r[`${i}-${y}`]=typeof x=="number"?`${x}px`:x}):g(u)}),r}var qa=P("<ol></ol>"),ja=P('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-nbs0zk"><!></section>');function Va(n,e){Q(e,!0);function r(f){return f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ar:Lt}let o=p(e,"invert",3,!1),a=p(e,"position",3,"bottom-right"),l=p(e,"hotkey",19,()=>["altKey","KeyT"]),i=p(e,"expand",3,!1),u=p(e,"closeButton",3,!1),g=p(e,"offset",3,un),y=p(e,"mobileOffset",3,dn),x=p(e,"theme",3,"light"),M=p(e,"richColors",3,!1),D=p(e,"duration",3,Oa),b=p(e,"visibleToasts",3,La),C=p(e,"toastOptions",19,()=>({})),le=p(e,"dir",7,"auto"),O=p(e,"gap",3,Ha),q=p(e,"containerAriaLabel",3,"Notifications"),B=p(e,"closeButtonAriaLabel",3,"Close toast"),z=De(e,["$$slots","$$events","$$legacy","invert","position","hotkey","expand","closeButton","offset","mobileOffset","theme","richColors","duration","visibleToasts","toastOptions","dir","gap","loadingIcon","successIcon","errorIcon","warningIcon","closeIcon","infoIcon","containerAriaLabel","class","closeButtonAriaLabel","onblur","onfocus","onmouseenter","onmousemove","onmouseleave","ondragend","onpointerdown","onpointerup"]);function ee(){if(le()!=="auto")return le();if(typeof window>"u"||typeof document>"u")return"ltr";const f=document.documentElement.getAttribute("dir");return f==="auto"||!f?(Oe(()=>le(window.getComputedStyle(document.documentElement).direction??"ltr")),le()):(Oe(()=>le(f)),f)}const K=m(()=>Array.from(new Set([a(),...we.toasts.filter(f=>f.position).map(f=>f.position)].filter(Boolean))));let w=Z(!1),ce=Z(!1),Te=Z(vt(r(x()))),ge=Z(void 0),ue=Z(null),Ae=Z(!1);const ze=m(()=>l().join("+").replace(/Key/g,"").replace(/Digit/g,""));Je(()=>{we.toasts.length<=1&&c(w,!1)}),Je(()=>{const f=we.toasts.filter(N=>N.dismiss&&!N.delete);if(f.length>0){const N=we.toasts.map(H=>f.find(ne=>ne.id===H.id)?{...H,delete:!0}:H);we.toasts=N}}),Je(()=>()=>{t(ge)&&t(ue)&&(t(ue).focus({preventScroll:!0}),c(ue,null),c(Ae,!1))}),Vt(()=>(we.reset(),et(document,"keydown",N=>{l().every(Y=>N[Y]||N.code===Y)&&(c(w,!0),t(ge)?.focus()),N.code==="Escape"&&(document.activeElement===t(ge)||t(ge)?.contains(document.activeElement))&&c(w,!1)}))),Je(()=>{if(x()!=="system"&&c(Te,x()),typeof window<"u"){x()==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?c(Te,ar):c(Te,Lt));const f=window.matchMedia("(prefers-color-scheme: dark)"),N=({matches:H})=>{c(Te,H?ar:Lt,!0)};"addEventListener"in f?f.addEventListener("change",N):f.addListener(N)}});const _e=f=>{e.onblur?.(f),t(Ae)&&!f.currentTarget.contains(f.relatedTarget)&&(c(Ae,!1),t(ue)&&(t(ue).focus({preventScroll:!0}),c(ue,null)))},Me=f=>{e.onfocus?.(f),!(f.target instanceof HTMLElement&&f.target.dataset.dismissable==="false")&&(t(Ae)||(c(Ae,!0),c(ue,f.relatedTarget,!0)))},Xe=f=>{e.onpointerdown?.(f),!(f.target instanceof HTMLElement&&f.target.dataset.dismissable==="false")&&c(ce,!0)},st=f=>{e.onmouseenter?.(f),c(w,!0)},rt=f=>{e.onmouseleave?.(f),t(ce)||c(w,!1)},Ue=f=>{e.onmousemove?.(f),c(w,!0)},oe=f=>{e.ondragend?.(f),c(w,!1)},Be=f=>{e.onpointerup?.(f),c(ce,!1)};sa.set(new Nn);var Ce=ja();U(Ce,"tabindex",-1);var pe=J(Ce);{var We=f=>{var N=h(),H=d(N);ir(H,18,()=>t(K),Y=>Y,(Y,ne,X,Ne)=>{const ae=m(()=>{const[Se,E]=ne.split("-");return{y:Se,x:E}}),xe=m(()=>Fa(g(),y()));var He=qa();Yr(He,(Se,E)=>({tabindex:-1,dir:Se,class:e.class,"data-sonner-toaster":!0,"data-sonner-theme":t(Te),"data-y-position":t(ae).y,"data-x-position":t(ae).x,style:e.style,onblur:_e,onfocus:Me,onmouseenter:st,onmousemove:Ue,onmouseleave:rt,ondragend:oe,onpointerdown:Xe,onpointerup:Be,...z,[Rn]:E}),[ee,()=>({"--front-toast-height":`${we.heights[0]?.height}px`,"--width":`${za}px`,"--gap":`${O()}px`,"--offset-top":t(xe)["--offset-top"],"--offset-right":t(xe)["--offset-right"],"--offset-bottom":t(xe)["--offset-bottom"],"--offset-left":t(xe)["--offset-left"],"--mobile-offset-top":t(xe)["--mobile-offset-top"],"--mobile-offset-right":t(xe)["--mobile-offset-right"],"--mobile-offset-bottom":t(xe)["--mobile-offset-bottom"],"--mobile-offset-left":t(xe)["--mobile-offset-left"]})],void 0,"svelte-nbs0zk"),ir(He,23,()=>we.toasts.filter(Se=>!Se.position&&t(X)===0||Se.position===ne),Se=>Se.id,(Se,E,Dt,Ut)=>{{const Wt=Re=>{var ke=h(),Fe=d(ke);{var qe=v=>{var T=h(),V=d(T);re(V,()=>e.successIcon??ie),s(v,T)},R=v=>{var T=h(),V=d(T);{var fe=_=>{Pa(_)};S(V,_=>{e.successIcon!==null&&_(fe)},!0)}s(v,T)};S(Fe,v=>{e.successIcon?v(qe):v(R,!1)})}s(Re,ke)},Kt=Re=>{var ke=h(),Fe=d(ke);{var qe=v=>{var T=h(),V=d(T);re(V,()=>e.errorIcon??ie),s(v,T)},R=v=>{var T=h(),V=d(T);{var fe=_=>{Ca(_)};S(V,_=>{e.errorIcon!==null&&_(fe)},!0)}s(v,T)};S(Fe,v=>{e.errorIcon?v(qe):v(R,!1)})}s(Re,ke)},Yt=Re=>{var ke=h(),Fe=d(ke);{var qe=v=>{var T=h(),V=d(T);re(V,()=>e.warningIcon??ie),s(v,T)},R=v=>{var T=h(),V=d(T);{var fe=_=>{Aa(_)};S(V,_=>{e.warningIcon!==null&&_(fe)},!0)}s(v,T)};S(Fe,v=>{e.warningIcon?v(qe):v(R,!1)})}s(Re,ke)},Gt=Re=>{var ke=h(),Fe=d(ke);{var qe=v=>{var T=h(),V=d(T);re(V,()=>e.infoIcon??ie),s(v,T)},R=v=>{var T=h(),V=d(T);{var fe=_=>{Ba(_)};S(V,_=>{e.infoIcon!==null&&_(fe)},!0)}s(v,T)};S(Fe,v=>{e.infoIcon?v(qe):v(R,!1)})}s(Re,ke)},k=Re=>{var ke=h(),Fe=d(ke);{var qe=v=>{var T=h(),V=d(T);re(V,()=>e.closeIcon??ie),s(v,T)},R=v=>{var T=h(),V=d(T);{var fe=_=>{Ra(_)};S(V,_=>{e.closeIcon!==null&&_(fe)},!0)}s(v,T)};S(Fe,v=>{e.closeIcon?v(qe):v(R,!1)})}s(Re,ke)};let A=m(()=>C()?.duration??D()),F=m(()=>C()?.class??""),G=m(()=>C()?.descriptionClass||""),te=m(()=>C()?.style??""),j=m(()=>C().classes||{}),ye=m(()=>C().unstyled??!1),it=m(()=>C()?.cancelButtonStyle??""),mt=m(()=>C()?.actionButtonStyle??""),Jt=m(()=>C()?.closeButtonAriaLabel??B());Sa(Se,{get index(){return t(Dt)},get toast(){return t(E)},get defaultRichColors(){return M()},get duration(){return t(A)},get class(){return t(F)},get descriptionClass(){return t(G)},get invert(){return o()},get visibleToasts(){return b()},get closeButton(){return u()},get interacting(){return t(ce)},get position(){return ne},get style(){return t(te)},get classes(){return t(j)},get unstyled(){return t(ye)},get cancelButtonStyle(){return t(it)},get actionButtonStyle(){return t(mt)},get closeButtonAriaLabel(){return t(Jt)},get expandByDefault(){return i()},get expanded(){return t(w)},get loadingIcon(){return e.loadingIcon},successIcon:Wt,errorIcon:Kt,warningIcon:Yt,infoIcon:Gt,closeIcon:k,$$slots:{successIcon:!0,errorIcon:!0,warningIcon:!0,infoIcon:!0,closeIcon:!0}})}}),W(He),Xr(He,Se=>c(ge,Se),()=>t(ge)),me(()=>He.dir=He.dir),s(Y,He)}),s(f,N)};S(pe,f=>{we.toasts.length>0&&f(We)})}W(Ce),me(()=>U(Ce,"aria-label",`${q()??""} ${t(ze)??""}`)),s(n,Ce),$()}function Ua(n,e){Q(e,!0);let r=De(e,["$$slots","$$events","$$legacy"]);Va(n,Pe({get theme(){return gr.current},class:"toaster group",style:"--normal-bg: var(--color-popover); --normal-text: var(--color-popover-foreground); --normal-border: var(--color-border);"},()=>r)),$()}function Wa(n,e){Q(e,!0);/**
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
 */let r=De(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]];tt(n,Pe({name:"arrow-right-to-line"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Ka(n,e){Q(e,!0);/**
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
 */let r=De(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];tt(n,Pe({name:"book-open"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Ya(n,e){Q(e,!0);/**
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
 */let r=De(e,["$$slots","$$events","$$legacy"]);const o=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];tt(n,Pe({name:"calculator"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Ga(n,e){Q(e,!0);/**
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
 */let r=De(e,["$$slots","$$events","$$legacy"]);const o=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];tt(n,Pe({name:"clipboard"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Ja(n,e){Q(e,!0);/**
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
 */let r=De(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];tt(n,Pe({name:"cog"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Xa(n,e){Q(e,!0);/**
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
 */let r=De(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];tt(n,Pe({name:"download"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Za(n,e){Q(e,!0);/**
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
 */let r=De(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];tt(n,Pe({name:"github"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Qa(n,e){Q(e,!0);/**
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
 */let r=De(e,["$$slots","$$events","$$legacy"]);const o=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];tt(n,Pe({name:"info"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function $a(n,e){Q(e,!0);/**
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
 */let r=De(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 2v2"}],["path",{d:"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"}],["path",{d:"M16 12a4 4 0 0 0-4-4"}],["path",{d:"m19 5-1.256 1.256"}],["path",{d:"M20 12h2"}]];tt(n,Pe({name:"sun-moon"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}const es=Qn({component:"checkbox",parts:["root","group","group-label","input"]}),ts=new Zr("Checkbox.Group"),fn=new Zr("Checkbox.Root");class _r{static create(e,r=null){return fn.set(new _r(e,r))}opts;group;#t=m(()=>this.group&&this.group.opts.name.current?this.group.opts.name.current:this.opts.name.current);get trueName(){return t(this.#t)}set trueName(e){c(this.#t,e)}#e=m(()=>this.group&&this.group.opts.required.current?!0:this.opts.required.current);get trueRequired(){return t(this.#e)}set trueRequired(e){c(this.#e,e)}#r=m(()=>this.group&&this.group.opts.disabled.current?!0:this.opts.disabled.current);get trueDisabled(){return t(this.#r)}set trueDisabled(e){c(this.#r,e)}#n=m(()=>this.group&&this.group.opts.readonly.current?!0:this.opts.readonly.current);get trueReadonly(){return t(this.#n)}set trueReadonly(e){c(this.#n,e)}attachment;constructor(e,r){this.opts=e,this.group=r,this.attachment=Gn(this.opts.ref),this.onkeydown=this.onkeydown.bind(this),this.onclick=this.onclick.bind(this),lr.pre([()=>Yn(this.group?.opts.value.current),()=>this.opts.value.current],([o,a])=>{!o||!a||(this.opts.checked.current=o.includes(a))}),lr.pre(()=>this.opts.checked.current,o=>{this.group&&(o?this.group?.addValue(this.opts.value.current):this.group?.removeValue(this.opts.value.current))})}onkeydown(e){if(!(this.trueDisabled||this.trueReadonly)){if(e.key===Jn){e.preventDefault(),this.opts.type.current==="submit"&&e.currentTarget.closest("form")?.requestSubmit();return}e.key===Xn&&(e.preventDefault(),this.#o())}}#o(){this.opts.indeterminate.current?(this.opts.indeterminate.current=!1,this.opts.checked.current=!0):this.opts.checked.current=!this.opts.checked.current}onclick(e){if(!(this.trueDisabled||this.trueReadonly)){if(this.opts.type.current==="submit"){this.#o();return}e.preventDefault(),this.#o()}}#a=m(()=>({checked:this.opts.checked.current,indeterminate:this.opts.indeterminate.current}));get snippetProps(){return t(this.#a)}set snippetProps(e){c(this.#a,e)}#s=m(()=>({id:this.opts.id.current,role:"checkbox",type:this.opts.type.current,disabled:this.trueDisabled,"aria-checked":Zn(this.opts.checked.current,this.opts.indeterminate.current),"aria-required":Or(this.trueRequired),"aria-readonly":Or(this.trueReadonly),"data-disabled":Lr(this.trueDisabled),"data-readonly":Lr(this.trueReadonly),"data-state":rs(this.opts.checked.current,this.opts.indeterminate.current),[es.root]:"",onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment}));get props(){return t(this.#s)}set props(e){c(this.#s,e)}}class yr{static create(){return new yr(fn.get())}root;#t=m(()=>this.root.group?!!(this.root.opts.value.current!==void 0&&this.root.group.opts.value.current.includes(this.root.opts.value.current)):this.root.opts.checked.current);get trueChecked(){return t(this.#t)}set trueChecked(e){c(this.#t,e)}#e=m(()=>!!this.root.trueName);get shouldRender(){return t(this.#e)}set shouldRender(e){c(this.#e,e)}constructor(e){this.root=e,this.onfocus=this.onfocus.bind(this)}onfocus(e){$n(this.root.opts.ref.current)&&this.root.opts.ref.current.focus()}#r=m(()=>({type:"checkbox",checked:this.root.opts.checked.current===!0,disabled:this.root.trueDisabled,required:this.root.trueRequired,name:this.root.trueName,value:this.root.opts.value.current,readonly:this.root.trueReadonly,onfocus:this.onfocus}));get props(){return t(this.#r)}set props(e){c(this.#r,e)}}function rs(n,e){return e?"indeterminate":n?"checked":"unchecked"}function ns(n,e){Q(e,!1);const r=yr.create();Et();var o=h(),a=d(o);{var l=i=>{ro(i,Pe(()=>r.props))};S(a,i=>{r.shouldRender&&i(l)})}s(n,o),$()}var os=P("<button><!></button>"),as=P("<!> <!>",1);function ss(n,e){const r=xn();Q(e,!0);let o=p(e,"checked",15,!1),a=p(e,"ref",15,null),l=p(e,"disabled",3,!1),i=p(e,"required",3,!1),u=p(e,"name",3,void 0),g=p(e,"value",3,"on"),y=p(e,"id",19,()=>eo(r)),x=p(e,"indeterminate",15,!1),M=p(e,"type",3,"button"),D=De(e,["$$slots","$$events","$$legacy","checked","ref","onCheckedChange","children","disabled","required","name","value","id","indeterminate","onIndeterminateChange","child","type","readonly"]);const b=ts.getOr(null);b&&g()&&(b.opts.value.current.includes(g())?o(!0):o(!1)),lr.pre(()=>g(),()=>{b&&g()&&(b.opts.value.current.includes(g())?o(!0):o(!1))});const C=_r.create({checked:Ke(()=>o(),K=>{o(K),e.onCheckedChange?.(K)}),disabled:Ke(()=>l()??!1),required:Ke(()=>i()),name:Ke(()=>u()),value:Ke(()=>g()),id:Ke(()=>y()),ref:Ke(()=>a(),K=>a(K)),indeterminate:Ke(()=>x(),K=>{x(K),e.onIndeterminateChange?.(K)}),type:Ke(()=>M()),readonly:Ke(()=>!!e.readonly)},b),le=m(()=>to({...D},C.props));var O=as(),q=d(O);{var B=K=>{var w=h(),ce=d(w);{let Te=m(()=>({props:t(le),...C.snippetProps}));re(ce,()=>e.child,()=>t(Te))}s(K,w)},z=K=>{var w=os();Yr(w,()=>({...t(le)}));var ce=J(w);re(ce,()=>e.children??ie,()=>C.snippetProps),W(w),s(K,w)};S(q,K=>{e.child?K(B):K(z,!1)})}var ee=I(q,2);ns(ee,{}),s(n,O),$()}var is=P('<div data-slot="checkbox-indicator" class="text-current transition-none"><!></div>');function ls(n,e){Q(e,!0);let r=p(e,"ref",15,null),o=p(e,"checked",15,!1),a=p(e,"indeterminate",15,!1),l=De(e,["$$slots","$$events","$$legacy","ref","checked","indeterminate","class"]);var i=h(),u=d(i);{const g=(x,M)=>{let D=()=>M?.().checked,b=()=>M?.().indeterminate;var C=is(),le=J(C);{var O=B=>{no(B,{class:"size-3.5"})},q=B=>{var z=h(),ee=d(z);{var K=w=>{oo(w,{class:"size-3.5"})};S(ee,w=>{b()&&w(K)},!0)}s(B,z)};S(le,B=>{D()?B(O):B(q,!1)})}W(C),s(x,C)};let y=m(()=>Ln("border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e.class));nt(u,()=>ss,(x,M)=>{M(x,Pe({"data-slot":"checkbox",get class(){return t(y)}},()=>l,{get ref(){return r()},set ref(D){r(D)},get checked(){return o()},set checked(D){o(D)},get indeterminate(){return a()},set indeterminate(D){a(D)},children:g,$$slots:{default:!0}}))})}s(n,i),$()}var cs=P("<!> <!>",1),us=P("Interval <!>",1),ds=P("<!> <!>",1),fs=P("<!> <!>",1),hs=P("<!> <!>",1),vs=P("<!> <!>",1),ms=P("<!> <!> <!> <!> <!>",1),gs=P("<!> <!>",1),_s=P('<div class="flex flex-row gap-2"><!> <!> <!></div>'),ys=P("<!> <!>",1),bs=P("<div><!> <!></div>");function ws(n,e){Q(e,!1);let r=ot(!1),o=ot(Br),a=ot(kt),l,i=null,u=ot(!1);function g(O){const q=[["rpcs",Pt],["callAbis",Mr],["txAbis",Pr],["testKeys",Ir],["filterAddresses",tr]];for(const[B,z]of q){const ee=O[B];ee&&z.set(ee)}}function y(){if(!t(o)||t(o)<rr){St.warning(`invalid depth: depth must be at least ${rr}`);return}if(!t(a)||t(a)<kt){St.warning(`invalid interval: interval must be at least ${kt}`);return}Er.set(t(o)),Ar.set(t(a)),Dr.set(t(u)),l&&g(l),c(r,!1),St.info("successfully saved")}function x(O){if(i=O.target.files?.[0]??null,i){const B=new FileReader;B.onload=z=>{Cr(()=>{const ee=z.target?.result;if(typeof ee=="string")l=JSON.parse(ee);else throw new Error("invalid file content")})},B.readAsText(i)}}function M(){const O={rpcs:Pt.get(),callAbis:Mr.get(),txAbis:Pr.get(),testKeys:Ir.get(),filterAddresses:tr.get()};Cr(()=>{const q=JSON.stringify(O,null,2),B=new Blob([q],{type:"application/json"}),z=URL.createObjectURL(B),ee=document.createElement("a");ee.href=z,ee.download=`env_${Date.now()}.json`,ee.click(),URL.revokeObjectURL(z)})}function D(O){return On(O.trim())}Wr(()=>(t(r),Sr),()=>{t(r)&&(c(o,Er.get()),c(a,Ar.get()),c(u,Dr.get()))}),Kr(),Et();var b=bs(),C=J(b);Ve(C,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{c(r,!0)},children:(O,q)=>{Ja(O,{})},$$slots:{default:!0}});var le=I(C,2);Qr(le,{get open(){return t(r)},set open(O){c(r,O)},children:(O,q)=>{$r(O,{children:(B,z)=>{var ee=ys(),K=d(ee);en(K,{children:(ce,Te)=>{var ge=gs(),ue=d(ge);tn(ue,{children:(ze,_e)=>{Ge();var Me=je("Setting");s(ze,Me)},$$slots:{default:!0}});var Ae=I(ue,2);rn(Ae,{children:(ze,_e)=>{Gr(ze,{children:(Me,Xe)=>{Jr(Me,{children:(st,rt)=>{var Ue=ms(),oe=d(Ue);lt(oe,{children:(f,N)=>{var H=cs(),Y=d(H);Ee(Y,{children:(X,Ne)=>{Ge();var ae=je("Depth");s(X,ae)},$$slots:{default:!0}});var ne=I(Y,2);Ee(ne,{children:(X,Ne)=>{{let ae=sr(()=>(xt(Rt),Oe(()=>Br.toString())));It(X,{type:"number",get min(){return xt(Rt),Oe(()=>rr)},get placeholder(){return t(ae)},get value(){return t(o)},set value(xe){c(o,xe)},$$legacy:!0})}},$$slots:{default:!0}}),s(f,H)},$$slots:{default:!0}});var Be=I(oe,2);lt(Be,{children:(f,N)=>{var H=ds(),Y=d(H);Ee(Y,{children:(X,Ne)=>{Ge();var ae=us(),xe=I(d(ae));Ve(xe,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{St.info("effective only for http/https rpc endpoints",{class:"whitespace-pre-line"})},children:(He,Se)=>{Qa(He,{})},$$slots:{default:!0}}),s(X,ae)},$$slots:{default:!0}});var ne=I(Y,2);Ee(ne,{children:(X,Ne)=>{{let ae=sr(()=>(xt(Rt),Oe(()=>`${kt.toString()} ms`)));It(X,{type:"number",get min(){return xt(Rt),Oe(()=>kt)},get placeholder(){return t(ae)},get value(){return t(a)},set value(xe){c(a,xe)},$$legacy:!0})}},$$slots:{default:!0}}),s(f,H)},$$slots:{default:!0}});var Ce=I(Be,2);lt(Ce,{children:(f,N)=>{var H=fs(),Y=d(H);Ee(Y,{children:(X,Ne)=>{Ge();var ae=je("Metrics");s(X,ae)},$$slots:{default:!0}});var ne=I(Y,2);Ee(ne,{children:(X,Ne)=>{ls(X,{get checked(){return t(u)},set checked(ae){c(u,ae)},$$legacy:!0})},$$slots:{default:!0}}),s(f,H)},$$slots:{default:!0}});var pe=I(Ce,2);lt(pe,{children:(f,N)=>{var H=hs(),Y=d(H);Ee(Y,{children:(X,Ne)=>{Ge();var ae=je("Filter Addresses");s(X,ae)},$$slots:{default:!0}});var ne=I(Y,2);Ee(ne,{children:(X,Ne)=>{ao(X,{name:"Filter Address",get store(){return xt(Sr),Oe(()=>tr)},validate:D})},$$slots:{default:!0}}),s(f,H)},$$slots:{default:!0}});var We=I(pe,2);lt(We,{children:(f,N)=>{var H=vs(),Y=d(H);Ee(Y,{children:(X,Ne)=>{Ge();var ae=je("Environment");s(X,ae)},$$slots:{default:!0}});var ne=I(Y,2);Ee(ne,{children:(X,Ne)=>{It(X,{type:"file",class:"cursor-pointer",onchange:x})},$$slots:{default:!0}}),s(f,H)},$$slots:{default:!0}}),s(st,Ue)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(ce,ge)},$$slots:{default:!0}});var w=I(K,2);nn(w,{children:(ce,Te)=>{var ge=_s(),ue=J(ge);Ve(ue,{variant:"outline",class:"cursor-pointer",onclick:M,children:(_e,Me)=>{Xa(_e,{})},$$slots:{default:!0}});var Ae=I(ue,2);Ve(Ae,{class:"cursor-pointer",size:"icon",variant:"outline",get onclick(){return jo},children:(_e,Me)=>{$a(_e,{})},$$slots:{default:!0}});var ze=I(Ae,2);Ve(ze,{class:"cursor-pointer",variant:"outline",onclick:y,children:(_e,Me)=>{Ge();var Xe=je("Save");s(_e,Xe)},$$slots:{default:!0}}),W(ge),s(ce,ge)},$$slots:{default:!0}}),s(B,ee)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),W(b),s(n,b),$()}var ps=P("<!> <!>",1),xs=P('<div class="flex gap-2"><!> <!> <!></div>'),ks=P("<!> <!>",1),Ts=P("<!> <!>",1),Ss=P("<!> <!>",1),Is=P("<!> <!>",1),Ps=P("<div><!> <!></div>");function Ms(n,e){Q(e,!1);let r=ot(!1),o=ot("0"),a=ot("0x00");function l(D){const b=D.currentTarget.value;b!==""&&/^\d+$/.test(b)&&(c(o,b),c(a,Nr(b)))}function i(D){let b=D.currentTarget.value.trim();b===""||b==="0x"||(b.startsWith("0x")&&(b=b.slice(2)),/^[0-9a-fA-F]+$/.test(b)&&(c(a,`0x${b}`),c(o,zn(t(a)).toString())))}function u(){t(o).length!==0&&c(a,Nr(t(o),32))}async function g(){t(a).length!==0&&(await navigator.clipboard.writeText(t(a)),St.info(`copied hex: ${t(a)}`))}Wr(()=>t(r),()=>{t(r)&&(c(o,"0"),c(a,"0x00"))}),Kr(),Et();var y=Ps(),x=J(y);Ve(x,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{c(r,!0)},children:(D,b)=>{Ya(D,{})},$$slots:{default:!0}});var M=I(x,2);Qr(M,{get open(){return t(r)},set open(D){c(r,D)},children:(D,b)=>{$r(D,{children:(C,le)=>{var O=Is(),q=d(O);en(q,{children:(z,ee)=>{var K=Ss(),w=d(K);tn(w,{children:(Te,ge)=>{Ge();var ue=je("Hex Converter");s(Te,ue)},$$slots:{default:!0}});var ce=I(w,2);rn(ce,{children:(Te,ge)=>{Gr(Te,{children:(ue,Ae)=>{Jr(ue,{children:(ze,_e)=>{var Me=Ts(),Xe=d(Me);lt(Xe,{children:(rt,Ue)=>{var oe=ps(),Be=d(oe);Ee(Be,{children:(pe,We)=>{Ge();var f=je("Decimal");s(pe,f)},$$slots:{default:!0}});var Ce=I(Be,2);Ee(Ce,{children:(pe,We)=>{It(pe,{placeholder:"0",get value(){return t(o)},oninput:l})},$$slots:{default:!0}}),s(rt,oe)},$$slots:{default:!0}});var st=I(Xe,2);lt(st,{children:(rt,Ue)=>{var oe=ks(),Be=d(oe);Ee(Be,{children:(pe,We)=>{Ge();var f=je("Hex");s(pe,f)},$$slots:{default:!0}});var Ce=I(Be,2);Ee(Ce,{children:(pe,We)=>{var f=xs(),N=J(f);It(N,{placeholder:"0x00",get value(){return t(a)},oninput:i});var H=I(N,2);Ve(H,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:u,children:(ne,X)=>{Wa(ne,{})},$$slots:{default:!0}});var Y=I(H,2);Ve(Y,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:g,children:(ne,X)=>{Ga(ne,{})},$$slots:{default:!0}}),W(f),s(pe,f)},$$slots:{default:!0}}),s(rt,oe)},$$slots:{default:!0}}),s(ze,Me)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(z,K)},$$slots:{default:!0}});var B=I(q,2);nn(B,{}),s(C,O)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),W(y),s(n,y),$()}var Cs=P('<div class="flex w-full flex-row"><div class="ml-4 flex-1"><a class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">ETH UI</a></div> <div class="mr-4 flex flex-1 justify-end gap-2"><!> <!> <!></div></div>');function Es(n,e){Q(e,!1);let r=ot("idle");const o=Hn.subscribe(M=>{c(r,M)});Dn(o),Et();var a=Cs(),l=J(a),i=J(l);W(l);var u=I(l,2),g=J(u);Ve(g,{variant:"ghost",size:"icon",children:(M,D)=>{{let b=sr(()=>t(r)==="processing"?"animate-spin":"");so(M,{get class(){return t(b)}})}},$$slots:{default:!0}});var y=I(g,2);Ms(y,{});var x=I(y,2);ws(x,{}),W(u),W(a),me(M=>U(i,"href",M),[()=>Fn("/")]),s(n,a),$()}var As=P('<div class="grid w-full grid-cols-3 items-center"><div></div> <p class="text-center">© 2025 code0xff</p> <div class="mr-4 flex justify-end gap-2"><!> <!></div></div>');function Ds(n,e){Q(e,!1),Et();var r=As(),o=I(J(r),4),a=J(o);Ve(a,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(qn),children:(i,u)=>{Ka(i,{})},$$slots:{default:!0}});var l=I(a,2);Ve(l,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(jn),children:(i,u)=>{Za(i,{})},$$slots:{default:!0}}),W(o),W(r),s(n,r),$()}var Bs=P('<link rel="icon"/>'),Ns=P('<!> <!> <div class="flex h-screen flex-col overflow-hidden"><div class="my-4 shrink-0"><!></div> <div class="flex min-h-0 flex-1 flex-col"><!></div> <div class="my-4 shrink-0"><!></div></div>',1);function Js(n,e){Q(e,!0);async function r(){let b=Wn.url.searchParams.get("rpc"),C=Pt.get();b?(nr.set(b),[...C,...or].includes(b)||Pt.set([...C,b])):b=nr.get(),C=Pt.get(),(!b||b.trim().length===0||![...C,...or].includes(b))&&nr.set(or[0]),await Un(),Rr.set(!0)}Vt(async()=>{await Vn(r,!1,async()=>{Rr.set(!0)})});var o=Ns();Ur(b=>{var C=Bs();Bn.title="ETH UI",me(()=>U(C,"href",fo)),s(b,C)});var a=d(o);Ua(a,{position:"top-right"});var l=I(a,2);Zo(l,{});var i=I(l,2),u=J(i),g=J(u);Es(g,{}),W(u);var y=I(u,2),x=J(y);re(x,()=>e.children??ie),W(y);var M=I(y,2),D=J(M);Ds(D,{}),W(M),W(i),s(n,o),$()}export{Js as component,Ks as universal};
