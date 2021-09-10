/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),n=new Map;class s{constructor(t,n){if(this._$cssResult$=!0,n!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=n.get(this.cssText);return t&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const i=t=>new s("string"==typeof t?t:t+"",e),o=(t,...n)=>{const i=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s(i,e)},r=(e,n)=>{t?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style");n.textContent=t.cssText,e.appendChild(n)}))},a=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return i(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l,c;const h={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},d=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const s=this._$Eh(n,e);void 0!==s&&(this._$Eu.set(s,n),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,n,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return r(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$Eg(t,e,n=u){var s,i;const o=this.constructor._$Eh(t,n);if(void 0!==o&&!0===n.reflect){const r=(null!==(i=null===(s=n.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==i?i:h.toAttribute)(e,n.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var n,s,i;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),a=t.converter,l=null!==(i=null!==(s=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==i?i:h.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,n){let s=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,n))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v,g;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null===(l=globalThis.reactiveElementPlatformSupport)||void 0===l||l.call(globalThis,{ReactiveElement:p}),(null!==(c=globalThis.reactiveElementVersions)&&void 0!==c?c:globalThis.reactiveElementVersions=[]).push("1.0.0-rc.4");const f=globalThis.trustedTypes,b=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,w="?"+m,y=`<${w}>`,x=document,$=(t="")=>x.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,C=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,j=/'/g,O=/"/g,P=/^(?:script|style|textarea)$/i,q=(t=>(e,...n)=>({_$litType$:t,strings:e,values:n}))(1),E=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),A=new WeakMap,_=x.createTreeWalker(x,129,null,!1),D=(t,e)=>{const n=t.length-1,s=[];let i,o=2===e?"<svg>":"",r=M;for(let e=0;e<n;e++){const n=t[e];let a,l,c=-1,h=0;for(;h<n.length&&(r.lastIndex=h,l=r.exec(n),null!==l);)h=r.lastIndex,r===M?"!--"===l[1]?r=z:void 0!==l[1]?r=C:void 0!==l[2]?(P.test(l[2])&&(i=RegExp("</"+l[2],"g")),r=T):void 0!==l[3]&&(r=T):r===T?">"===l[0]?(r=null!=i?i:M,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?T:'"'===l[3]?O:j):r===O||r===j?r=T:r===z||r===C?r=M:(r=T,i=void 0);const d=r===T&&t[e+1].startsWith("/>")?" ":"";o+=r===M?n+y:c>=0?(s.push(a),n.slice(0,c)+"$lit$"+n.slice(c)+m+d):n+m+(-2===c?(s.push(void 0),e):d)}const a=o+(t[n]||"<?>")+(2===e?"</svg>":"");return[void 0!==b?b.createHTML(a):a,s]};class N{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let i=0,o=0;const r=t.length-1,a=this.parts,[l,c]=D(t,e);if(this.el=N.createElement(l,n),_.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=_.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const n=c[o++];if(t.push(e),void 0!==n){const t=s.getAttribute(n.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(n);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?I:"@"===e[1]?R:L})}else a.push({type:6,index:i})}for(const e of t)s.removeAttribute(e)}if(P.test(s.tagName)){const t=s.textContent.split(m),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let n=0;n<e;n++)s.append(t[n],$()),_.nextNode(),a.push({type:2,index:++i});s.append(t[e],$())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf(m,t+1));)a.push({type:7,index:i}),t+=m.length-1}i++}}static createElement(t,e){const n=x.createElement("template");return n.innerHTML=t,n}}function H(t,e,n=t,s){var i,o,r,a;if(e===E)return e;let l=void 0!==s?null===(i=n._$Cl)||void 0===i?void 0:i[s]:n._$Cu;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,n,s)),void 0!==s?(null!==(r=(a=n)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:n._$Cu=l),void 0!==l&&(e=H(t,l._$AS(t,e.values),l,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:n},parts:s}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(n,!0);_.currentNode=i;let o=_.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new U(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new K(o,this,t)),this.v.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=_.nextNode(),r++)}return i}m(t){let e=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class U{constructor(t,e,n,s){var i;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cg=null===(i=null==s?void 0:s.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),k(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==E&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==F&&k(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:n,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(n);else{const t=new B(i,this),e=t.p(this.options);t.m(n),this.S(e),this._$AH=t}}_$AC(t){let e=A.get(t.strings);return void 0===e&&A.set(t.strings,e=new N(t)),e}M(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,s=0;for(const i of t)s===e.length?e.push(n=new U(this.A($()),this.A($()),this,this.options)):n=e[s],n._$AI(i),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class L{constructor(t,e,n,s,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,s){const i=this.strings;let o=!1;if(void 0===i)t=H(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const s=t;let r,a;for(t=i[0],r=0;r<i.length-1;r++)a=H(this,s[n+r],e,r),a===E&&(a=this._$AH[r]),o||(o=!k(a)||a!==this._$AH[r]),a===F?t=F:t!==F&&(t+=(null!=a?a:"")+i[r+1]),this._$AH[r]=a}o&&!s&&this.k(t)}k(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends L{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===F?void 0:t}}class I extends L{constructor(){super(...arguments),this.type=4}k(t){t&&t!==F?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class R extends L{constructor(t,e,n,s,i){super(t,e,n,s,i),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=H(this,t,e,0))&&void 0!==n?n:F)===E)return;const s=this._$AH,i=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var W,G,Q;null===(v=globalThis.litHtmlPlatformSupport)||void 0===v||v.call(globalThis,N,U),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.0.0-rc.5");class J extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,n)=>{var s,i;const o=null!==(s=null==n?void 0:n.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;o._$litPart$=r=new U(e.insertBefore($(),t),t,void 0,null!=n?n:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return E}}function Z(t,e){return Array.from({length:e-t+1},((t,e)=>e))}J.finalized=!0,J._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:J}),null===(G=globalThis.litElementPlatformSupport)||void 0===G||G.call(globalThis,{LitElement:J}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.0.0-rc.4");class Y{constructor(t,e,n,s=1){this.x=t,this.y=e,this.z=n,this.costs=s}equals(t){return null!==t&&this.x===t.x&&this.y===t.y&&this.z===t.z}add(t){const{x:e,y:n,z:s}=this;return new Y(e+t.x,n+t.y,s+t.z)}remove(t){const{x:e,y:n,z:s}=this;return new Y(e-t.x,n-t.y,s-t.z)}vector(t){return new Y(t.x-this.x,t.y-this.y,t.z-this.z)}distance(t){return Math.max(Math.abs(this.x-t.x),Math.abs(this.y-t.y),Math.abs(this.z-t.z))}heuristic(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}range(t){const e=[];for(let n=-t;n<=t;n++)for(let s=Math.max(-t,-n-t);s<=Math.min(t,-n+t);s++)e.push(this.add(new Y(n,s,-n-s)));return e}direction(t){return X[t]}directionTo(t){const e=Z(0,5).find((e=>this.neighbor(e).equals(t)));return void 0!==e&&e>=0?this.direction(e):null}neighbor(t){return this.add(this.direction(t))}neighbors(){return Z(0,5).map((t=>this.neighbor(t)))}cost(){return this.costs}toPosition(){const t=this.x,e=this.z+(this.x+(1&this.x))/2;return new nt(e,t)}toCoords(){return this.toPosition().toCoords()}toString(){return`${this.x}:${this.y}:${this.z}`}}const X=[new Y(1,-1,0),new Y(1,0,-1),new Y(0,1,-1),new Y(-1,1,0),new Y(-1,0,1),new Y(0,-1,1)];function tt(t,e){return Math.abs(Math.abs(t.col-e.col)+Math.abs(t.row-e.row))}const et={manhattan:[{row:0,col:-1},{row:1,col:0},{row:0,col:1},{row:-1,col:0}],euclid:[{row:1,col:-1},{row:-1,col:1},{row:1,col:0},{row:0,col:1},{row:-1,col:0},{row:0,col:-1},{row:-1,col:-1},{row:1,col:1}]};class nt{constructor(t,e,n="manhattan"){this.row=t,this.col=e,this.system=n}vector(t){return new nt(t.row-this.row,t.col-this.col)}toCube(){const t=this.col,e=this.row-(this.col+(1&this.col))/2;return new Y(t,-t-e,e)}toCoords(){const{row:t,col:e}=this;return{col:e,row:t}}neighbor(t){const e=st(et[this.system][t]);return e.system=this.system,this.add(e)}neighbors(){return Z(0,et[this.system].length-1).map((t=>this.neighbor(t)))}distance(t){return function(t,e){return Math.sqrt(Math.pow(e.col-t.col,2)+Math.pow(e.row-t.row,2))}(this,t)}manhattanDistance(t){return tt(this,t)}add(t){const{col:e,row:n}=this;return new nt(n+t.row,e+t.col,this.system)}remove(t){const{col:e,row:n}=this;return new nt(n-t.row,e-t.col,this.system)}equals(t){return null!=t&&t.col===this.col&&t.row===this.row}toString(){return`${this.col}:${this.row}`}toEuclidPosition(){return new nt(this.row,this.col,"euclid")}toManhattanPosition(){return new nt(this.row,this.col,"manhattan")}static fromString(t){if(!t)return null;const[e,n]=t.split(":").map((t=>parseInt(t,10)));return new nt(n,e)}}const st=({row:t,col:e})=>new nt(t,e);class it{constructor(t){this.coords=t}distance(t){return Math.sqrt(Math.pow(this.coords.col-t.coords.col,2)+Math.pow(this.coords.row-t.coords.row,2))}manhattanDistance(t){return tt(this.coords,t.coords)}toString(){return`${this.coords.col}:${this.coords.row}`}}class ot{constructor(t,e,n=!1,s=0){this.rectangle=t,this.selected=e,this.hovered=n,this.distance=s}}const rt=(t,e=!1,n=!1)=>new ot((t=>new it(t))(t),e,n);function at(t,[e,n]){return e.toLowerCase()!==e?t[e]=Object.assign(Object.assign({},n),{attribute:e.replace(/[A-Z]/g,"-$&").toLowerCase()}):t[e]=n,t}function lt(t){return"boolean"==typeof t?{type:Boolean}:Array.isArray(t)?{type:Array}:"object"==typeof t?{type:Object}:{}}const ct=t=>(t=>void 0!==t&&void 0!==t.props)(t)?(t.props||[]).reduce(((t,e)=>(Object.entries(e).forEach((e=>t=at(t,e))),t)),{}):(t=>{return e=t||{},Object.entries(e).reduce(((t,[e,n])=>at(t,[e,lt(n)])),{});var e})(null==t?void 0:t.defaults),ht={},dt=(t,e,n)=>{if(ht[t])return ht[t];customElements.define(t,class extends J{static get properties(){return ct(n)}static get styles(){return null==n?void 0:n.styles}constructor(){super(),(t=>void 0!==t&&void 0!==t.defaults)(n)&&Object.entries(n.defaults).forEach((([t,e])=>{this[t]=e}))}render(){return e(this)}});const s=document.createElement(t);return ht[t]=s,s};var ut="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},pt={},vt={},gt={};Object.defineProperty(gt,"t",{value:!0}),gt.shallowClone=void 0,gt.shallowClone=function(t){return"object"!=typeof t||!t||t instanceof Date||t instanceof RegExp?t:Array.isArray(t)?[...t]:Object.assign({},t)};var ft={};function bt(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}Object.defineProperty(ft,"t",{value:!0}),ft.withReducer=ft.withState=ft.decorate=ft.asUpdateableLitElement=void 0,ft.asUpdateableLitElement=bt;const mt="__registered_states";function wt(t){const e=t;if(e[mt])return e;const n=bt(t),s=n.updated;return e[mt]={index:0,count:0,states:[],reducers:[]},n.updated=t=>(e[mt].index=0,s(t)),e}ft.decorate=wt,ft.withState=function(t,e,n={}){const s=wt(t),{index:i,count:o}=s[mt];return i===o?(s[mt].index++,s[mt].count++,s[mt].states.push(e),e):(s[mt].index++,n.updateDefault&&s[mt].states[i].inject(e.get()),s[mt].states[i])},ft.withReducer=function(t,e){const n=wt(t),{index:s,count:i,reducers:o}=n[mt];return s!==i||o[s-1]?n[mt].reducers[s-1]:(n[mt].reducers[s-1]=e,e)};var yt=ut&&ut.o||function(t,e,n,s){return new(n||(n=Promise))((function(i,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(vt,"t",{value:!0}),vt.useState=void 0;const xt=gt,$t=ft;vt.useState=(t,e,n={})=>{let s=xt.shallowClone(e);const i=[()=>t.requestUpdate()],o=t=>yt(void 0,void 0,void 0,(function*(){s!==t&&(s=xt.shallowClone(t),i.forEach((t=>t(s))))}));return $t.withState(t,new class{set value(t){o(t)}get value(){return s}set(t){return yt(this,void 0,void 0,(function*(){yield o(t)}))}subscribe(t){i.push(t)}inject(t){s=t}get(){return s}},n)};var kt={};Object.defineProperty(kt,"t",{value:!0}),kt.useReducer=void 0;const St=vt,Mt=ft;kt.useReducer=(t,e,n,s={})=>{const{get:i,set:o}=St.useState(t,n,s),r=[];return Mt.withReducer(t,{get:i,subscribe:t=>r.push(t),when:(t,e)=>r.push(((n,s)=>n===t&&e(s))),set:(n,a)=>{const l=e(i());l[n]&&(o(l[n](a)),r.forEach((t=>t(n,i()))),s.dispatchEvent&&t.dispatchEvent(new CustomEvent(n,{detail:i()})))}})},function(t){Object.defineProperty(t,"t",{value:!0});var e=vt;Object.defineProperty(t,"useState",{enumerable:!0,get:function(){return e.useState}});var n=kt;Object.defineProperty(t,"useReducer",{enumerable:!0,get:function(){return n.useReducer}})}(pt);var zt={},Ct={},Tt={};function jt(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}Object.defineProperty(Tt,"t",{value:!0}),Tt.withEffect=Tt.decorate=Tt.asUpdateableLitElement=void 0,Tt.asUpdateableLitElement=jt;const Ot="__registered_effects";function Pt(t){const e=t;if(e[Ot])return e;const n=jt(t),s=n.updated;return e[Ot]={index:0,count:0,effects:[]},n.updated=t=>(e[Ot].index=0,s(t)),e}Tt.decorate=Pt,Tt.withEffect=function(t,e){const n=Pt(t),{index:s,count:i}=n[Ot];return s===i?(n[Ot].index++,n[Ot].count++,n[Ot].effects.push(e),e):(n[Ot].index++,n[Ot].effects[s])},Object.defineProperty(Ct,"t",{value:!0}),Ct.useOnce=Ct.useEffect=void 0;const qt=Tt;function Et(t,e,n){const s=qt.withEffect(t,{on:e,observe:["__initial__dirty"]});s.observe.some(((t,e)=>n[e]!==t))&&s.on(),s.observe=n}Ct.useEffect=Et,Ct.useOnce=(t,e)=>Et(t,e,[]),function(t){Object.defineProperty(t,"t",{value:!0});var e=Ct;Object.defineProperty(t,"useEffect",{enumerable:!0,get:function(){return e.useEffect}}),Object.defineProperty(t,"useOnce",{enumerable:!0,get:function(){return e.useOnce}})}(zt);const Ft=(t,e,n,s)=>t.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({},s),{detail:n})));var At=zt.useOnce,_t=pt.useState;dt("rectangle-manhattan-distance",(({selected:t,hover:e})=>t&&e?q`<div>
        ${t.rectangle.toString()} -> ${e.rectangle.toString()}
      </div>
      <div class="presenter">
        <div>
          |${e.rectangle.coords.col} - ${t.rectangle.coords.col}| +
          |${e.rectangle.coords.row} - ${t.rectangle.coords.row}|
        </div>
        <div>
          = ${t.rectangle.manhattanDistance(e.rectangle)}
        </div>
      </div>`:q``),{styles:o`
  :host {
    display: block;
    margin: 5px auto;
    width: 20rem;
  }
  .presenter {
    display: flex;
  }
  .presenter div {
    flex-grow: 1;
  }
  .presenter div:first-child {
    text-align: left;
  }
  .presenter div:last-child {
    text-align: right;
  }
`});dt("rectangle-distance",(({selected:t,hover:e})=>t&&e?q`<div>
      ${t.rectangle.toString()} ->
      ${e.rectangle.toString()}
    </div>
    <div class="presenter">
      <div>
        sqrt((${e.rectangle.coords.col} -
        ${t.rectangle.coords.col})^2 +
        (${e.rectangle.coords.row} -
        ${t.rectangle.coords.row})^2)
      </div>
      <div>
        = ${t.rectangle.distance(e.rectangle).toFixed(2)}
      </div>
    </div>`:q``),{styles:o`
  :host {
    display: block;
    margin: 5px auto;
    width: 70vw;
  }
  .presenter {
    display: flex;
    font-size: 2rem;
  }
  .presenter div {
    flex-grow: 1;
  }
  .presenter div:first-child {
    text-align: left;
  }
  .presenter div:last-child {
    text-align: right;
  }
`,defaults:{selected:null,hover:null}});const Dt=(t,e,n,s)=>({x1:t,y1:e,x2:n,y2:s}),Nt=t=>{switch(t){case"south":return Dt("50%","100%","50%","50%");case"west":return Dt("0%","50%","50%","50%");case"east":return Dt("100%","50%","50%","50%");case"north-west":return Dt("0%","0%","50%","50%");case"south-west":return Dt("0%","100%","50%","50%");case"north-east":return Dt("100%","0%","50%","50%");case"south-east":return Dt("100%","100%","50%","50%");case"north":default:return Dt("50%","0%","50%","50%")}};dt("line-element",(({orientation:t,parent:e,color:n})=>{if("none"===t)return q``;const s=(t=>{switch(t){case"rectangle":default:return Nt}})(e)(t);return q`<svg>
      <line
        x1="${s.x1}"
        y1="${s.y1}"
        x2="${s.x2}"
        y2="${s.y2}"
        style="${n?"stroke:${color};":""}"
      />
    </svg>`}),{styles:[o`
:host {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
svg {
  width: 100%;
  height: 100%;
}
svg line {
  stroke: var(--colorContrast);
  stroke-width: 5;
}
`],defaults:{orientation:"none",parent:"rectangle",color:null}});dt("rectangle-element",(({rect:t,show:e,lines:n})=>{const s=[(null==t?void 0:t.selected)?"active":"",(null==t?void 0:t.hovered)?"hovered":""];return q`${n.map((t=>q`<line-element orientation="${t}"></line-element>`))}
      <div class="${s.join(" ")}">
        ${(()=>{switch(e){case"distance":return q`${null==t?void 0:t.distance.toString()}`;case"none":return q`&nbsp;`;case"coords":default:return q`${null==t?void 0:t.rectangle.toString()}`}})()}
      </div>`}),{styles:o`
  :host {
    position: relative;
    display: inline-block;
  }
  div {
    display: inline-block;
    width: 4rem;
    height: calc(4rem - 1rem);
    background: var(--colorShow);
    cursor: pointer;
    border: 2px solid var(--colorMain);
    padding-top: 1rem;
    transition: all 250ms linear;
  }
  div.active {
    background-color: var(--colorHighlight);
    color: var(--colorShow);
  }
  div.hovered {
    background-color: var(--colorFocus);
    color: var(--colorShow);
  }
`,defaults:{rect:null,show:"coords",lines:[]}}),dt("rectangle-row",(()=>q` <slot></slot> `),{styles:o`
    :host {
      display: block;
    }
  `});const Ht={rectangle:{"0:-1":"north","1:-1":"north-east","1:0":"east","1:1":"south-east","0:1":"south","-1:1":"south-west","-1:0":"west","-1:-1":"north-west"},cube:{"0:1:-1":"north","1:0:-1":"north-east","1:-1:0":"south-east","0:-1:1":"south","-1:0:1":"south-west","-1:1:0":"north-west"}},Bt=(t,e,n="rectangle")=>{const s={};if(!t)return s;const i=Ht[n],o=[t,...e.path].map((t=>"cube"===n?t.toCube():t));let r=null;for(const t of o)s[t.toString()]=[],r&&(s[t.toString()].push(i[r.remove(t).toString()]),s[r.toString()].push(i[t.remove(r).toString()])),r=t;return s},Ut=o`
.controls {
}
button {
  display: inline-block;
  margin: 5px 0;
  background: var(--colorShow);
  border: 1px solid var(--colorShow);
  color: var(--colorContrast);
  cursor: pointer;
  transition: all 1s linear;
}
button.active {
  background: var(--colorContrast);
  border: 1px solid var(--colorShow);
  color: var(--colorShow);
}
`;dt("rectangle-showpath-controls",(t=>{const{get:e,set:n}=_t(t,t.showPath);console.log("active showpath control");return q` <div class="controls">
    ${["euclid","taxicab"].map((t=>t)).map((s=>{return q`<button
          class="${i=s,e()===i?"active":""}"
          @click=${()=>{((t,e)=>{const n=new CustomEvent("changeShowPath",{detail:{showPath:e}});t.dispatchEvent(n)})(t,s),n(s)}}
        >
          ${s}
        </button>`;var i}))}
  </div>`}),{styles:Ut,defaults:{showPath:"euclid"}});class Lt{constructor(t=4086,e=Uint32Array){this.capacity=t,this.capacity=t,this._keys=[],this._priorities=new e(t+1),this.length=0}clear(){this.length=0}bubbleUp(t){const e=this._keys[t],n=this._priorities[t];for(;t>1;){const e=t>>>1;if(this._priorities[e]<=n)break;this._keys[t]=this._keys[e],this._priorities[t]=this._priorities[e],t=e}this._keys[t]=e,this._priorities[t]=n}bubbleDown(t){const e=this._keys[t],n=this._priorities[t],s=1+(this.length>>>1),i=this.length+1;for(;t<s;){const e=t<<1;if(e>=i)break;let s=this._priorities[e],o=this._keys[e],r=e;const a=e+1;if(a<i){const t=this._priorities[a];t<s&&(s=t,o=this._keys[a],r=a)}if(s>=n)break;this._keys[t]=o,this._priorities[t]=s,t=r}this._keys[t]=e,this._priorities[t]=n}push(t,e=0){if(this.length===this.capacity)throw new Error("Heap has reached capacity, can't push new items");const n=this.length+1;this._keys[n]=t,this._priorities[n]=e,this.bubbleUp(n),this.length++}pop(){const t=this._keys[1];return this.length--,this.length>0&&(this._keys[1]=this._keys[this.length+1],this._priorities[1]=this._priorities[this.length+1],this.bubbleDown(1)),t}peekPriority(){return this._priorities[1]}peek(){return this._keys[1]}toString(){if(0===this.length)return"(empty queue)";const t=Array(this.length-1);for(let e=0;e<this.length;e++)t[e]=this._priorities[e+1];return`[${t.join(" ")}]`}get[Symbol.toStringTag](){return"Heapify"}*[Symbol.iterator](){for(let t=0;t<this.length;t++){const e=this._priorities[t+1],n=this._keys[t+1];yield[n,e]}}*keys(){for(let t=0;t<this.length;t++)yield this._keys[t+1]}*priorities(){for(let t=0;t<this.length;t++)yield this._priorities[t+1]}}const Vt=t=>t.toString(),It=(t,e)=>{const n=new Lt;n.push(t,0);const s={},i={};for(s[Vt(t)]=void 0,i[Vt(t)]=0;n.length>0;){const t=n.pop();if(t.equals(e))break;if(n.length>1e3)throw new Error("No what kinda path are you searching for?!");for(const o of t.neighbors()){const r=e.distance(o),a=i[Vt(t)]+r;if(!i[Vt(o)]||a<i[Vt(o)]){i[Vt(o)]=a;const e=a+r;n.push(o,e),s[Vt(o)]=t.toString()}}}const o=t;let r=e;const a=[];do{a.push(r),r=nt.fromString(s[r.toString()]),r&&(r.system=t.system)}while(null!==r&&!r.equals(o));return{path:a.reverse(),costs:i[Vt(e)]}};function Rt(t,e,n,s){return t.forEach(((i,o)=>{i.forEach(((i,r)=>{o===n&&r===s?t[o][r]=rt(i.rectangle.coords,!i.selected):"distance"===e?(t[o][r]=rt(i.rectangle.coords,!1),t[o][r].distance=t[n][s].rectangle.manhattanDistance(t[o][r].rectangle)):i.selected&&(t[o][r]=rt(i.rectangle.coords,!1))}))})),[...t]}dt("rectangle-container",(t=>{const e=Z(0,t.cols).map((e=>Z(0,t.cols).map((t=>rt({row:e,col:t}))))),n=_t(t,e),s=_t(t,t.showPath);At(t,(()=>{if(t.selectDefault){const e=nt.fromString(t.selectDefault);e&&n.set(Rt(n.get(),t.show,e.row,e.col))}}));const i=((t,e)=>{switch(t){case"manhattan":default:return q`<rectangle-manhattan-distance
          .selected="${e().find((t=>t.selected))}"
          .hover="${e().find((t=>t.hovered))}"
        ></rectangle-manhattan-distance>`;case"geometry":return q`<rectangle-distance
          .selected="${e().find((t=>t.selected))}"
          .hover="${e().find((t=>t.hovered))}"
        ></rectangle-distance>`;case"none":return q``}})(t.distance,(()=>n.get().reduce(((t,e)=>[...t,...e]),[]))),o=(()=>{switch(s.get()){case"euclid":return t.euclidPathTo?Bt(nt.fromString(t.selectDefault),(i=nt.fromString(t.selectDefault),o=nt.fromString(t.euclidPathTo),i&&o?It(i.toEuclidPosition(),o.toEuclidPosition()):{path:[]})):null;case"taxicab":return t.manhattanPathTo?Bt(nt.fromString(t.selectDefault),(e=nt.fromString(t.selectDefault),(n=nt.fromString(t.manhattanPathTo))&&e?It(e.toManhattanPosition(),n.toManhattanPosition()):{path:[]})):null;default:return null}var e,n,i,o})();return q`${n.get().map(((e,s)=>q`<rectangle-row>
          ${e.map(((e,i)=>{var r;return q`<rectangle-element
              .rect="${e}"
              .lines="${o&&null!==(r=o[new nt(s,i).toString()])&&void 0!==r?r:[]}"
              show="${t.show}"
              @click="${()=>{n.set(Rt(n.get(),t.show,s,i))}}"
              @mouseover=${()=>{var e,o,r,a;n.set((e=n.get(),o=t.show,r=s,a=i,"distance"===o?e:(e.forEach(((t,n)=>{t.forEach(((t,s)=>{n===r&&s===a?e[n][s]=rt(t.rectangle.coords,t.selected,!0):t.hovered&&(e[n][s]=rt(t.rectangle.coords,t.selected,!1))}))})),[...e])))}}
            ></rectangle-element>`}))}
        </rectangle-row>`))}
    ${t.showPathControls?q`
          <rectangle-showpath-controls
            showPath=${s.get()}
            @changeShowPath="${t=>{s.set(t.detail.showPath)}}"
          ></rectangle-showpath-controls>
        `:""}
    ${i}`}),{styles:o`
  :host {
    display: block;
    margin-top: calc(16rem - 20px);
  }
`,defaults:{show:"coords",distance:"manhattan",selectDefault:null,cols:3,showPath:null,showPathControls:!1,euclidPathTo:null,manhattanPathTo:null}}),dt("graph-gatter",(()=>q`${Z(0,4).map((t=>Z(0,4).map((e=>q`<graph-gatter-element
            x="${t}"
            y="${e}"
          ></graph-gatter-element>`))))}`));dt("graph-gatter-element",(({x:t,y:e,step:n})=>q`<div style="${`left:${t*n}px;bottom:${e*n}px;`}"></div>`),{defaults:{x:0,y:0,step:100},styles:[o`
        div {
          display: block;
          position: absolute;
          width: ${100}px;
          height: ${100}px;
          border-top: 1px dashed var(--colorFocus);
          border-right: 1px dashed var(--colorFocus);
          z-index: 2;
        }
      `]});dt("graph-point",(({x:t,y:e,step:n})=>{const s=`left:${t*n-2}px;bottom:${e*n-2}px;`;return q`
      <div class="point" style="${s}"></div>
      <div class="label" style="${s}">x: ${t}<br />y:${e}</div>
    `}),{styles:o`
  .point {
    display: block;
    position: absolute;
    border: 3px solid var(--colorHighlight);
    z-index: 4;
  }
  .label {
    display: block;
    position: absolute;
    margin-left: -0.5rem;
    margin-bottom: 1rem;
    line-height: 1rem;
    font-size: 1rem;
    z-index: 3;
  }
`,defaults:{x:0,y:0,step:100}});dt("graph-element-line",(()=>q`<svg>
    <line x1="0px" y1="0px" x2="100px" y2="100px" />
    <line x1="100px" y1="100px" x2="200px" y2="200px" />
    <line x1="200px" y1="200px" x2="400px" y2="200px" />
  </svg>`),{styles:o`
:host {
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}
svg {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: rotate(180deg) scaleX(-1);
}
svg line {
  stroke: var(--colorContrast);
  stroke-width: 3;
}
`});dt("graph-element",(({withGatter:t,withLines:e})=>q`
      <graph-point x="1" y="1"></graph-point>
      <graph-point x="2" y="2"></graph-point>
      <graph-point x="2" y="4"></graph-point>
      <graph-point x="4" y="2"></graph-point>
      ${t?q`<graph-gatter></graph-gatter>`:q``}
      ${e?q`<graph-element-line
            .coords="${[{x1:1,x2:2,y1:1,y2:2}]}"
          ></graph-element-line>`:""}
    `),{styles:o`
  :host {
    position: relative;
    display: block;
    border-left: 4px solid var(--colorShow);
    border-bottom: 4px solid var(--colorShow);
    width: 33%;
    height: 60%;
    margin: 0 auto;
    z-index: 4;
  }
`,defaults:{withGatter:!1,withLines:!1}});var Kt=o`
:host {
  display: block;
  margin-top: 6rem;
}
.row {
  transition: all 500ms linear;
}
.even,
.odd {
  transition: all 500ms linear;
}

.hexagons .row {
  /* reverse the z-index order of the hexagons to deal with weird margins */
  transform: rotateY(1deg);
  transform-origin: 0 0;
  transform-style: preserve-3d;
}
.hexagons.flat .row {
  margin-top: -3.9rem;
}
.hexagons.flat .odd {
  margin-right: 9.25rem;
}
.hexagons.pointy .row {
  margin-top: -2.1rem;
}
.hexagons.pointy .odd {
  margin-right: 5.5rem;
}
`;class Wt{constructor(t,e,n=!1,s=!1,i=0){this.cube=t,this.selected=e,this.hovered=n,this.blocked=s,this.distance=i}}const Gt=(t,e=!1,n=!1)=>function(t){return t&&!isNaN(t.col)&&!isNaN(t.row)}(t)?new Wt(st(t).toCube(),e,n):new Wt(t,e,n),Qt=(t,e,n)=>{switch(t){case"even-q":return((t,e)=>t.map((t=>q`<div class="row even">
        ${t.filter((t=>1==(1&t.cube.toCoords().col))).map((t=>e(t)))}
      </div><div class="row odd">
        ${t.filter((t=>0==(1&t.cube.toCoords().col))).map((t=>e(t)))}
      </div>`)))(e,n);case"even-q-naive":return((t,e)=>t.map(((t,n)=>q`<div class="row ${0==(1&n)?"even":"odd"}">
        ${t.map((t=>e(t)))}
      </div>`)))(e,n);case"odd-q":case"odd-q-naive":default:return((t,e)=>t.map(((t,n)=>q`<div class="row ${0==(1&n)?"odd":"even"}">
        ${t.map((t=>e(t)))}
      </div>`)))(e,n)}};class Jt{constructor(t=(()=>""),e=(()=>""),n=(t=>t.cube.toString())){this.printFormula=t,this.printResult=e,this.show=n}}dt("hexagon-distance",(t=>{if(!t.selected||!t.hovered)return q``;const{show:e,printFormula:n,printResult:s}=t.renderer,i=s(),o=null!=(r=i)&&void 0!==r._$litType$?i:`= ${i}`;var r;return q`${t.hideHead?"":q`<div>
        ${e(t.selected)} -> ${e(t.hovered)}
      </div>`}
      <div class="presenter">
        <div>
          ${n()}
        </div>
        <div>
          ${o}
        </div>
      </div>`}),{styles:o`
:host {
  display: block;
  margin: 5px auto;
  width: 100%;
}
.presenter {
  display: flex;
}
.presenter div {
  flex-grow: 1;
}
.presenter div:first-child {
  text-align: left;
}
.presenter div:last-child {
  text-align: right;
}
`,defaults:{selected:null,hovered:null,hideHead:!1,renderer:new Jt}}),dt("hexagon-distance-manahattan-box",(t=>{const e=t.hexagons.reduce(((t,e)=>t||e.find((t=>t.selected))),void 0),n=t.hexagons.reduce(((t,e)=>t||e.find((t=>t.hovered))),void 0);return e&&n?q`
      <hexagon-distance
        .selected=${e}
        .hovered=${n}
        .renderer=${new Jt((()=>`${e.cube.toPosition().toString()}-${n.cube.toPosition().toString()}`),(()=>tt(e.cube.toCoords(),n.cube.toCoords()).toString()),(t=>t.cube.toPosition().toString()))}
      ></hexagon-distance>
    `:q``}),{defaults:{hexagons:[]}});const Zt=t=>t>=0?`+${t}`:`${t}`;dt("hexagon-distance-manahattan-cube-hint",(t=>{const e=t.hexagons.reduce(((t,e)=>t||e.find((t=>t.selected))),void 0),n=t.hexagons.reduce(((t,e)=>t||e.find((t=>t.hovered))),void 0);return e&&n?q`
      <hexagon-distance
        hideHead
        .selected=${e}
        .hovered=${n}
        .renderer=${new Jt((()=>q`<pre style="font-size: 1rem;">
${Zt(n.cube.x)} -> ${Zt(e.cube.x)}
${Zt(n.cube.y)} -> ${Zt(e.cube.y)}
${Zt(n.cube.z)} -> ${Zt(e.cube.z)}
</pre>`),(()=>q`<pre
              style="font-size: 1rem;"
            ><br> => &nbsp;&nbsp;&nbsp;${e.cube.distance(n.cube).toString()}</pre>`),(t=>t.cube.toString()))}
      ></hexagon-distance>
    `:q``}),{defaults:{hexagons:[]}});const Yt=t=>t.toPosition().toString(),Xt=(t,e,n)=>((t,e,n)=>{const s=new Lt;s.push(t,0);const i={},o={},r=[];if(i[Yt(t)]=Yt(t),o[Yt(t)]=0,t.equals(e))return{path:[]};if(n(e))return{path:[]};for(;s.length>0;){const t=s.pop();if(t.equals(e))break;if(s.length>1e3)throw new Error("No what kinda path are you searching for?!");for(const a of t.neighbors().filter((t=>!i[Yt(t)]))){if(n(a))continue;const l=o[Yt(t)]+t.cost();(!o[Yt(a)]||l<o[Yt(a)])&&(o[Yt(a)]=l+e.heuristic(a),r.push(a.toPosition().toString()),s.push(a,l+e.heuristic(a)),i[Yt(a)]=t.toPosition().toString())}}const a=t.toPosition();let l=e.toPosition();const c=[];do{c.push(l),l=nt.fromString(i[l.toString()])}while(null!==l&&!l.equals(a));return{path:c.reverse(),visited:r}})(t,e,n).path.length;dt("label-uncover-distance",(t=>{var e;return t.distance?q`
      <div style="animation-delay: ${t.distance/2}s;">
        ${null!==(e=t.label)&&void 0!==e?e:t.distance}
      </div>
    `:q``}),{styles:o`
      div {
        display: inline-block;
        opacity: 0;
        animation: fadeIn 10s;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `});const te=t=>t.reduce(((t,e)=>[...t,...e]),[]),ee=t=>t.find((t=>t.selected)),ne=t=>t.toPosition().toString(),se=(t,e,n,s)=>{const i=new Lt;i.push(t,0);const o={},r={},a=[];if(o[ne(t)]=ne(t),r[ne(t)]=0,t.equals(e))return{path:[]};if(s(e))return{path:[]};for(;i.length>0;){const t=i.pop();if(t.equals(e))break;if(i.length>1e3)throw new Error("No what kinda path are you searching for?!");a.push(t.toPosition().toString());for(const l of t.neighbors().filter((t=>!o[ne(t)])).map((t=>{var e;return null!==(e=null==n?void 0:n.find((e=>e.equals(t))))&&void 0!==e?e:t}))){if(s(l))continue;a.some((t=>t===ne(l)))||a.push(ne(l));const n=r[ne(t)]+l.cost();(!r[ne(l)]||n<r[ne(l)])&&(r[ne(l)]=n,i.push(l,n+e.heuristic(l)),o[ne(l)]=t.toPosition().toString())}}const l=t.toPosition();let c=e.toPosition();const h=[];do{h.push(c),c=nt.fromString(o[c.toString()])}while(null!==c&&!c.equals(l));return{path:h.reverse(),visited:a}};function ie(t,e,n,s,i=!1){for(let o=0;o<t.length;o++)for(let r=0;r<t[o].length;r++){let a=t[o][r];a.cube.toString()===e.cube.toString()?a[n]!==s&&(a[n]=s,a=Object.assign({},a)):i||a[n]!==s||(a[n]=!s,a=Object.assign({},a)),t[o][r]=a}return[...t]}dt("hexagon-container",(t=>{const e=_t(t,[]),n=_t(t,t.orientation),s=_t(t,t.coordinates),{get:i,set:o}=e;return At(t,(()=>{const e=function({blocked:t,expensive:e,rows:n,cols:s}){const i=t.map((t=>{var e;return null===(e=nt.fromString(t))||void 0===e?void 0:e.toCube()})).filter((t=>void 0!==t)),o=e.map((t=>{var e;return null===(e=nt.fromString(t))||void 0===e?void 0:e.toCube()})).filter((t=>void 0!==t));return((t,e)=>Z(0,t).map((t=>Z(0,e).map((e=>Gt({row:t,col:e}))))))(n,s).map((t=>t.map((t=>(t.blocked=i.some((e=>null==e?void 0:e.equals(t.cube))),t.cube.costs=o.some((e=>null==e?void 0:e.equals(t.cube)))?5:1,t)))))}(t);if(o(e),t.selectDefault){const n=nt.fromString(t.selectDefault);if(!n)return;const s=e.reduce(((t,e)=>[...t,...e]),[]).find((t=>t.cube.toPosition().equals(n)));s&&o(ie(e,s,"selected",!0))}})),q`
      <div class="hexagons ${n.get()}">
        ${function({get:t,set:e},n,s,i){const o=t=>(Ft(i,"select",{container:i,hexagon:t},{cancelable:!0}),!Ft(i,"select",{container:i,hexagon:t},{cancelable:!0})),r=i.ignoreBoundaries?void 0:t().reduce(((t,e)=>[...t,...e]),[]).map((t=>t.cube)),a=i.ignoreBlocked?void 0:i.blocked.map((t=>nt.fromString(t).toCube()));let l=null;i.pathTo&&i.pathFrom&&(l=se(nt.fromString(i.pathFrom).toCube(),nt.fromString(i.pathTo).toCube(),r,function(t,e){return n=>!(!t||t.some((t=>t.equals(n))))||!(!e||!e.some((t=>t.equals(n))))}(r,a)));const c=((t,e,n)=>{switch(t){case"taxicab":return n&&e?Bt(e,n,"cube"):null;default:return null}})(i.showPath,nt.fromString(i.pathFrom),l),h=n=>{o(n)||e(ie(t(),n,"selected",!0))},d=n=>{e(ie(t(),n,"hovered",!0))},u=n=>{e(ie(t(),n,"hovered",!1,!0))};return Qt(s,t(),(e=>{var s;return q`<hexagon-element
        orientation="${n}"
        label="${"cube-coords"===i.label?"top":"center"}"
        .lines="${c&&null!==(s=c[e.cube.toString()])&&void 0!==s?s:[]}"
        @select="${()=>h(e)}"
        @hover="${()=>d(e)}"
        @unhover="${()=>u(e)}"
        ?selected="${e.selected||function({highlight:t},{cube:e}){return function(t,e){return!(!e||(t.col!==e.col&&e.col||t.row!==e.row)&&(t.row!==e.row&&e.row||t.col!==e.col))}(e.toCoords(),t)}(i,e)||function({pathFrom:t,pathTo:e},{cube:n}){return t&&n.toPosition().equals(nt.fromString(t))||e&&n.toPosition().equals(nt.fromString(e))}(i,e)}"
        ?hovered="${e.hovered||e.cube.costs>1}"
        ?blocked="${e.blocked}"
        style="transform: rotateY(-1deg);transform-origin: 0 0;"
      >
        ${((t,e,n,s)=>{switch(e){case"distance":{const e=n.reduce(((t,e)=>[...t,...e]),[]).find((t=>t.selected));return e?t.toPosition().manhattanDistance(e.cube.toPosition()).toString():""}case"cube-distance":{const e=ee(te(n));return e?t.distance(e.cube).toString():""}case"cube-coords":return q`${t.z}<br />${t.x}&nbsp;&nbsp;&nbsp;${t.y}`;case"uncover-cube-breadth-distance":{const e=te(n),s=ee(e);if(console.log("Selected",s),!s)return"";const i=e.map((t=>t.cube)),o=(t=>t.filter((t=>t.blocked)))(e).map((t=>t.cube)),r=Xt(t,s.cube,(t=>!i.some((e=>e.equals(t)))||o.some((e=>e.equals(t)))));return console.log("Uncover distance",r),q`<label-uncover-distance
        .distance="${r}"
      ></label-uncover-distance>`}case"uncover-cube-a*-distance":{if(!s)return"";if(!s.visited)return"";if([...s.path].pop().equals(t.toPosition()))return q`<label-uncover-distance
          .distance="${s.visited.length/2}"
          .label=${"Goal"}
        ></label-uncover-distance>`;const e=s.visited.indexOf(t.toPosition().toString());return e<0?"":q`<label-uncover-distance
        .distance="${e/2}"
        .label=${"Head"}
      ></label-uncover-distance>`}case"none":return"";case"coords":default:return`${st(t.toCoords()).toString()}`}})(e.cube,i.label,t(),l)}
      </hexagon-element>`}))}(e,n.get(),s.get(),t)}
      </div>
      ${function({showButtons:t},e,n){return t?q` <hexagon-controls
        .orientation=${e.get()}
        .coordinates=${n.get()}
        @changeOrientation=${t=>e.set(t.detail)}
        @changeCoordinates=${t=>(console.log("setting coordinates to ",t.detail),n.set(t.detail))}
      ></hexagon-controls>`:""}(t,n,s)} ${function(t,e){return e?q`${((t,e,n="")=>{switch(t){case"manhattan-box":return q`<hexagon-distance-manahattan-box
          style="${n}"
          .hexagons=${e}
        ></hexagon-distance-manahattan-box>`;case"manhattan-cube-hint":return q`<hexagon-distance-manahattan-cube-hint
          style="${n}"
          .hexagons=${e}
        ></hexagon-distance-manahattan-cube-hint>`;default:case"none":return q``}})(e,t,"display:block; width: 20rem; margin: 0 auto;")}`:""}(i(),t.distance)}
    `}),{styles:Kt,defaults:{orientation:"flat",coordinates:"even-q-naive",distance:null,rows:6,cols:5,label:"coords",showButtons:!1,highlight:null,selectDefault:null,pathFrom:null,pathTo:null,blocked:[],expensive:[],ignoreBlocked:!1,ignoreBoundaries:!1,showPath:null}}),dt("hexagon-cube",(()=>q`
    <svg>
      <text x="47%" y="25%">z</text>
      <text x="20%" y="60%">x</text>
      <text x="75%" y="60%">y</text>
      <line x1="49%" x2="49%" y1="46%" y2="96%"></line>
      <line x1="3%" y1="25%" x2="49%" y2="46%"></line>
      <line y1="46%" x1="49%" y2="25%" x2="94%"></line>
    </svg>
  `),{styles:o`
      :host {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
      }
      svg {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
      svg line {
        stroke: var(--colorContrast);
        stroke-width: 1;
      }
    `});dt("hexagon-element",(t=>{const e=e=>t.dispatchEvent(new CustomEvent(e)),n=t.size?`width: ${t.size}; height: ${t.size}; margin-left: calc(${t.size} * 0.55));`:"",s=t.showDirections?q`<div class="arrows ${t.orientation}">
          <div class="up">⇑</div>
          <div class="ne">⇑</div>
          <div class="se">⇑</div>
          <div class="nw">⇑</div>
          <div class="sw">⇑</div>
          <div class="down">⇑</div>
        </div>`:"",i=t.showCube?q`<hexagon-cube></hexagon-cube>`:"";return q`${i}
      <div
        class="hexagon ${t.orientation} ${t.selected?"selected":t.hovered?"hovered":""} ${t.blocked?"blocked":""}"
        @mouseover=${()=>e("hover")}
        @mouseout=${()=>e("unhover")}
        @click=${()=>e("select")}
        style="${n}"
      >
        <div class="lineContainer">${t.lines.map((t=>q`<line-element orientation="${t}"></line-element>`))}</div>
      </div>
      ${s}
      <div
        class="children ${t.orientation} ${t.selected||t.hovered?"active":""}
      ${t.label}"
        @mouseover=${()=>e("hover")}
        @mouseout=${()=>e("unhover")}
        @click=${()=>e("select")}
      >
        <slot
          @mouseover=${()=>e("hover")}
          @mouseout=${()=>e("unhover")}
          @click=${()=>e("select")}
        ></slot>
      </div>`}),{styles:[o`
:host {
  position: relative;
  display: inline-block;

  --flat-left: 3.3rem;
  --pointy-left: -0.5rem;
}
`,o`
  .hexagon {
    cursor: pointer;
    display: inline-block;
    background: var(--colorShow);
    width: 6rem;
    height: 6rem;
    -webkit-clip-path: polygon(
      25% 5%,
      75% 5%,
      100% 50%,
      75% 95%,
      25% 95%,
      0% 50%
    );
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    transition: all 500ms linear;
    z-index: 1;
  }
  .hexagon.flat {
    margin-left: var(--flat-left);
    transform: rotate(0deg);
  }
  .hexagon.hovered {
    background: var(--colorFocus);
  }
  .hexagon.selected {
    background: var(--colorHighlight);
  }
  .hexagon.blocked {
    background: var(--colorContrast);
    color: var(--colorShow);
  }
  
  .hexagon.pointy {
    margin-left: var(--pointy-left);
    transform: rotate(90deg);
  }
  .lineContainer {
    position:relative;
    width: 155%;
    height: 100%;
    margin: 0 auto;
  }
`,o`
  .arrows {
    display: inline-block;
    position: absolute;
    left: -3rem;
    top: -3rem;
    height: calc(100% + 6rem);
    z-index: 0;
    transition: all 500ms linear;
  }
  .arrows.flat {
    width: calc(100% - var(--flat-left) + 6rem);
    margin-left: var(--flat-left);
    transform: rotate(0deg);
  }
  .arrows.pointy {
    width: calc(100% - var(--pointy-left) + 6rem);
    margin-left: var(--pointy-left);
    transform: rotate(90deg);
  }
  .arrows div {
    text-align: center;
    font-size: 4rem;
  }
  .arrows .up {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .arrows .ne {
    position: absolute;
    top: 4rem;
    width: 100%;
    transform: rotate(60deg);
    left: 8rem;
  }
  .arrows .se {
    position: absolute;
    top: 15rem;
    width: 100%;
    transform: rotate(120deg);
    left: 8rem;
  }
  .arrows .nw {
    position: absolute;
    top: 4rem;
    width: 100%;
    transform: rotate(-60deg);
    right: 8rem;
  }
  .arrows .sw {
    position: absolute;
    top: 15rem;
    width: 100%;
    transform: rotate(-120deg);
    right: 8rem;
  }
  .arrows .down {
    transform: rotate(180deg);
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`,o`
  .children {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    text-align: center;
    left: 0;
    top: 35%;
    color: var(--colorContrast);
    transition: all 500ms linear;
    z-index: 1;
  }
  .children.top {
    top: 18%;
  }
  .children.active {
    color: var(--colorShow);
  }
  .children.flat {
    width: calc(100% - var(--flat-left));
    margin-left: var(--flat-left);
  }
  .children.pointy {
    width: calc(100% - var(--pointy-left));
    margin-left: var(--pointy-left);
  }
`],defaults:{orientation:"flat",selected:!1,hovered:!1,blocked:!1,showDirections:!1,showCube:!1,label:"center",size:null,lines:[]}});dt("hexagon-controls",(t=>{console.log("element.coordinates",t.coordinates);const e=e=>t.orientation===e?"active":"",n=e=>{var n;return(null===(n=t.coordinates)||void 0===n?void 0:n.startsWith(e))?"active":""},s=e=>Ft(t,"changeOrientation",e),i=e=>Ft(t,"changeCoordinates",e);return q` <div class="controls">
        <button
          class="${e("flat")}"
          @click=${()=>s("flat")}
        >
          Flat
        </button>
        <button
          class="${e("pointy")}"
          @click=${()=>s("pointy")}
        >
          Pointy
        </button>
      </div>
      <div class="controls">
        <button
          class="${n("even")}"
          @click=${()=>i("even-q-naive")}
        >
          Push Even Columns
        </button>
        <button
          class="${n("odd")}"
          @click=${()=>i("odd-q-naive")}
        >
          Push Odd Columns
        </button>
      </div>`}),{defaults:{orientation:"flat",coordinates:"even-q"},styles:o`
  .controls {
  }
  button {
    display: inline-block;
    margin: 5px 0;
    background: var(--colorShow);
    border: 1px solid var(--colorShow);
    color: var(--colorContrast);
    cursor: pointer;
    transition: all 1s linear;
  }
  button.active {
    background: var(--colorContrast);
    border: 1px solid var(--colorShow);
    color: var(--colorShow);
  }
`});dt("graph-3d",(()=>q`
    <svg>
      <line x1="20%" y1="0%" x2="20%" y2="90%" />
      <line x1="15%" y1="80%" x2="100%" y2="80%" />
      <line x1="0%" y1="100%" x2="50%" y2="50%" />
    </svg>
    <slot></slot>
  `),{styles:o`
  :host {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  svg {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  svg line {
    stroke: var(--colorShow);
    stroke-width: 3;
  }
  slot {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`});var oe=o`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      overflow: scroll-y;
      text-align: center;
    }
    h1 {
      color: var(--colorFocus);
      font-size: 15rem;
      line-height: 10rem;
      position: absolute;
      bottom: 0;
    }
    h2 {
      color: var(--colorContrast);
      font-size: 5rem;
      line-height: 5rem;
      margin-top: 4rem;
    }
    .pushToMiddle, .title {
        margin-top: 20%;
      }
    video {
      width: 100%;
      height: 70%;
    }
    div.lessons {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    div.lesson {
      width: 30%;
      margin-top: 2rem;
      padding: 10px;
    }
    h3.lesson {
      color: var(--colorFocus);
    }
    .profile {
      margin-top: 20px;
  }
  
  .profile .round {
      max-width: 25%;
    border: 1px solid var(--colorHighlight);
    border-radius: 50%;
    padding: 7px;
  }
  .profile h5 {
    margin: 10px 0;
      font-size: 3rem;
  }
  .profile h6 {
    margin: 5px 0;
      font-size: 2rem;
    text-transform: uppercase;
  }
  .profile .info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: flex-start;
      margin-top: 35px;
  }
  
  .profile .info > div {
      padding: 10px 35px;
      min-width: 150px;
  }
  
  .profile .info .title {
      align-items: center;
      justify-content: center;
  }
  .icon {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    margin-bottom: 20px;
    stroke-width: 0;
  }
  .icon-font {
    display: inline-flex;
  }
  `;const re={first:"7:2",second:{ignoreObstacle:!0,target:"7:2"},third:{target:"7:2",label:"none"},fourth:{target:"7:3",label:"none"},fifth:{target:"7:3",label:"none"}};var ae=dt("presentation-core",(t=>q`
    <presentation-body>
      <presentation-slide first>
        <h1>what math can teach about coding</h1>
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">"There are two reasons why you can do maths as developer: data science and gaming."</h2>
        <h3>Myself</h3>
        <h3 style="position: absolute; bottom: 1rem; width: 100%; text-align:center;">Note: This presentation, especially when we come to hexagons, will work best in firefox</h3>
      </presentation-slide>
      <presentation-slide>
        <h2>So let's build this, right?</h2>
        <video src="assets/the-mill.mp4" autoplay loop muted></video>
      </presentation-slide>
      <presentation-slide>
        <h1>Distance</h1>
        <h2>Game mechanics</h2>
      </presentation-slide>
      <presentation-slide>
        <h2>Movement Costs/Distance</h2>
        <pre>Click on a field to see the distance to the others</pre>
        <rectangle-container distance="none" show="distance" select-default="0:0" cols="1"></rectangle-container>
      </presentation-slide>
      <presentation-slide>
        <h2>Can we use what we learned in school?</h2>
        <graph-element />
      </presentation-slide>
      <presentation-slide>
        <h2>Can we use what we learned in school??</h2>
        <graph-element with-gatter with-lines></graph-element>
        Distance! Paths! Euclid ftw!!
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">Distance between two points</h2>
        <pre style="font-size:2rem;">d = √<span style="border-top:2px solid black;">(x2 − x1)² + (y2 − y1)²</span></pre>
      </presentation-slide>
      <presentation-slide>
        <h2>Distance on a game field</h2>
        <pre>d = √<span style="border-top:1px solid black;">(x2 − x1)² + (y2 − y1)²</span></pre>
        <pre>Click on a field and then hover over others to see the calculation result</pre>
        <rectangle-container distance="geometry" style="margin-top: 2rem;" />
      </presentation-slide>
      <presentation-slide>
        <h1>maths, you betrayed me again!</h1>
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">Let's not blame math just now, let's blame ourself and continue our investigation</h2>
      </presentation-slide>
      <presentation-slide>
        <h2><del>Euclid</del> Taxicab</h2>
        <pre>Switch between the two systems to see the calculated path</pre>
        <rectangle-container 
          show="none" .showPath=${"euclid"} distance="none" 
          show-path-controls
          .selectDefault=${"0:0"} .euclidPathTo=${"3:3"} .manhattanPathTo=${"3:3"} 
          />
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">So it was indeed us - we used the incorrect solution space for our problem</h2>
      </presentation-slide>
      <presentation-slide>
        <h2>How can we calculate distance on a game field that way?</h2>
        <pre>d = ?</pre>
        <pre>Think about a possible solution by looking at the problem</pre>
        <rectangle-container distance="none" />
      </presentation-slide>
      <presentation-slide>
        <h2>And the solution is...</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</pre>
        <pre>Click on the fields to see the calculated result for every other field on the map</pre>
        <rectangle-container show="distance" .selectDefault=${"0:0"} />
      </presentation-slide>
      <presentation-slide>
        <h1 class="lesson">Lesson 1</h1>
        <h2 class="lesson">Visualisation is awesome</h2>
      </presentation-slide>
      <presentation-slide>
        <h1 class="lesson">Lesson 2</h1>
        <h2 class="lesson">If something's weirdly off, you might be applying the wrong system</h2>
      </presentation-slide>
      <presentation-slide>
        <h1>But we want Hexagons!</h1>
      </presentation-slide>
      <presentation-slide>
        <h2>Hexagons</h2>
        <pre>Click on the buttons to see different variants of how we can align hexagons</pre>
        <hexagon-container show-buttons></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h2>Hexagons Distance - see any issues?</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</pre>
        <hexagon-container distance="manhattan-box" label="distance" .selectDefault=${"2:2"}></hexagon-container>
      </presentation-slide>∂
      <presentation-slide>
        <h2>Issue</h2>
        <pre>We cannot move directly in a row</pre>
        <hexagon-container .highlight="${{row:0}}"></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h2>Fix</h2>
        <pre>Move row in one line</pre>
        <hexagon-container coordinates="even-q" rows="4" cols="7" .highlight="${{row:0}}"></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h2>Has it fixed our distance?</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</pre>
        <hexagon-container coordinates="even-q" rows="4"  cols="7" label="distance" .selectDefault=${"2:2"}></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h1>take a step back</h1>
      </presentation-slide>
      <presentation-slide>
        <h2>Observation</h2>
        <pre>We can move in 6 directions</pre>
        <hexagon-element .size=${"20rem"} orientation="pointy" show-directions style="margin-top:3rem;" />
      </presentation-slide>
      <presentation-slide>
        <h2>Observation</h2>
        <pre>Just like in 3D</pre>
        <graph-3d style="width: 60%; height: 60%; margin: 0 auto;">
          <hexagon-element .size=${"20rem"} orientation="pointy" show-cube style="margin-top:3rem;">
          </hexagon-element>
        </graph-3d>
      </presentation-slide>
      <presentation-slide>
        <h2>Convert to cube</h2>
        <pre style="text-align: left; font-size: 2rem; width: 60%; margin: 0 auto; padding-top: 3rem;">
function toCube({col, row}) {

  const x = col

  const z = row - (col + (col&1)) / 2 

  const y = -x-z

  return new Cube(x, y, z)
}
        </pre>
        <h3>Note: Would be slighly different for odd-push and pointy variants</h3>
      </presentation-slide>
      <presentation-slide>
        <h2>Coordinates</h2>
        <div style="display:flex; margin:0 auto; align-items: center;justify-content: center;">
          <hexagon-container coordinates="even-q" rows="2" cols="3" label="coords" selectDefault="1:1"></hexagon-container>
          <hexagon-container coordinates="even-q" rows="2" cols="3" label="cube-coords" selectDefault="1:1"></hexagon-container>
        </div>
      </presentation-slide>
      <presentation-slide>
        <h2>Can you guess the distance?</h2>
        <div class="flex">
        <hexagon-container coordinates="even-q" rows="3" cols="5" distance="manhattan-cube-hint" label="cube-coords" .selectDefault=${"1:1"}></hexagon-container>
        </div>
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">Taxicab distance between two cubes</h2>
        <pre style="font-size:2rem;">d = max(|x2 − x1|, |y2 − y1|, |z2 − z1|)</pre>
      </presentation-slide>
      <presentation-slide>
        <h2>Distance</h2>
        <pre>d = max(|x2 − x1|, |y2 − y1|, |z2 − z1|)</pre>
        <hexagon-container coordinates="even-q" rows="4" cols="7" label="cube-distance" .selectDefault=${"2:2"}></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h1 class="lesson">Lesson 3</h1>
        <h2 class="lesson">When extending/refactoring your product, taking a step back and searching for different solutions is often more useful than just adding things to make it work</h2>
      </presentation-slide>
      <presentation-slide>
        <h1>Path Finding</h1>
        <h2>Game mechanics</h2>
      </presentation-slide>
      <presentation-slide>
        <h2>Naive shortest path</h2>
        <pre style="text-align:left; font-size: 2rem;">




  const distance = 0;
  let current = start;
  const path = [];
  while (!current.equals(goal)) {
    current = neighbors(current)
      .map(next => distance(next, goal))
      .sort().first();
    path.push(current)
  }
        </pre>
      </presentation-slide>
      <presentation-slide>
        <h2>Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7"  label="cube-distance" .selectDefault=${"0:0"} .pathFrom=${"0:0"} .pathTo="${re.first}" .showPath=${"taxicab"}
          @select="${e=>{re.first=e.detail.hexagon.cube.toPosition().toString(),t.requestUpdate(),e.preventDefault()}}"
        ></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h2>Shortest Path with obstacle</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7"  label="cube-distance" 
          .selectDefault=${"0:0"} .pathFrom=${"0:0"} .pathTo="${re.second.target}" .showPath=${"taxicab"}
          .blocked="${["4:0","4:1","4:2","4:3"]}"
          .ignoreBlocked="${re.second.ignoreObstacle}"
          @select="${e=>{re.second.target=e.detail.hexagon.cube.toPosition().toString(),t.requestUpdate(),e.preventDefault()}}"
        ></hexagon-container>
        <input type="checkbox" @click="${()=>(re.second.ignoreObstacle=!re.second.ignoreObstacle,t.requestUpdate())}" /> Check me to make the path comply to reality
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">How can we find the path without knowing the way?</h2>
      </presentation-slide>
      <presentation-slide>
        <h2>Breadth First Search</h2>
        <pre style="text-align:left; font-size: 2rem;">
  const frontier = new Queue&lt;Cube>();
  frontier.push(start);
  const cameFrom = {};

  const neverVisitedNeighbors => (current: Cube) => 
    neighbors(current).filter(field => !cameFrom[next] || <span style="color: var(--colorHighlight);">isBlocked(field)</span>)

  while (frontier.length > 0) {
    const current = frontier.pop();
    for (const next of neverVisitedNeighbors(current)) {
      frontier.push(next);
      cameFrom[next] = current;
    }
  }
        </pre>
      </presentation-slide>
      <presentation-slide>
        <h2>Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7" .label="${re.third.label}" 
          .selectDefault=${"0:0"} .pathFrom=${"0:0"} .pathTo="${re.third.target}"
          .blocked="${["4:0","4:1","4:2","4:3"]}"
        ></hexagon-container>
        <button @click="${()=>{re.third.label="none",t.requestUpdate(),setTimeout((()=>{re.third.label="none"===re.third.label?"uncover-cube-breadth-distance":"none",t.requestUpdate()}),1)}}">Trigger uncover the distance</button>
      </presentation-slide>
      <presentation-slide>
        <h2>Breadth First Search - Early exit</h2>
        <pre style="text-align:left; font-size: 2rem;">
  const frontier = new Queue&lt;Cube>();
  frontier.push(start);
  const cameFrom = {};

  const neverVisitedNeighbors = (current: Cube) => 
    neighbors(current).filter(field => !cameFrom[field] || isBlocked(field))

  while (frontier.length > 0) {
    const current = frontier.pop();
    <span style="color: var(--colorHighlight);">if (current.equals(goal)) break;</span>

    for (const next of neverVisitedNeighbors(current)) {
      frontier.push(next);
      cameFrom[next] = current;
    }
  }
        </pre>
      </presentation-slide>
      <presentation-slide>
        <h1 class="lesson">Lesson 4</h1>
        <h2 class="lesson">The right line of code can improve your performance a lot, the right idea drastically so</h2>
      </presentation-slide>
      <presentation-slide>
        <h2>A*</h2>
        <pre style="text-align:left; font-size: 2rem;">
  const frontier = new <span style="color: var(--colorHighlight);">Priority</span>Queue&lt;Cube>();
  frontier.push(start, <span style="color: var(--colorHighlight);">0</span>);
  const cameFrom = {};

  const neverVisitedNeighbors = (current: Cube) => 
  neighbors(current).filter(field => !cameFrom[field] || isBlocked(field))

  while (frontier.length > 0) {
    const current = frontier.pop();
    if (current.equals(goal)) break;

    for (const next of neverVisitedNeighbors(current)) {
      <span style="color: var(--colorHighlight);">const priority = distance(next, goal);
      frontier.push(next, priority);</span>

      cameFrom[next] = current;
    }
  }
        </pre>
      </presentation-slide>

      <presentation-slide>
        <h2>A* Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="6" cols="9" .label="${re.fourth.label}" 
          .selectDefault=${"0:0"} .pathFrom=${"0:0"} .pathTo="${re.fourth.target}"
          .blocked="${["4:0","4:1","4:2","4:3"]}"
        ></hexagon-container>
        <button @click="${()=>{re.fourth.label="none",t.requestUpdate(),setTimeout((()=>{re.fourth.label="none"===re.fourth.label?"uncover-cube-a*-distance":"none",t.requestUpdate()}),1)}}">Trigger uncover the distance</button>
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">And if it's not a wall but only a little muddy?</h2>
      </presentation-slide>
      <presentation-slide>
        <h2>A*</h2>
        <pre style="text-align:left; font-size: 1.5rem;">
  const frontier = new PriorityQueue&lt;Cube>();
  frontier.push(start, 0);
  const cameFrom = {};

  <span style="color: var(--colorHighlight);">const costSoFar: { [key: string]: number } = {};
  costSoFar[start] = 0;</span>

  const neverVisitedNeighbors = (current: Cube) => 
  neighbors(current).filter(field => !cameFrom[field] || isBlocked(field))

  while (frontier.length > 0) {
    const current = frontier.pop();
    if (current.equals(goal)) break;

    for (const next of neverVisitedNeighbors(current)) {
      <span style="color: var(--colorHighlight);">
      const newCost = costSoFar[current] + costs(current);
      if (!costSoFar[next] || newCost < costSoFar[next]) {
        costSoFar[next] = newCost;</span>
        const priority = <span style="color: var(--colorHighlight);">newCost + </span>distance(next, goal);
        frontier.push(next, priority);

        cameFrom[next] = current;
      }
    }
  }
        </pre>
      </presentation-slide>
      <presentation-slide>
        <h2>A* Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="6" cols="9" .label="${re.fifth.label}" 
          .selectDefault=${"0:0"} .pathFrom=${"0:0"} .pathTo="${re.fifth.target}" .showPath=${"taxicab"}
          .blocked="${["3:3","3:4","3:5"]}"
          .expensive="${["4:0","4:2","4:3","4:4","4:5","3:0","3:2","5:3","5:0","5:2","6:1","6:2","7:1"]}"
        ></hexagon-container>
        <button @click="${()=>{re.fifth.label="none",t.requestUpdate(),setTimeout((()=>{re.fifth.label="none"===re.fifth.label?"uncover-cube-a*-distance":"none",t.requestUpdate()}),1)}}">Trigger uncover the distance</button>
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">Would you have found this solution if we'd started searching for a solution from the requirement of muddy roads?</h2>
      </presentation-slide>
      <presentation-slide>
        <h1 class="lesson">Lesson 5</h1>
        <h2 class="lesson">Not starting with the requirement but finding the path to the requirement will improve your solution</h2>
      </presentation-slide>
      <presentation-slide>
        <h2 class="lesson">Lessons learned</h2>

        <div class="lessons">
          <div class="lesson">
            <h3 class="lesson">Lesson 1</h1>
            <h4 class="lesson">Visualisation is awesome</h2>
          </div>
          <div class="lesson">
            <h3 class="lesson">Lesson 2</h1>
            <h4 class="lesson">If something's weirdly off, you might be applying the wrong system</h2>
          </div>
          <div class="lesson">
            <h3 class="lesson">Lesson 3</h1>
            <h4 class="lesson">When extending/refactoring your product, taking a step back and searching for different solutions is often more useful than just adding things to make it work</h2>
          </div>
          <div class="lesson">
            <h3 class="lesson">Lesson 4</h1>
            <h4 class="lesson">The right line of code can improve your performance a lot, the right idea drastically so</h2>
          </div>
          <div class="lesson">
            <hexagon-element size="20rem" orientation="pointy" showCube style="margin-top:3rem;">
            </hexagon-element>
          </div>
          <div class="lesson">
            <h3 class="lesson">Lesson 5</h1>
            <h4 class="lesson">Not starting with the requirement but finding the path to the requirement will improve your solution</h2>
          </div>
        </div>
      </presentation-slide>
      
      <presentation-slide last>
        <div class="profile">
          <img class="round" src="images/mkainer.jpg" alt="Matthias Kainer" />
          <h5>Matthias Kainer</h5>
          <h6>Thoughtworks</h6>
          <div class="info">
            <div>
              <div class="title">
                <span class="icon-font">
                  <svg class="icon">
                    <use xlink:href="#icon-twitter"></use>
                  </svg>
                </span>
              </div>
              <div class="txt"><a href="https://twitter.com/MatKainer">@MatKainer</a></div>
            </div>

            <div>
              <div class="title">
                <span class="icon-font">
                  <svg class="icon">
                    <use xlink:href="#icon-github"></use>
                  </svg>
                </span>
              </div>
              <div class="txt"><a href="https://github.com/MatthiasKainer">MatthiasKainer</a></div>
            </div>

            <div>
              <div class="title">
                <span class="icon-font">
                  <svg class="icon">
                    <use xlink:href="#icon-linkedin"></use>
                  </svg>
                </span>
              </div>
              <div class="txt"><a href="https://linkedin.com/in/matthiaskainer">matthiaskainer</a></div>
            </div>

            <div>
              <div class="title">
                <span class="icon-font">
                  <svg class="icon">
                    <use xlink:href="#icon-link"></use>
                  </svg>
                </span>
              </div>
              <div class="txt"><a href="https://matthias-kainer.de">matthias-kainer.de</a></div>
            </div>
          </div>
        </div>
      </presentation-slide>
      </presentation-body>
      <svg hidden="hidden">
      <defs>
        <symbol id="icon-github" viewBox="0 0 32 32">
          <title>github</title>
          <path
            d="M16.192 0.512c-8.832 0-16 7.168-16 16 0 7.072 4.576 13.056 10.944 15.168 0.8 0.16 1.088-0.352 1.088-0.768 0-0.384 0-1.632-0.032-2.976-4.448 0.96-5.376-1.888-5.376-1.888-0.736-1.856-1.792-2.336-1.792-2.336-1.44-0.992 0.096-0.96 0.096-0.96 1.6 0.128 2.464 1.664 2.464 1.664 1.44 2.432 3.744 1.728 4.672 1.344 0.128-1.024 0.544-1.728 1.024-2.144-3.552-0.448-7.296-1.824-7.296-7.936 0-1.76 0.64-3.168 1.664-4.288-0.16-0.416-0.704-2.016 0.16-4.224 0 0 1.344-0.416 4.416 1.632 1.28-0.352 2.656-0.544 4-0.544s2.72 0.192 4 0.544c3.040-2.080 4.384-1.632 4.384-1.632 0.864 2.208 0.32 3.84 0.16 4.224 1.024 1.12 1.632 2.56 1.632 4.288 0 6.144-3.744 7.488-7.296 7.904 0.576 0.512 1.088 1.472 1.088 2.976 0 2.144-0.032 3.872-0.032 4.384 0 0.416 0.288 0.928 1.088 0.768 6.368-2.112 10.944-8.128 10.944-15.168 0-8.896-7.168-16.032-16-16.032z"
          ></path>
          <path
            d="M6.24 23.488c-0.032 0.064-0.16 0.096-0.288 0.064-0.128-0.064-0.192-0.16-0.128-0.256 0.032-0.096 0.16-0.096 0.288-0.064 0.128 0.064 0.192 0.16 0.128 0.256v0z"
          ></path>
          <path
            d="M6.912 24.192c-0.064 0.064-0.224 0.032-0.32-0.064s-0.128-0.256-0.032-0.32c0.064-0.064 0.224-0.032 0.32 0.064s0.096 0.256 0.032 0.32v0z"
          ></path>
          <path
            d="M7.52 25.12c-0.096 0.064-0.256 0-0.352-0.128s-0.096-0.32 0-0.384c0.096-0.064 0.256 0 0.352 0.128 0.128 0.128 0.128 0.32 0 0.384v0z"
          ></path>
          <path
            d="M8.384 26.016c-0.096 0.096-0.288 0.064-0.416-0.064s-0.192-0.32-0.096-0.416c0.096-0.096 0.288-0.064 0.416 0.064 0.16 0.128 0.192 0.32 0.096 0.416v0z"
          ></path>
          <path
            d="M9.6 26.528c-0.032 0.128-0.224 0.192-0.384 0.128-0.192-0.064-0.288-0.192-0.256-0.32s0.224-0.192 0.416-0.128c0.128 0.032 0.256 0.192 0.224 0.32v0z"
          ></path>
          <path
            d="M10.912 26.624c0 0.128-0.16 0.256-0.352 0.256s-0.352-0.096-0.352-0.224c0-0.128 0.16-0.256 0.352-0.256 0.192-0.032 0.352 0.096 0.352 0.224v0z"
          ></path>
          <path
            d="M12.128 26.4c0.032 0.128-0.096 0.256-0.288 0.288s-0.352-0.032-0.384-0.16c-0.032-0.128 0.096-0.256 0.288-0.288s0.352 0.032 0.384 0.16v0z"
          ></path>
        </symbol>

        <symbol id="icon-location" viewBox="0 0 32 32">
          <title>location</title>
          <path
            d="M16 31.68c-0.352 0-0.672-0.064-1.024-0.16-0.8-0.256-1.44-0.832-1.824-1.6l-6.784-13.632c-1.664-3.36-1.568-7.328 0.32-10.592 1.856-3.2 4.992-5.152 8.608-5.376h1.376c3.648 0.224 6.752 2.176 8.608 5.376 1.888 3.264 2.016 7.232 0.352 10.592l-6.816 13.664c-0.288 0.608-0.8 1.12-1.408 1.408-0.448 0.224-0.928 0.32-1.408 0.32zM15.392 2.368c-2.88 0.192-5.408 1.76-6.912 4.352-1.536 2.688-1.632 5.92-0.288 8.672l6.816 13.632c0.128 0.256 0.352 0.448 0.64 0.544s0.576 0.064 0.832-0.064c0.224-0.096 0.384-0.288 0.48-0.48l6.816-13.664c1.376-2.752 1.248-5.984-0.288-8.672-1.472-2.56-4-4.128-6.88-4.32h-1.216zM16 17.888c-3.264 0-5.92-2.656-5.92-5.92 0-3.232 2.656-5.888 5.92-5.888s5.92 2.656 5.92 5.92c0 3.264-2.656 5.888-5.92 5.888zM16 8.128c-2.144 0-3.872 1.728-3.872 3.872s1.728 3.872 3.872 3.872 3.872-1.728 3.872-3.872c0-2.144-1.76-3.872-3.872-3.872z"
          ></path>
          <path
            d="M16 32c-0.384 0-0.736-0.064-1.12-0.192-0.864-0.288-1.568-0.928-1.984-1.728l-6.784-13.664c-1.728-3.456-1.6-7.52 0.352-10.912 1.888-3.264 5.088-5.28 8.832-5.504h1.376c3.744 0.224 6.976 2.24 8.864 5.536 1.952 3.36 2.080 7.424 0.352 10.912l-6.784 13.632c-0.32 0.672-0.896 1.216-1.568 1.568-0.48 0.224-0.992 0.352-1.536 0.352zM15.36 0.64h-0.064c-3.488 0.224-6.56 2.112-8.32 5.216-1.824 3.168-1.952 7.040-0.32 10.304l6.816 13.632c0.32 0.672 0.928 1.184 1.632 1.44s1.472 0.192 2.176-0.16c0.544-0.288 1.024-0.736 1.28-1.28l6.816-13.632c1.632-3.264 1.504-7.136-0.32-10.304-1.824-3.104-4.864-5.024-8.384-5.216h-1.312zM16 29.952c-0.16 0-0.32-0.032-0.448-0.064-0.352-0.128-0.64-0.384-0.8-0.704l-6.816-13.664c-1.408-2.848-1.312-6.176 0.288-8.96 1.536-2.656 4.16-4.32 7.168-4.512h1.216c3.040 0.192 5.632 1.824 7.2 4.512 1.6 2.752 1.696 6.112 0.288 8.96l-6.848 13.632c-0.128 0.288-0.352 0.512-0.64 0.64-0.192 0.096-0.384 0.16-0.608 0.16zM15.424 2.688c-2.784 0.192-5.216 1.696-6.656 4.192-1.504 2.592-1.6 5.696-0.256 8.352l6.816 13.632c0.096 0.192 0.256 0.32 0.448 0.384s0.416 0.064 0.608-0.032c0.16-0.064 0.288-0.192 0.352-0.352l6.816-13.664c1.312-2.656 1.216-5.792-0.288-8.352-1.472-2.464-3.904-4-6.688-4.16h-1.152zM16 18.208c-3.424 0-6.24-2.784-6.24-6.24 0-3.424 2.816-6.208 6.24-6.208s6.24 2.784 6.24 6.24c0 3.424-2.816 6.208-6.24 6.208zM16 6.4c-3.072 0-5.6 2.496-5.6 5.6 0 3.072 2.528 5.6 5.6 5.6s5.6-2.496 5.6-5.6c0-3.104-2.528-5.6-5.6-5.6zM16 16.16c-2.304 0-4.16-1.888-4.16-4.16s1.888-4.16 4.16-4.16c2.304 0 4.16 1.888 4.16 4.16s-1.856 4.16-4.16 4.16zM16 8.448c-1.952 0-3.552 1.6-3.552 3.552s1.6 3.552 3.552 3.552c1.952 0 3.552-1.6 3.552-3.552s-1.6-3.552-3.552-3.552z"
          ></path>
        </symbol>

        <symbol id="icon-twitter" viewBox="0 0 32 32">
          <title>twitter</title>
          <path
            d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"
          ></path>
        </symbol>

        <symbol id="icon-link" viewBox="0 0 32 32">
          <title>link</title>
          <path
            d="M17.984 11.456c-0.704 0.704-0.704 1.856 0 2.56 2.112 2.112 2.112 5.568 0 7.68l-5.12 5.12c-2.048 2.048-5.632 2.048-7.68 0-1.024-1.024-1.6-2.4-1.6-3.84s0.576-2.816 1.6-3.84c0.704-0.704 0.704-1.856 0-2.56s-1.856-0.704-2.56 0c-1.696 1.696-2.624 3.968-2.624 6.368 0 2.432 0.928 4.672 2.656 6.4 1.696 1.696 3.968 2.656 6.4 2.656s4.672-0.928 6.4-2.656l5.12-5.12c3.52-3.52 3.52-9.248 0-12.8-0.736-0.672-1.888-0.672-2.592 0.032z"
          ></path>
          <path
            d="M29.344 2.656c-1.696-1.728-3.968-2.656-6.4-2.656s-4.672 0.928-6.4 2.656l-5.12 5.12c-3.52 3.52-3.52 9.248 0 12.8 0.352 0.352 0.8 0.544 1.28 0.544s0.928-0.192 1.28-0.544c0.704-0.704 0.704-1.856 0-2.56-2.112-2.112-2.112-5.568 0-7.68l5.12-5.12c2.048-2.048 5.632-2.048 7.68 0 1.024 1.024 1.6 2.4 1.6 3.84s-0.576 2.816-1.6 3.84c-0.704 0.704-0.704 1.856 0 2.56s1.856 0.704 2.56 0c1.696-1.696 2.656-3.968 2.656-6.4s-0.928-4.704-2.656-6.4z"
          ></path>
        </symbol>

        <symbol id="icon-linkedin" viewBox="0 0 97.75 97.75">
          <title>linkedin</title>
          <path
            d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
                     M30.562,81.966h-13.74V37.758h13.74V81.966z M23.695,31.715c-4.404,0-7.969-3.57-7.969-7.968c0.001-4.394,3.565-7.964,7.969-7.964
                    c4.392,0,7.962,3.57,7.962,7.964C31.657,28.146,28.086,31.715,23.695,31.715z M82.023,81.966H68.294V60.467
                    c0-5.127-0.095-11.721-7.142-11.721c-7.146,0-8.245,5.584-8.245,11.35v21.869H39.179V37.758h13.178v6.041h0.185
                    c1.835-3.476,6.315-7.14,13-7.14c13.913,0,16.481,9.156,16.481,21.059V81.966z"
          />
        </symbol>
      </defs>
    </svg>
    `),{styles:oe});export default ae;
