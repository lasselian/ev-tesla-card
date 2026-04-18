(()=>{"use strict";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(s,t,i)},a=(i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:g}=Object,u=globalThis,f=u.trustedTypes,_=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??v)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[$("elementProperties")]=new Map,x[$("finalized")]=new Map,m?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=t=>t,E=w.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+k,U=`<${P}>`,N=document,H=()=>N.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,M=t=>T(t)||"function"==typeof t?.[Symbol.iterator],z="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,I=/>/g,j=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,D=/"/g,W=/^(?:script|style|textarea|title)$/i,F=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),V=F(1),q=(F(2),F(3),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),K=new WeakMap,Y=N.createTreeWalker(N,129);function Z(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=R;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===R?"!--"===l[1]?a=L:void 0!==l[1]?a=I:void 0!==l[2]?(W.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=j):void 0!==l[3]&&(a=j):a===j?">"===l[0]?(a=r??R,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?j:'"'===l[3]?D:B):a===D||a===B?a=j:a===L||a===I?a=R:(a=j,r=void 0);const d=a===j&&t[e+1].startsWith("/>")?" ":"";n+=a===R?i+U:c>=0?(s.push(o),i.slice(0,c)+C+i.slice(c)+k+d):i+k+(-2===c?e:d)}return[Z(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const a=t.length-1,o=this.parts,[l,c]=G(t,e);if(this.el=X.createElement(l,i),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Y.nextNode())&&o.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=c[n++],i=s.getAttribute(t).split(k),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?st:"?"===a[1]?rt:"@"===a[1]?nt:it}),s.removeAttribute(t)}else t.startsWith(k)&&(o.push({type:6,index:r}),s.removeAttribute(t));if(W.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],H()),Y.nextNode(),o.push({type:2,index:++r});s.append(t[e],H())}}}else if(8===s.nodeType)if(s.data===P)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)o.push({type:7,index:r}),t+=k.length-1}r++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===q)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);Y.currentNode=s;let r=Y.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new et(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new at(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=Y.nextNode(),n++)}return Y.currentNode=N,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),O(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):M(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new X(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new et(this.O(H()),this.O(H()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=Q(this,s[i+a],e,a),o===q&&(o=this._$AH[a]),n||=!O(o)||o!==this._$AH[a],o===J?t=J:t!==J&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class rt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class nt extends it{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??J)===q)return;const i=this._$AH,s=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==J&&(i===J||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(X,et),(w.litHtmlVersions??=[]).push("3.3.2");const lt=globalThis;class ct extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new et(e.insertBefore(H(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct});(lt.litElementVersions??=[]).push("4.2.2");const dt=n`
  :host {
    display: block;
    --accent-start: var(--tc-line-start, #2da8ff);
    --accent-end:   var(--tc-line-end,   #b24aff);
  }

  /* ── Card — inherit from HA theme ──────────── */
  ha-card {
    overflow: hidden;
    padding: 10px 0;
    transition: box-shadow 0.6s ease;
  }

  ha-card.is-charging {
    box-shadow: 0 0 24px -4px rgba(45, 168, 255, 0.12);
  }

  /* ── Header ────────────────────────────────── */
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px 6px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-text-color);
    letter-spacing: -0.01em;
  }

  .location-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px 4px 7px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.02em;
    --mdc-icon-size: 13px;
  }

  .location-badge.home {
    background: rgba(48, 209, 88, 0.12);
    color: #30d158;
    border: 1px solid rgba(48, 209, 88, 0.2);
  }

  .location-badge.home--pulse {
    animation: homePulse 3s ease-in-out infinite;
  }

  .location-badge.away {
    background: rgba(255, 159, 10, 0.10);
    color: #ff9f0a;
    border: 1px solid rgba(255, 159, 10, 0.18);
  }

  /* ── Car image ─────────────────────────────── */
  .car-stage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 8px 8px;
  }

  .car-image {
    width: 92%;
    height: auto;
    display: block;
    object-fit: contain;
    filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.45));
    animation: carFadeIn 0.5s ease both;
  }

  .car-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 140px;
    --mdc-icon-size: 72px;
    color: var(--secondary-text-color);
    opacity: 0.15;
  }

  /* ── Stats panel ───────────────────────────── */
  .stats {
    position: relative;
    z-index: 1;
    margin: -16px 12px 4px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }

  /* ── Battery row ───────────────────────────── */
  .battery-row {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 16px 12px;
  }

  .battery-pct {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--primary-text-color);
    line-height: 1;
    font-variant-numeric: tabular-nums;
    min-width: 50px;
  }

  .battery-pct .unit {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.45;
    vertical-align: super;
    margin-left: 1px;
  }

  .battery-bar-wrap {
    flex: 1;
  }

  .battery-bar-track {
    position: relative;
    height: 8px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.08);
    overflow: visible;
  }

  .battery-bar-fill {
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(to right, var(--accent-start), var(--accent-end));
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .battery-bar-fill.tier-high {
    background: linear-gradient(to right, #30d158, #34c759);
  }

  .battery-bar-fill.tier-mid {
    background: linear-gradient(to right, #ff9f0a, #ff6b00);
  }

  .battery-bar-fill.tier-low {
    background: linear-gradient(to right, #ff453a, #ff2d20);
    animation: lowBatteryPulse 2s ease-in-out infinite;
  }

  /* charging shimmer sweep */
  .battery-bar-fill.charging::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.28) 50%,
      transparent 100%
    );
    background-size: 300px 100%;
    animation: shimmer 3.5s linear infinite;
  }

  /* charging glow on bar */
  .battery-bar-fill.charging {
    box-shadow: 0 0 8px rgba(45, 168, 255, 0.35);
  }

  /* charge limit marker on the track */
  .charge-limit-marker {
    position: absolute;
    top: -3px;
    bottom: -3px;
    width: 2.5px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 1.5px;
    transform: translateX(-1px);
  }

  .charge-limit-value {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 11px;
    font-weight: 600;
    color: var(--secondary-text-color);
    opacity: 0.5;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    flex-shrink: 0;
    --mdc-icon-size: 12px;
  }

  /* ── Charging row ──────────────────────────── */
  .charging-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    background: linear-gradient(
      135deg,
      rgba(45, 168, 255, 0.06) 0%,
      rgba(178, 74, 255, 0.04) 100%
    );
  }

  .charging-indicator {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--accent-start);
    font-size: 12px;
    font-weight: 600;
    --mdc-icon-size: 16px;
  }

  .charging-indicator ha-icon {
    animation: chargePulse 2s ease-in-out infinite;
    filter: drop-shadow(0 0 4px var(--accent-start));
  }

  .charging-power {
    font-size: 16px;
    font-weight: 700;
    color: var(--primary-text-color);
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
  }

  .charging-power-unit {
    font-size: 11px;
    font-weight: 500;
    opacity: 0.45;
    margin-left: 2px;
  }

  .charging-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .charging-eta {
    font-size: 12px;
    font-weight: 600;
    color: var(--secondary-text-color);
    opacity: 0.7;
    font-variant-numeric: tabular-nums;
  }

  /* ── Info grid ─────────────────────────────── */
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .info-grid.single {
    grid-template-columns: 1fr;
  }

  .info-cell {
    padding: 10px 16px 12px;
    text-align: center;
  }

  .info-cell:nth-child(even) {
    border-left: 1px solid rgba(255, 255, 255, 0.06);
  }

  .info-label {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--secondary-text-color);
    opacity: 0.6;
    margin-bottom: 3px;
  }

  .info-icon {
    --mdc-icon-size: 16px;
    opacity: 0.85;
    flex-shrink: 0;
  }

  .info-value {
    font-size: 16px;
    font-weight: 700;
    color: var(--primary-text-color);
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
  }

  .info-unit {
    font-size: 11px;
    font-weight: 500;
    opacity: 0.4;
    margin-left: 2px;
  }

  /* ── Animations ────────────────────────────── */
  @keyframes carFadeIn {
    from { opacity: 0; transform: translateY(6px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes shimmer {
    from { background-position: -300px 0; }
    to   { background-position: 600px 0; }
  }

  @keyframes chargePulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.5; }
  }

  @keyframes lowBatteryPulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.65; }
  }

  @keyframes homePulse {
    0%, 100% { box-shadow: 0 0 8px rgba(48, 209, 88, 0.08); }
    50%       { box-shadow: 0 0 16px rgba(48, 209, 88, 0.25); }
  }
`;const _TM={m3:{l:"Model 3",w:[{v:"W40B",l:'18" Photon'},{v:"WY19B",l:'19" Nova'}]},my:{l:"Model Y",w:[{v:"WY19B",l:'19" Gemini'},{v:"WY20P",l:'20" Induction'}]},ms:{l:"Model S",w:[{v:"W32D",l:'19" Tempest'},{v:"WT22P",l:'21" Arachnid'}]},mx:{l:"Model X",w:[{v:"W32D",l:'20" Cyberstream'},{v:"WT22P",l:'22" Turbine'}]},ct:{l:"Cybertruck",w:[{v:"WTAB",l:"Standard"},{v:"WTA20B",l:'20" Range'}]}};const _TC=[{v:"PPSW",l:"Pearl White"},{v:"PPB1",l:"Solid Black"},{v:"PMNG",l:"Midnight Silver"},{v:"PPSB",l:"Deep Blue Metallic"},{v:"PPMR",l:"Multi-Coat Red"},{v:"PMDY",l:"Quicksilver"}];class pt extends ct{static properties={_config:{state:!0},_hass:{state:!0},_tsModel:{state:!0},_tsColor:{state:!0},_tsWheel:{state:!0}};static styles=n`
    :host { display: block; }

    ha-textfield,
    ha-selector {
      display: block;
      width: 100%;
      margin-bottom: 12px;
    }

    .section-title {
      font-size: 0.75em;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--secondary-text-color);
      margin: 16px 0 8px;
      font-weight: 600;
    }

    .section-title:first-child { margin-top: 0; }

    .optional-note {
      font-size: 0.75em;
      color: var(--secondary-text-color);
      margin-left: 4px;
      font-weight: 400;
      text-transform: none;
      letter-spacing: 0;
    }

    .clear-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.78em;
      color: var(--secondary-text-color);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 0 10px;
      text-decoration: underline;
    }
    .clear-btn:hover { color: var(--primary-text-color); }

    mwc-button {
      display: block;
      width: 100%;
      margin-top: 4px;
    }
  `;constructor(){super(),this._config={},this._tsModel="",this._tsColor="PPSW",this._tsWheel=""}set hass(t){this._hass=t}setConfig(t){this._config={...t}}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config}},bubbles:!0,composed:!0}))}_set(t,e){if(""===e||null==e){const e={...this._config};delete e[t],this._config=e}else this._config={...this._config,[t]:e};this._fire()}_buildTeslaUrl(){const m=this._tsModel,c=this._tsColor,w=this._tsWheel;if(!m||!c||!w)return null;return`https://static-assets.tesla.com/v1/compositor/?model=${m}&view=STUD_3QTR&size=1440&options=$${c},$${w}&bkba_opt=1`}_entitySelector(t,e,i){const s=i?{entity:{domain:i}}:{entity:{}};return V`
      <ha-selector
        .hass=${this._hass}
        .selector=${s}
        .label=${e}
        .value=${this._config[t]||""}
        @value-changed=${e=>this._set(t,e.detail.value)}
      ></ha-selector>
    `}render(){return this._hass&&this._config?V`

      <div class="section-title">General</div>

      <ha-textfield
        label="Title"
        .value=${this._config.title??"Tesla"}
        @input=${t=>this._set("title",t.target.value)}
      ></ha-textfield>

      <div class="section-title">Entities</div>

      ${this._entitySelector("battery_entity","Battery level","sensor")}
      ${this._entitySelector("charging_entity","Charging state",["binary_sensor","sensor"])}
      ${this._entitySelector("location_entity","Location",["device_tracker","sensor","binary_sensor"])}

      <div class="section-title">
        Optional
        <span class="optional-note">— leave blank to hide</span>
      </div>

      ${this._entitySelector("range_entity","Estimated range","sensor")}
      ${this._entitySelector("charge_limit_entity","Charge limit","sensor")}
      ${this._entitySelector("odometer_entity","Odometer","sensor")}
      ${this._entitySelector("charging_power_entity","Charging power","sensor")}
      ${this._entitySelector("time_remaining_entity","Time remaining","sensor")}
      ${this._entitySelector("image_entity","Image entity (entity_picture)",null)}

      <div class="section-title">
        Car image URL
        <span class="optional-note">— overrides image entity</span>
      </div>

      <ha-textfield
        label="Image URL"
        .value=${this._config.image_url??""}
        placeholder="https://static-assets.tesla.com/v1/compositor/…"
        @change=${t=>this._set("image_url",t.target.value)}
      ></ha-textfield>

      ${this._config.image_url?V`
        <button class="clear-btn" @click=${()=>this._set("image_url",null)}>
          <ha-icon icon="mdi:close" style="--mdc-icon-size:13px"></ha-icon>
          Clear image URL
        </button>
      `:J}

      <div class="section-title">Tesla Model Picker</div>
      <ha-selector
        .hass=${this._hass}
        .selector=${{select:{options:Object.entries(_TM).map(([k,v])=>({value:k,label:v.l})),mode:"dropdown"}}}
        .label=${"Model"}
        .value=${this._tsModel||""}
        @value-changed=${e=>{this._tsModel=e.detail.value;this._tsWheel=""}}
      ></ha-selector>
      <ha-selector
        .hass=${this._hass}
        .selector=${{select:{options:_TC.map(c=>({value:c.v,label:c.l})),mode:"dropdown"}}}
        .label=${"Color"}
        .value=${this._tsColor||""}
        @value-changed=${e=>{this._tsColor=e.detail.value}}
      ></ha-selector>
      ${this._tsModel?V`
        <ha-selector
          .hass=${this._hass}
          .selector=${{select:{options:_TM[this._tsModel].w.map(w=>({value:w.v,label:w.l})),mode:"dropdown"}}}
          .label=${"Wheels"}
          .value=${this._tsWheel||""}
          @value-changed=${e=>{this._tsWheel=e.detail.value}}
        ></ha-selector>
      `:""}
      <mwc-button
        raised
        ?disabled=${!this._tsModel||!this._tsColor||!this._tsWheel}
        @click=${()=>{const u=this._buildTeslaUrl();if(u)this._set("image_url",u);}}
      >Apply Tesla image</mwc-button>
    `:V``}}customElements.define("ev-tesla-card",class extends ct{static styles=dt;static properties={_hass:{state:!0},_config:{state:!0}};_cachedImageUrl=null;setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}set hass(t){this._hass=t}_state(t){return this._hass&&t?this._hass.states[t]??null:null}get _batteryLevel(){const t=this._state(this._config?.battery_entity);if(!t)return null;const e=parseFloat(t.state);return isNaN(e)?null:e}get _isCharging(){const t=this._state(this._config?.charging_entity);return t?["on","charging"].includes(t.state?.toLowerCase()):null}get _chargingPower(){const t=this._state(this._config?.charging_power_entity);if(!t)return null;const e=parseFloat(t.state);if(isNaN(e)||0===e)return null;return{value:Number.isInteger(e)?e:Math.round(10*e)/10,unit:t.attributes?.unit_of_measurement??"kW"}}get _chargeLimit(){const t=this._state(this._config?.charge_limit_entity);if(!t)return null;const e=parseFloat(t.state);return isNaN(e)?null:e}get _isHome(){const t=this._state(this._config?.location_entity);return t?"home"===t.state?.toLowerCase():null}get _range(){const t=this._state(this._config?.range_entity);if(!t)return null;const e=parseFloat(t.state);return isNaN(e)?null:{value:Math.round(e),unit:t.attributes?.unit_of_measurement??"km"}}get _odometer(){const t=this._state(this._config?.odometer_entity);if(!t)return null;const e=parseFloat(t.state);return isNaN(e)?null:{value:Math.round(e).toLocaleString(),unit:t.attributes?.unit_of_measurement??"km"}}get _timeRemaining(){const t=this._state(this._config?.time_remaining_entity);if(!t)return null;const e=parseFloat(t.state);if(isNaN(e)||e<=0)return null;const i=(t.attributes?.unit_of_measurement??"").toLowerCase();let s=e;"h"!==i&&"hours"!==i||(s=60*e);const r=Math.floor(s/60),n=Math.round(s%60);return r>0&&n>0?`${r}h ${n}m`:r>0?`${r}h`:`${n}m`}get _imageUrl(){const t=this._config;let u=null;if(t?.image_url)u=t.image_url;else{const e=this._state(t?.image_entity);if(e?.attributes?.entity_picture){const p=e.attributes.entity_picture;u=p.startsWith("/")&&this._hass?.hassUrl?`${this._hass.hassUrl}${p}`:p}}if(u!=null){const nb=u.split("?")[0],ob=(this._cachedImageUrl||"").split("?")[0];if(nb!==ob)this._cachedImageUrl=u}return this._cachedImageUrl||null}render(){const t=(this._config||{}).title??"Tesla",e=this._batteryLevel,i=!0===this._isCharging,s=this._chargingPower,r=this._timeRemaining,n=this._chargeLimit,a=this._isHome,o=this._range,l=this._odometer,c=this._imageUrl,h=null===e?"":e>=60?"tier-high":e>=25?"tier-mid":"tier-low",d=[];return o&&d.push({icon:"mdi:road-variant",label:"Range",value:o.value,unit:o.unit}),i&&null!==n&&d.push({icon:"mdi:battery-charging-high",label:"Charge limit",value:n,unit:"%"}),!i&&l&&d.push({icon:"mdi:counter",label:"Odometer",value:l.value,unit:l.unit}),V`
      <ha-card class="${i?"is-charging":""}">

        <!-- header -->
        <div class="card-header">
          ${t?V`<div class="card-title">${t}</div>`:V`<div></div>`}
          ${null!==a?V`
            <div class="location-badge ${a?"home home--pulse":"away"}">
              <ha-icon icon="${a?"mdi:home-variant":"mdi:map-marker-outline"}"></ha-icon>
              ${a?"Home":"Away"}
            </div>
          `:""}
        </div>

        <!-- car image -->
        <div class="car-stage">
          ${c?V`<img class="car-image" loading="lazy" src="${c}" alt="${t}">`:V`
                <div class="car-placeholder">
                  <ha-icon icon="mdi:car-electric"></ha-icon>
                </div>
              `}
        </div>

        <!-- stats -->
        <div class="stats">

          <!-- battery row -->
          <div class="battery-row">
            <div class="battery-pct">
              ${null!==e?V`${Math.round(e)}<span class="unit">%</span>`:V`&mdash;`}
            </div>
            <div class="battery-bar-wrap">
              <div class="battery-bar-track">
                <div
                  class="battery-bar-fill ${i?"charging":""} ${h}"
                  style="width: ${e??0}%"
                ></div>
                ${null!==n?V`
                  <div class="charge-limit-marker" style="left: ${n}%"></div>
                `:""}
              </div>
            </div>
            ${null!==n?V`
              <div class="charge-limit-value">
                <ha-icon icon="mdi:flag-checkered"></ha-icon>
                ${n}%
              </div>
            `:""}
          </div>

          <!-- charging row (only when charging) -->
          ${i?V`
            <div class="charging-row">
              <div class="charging-indicator">
                <ha-icon icon="mdi:lightning-bolt"></ha-icon>
                <span>Charging${r?V` &middot; ${r} left`:""}</span>
              </div>
              <div class="charging-right">
                ${s?V`
                  <div class="charging-power">
                    ${s.value}<span class="charging-power-unit">${s.unit}</span>
                  </div>
                `:""}
              </div>
            </div>
          `:""}

          <!-- info grid -->
          ${d.length?V`
            <div class="info-grid ${1===d.length?"single":""}">
              ${d.map(t=>V`
                <div class="info-cell">
                  <div class="info-label">
                    <ha-icon class="info-icon" icon="${t.icon}"></ha-icon>
                    ${t.label}
                  </div>
                  <div class="info-value">
                    ${t.value}<span class="info-unit">${t.unit}</span>
                  </div>
                </div>
              `)}
            </div>
          `:""}

        </div>
      </ha-card>
    `}static getConfigElement(){return document.createElement("ev-tesla-card-editor")}static getStubConfig(){return{title:"Tesla",battery_entity:"sensor.tesla_battery_level",charging_entity:"binary_sensor.tesla_charging",location_entity:"device_tracker.tesla_location_tracker"}}}),customElements.define("ev-tesla-card-editor",pt),window.customCards=window.customCards||[],window.customCards.push({type:"ev-tesla-card",name:"EV Tesla Card",description:"Sleek Tesla vehicle status card",preview:!0})})();