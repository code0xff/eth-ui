import{e as wr,g as bn,b as jt,o as et,c as h,a as s,f as P,i as Ur,j as wn,d as pn,t as je,s as Dt,k as Ct,p as xn}from"../chunks/C-Gua_vV.js";import{t as me,h as pr,d as xr,a2 as kn,aX as Tn,N as kr,ak as In,aB as Sn,aO as Pn,aI as Mn,T as Cn,aC as Nt,x as Ye,z as Xe,u as Oe,ad as Q,i as t,k as c,a0 as vt,af as m,aW as hr,p as Z,f as d,a as $,s as S,o as Vt,c as X,r as W,aQ as En,aR as Tr,aS as An,n as ie,l as Wr,e as Kr,m as ot,q as Ge,j as sr,g as xt,aY as Bn}from"../chunks/D2l8O0Ot.js";import{l as U,m as ir,P as Ze,Q as $e,S as we,U as Qe,V as er,s as re,X as Dn,q as Yr,Y as Nn,I as tt,u as Rn,B as Ve,E as Ir,T as Gr,b as Xr,c as lt,d as Ee,a as St,J as It,Z as tr,M as Sr,L as Pr,z as Mr,_ as Pt,F as Cr,$ as rr,a0 as kt,a1 as Er,a2 as Ar,a3 as Br,a4 as Dr,C as Rt,a5 as Ln,a6 as Nr,a7 as On,a8 as zn,r as Hn,a9 as Fn,aa as qn,f as jn,i as Rr,ab as nr,ac as or,g as Vn}from"../chunks/DZZNKsgI.js";import{p as Un}from"../chunks/Byf2ZmUX.js";import{M as Wn,s as Kn}from"../chunks/BbO6Nkhl.js";import{i as I,p as x,b as Jr,s as Pe,r as Be}from"../chunks/C8aRbOnS.js";import{c as nt}from"../chunks/CHRJgWt6.js";import{i as Et}from"../chunks/Cx3GOipP.js";import{C as Qr,l as Yn,w as lr,p as Gn,S as Xn,m as Lr,q as Or,V as Jn,k as Qn,j as Zn,r as $n,a as Ke,u as eo}from"../chunks/Cj9dYbuA.js";import{H as to,C as ro,M as no,R as Zr,D as $r,a as en,b as tn,c as rn,E as oo,d as nn}from"../chunks/BabqIbN0.js";import{R as ao}from"../chunks/DAjD-Zvl.js";function so(n,e,r=!1,o=!1,a=!1){var l=n,i="";me(()=>{var u=kn;if(i===(i=e()??"")){pr&&xr();return}if(u.nodes_start!==null&&(Tn(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),i!==""){if(pr){kr.data;for(var g=xr(),y=g;g!==null&&(g.nodeType!==In||g.data!=="");)y=g,g=Sn(g);if(g===null)throw Pn(),Mn;wr(kr,y),l=Cn(g);return}var b=i+"";r?b=`<svg>${b}</svg>`:o&&(b=`<math>${b}</math>`);var E=bn(b);if((r||o)&&(E=Nt(E)),wr(Nt(E),E.lastChild),r||o)for(;Nt(E);)l.before(Nt(E));else l.before(E)}})}const io=!1,lo=!0,co="always",Ws=Object.freeze(Object.defineProperty({__proto__:null,prerender:lo,ssr:io,trailingSlash:co},Symbol.toStringTag,{value:"Module"})),uo=""+new URL("../assets/favicon.DDmz9QoX.ico",import.meta.url).href,on=typeof window<"u"?window:void 0;function fo(n){let e=n.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}let ho=class{#t;#e;constructor(e={}){const{window:r=on,document:o=r?.document}=e;r!==void 0&&(this.#t=o,this.#e=jt(a=>{const l=et(r,"focusin",a),i=et(r,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?fo(this.#t):null}};new ho;function vo(n,e){switch(n){case"post":Xe(e);break;case"pre":Ye(e);break}}function an(n,e,r,o={}){const{lazy:a=!1}=o;let l=!a,i=Array.isArray(n)?[]:void 0;vo(e,()=>{const u=Array.isArray(n)?n.map(y=>y()):n();if(!l){l=!0,i=u;return}const g=Oe(()=>r(u,i));return i=u,g})}function vr(n,e,r){an(n,"post",e,r)}function mo(n,e,r){an(n,"pre",e,r)}vr.pre=mo;function go(n,e){switch(n){case"local":return e.localStorage;case"session":return e.sessionStorage}}class sn{#t;#e;#r;#n;#o;#a=Q(0);constructor(e,r,o={}){const{storage:a="local",serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:i=!0,window:u=on}=o;if(this.#t=r,this.#e=e,this.#r=l,u===void 0)return;const g=go(a,u);this.#n=g;const y=g.getItem(e);y!==null?this.#t=this.#i(y):this.#l(r),i&&a==="local"&&(this.#o=jt(()=>et(u,"storage",this.#s)))}get current(){this.#o?.(),t(this.#a);const e=this.#i(this.#n?.getItem(this.#e))??this.#t,r=new WeakMap,o=a=>{if(a===null||a?.constructor.name==="Date"||typeof a!="object")return a;let l=r.get(a);return l||(l=new Proxy(a,{get:(i,u)=>(t(this.#a),o(Reflect.get(i,u))),set:(i,u,g)=>(c(this.#a,t(this.#a)+1),Reflect.set(i,u,g),this.#l(e),!0)}),r.set(a,l)),l};return o(e)}set current(e){this.#l(e),c(this.#a,t(this.#a)+1)}#s=e=>{e.key!==this.#e||e.newValue===null||(this.#t=this.#i(e.newValue),c(this.#a,t(this.#a)+1))};#i(e){try{return this.#r.deserialize(e)}catch(r){console.error(`Error when parsing "${e}" from persisted store "${this.#e}"`,r);return}}#l(e){try{e!=null&&this.#n?.setItem(this.#e,this.#r.serialize(e))}catch(r){console.error(`Error when writing value from persisted store "${this.#e}" to ${this.#n}`,r)}}}function zr(n){return n.filter(e=>e.length>0)}const ln={getItem:n=>null,setItem:(n,e)=>{}},At=typeof document<"u";function _o(n){return typeof n=="function"}function yo(n){return n!==null&&typeof n=="object"}const Mt=Symbol("box"),mr=Symbol("is-writable");function bo(n){return yo(n)&&Mt in n}function wo(n){return de.isBox(n)&&mr in n}function de(n){let e=Q(vt(n));return{[Mt]:!0,[mr]:!0,get current(){return t(e)},set current(r){c(e,r,!0)}}}function po(n,e){const r=m(n);return e?{[Mt]:!0,[mr]:!0,get current(){return t(r)},set current(o){e(o)}}:{[Mt]:!0,get current(){return n()}}}function xo(n){return de.isBox(n)?n:_o(n)?de.with(n):de(n)}function ko(n){return Object.entries(n).reduce((e,[r,o])=>de.isBox(o)?(de.isWritableBox(o)?Object.defineProperty(e,r,{get(){return o.current},set(a){o.current=a}}):Object.defineProperty(e,r,{get(){return o.current}}),e):Object.assign(e,{[r]:o}),{})}function To(n){return de.isWritableBox(n)?{[Mt]:!0,get current(){return n.current}}:n}de.from=xo;de.with=po;de.flatten=ko;de.readonly=To;de.isBox=bo;de.isWritableBox=wo;function Io(n,e){const r=RegExp(n,"g");return o=>{if(typeof o!="string")throw new TypeError(`expected an argument of type string, but got ${typeof o}`);return o.match(r)?o.replace(r,e):o}}const So=Io(/[A-Z]/,n=>`-${n.toLowerCase()}`);function Po(n){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError(`expected an argument of type object, but got ${typeof n}`);return Object.keys(n).map(e=>`${So(e)}: ${n[e]};`).join(`
`)}function Mo(n={}){return Po(n).replace(`
`," ")}const Co={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",transform:"translateX(-100%)"};Mo(Co);const Eo=typeof window<"u"?window:void 0;function Ao(n){let e=n.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}let Bo=class{#t;#e;constructor(e={}){const{window:r=Eo,document:o=r?.document}=e;r!==void 0&&(this.#t=o,this.#e=jt(a=>{const l=et(r,"focusin",a),i=et(r,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?Ao(this.#t):null}};new Bo;const ct=de("mode-watcher-mode"),ut=de("mode-watcher-theme"),Do=["dark","light","system"];function cr(n){return typeof n!="string"?!1:Do.includes(n)}class No{#t="system";#e=At?localStorage:ln;#r=this.#e.getItem(ct.current);#n=cr(this.#r)?this.#r:this.#t;#o=Q(vt(this.#a()));#a(e=this.#n){return new sn(ct.current,e,{serializer:{serialize:r=>r,deserialize:r=>cr(r)?r:this.#t}})}constructor(){hr(()=>vr.pre(()=>ct.current,(e,r)=>{const o=t(this.#o).current;c(this.#o,this.#a(o),!0),r&&localStorage.removeItem(r)}))}get current(){return t(this.#o).current}set current(e){t(this.#o).current=e}}class Ro{#t=void 0;#e=!0;#r=Q(vt(this.#t));#n=typeof window<"u"&&typeof window.matchMedia=="function"?new Wn("prefers-color-scheme: light"):{current:!1};query(){At&&c(this.#r,this.#n.current?"light":"dark",!0)}tracking(e){this.#e=e}constructor(){hr(()=>{Ye(()=>{this.#e&&this.query()})}),this.query=this.query.bind(this),this.tracking=this.tracking.bind(this)}get current(){return t(this.#r)}}const zt=new No,ur=new Ro;class Lo{#t=At?localStorage:ln;#e=this.#t.getItem(ut.current);#r=this.#e===null||this.#e===void 0?"":this.#e;#n=Q(vt(this.#o()));#o(e=this.#r){return new sn(ut.current,e,{serializer:{serialize:r=>typeof r!="string"?"":r,deserialize:r=>r}})}constructor(){hr(()=>vr.pre(()=>ut.current,(e,r)=>{const o=t(this.#n).current;c(this.#n,this.#o(o),!0),r&&localStorage.removeItem(r)}))}get current(){return t(this.#n).current}set current(e){t(this.#n).current=e}}const Ot=new Lo;let Hr,Fr,qr=!1,Tt=null;function Oo(){return Tt||(Tt=document.createElement("style"),Tt.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)),Tt)}function cn(n,e=!1){if(typeof document>"u")return;if(!qr){qr=!0,n();return}if(typeof window<"u"&&window.__vitest_worker__){n();return}clearTimeout(Hr),clearTimeout(Fr);const o=Oo(),a=()=>document.head.appendChild(o),l=()=>{o.parentNode&&document.head.removeChild(o)};function i(){n(),window.requestAnimationFrame(l)}if(typeof window.requestAnimationFrame<"u"){a(),e?i():window.requestAnimationFrame(()=>{i()});return}a(),Hr=window.setTimeout(()=>{n(),Fr=window.setTimeout(l,16)},16)}const at=de(void 0),Ht=de(!0),Ft=de(!1),dr=de([]),fr=de([]);function zo(){const n=m(()=>{if(!At)return;const e=zt.current==="system"?ur.current:zt.current,r=zr(dr.current),o=zr(fr.current);function a(){const l=document.documentElement,i=document.querySelector('meta[name="theme-color"]');e==="light"?(r.length&&l.classList.remove(...r),o.length&&l.classList.add(...o),l.style.colorScheme="light",i&&at.current&&i.setAttribute("content",at.current.light)):(o.length&&l.classList.remove(...o),r.length&&l.classList.add(...r),l.style.colorScheme="dark",i&&at.current&&i.setAttribute("content",at.current.dark))}return Ht.current?cn(a,Ft.current):a(),e});return{get current(){return t(n)}}}function Ho(){const n=m(()=>{if(Ot.current,!At)return;function e(){document.documentElement.setAttribute("data-theme",Ot.current)}return Ht.current?cn(e,Oe(()=>Ft.current)):e(),Ot.current});return{get current(){return t(n)}}}const gr=zo(),Fo=Ho();function qo(){zt.current=gr.current==="dark"?"light":"dark"}function jo(n){zt.current=n}function Vo(n){Ot.current=n}function Uo({defaultMode:n="system",themeColors:e,darkClassNames:r=["dark"],lightClassNames:o=[],defaultTheme:a="",modeStorageKey:l="mode-watcher-mode",themeStorageKey:i="mode-watcher-theme"}){const u=document.documentElement,g=localStorage.getItem(l)??n,y=localStorage.getItem(i)??a,b=g==="light"||g==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(b?(r.length&&u.classList.remove(...r.filter(Boolean)),o.length&&u.classList.add(...o.filter(Boolean))):(o.length&&u.classList.remove(...o.filter(Boolean)),r.length&&u.classList.add(...r.filter(Boolean))),u.style.colorScheme=b?"light":"dark",e){const E=document.querySelector('meta[name="theme-color"]');E&&E.setAttribute("content",g==="light"?e.light:e.dark)}y&&(u.setAttribute("data-theme",y),localStorage.setItem(i,y)),localStorage.setItem(l,g)}var Wo=P('<meta name="theme-color"/>');function Ko(n,e){Z(e,!0);var r=h(),o=d(r);{var a=l=>{var i=Wo();me(()=>U(i,"content",e.themeColors.dark)),s(l,i)};I(o,l=>{e.themeColors&&l(a)})}s(n,r),$()}var Yo=P('<meta name="theme-color"/>'),Go=P("<!> <!>",1);function Xo(n,e){Z(e,!0);let r=x(e,"trueNonce",3,"");Ur(o=>{var a=Go(),l=d(a);{var i=g=>{var y=Yo();me(()=>U(y,"content",e.themeColors.dark)),s(g,y)};I(l,g=>{e.themeColors&&g(i)})}var u=S(l,2);so(u,()=>`<script${r()?` nonce=${r()}`:""}>(`+Uo.toString()+")("+JSON.stringify(e.initConfig)+");<\/script>"),s(o,a)}),$()}function Jo(n,e){Z(e,!0);let r=x(e,"track",3,!0),o=x(e,"defaultMode",3,"system"),a=x(e,"disableTransitions",3,!0),l=x(e,"darkClassNames",19,()=>["dark"]),i=x(e,"lightClassNames",19,()=>[]),u=x(e,"defaultTheme",3,""),g=x(e,"nonce",3,""),y=x(e,"themeStorageKey",3,"mode-watcher-theme"),b=x(e,"modeStorageKey",3,"mode-watcher-mode"),E=x(e,"disableHeadScriptInjection",3,!1),A=x(e,"synchronousModeChanges",3,!1);ct.current=b(),ut.current=y(),dr.current=l(),fr.current=i(),Ht.current=a(),at.current=e.themeColors,Ft.current=A(),Ye(()=>{Ft.current=A()}),Ye(()=>{Ht.current=a()}),Ye(()=>{at.current=e.themeColors}),Ye(()=>{dr.current=l()}),Ye(()=>{fr.current=i()}),Ye(()=>{ct.current=b()}),Ye(()=>{ut.current=y()}),Ye(()=>{gr.current,ct.current,ut.current,Fo.current}),Vt(()=>{ur.tracking(r()),ur.query();const z=localStorage.getItem(ct.current);jo(cr(z)?z:o());const ee=localStorage.getItem(ut.current);Vo(ee||u())});const w={defaultMode:o(),themeColors:e.themeColors,darkClassNames:l(),lightClassNames:i(),defaultTheme:u(),modeStorageKey:b(),themeStorageKey:y()},M=m(()=>typeof window>"u"?g():"");var le=h(),O=d(le);{var q=z=>{Ko(z,{get themeColors(){return at.current}})},D=z=>{Xo(z,{get trueNonce(){return t(M)},get initConfig(){return w},get themeColors(){return at.current}})};I(O,z=>{E()?z(q):z(D,!1)})}s(n,le),$()}const Qo=Array(12).fill(0);var Zo=P('<div class="sonner-loading-bar"></div>'),$o=P('<div><div class="sonner-spinner"></div></div>');function ea(n,e){Z(e,!0);var r=$o(),o=X(r);ir(o,23,()=>Qo,(a,l)=>`spinner-bar-${l}`,(a,l)=>{var i=Zo();s(a,i)}),W(o),W(r),me(a=>{$e(r,1,a),U(r,"data-visible",e.visible)},[()=>Ze(["sonner-loading-wrapper",e.class].filter(Boolean).join(" "))]),s(n,r),$()}const ta=typeof window<"u"?window:void 0;function ra(n){let e=n.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class na{#t;#e;constructor(e={}){const{window:r=ta,document:o=r?.document}=e;r!==void 0&&(this.#t=o,this.#e=jt(a=>{const l=et(r,"focusin",a),i=et(r,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?ra(this.#t):null}}new na;class oa{#t;#e;constructor(e){this.#t=e,this.#e=Symbol(e)}get key(){return this.#e}exists(){return En(this.#e)}get(){const e=Tr(this.#e);if(e===void 0)throw new Error(`Context "${this.#t}" not found`);return e}getOr(e){const r=Tr(this.#e);return r===void 0?e:r}set(e){return An(this.#e,e)}}const aa=new oa("<Toaster/>");function qt(n){return n.label!==void 0}function sa(){let n=Q(vt(typeof document<"u"?document.hidden:!1));return Xe(()=>et(document,"visibilitychange",()=>{c(n,document.hidden,!0)})),{get current(){return t(n)}}}const jr=4e3,ia=14,la=45,ca=200,ua=.05,da={toast:"",title:"",description:"",loader:"",closeButton:"",cancelButton:"",actionButton:"",action:"",warning:"",error:"",success:"",default:"",info:"",loading:""};function fa(n){const[e,r]=n.split("-"),o=[];return e&&o.push(e),r&&o.push(r),o}function Vr(n){return 1/(1.5+Math.abs(n)/20)}var ha=P("<div><!></div>"),va=(n,e,r,o,a)=>{t(e)||!t(r)||(o(),a.toast.onDismiss?.(a.toast))},ma=P('<button data-close-button=""><!></button>'),ga=P('<div data-icon=""><!> <!></div>'),_a=P('<div data-description=""><!></div>'),ya=(n,e,r,o)=>{qt(e.toast.cancel)&&t(r)&&(e.toast.cancel?.onClick?.(n),o())},ba=P('<button data-button="" data-cancel=""> </button>'),wa=(n,e,r)=>{qt(e.toast.action)&&(e.toast.action?.onClick(n),!n.defaultPrevented&&r())},pa=P('<button data-button=""> </button>'),xa=P('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>',1),ka=P('<li data-sonner-toast=""><!> <!></li>');function Ta(n,e){Z(e,!0);const r=k=>{var B=h(),F=d(B);{var G=j=>{var ye=ha(),it=X(ye);re(it,()=>e.loadingIcon),W(ye),me(mt=>{$e(ye,1,mt),U(ye,"data-visible",t(p)==="loading")},[()=>Ze(Qe(t(oe)?.loader,e.toast?.classes?.loader,"sonner-loader"))]),s(j,ye)},te=j=>{{let ye=m(()=>Qe(t(oe)?.loader,e.toast.classes?.loader)),it=m(()=>t(p)==="loading");ea(j,{get class(){return t(ye)},get visible(){return t(it)}})}};I(F,j=>{e.loadingIcon?j(G):j(te,!1)})}s(k,B)};let o=x(e,"cancelButtonStyle",3,""),a=x(e,"actionButtonStyle",3,""),l=x(e,"descriptionClass",3,""),i=x(e,"unstyled",3,!1),u=x(e,"defaultRichColors",3,!1);const g={...da};let y=Q(!1),b=Q(!1),E=Q(!1),A=Q(!1),w=Q(!1),M=Q(0),le=Q(0),O=e.toast.duration||e.duration||jr,q=Q(void 0),D=Q(null),z=Q(null);const ee=m(()=>e.index===0),K=m(()=>e.index+1<=e.visibleToasts),p=m(()=>e.toast.type),ce=m(()=>e.toast.dismissable!==!1),Te=m(()=>e.toast.class||""),ge=m(()=>e.toast.descriptionClass||""),ue=m(()=>we.heights.findIndex(k=>k.toastId===e.toast.id)||0),Ae=m(()=>e.toast.closeButton??e.closeButton),ze=m(()=>e.toast.duration??e.duration??jr);let _e=null;const Me=m(()=>e.position.split("-")),Je=m(()=>we.heights.reduce((k,B,F)=>F>=t(ue)?k:k+B.height,0)),st=sa(),rt=m(()=>e.toast.invert||e.invert),Ue=m(()=>t(p)==="loading"),oe=m(()=>({...g,...e.classes})),De=m(()=>e.toast.title),Ce=m(()=>e.toast.description);let pe=Q(0),We=Q(0);const f=m(()=>Math.round(t(ue)*ia+t(Je)));Xe(()=>{t(De),t(Ce);let k;e.expanded||e.expandByDefault?k=1:k=1-e.index*ua;const B=Oe(()=>t(q));if(B===void 0)return;B.style.setProperty("height","auto");const F=B.offsetHeight,G=B.getBoundingClientRect().height,te=Math.round(G/k+Number.EPSILON&100)/100;B.style.removeProperty("height");let j;Math.abs(te-F)<1?j=te:j=F,c(le,j,!0),Oe(()=>{we.setHeight({toastId:e.toast.id,height:j})})});function N(){c(b,!0),c(M,t(f),!0),we.removeHeight(e.toast.id),setTimeout(()=>{we.remove(e.toast.id)},ca)}let H;const Y=m(()=>e.toast.promise&&t(p)==="loading"||e.toast.duration===Number.POSITIVE_INFINITY);function ne(){c(pe,new Date().getTime(),!0),H=setTimeout(()=>{e.toast.onAutoClose?.(e.toast),N()},O)}function J(){if(t(We)<t(pe)){const k=new Date().getTime()-t(pe);O=O-k}c(We,new Date().getTime(),!0)}Xe(()=>{e.toast.updated&&(clearTimeout(H),O=t(ze),ne())}),Xe(()=>(t(Y)||(e.expanded||e.interacting||st.current?J():ne()),()=>clearTimeout(H))),Vt(()=>{c(y,!0);const k=t(q)?.getBoundingClientRect().height;return c(le,k,!0),we.setHeight({toastId:e.toast.id,height:k}),()=>{we.removeHeight(e.toast.id)}}),Xe(()=>{e.toast.delete&&Oe(()=>{N(),e.toast.onDismiss?.(e.toast)})});const Ne=k=>{if(t(Ue))return;c(M,t(f),!0);const B=k.target;B.setPointerCapture(k.pointerId),B.tagName!=="BUTTON"&&(c(E,!0),_e={x:k.clientX,y:k.clientY})},ae=()=>{if(t(A)||!t(ce))return;_e=null;const k=Number(t(q)?.style.getPropertyValue("--swipe-amount-x").replace("px","")||0),B=Number(t(q)?.style.getPropertyValue("--swipe-amount-y").replace("px","")||0),F=new Date().getTime()-0,G=t(D)==="x"?k:B,te=Math.abs(G)/F;if(Math.abs(G)>=la||te>.11){c(M,t(f),!0),e.toast.onDismiss?.(e.toast),t(D)==="x"?c(z,k>0?"right":"left",!0):c(z,B>0?"down":"up",!0),N(),c(A,!0);return}else t(q)?.style.setProperty("--swipe-amount-x","0px"),t(q)?.style.setProperty("--swipe-amount-y","0px");c(w,!1),c(E,!1),c(D,null)},xe=k=>{if(!_e||!t(ce)||(window.getSelection()?.toString().length??-1)>0)return;const F=k.clientY-_e.y,G=k.clientX-_e.x,te=e.swipeDirections??fa(e.position);!t(D)&&(Math.abs(G)>1||Math.abs(F)>1)&&c(D,Math.abs(G)>Math.abs(F)?"x":"y",!0);let j={x:0,y:0};if(t(D)==="y"){if(te.includes("top")||te.includes("bottom"))if(te.includes("top")&&F<0||te.includes("bottom")&&F>0)j.y=F;else{const ye=F*Vr(F);j.y=Math.abs(ye)<Math.abs(F)?ye:F}}else if(t(D)==="x"&&(te.includes("left")||te.includes("right")))if(te.includes("left")&&G<0||te.includes("right")&&G>0)j.x=G;else{const ye=G*Vr(G);j.x=Math.abs(ye)<Math.abs(G)?ye:G}(Math.abs(j.x)>0||Math.abs(j.y)>0)&&c(w,!0),t(q)?.style.setProperty("--swipe-amount-x",`${j.x}px`),t(q)?.style.setProperty("--swipe-amount-y",`${j.y}px`)},He=()=>{c(E,!1),c(D,null),_e=null},Ie=m(()=>e.toast.icon?e.toast.icon:t(p)==="success"?e.successIcon:t(p)==="error"?e.errorIcon:t(p)==="warning"?e.warningIcon:t(p)==="info"?e.infoIcon:t(p)==="loading"?e.loadingIcon:null);var C=ka();U(C,"tabindex",0);let Bt;C.__pointermove=xe,C.__pointerup=ae,C.__pointerdown=Ne;var Ut=X(C);{var Wt=k=>{var B=ma();B.__click=[va,Ue,ce,N,e];var F=X(B);re(F,()=>e.closeIcon??ie),W(B),me(G=>{U(B,"aria-label",e.closeButtonAriaLabel),U(B,"data-disabled",t(Ue)),$e(B,1,G)},[()=>Ze(Qe(t(oe)?.closeButton,e.toast?.classes?.closeButton))]),s(k,B)};I(Ut,k=>{t(Ae)&&!e.toast.component&&t(p)!=="loading"&&e.closeIcon!==null&&k(Wt)})}var Kt=S(Ut,2);{var Yt=k=>{const B=m(()=>e.toast.component);var F=h(),G=d(F);nt(G,()=>t(B),(te,j)=>{j(te,Pe(()=>e.toast.componentProps,{closeToast:N}))}),s(k,F)},Gt=k=>{var B=xa(),F=d(B);{var G=R=>{var v=ga(),T=X(v);{var V=L=>{var he=h(),Se=d(he);{var ve=be=>{var Le=h(),gt=d(Le);nt(gt,()=>e.toast.icon,(_t,yt)=>{yt(_t,{})}),s(be,Le)},se=be=>{r(be)};I(Se,be=>{e.toast.icon?be(ve):be(se,!1)})}s(L,he)};I(T,L=>{(e.toast.promise||t(p)==="loading")&&L(V)})}var fe=S(T,2);{var _=L=>{var he=h(),Se=d(he);{var ve=be=>{var Le=h(),gt=d(Le);nt(gt,()=>e.toast.icon,(_t,yt)=>{yt(_t,{})}),s(be,Le)},se=be=>{var Le=h(),gt=d(Le);{var _t=dt=>{var bt=h(),Jt=d(bt);re(Jt,()=>e.successIcon??ie),s(dt,bt)},yt=dt=>{var bt=h(),Jt=d(bt);{var hn=ft=>{var wt=h(),Qt=d(wt);re(Qt,()=>e.errorIcon??ie),s(ft,wt)},vn=ft=>{var wt=h(),Qt=d(wt);{var mn=ht=>{var pt=h(),Zt=d(pt);re(Zt,()=>e.warningIcon??ie),s(ht,pt)},gn=ht=>{var pt=h(),Zt=d(pt);{var _n=$t=>{var br=h(),yn=d(br);re(yn,()=>e.infoIcon??ie),s($t,br)};I(Zt,$t=>{t(p)==="info"&&$t(_n)},!0)}s(ht,pt)};I(Qt,ht=>{t(p)==="warning"?ht(mn):ht(gn,!1)},!0)}s(ft,wt)};I(Jt,ft=>{t(p)==="error"?ft(hn):ft(vn,!1)},!0)}s(dt,bt)};I(gt,dt=>{t(p)==="success"?dt(_t):dt(yt,!1)},!0)}s(be,Le)};I(Se,be=>{e.toast.icon?be(ve):be(se,!1)})}s(L,he)};I(fe,L=>{e.toast.type!=="loading"&&L(_)})}W(v),me(L=>$e(v,1,L),[()=>Ze(Qe(t(oe)?.icon,e.toast?.classes?.icon))]),s(R,v)};I(F,R=>{(t(p)||e.toast.icon||e.toast.promise)&&e.toast.icon!==null&&(t(Ie)!==null||e.toast.icon)&&R(G)})}var te=S(F,2),j=X(te),ye=X(j);{var it=R=>{var v=h(),T=d(v);{var V=_=>{const L=m(()=>e.toast.title);var he=h(),Se=d(he);nt(Se,()=>t(L),(ve,se)=>{se(ve,Pe(()=>e.toast.componentProps))}),s(_,he)},fe=_=>{var L=je();me(()=>Dt(L,e.toast.title)),s(_,L)};I(T,_=>{typeof e.toast.title!="string"?_(V):_(fe,!1)})}s(R,v)};I(ye,R=>{e.toast.title&&R(it)})}W(j);var mt=S(j,2);{var Xt=R=>{var v=_a(),T=X(v);{var V=_=>{const L=m(()=>e.toast.description);var he=h(),Se=d(he);nt(Se,()=>t(L),(ve,se)=>{se(ve,Pe(()=>e.toast.componentProps))}),s(_,he)},fe=_=>{var L=je();me(()=>Dt(L,e.toast.description)),s(_,L)};I(T,_=>{typeof e.toast.description!="string"?_(V):_(fe,!1)})}W(v),me(_=>$e(v,1,_),[()=>Ze(Qe(l(),t(ge),t(oe)?.description,e.toast.classes?.description))]),s(R,v)};I(mt,R=>{e.toast.description&&R(Xt)})}W(te);var Re=S(te,2);{var ke=R=>{var v=h(),T=d(v);{var V=_=>{var L=h(),he=d(L);nt(he,()=>e.toast.cancel,(Se,ve)=>{ve(Se,{})}),s(_,L)},fe=_=>{var L=h(),he=d(L);{var Se=ve=>{var se=ba();se.__click=[ya,e,ce,N];var be=X(se,!0);W(se),me(Le=>{er(se,e.toast.cancelButtonStyle??o()),$e(se,1,Le),Dt(be,e.toast.cancel.label)},[()=>Ze(Qe(t(oe)?.cancelButton,e.toast?.classes?.cancelButton))]),s(ve,se)};I(he,ve=>{qt(e.toast.cancel)&&ve(Se)},!0)}s(_,L)};I(T,_=>{typeof e.toast.cancel=="function"?_(V):_(fe,!1)})}s(R,v)};I(Re,R=>{e.toast.cancel&&R(ke)})}var Fe=S(Re,2);{var qe=R=>{var v=h(),T=d(v);{var V=_=>{var L=h(),he=d(L);nt(he,()=>e.toast.action,(Se,ve)=>{ve(Se,{})}),s(_,L)},fe=_=>{var L=h(),he=d(L);{var Se=ve=>{var se=pa();se.__click=[wa,e,N];var be=X(se,!0);W(se),me(Le=>{er(se,e.toast.actionButtonStyle??a()),$e(se,1,Le),Dt(be,e.toast.action.label)},[()=>Ze(Qe(t(oe)?.actionButton,e.toast?.classes?.actionButton))]),s(ve,se)};I(he,ve=>{qt(e.toast.action)&&ve(Se)},!0)}s(_,L)};I(T,_=>{typeof e.toast.action=="function"?_(V):_(fe,!1)})}s(R,v)};I(Fe,R=>{e.toast.action&&R(qe)})}me(R=>$e(j,1,R),[()=>Ze(Qe(t(oe)?.title,e.toast?.classes?.title))]),s(k,B)};I(Kt,k=>{e.toast.component?k(Yt):k(Gt,!1)})}W(C),Jr(C,k=>c(q,k),()=>t(q)),me((k,B,F,G)=>{$e(C,1,k),U(C,"data-rich-colors",e.toast.richColors??u()),U(C,"data-styled",!(e.toast.component||e.toast.unstyled||i())),U(C,"data-mounted",t(y)),U(C,"data-promise",B),U(C,"data-swiped",t(w)),U(C,"data-removed",t(b)),U(C,"data-visible",t(K)),U(C,"data-y-position",t(Me)[0]),U(C,"data-x-position",t(Me)[1]),U(C,"data-index",e.index),U(C,"data-front",t(ee)),U(C,"data-swiping",t(E)),U(C,"data-dismissable",t(ce)),U(C,"data-type",t(p)),U(C,"data-invert",t(rt)),U(C,"data-swipe-out",t(A)),U(C,"data-swipe-direction",t(z)),U(C,"data-expanded",F),Bt=er(C,`${e.style} ${e.toast.style}`,Bt,G)},[()=>Ze(Qe(e.class,t(Te),t(oe)?.toast,e.toast?.classes?.toast,t(oe)?.[t(p)],e.toast?.classes?.[t(p)])),()=>!!e.toast.promise,()=>!!(e.expanded||e.expandByDefault&&t(y)),()=>({"--index":e.index,"--toasts-before":e.index,"--z-index":we.toasts.length-e.index,"--offset":`${t(b)?t(M):t(f)}px`,"--initial-height":e.expandByDefault?"auto":`${t(le)}px`})]),wn("dragend",C,He),s(n,C),$()}pn(["pointermove","pointerup","pointerdown","click"]);var Ia=Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');function Sa(n){var e=Ia();s(n,e)}var Pa=Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');function Ma(n){var e=Pa();s(n,e)}var Ca=Ct('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');function Ea(n){var e=Ca();s(n,e)}var Aa=Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');function Ba(n){var e=Aa();s(n,e)}var Da=Ct('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');function Na(n){var e=Da();s(n,e)}const Ra=3,un="24px",dn="16px",La=4e3,Oa=356,za=14,ar="dark",Lt="light";function Ha(n,e){const r={};return[n,e].forEach((o,a)=>{const l=a===1,i=l?"--mobile-offset":"--offset",u=l?dn:un;function g(y){["top","right","bottom","left"].forEach(b=>{r[`${i}-${b}`]=typeof y=="number"?`${y}px`:y})}typeof o=="number"||typeof o=="string"?g(o):typeof o=="object"?["top","right","bottom","left"].forEach(y=>{const b=o[y];b===void 0?r[`${i}-${y}`]=u:r[`${i}-${y}`]=typeof b=="number"?`${b}px`:b}):g(u)}),r}var Fa=P("<ol></ol>"),qa=P('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-nbs0zk"><!></section>');function ja(n,e){Z(e,!0);function r(f){return f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ar:Lt}let o=x(e,"invert",3,!1),a=x(e,"position",3,"bottom-right"),l=x(e,"hotkey",19,()=>["altKey","KeyT"]),i=x(e,"expand",3,!1),u=x(e,"closeButton",3,!1),g=x(e,"offset",3,un),y=x(e,"mobileOffset",3,dn),b=x(e,"theme",3,"light"),E=x(e,"richColors",3,!1),A=x(e,"duration",3,La),w=x(e,"visibleToasts",3,Ra),M=x(e,"toastOptions",19,()=>({})),le=x(e,"dir",7,"auto"),O=x(e,"gap",3,za),q=x(e,"containerAriaLabel",3,"Notifications"),D=x(e,"closeButtonAriaLabel",3,"Close toast"),z=Be(e,["$$slots","$$events","$$legacy","invert","position","hotkey","expand","closeButton","offset","mobileOffset","theme","richColors","duration","visibleToasts","toastOptions","dir","gap","loadingIcon","successIcon","errorIcon","warningIcon","closeIcon","infoIcon","containerAriaLabel","class","closeButtonAriaLabel","onblur","onfocus","onmouseenter","onmousemove","onmouseleave","ondragend","onpointerdown","onpointerup"]);function ee(){if(le()!=="auto")return le();if(typeof window>"u"||typeof document>"u")return"ltr";const f=document.documentElement.getAttribute("dir");return f==="auto"||!f?(Oe(()=>le(window.getComputedStyle(document.documentElement).direction??"ltr")),le()):(Oe(()=>le(f)),f)}const K=m(()=>Array.from(new Set([a(),...we.toasts.filter(f=>f.position).map(f=>f.position)].filter(Boolean))));let p=Q(!1),ce=Q(!1),Te=Q(vt(r(b()))),ge=Q(void 0),ue=Q(null),Ae=Q(!1);const ze=m(()=>l().join("+").replace(/Key/g,"").replace(/Digit/g,""));Xe(()=>{we.toasts.length<=1&&c(p,!1)}),Xe(()=>{const f=we.toasts.filter(N=>N.dismiss&&!N.delete);if(f.length>0){const N=we.toasts.map(H=>f.find(ne=>ne.id===H.id)?{...H,delete:!0}:H);we.toasts=N}}),Xe(()=>()=>{t(ge)&&t(ue)&&(t(ue).focus({preventScroll:!0}),c(ue,null),c(Ae,!1))}),Vt(()=>(we.reset(),et(document,"keydown",N=>{l().every(Y=>N[Y]||N.code===Y)&&(c(p,!0),t(ge)?.focus()),N.code==="Escape"&&(document.activeElement===t(ge)||t(ge)?.contains(document.activeElement))&&c(p,!1)}))),Xe(()=>{if(b()!=="system"&&c(Te,b()),typeof window<"u"){b()==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?c(Te,ar):c(Te,Lt));const f=window.matchMedia("(prefers-color-scheme: dark)"),N=({matches:H})=>{c(Te,H?ar:Lt,!0)};"addEventListener"in f?f.addEventListener("change",N):f.addListener(N)}});const _e=f=>{e.onblur?.(f),t(Ae)&&!f.currentTarget.contains(f.relatedTarget)&&(c(Ae,!1),t(ue)&&(t(ue).focus({preventScroll:!0}),c(ue,null)))},Me=f=>{e.onfocus?.(f),!(f.target instanceof HTMLElement&&f.target.dataset.dismissable==="false")&&(t(Ae)||(c(Ae,!0),c(ue,f.relatedTarget,!0)))},Je=f=>{e.onpointerdown?.(f),!(f.target instanceof HTMLElement&&f.target.dataset.dismissable==="false")&&c(ce,!0)},st=f=>{e.onmouseenter?.(f),c(p,!0)},rt=f=>{e.onmouseleave?.(f),t(ce)||c(p,!1)},Ue=f=>{e.onmousemove?.(f),c(p,!0)},oe=f=>{e.ondragend?.(f),c(p,!1)},De=f=>{e.onpointerup?.(f),c(ce,!1)};aa.set(new Dn);var Ce=qa();U(Ce,"tabindex",-1);var pe=X(Ce);{var We=f=>{var N=h(),H=d(N);ir(H,18,()=>t(K),Y=>Y,(Y,ne,J,Ne)=>{const ae=m(()=>{const[Ie,C]=ne.split("-");return{y:Ie,x:C}}),xe=m(()=>Ha(g(),y()));var He=Fa();Yr(He,(Ie,C)=>({tabindex:-1,dir:Ie,class:e.class,"data-sonner-toaster":!0,"data-sonner-theme":t(Te),"data-y-position":t(ae).y,"data-x-position":t(ae).x,style:e.style,onblur:_e,onfocus:Me,onmouseenter:st,onmousemove:Ue,onmouseleave:rt,ondragend:oe,onpointerdown:Je,onpointerup:De,...z,[Nn]:C}),[ee,()=>({"--front-toast-height":`${we.heights[0]?.height}px`,"--width":`${Oa}px`,"--gap":`${O()}px`,"--offset-top":t(xe)["--offset-top"],"--offset-right":t(xe)["--offset-right"],"--offset-bottom":t(xe)["--offset-bottom"],"--offset-left":t(xe)["--offset-left"],"--mobile-offset-top":t(xe)["--mobile-offset-top"],"--mobile-offset-right":t(xe)["--mobile-offset-right"],"--mobile-offset-bottom":t(xe)["--mobile-offset-bottom"],"--mobile-offset-left":t(xe)["--mobile-offset-left"]})],void 0,"svelte-nbs0zk"),ir(He,23,()=>we.toasts.filter(Ie=>!Ie.position&&t(J)===0||Ie.position===ne),Ie=>Ie.id,(Ie,C,Bt,Ut)=>{{const Wt=Re=>{var ke=h(),Fe=d(ke);{var qe=v=>{var T=h(),V=d(T);re(V,()=>e.successIcon??ie),s(v,T)},R=v=>{var T=h(),V=d(T);{var fe=_=>{Sa(_)};I(V,_=>{e.successIcon!==null&&_(fe)},!0)}s(v,T)};I(Fe,v=>{e.successIcon?v(qe):v(R,!1)})}s(Re,ke)},Kt=Re=>{var ke=h(),Fe=d(ke);{var qe=v=>{var T=h(),V=d(T);re(V,()=>e.errorIcon??ie),s(v,T)},R=v=>{var T=h(),V=d(T);{var fe=_=>{Ma(_)};I(V,_=>{e.errorIcon!==null&&_(fe)},!0)}s(v,T)};I(Fe,v=>{e.errorIcon?v(qe):v(R,!1)})}s(Re,ke)},Yt=Re=>{var ke=h(),Fe=d(ke);{var qe=v=>{var T=h(),V=d(T);re(V,()=>e.warningIcon??ie),s(v,T)},R=v=>{var T=h(),V=d(T);{var fe=_=>{Ea(_)};I(V,_=>{e.warningIcon!==null&&_(fe)},!0)}s(v,T)};I(Fe,v=>{e.warningIcon?v(qe):v(R,!1)})}s(Re,ke)},Gt=Re=>{var ke=h(),Fe=d(ke);{var qe=v=>{var T=h(),V=d(T);re(V,()=>e.infoIcon??ie),s(v,T)},R=v=>{var T=h(),V=d(T);{var fe=_=>{Ba(_)};I(V,_=>{e.infoIcon!==null&&_(fe)},!0)}s(v,T)};I(Fe,v=>{e.infoIcon?v(qe):v(R,!1)})}s(Re,ke)},k=Re=>{var ke=h(),Fe=d(ke);{var qe=v=>{var T=h(),V=d(T);re(V,()=>e.closeIcon??ie),s(v,T)},R=v=>{var T=h(),V=d(T);{var fe=_=>{Na(_)};I(V,_=>{e.closeIcon!==null&&_(fe)},!0)}s(v,T)};I(Fe,v=>{e.closeIcon?v(qe):v(R,!1)})}s(Re,ke)};let B=m(()=>M()?.duration??A()),F=m(()=>M()?.class??""),G=m(()=>M()?.descriptionClass||""),te=m(()=>M()?.style??""),j=m(()=>M().classes||{}),ye=m(()=>M().unstyled??!1),it=m(()=>M()?.cancelButtonStyle??""),mt=m(()=>M()?.actionButtonStyle??""),Xt=m(()=>M()?.closeButtonAriaLabel??D());Ta(Ie,{get index(){return t(Bt)},get toast(){return t(C)},get defaultRichColors(){return E()},get duration(){return t(B)},get class(){return t(F)},get descriptionClass(){return t(G)},get invert(){return o()},get visibleToasts(){return w()},get closeButton(){return u()},get interacting(){return t(ce)},get position(){return ne},get style(){return t(te)},get classes(){return t(j)},get unstyled(){return t(ye)},get cancelButtonStyle(){return t(it)},get actionButtonStyle(){return t(mt)},get closeButtonAriaLabel(){return t(Xt)},get expandByDefault(){return i()},get expanded(){return t(p)},get loadingIcon(){return e.loadingIcon},successIcon:Wt,errorIcon:Kt,warningIcon:Yt,infoIcon:Gt,closeIcon:k,$$slots:{successIcon:!0,errorIcon:!0,warningIcon:!0,infoIcon:!0,closeIcon:!0}})}}),W(He),Jr(He,Ie=>c(ge,Ie),()=>t(ge)),me(()=>He.dir=He.dir),s(Y,He)}),s(f,N)};I(pe,f=>{we.toasts.length>0&&f(We)})}W(Ce),me(()=>U(Ce,"aria-label",`${q()??""} ${t(ze)??""}`)),s(n,Ce),$()}function Va(n,e){Z(e,!0);let r=Be(e,["$$slots","$$events","$$legacy"]);ja(n,Pe({get theme(){return gr.current},class:"toaster group",style:"--normal-bg: var(--color-popover); --normal-text: var(--color-popover-foreground); --normal-border: var(--color-border);"},()=>r)),$()}function Ua(n,e){Z(e,!0);/**
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
 */let r=Be(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]];tt(n,Pe({name:"arrow-right-to-line"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Wa(n,e){Z(e,!0);/**
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
 */let r=Be(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];tt(n,Pe({name:"book-open"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Ka(n,e){Z(e,!0);/**
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
 */let r=Be(e,["$$slots","$$events","$$legacy"]);const o=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];tt(n,Pe({name:"calculator"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Ya(n,e){Z(e,!0);/**
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
 */let r=Be(e,["$$slots","$$events","$$legacy"]);const o=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];tt(n,Pe({name:"clipboard"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Ga(n,e){Z(e,!0);/**
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
 */let r=Be(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];tt(n,Pe({name:"cog"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Xa(n,e){Z(e,!0);/**
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
 */let r=Be(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];tt(n,Pe({name:"download"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Ja(n,e){Z(e,!0);/**
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
 */let r=Be(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];tt(n,Pe({name:"github"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Qa(n,e){Z(e,!0);/**
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
 */let r=Be(e,["$$slots","$$events","$$legacy"]);const o=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];tt(n,Pe({name:"info"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}function Za(n,e){Z(e,!0);/**
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
 */let r=Be(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 2v2"}],["path",{d:"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"}],["path",{d:"M16 12a4 4 0 0 0-4-4"}],["path",{d:"m19 5-1.256 1.256"}],["path",{d:"M20 12h2"}]];tt(n,Pe({name:"sun-moon"},()=>r,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);re(u,()=>e.children??ie),s(a,i)},$$slots:{default:!0}})),$()}const $a=Qn({component:"checkbox",parts:["root","group","group-label","input"]}),es=new Qr("Checkbox.Group"),fn=new Qr("Checkbox.Root");class _r{static create(e,r=null){return fn.set(new _r(e,r))}opts;group;#t=m(()=>this.group&&this.group.opts.name.current?this.group.opts.name.current:this.opts.name.current);get trueName(){return t(this.#t)}set trueName(e){c(this.#t,e)}#e=m(()=>this.group&&this.group.opts.required.current?!0:this.opts.required.current);get trueRequired(){return t(this.#e)}set trueRequired(e){c(this.#e,e)}#r=m(()=>this.group&&this.group.opts.disabled.current?!0:this.opts.disabled.current);get trueDisabled(){return t(this.#r)}set trueDisabled(e){c(this.#r,e)}#n=m(()=>this.group&&this.group.opts.readonly.current?!0:this.opts.readonly.current);get trueReadonly(){return t(this.#n)}set trueReadonly(e){c(this.#n,e)}attachment;constructor(e,r){this.opts=e,this.group=r,this.attachment=Yn(this.opts.ref),this.onkeydown=this.onkeydown.bind(this),this.onclick=this.onclick.bind(this),lr.pre([()=>Kn(this.group?.opts.value.current),()=>this.opts.value.current],([o,a])=>{!o||!a||(this.opts.checked.current=o.includes(a))}),lr.pre(()=>this.opts.checked.current,o=>{this.group&&(o?this.group?.addValue(this.opts.value.current):this.group?.removeValue(this.opts.value.current))})}onkeydown(e){if(!(this.trueDisabled||this.trueReadonly)){if(e.key===Gn){e.preventDefault(),this.opts.type.current==="submit"&&e.currentTarget.closest("form")?.requestSubmit();return}e.key===Xn&&(e.preventDefault(),this.#o())}}#o(){this.opts.indeterminate.current?(this.opts.indeterminate.current=!1,this.opts.checked.current=!0):this.opts.checked.current=!this.opts.checked.current}onclick(e){if(!(this.trueDisabled||this.trueReadonly)){if(this.opts.type.current==="submit"){this.#o();return}e.preventDefault(),this.#o()}}#a=m(()=>({checked:this.opts.checked.current,indeterminate:this.opts.indeterminate.current}));get snippetProps(){return t(this.#a)}set snippetProps(e){c(this.#a,e)}#s=m(()=>({id:this.opts.id.current,role:"checkbox",type:this.opts.type.current,disabled:this.trueDisabled,"aria-checked":Jn(this.opts.checked.current,this.opts.indeterminate.current),"aria-required":Or(this.trueRequired),"aria-readonly":Or(this.trueReadonly),"data-disabled":Lr(this.trueDisabled),"data-readonly":Lr(this.trueReadonly),"data-state":ts(this.opts.checked.current,this.opts.indeterminate.current),[$a.root]:"",onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment}));get props(){return t(this.#s)}set props(e){c(this.#s,e)}}class yr{static create(){return new yr(fn.get())}root;#t=m(()=>this.root.group?!!(this.root.opts.value.current!==void 0&&this.root.group.opts.value.current.includes(this.root.opts.value.current)):this.root.opts.checked.current);get trueChecked(){return t(this.#t)}set trueChecked(e){c(this.#t,e)}#e=m(()=>!!this.root.trueName);get shouldRender(){return t(this.#e)}set shouldRender(e){c(this.#e,e)}constructor(e){this.root=e,this.onfocus=this.onfocus.bind(this)}onfocus(e){Zn(this.root.opts.ref.current)&&this.root.opts.ref.current.focus()}#r=m(()=>({type:"checkbox",checked:this.root.opts.checked.current===!0,disabled:this.root.trueDisabled,required:this.root.trueRequired,name:this.root.trueName,value:this.root.opts.value.current,readonly:this.root.trueReadonly,onfocus:this.onfocus}));get props(){return t(this.#r)}set props(e){c(this.#r,e)}}function ts(n,e){return e?"indeterminate":n?"checked":"unchecked"}function rs(n,e){Z(e,!1);const r=yr.create();Et();var o=h(),a=d(o);{var l=i=>{to(i,Pe(()=>r.props))};I(a,i=>{r.shouldRender&&i(l)})}s(n,o),$()}var ns=P("<button><!></button>"),os=P("<!> <!>",1);function as(n,e){const r=xn();Z(e,!0);let o=x(e,"checked",15,!1),a=x(e,"ref",15,null),l=x(e,"disabled",3,!1),i=x(e,"required",3,!1),u=x(e,"name",3,void 0),g=x(e,"value",3,"on"),y=x(e,"id",19,()=>$n(r)),b=x(e,"indeterminate",15,!1),E=x(e,"type",3,"button"),A=Be(e,["$$slots","$$events","$$legacy","checked","ref","onCheckedChange","children","disabled","required","name","value","id","indeterminate","onIndeterminateChange","child","type","readonly"]);const w=es.getOr(null);w&&g()&&(w.opts.value.current.includes(g())?o(!0):o(!1)),lr.pre(()=>g(),()=>{w&&g()&&(w.opts.value.current.includes(g())?o(!0):o(!1))});const M=_r.create({checked:Ke(()=>o(),K=>{o(K),e.onCheckedChange?.(K)}),disabled:Ke(()=>l()??!1),required:Ke(()=>i()),name:Ke(()=>u()),value:Ke(()=>g()),id:Ke(()=>y()),ref:Ke(()=>a(),K=>a(K)),indeterminate:Ke(()=>b(),K=>{b(K),e.onIndeterminateChange?.(K)}),type:Ke(()=>E()),readonly:Ke(()=>!!e.readonly)},w),le=m(()=>eo({...A},M.props));var O=os(),q=d(O);{var D=K=>{var p=h(),ce=d(p);{let Te=m(()=>({props:t(le),...M.snippetProps}));re(ce,()=>e.child,()=>t(Te))}s(K,p)},z=K=>{var p=ns();Yr(p,()=>({...t(le)}));var ce=X(p);re(ce,()=>e.children??ie,()=>M.snippetProps),W(p),s(K,p)};I(q,K=>{e.child?K(D):K(z,!1)})}var ee=S(q,2);rs(ee,{}),s(n,O),$()}var ss=P('<div data-slot="checkbox-indicator" class="text-current transition-none"><!></div>');function is(n,e){Z(e,!0);let r=x(e,"ref",15,null),o=x(e,"checked",15,!1),a=x(e,"indeterminate",15,!1),l=Be(e,["$$slots","$$events","$$legacy","ref","checked","indeterminate","class"]);var i=h(),u=d(i);{const g=(b,E)=>{let A=()=>E?.().checked,w=()=>E?.().indeterminate;var M=ss(),le=X(M);{var O=D=>{ro(D,{class:"size-3.5"})},q=D=>{var z=h(),ee=d(z);{var K=p=>{no(p,{class:"size-3.5"})};I(ee,p=>{w()&&p(K)},!0)}s(D,z)};I(le,D=>{A()?D(O):D(q,!1)})}W(M),s(b,M)};let y=m(()=>Rn("border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e.class));nt(u,()=>as,(b,E)=>{E(b,Pe({"data-slot":"checkbox",get class(){return t(y)}},()=>l,{get ref(){return r()},set ref(A){r(A)},get checked(){return o()},set checked(A){o(A)},get indeterminate(){return a()},set indeterminate(A){a(A)},children:g,$$slots:{default:!0}}))})}s(n,i),$()}var ls=P("<!> <!>",1),cs=P("Interval <!>",1),us=P("<!> <!>",1),ds=P("<!> <!>",1),fs=P("<!> <!>",1),hs=P("<!> <!>",1),vs=P("<!> <!> <!> <!> <!>",1),ms=P("<!> <!>",1),gs=P('<div class="flex flex-row gap-2"><!> <!> <!></div>'),_s=P("<!> <!>",1),ys=P("<div><!> <!></div>");function bs(n,e){Z(e,!1);let r=ot(!1),o=ot(Dr),a=ot(kt),l,i=null,u=ot(!1);function g(O){const q=[["rpcs",Pt],["callAbis",Mr],["txAbis",Pr],["testKeys",Sr],["filterAddresses",tr]];for(const[D,z]of q){const ee=O[D];ee&&z.set(ee)}}function y(){if(!t(o)||t(o)<rr){It.warning(`invalid depth: depth must be at least ${rr}`);return}if(!t(a)||t(a)<kt){It.warning(`invalid interval: interval must be at least ${kt}`);return}Er.set(t(o)),Ar.set(t(a)),Br.set(t(u)),l&&g(l),c(r,!1),It.info("successfully saved")}function b(O){if(i=O.target.files?.[0]??null,i){const D=new FileReader;D.onload=z=>{Cr(()=>{const ee=z.target?.result;if(typeof ee=="string")l=JSON.parse(ee);else throw new Error("invalid file content")})},D.readAsText(i)}}function E(){const O={rpcs:Pt.get(),callAbis:Mr.get(),txAbis:Pr.get(),testKeys:Sr.get(),filterAddresses:tr.get()};Cr(()=>{const q=JSON.stringify(O,null,2),D=new Blob([q],{type:"application/json"}),z=URL.createObjectURL(D),ee=document.createElement("a");ee.href=z,ee.download=`env_${Date.now()}.json`,ee.click(),URL.revokeObjectURL(z)})}function A(O){return Ln(O.trim())}Wr(()=>(t(r),Ir),()=>{t(r)&&(c(o,Er.get()),c(a,Ar.get()),c(u,Br.get()))}),Kr(),Et();var w=ys(),M=X(w);Ve(M,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{c(r,!0)},children:(O,q)=>{Ga(O,{})},$$slots:{default:!0}});var le=S(M,2);Zr(le,{get open(){return t(r)},set open(O){c(r,O)},children:(O,q)=>{$r(O,{children:(D,z)=>{var ee=_s(),K=d(ee);en(K,{children:(ce,Te)=>{var ge=ms(),ue=d(ge);tn(ue,{children:(ze,_e)=>{Ge();var Me=je("Setting");s(ze,Me)},$$slots:{default:!0}});var Ae=S(ue,2);rn(Ae,{children:(ze,_e)=>{Gr(ze,{children:(Me,Je)=>{Xr(Me,{children:(st,rt)=>{var Ue=vs(),oe=d(Ue);lt(oe,{children:(f,N)=>{var H=ls(),Y=d(H);Ee(Y,{children:(J,Ne)=>{Ge();var ae=je("Depth");s(J,ae)},$$slots:{default:!0}});var ne=S(Y,2);Ee(ne,{children:(J,Ne)=>{{let ae=sr(()=>(xt(Rt),Oe(()=>Dr.toString())));St(J,{type:"number",get min(){return xt(Rt),Oe(()=>rr)},get placeholder(){return t(ae)},get value(){return t(o)},set value(xe){c(o,xe)},$$legacy:!0})}},$$slots:{default:!0}}),s(f,H)},$$slots:{default:!0}});var De=S(oe,2);lt(De,{children:(f,N)=>{var H=us(),Y=d(H);Ee(Y,{children:(J,Ne)=>{Ge();var ae=cs(),xe=S(d(ae));Ve(xe,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{It.info("effective only for http/https rpc endpoints",{class:"whitespace-pre-line"})},children:(He,Ie)=>{Qa(He,{})},$$slots:{default:!0}}),s(J,ae)},$$slots:{default:!0}});var ne=S(Y,2);Ee(ne,{children:(J,Ne)=>{{let ae=sr(()=>(xt(Rt),Oe(()=>`${kt.toString()} ms`)));St(J,{type:"number",get min(){return xt(Rt),Oe(()=>kt)},get placeholder(){return t(ae)},get value(){return t(a)},set value(xe){c(a,xe)},$$legacy:!0})}},$$slots:{default:!0}}),s(f,H)},$$slots:{default:!0}});var Ce=S(De,2);lt(Ce,{children:(f,N)=>{var H=ds(),Y=d(H);Ee(Y,{children:(J,Ne)=>{Ge();var ae=je("Metrics");s(J,ae)},$$slots:{default:!0}});var ne=S(Y,2);Ee(ne,{children:(J,Ne)=>{is(J,{get checked(){return t(u)},set checked(ae){c(u,ae)},$$legacy:!0})},$$slots:{default:!0}}),s(f,H)},$$slots:{default:!0}});var pe=S(Ce,2);lt(pe,{children:(f,N)=>{var H=fs(),Y=d(H);Ee(Y,{children:(J,Ne)=>{Ge();var ae=je("Filter Addresses");s(J,ae)},$$slots:{default:!0}});var ne=S(Y,2);Ee(ne,{children:(J,Ne)=>{oo(J,{name:"Filter Address",get store(){return xt(Ir),Oe(()=>tr)},validate:A})},$$slots:{default:!0}}),s(f,H)},$$slots:{default:!0}});var We=S(pe,2);lt(We,{children:(f,N)=>{var H=hs(),Y=d(H);Ee(Y,{children:(J,Ne)=>{Ge();var ae=je("Environment");s(J,ae)},$$slots:{default:!0}});var ne=S(Y,2);Ee(ne,{children:(J,Ne)=>{St(J,{type:"file",class:"cursor-pointer",onchange:b})},$$slots:{default:!0}}),s(f,H)},$$slots:{default:!0}}),s(st,Ue)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(ce,ge)},$$slots:{default:!0}});var p=S(K,2);nn(p,{children:(ce,Te)=>{var ge=gs(),ue=X(ge);Ve(ue,{variant:"outline",class:"cursor-pointer",onclick:E,children:(_e,Me)=>{Xa(_e,{})},$$slots:{default:!0}});var Ae=S(ue,2);Ve(Ae,{class:"cursor-pointer",size:"icon",variant:"outline",get onclick(){return qo},children:(_e,Me)=>{Za(_e,{})},$$slots:{default:!0}});var ze=S(Ae,2);Ve(ze,{class:"cursor-pointer",variant:"outline",onclick:y,children:(_e,Me)=>{Ge();var Je=je("Save");s(_e,Je)},$$slots:{default:!0}}),W(ge),s(ce,ge)},$$slots:{default:!0}}),s(D,ee)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),W(w),s(n,w),$()}var ws=P("<!> <!>",1),ps=P('<div class="flex gap-2"><!> <!> <!></div>'),xs=P("<!> <!>",1),ks=P("<!> <!>",1),Ts=P("<!> <!>",1),Is=P("<!> <!>",1),Ss=P("<div><!> <!></div>");function Ps(n,e){Z(e,!1);let r=ot(!1),o=ot("0"),a=ot("0x00");function l(A){const w=A.currentTarget.value;w!==""&&/^\d+$/.test(w)&&(c(o,w),c(a,Nr(w)))}function i(A){let w=A.currentTarget.value.trim();w===""||w==="0x"||(w.startsWith("0x")&&(w=w.slice(2)),/^[0-9a-fA-F]+$/.test(w)&&(c(a,`0x${w}`),c(o,On(t(a)).toString())))}function u(){t(o).length!==0&&c(a,Nr(t(o),32))}async function g(){t(a).length!==0&&(await navigator.clipboard.writeText(t(a)),It.info(`copied hex: ${t(a)}`))}Wr(()=>t(r),()=>{t(r)&&(c(o,"0"),c(a,"0x00"))}),Kr(),Et();var y=Ss(),b=X(y);Ve(b,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{c(r,!0)},children:(A,w)=>{Ka(A,{})},$$slots:{default:!0}});var E=S(b,2);Zr(E,{get open(){return t(r)},set open(A){c(r,A)},children:(A,w)=>{$r(A,{children:(M,le)=>{var O=Is(),q=d(O);en(q,{children:(z,ee)=>{var K=Ts(),p=d(K);tn(p,{children:(Te,ge)=>{Ge();var ue=je("Hex Converter");s(Te,ue)},$$slots:{default:!0}});var ce=S(p,2);rn(ce,{children:(Te,ge)=>{Gr(Te,{children:(ue,Ae)=>{Xr(ue,{children:(ze,_e)=>{var Me=ks(),Je=d(Me);lt(Je,{children:(rt,Ue)=>{var oe=ws(),De=d(oe);Ee(De,{children:(pe,We)=>{Ge();var f=je("Decimal");s(pe,f)},$$slots:{default:!0}});var Ce=S(De,2);Ee(Ce,{children:(pe,We)=>{St(pe,{placeholder:"0",get value(){return t(o)},oninput:l})},$$slots:{default:!0}}),s(rt,oe)},$$slots:{default:!0}});var st=S(Je,2);lt(st,{children:(rt,Ue)=>{var oe=xs(),De=d(oe);Ee(De,{children:(pe,We)=>{Ge();var f=je("Hex");s(pe,f)},$$slots:{default:!0}});var Ce=S(De,2);Ee(Ce,{children:(pe,We)=>{var f=ps(),N=X(f);St(N,{placeholder:"0x00",get value(){return t(a)},oninput:i});var H=S(N,2);Ve(H,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:u,children:(ne,J)=>{Ua(ne,{})},$$slots:{default:!0}});var Y=S(H,2);Ve(Y,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:g,children:(ne,J)=>{Ya(ne,{})},$$slots:{default:!0}}),W(f),s(pe,f)},$$slots:{default:!0}}),s(rt,oe)},$$slots:{default:!0}}),s(ze,Me)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(z,K)},$$slots:{default:!0}});var D=S(q,2);nn(D,{}),s(M,O)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),W(y),s(n,y),$()}var Ms=P('<div class="flex w-full flex-row"><div class="ml-4 flex-1"><a class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">ETH UI</a></div> <div class="mr-4 flex flex-1 justify-end gap-2"><!> <!> <!></div></div>');function Cs(n,e){Z(e,!1);let r=ot("idle");zn.subscribe(b=>{c(r,b)}),Et();var o=Ms(),a=X(o),l=X(a);W(a);var i=S(a,2),u=X(i);Ve(u,{variant:"ghost",size:"icon",children:(b,E)=>{{let A=sr(()=>t(r)==="processing"?"animate-spin":"");ao(b,{get class(){return t(A)}})}},$$slots:{default:!0}});var g=S(u,2);Ps(g,{});var y=S(g,2);bs(y,{}),W(i),W(o),me(b=>U(l,"href",b),[()=>Hn("/")]),s(n,o),$()}var Es=P('<div class="grid w-full grid-cols-3 items-center"><div></div> <p class="text-center">© 2025 code0xff</p> <div class="mr-4 flex justify-end gap-2"><!> <!></div></div>');function As(n,e){Z(e,!1),Et();var r=Es(),o=S(X(r),4),a=X(o);Ve(a,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(Fn),children:(i,u)=>{Wa(i,{})},$$slots:{default:!0}});var l=S(a,2);Ve(l,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(qn),children:(i,u)=>{Ja(i,{})},$$slots:{default:!0}}),W(o),W(r),s(n,r),$()}var Bs=P('<link rel="icon"/>'),Ds=P('<!> <!> <div class="flex h-screen flex-col overflow-hidden"><div class="my-4 shrink-0"><!></div> <div class="flex min-h-0 flex-1 flex-col"><!></div> <div class="my-4 shrink-0"><!></div></div>',1);function Gs(n,e){Z(e,!0);async function r(){let w=Un.url.searchParams.get("rpc"),M=Pt.get();w?(nr.set(w),[...M,...or].includes(w)||Pt.set([...M,w])):w=nr.get(),M=Pt.get(),(!w||w.trim().length===0||![...M,...or].includes(w))&&nr.set(or[0]),await Vn(),Rr.set(!0)}Vt(async()=>{await jn(r,!1,async()=>{Rr.set(!0)})});var o=Ds();Ur(w=>{var M=Bs();Bn.title="ETH UI",me(()=>U(M,"href",uo)),s(w,M)});var a=d(o);Va(a,{position:"top-right"});var l=S(a,2);Jo(l,{});var i=S(l,2),u=X(i),g=X(u);Cs(g,{}),W(u);var y=S(u,2),b=X(y);re(b,()=>e.children??ie),W(y);var E=S(y,2),A=X(E);As(A,{}),W(E),W(i),s(n,o),$()}export{Gs as component,Ws as universal};
