import{d as yn,e as hr,b as Ft,o as $e,c as h,a as s,f as M,g as jn,i as vr,j as mr,t as Ke,s as Dt,k as Mt,p as gr}from"../chunks/DK2X7pRa.js";import{t as ge,h as bn,d as wn,a1 as _r,aX as yr,M as pn,ak as br,aB as wr,aO as pr,aI as xr,S as kr,aC as Bt,w as We,y as Ge,u as lt,ad as Q,j as t,e as c,$ as vt,af as m,aW as dn,p as Z,f as d,a as $,s as C,ac as jt,c as Y,r as q,aQ as Ir,aR as xn,aS as Sr,n as ae,m as rt,o as Ze,k as rn,aY as Tr}from"../chunks/U8-NyKl3.js";import{P as j,l as on,L as Je,M as Qe,Q as we,R as Xe,S as Zt,s as te,U as Pr,a as qn,V as Mr,I as et,c as Cr,B as Fe,T as Vn,d as Un,e as ht,f as Le,b as St,G as It,X as kn,Y as In,Z as Sn,J as Tn,H as Pn,w as Mn,_ as Tt,A as Cn,$ as $t,a0 as xt,a1 as En,a2 as An,a3 as Er,a4 as Ar,r as Dr,a5 as Br,a6 as Rr,h as Nr,i as Dn,a7 as en,a8 as tn,j as Lr}from"../chunks/Bm46CX_i.js";import{p as Or}from"../chunks/WNTE6-jD.js";import{M as Hr,s as zr}from"../chunks/CQQSvXs1.js";import{i as P,p as x,b as Wn,s as Te,r as Ce}from"../chunks/BMAlkWzl.js";import{c as nt}from"../chunks/C4JXq3Nz.js";import{i as Ct}from"../chunks/DpuKkm1M.js";import{C as Kn,l as Fr,w as an,p as jr,S as qr,m as Bn,q as Rn,V as Vr,k as Ur,j as Wr,r as Kr,a as Ue,u as Gr}from"../chunks/pUfcpK1-.js";import{H as Yr,C as Xr,M as Jr,R as Gn,D as Yn,a as Xn,b as Jn,c as Qn}from"../chunks/ajgoo1FA.js";import{D as Zn}from"../chunks/69SCyZeM.js";import{R as Qr}from"../chunks/BQSWw1Gs.js";function Zr(r,e,n=!1,o=!1,a=!1){var l=r,i="";ge(()=>{var u=_r;if(i===(i=e()??"")){bn&&wn();return}if(u.nodes_start!==null&&(yr(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),i!==""){if(bn){pn.data;for(var g=wn(),w=g;g!==null&&(g.nodeType!==br||g.data!=="");)w=g,g=wr(g);if(g===null)throw pr(),xr;yn(pn,w),l=kr(g);return}var b=i+"";n?b=`<svg>${b}</svg>`:o&&(b=`<math>${b}</math>`);var E=hr(b);if((n||o)&&(E=Bt(E)),yn(Bt(E),E.lastChild),n||o)for(;Bt(E);)l.before(Bt(E));else l.before(E)}})}const $r=!1,eo=!0,to="always",Os=Object.freeze(Object.defineProperty({__proto__:null,prerender:eo,ssr:$r,trailingSlash:to},Symbol.toStringTag,{value:"Module"})),no=""+new URL("../assets/favicon.DDmz9QoX.ico",import.meta.url).href,$n=typeof window<"u"?window:void 0;function ro(r){let e=r.activeElement;for(;e?.shadowRoot;){const n=e.shadowRoot.activeElement;if(n===e)break;e=n}return e}let oo=class{#t;#e;constructor(e={}){const{window:n=$n,document:o=n?.document}=e;n!==void 0&&(this.#t=o,this.#e=Ft(a=>{const l=$e(n,"focusin",a),i=$e(n,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?ro(this.#t):null}};new oo;function ao(r,e){switch(r){case"post":Ge(e);break;case"pre":We(e);break}}function er(r,e,n,o={}){const{lazy:a=!1}=o;let l=!a,i=Array.isArray(r)?[]:void 0;ao(e,()=>{const u=Array.isArray(r)?r.map(w=>w()):r();if(!l){l=!0,i=u;return}const g=lt(()=>n(u,i));return i=u,g})}function fn(r,e,n){er(r,"post",e,n)}function so(r,e,n){er(r,"pre",e,n)}fn.pre=so;function io(r,e){switch(r){case"local":return e.localStorage;case"session":return e.sessionStorage}}class tr{#t;#e;#n;#r;#o;#a=Q(0);constructor(e,n,o={}){const{storage:a="local",serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:i=!0,window:u=$n}=o;if(this.#t=n,this.#e=e,this.#n=l,u===void 0)return;const g=io(a,u);this.#r=g;const w=g.getItem(e);w!==null?this.#t=this.#i(w):this.#l(n),i&&a==="local"&&(this.#o=Ft(()=>$e(u,"storage",this.#s)))}get current(){this.#o?.(),t(this.#a);const e=this.#i(this.#r?.getItem(this.#e))??this.#t,n=new WeakMap,o=a=>{if(a===null||a?.constructor.name==="Date"||typeof a!="object")return a;let l=n.get(a);return l||(l=new Proxy(a,{get:(i,u)=>(t(this.#a),o(Reflect.get(i,u))),set:(i,u,g)=>(c(this.#a,t(this.#a)+1),Reflect.set(i,u,g),this.#l(e),!0)}),n.set(a,l)),l};return o(e)}set current(e){this.#l(e),c(this.#a,t(this.#a)+1)}#s=e=>{e.key!==this.#e||e.newValue===null||(this.#t=this.#i(e.newValue),c(this.#a,t(this.#a)+1))};#i(e){try{return this.#n.deserialize(e)}catch(n){console.error(`Error when parsing "${e}" from persisted store "${this.#e}"`,n);return}}#l(e){try{e!=null&&this.#r?.setItem(this.#e,this.#n.serialize(e))}catch(n){console.error(`Error when writing value from persisted store "${this.#e}" to ${this.#r}`,n)}}}function Nn(r){return r.filter(e=>e.length>0)}const nr={getItem:r=>null,setItem:(r,e)=>{}},Et=typeof document<"u";function lo(r){return typeof r=="function"}function co(r){return r!==null&&typeof r=="object"}const Pt=Symbol("box"),hn=Symbol("is-writable");function uo(r){return co(r)&&Pt in r}function fo(r){return le.isBox(r)&&hn in r}function le(r){let e=Q(vt(r));return{[Pt]:!0,[hn]:!0,get current(){return t(e)},set current(n){c(e,n,!0)}}}function ho(r,e){const n=m(r);return e?{[Pt]:!0,[hn]:!0,get current(){return t(n)},set current(o){e(o)}}:{[Pt]:!0,get current(){return r()}}}function vo(r){return le.isBox(r)?r:lo(r)?le.with(r):le(r)}function mo(r){return Object.entries(r).reduce((e,[n,o])=>le.isBox(o)?(le.isWritableBox(o)?Object.defineProperty(e,n,{get(){return o.current},set(a){o.current=a}}):Object.defineProperty(e,n,{get(){return o.current}}),e):Object.assign(e,{[n]:o}),{})}function go(r){return le.isWritableBox(r)?{[Pt]:!0,get current(){return r.current}}:r}le.from=vo;le.with=ho;le.flatten=mo;le.readonly=go;le.isBox=uo;le.isWritableBox=fo;function _o(r,e){const n=RegExp(r,"g");return o=>{if(typeof o!="string")throw new TypeError(`expected an argument of type string, but got ${typeof o}`);return o.match(n)?o.replace(n,e):o}}const yo=_o(/[A-Z]/,r=>`-${r.toLowerCase()}`);function bo(r){if(!r||typeof r!="object"||Array.isArray(r))throw new TypeError(`expected an argument of type object, but got ${typeof r}`);return Object.keys(r).map(e=>`${yo(e)}: ${r[e]};`).join(`
`)}function wo(r={}){return bo(r).replace(`
`," ")}const po={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",transform:"translateX(-100%)"};wo(po);const xo=typeof window<"u"?window:void 0;function ko(r){let e=r.activeElement;for(;e?.shadowRoot;){const n=e.shadowRoot.activeElement;if(n===e)break;e=n}return e}let Io=class{#t;#e;constructor(e={}){const{window:n=xo,document:o=n?.document}=e;n!==void 0&&(this.#t=o,this.#e=Ft(a=>{const l=$e(n,"focusin",a),i=$e(n,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?ko(this.#t):null}};new Io;const st=le("mode-watcher-mode"),it=le("mode-watcher-theme"),So=["dark","light","system"];function sn(r){return typeof r!="string"?!1:So.includes(r)}class To{#t="system";#e=Et?localStorage:nr;#n=this.#e.getItem(st.current);#r=sn(this.#n)?this.#n:this.#t;#o=Q(vt(this.#a()));#a(e=this.#r){return new tr(st.current,e,{serializer:{serialize:n=>n,deserialize:n=>sn(n)?n:this.#t}})}constructor(){dn(()=>fn.pre(()=>st.current,(e,n)=>{const o=t(this.#o).current;c(this.#o,this.#a(o),!0),n&&localStorage.removeItem(n)}))}get current(){return t(this.#o).current}set current(e){t(this.#o).current=e}}class Po{#t=void 0;#e=!0;#n=Q(vt(this.#t));#r=typeof window<"u"&&typeof window.matchMedia=="function"?new Hr("prefers-color-scheme: light"):{current:!1};query(){Et&&c(this.#n,this.#r.current?"light":"dark",!0)}tracking(e){this.#e=e}constructor(){dn(()=>{We(()=>{this.#e&&this.query()})}),this.query=this.query.bind(this),this.tracking=this.tracking.bind(this)}get current(){return t(this.#n)}}const Lt=new To,ln=new Po;class Mo{#t=Et?localStorage:nr;#e=this.#t.getItem(it.current);#n=this.#e===null||this.#e===void 0?"":this.#e;#r=Q(vt(this.#o()));#o(e=this.#n){return new tr(it.current,e,{serializer:{serialize:n=>typeof n!="string"?"":n,deserialize:n=>n}})}constructor(){dn(()=>fn.pre(()=>it.current,(e,n)=>{const o=t(this.#r).current;c(this.#r,this.#o(o),!0),n&&localStorage.removeItem(n)}))}get current(){return t(this.#r).current}set current(e){t(this.#r).current=e}}const Nt=new Mo;let Ln,On,Hn=!1,kt=null;function Co(){return kt||(kt=document.createElement("style"),kt.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)),kt)}function rr(r,e=!1){if(typeof document>"u")return;if(!Hn){Hn=!0,r();return}if(typeof window<"u"&&window.__vitest_worker__){r();return}clearTimeout(Ln),clearTimeout(On);const o=Co(),a=()=>document.head.appendChild(o),l=()=>{o.parentNode&&document.head.removeChild(o)};function i(){r(),window.requestAnimationFrame(l)}if(typeof window.requestAnimationFrame<"u"){a(),e?i():window.requestAnimationFrame(()=>{i()});return}a(),Ln=window.setTimeout(()=>{r(),On=window.setTimeout(l,16)},16)}const ot=le(void 0),Ot=le(!0),Ht=le(!1),cn=le([]),un=le([]);function Eo(){const r=m(()=>{if(!Et)return;const e=Lt.current==="system"?ln.current:Lt.current,n=Nn(cn.current),o=Nn(un.current);function a(){const l=document.documentElement,i=document.querySelector('meta[name="theme-color"]');e==="light"?(n.length&&l.classList.remove(...n),o.length&&l.classList.add(...o),l.style.colorScheme="light",i&&ot.current&&i.setAttribute("content",ot.current.light)):(o.length&&l.classList.remove(...o),n.length&&l.classList.add(...n),l.style.colorScheme="dark",i&&ot.current&&i.setAttribute("content",ot.current.dark))}return Ot.current?rr(a,Ht.current):a(),e});return{get current(){return t(r)}}}function Ao(){const r=m(()=>{if(Nt.current,!Et)return;function e(){document.documentElement.setAttribute("data-theme",Nt.current)}return Ot.current?rr(e,lt(()=>Ht.current)):e(),Nt.current});return{get current(){return t(r)}}}const vn=Eo(),Do=Ao();function Bo(){Lt.current=vn.current==="dark"?"light":"dark"}function Ro(r){Lt.current=r}function No(r){Nt.current=r}function Lo({defaultMode:r="system",themeColors:e,darkClassNames:n=["dark"],lightClassNames:o=[],defaultTheme:a="",modeStorageKey:l="mode-watcher-mode",themeStorageKey:i="mode-watcher-theme"}){const u=document.documentElement,g=localStorage.getItem(l)??r,w=localStorage.getItem(i)??a,b=g==="light"||g==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(b?(n.length&&u.classList.remove(...n.filter(Boolean)),o.length&&u.classList.add(...o.filter(Boolean))):(o.length&&u.classList.remove(...o.filter(Boolean)),n.length&&u.classList.add(...n.filter(Boolean))),u.style.colorScheme=b?"light":"dark",e){const E=document.querySelector('meta[name="theme-color"]');E&&E.setAttribute("content",g==="light"?e.light:e.dark)}w&&(u.setAttribute("data-theme",w),localStorage.setItem(i,w)),localStorage.setItem(l,g)}var Oo=M('<meta name="theme-color"/>');function Ho(r,e){Z(e,!0);var n=h(),o=d(n);{var a=l=>{var i=Oo();ge(()=>j(i,"content",e.themeColors.dark)),s(l,i)};P(o,l=>{e.themeColors&&l(a)})}s(r,n),$()}var zo=M('<meta name="theme-color"/>'),Fo=M("<!> <!>",1);function jo(r,e){Z(e,!0);let n=x(e,"trueNonce",3,"");jn(o=>{var a=Fo(),l=d(a);{var i=g=>{var w=zo();ge(()=>j(w,"content",e.themeColors.dark)),s(g,w)};P(l,g=>{e.themeColors&&g(i)})}var u=C(l,2);Zr(u,()=>`<script${n()?` nonce=${n()}`:""}>(`+Lo.toString()+")("+JSON.stringify(e.initConfig)+");<\/script>"),s(o,a)}),$()}function qo(r,e){Z(e,!0);let n=x(e,"track",3,!0),o=x(e,"defaultMode",3,"system"),a=x(e,"disableTransitions",3,!0),l=x(e,"darkClassNames",19,()=>["dark"]),i=x(e,"lightClassNames",19,()=>[]),u=x(e,"defaultTheme",3,""),g=x(e,"nonce",3,""),w=x(e,"themeStorageKey",3,"mode-watcher-theme"),b=x(e,"modeStorageKey",3,"mode-watcher-mode"),E=x(e,"disableHeadScriptInjection",3,!1),U=x(e,"synchronousModeChanges",3,!1);st.current=b(),it.current=w(),cn.current=l(),un.current=i(),Ot.current=a(),ot.current=e.themeColors,Ht.current=U(),We(()=>{Ht.current=U()}),We(()=>{Ot.current=a()}),We(()=>{ot.current=e.themeColors}),We(()=>{cn.current=l()}),We(()=>{un.current=i()}),We(()=>{st.current=b()}),We(()=>{it.current=w()}),We(()=>{vn.current,st.current,it.current,Do.current}),jt(()=>{ln.tracking(n()),ln.query();const L=localStorage.getItem(st.current);Ro(sn(L)?L:o());const X=localStorage.getItem(it.current);No(X||u())});const S={defaultMode:o(),themeColors:e.themeColors,darkClassNames:l(),lightClassNames:i(),defaultTheme:u(),modeStorageKey:b(),themeStorageKey:w()},y=m(()=>typeof window>"u"?g():"");var ne=h(),W=d(ne);{var H=L=>{Ho(L,{get themeColors(){return ot.current}})},B=L=>{jo(L,{get trueNonce(){return t(y)},get initConfig(){return S},get themeColors(){return ot.current}})};P(W,L=>{E()?L(H):L(B,!1)})}s(r,ne),$()}const Vo=Array(12).fill(0);var Uo=M('<div class="sonner-loading-bar"></div>'),Wo=M('<div><div class="sonner-spinner"></div></div>');function Ko(r,e){Z(e,!0);var n=Wo(),o=Y(n);on(o,23,()=>Vo,(a,l)=>`spinner-bar-${l}`,(a,l)=>{var i=Uo();s(a,i)}),q(o),q(n),ge(a=>{Qe(n,1,a),j(n,"data-visible",e.visible)},[()=>Je(["sonner-loading-wrapper",e.class].filter(Boolean).join(" "))]),s(r,n),$()}const Go=typeof window<"u"?window:void 0;function Yo(r){let e=r.activeElement;for(;e?.shadowRoot;){const n=e.shadowRoot.activeElement;if(n===e)break;e=n}return e}class Xo{#t;#e;constructor(e={}){const{window:n=Go,document:o=n?.document}=e;n!==void 0&&(this.#t=o,this.#e=Ft(a=>{const l=$e(n,"focusin",a),i=$e(n,"focusout",a);return()=>{l(),i()}}))}get current(){return this.#e?.(),this.#t?Yo(this.#t):null}}new Xo;class Jo{#t;#e;constructor(e){this.#t=e,this.#e=Symbol(e)}get key(){return this.#e}exists(){return Ir(this.#e)}get(){const e=xn(this.#e);if(e===void 0)throw new Error(`Context "${this.#t}" not found`);return e}getOr(e){const n=xn(this.#e);return n===void 0?e:n}set(e){return Sr(this.#e,e)}}const Qo=new Jo("<Toaster/>");function zt(r){return r.label!==void 0}function Zo(){let r=Q(vt(typeof document<"u"?document.hidden:!1));return Ge(()=>$e(document,"visibilitychange",()=>{c(r,document.hidden,!0)})),{get current(){return t(r)}}}const zn=4e3,$o=14,ea=45,ta=200,na=.05,ra={toast:"",title:"",description:"",loader:"",closeButton:"",cancelButton:"",actionButton:"",action:"",warning:"",error:"",success:"",default:"",info:"",loading:""};function oa(r){const[e,n]=r.split("-"),o=[];return e&&o.push(e),n&&o.push(n),o}function Fn(r){return 1/(1.5+Math.abs(r)/20)}var aa=M("<div><!></div>"),sa=(r,e,n,o,a)=>{t(e)||!t(n)||(o(),a.toast.onDismiss?.(a.toast))},ia=M('<button data-close-button=""><!></button>'),la=M('<div data-icon=""><!> <!></div>'),ca=M('<div data-description=""><!></div>'),ua=(r,e,n,o)=>{zt(e.toast.cancel)&&t(n)&&(e.toast.cancel?.onClick?.(r),o())},da=M('<button data-button="" data-cancel=""> </button>'),fa=(r,e,n)=>{zt(e.toast.action)&&(e.toast.action?.onClick(r),!r.defaultPrevented&&n())},ha=M('<button data-button=""> </button>'),va=M('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>',1),ma=M('<li data-sonner-toast=""><!> <!></li>');function ga(r,e){Z(e,!0);const n=I=>{var D=h(),O=d(D);{var G=z=>{var ye=aa(),at=Y(ye);te(at,()=>e.loadingIcon),q(ye),ge(mt=>{Qe(ye,1,mt),j(ye,"data-visible",t(p)==="loading")},[()=>Je(Xe(t(_e)?.loader,e.toast?.classes?.loader,"sonner-loader"))]),s(z,ye)},ee=z=>{{let ye=m(()=>Xe(t(_e)?.loader,e.toast.classes?.loader)),at=m(()=>t(p)==="loading");Ko(z,{get class(){return t(ye)},get visible(){return t(at)}})}};P(O,z=>{e.loadingIcon?z(G):z(ee,!1)})}s(I,D)};let o=x(e,"cancelButtonStyle",3,""),a=x(e,"actionButtonStyle",3,""),l=x(e,"descriptionClass",3,""),i=x(e,"unstyled",3,!1),u=x(e,"defaultRichColors",3,!1);const g={...ra};let w=Q(!1),b=Q(!1),E=Q(!1),U=Q(!1),S=Q(!1),y=Q(0),ne=Q(0),W=e.toast.duration||e.duration||zn,H=Q(void 0),B=Q(null),L=Q(null);const X=m(()=>e.index===0),J=m(()=>e.index+1<=e.visibleToasts),p=m(()=>e.toast.type),re=m(()=>e.toast.dismissable!==!1),Me=m(()=>e.toast.class||""),ce=m(()=>e.toast.descriptionClass||""),ve=m(()=>we.heights.findIndex(I=>I.toastId===e.toast.id)||0),pe=m(()=>e.toast.closeButton??e.closeButton),je=m(()=>e.toast.duration??e.duration??zn);let me=null;const Ee=m(()=>e.position.split("-")),Ye=m(()=>we.heights.reduce((I,D,O)=>O>=t(ve)?I:I+D.height,0)),tt=Zo(),ct=m(()=>e.toast.invert||e.invert),Ae=m(()=>t(p)==="loading"),_e=m(()=>({...g,...e.classes})),De=m(()=>e.toast.title),xe=m(()=>e.toast.description);let Oe=Q(0),se=Q(0);const f=m(()=>Math.round(t(ve)*$o+t(Ye)));Ge(()=>{t(De),t(xe);let I;e.expanded||e.expandByDefault?I=1:I=1-e.index*na;const D=lt(()=>t(H));if(D===void 0)return;D.style.setProperty("height","auto");const O=D.offsetHeight,G=D.getBoundingClientRect().height,ee=Math.round(G/I+Number.EPSILON&100)/100;D.style.removeProperty("height");let z;Math.abs(ee-O)<1?z=ee:z=O,c(ne,z,!0),lt(()=>{we.setHeight({toastId:e.toast.id,height:z})})});function k(){c(b,!0),c(y,t(f),!0),we.removeHeight(e.toast.id),setTimeout(()=>{we.remove(e.toast.id)},ta)}let V;const ie=m(()=>e.toast.promise&&t(p)==="loading"||e.toast.duration===Number.POSITIVE_INFINITY);function K(){c(Oe,new Date().getTime(),!0),V=setTimeout(()=>{e.toast.onAutoClose?.(e.toast),k()},W)}function Ie(){if(t(se)<t(Oe)){const I=new Date().getTime()-t(Oe);W=W-I}c(se,new Date().getTime(),!0)}Ge(()=>{e.toast.updated&&(clearTimeout(V),W=t(je),K())}),Ge(()=>(t(ie)||(e.expanded||e.interacting||tt.current?Ie():K()),()=>clearTimeout(V))),jt(()=>{c(w,!0);const I=t(H)?.getBoundingClientRect().height;return c(ne,I,!0),we.setHeight({toastId:e.toast.id,height:I}),()=>{we.removeHeight(e.toast.id)}}),Ge(()=>{e.toast.delete&&lt(()=>{k(),e.toast.onDismiss?.(e.toast)})});const ue=I=>{if(t(Ae))return;c(y,t(f),!0);const D=I.target;D.setPointerCapture(I.pointerId),D.tagName!=="BUTTON"&&(c(E,!0),me={x:I.clientX,y:I.clientY})},qe=()=>{if(t(U)||!t(re))return;me=null;const I=Number(t(H)?.style.getPropertyValue("--swipe-amount-x").replace("px","")||0),D=Number(t(H)?.style.getPropertyValue("--swipe-amount-y").replace("px","")||0),O=new Date().getTime()-0,G=t(B)==="x"?I:D,ee=Math.abs(G)/O;if(Math.abs(G)>=ea||ee>.11){c(y,t(f),!0),e.toast.onDismiss?.(e.toast),t(B)==="x"?c(L,I>0?"right":"left",!0):c(L,D>0?"down":"up",!0),k(),c(U,!0);return}else t(H)?.style.setProperty("--swipe-amount-x","0px"),t(H)?.style.setProperty("--swipe-amount-y","0px");c(S,!1),c(E,!1),c(B,null)},Be=I=>{if(!me||!t(re)||(window.getSelection()?.toString().length??-1)>0)return;const O=I.clientY-me.y,G=I.clientX-me.x,ee=e.swipeDirections??oa(e.position);!t(B)&&(Math.abs(G)>1||Math.abs(O)>1)&&c(B,Math.abs(G)>Math.abs(O)?"x":"y",!0);let z={x:0,y:0};if(t(B)==="y"){if(ee.includes("top")||ee.includes("bottom"))if(ee.includes("top")&&O<0||ee.includes("bottom")&&O>0)z.y=O;else{const ye=O*Fn(O);z.y=Math.abs(ye)<Math.abs(O)?ye:O}}else if(t(B)==="x"&&(ee.includes("left")||ee.includes("right")))if(ee.includes("left")&&G<0||ee.includes("right")&&G>0)z.x=G;else{const ye=G*Fn(G);z.x=Math.abs(ye)<Math.abs(G)?ye:G}(Math.abs(z.x)>0||Math.abs(z.y)>0)&&c(S,!0),t(H)?.style.setProperty("--swipe-amount-x",`${z.x}px`),t(H)?.style.setProperty("--swipe-amount-y",`${z.y}px`)},Ve=()=>{c(E,!1),c(B,null),me=null},Pe=m(()=>e.toast.icon?e.toast.icon:t(p)==="success"?e.successIcon:t(p)==="error"?e.errorIcon:t(p)==="warning"?e.warningIcon:t(p)==="info"?e.infoIcon:t(p)==="loading"?e.loadingIcon:null);var A=ma();j(A,"tabindex",0);let At;A.__pointermove=Be,A.__pointerup=qe,A.__pointerdown=ue;var qt=Y(A);{var Vt=I=>{var D=ia();D.__click=[sa,Ae,re,k,e];var O=Y(D);te(O,()=>e.closeIcon??ae),q(D),ge(G=>{j(D,"aria-label",e.closeButtonAriaLabel),j(D,"data-disabled",t(Ae)),Qe(D,1,G)},[()=>Je(Xe(t(_e)?.closeButton,e.toast?.classes?.closeButton))]),s(I,D)};P(qt,I=>{t(pe)&&!e.toast.component&&t(p)!=="loading"&&e.closeIcon!==null&&I(Vt)})}var Ut=C(qt,2);{var Wt=I=>{const D=m(()=>e.toast.component);var O=h(),G=d(O);nt(G,()=>t(D),(ee,z)=>{z(ee,Te(()=>e.toast.componentProps,{closeToast:k}))}),s(I,O)},Kt=I=>{var D=va(),O=d(D);{var G=R=>{var v=la(),T=Y(v);{var F=N=>{var fe=h(),Se=d(fe);{var he=be=>{var Ne=h(),gt=d(Ne);nt(gt,()=>e.toast.icon,(_t,yt)=>{yt(_t,{})}),s(be,Ne)},oe=be=>{n(be)};P(Se,be=>{e.toast.icon?be(he):be(oe,!1)})}s(N,fe)};P(T,N=>{(e.toast.promise||t(p)==="loading")&&N(F)})}var de=C(T,2);{var _=N=>{var fe=h(),Se=d(fe);{var he=be=>{var Ne=h(),gt=d(Ne);nt(gt,()=>e.toast.icon,(_t,yt)=>{yt(_t,{})}),s(be,Ne)},oe=be=>{var Ne=h(),gt=d(Ne);{var _t=ut=>{var bt=h(),Yt=d(bt);te(Yt,()=>e.successIcon??ae),s(ut,bt)},yt=ut=>{var bt=h(),Yt=d(bt);{var ir=dt=>{var wt=h(),Xt=d(wt);te(Xt,()=>e.errorIcon??ae),s(dt,wt)},lr=dt=>{var wt=h(),Xt=d(wt);{var cr=ft=>{var pt=h(),Jt=d(pt);te(Jt,()=>e.warningIcon??ae),s(ft,pt)},ur=ft=>{var pt=h(),Jt=d(pt);{var dr=Qt=>{var _n=h(),fr=d(_n);te(fr,()=>e.infoIcon??ae),s(Qt,_n)};P(Jt,Qt=>{t(p)==="info"&&Qt(dr)},!0)}s(ft,pt)};P(Xt,ft=>{t(p)==="warning"?ft(cr):ft(ur,!1)},!0)}s(dt,wt)};P(Yt,dt=>{t(p)==="error"?dt(ir):dt(lr,!1)},!0)}s(ut,bt)};P(gt,ut=>{t(p)==="success"?ut(_t):ut(yt,!1)},!0)}s(be,Ne)};P(Se,be=>{e.toast.icon?be(he):be(oe,!1)})}s(N,fe)};P(de,N=>{e.toast.type!=="loading"&&N(_)})}q(v),ge(N=>Qe(v,1,N),[()=>Je(Xe(t(_e)?.icon,e.toast?.classes?.icon))]),s(R,v)};P(O,R=>{(t(p)||e.toast.icon||e.toast.promise)&&e.toast.icon!==null&&(t(Pe)!==null||e.toast.icon)&&R(G)})}var ee=C(O,2),z=Y(ee),ye=Y(z);{var at=R=>{var v=h(),T=d(v);{var F=_=>{const N=m(()=>e.toast.title);var fe=h(),Se=d(fe);nt(Se,()=>t(N),(he,oe)=>{oe(he,Te(()=>e.toast.componentProps))}),s(_,fe)},de=_=>{var N=Ke();ge(()=>Dt(N,e.toast.title)),s(_,N)};P(T,_=>{typeof e.toast.title!="string"?_(F):_(de,!1)})}s(R,v)};P(ye,R=>{e.toast.title&&R(at)})}q(z);var mt=C(z,2);{var Gt=R=>{var v=ca(),T=Y(v);{var F=_=>{const N=m(()=>e.toast.description);var fe=h(),Se=d(fe);nt(Se,()=>t(N),(he,oe)=>{oe(he,Te(()=>e.toast.componentProps))}),s(_,fe)},de=_=>{var N=Ke();ge(()=>Dt(N,e.toast.description)),s(_,N)};P(T,_=>{typeof e.toast.description!="string"?_(F):_(de,!1)})}q(v),ge(_=>Qe(v,1,_),[()=>Je(Xe(l(),t(ce),t(_e)?.description,e.toast.classes?.description))]),s(R,v)};P(mt,R=>{e.toast.description&&R(Gt)})}q(ee);var Re=C(ee,2);{var ke=R=>{var v=h(),T=d(v);{var F=_=>{var N=h(),fe=d(N);nt(fe,()=>e.toast.cancel,(Se,he)=>{he(Se,{})}),s(_,N)},de=_=>{var N=h(),fe=d(N);{var Se=he=>{var oe=da();oe.__click=[ua,e,re,k];var be=Y(oe,!0);q(oe),ge(Ne=>{Zt(oe,e.toast.cancelButtonStyle??o()),Qe(oe,1,Ne),Dt(be,e.toast.cancel.label)},[()=>Je(Xe(t(_e)?.cancelButton,e.toast?.classes?.cancelButton))]),s(he,oe)};P(fe,he=>{zt(e.toast.cancel)&&he(Se)},!0)}s(_,N)};P(T,_=>{typeof e.toast.cancel=="function"?_(F):_(de,!1)})}s(R,v)};P(Re,R=>{e.toast.cancel&&R(ke)})}var He=C(Re,2);{var ze=R=>{var v=h(),T=d(v);{var F=_=>{var N=h(),fe=d(N);nt(fe,()=>e.toast.action,(Se,he)=>{he(Se,{})}),s(_,N)},de=_=>{var N=h(),fe=d(N);{var Se=he=>{var oe=ha();oe.__click=[fa,e,k];var be=Y(oe,!0);q(oe),ge(Ne=>{Zt(oe,e.toast.actionButtonStyle??a()),Qe(oe,1,Ne),Dt(be,e.toast.action.label)},[()=>Je(Xe(t(_e)?.actionButton,e.toast?.classes?.actionButton))]),s(he,oe)};P(fe,he=>{zt(e.toast.action)&&he(Se)},!0)}s(_,N)};P(T,_=>{typeof e.toast.action=="function"?_(F):_(de,!1)})}s(R,v)};P(He,R=>{e.toast.action&&R(ze)})}ge(R=>Qe(z,1,R),[()=>Je(Xe(t(_e)?.title,e.toast?.classes?.title))]),s(I,D)};P(Ut,I=>{e.toast.component?I(Wt):I(Kt,!1)})}q(A),Wn(A,I=>c(H,I),()=>t(H)),ge((I,D,O,G)=>{Qe(A,1,I),j(A,"data-rich-colors",e.toast.richColors??u()),j(A,"data-styled",!(e.toast.component||e.toast.unstyled||i())),j(A,"data-mounted",t(w)),j(A,"data-promise",D),j(A,"data-swiped",t(S)),j(A,"data-removed",t(b)),j(A,"data-visible",t(J)),j(A,"data-y-position",t(Ee)[0]),j(A,"data-x-position",t(Ee)[1]),j(A,"data-index",e.index),j(A,"data-front",t(X)),j(A,"data-swiping",t(E)),j(A,"data-dismissable",t(re)),j(A,"data-type",t(p)),j(A,"data-invert",t(ct)),j(A,"data-swipe-out",t(U)),j(A,"data-swipe-direction",t(L)),j(A,"data-expanded",O),At=Zt(A,`${e.style} ${e.toast.style}`,At,G)},[()=>Je(Xe(e.class,t(Me),t(_e)?.toast,e.toast?.classes?.toast,t(_e)?.[t(p)],e.toast?.classes?.[t(p)])),()=>!!e.toast.promise,()=>!!(e.expanded||e.expandByDefault&&t(w)),()=>({"--index":e.index,"--toasts-before":e.index,"--z-index":we.toasts.length-e.index,"--offset":`${t(b)?t(y):t(f)}px`,"--initial-height":e.expandByDefault?"auto":`${t(ne)}px`})]),vr("dragend",A,Ve),s(r,A),$()}mr(["pointermove","pointerup","pointerdown","click"]);var _a=Mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');function ya(r){var e=_a();s(r,e)}var ba=Mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');function wa(r){var e=ba();s(r,e)}var pa=Mt('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');function xa(r){var e=pa();s(r,e)}var ka=Mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');function Ia(r){var e=ka();s(r,e)}var Sa=Mt('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');function Ta(r){var e=Sa();s(r,e)}const Pa=3,or="24px",ar="16px",Ma=4e3,Ca=356,Ea=14,nn="dark",Rt="light";function Aa(r,e){const n={};return[r,e].forEach((o,a)=>{const l=a===1,i=l?"--mobile-offset":"--offset",u=l?ar:or;function g(w){["top","right","bottom","left"].forEach(b=>{n[`${i}-${b}`]=typeof w=="number"?`${w}px`:w})}typeof o=="number"||typeof o=="string"?g(o):typeof o=="object"?["top","right","bottom","left"].forEach(w=>{const b=o[w];b===void 0?n[`${i}-${w}`]=u:n[`${i}-${w}`]=typeof b=="number"?`${b}px`:b}):g(u)}),n}var Da=M("<ol></ol>"),Ba=M('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-nbs0zk"><!></section>');function Ra(r,e){Z(e,!0);function n(f){return f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?nn:Rt}let o=x(e,"invert",3,!1),a=x(e,"position",3,"bottom-right"),l=x(e,"hotkey",19,()=>["altKey","KeyT"]),i=x(e,"expand",3,!1),u=x(e,"closeButton",3,!1),g=x(e,"offset",3,or),w=x(e,"mobileOffset",3,ar),b=x(e,"theme",3,"light"),E=x(e,"richColors",3,!1),U=x(e,"duration",3,Ma),S=x(e,"visibleToasts",3,Pa),y=x(e,"toastOptions",19,()=>({})),ne=x(e,"dir",7,"auto"),W=x(e,"gap",3,Ea),H=x(e,"containerAriaLabel",3,"Notifications"),B=x(e,"closeButtonAriaLabel",3,"Close toast"),L=Ce(e,["$$slots","$$events","$$legacy","invert","position","hotkey","expand","closeButton","offset","mobileOffset","theme","richColors","duration","visibleToasts","toastOptions","dir","gap","loadingIcon","successIcon","errorIcon","warningIcon","closeIcon","infoIcon","containerAriaLabel","class","closeButtonAriaLabel","onblur","onfocus","onmouseenter","onmousemove","onmouseleave","ondragend","onpointerdown","onpointerup"]);function X(){if(ne()!=="auto")return ne();if(typeof window>"u"||typeof document>"u")return"ltr";const f=document.documentElement.getAttribute("dir");return f==="auto"||!f?(lt(()=>ne(window.getComputedStyle(document.documentElement).direction??"ltr")),ne()):(lt(()=>ne(f)),f)}const J=m(()=>Array.from(new Set([a(),...we.toasts.filter(f=>f.position).map(f=>f.position)].filter(Boolean))));let p=Q(!1),re=Q(!1),Me=Q(vt(n(b()))),ce=Q(void 0),ve=Q(null),pe=Q(!1);const je=m(()=>l().join("+").replace(/Key/g,"").replace(/Digit/g,""));Ge(()=>{we.toasts.length<=1&&c(p,!1)}),Ge(()=>{const f=we.toasts.filter(k=>k.dismiss&&!k.delete);if(f.length>0){const k=we.toasts.map(V=>f.find(K=>K.id===V.id)?{...V,delete:!0}:V);we.toasts=k}}),Ge(()=>()=>{t(ce)&&t(ve)&&(t(ve).focus({preventScroll:!0}),c(ve,null),c(pe,!1))}),jt(()=>(we.reset(),$e(document,"keydown",k=>{l().every(ie=>k[ie]||k.code===ie)&&(c(p,!0),t(ce)?.focus()),k.code==="Escape"&&(document.activeElement===t(ce)||t(ce)?.contains(document.activeElement))&&c(p,!1)}))),Ge(()=>{if(b()!=="system"&&c(Me,b()),typeof window<"u"){b()==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?c(Me,nn):c(Me,Rt));const f=window.matchMedia("(prefers-color-scheme: dark)"),k=({matches:V})=>{c(Me,V?nn:Rt,!0)};"addEventListener"in f?f.addEventListener("change",k):f.addListener(k)}});const me=f=>{e.onblur?.(f),t(pe)&&!f.currentTarget.contains(f.relatedTarget)&&(c(pe,!1),t(ve)&&(t(ve).focus({preventScroll:!0}),c(ve,null)))},Ee=f=>{e.onfocus?.(f),!(f.target instanceof HTMLElement&&f.target.dataset.dismissable==="false")&&(t(pe)||(c(pe,!0),c(ve,f.relatedTarget,!0)))},Ye=f=>{e.onpointerdown?.(f),!(f.target instanceof HTMLElement&&f.target.dataset.dismissable==="false")&&c(re,!0)},tt=f=>{e.onmouseenter?.(f),c(p,!0)},ct=f=>{e.onmouseleave?.(f),t(re)||c(p,!1)},Ae=f=>{e.onmousemove?.(f),c(p,!0)},_e=f=>{e.ondragend?.(f),c(p,!1)},De=f=>{e.onpointerup?.(f),c(re,!1)};Qo.set(new Pr);var xe=Ba();j(xe,"tabindex",-1);var Oe=Y(xe);{var se=f=>{var k=h(),V=d(k);on(V,18,()=>t(J),ie=>ie,(ie,K,Ie,ue)=>{const qe=m(()=>{const[Pe,A]=K.split("-");return{y:Pe,x:A}}),Be=m(()=>Aa(g(),w()));var Ve=Da();qn(Ve,(Pe,A)=>({tabindex:-1,dir:Pe,class:e.class,"data-sonner-toaster":!0,"data-sonner-theme":t(Me),"data-y-position":t(qe).y,"data-x-position":t(qe).x,style:e.style,onblur:me,onfocus:Ee,onmouseenter:tt,onmousemove:Ae,onmouseleave:ct,ondragend:_e,onpointerdown:Ye,onpointerup:De,...L,[Mr]:A}),[X,()=>({"--front-toast-height":`${we.heights[0]?.height}px`,"--width":`${Ca}px`,"--gap":`${W()}px`,"--offset-top":t(Be)["--offset-top"],"--offset-right":t(Be)["--offset-right"],"--offset-bottom":t(Be)["--offset-bottom"],"--offset-left":t(Be)["--offset-left"],"--mobile-offset-top":t(Be)["--mobile-offset-top"],"--mobile-offset-right":t(Be)["--mobile-offset-right"],"--mobile-offset-bottom":t(Be)["--mobile-offset-bottom"],"--mobile-offset-left":t(Be)["--mobile-offset-left"]})],void 0,"svelte-nbs0zk"),on(Ve,23,()=>we.toasts.filter(Pe=>!Pe.position&&t(Ie)===0||Pe.position===K),Pe=>Pe.id,(Pe,A,At,qt)=>{{const Vt=Re=>{var ke=h(),He=d(ke);{var ze=v=>{var T=h(),F=d(T);te(F,()=>e.successIcon??ae),s(v,T)},R=v=>{var T=h(),F=d(T);{var de=_=>{ya(_)};P(F,_=>{e.successIcon!==null&&_(de)},!0)}s(v,T)};P(He,v=>{e.successIcon?v(ze):v(R,!1)})}s(Re,ke)},Ut=Re=>{var ke=h(),He=d(ke);{var ze=v=>{var T=h(),F=d(T);te(F,()=>e.errorIcon??ae),s(v,T)},R=v=>{var T=h(),F=d(T);{var de=_=>{wa(_)};P(F,_=>{e.errorIcon!==null&&_(de)},!0)}s(v,T)};P(He,v=>{e.errorIcon?v(ze):v(R,!1)})}s(Re,ke)},Wt=Re=>{var ke=h(),He=d(ke);{var ze=v=>{var T=h(),F=d(T);te(F,()=>e.warningIcon??ae),s(v,T)},R=v=>{var T=h(),F=d(T);{var de=_=>{xa(_)};P(F,_=>{e.warningIcon!==null&&_(de)},!0)}s(v,T)};P(He,v=>{e.warningIcon?v(ze):v(R,!1)})}s(Re,ke)},Kt=Re=>{var ke=h(),He=d(ke);{var ze=v=>{var T=h(),F=d(T);te(F,()=>e.infoIcon??ae),s(v,T)},R=v=>{var T=h(),F=d(T);{var de=_=>{Ia(_)};P(F,_=>{e.infoIcon!==null&&_(de)},!0)}s(v,T)};P(He,v=>{e.infoIcon?v(ze):v(R,!1)})}s(Re,ke)},I=Re=>{var ke=h(),He=d(ke);{var ze=v=>{var T=h(),F=d(T);te(F,()=>e.closeIcon??ae),s(v,T)},R=v=>{var T=h(),F=d(T);{var de=_=>{Ta(_)};P(F,_=>{e.closeIcon!==null&&_(de)},!0)}s(v,T)};P(He,v=>{e.closeIcon?v(ze):v(R,!1)})}s(Re,ke)};let D=m(()=>y()?.duration??U()),O=m(()=>y()?.class??""),G=m(()=>y()?.descriptionClass||""),ee=m(()=>y()?.style??""),z=m(()=>y().classes||{}),ye=m(()=>y().unstyled??!1),at=m(()=>y()?.cancelButtonStyle??""),mt=m(()=>y()?.actionButtonStyle??""),Gt=m(()=>y()?.closeButtonAriaLabel??B());ga(Pe,{get index(){return t(At)},get toast(){return t(A)},get defaultRichColors(){return E()},get duration(){return t(D)},get class(){return t(O)},get descriptionClass(){return t(G)},get invert(){return o()},get visibleToasts(){return S()},get closeButton(){return u()},get interacting(){return t(re)},get position(){return K},get style(){return t(ee)},get classes(){return t(z)},get unstyled(){return t(ye)},get cancelButtonStyle(){return t(at)},get actionButtonStyle(){return t(mt)},get closeButtonAriaLabel(){return t(Gt)},get expandByDefault(){return i()},get expanded(){return t(p)},get loadingIcon(){return e.loadingIcon},successIcon:Vt,errorIcon:Ut,warningIcon:Wt,infoIcon:Kt,closeIcon:I,$$slots:{successIcon:!0,errorIcon:!0,warningIcon:!0,infoIcon:!0,closeIcon:!0}})}}),q(Ve),Wn(Ve,Pe=>c(ce,Pe),()=>t(ce)),ge(()=>Ve.dir=Ve.dir),s(ie,Ve)}),s(f,k)};P(Oe,f=>{we.toasts.length>0&&f(se)})}q(xe),ge(()=>j(xe,"aria-label",`${H()??""} ${t(je)??""}`)),s(r,xe),$()}function Na(r,e){Z(e,!0);let n=Ce(e,["$$slots","$$events","$$legacy"]);Ra(r,Te({get theme(){return vn.current},class:"toaster group",style:"--normal-bg: var(--color-popover); --normal-text: var(--color-popover-foreground); --normal-border: var(--color-border);"},()=>n)),$()}function La(r,e){Z(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]];et(r,Te({name:"arrow-right-to-line"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),$()}function Oa(r,e){Z(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];et(r,Te({name:"book-open"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),$()}function Ha(r,e){Z(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];et(r,Te({name:"calculator"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),$()}function za(r,e){Z(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];et(r,Te({name:"clipboard"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),$()}function Fa(r,e){Z(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];et(r,Te({name:"cog"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),$()}function ja(r,e){Z(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];et(r,Te({name:"download"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),$()}function qa(r,e){Z(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];et(r,Te({name:"github"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),$()}function Va(r,e){Z(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];et(r,Te({name:"info"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),$()}function Ua(r,e){Z(e,!0);/**
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
 */let n=Ce(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 2v2"}],["path",{d:"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"}],["path",{d:"M16 12a4 4 0 0 0-4-4"}],["path",{d:"m19 5-1.256 1.256"}],["path",{d:"M20 12h2"}]];et(r,Te({name:"sun-moon"},()=>n,{get iconNode(){return o},children:(a,l)=>{var i=h(),u=d(i);te(u,()=>e.children??ae),s(a,i)},$$slots:{default:!0}})),$()}const Wa=Ur({component:"checkbox",parts:["root","group","group-label","input"]}),Ka=new Kn("Checkbox.Group"),sr=new Kn("Checkbox.Root");class mn{static create(e,n=null){return sr.set(new mn(e,n))}opts;group;#t=m(()=>this.group&&this.group.opts.name.current?this.group.opts.name.current:this.opts.name.current);get trueName(){return t(this.#t)}set trueName(e){c(this.#t,e)}#e=m(()=>this.group&&this.group.opts.required.current?!0:this.opts.required.current);get trueRequired(){return t(this.#e)}set trueRequired(e){c(this.#e,e)}#n=m(()=>this.group&&this.group.opts.disabled.current?!0:this.opts.disabled.current);get trueDisabled(){return t(this.#n)}set trueDisabled(e){c(this.#n,e)}#r=m(()=>this.group&&this.group.opts.readonly.current?!0:this.opts.readonly.current);get trueReadonly(){return t(this.#r)}set trueReadonly(e){c(this.#r,e)}attachment;constructor(e,n){this.opts=e,this.group=n,this.attachment=Fr(this.opts.ref),this.onkeydown=this.onkeydown.bind(this),this.onclick=this.onclick.bind(this),an.pre([()=>zr(this.group?.opts.value.current),()=>this.opts.value.current],([o,a])=>{!o||!a||(this.opts.checked.current=o.includes(a))}),an.pre(()=>this.opts.checked.current,o=>{this.group&&(o?this.group?.addValue(this.opts.value.current):this.group?.removeValue(this.opts.value.current))})}onkeydown(e){if(!(this.trueDisabled||this.trueReadonly)){if(e.key===jr){e.preventDefault(),this.opts.type.current==="submit"&&e.currentTarget.closest("form")?.requestSubmit();return}e.key===qr&&(e.preventDefault(),this.#o())}}#o(){this.opts.indeterminate.current?(this.opts.indeterminate.current=!1,this.opts.checked.current=!0):this.opts.checked.current=!this.opts.checked.current}onclick(e){if(!(this.trueDisabled||this.trueReadonly)){if(this.opts.type.current==="submit"){this.#o();return}e.preventDefault(),this.#o()}}#a=m(()=>({checked:this.opts.checked.current,indeterminate:this.opts.indeterminate.current}));get snippetProps(){return t(this.#a)}set snippetProps(e){c(this.#a,e)}#s=m(()=>({id:this.opts.id.current,role:"checkbox",type:this.opts.type.current,disabled:this.trueDisabled,"aria-checked":Vr(this.opts.checked.current,this.opts.indeterminate.current),"aria-required":Rn(this.trueRequired),"aria-readonly":Rn(this.trueReadonly),"data-disabled":Bn(this.trueDisabled),"data-readonly":Bn(this.trueReadonly),"data-state":Ga(this.opts.checked.current,this.opts.indeterminate.current),[Wa.root]:"",onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment}));get props(){return t(this.#s)}set props(e){c(this.#s,e)}}class gn{static create(){return new gn(sr.get())}root;#t=m(()=>this.root.group?!!(this.root.opts.value.current!==void 0&&this.root.group.opts.value.current.includes(this.root.opts.value.current)):this.root.opts.checked.current);get trueChecked(){return t(this.#t)}set trueChecked(e){c(this.#t,e)}#e=m(()=>!!this.root.trueName);get shouldRender(){return t(this.#e)}set shouldRender(e){c(this.#e,e)}constructor(e){this.root=e,this.onfocus=this.onfocus.bind(this)}onfocus(e){Wr(this.root.opts.ref.current)&&this.root.opts.ref.current.focus()}#n=m(()=>({type:"checkbox",checked:this.root.opts.checked.current===!0,disabled:this.root.trueDisabled,required:this.root.trueRequired,name:this.root.trueName,value:this.root.opts.value.current,readonly:this.root.trueReadonly,onfocus:this.onfocus}));get props(){return t(this.#n)}set props(e){c(this.#n,e)}}function Ga(r,e){return e?"indeterminate":r?"checked":"unchecked"}function Ya(r,e){Z(e,!1);const n=gn.create();Ct();var o=h(),a=d(o);{var l=i=>{Yr(i,Te(()=>n.props))};P(a,i=>{n.shouldRender&&i(l)})}s(r,o),$()}var Xa=M("<button><!></button>"),Ja=M("<!> <!>",1);function Qa(r,e){const n=gr();Z(e,!0);let o=x(e,"checked",15,!1),a=x(e,"ref",15,null),l=x(e,"disabled",3,!1),i=x(e,"required",3,!1),u=x(e,"name",3,void 0),g=x(e,"value",3,"on"),w=x(e,"id",19,()=>Kr(n)),b=x(e,"indeterminate",15,!1),E=x(e,"type",3,"button"),U=Ce(e,["$$slots","$$events","$$legacy","checked","ref","onCheckedChange","children","disabled","required","name","value","id","indeterminate","onIndeterminateChange","child","type","readonly"]);const S=Ka.getOr(null);S&&g()&&(S.opts.value.current.includes(g())?o(!0):o(!1)),an.pre(()=>g(),()=>{S&&g()&&(S.opts.value.current.includes(g())?o(!0):o(!1))});const y=mn.create({checked:Ue(()=>o(),J=>{o(J),e.onCheckedChange?.(J)}),disabled:Ue(()=>l()??!1),required:Ue(()=>i()),name:Ue(()=>u()),value:Ue(()=>g()),id:Ue(()=>w()),ref:Ue(()=>a(),J=>a(J)),indeterminate:Ue(()=>b(),J=>{b(J),e.onIndeterminateChange?.(J)}),type:Ue(()=>E()),readonly:Ue(()=>!!e.readonly)},S),ne=m(()=>Gr({...U},y.props));var W=Ja(),H=d(W);{var B=J=>{var p=h(),re=d(p);{let Me=m(()=>({props:t(ne),...y.snippetProps}));te(re,()=>e.child,()=>t(Me))}s(J,p)},L=J=>{var p=Xa();qn(p,()=>({...t(ne)}));var re=Y(p);te(re,()=>e.children??ae,()=>y.snippetProps),q(p),s(J,p)};P(H,J=>{e.child?J(B):J(L,!1)})}var X=C(H,2);Ya(X,{}),s(r,W),$()}var Za=M('<div data-slot="checkbox-indicator" class="text-current transition-none"><!></div>');function $a(r,e){Z(e,!0);let n=x(e,"ref",15,null),o=x(e,"checked",15,!1),a=x(e,"indeterminate",15,!1),l=Ce(e,["$$slots","$$events","$$legacy","ref","checked","indeterminate","class"]);var i=h(),u=d(i);{const g=(b,E)=>{let U=()=>E?.().checked,S=()=>E?.().indeterminate;var y=Za(),ne=Y(y);{var W=B=>{Xr(B,{class:"size-3.5"})},H=B=>{var L=h(),X=d(L);{var J=p=>{Jr(p,{class:"size-3.5"})};P(X,p=>{S()&&p(J)},!0)}s(B,L)};P(ne,B=>{U()?B(W):B(H,!1)})}q(y),s(b,y)};let w=m(()=>Cr("border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e.class));nt(u,()=>Qa,(b,E)=>{E(b,Te({"data-slot":"checkbox",get class(){return t(w)}},()=>l,{get ref(){return n()},set ref(U){n(U)},get checked(){return o()},set checked(U){o(U)},get indeterminate(){return a()},set indeterminate(U){a(U)},children:g,$$slots:{default:!0}}))})}s(r,i),$()}var es=M("<!> <!>",1),ts=M("Interval <!>",1),ns=M("<!> <!>",1),rs=M("<!> <!>",1),os=M("<!> <!>",1),as=M("<!> <!> <!> <!>",1),ss=M("<!> <!>",1),is=M('<div class="flex flex-row gap-2"><!> <!> <!></div>'),ls=M("<!> <!>",1),cs=M("<div><!> <!></div>");function us(r,e){Z(e,!1);let n=rt(!1),o=rt(En),a=rt(xt),l,i=null,u=rt(!1);function g(){c(o,kn.get()),c(a,In.get()),c(u,Sn.get())}function w(W){const H=[["rpcs",Tt],["callAbis",Mn],["txAbis",Pn],["testKeys",Tn]];for(const[B,L]of H){const X=W[B];X&&L.set(X)}}function b(){if(!t(o)||t(o)<$t){It.warning(`invalid depth: depth must be at least ${$t}`);return}if(!t(a)||t(a)<xt){It.warning(`invalid interval: interval must be at least ${xt}`);return}kn.set(t(o)),In.set(t(a)),Sn.set(t(u)),l&&w(l),c(n,!1),It.info("successfully saved")}function E(W){if(i=W.target.files?.[0]??null,i){const B=new FileReader;B.onload=L=>{Cn(()=>{const X=L.target?.result;if(typeof X=="string")l=JSON.parse(X);else throw new Error("invalid file content")})},B.readAsText(i)}}function U(){const W={rpcs:Tt.get(),callAbis:Mn.get(),txAbis:Pn.get(),testKeys:Tn.get()};Cn(()=>{const H=JSON.stringify(W,null,2),B=new Blob([H],{type:"application/json"}),L=URL.createObjectURL(B),X=document.createElement("a");X.href=L,X.download=`env_${Date.now()}.json`,X.click(),URL.revokeObjectURL(L)})}Ct();var S=cs(),y=Y(S);Fe(y,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{c(n,!0)},children:(W,H)=>{Fa(W,{})},$$slots:{default:!0}});var ne=C(y,2);Gn(ne,{onOpenChange:g,get open(){return t(n)},set open(W){c(n,W)},children:(W,H)=>{Yn(W,{children:(B,L)=>{var X=ls(),J=d(X);Xn(J,{children:(re,Me)=>{var ce=ss(),ve=d(ce);Jn(ve,{children:(je,me)=>{Ze();var Ee=Ke("Setting");s(je,Ee)},$$slots:{default:!0}});var pe=C(ve,2);Qn(pe,{children:(je,me)=>{Vn(je,{children:(Ee,Ye)=>{Un(Ee,{children:(tt,ct)=>{var Ae=as(),_e=d(Ae);ht(_e,{children:(se,f)=>{var k=es(),V=d(k);Le(V,{children:(K,Ie)=>{Ze();var ue=Ke("Depth");s(K,ue)},$$slots:{default:!0}});var ie=C(V,2);Le(ie,{children:(K,Ie)=>{{let ue=rn(()=>En.toString());St(K,{type:"number",get min(){return $t},get placeholder(){return t(ue)},get value(){return t(o)},set value(qe){c(o,qe)},$$legacy:!0})}},$$slots:{default:!0}}),s(se,k)},$$slots:{default:!0}});var De=C(_e,2);ht(De,{children:(se,f)=>{var k=ns(),V=d(k);Le(V,{children:(K,Ie)=>{Ze();var ue=ts(),qe=C(d(ue));Fe(qe,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{It.info("effective only for http/https rpc endpoints",{class:"whitespace-pre-line"})},children:(Be,Ve)=>{Va(Be,{})},$$slots:{default:!0}}),s(K,ue)},$$slots:{default:!0}});var ie=C(V,2);Le(ie,{children:(K,Ie)=>{{let ue=rn(()=>`${xt.toString()} ms`);St(K,{type:"number",get min(){return xt},get placeholder(){return t(ue)},get value(){return t(a)},set value(qe){c(a,qe)},$$legacy:!0})}},$$slots:{default:!0}}),s(se,k)},$$slots:{default:!0}});var xe=C(De,2);ht(xe,{children:(se,f)=>{var k=rs(),V=d(k);Le(V,{children:(K,Ie)=>{Ze();var ue=Ke("Metrics");s(K,ue)},$$slots:{default:!0}});var ie=C(V,2);Le(ie,{children:(K,Ie)=>{$a(K,{get checked(){return t(u)},set checked(ue){c(u,ue)},$$legacy:!0})},$$slots:{default:!0}}),s(se,k)},$$slots:{default:!0}});var Oe=C(xe,2);ht(Oe,{children:(se,f)=>{var k=os(),V=d(k);Le(V,{children:(K,Ie)=>{Ze();var ue=Ke("Environment");s(K,ue)},$$slots:{default:!0}});var ie=C(V,2);Le(ie,{children:(K,Ie)=>{St(K,{type:"file",class:"cursor-pointer",onchange:E})},$$slots:{default:!0}}),s(se,k)},$$slots:{default:!0}}),s(tt,Ae)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(re,ce)},$$slots:{default:!0}});var p=C(J,2);Zn(p,{children:(re,Me)=>{var ce=is(),ve=Y(ce);Fe(ve,{variant:"outline",class:"cursor-pointer",onclick:U,children:(me,Ee)=>{ja(me,{})},$$slots:{default:!0}});var pe=C(ve,2);Fe(pe,{class:"cursor-pointer",size:"icon",variant:"outline",get onclick(){return Bo},children:(me,Ee)=>{Ua(me,{})},$$slots:{default:!0}});var je=C(pe,2);Fe(je,{class:"cursor-pointer",variant:"outline",onclick:b,children:(me,Ee)=>{Ze();var Ye=Ke("Save");s(me,Ye)},$$slots:{default:!0}}),q(ce),s(re,ce)},$$slots:{default:!0}}),s(B,X)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),q(S),s(r,S),$()}var ds=M("<!> <!>",1),fs=M('<div class="flex gap-2"><!> <!> <!></div>'),hs=M("<!> <!>",1),vs=M("<!> <!>",1),ms=M("<!> <!>",1),gs=M("<!> <!>",1),_s=M("<div><!> <!></div>");function ys(r,e){Z(e,!1);let n=rt(!1),o=rt("0"),a=rt("0x00");function l(){c(o,"0"),c(a,"0x00")}function i(S){const y=S.currentTarget.value;y!==""&&/^\d+$/.test(y)&&(c(o,y),c(a,An(y)))}function u(S){let y=S.currentTarget.value.trim();y===""||y==="0x"||(y.startsWith("0x")&&(y=y.slice(2)),/^[0-9a-fA-F]+$/.test(y)&&(c(a,`0x${y}`),c(o,Er(t(a)).toString())))}function g(){t(o).length!==0&&c(a,An(t(o),32))}async function w(){t(a).length!==0&&(await navigator.clipboard.writeText(t(a)),It.info(`copied hex: ${t(a)}`))}Ct();var b=_s(),E=Y(b);Fe(E,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:()=>{c(n,!0)},children:(S,y)=>{Ha(S,{})},$$slots:{default:!0}});var U=C(E,2);Gn(U,{onOpenChange:l,get open(){return t(n)},set open(S){c(n,S)},children:(S,y)=>{Yn(S,{children:(ne,W)=>{var H=gs(),B=d(H);Xn(B,{children:(X,J)=>{var p=ms(),re=d(p);Jn(re,{children:(ce,ve)=>{Ze();var pe=Ke("Hex Converter");s(ce,pe)},$$slots:{default:!0}});var Me=C(re,2);Qn(Me,{children:(ce,ve)=>{Vn(ce,{children:(pe,je)=>{Un(pe,{children:(me,Ee)=>{var Ye=vs(),tt=d(Ye);ht(tt,{children:(Ae,_e)=>{var De=ds(),xe=d(De);Le(xe,{children:(se,f)=>{Ze();var k=Ke("Decimal");s(se,k)},$$slots:{default:!0}});var Oe=C(xe,2);Le(Oe,{children:(se,f)=>{St(se,{placeholder:"0",get value(){return t(o)},oninput:i})},$$slots:{default:!0}}),s(Ae,De)},$$slots:{default:!0}});var ct=C(tt,2);ht(ct,{children:(Ae,_e)=>{var De=hs(),xe=d(De);Le(xe,{children:(se,f)=>{Ze();var k=Ke("Hex");s(se,k)},$$slots:{default:!0}});var Oe=C(xe,2);Le(Oe,{children:(se,f)=>{var k=fs(),V=Y(k);St(V,{placeholder:"0x00",get value(){return t(a)},oninput:u});var ie=C(V,2);Fe(ie,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:g,children:(Ie,ue)=>{La(Ie,{})},$$slots:{default:!0}});var K=C(ie,2);Fe(K,{class:"cursor-pointer",size:"icon",variant:"outline",onclick:w,children:(Ie,ue)=>{za(Ie,{})},$$slots:{default:!0}}),q(k),s(se,k)},$$slots:{default:!0}}),s(Ae,De)},$$slots:{default:!0}}),s(me,Ye)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(X,p)},$$slots:{default:!0}});var L=C(B,2);Zn(L,{}),s(ne,H)},$$slots:{default:!0}})},$$slots:{default:!0},$$legacy:!0}),q(b),s(r,b),$()}var bs=M('<div class="flex w-full flex-row"><div class="ml-4 flex-1"><a class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">ETH UI</a></div> <div class="mr-4 flex flex-1 justify-end gap-2"><!> <!> <!></div></div>');function ws(r,e){Z(e,!1);let n=rt("idle");Ar.subscribe(b=>{c(n,b)}),Ct();var o=bs(),a=Y(o),l=Y(a);q(a);var i=C(a,2),u=Y(i);Fe(u,{variant:"ghost",size:"icon",children:(b,E)=>{{let U=rn(()=>t(n)==="processing"?"animate-spin":"");Qr(b,{get class(){return t(U)}})}},$$slots:{default:!0}});var g=C(u,2);ys(g,{});var w=C(g,2);us(w,{}),q(i),q(o),ge(b=>j(l,"href",b),[()=>Dr("/")]),s(r,o),$()}var ps=M('<div class="grid w-full grid-cols-3 items-center"><div></div> <p class="text-center">© 2025 code0xff</p> <div class="mr-4 flex justify-end gap-2"><!> <!></div></div>');function xs(r,e){Z(e,!1),Ct();var n=ps(),o=C(Y(n),4),a=Y(o);Fe(a,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(Br),children:(i,u)=>{Oa(i,{})},$$slots:{default:!0}});var l=C(a,2);Fe(l,{class:"cursor-pointer",variant:"outline",size:"icon",onclick:()=>window.open(Rr),children:(i,u)=>{qa(i,{})},$$slots:{default:!0}}),q(o),q(n),s(r,n),$()}var ks=M('<link rel="icon"/>'),Is=M('<!> <!> <div class="flex h-screen flex-col overflow-hidden"><div class="my-4 shrink-0"><!></div> <div class="flex min-h-0 flex-1 flex-col"><!></div> <div class="my-4 shrink-0"><!></div></div>',1);function Fs(r,e){Z(e,!0);async function n(){let S=Or.url.searchParams.get("rpc"),y=Tt.get();S?(en.set(S),[...y,...tn].includes(S)||Tt.set([...y,S])):S=en.get(),y=Tt.get(),(!S||S.trim().length===0||![...y,...tn].includes(S))&&en.set(tn[0]),await Lr(),Dn.set(!0)}jt(async()=>{await Nr(n,!1,async()=>{Dn.set(!0)})});var o=Is();jn(S=>{var y=ks();Tr.title="ETH UI",ge(()=>j(y,"href",no)),s(S,y)});var a=d(o);Na(a,{position:"top-right"});var l=C(a,2);qo(l,{});var i=C(l,2),u=Y(i),g=Y(u);ws(g,{}),q(u);var w=C(u,2),b=Y(w);te(b,()=>e.children??ae),q(w);var E=C(w,2),U=Y(E);xs(U,{}),q(E),q(i),s(r,o),$()}export{Fs as component,Os as universal};
