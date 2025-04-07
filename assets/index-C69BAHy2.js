var mt=Object.defineProperty;var ft=(o,t,e)=>t in o?mt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var m=(o,t,e)=>ft(o,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,Z=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lt=Symbol(),Q=new WeakMap;let gt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==lt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Q.set(e,t))}return t}toString(){return this.cssText}};const A=o=>new gt(typeof o=="string"?o:o+"",void 0,lt),$t=(o,t)=>{if(Z)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},X=Z?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return A(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bt,defineProperty:yt,getOwnPropertyDescriptor:_t,getOwnPropertyNames:vt,getOwnPropertySymbols:xt,getPrototypeOf:At}=Object,y=globalThis,Y=y.trustedTypes,Et=Y?Y.emptyScript:"",q=y.reactiveElementPolyfillSupport,k=(o,t)=>o,K={toAttribute(o,t){switch(t){case Boolean:o=o?Et:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ct=(o,t)=>!bt(o,t),tt={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&yt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=_t(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const c=i==null?void 0:i.call(this);n.call(this,r),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tt}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const e=this.properties,s=[...vt(e),...xt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:K).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:K;this._$Em=i,this[i]=c.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??ct)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,r]of i)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[k("elementProperties")]=new Map,E[k("finalized")]=new Map,q==null||q({ReactiveElement:E}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,B=P.trustedTypes,et=B?B.createPolicy("lit-html",{createHTML:o=>o}):void 0,dt="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+b,wt=`<${ht}>`,x=document,T=()=>x.createComment(""),N=o=>o===null||typeof o!="object"&&typeof o!="function",G=Array.isArray,St=o=>G(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",W=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,it=/>/g,_=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,nt=/"/g,pt=/^(?:script|style|textarea|title)$/i,Ct=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),u=Ct(1),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),rt=new WeakMap,v=x.createTreeWalker(x,129);function ut(o,t){if(!G(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(t):t}const kt=(o,t)=>{const e=o.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",r=C;for(let c=0;c<e;c++){const a=o[c];let h,p,l=-1,g=0;for(;g<a.length&&(r.lastIndex=g,p=r.exec(a),p!==null);)g=r.lastIndex,r===C?p[1]==="!--"?r=st:p[1]!==void 0?r=it:p[2]!==void 0?(pt.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=_):p[3]!==void 0&&(r=_):r===_?p[0]===">"?(r=i??C,l=-1):p[1]===void 0?l=-2:(l=r.lastIndex-p[2].length,h=p[1],r=p[3]===void 0?_:p[3]==='"'?nt:ot):r===nt||r===ot?r=_:r===st||r===it?r=C:(r=_,i=void 0);const $=r===_&&o[c+1].startsWith("/>")?" ":"";n+=r===C?a+wt:l>=0?(s.push(h),a.slice(0,l)+dt+a.slice(l)+b+$):a+b+(l===-2?c:$)}return[ut(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class H{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const c=t.length-1,a=this.parts,[h,p]=kt(t,e);if(this.el=H.createElement(h,s),v.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=v.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(dt)){const g=p[r++],$=i.getAttribute(l).split(b),j=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:j[2],strings:$,ctor:j[1]==="."?Ot:j[1]==="?"?Ut:j[1]==="@"?Mt:D}),i.removeAttribute(l)}else l.startsWith(b)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(pt.test(i.tagName)){const l=i.textContent.split(b),g=l.length-1;if(g>0){i.textContent=B?B.emptyScript:"";for(let $=0;$<g;$++)i.append(l[$],T()),v.nextNode(),a.push({type:2,index:++n});i.append(l[g],T())}}}else if(i.nodeType===8)if(i.data===ht)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(b,l+1))!==-1;)a.push({type:7,index:n}),l+=b.length-1}n++}}static createElement(t,e){const s=x.createElement("template");return s.innerHTML=t,s}}function S(o,t,e=o,s){var r,c;if(t===w)return t;let i=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl;const n=N(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=S(o,i._$AS(o,t.values),i,s)),t}class Pt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??x).importNode(e,!0);v.currentNode=i;let n=v.nextNode(),r=0,c=0,a=s[0];for(;a!==void 0;){if(r===a.index){let h;a.type===2?h=new R(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new It(n,this,t)),this._$AV.push(h),a=s[++c]}r!==(a==null?void 0:a.index)&&(n=v.nextNode(),r++)}return v.currentNode=x,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class R{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),N(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):St(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(ut(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const r=new Pt(i,this),c=r.u(this.options);r.p(e),this.T(c),this._$AH=r}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new H(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new R(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(n===void 0)t=S(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==w,r&&(this._$AH=t);else{const c=t;let a,h;for(t=n[0],a=0;a<n.length-1;a++)h=S(this,c[s+a],e,a),h===w&&(h=this._$AH[a]),r||(r=!N(h)||h!==this._$AH[a]),h===d?t=d:t!==d&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}r&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ut extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Mt extends D{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??d)===w)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const V=P.litHtmlPolyfillSupport;V==null||V(H,R),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.2.1");const Tt=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new R(t.insertBefore(T(),n),n,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return w}}var at;f._$litElement$=!0,f.finalized=!0,(at=globalThis.litElementHydrateSupport)==null||at.call(globalThis,{LitElement:f});const F=globalThis.litElementPolyfillSupport;F==null||F({LitElement:f});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Nt='@charset "UTF-8";body{background-color:orange;margin:0 auto;width:1224px}.container{display:flex;flex-direction:column;align-items:center;justify-content:center;width:1224px;margin:0 auto}@media only screen and (max-width: 959px){.container{width:auto}}.container .form-container{width:350px;padding:24px;background-color:#1e4482;border-radius:16px;margin-bottom:16px}@media only screen and (max-width: 959px){.container .form-container{width:auto}}.container .form-container form{display:flex;flex-direction:column;gap:8px}.container .form-container form input{padding:8px;font-size:14px;border:1px solid #ccc;border-radius:4px}.container .form-container .button-container-form button{width:190px;padding:10px 20px;font-size:16px;border:none;border-radius:8px;cursor:pointer;height:56px;transition:background-color .3s ease;background-color:#052b54dd;color:#fff}.container .form-container .button-container-form button:hover{background-color:#5c89ba}.container .card-container{display:grid;grid-template-columns:repeat(2,460px);gap:16px}.container .card-container .card-image{border-radius:8px;width:100%;height:auto}@media only screen and (max-width: 959px){.container .card-container{display:flex;flex-direction:column}}.container .card-container .button-delete button{width:190px;padding:10px 20px;font-size:16px;border:none;border-radius:8px;cursor:pointer;height:56px;transition:background-color .3s ease;background-color:#e52b2b;color:#fff}@media only screen and (max-width: 959px){.container .card-container .button-delete button{width:100%}}.container .card-container .button-delete button:hover{background-color:#de7a66}',Ht='@charset "UTF-8";body{background-color:orange;margin:0 auto;width:1224px}.card-content{border-radius:16px;color:red;background-color:#f7f8f8;padding:20px;width:auto;margin:0 auto}@media only screen and (max-width: 959px){.card-content{width:auto!important}}.card-content .card-header{color:#070e46}.card-content .card-header .card-header-img .card-image{border-radius:8px;width:100%;height:auto}.card-content .card-header .title{font-size:24px;line-height:32px;font-family:sans-serif}.card-content .card-header .subtitle{font-size:16px;line-height:24px;font-family:sans-serif}.card-content .card-body{color:#070e46}.card-content .card-body .add-item-container{display:flex;flex-direction:row;gap:8px;margin:16px}@media only screen and (max-width: 959px){.card-content .card-body .add-item-container{flex-direction:column}}.card-content .card-body .add-item-container input{padding:8px;font-size:14px;border:1px solid #ccc;border-radius:4px}.card-content .card-footer{display:flex;flex-direction:row;gap:8px;margin:24px 0 16px}@media only screen and (max-width: 959px){.card-content .card-footer{flex-direction:column}}.card-content .card-footer .button-container{width:auto}',Rt="body{background-color:orange;margin:0 auto;width:1224px}.mensaje{font-size:16px;line-height:24px;font-family:sans-serif}";class L extends f{static properties(){return{nohayparrafos:{type:Boolean}}}comprobar(t){const e=Array.from(this.children);let s=!1;return e.forEach(i=>{i.slot===t&&(s=!0)}),s}render(){return u`${this.nohayparrafos?"":u` <div class="mensaje">
          <slot name="parrafos"></slot>
        </div>`}`}static get is(){return"card-info"}}m(L,"styles",A(Rt));customElements.get(L.is)||customElements.define(L.is,L);const jt="body{background-color:orange;margin:0 auto;width:1224px}.lista-list{color:#070e46;font-size:16px;line-height:24px;font-family:sans-serif}";class O extends f{comprobar(t){const e=Array.from(this.children);let s=!1;return e.forEach(i=>{i.slot===t&&(s=!0)}),s}render(){return u`<div class="lista-content">
      ${this.comprobar("lista")?u`<div class="lista-list">
            <slot name="lista"></slot>
          </div>`:u`<p>No cuenta con ningun beneficio.</p>`}
    </div>`}static get is(){return"lista-component"}}m(O,"styles",A(jt)),m(O,"properties",{img:{type:String}});customElements.get(O.is)||customElements.define(O.is,O);const zt='@charset "UTF-8";body{background-color:orange;margin:0 auto;width:1224px}.button{padding:10px 20px;font-size:16px;border:none;border-radius:8px;cursor:pointer;width:100%;height:56px;transition:background-color .3s ease}.button-form{width:auto}.button.default{background-color:#007bffdd;color:#fff}.button.default:hover{background-color:#052b54dd}.button:disabled{background-color:#ccc;cursor:not-allowed}.button.white{background-color:#fff;color:#070e46}.button.white:hover{background-color:#dbcaca}.button.warning{background-color:#e22828;color:#070e46}.button.link{background-color:#1d0eec;color:#fff;text-decoration:underline}.button.link:hover{background-color:#052b54dd}';class U extends f{constructor(){super(),this.extraClass="",this.disabled=!1,this.type="button"}render(){return u`
      <div class="button-form">
        <button
          class="button default ${this.extraClass}"
          ?disabled="${this.disabled}"
          type="${this.type}"
          @click="${this._handleClick}"
        >
          <slot name="button-slot"></slot>
          <!-- Contenido dinámico definido donde se usa el componente -->
        </button>
      </div>
    `}_handleClick(){this.disabled||this.dispatchEvent(new CustomEvent("button-click",{bubbles:!0,composed:!0}))}static get is(){return"button-component"}}m(U,"styles",A(zt)),m(U,"properties",{extraClass:{type:String},disabled:{type:Boolean},type:{type:String,reflect:!0,attribute:!0}});customElements.get(U.is)||customElements.define(U.is,U);const Lt="body{background-color:orange;margin:0 auto;width:1224px}.modal{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;z-index:1000}.modal-content{background:#fff;padding:20px;border-radius:8px;text-align:center;max-width:400px;width:100%}.close-button{margin-top:10px;padding:10px 20px;background-color:#ff4d4f;color:#fff;border:none;border-radius:8px;cursor:pointer}";class M extends f{constructor(){super(),this.message="",this.isOpen=!1}closeModal(){this.isOpen=!1}render(){return this.isOpen?u`
      <div class="modal">
        <div class="modal-content">
          <p>${this.message}</p>
          <button class="close-button" @click="${this.closeModal}">
            Cerrar
          </button>
        </div>
      </div>
    `:u``}static get is(){return"modal-component"}}m(M,"styles",A(Lt)),m(M,"properties",{message:{type:String},isOpen:{type:Boolean}});customElements.get(M.is)||customElements.define(M.is,M);class I extends f{constructor(){super(),this.modalMessage="",this.isModalOpen=!1,this.listItems=[]}handleButtonClick(t){this.isModalOpen=!1,setTimeout(()=>{this.modalMessage=`Boton pulsado "${t}" en: "${this.title}"`,this.isModalOpen=!0},0)}handleLinkClick(){this.isModalOpen=!1,setTimeout(()=>{this.modalMessage="Más información sobre cómo lo hacemos",this.isModalOpen=!0},0)}handleAddListItem(){const t=this.renderRoot.querySelector("#new-list-item"),e=t.value.trim();e&&(this.listItems=[...this.listItems,e],t.value=""),console.log("añadí un elemento",this.listItems)}render(){return u`<div class="card-content">
      <div class="card-header">
        ${this.img?u`<div class="card-header-img">
              <img
                src="${this.img}"
                alt="Imagen de la tarjeta"
                class="card-image"
              />
            </div>`:d}
        <div class="title">${this.title}</div>
        <div class="subtitle">${this.subtitulo}</div>
      </div>
      <div class="card-body">
        <lista-component>
          <ul slot="lista">
            ${this.listItems&&this.listItems.length>0?this.listItems.map(t=>u`<li>${t}</li>`):u`<li>No hay elementos en la lista.</li>`}
          </ul>
        </lista-component>
        <div class="add-item-container">
          <input
            type="text"
            id="new-list-item"
            placeholder="Añadir nuevo elemento"
          />
          <button-component
            extraClass="button-lista"
            @click="${this.handleAddListItem}"
            ><span slot="button-slot">Add to list</span>
          </button-component>
        </div>
        <card-info>
          <article slot="parrafos">
            <p>
              Utiliza el comparador para elegir una tarjeta en función de sus
              características y ventajas.
              <a
                href="#"
                @click="${t=>{t.preventDefault(),this.handleLinkClick()}}"
                class="info-link"
              >
                Cómo lo hacemos?
              </a>
            </p>
          </article></card-info
        >
      </div>
      <div class="card-footer">
        <div class="button-container">
          <button-component
            extraClass="custom-bg"
            @click="${()=>this.handleButtonClick("Contratar tarjeta")}"
            ><span slot="button-slot">Contratar tarjeta</span></button-component
          >
        </div>
        <div class="button-container">
          <button-component
            extraClass="white"
            @click="${()=>this.handleButtonClick("Más información")}"
            ><span slot="button-slot">Mas información</span></button-component
          >
        </div>
        <div class="button-container">
          <button-component
            extraClass="link"
            @click="${()=>this.handleButtonClick("Enlace a")}"
            ><span slot="button-slot">Enlace a</span></button-component
          >
        </div>
      </div>

      <slot></slot>
      <!-- Para el botón "Eliminar" -->

      <!-- Modal -->
      <modal-component
        .message="${this.modalMessage}"
        .isOpen="${this.isModalOpen}"
      ></modal-component>
    </div>`}static get is(){return"card-component"}}m(I,"styles",A(Ht)),m(I,"properties",{title:{type:String},subtitulo:{type:String},img:{type:String},modalMessage:{type:String},isModalOpen:{type:Boolean},listItems:{type:Array}});customElements.get(I.is)||customElements.define(I.is,I);class J extends f{constructor(){super(),this.cards=[],this.listItems=[],this.loadDataCard(),this.fixedImage="https://www.bbva.es/content/dam/public-web/bbvaes/images/personas/productos/02_tarjetas/cards/2400x1600-card-tarjeta-aqua-mas.png.img.768.1736347421863.png"}async loadDataCard(){try{const e=await(await fetch("https://randomuser.me/api/?results=4")).json();this.cards=e.results.map(s=>({id:crypto.randomUUID(),title:`${s.name.first} ${s.name.last}`,subtitulo:s.email,listItems:[],img:s.picture.large}))}catch(t){console.error("Error al cargar los datos de las tarjetas:",t)}}handleSubmit(t){t.preventDefault();const e=this.renderRoot.querySelector("form"),s=e.listItem.value;s&&(this.listItems=[...this.listItems,s]),console.log("añadí un elemento",this.listItems);const i={id:crypto.randomUUID(),title:e.title.value,subtitulo:e.subtitulo.value,listItems:e.listItem.value?[e.listItem.value]:[],img:e.img.value||this.fixedImage};this.cards=[...this.cards,i],e.reset(),this.listItems=[]}handleDelete(t){this.cards=this.cards.filter(e=>e.id!==t)}render(){return u`
      <div class="container">
        <h2 class="title">¡Añade tu Tarjeta!</h2>
        <!-- Formulario para agregar nuevas tarjetas -->
        <div class="form-container">
          <form @submit="${this.handleSubmit}">
            <input type="text" name="title" placeholder="Título" required />
            <input
              type="text"
              name="subtitulo"
              placeholder="Subtítulo"
              required
            />
            <input
              type="text"
              name="listItem"
              placeholder="Añade un elemento a tu lista"
              required
            />
            <input
              type="text"
              name="img"
              placeholder="Cargar imagen url (opcional)"
            />
            <div class="button-container-form">
              <button type="submit">
                <span slot="button-slot">Agregar Tarjeta</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Contenedor de tarjetas -->
        <div class="card-container">
          ${this.cards.map((t,e)=>u`
              <card-component
                .title="${t.title}"
                .subtitulo="${t.subtitulo}"
                .listItems="${t.listItems}"
                .img="${t.img||this.fixedImage}"
                data-index="${t.id}"
              >
                <!-- Botón de eliminar dentro del card-component -->
                <div class="button-delete">
                  <button
                    class="delete-button"
                    @click="${()=>this.handleDelete(t.id)}"
                  >
                    <span slot="button-slot">Eliminar</span>
                  </button>
                </div>
              </card-component>
            `)}
        </div>
      </div>
    `}}m(J,"styles",A(Nt)),m(J,"properties",{cards:{type:Array},listItems:{type:Array}});customElements.define("card-container",J);
