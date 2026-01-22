import{d as _n,e as ar,b as He,o as Gt,c as g,a,f as M,g as On,i as sr,j as ir,t as Yt,s as pe,k as Se}from"../chunks/DBct3eSV.js";import{t as ut,h as yn,d as wn,_ as lr,aV as cr,J as bn,ah as ur,az as dr,aM as fr,aG as vr,P as hr,aA as ke,w as zt,y as Ht,u as Dt,aa as V,j as e,e as d,Y as ce,ac as b,aU as dn,p as Z,f as u,a as $,s as C,a9 as Fe,c as U,r as F,aO as mr,aP as xn,aQ as gr,n as at,l as _r,g as yr,m as oe,o as Zt,k as on,i as Be,aW as wr}from"../chunks/CETMS7f-.js";import{O as z,j as an,K as Wt,L as Kt,P as gt,Q as Ut,R as $e,s as Q,S as br,m as zn,U as xr,I as ae,n as Tr,B as qt,T as Rn,b as Hn,c as be,d as Rt,a as xe,F as Ce,H as Tn,G as In,w as Sn,V as Te,y as Pn,X as tn,Y as ye,Z as Mn,_ as En,$ as pn,C as Ir,z as Ae,a0 as Sr,a1 as Pr,a2 as Mr,r as Er,a3 as pr,a4 as kr,f as Br,i as kn,a5 as en,a6 as nn,g as Cr}from"../chunks/B5-_CfNL.js";import{p as Ar}from"../chunks/BHgfusHz.js";import{M as Dr}from"../chunks/CqEjzFD-.js";import{i as S,p as B,b as fn,s as Lt,r as Ft}from"../chunks/CwAcoZJR.js";import{c as ee}from"../chunks/DRe4C06y.js";import{i as je}from"../chunks/nlEoYXS-.js";import{R as Fn,D as jn,a as Vn,b as Un,c as Wn}from"../chunks/C06YbWeO.js";import{R as Lr}from"../chunks/1v_jbQsg.js";function Nr(n,t,r=!1,o=!1,s=!1){var l=n,i="";ut(()=>{var c=lr;if(i===(i=t()??"")){yn&&wn();return}if(c.nodes_start!==null&&(cr(c.nodes_start,c.nodes_end),c.nodes_start=c.nodes_end=null),i!==""){if(yn){bn.data;for(var _=wn(),w=_;_!==null&&(_.nodeType!==ur||_.data!=="");)w=_,_=dr(_);if(_===null)throw fr(),vr;_n(bn,w),l=hr(_);return}var m=i+"";r?m=`<svg>${m}</svg>`:o&&(m=`<math>${m}</math>`);var E=ar(m);if((r||o)&&(E=ke(E)),_n(ke(E),E.lastChild),r||o)for(;ke(E);)l.before(ke(E));else l.before(E)}})}const Or=!1,zr=!0,Rr="always",ss=Object.freeze(Object.defineProperty({__proto__:null,prerender:zr,ssr:Or,trailingSlash:Rr},Symbol.toStringTag,{value:"Module"})),Hr=""+new URL("../assets/favicon.DDmz9QoX.ico",import.meta.url).href,Kn=typeof window<"u"?window:void 0;function Fr(n){let t=n.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}let jr=class{#e;#t;constructor(t={}){const{window:r=Kn,document:o=r?.document}=t;r!==void 0&&(this.#e=o,this.#t=He(s=>{const l=Gt(r,"focusin",s),i=Gt(r,"focusout",s);return()=>{l(),i()}}))}get current(){return this.#t?.(),this.#e?Fr(this.#e):null}};new jr;function Vr(n,t){switch(n){case"post":Ht(t);break;case"pre":zt(t);break}}function qn(n,t,r,o={}){const{lazy:s=!1}=o;let l=!s,i=Array.isArray(n)?[]:void 0;Vr(t,()=>{const c=Array.isArray(n)?n.map(w=>w()):n();if(!l){l=!0,i=c;return}const _=Dt(()=>r(c,i));return i=c,_})}function vn(n,t,r){qn(n,"post",t,r)}function Ur(n,t,r){qn(n,"pre",t,r)}vn.pre=Ur;function Wr(n,t){switch(n){case"local":return t.localStorage;case"session":return t.sessionStorage}}class Yn{#e;#t;#r;#n;#a;#o=V(0);constructor(t,r,o={}){const{storage:s="local",serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:i=!0,window:c=Kn}=o;if(this.#e=r,this.#t=t,this.#r=l,c===void 0)return;const _=Wr(s,c);this.#n=_;const w=_.getItem(t);w!==null?this.#e=this.#s(w):this.#i(r),i&&s==="local"&&(this.#a=He(()=>Gt(c,"storage",this.#l)))}get current(){this.#a?.(),e(this.#o);const t=this.#s(this.#n?.getItem(this.#t))??this.#e,r=new WeakMap,o=s=>{if(s===null||s?.constructor.name==="Date"||typeof s!="object")return s;let l=r.get(s);return l||(l=new Proxy(s,{get:(i,c)=>(e(this.#o),o(Reflect.get(i,c))),set:(i,c,_)=>(d(this.#o,e(this.#o)+1),Reflect.set(i,c,_),this.#i(t),!0)}),r.set(s,l)),l};return o(t)}set current(t){this.#i(t),d(this.#o,e(this.#o)+1)}#l=t=>{t.key!==this.#t||t.newValue===null||(this.#e=this.#s(t.newValue),d(this.#o,e(this.#o)+1))};#s(t){try{return this.#r.deserialize(t)}catch(r){console.error(`Error when parsing "${t}" from persisted store "${this.#t}"`,r);return}}#i(t){try{t!=null&&this.#n?.setItem(this.#t,this.#r.serialize(t))}catch(r){console.error(`Error when writing value from persisted store "${this.#t}" to ${this.#n}`,r)}}}function Bn(n){return n.filter(t=>t.length>0)}const Gn={getItem:n=>null,setItem:(n,t)=>{}},Pe=typeof document<"u";function Kr(n){return typeof n=="function"}function qr(n){return n!==null&&typeof n=="object"}const Ie=Symbol("box"),hn=Symbol("is-writable");function Yr(n){return qr(n)&&Ie in n}function Gr(n){return X.isBox(n)&&hn in n}function X(n){let t=V(ce(n));return{[Ie]:!0,[hn]:!0,get current(){return e(t)},set current(r){d(t,r,!0)}}}function Jr(n,t){const r=b(n);return t?{[Ie]:!0,[hn]:!0,get current(){return e(r)},set current(o){t(o)}}:{[Ie]:!0,get current(){return n()}}}function Qr(n){return X.isBox(n)?n:Kr(n)?X.with(n):X(n)}function Xr(n){return Object.entries(n).reduce((t,[r,o])=>X.isBox(o)?(X.isWritableBox(o)?Object.defineProperty(t,r,{get(){return o.current},set(s){o.current=s}}):Object.defineProperty(t,r,{get(){return o.current}}),t):Object.assign(t,{[r]:o}),{})}function Zr(n){return X.isWritableBox(n)?{[Ie]:!0,get current(){return n.current}}:n}X.from=Qr;X.with=Jr;X.flatten=Xr;X.readonly=Zr;X.isBox=Yr;X.isWritableBox=Gr;function $r(n,t){const r=RegExp(n,"g");return o=>{if(typeof o!="string")throw new TypeError(`expected an argument of type string, but got ${typeof o}`);return o.match(r)?o.replace(r,t):o}}const to=$r(/[A-Z]/,n=>`-${n.toLowerCase()}`);function eo(n){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError(`expected an argument of type object, but got ${typeof n}`);return Object.keys(n).map(t=>`${to(t)}: ${n[t]};`).join(`
`)}function no(n={}){return eo(n).replace(`
`," ")}const ro={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",transform:"translateX(-100%)"};no(ro);const oo=typeof window<"u"?window:void 0;function ao(n){let t=n.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}let so=class{#e;#t;constructor(t={}){const{window:r=oo,document:o=r?.document}=t;r!==void 0&&(this.#e=o,this.#t=He(s=>{const l=Gt(r,"focusin",s),i=Gt(r,"focusout",s);return()=>{l(),i()}}))}get current(){return this.#t?.(),this.#e?ao(this.#e):null}};new so;const ne=X("mode-watcher-mode"),re=X("mode-watcher-theme"),io=["dark","light","system"];function sn(n){return typeof n!="string"?!1:io.includes(n)}class lo{#e="system";#t=Pe?localStorage:Gn;#r=this.#t.getItem(ne.current);#n=sn(this.#r)?this.#r:this.#e;#a=V(ce(this.#o()));#o(t=this.#n){return new Yn(ne.current,t,{serializer:{serialize:r=>r,deserialize:r=>sn(r)?r:this.#e}})}constructor(){dn(()=>vn.pre(()=>ne.current,(t,r)=>{const o=e(this.#a).current;d(this.#a,this.#o(o),!0),r&&localStorage.removeItem(r)}))}get current(){return e(this.#a).current}set current(t){e(this.#a).current=t}}class co{#e=void 0;#t=!0;#r=V(ce(this.#e));#n=typeof window<"u"&&typeof window.matchMedia=="function"?new Dr("prefers-color-scheme: light"):{current:!1};query(){Pe&&d(this.#r,this.#n.current?"light":"dark",!0)}tracking(t){this.#t=t}constructor(){dn(()=>{zt(()=>{this.#t&&this.query()})}),this.query=this.query.bind(this),this.tracking=this.tracking.bind(this)}get current(){return e(this.#r)}}const Ne=new lo,ln=new co;class uo{#e=Pe?localStorage:Gn;#t=this.#e.getItem(re.current);#r=this.#t===null||this.#t===void 0?"":this.#t;#n=V(ce(this.#a()));#a(t=this.#r){return new Yn(re.current,t,{serializer:{serialize:r=>typeof r!="string"?"":r,deserialize:r=>r}})}constructor(){dn(()=>vn.pre(()=>re.current,(t,r)=>{const o=e(this.#n).current;d(this.#n,this.#a(o),!0),r&&localStorage.removeItem(r)}))}get current(){return e(this.#n).current}set current(t){e(this.#n).current=t}}const Le=new uo;let Cn,An,Dn=!1,we=null;function fo(){return we||(we=document.createElement("style"),we.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)),we)}function Jn(n,t=!1){if(typeof document>"u")return;if(!Dn){Dn=!0,n();return}if(typeof window<"u"&&window.__vitest_worker__){n();return}clearTimeout(Cn),clearTimeout(An);const o=fo(),s=()=>document.head.appendChild(o),l=()=>{o.parentNode&&document.head.removeChild(o)};function i(){n(),window.requestAnimationFrame(l)}if(typeof window.requestAnimationFrame<"u"){s(),t?i():window.requestAnimationFrame(()=>{i()});return}s(),Cn=window.setTimeout(()=>{n(),An=window.setTimeout(l,16)},16)}const $t=X(void 0),Oe=X(!0),ze=X(!1),cn=X([]),un=X([]);function vo(){const n=b(()=>{if(!Pe)return;const t=Ne.current==="system"?ln.current:Ne.current,r=Bn(cn.current),o=Bn(un.current);function s(){const l=document.documentElement,i=document.querySelector('meta[name="theme-color"]');t==="light"?(r.length&&l.classList.remove(...r),o.length&&l.classList.add(...o),l.style.colorScheme="light",i&&$t.current&&i.setAttribute("content",$t.current.light)):(o.length&&l.classList.remove(...o),r.length&&l.classList.add(...r),l.style.colorScheme="dark",i&&$t.current&&i.setAttribute("content",$t.current.dark))}return Oe.current?Jn(s,ze.current):s(),t});return{get current(){return e(n)}}}function ho(){const n=b(()=>{if(Le.current,!Pe)return;function t(){document.documentElement.setAttribute("data-theme",Le.current)}return Oe.current?Jn(t,Dt(()=>ze.current)):t(),Le.current});return{get current(){return e(n)}}}const mn=vo(),mo=ho();function go(){Ne.current=mn.current==="dark"?"light":"dark"}function _o(n){Ne.current=n}function yo(n){Le.current=n}function wo({defaultMode:n="system",themeColors:t,darkClassNames:r=["dark"],lightClassNames:o=[],defaultTheme:s="",modeStorageKey:l="mode-watcher-mode",themeStorageKey:i="mode-watcher-theme"}){const c=document.documentElement,_=localStorage.getItem(l)??n,w=localStorage.getItem(i)??s,m=_==="light"||_==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(m?(r.length&&c.classList.remove(...r.filter(Boolean)),o.length&&c.classList.add(...o.filter(Boolean))):(o.length&&c.classList.remove(...o.filter(Boolean)),r.length&&c.classList.add(...r.filter(Boolean))),c.style.colorScheme=m?"light":"dark",t){const E=document.querySelector('meta[name="theme-color"]');E&&E.setAttribute("content",_==="light"?t.light:t.dark)}w&&(c.setAttribute("data-theme",w),localStorage.setItem(i,w)),localStorage.setItem(l,_)}var bo=M('<meta name="theme-color"/>');function xo(n,t){Z(t,!0);var r=g(),o=u(r);{var s=l=>{var i=bo();ut(()=>z(i,"content",t.themeColors.dark)),a(l,i)};S(o,l=>{t.themeColors&&l(s)})}a(n,r),$()}var To=M('<meta name="theme-color"/>'),Io=M("<!> <!>",1);function So(n,t){Z(t,!0);let r=B(t,"trueNonce",3,"");On(o=>{var s=Io(),l=u(s);{var i=_=>{var w=To();ut(()=>z(w,"content",t.themeColors.dark)),a(_,w)};S(l,_=>{t.themeColors&&_(i)})}var c=C(l,2);Nr(c,()=>`<script${r()?` nonce=${r()}`:""}>(`+wo.toString()+")("+JSON.stringify(t.initConfig)+");<\/script>"),a(o,s)}),$()}function Po(n,t){Z(t,!0);let r=B(t,"track",3,!0),o=B(t,"defaultMode",3,"system"),s=B(t,"disableTransitions",3,!0),l=B(t,"darkClassNames",19,()=>["dark"]),i=B(t,"lightClassNames",19,()=>[]),c=B(t,"defaultTheme",3,""),_=B(t,"nonce",3,""),w=B(t,"themeStorageKey",3,"mode-watcher-theme"),m=B(t,"modeStorageKey",3,"mode-watcher-mode"),E=B(t,"disableHeadScriptInjection",3,!1),dt=B(t,"synchronousModeChanges",3,!1);ne.current=m(),re.current=w(),cn.current=l(),un.current=i(),Oe.current=s(),$t.current=t.themeColors,ze.current=dt(),zt(()=>{ze.current=dt()}),zt(()=>{Oe.current=s()}),zt(()=>{$t.current=t.themeColors}),zt(()=>{cn.current=l()}),zt(()=>{un.current=i()}),zt(()=>{ne.current=m()}),zt(()=>{re.current=w()}),zt(()=>{mn.current,ne.current,re.current,mo.current}),Fe(()=>{ln.tracking(r()),ln.query();const Y=localStorage.getItem(ne.current);_o(sn(Y)?Y:o());const Nt=localStorage.getItem(re.current);yo(Nt||c())});const q={defaultMode:o(),themeColors:t.themeColors,darkClassNames:l(),lightClassNames:i(),defaultTheme:c(),modeStorageKey:m(),themeStorageKey:w()},T=b(()=>typeof window>"u"?_():"");var K=g(),tt=u(K);{var j=Y=>{xo(Y,{get themeColors(){return $t.current}})},R=Y=>{So(Y,{get trueNonce(){return e(T)},get initConfig(){return q},get themeColors(){return $t.current}})};S(tt,Y=>{E()?Y(j):Y(R,!1)})}a(n,K),$()}const Mo=Array(12).fill(0);var Eo=M('<div class="sonner-loading-bar"></div>'),po=M('<div><div class="sonner-spinner"></div></div>');function ko(n,t){Z(t,!0);var r=po(),o=U(r);an(o,23,()=>Mo,(s,l)=>`spinner-bar-${l}`,(s,l)=>{var i=Eo();a(s,i)}),F(o),F(r),ut(s=>{Kt(r,1,s),z(r,"data-visible",t.visible)},[()=>Wt(["sonner-loading-wrapper",t.class].filter(Boolean).join(" "))]),a(n,r),$()}const Bo=typeof window<"u"?window:void 0;function Co(n){let t=n.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Ao{#e;#t;constructor(t={}){const{window:r=Bo,document:o=r?.document}=t;r!==void 0&&(this.#e=o,this.#t=He(s=>{const l=Gt(r,"focusin",s),i=Gt(r,"focusout",s);return()=>{l(),i()}}))}get current(){return this.#t?.(),this.#e?Co(this.#e):null}}new Ao;class Do{#e;#t;constructor(t){this.#e=t,this.#t=Symbol(t)}get key(){return this.#t}exists(){return mr(this.#t)}get(){const t=xn(this.#t);if(t===void 0)throw new Error(`Context "${this.#e}" not found`);return t}getOr(t){const r=xn(this.#t);return r===void 0?t:r}set(t){return gr(this.#t,t)}}const Lo=new Do("<Toaster/>");function Re(n){return n.label!==void 0}function No(){let n=V(ce(typeof document<"u"?document.hidden:!1));return Ht(()=>Gt(document,"visibilitychange",()=>{d(n,document.hidden,!0)})),{get current(){return e(n)}}}const Ln=4e3,Oo=14,zo=45,Ro=200,Ho=.05,Fo={toast:"",title:"",description:"",loader:"",closeButton:"",cancelButton:"",actionButton:"",action:"",warning:"",error:"",success:"",default:"",info:"",loading:""};function jo(n){const[t,r]=n.split("-"),o=[];return t&&o.push(t),r&&o.push(r),o}function Nn(n){return 1/(1.5+Math.abs(n)/20)}var Vo=M("<div><!></div>"),Uo=(n,t,r,o,s)=>{e(t)||!e(r)||(o(),s.toast.onDismiss?.(s.toast))},Wo=M('<button data-close-button=""><!></button>'),Ko=M('<div data-icon=""><!> <!></div>'),qo=M('<div data-description=""><!></div>'),Yo=(n,t,r,o)=>{Re(t.toast.cancel)&&e(r)&&(t.toast.cancel?.onClick?.(n),o())},Go=M('<button data-button="" data-cancel=""> </button>'),Jo=(n,t,r)=>{Re(t.toast.action)&&(t.toast.action?.onClick(n),!n.defaultPrevented&&r())},Qo=M('<button data-button=""> </button>'),Xo=M('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>',1),Zo=M('<li data-sonner-toast=""><!> <!></li>');function $o(n,t){Z(t,!0);const r=y=>{var k=g(),L=u(k);{var H=N=>{var ht=Vo(),te=U(ht);Q(te,()=>t.loadingIcon),F(ht),ut(de=>{Kt(ht,1,de),z(ht,"data-visible",e(p)==="loading")},[()=>Wt(Ut(e(it)?.loader,t.toast?.classes?.loader,"sonner-loader"))]),a(N,ht)},W=N=>{{let ht=b(()=>Ut(e(it)?.loader,t.toast.classes?.loader)),te=b(()=>e(p)==="loading");ko(N,{get class(){return e(ht)},get visible(){return e(te)}})}};S(L,N=>{t.loadingIcon?N(H):N(W,!1)})}a(y,k)};let o=B(t,"cancelButtonStyle",3,""),s=B(t,"actionButtonStyle",3,""),l=B(t,"descriptionClass",3,""),i=B(t,"unstyled",3,!1),c=B(t,"defaultRichColors",3,!1);const _={...Fo};let w=V(!1),m=V(!1),E=V(!1),dt=V(!1),q=V(!1),T=V(0),K=V(0),tt=t.toast.duration||t.duration||Ln,j=V(void 0),R=V(null),Y=V(null);const Nt=b(()=>t.index===0),jt=b(()=>t.index+1<=t.visibleToasts),p=b(()=>t.toast.type),et=b(()=>t.toast.dismissable!==!1),ft=b(()=>t.toast.class||""),bt=b(()=>t.toast.descriptionClass||""),st=b(()=>gt.heights.findIndex(y=>y.toastId===t.toast.id)||0),_t=b(()=>t.toast.closeButton??t.closeButton),Mt=b(()=>t.toast.duration??t.duration??Ln);let xt=null;const Jt=b(()=>t.position.split("-")),Qt=b(()=>gt.heights.reduce((y,k,L)=>L>=e(st)?y:y+k.height,0)),Xt=No(),pt=b(()=>t.toast.invert||t.invert),Tt=b(()=>e(p)==="loading"),it=b(()=>({..._,...t.classes})),vt=b(()=>t.toast.title),It=b(()=>t.toast.description);let lt=V(0),Et=V(0);const f=b(()=>Math.round(e(st)*Oo+e(Qt)));Ht(()=>{e(vt),e(It);let y;t.expanded||t.expandByDefault?y=1:y=1-t.index*Ho;const k=Dt(()=>e(j));if(k===void 0)return;k.style.setProperty("height","auto");const L=k.offsetHeight,H=k.getBoundingClientRect().height,W=Math.round(H/y+Number.EPSILON&100)/100;k.style.removeProperty("height");let N;Math.abs(W-L)<1?N=W:N=L,d(K,N,!0),Dt(()=>{gt.setHeight({toastId:t.toast.id,height:N})})});function I(){d(m,!0),d(T,e(f),!0),gt.removeHeight(t.toast.id),setTimeout(()=>{gt.remove(t.toast.id)},Ro)}let ct;const J=b(()=>t.toast.promise&&e(p)==="loading"||t.toast.duration===Number.POSITIVE_INFINITY);function St(){d(lt,new Date().getTime(),!0),ct=setTimeout(()=>{t.toast.onAutoClose?.(t.toast),I()},tt)}function ue(){if(e(Et)<e(lt)){const y=new Date().getTime()-e(lt);tt=tt-y}d(Et,new Date().getTime(),!0)}Ht(()=>{t.toast.updated&&(clearTimeout(ct),tt=e(Mt),St())}),Ht(()=>(e(J)||(t.expanded||t.interacting||Xt.current?ue():St()),()=>clearTimeout(ct))),Fe(()=>{d(w,!0);const y=e(j)?.getBoundingClientRect().height;return d(K,y,!0),gt.setHeight({toastId:t.toast.id,height:y}),()=>{gt.removeHeight(t.toast.id)}}),Ht(()=>{t.toast.delete&&Dt(()=>{I(),t.toast.onDismiss?.(t.toast)})});const Ve=y=>{if(e(Tt))return;d(T,e(f),!0);const k=y.target;k.setPointerCapture(y.pointerId),k.tagName!=="BUTTON"&&(d(E,!0),xt={x:y.clientX,y:y.clientY})},Me=()=>{if(e(dt)||!e(et))return;xt=null;const y=Number(e(j)?.style.getPropertyValue("--swipe-amount-x").replace("px","")||0),k=Number(e(j)?.style.getPropertyValue("--swipe-amount-y").replace("px","")||0),L=new Date().getTime()-0,H=e(R)==="x"?y:k,W=Math.abs(H)/L;if(Math.abs(H)>=zo||W>.11){d(T,e(f),!0),t.toast.onDismiss?.(t.toast),e(R)==="x"?d(Y,y>0?"right":"left",!0):d(Y,k>0?"down":"up",!0),I(),d(dt,!0);return}else e(j)?.style.setProperty("--swipe-amount-x","0px"),e(j)?.style.setProperty("--swipe-amount-y","0px");d(q,!1),d(E,!1),d(R,null)},Ot=y=>{if(!xt||!e(et)||(window.getSelection()?.toString().length??-1)>0)return;const L=y.clientY-xt.y,H=y.clientX-xt.x,W=t.swipeDirections??jo(t.position);!e(R)&&(Math.abs(H)>1||Math.abs(L)>1)&&d(R,Math.abs(H)>Math.abs(L)?"x":"y",!0);let N={x:0,y:0};if(e(R)==="y"){if(W.includes("top")||W.includes("bottom"))if(W.includes("top")&&L<0||W.includes("bottom")&&L>0)N.y=L;else{const ht=L*Nn(L);N.y=Math.abs(ht)<Math.abs(L)?ht:L}}else if(e(R)==="x"&&(W.includes("left")||W.includes("right")))if(W.includes("left")&&H<0||W.includes("right")&&H>0)N.x=H;else{const ht=H*Nn(H);N.x=Math.abs(ht)<Math.abs(H)?ht:H}(Math.abs(N.x)>0||Math.abs(N.y)>0)&&d(q,!0),e(j)?.style.setProperty("--swipe-amount-x",`${N.x}px`),e(j)?.style.setProperty("--swipe-amount-y",`${N.y}px`)},Vt=()=>{d(E,!1),d(R,null),xt=null},Pt=b(()=>t.toast.icon?t.toast.icon:e(p)==="success"?t.successIcon:e(p)==="error"?t.errorIcon:e(p)==="warning"?t.warningIcon:e(p)==="info"?t.infoIcon:e(p)==="loading"?t.loadingIcon:null);var P=Zo();z(P,"tabindex",0);let Ee;P.__pointermove=Ot,P.__pointerup=Me,P.__pointerdown=Ve;var Ue=U(P);{var We=y=>{var k=Wo();k.__click=[Uo,Tt,et,I,t];var L=U(k);Q(L,()=>t.closeIcon??at),F(k),ut(H=>{z(k,"aria-label",t.closeButtonAriaLabel),z(k,"data-disabled",e(Tt)),Kt(k,1,H)},[()=>Wt(Ut(e(it)?.closeButton,t.toast?.classes?.closeButton))]),a(y,k)};S(Ue,y=>{e(_t)&&!t.toast.component&&e(p)!=="loading"&&t.closeIcon!==null&&y(We)})}var Ke=C(Ue,2);{var qe=y=>{const k=b(()=>t.toast.component);var L=g(),H=u(L);ee(H,()=>e(k),(W,N)=>{N(W,Lt(()=>t.toast.componentProps,{closeToast:I}))}),a(y,L)},Ye=y=>{var k=Xo(),L=u(k);{var H=A=>{var v=Ko(),x=U(v);{var O=D=>{var rt=g(),wt=u(rt);{var ot=mt=>{var Bt=g(),fe=u(Bt);ee(fe,()=>t.toast.icon,(ve,he)=>{he(ve,{})}),a(mt,Bt)},G=mt=>{r(mt)};S(wt,mt=>{t.toast.icon?mt(ot):mt(G,!1)})}a(D,rt)};S(x,D=>{(t.toast.promise||e(p)==="loading")&&D(O)})}var nt=C(x,2);{var h=D=>{var rt=g(),wt=u(rt);{var ot=mt=>{var Bt=g(),fe=u(Bt);ee(fe,()=>t.toast.icon,(ve,he)=>{he(ve,{})}),a(mt,Bt)},G=mt=>{var Bt=g(),fe=u(Bt);{var ve=se=>{var me=g(),Je=u(me);Q(Je,()=>t.successIcon??at),a(se,me)},he=se=>{var me=g(),Je=u(me);{var $n=ie=>{var ge=g(),Qe=u(ge);Q(Qe,()=>t.errorIcon??at),a(ie,ge)},tr=ie=>{var ge=g(),Qe=u(ge);{var er=le=>{var _e=g(),Xe=u(_e);Q(Xe,()=>t.warningIcon??at),a(le,_e)},nr=le=>{var _e=g(),Xe=u(_e);{var rr=Ze=>{var gn=g(),or=u(gn);Q(or,()=>t.infoIcon??at),a(Ze,gn)};S(Xe,Ze=>{e(p)==="info"&&Ze(rr)},!0)}a(le,_e)};S(Qe,le=>{e(p)==="warning"?le(er):le(nr,!1)},!0)}a(ie,ge)};S(Je,ie=>{e(p)==="error"?ie($n):ie(tr,!1)},!0)}a(se,me)};S(fe,se=>{e(p)==="success"?se(ve):se(he,!1)},!0)}a(mt,Bt)};S(wt,mt=>{t.toast.icon?mt(ot):mt(G,!1)})}a(D,rt)};S(nt,D=>{t.toast.type!=="loading"&&D(h)})}F(v),ut(D=>Kt(v,1,D),[()=>Wt(Ut(e(it)?.icon,t.toast?.classes?.icon))]),a(A,v)};S(L,A=>{(e(p)||t.toast.icon||t.toast.promise)&&t.toast.icon!==null&&(e(Pt)!==null||t.toast.icon)&&A(H)})}var W=C(L,2),N=U(W),ht=U(N);{var te=A=>{var v=g(),x=u(v);{var O=h=>{const D=b(()=>t.toast.title);var rt=g(),wt=u(rt);ee(wt,()=>e(D),(ot,G)=>{G(ot,Lt(()=>t.toast.componentProps))}),a(h,rt)},nt=h=>{var D=Yt();ut(()=>pe(D,t.toast.title)),a(h,D)};S(x,h=>{typeof t.toast.title!="string"?h(O):h(nt,!1)})}a(A,v)};S(ht,A=>{t.toast.title&&A(te)})}F(N);var de=C(N,2);{var Ge=A=>{var v=qo(),x=U(v);{var O=h=>{const D=b(()=>t.toast.description);var rt=g(),wt=u(rt);ee(wt,()=>e(D),(ot,G)=>{G(ot,Lt(()=>t.toast.componentProps))}),a(h,rt)},nt=h=>{var D=Yt();ut(()=>pe(D,t.toast.description)),a(h,D)};S(x,h=>{typeof t.toast.description!="string"?h(O):h(nt,!1)})}F(v),ut(h=>Kt(v,1,h),[()=>Wt(Ut(l(),e(bt),e(it)?.description,t.toast.classes?.description))]),a(A,v)};S(de,A=>{t.toast.description&&A(Ge)})}F(W);var kt=C(W,2);{var yt=A=>{var v=g(),x=u(v);{var O=h=>{var D=g(),rt=u(D);ee(rt,()=>t.toast.cancel,(wt,ot)=>{ot(wt,{})}),a(h,D)},nt=h=>{var D=g(),rt=u(D);{var wt=ot=>{var G=Go();G.__click=[Yo,t,et,I];var mt=U(G,!0);F(G),ut(Bt=>{$e(G,t.toast.cancelButtonStyle??o()),Kt(G,1,Bt),pe(mt,t.toast.cancel.label)},[()=>Wt(Ut(e(it)?.cancelButton,t.toast?.classes?.cancelButton))]),a(ot,G)};S(rt,ot=>{Re(t.toast.cancel)&&ot(wt)},!0)}a(h,D)};S(x,h=>{typeof t.toast.cancel=="function"?h(O):h(nt,!1)})}a(A,v)};S(kt,A=>{t.toast.cancel&&A(yt)})}var Ct=C(kt,2);{var At=A=>{var v=g(),x=u(v);{var O=h=>{var D=g(),rt=u(D);ee(rt,()=>t.toast.action,(wt,ot)=>{ot(wt,{})}),a(h,D)},nt=h=>{var D=g(),rt=u(D);{var wt=ot=>{var G=Qo();G.__click=[Jo,t,I];var mt=U(G,!0);F(G),ut(Bt=>{$e(G,t.toast.actionButtonStyle??s()),Kt(G,1,Bt),pe(mt,t.toast.action.label)},[()=>Wt(Ut(e(it)?.actionButton,t.toast?.classes?.actionButton))]),a(ot,G)};S(rt,ot=>{Re(t.toast.action)&&ot(wt)},!0)}a(h,D)};S(x,h=>{typeof t.toast.action=="function"?h(O):h(nt,!1)})}a(A,v)};S(Ct,A=>{t.toast.action&&A(At)})}ut(A=>Kt(N,1,A),[()=>Wt(Ut(e(it)?.title,t.toast?.classes?.title))]),a(y,k)};S(Ke,y=>{t.toast.component?y(qe):y(Ye,!1)})}F(P),fn(P,y=>d(j,y),()=>e(j)),ut((y,k,L,H)=>{Kt(P,1,y),z(P,"data-rich-colors",t.toast.richColors??c()),z(P,"data-styled",!(t.toast.component||t.toast.unstyled||i())),z(P,"data-mounted",e(w)),z(P,"data-promise",k),z(P,"data-swiped",e(q)),z(P,"data-removed",e(m)),z(P,"data-visible",e(jt)),z(P,"data-y-position",e(Jt)[0]),z(P,"data-x-position",e(Jt)[1]),z(P,"data-index",t.index),z(P,"data-front",e(Nt)),z(P,"data-swiping",e(E)),z(P,"data-dismissable",e(et)),z(P,"data-type",e(p)),z(P,"data-invert",e(pt)),z(P,"data-swipe-out",e(dt)),z(P,"data-swipe-direction",e(Y)),z(P,"data-expanded",L),Ee=$e(P,`${t.style} ${t.toast.style}`,Ee,H)},[()=>Wt(Ut(t.class,e(ft),e(it)?.toast,t.toast?.classes?.toast,e(it)?.[e(p)],t.toast?.classes?.[e(p)])),()=>!!t.toast.promise,()=>!!(t.expanded||t.expandByDefault&&e(w)),()=>({"--index":t.index,"--toasts-before":t.index,"--z-index":gt.toasts.length-t.index,"--offset":`${e(m)?e(T):e(f)}px`,"--initial-height":t.expandByDefault?"auto":`${e(K)}px`})]),sr("dragend",P,Vt),a(n,P),$()}ir(["pointermove","pointerup","pointerdown","click"]);var ta=Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');function ea(n){var t=ta();a(n,t)}var na=Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');function ra(n){var t=na();a(n,t)}var oa=Se('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');function aa(n){var t=oa();a(n,t)}var sa=Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');function ia(n){var t=sa();a(n,t)}var la=Se('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');function ca(n){var t=la();a(n,t)}const ua=3,Qn="24px",Xn="16px",da=4e3,fa=356,va=14,rn="dark",De="light";function ha(n,t){const r={};return[n,t].forEach((o,s)=>{const l=s===1,i=l?"--mobile-offset":"--offset",c=l?Xn:Qn;function _(w){["top","right","bottom","left"].forEach(m=>{r[`${i}-${m}`]=typeof w=="number"?`${w}px`:w})}typeof o=="number"||typeof o=="string"?_(o):typeof o=="object"?["top","right","bottom","left"].forEach(w=>{const m=o[w];m===void 0?r[`${i}-${w}`]=c:r[`${i}-${w}`]=typeof m=="number"?`${m}px`:m}):_(c)}),r}var ma=M("<ol></ol>"),ga=M('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-nbs0zk"><!></section>');function _a(n,t){Z(t,!0);function r(f){return f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?rn:De}let o=B(t,"invert",3,!1),s=B(t,"position",3,"bottom-right"),l=B(t,"hotkey",19,()=>["altKey","KeyT"]),i=B(t,"expand",3,!1),c=B(t,"closeButton",3,!1),_=B(t,"offset",3,Qn),w=B(t,"mobileOffset",3,Xn),m=B(t,"theme",3,"light"),E=B(t,"richColors",3,!1),dt=B(t,"duration",3,da),q=B(t,"visibleToasts",3,ua),T=B(t,"toastOptions",19,()=>({})),K=B(t,"dir",7,"auto"),tt=B(t,"gap",3,va),j=B(t,"containerAriaLabel",3,"Notifications"),R=B(t,"closeButtonAriaLabel",3,"Close toast"),Y=Ft(t,["$$slots","$$events","$$legacy","invert","position","hotkey","expand","closeButton","offset","mobileOffset","theme","richColors","duration","visibleToasts","toastOptions","dir","gap","loadingIcon","successIcon","errorIcon","warningIcon","closeIcon","infoIcon","containerAriaLabel","class","closeButtonAriaLabel","onblur","onfocus","onmouseenter","onmousemove","onmouseleave","ondragend","onpointerdown","onpointerup"]);function Nt(){if(K()!=="auto")return K();if(typeof window>"u"||typeof document>"u")return"ltr";const f=document.documentElement.getAttribute("dir");return f==="auto"||!f?(Dt(()=>K(window.getComputedStyle(document.documentElement).direction??"ltr")),K()):(Dt(()=>K(f)),f)}const jt=b(()=>Array.from(new Set([s(),...gt.toasts.filter(f=>f.position).map(f=>f.position)].filter(Boolean))));let p=V(!1),et=V(!1),ft=V(ce(r(m()))),bt=V(void 0),st=V(null),_t=V(!1);const Mt=b(()=>l().join("+").replace(/Key/g,"").replace(/Digit/g,""));Ht(()=>{gt.toasts.length<=1&&d(p,!1)}),Ht(()=>{const f=gt.toasts.filter(I=>I.dismiss&&!I.delete);if(f.length>0){const I=gt.toasts.map(ct=>f.find(St=>St.id===ct.id)?{...ct,delete:!0}:ct);gt.toasts=I}}),Ht(()=>()=>{e(bt)&&e(st)&&(e(st).focus({preventScroll:!0}),d(st,null),d(_t,!1))}),Fe(()=>(gt.reset(),Gt(document,"keydown",I=>{l().every(J=>I[J]||I.code===J)&&(d(p,!0),e(bt)?.focus()),I.code==="Escape"&&(document.activeElement===e(bt)||e(bt)?.contains(document.activeElement))&&d(p,!1)}))),Ht(()=>{if(m()!=="system"&&d(ft,m()),typeof window<"u"){m()==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?d(ft,rn):d(ft,De));const f=window.matchMedia("(prefers-color-scheme: dark)"),I=({matches:ct})=>{d(ft,ct?rn:De,!0)};"addEventListener"in f?f.addEventListener("change",I):f.addListener(I)}});const xt=f=>{t.onblur?.(f),e(_t)&&!f.currentTarget.contains(f.relatedTarget)&&(d(_t,!1),e(st)&&(e(st).focus({preventScroll:!0}),d(st,null)))},Jt=f=>{t.onfocus?.(f),!(f.target instanceof HTMLElement&&f.target.dataset.dismissable==="false")&&(e(_t)||(d(_t,!0),d(st,f.relatedTarget,!0)))},Qt=f=>{t.onpointerdown?.(f),!(f.target instanceof HTMLElement&&f.target.dataset.dismissable==="false")&&d(et,!0)},Xt=f=>{t.onmouseenter?.(f),d(p,!0)},pt=f=>{t.onmouseleave?.(f),e(et)||d(p,!1)},Tt=f=>{t.onmousemove?.(f),d(p,!0)},it=f=>{t.ondragend?.(f),d(p,!1)},vt=f=>{t.onpointerup?.(f),d(et,!1)};Lo.set(new br);var It=ga();z(It,"tabindex",-1);var lt=U(It);{var Et=f=>{var I=g(),ct=u(I);an(ct,18,()=>e(jt),J=>J,(J,St,ue,Ve)=>{const Me=b(()=>{const[Pt,P]=St.split("-");return{y:Pt,x:P}}),Ot=b(()=>ha(_(),w()));var Vt=ma();zn(Vt,(Pt,P)=>({tabindex:-1,dir:Pt,class:t.class,"data-sonner-toaster":!0,"data-sonner-theme":e(ft),"data-y-position":e(Me).y,"data-x-position":e(Me).x,style:t.style,onblur:xt,onfocus:Jt,onmouseenter:Xt,onmousemove:Tt,onmouseleave:pt,ondragend:it,onpointerdown:Qt,onpointerup:vt,...Y,[xr]:P}),[Nt,()=>({"--front-toast-height":`${gt.heights[0]?.height}px`,"--width":`${fa}px`,"--gap":`${tt()}px`,"--offset-top":e(Ot)["--offset-top"],"--offset-right":e(Ot)["--offset-right"],"--offset-bottom":e(Ot)["--offset-bottom"],"--offset-left":e(Ot)["--offset-left"],"--mobile-offset-top":e(Ot)["--mobile-offset-top"],"--mobile-offset-right":e(Ot)["--mobile-offset-right"],"--mobile-offset-bottom":e(Ot)["--mobile-offset-bottom"],"--mobile-offset-left":e(Ot)["--mobile-offset-left"]})],void 0,"svelte-nbs0zk"),an(Vt,23,()=>gt.toasts.filter(Pt=>!Pt.position&&e(ue)===0||Pt.position===St),Pt=>Pt.id,(Pt,P,Ee,Ue)=>{{const We=kt=>{var yt=g(),Ct=u(yt);{var At=v=>{var x=g(),O=u(x);Q(O,()=>t.successIcon??at),a(v,x)},A=v=>{var x=g(),O=u(x);{var nt=h=>{ea(h)};S(O,h=>{t.successIcon!==null&&h(nt)},!0)}a(v,x)};S(Ct,v=>{t.successIcon?v(At):v(A,!1)})}a(kt,yt)},Ke=kt=>{var yt=g(),Ct=u(yt);{var At=v=>{var x=g(),O=u(x);Q(O,()=>t.errorIcon??at),a(v,x)},A=v=>{var x=g(),O=u(x);{var nt=h=>{ra(h)};S(O,h=>{t.errorIcon!==null&&h(nt)},!0)}a(v,x)};S(Ct,v=>{t.errorIcon?v(At):v(A,!1)})}a(kt,yt)},qe=kt=>{var yt=g(),Ct=u(yt);{var At=v=>{var x=g(),O=u(x);Q(O,()=>t.warningIcon??at),a(v,x)},A=v=>{var x=g(),O=u(x);{var nt=h=>{aa(h)};S(O,h=>{t.warningIcon!==null&&h(nt)},!0)}a(v,x)};S(Ct,v=>{t.warningIcon?v(At):v(A,!1)})}a(kt,yt)},Ye=kt=>{var yt=g(),Ct=u(yt);{var At=v=>{var x=g(),O=u(x);Q(O,()=>t.infoIcon??at),a(v,x)},A=v=>{var x=g(),O=u(x);{var nt=h=>{ia(h)};S(O,h=>{t.infoIcon!==null&&h(nt)},!0)}a(v,x)};S(Ct,v=>{t.infoIcon?v(At):v(A,!1)})}a(kt,yt)},y=kt=>{var yt=g(),Ct=u(yt);{var At=v=>{var x=g(),O=u(x);Q(O,()=>t.closeIcon??at),a(v,x)},A=v=>{var x=g(),O=u(x);{var nt=h=>{ca(h)};S(O,h=>{t.closeIcon!==null&&h(nt)},!0)}a(v,x)};S(Ct,v=>{t.closeIcon?v(At):v(A,!1)})}a(kt,yt)};let k=b(()=>T()?.duration??dt()),L=b(()=>T()?.class??""),H=b(()=>T()?.descriptionClass||""),W=b(()=>T()?.style??""),N=b(()=>T().classes||{}),ht=b(()=>T().unstyled??!1),te=b(()=>T()?.cancelButtonStyle??""),de=b(()=>T()?.actionButtonStyle??""),Ge=b(()=>T()?.closeButtonAriaLabel??R());$o(Pt,{get index(){return e(Ee)},get toast(){return e(P)},get defaultRichColors(){return E()},get duration(){return e(k)},get class(){return e(L)},get descriptionClass(){return e(H)},get invert(){return o()},get visibleToasts(){return q()},get closeButton(){return c()},get interacting(){return e(et)},get position(){return St},get style(){return e(W)},get classes(){return e(N)},get unstyled(){return e(ht)},get cancelButtonStyle(){return e(te)},get actionButtonStyle(){return e(de)},get closeButtonAriaLabel(){return e(Ge)},get expandByDefault(){return i()},get expanded(){return e(p)},get loadingIcon(){return t.loadingIcon},successIcon:We,errorIcon:Ke,warningIcon:qe,infoIcon:Ye,closeIcon:y,$$slots:{successIcon:!0,errorIcon:!0,warningIcon:!0,infoIcon:!0,closeIcon:!0}})}}),F(Vt),fn(Vt,Pt=>d(bt,Pt),()=>e(bt)),ut(()=>Vt.dir=Vt.dir),a(J,Vt)}),a(f,I)};S(lt,f=>{gt.toasts.length>0&&f(Et)})}F(It),ut(()=>z(It,"aria-label",`${j()??""} ${e(Mt)??""}`)),a(n,It),$()}function ya(n,t){Z(t,!0);let r=Ft(t,["$$slots","$$events","$$legacy"]);_a(n,Lt({get theme(){return mn.current},class:"toaster group",style:"--normal-bg: var(--color-popover); --normal-text: var(--color-popover-foreground); --normal-border: var(--color-border);"},()=>r)),$()}function wa(n,t){Z(t,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let r=Ft(t,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];ae(n,Lt({name:"book-open"},()=>r,{get iconNode(){return o},children:(s,l)=>{var i=g(),c=u(i);Q(c,()=>t.children??at),a(s,i)},$$slots:{default:!0}})),$()}function ba(n,t){Z(t,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let r=Ft(t,["$$slots","$$events","$$legacy"]);const o=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];ae(n,Lt({name:"calculator"},()=>r,{get iconNode(){return o},children:(s,l)=>{var i=g(),c=u(i);Q(c,()=>t.children??at),a(s,i)},$$slots:{default:!0}})),$()}function xa(n,t){Z(t,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let r=Ft(t,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];ae(n,Lt({name:"cog"},()=>r,{get iconNode(){return o},children:(s,l)=>{var i=g(),c=u(i);Q(c,()=>t.children??at),a(s,i)},$$slots:{default:!0}})),$()}function Ta(n,t){Z(t,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let r=Ft(t,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];ae(n,Lt({name:"download"},()=>r,{get iconNode(){return o},children:(s,l)=>{var i=g(),c=u(i);Q(c,()=>t.children??at),a(s,i)},$$slots:{default:!0}})),$()}function Ia(n,t){Z(t,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let r=Ft(t,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];ae(n,Lt({name:"github"},()=>r,{get iconNode(){return o},children:(s,l)=>{var i=g(),c=u(i);Q(c,()=>t.children??at),a(s,i)},$$slots:{default:!0}})),$()}function Sa(n,t){Z(t,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let r=Ft(t,["$$slots","$$events","$$legacy"]);const o=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ae(n,Lt({name:"info"},()=>r,{get iconNode(){return o},children:(s,l)=>{var i=g(),c=u(i);Q(c,()=>t.children??at),a(s,i)},$$slots:{default:!0}})),$()}function Pa(n,t){Z(t,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let r=Ft(t,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 2v2"}],["path",{d:"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"}],["path",{d:"M16 12a4 4 0 0 0-4-4"}],["path",{d:"m19 5-1.256 1.256"}],["path",{d:"M20 12h2"}]];ae(n,Lt({name:"sun-moon"},()=>r,{get iconNode(){return o},children:(s,l)=>{var i=g(),c=u(i);Q(c,()=>t.children??at),a(s,i)},$$slots:{default:!0}})),$()}var Ma=M("<div><!></div>");function Zn(n,t){Z(t,!0);let r=B(t,"ref",15,null),o=Ft(t,["$$slots","$$events","$$legacy","ref","class","children"]);var s=Ma();zn(s,i=>({"data-slot":"dialog-footer",class:i,...o}),[()=>Tr("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",t.class)]);var l=U(s);Q(l,()=>t.children??at),F(s),fn(s,i=>r(i),()=>r()),a(n,s),$()}var Ea=M("<!> <!>",1),pa=M("Interval <!>",1),ka=M("<!> <!>",1),Ba=M("<!> <!>",1),Ca=M("<!> <!> <!>",1),Aa=M("<!> <!>",1),Da=M('<div class="flex flex-row gap-4"><!> <!> <!></div>'),La=M("<!> <!>",1),Na=M("<div><!> <!></div>");function Oa(n,t){Z(t,!1);let r=oe(!1),o=oe(pn),s=oe(ye),l,i=null;function c(T){const K=[["rpcs",Te],["callAbis",Sn],["txAbis",In],["testKeys",Tn]];for(const[tt,j]of K){const R=T[tt];R&&j.set(R)}}function _(){if(!e(o)||e(o)<tn){Ce.warning(`invalid depth: depth must be at least ${tn}`);return}if(!e(s)||e(s)<ye){Ce.warning(`invalid interval: interval must be at least ${ye}`);return}Mn.set(e(o)),En.set(e(s)),l&&c(l),d(r,!1),Ce.info("successfully saved")}function w(T){if(i=T.target.files?.[0]??null,i){const tt=new FileReader;tt.onload=j=>{Pn(()=>{const R=j.target?.result;if(typeof R=="string")l=JSON.parse(R);else throw new Error("invalid file content")})},tt.readAsText(i)}}function m(){const T={rpcs:Te.get(),callAbis:Sn.get(),txAbis:In.get(),testKeys:Tn.get()};Pn(()=>{const K=JSON.stringify(T,null,2),tt=new Blob([K],{type:"application/json"}),j=URL.createObjectURL(tt),R=document.createElement("a");R.href=j,R.download=`env_${Date.now()}.json`,R.click(),URL.revokeObjectURL(j)})}_r(()=>(e(r),Ir),()=>{e(r)&&(d(o,Mn.get()),d(s,En.get()))}),yr(),je();var E=Na(),dt=U(E);qt(dt,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{d(r,!0)},children:(T,K)=>{xa(T,{})},$$slots:{default:!0}});var q=C(dt,2);Fn(q,{get open(){return e(r)},set open(T){d(r,T)},children:(T,K)=>{jn(T,{children:(tt,j)=>{var R=La(),Y=u(R);Vn(Y,{children:(jt,p)=>{var et=Aa(),ft=u(et);Un(ft,{children:(st,_t)=>{Zt();var Mt=Yt("Setting");a(st,Mt)},$$slots:{default:!0}});var bt=C(ft,2);Wn(bt,{children:(st,_t)=>{Rn(st,{children:(Mt,xt)=>{Hn(Mt,{children:(Jt,Qt)=>{var Xt=Ca(),pt=u(Xt);be(pt,{children:(vt,It)=>{var lt=Ea(),Et=u(lt);Rt(Et,{children:(I,ct)=>{Zt();var J=Yt("Depth");a(I,J)},$$slots:{default:!0}});var f=C(Et,2);Rt(f,{children:(I,ct)=>{{let J=on(()=>(Be(Ae),Dt(()=>pn.toString())));xe(I,{type:"number",get min(){return Be(Ae),Dt(()=>tn)},get placeholder(){return e(J)},get value(){return e(o)},set value(St){d(o,St)},$$legacy:!0})}},$$slots:{default:!0}}),a(vt,lt)},$$slots:{default:!0}});var Tt=C(pt,2);be(Tt,{children:(vt,It)=>{var lt=ka(),Et=u(lt);Rt(Et,{children:(I,ct)=>{Zt();var J=pa(),St=C(u(J));qt(St,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{Ce.info("effective only for http/https rpc endpoints",{class:"whitespace-pre-line"})},children:(ue,Ve)=>{Sa(ue,{})},$$slots:{default:!0}}),a(I,J)},$$slots:{default:!0}});var f=C(Et,2);Rt(f,{children:(I,ct)=>{{let J=on(()=>(Be(Ae),Dt(()=>`${ye.toString()} ms`)));xe(I,{type:"number",get min(){return Be(Ae),Dt(()=>ye)},get placeholder(){return e(J)},get value(){return e(s)},set value(St){d(s,St)},$$legacy:!0})}},$$slots:{default:!0}}),a(vt,lt)},$$slots:{default:!0}});var it=C(Tt,2);be(it,{children:(vt,It)=>{var lt=Ba(),Et=u(lt);Rt(Et,{children:(I,ct)=>{Zt();var J=Yt("Environment");a(I,J)},$$slots:{default:!0}});var f=C(Et,2);Rt(f,{children:(I,ct)=>{xe(I,{type:"file",class:"cursor-pointer",onchange:w})},$$slots:{default:!0}}),a(vt,lt)},$$slots:{default:!0}}),a(Jt,Xt)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),a(jt,et)},$$slots:{default:!0}});var Nt=C(Y,2);Zn(Nt,{children:(jt,p)=>{var et=Da(),ft=U(et);qt(ft,{variant:"outline",class:"cursor-pointer",onclick:m,children:(_t,Mt)=>{Ta(_t,{})},$$slots:{default:!0}});var bt=C(ft,2);qt(bt,{class:"cursor-pointer",size:"icon",variant:"outline",get onclick(){return go},children:(_t,Mt)=>{Pa(_t,{})},$$slots:{default:!0}});var st=C(bt,2);qt(st,{class:"cursor-pointer",variant:"outline",onclick:_,children:(_t,Mt)=>{Zt();var xt=Yt("Save");a(_t,xt)},$$slots:{default:!0}}),F(et),a(jt,et)},$$slots:{default:!0}}),a(tt,R)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),F(E),a(n,E),$()}var za=M("<!> <!>",1),Ra=M("<!> <!>",1),Ha=M("<!> <!>",1),Fa=M("<!> <!>",1),ja=M("<!> <!>",1),Va=M("<div><!> <!></div>");function Ua(n,t){Z(t,!1);let r=oe(!1),o=oe("0"),s=oe("0x0000000000000000000000000000000000000000000000000000000000000000");function l(m){d(s,Sr(m.currentTarget.value,32))}function i(m){let E=m.currentTarget.value;E.startsWith("0x")||(E=`0x${E}`),d(o,Pr(E).toString())}je();var c=Va(),_=U(c);qt(_,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{d(r,!0)},children:(m,E)=>{ba(m,{})},$$slots:{default:!0}});var w=C(_,2);Fn(w,{get open(){return e(r)},set open(m){d(r,m)},children:(m,E)=>{jn(m,{children:(dt,q)=>{var T=ja(),K=u(T);Vn(K,{children:(j,R)=>{var Y=Fa(),Nt=u(Y);Un(Nt,{children:(p,et)=>{Zt();var ft=Yt("Calculator");a(p,ft)},$$slots:{default:!0}});var jt=C(Nt,2);Wn(jt,{children:(p,et)=>{Rn(p,{children:(ft,bt)=>{Hn(ft,{children:(st,_t)=>{var Mt=Ha(),xt=u(Mt);be(xt,{children:(Qt,Xt)=>{var pt=za(),Tt=u(pt);Rt(Tt,{children:(vt,It)=>{Zt();var lt=Yt("Decimal");a(vt,lt)},$$slots:{default:!0}});var it=C(Tt,2);Rt(it,{children:(vt,It)=>{xe(vt,{placeholder:"0",get value(){return e(o)},oninput:l})},$$slots:{default:!0}}),a(Qt,pt)},$$slots:{default:!0}});var Jt=C(xt,2);be(Jt,{children:(Qt,Xt)=>{var pt=Ra(),Tt=u(pt);Rt(Tt,{children:(vt,It)=>{Zt();var lt=Yt("Hex");a(vt,lt)},$$slots:{default:!0}});var it=C(Tt,2);Rt(it,{children:(vt,It)=>{xe(vt,{placeholder:"0x",get value(){return e(s)},oninput:i})},$$slots:{default:!0}}),a(Qt,pt)},$$slots:{default:!0}}),a(st,Mt)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),a(j,Y)},$$slots:{default:!0}});var tt=C(K,2);Zn(tt,{}),a(dt,T)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),F(c),a(n,c),$()}var Wa=M('<div class="flex w-full flex-row"><div class="ml-4 flex-1"><a class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">ETH UI</a></div> <div class="mr-4 flex flex-1 justify-end gap-2"><!> <!> <!></div></div>');function Ka(n,t){Z(t,!1);let r=oe("idle");Mr.subscribe(m=>{d(r,m)}),je();var o=Wa(),s=U(o),l=U(s);F(s);var i=C(s,2),c=U(i);qt(c,{variant:"ghost",size:"icon",children:(m,E)=>{{let dt=on(()=>e(r)==="processing"?"animate-spin":"");Lr(m,{get class(){return e(dt)}})}},$$slots:{default:!0}});var _=C(c,2);Ua(_,{});var w=C(_,2);Oa(w,{}),F(i),F(o),ut(m=>z(l,"href",m),[()=>Er("/")]),a(n,o),$()}var qa=M('<div class="grid w-full grid-cols-3 items-center"><div></div> <p class="text-center">© 2025 code0xff</p> <div class="mr-4 flex justify-end gap-4"><!> <!></div></div>');function Ya(n,t){Z(t,!1),je();var r=qa(),o=C(U(r),4),s=U(o);qt(s,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(pr),children:(i,c)=>{wa(i,{})},$$slots:{default:!0}});var l=C(s,2);qt(l,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(kr),children:(i,c)=>{Ia(i,{})},$$slots:{default:!0}}),F(o),F(r),a(n,r),$()}var Ga=M('<link rel="icon"/>'),Ja=M('<!> <!> <div class="flex h-screen flex-col overflow-hidden"><div class="my-4 shrink-0"><!></div> <div class="flex min-h-0 flex-1 flex-col"><!></div> <div class="my-4 shrink-0"><!></div></div>',1);function cs(n,t){Z(t,!0);async function r(){let q=Ar.url.searchParams.get("rpc"),T=Te.get();q?(en.set(q),[...T,...nn].includes(q)||Te.set([...T,q])):q=en.get(),T=Te.get(),(!q||q.trim().length===0||![...T,...nn].includes(q))&&en.set(nn[0]),await Cr(),kn.set(!0)}Fe(async()=>{await Br(r,!1,async()=>{kn.set(!0)})});var o=Ja();On(q=>{var T=Ga();wr.title="ETH UI",ut(()=>z(T,"href",Hr)),a(q,T)});var s=u(o);ya(s,{position:"top-right"});var l=C(s,2);Po(l,{});var i=C(l,2),c=U(i),_=U(c);Ka(_,{}),F(c);var w=C(c,2),m=U(w);Q(m,()=>t.children??at),F(w);var E=C(w,2),dt=U(E);Ya(dt,{}),F(E),F(i),a(n,o),$()}export{cs as component,ss as universal};
