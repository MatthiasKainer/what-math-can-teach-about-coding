/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,i=new RegExp(`${s}|${n}`);class o{constructor(t,e){this.parts=[],this.element=e;const n=[],o=[],a=document.createTreeWalker(e.content,133,null,!1);let c=0,d=-1,u=0;const{strings:p,values:{length:g}}=t;for(;u<g;){const t=a.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)r(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=p[u],s=l.exec(e)[2],n=s.toLowerCase()+"$lit$",o=t.getAttribute(n);t.removeAttribute(n);const r=o.split(i);this.parts.push({type:"attribute",index:d,name:s,strings:r}),u+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,o=e.split(i),a=o.length-1;for(let e=0;e<a;e++){let n,i=o[e];if(""===i)n=h();else{const t=l.exec(i);null!==t&&r(t[2],"$lit$")&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(i)}s.insertBefore(n,t),this.parts.push({type:"node",index:++d})}""===o[a]?(s.insertBefore(h(),t),n.push(t)):t.data=o[a],u+=a}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(h(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(n.push(t),d--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),u++}}else a.currentNode=o.pop()}for(const t of n)t.parentNode.removeChild(t)}}const r=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},a=t=>-1!==t.index,h=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(t,e){const{element:{content:s},parts:n}=t,i=document.createTreeWalker(s,133,null,!1);let o=u(n),r=n[o],a=-1,h=0;const l=[];let c=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(l.push(t),null===c&&(c=t)),null!==c&&h++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-h,o=u(n,o),r=n[o]}l.forEach(t=>t.parentNode.removeChild(t))}const d=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},u=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(a(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=new WeakMap,g=t=>"function"==typeof t&&p.has(t),v={},f={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class w{constructor(t,e,s){this.t=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.t)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o,r=0,h=0,l=i.nextNode();for(;r<n.length;)if(o=n[r],a(o)){for(;h<o.index;)h++,"TEMPLATE"===l.nodeName&&(s.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=s.pop(),l=i.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const m=` ${s} `;class b{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===t.indexOf("--\x3e",r+1);const a=l.exec(t);e+=null===a?t+(i?m:n):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class ${constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(y(t)||!x(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===v||y(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=v,t(this)}this.value!==v&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this.s=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=h()),t.i(this.endNode=h())}insertAfterPart(t){t.i(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.s=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.s);){const t=this.s;this.s=v,t(this)}const t=this.s;t!==v&&(y(t)?t!==this.value&&this.o(t):t instanceof b?this.h(t):t instanceof Node?this.l(t):x(t)?this.u(t):t===f?(this.value=f,this.clear()):this.o(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}o(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.l(document.createTextNode(s)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const s=new w(e,t.processor,this.options),n=s._clone();s.update(t.values),this.l(n),this.value=s}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new S(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class O{constructor(t,e,s){if(this.value=void 0,this.s=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.s=t}commit(){for(;g(this.s);){const t=this.s;this.s=v,t(this)}if(this.s===v)return;const t=!!this.s;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.s=v}}class C extends ${constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new j(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class j extends k{}let P=!1;(()=>{try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class M{constructor(t,e,s){this.value=void 0,this.s=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.p=t=>this.handleEvent(t)}setValue(t){this.s=t}commit(){for(;g(this.s);){const t=this.s;this.s=v,t(this)}if(this.s===v)return;const t=this.s,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.p,this.g),n&&(this.g=z(t),this.element.addEventListener(this.eventName,this.p,this.g)),this.value=t,this.s=v}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const z=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function T(t){let e=_.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},_.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(s);return n=e.keyString.get(i),void 0===n&&(n=new o(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const _=new Map,F=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const q=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new C(t,e.slice(1),s).parts}return"@"===i?[new M(t,e.slice(1),n.eventContext)]:"?"===i?[new O(t,e.slice(1),s)]:new $(t,e,s).parts}handleTextExpression(t){return new S(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const D=(t,...e)=>new b(t,e,"html",q)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,E=(t,e)=>`${t}--${e}`;let N=!0;void 0===window.ShadyCSS?N=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),N=!1);const A=t=>e=>{const n=E(e.type,t);let i=_.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},_.set(n,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(s);if(r=i.keyString.get(a),void 0===r){const s=e.getTemplateElement();N&&window.ShadyCSS.prepareTemplateDom(s,t),r=new o(e,s),i.keyString.set(a,r)}return i.stringsArray.set(e.strings,r),r},H=["html","svg"],B=new Set,L=(t,e,s)=>{B.add(t);const n=s?s.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=i[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{H.forEach(e=>{const s=_.get(E(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),c(t,s)})})})(t);const a=n.content;s?function(t,e,s=null){const{element:{content:n},parts:i}=t;if(null==s)return void n.appendChild(e);const o=document.createTreeWalker(n,133,null,!1);let r=u(i),a=0,h=-1;for(;o.nextNode();){for(h++,o.currentNode===s&&(a=d(e),s.parentNode.insertBefore(e,s));-1!==r&&i[r].index===h;){if(a>0){for(;-1!==r;)i[r].index+=a,r=u(i,r);return}r=u(i,r)}}}(s,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const h=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),c(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const V={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},U=(t,e)=>e!==t&&(e==e||t==t),I={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:U};class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=I){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||I}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=U){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||V,i="function"==typeof n?n:n.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||V.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=I){const n=this.constructor,i=n._attributeNameForProperty(t,s);if(void 0!==i){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const n=this.constructor,i=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const R=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:n}=e;return{kind:s,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),G=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function J(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):G(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Q="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol();class K{constructor(t,e){if(e!==Y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const X=(t,...e)=>{const s=e.reduce((e,s,n)=>e+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1],t[0]);return new K(s,Y)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Z={};class tt extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),n=[];s.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Z}}tt.finalized=!0,tt.render=(t,s,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,o=F.has(s),r=N&&11===s.nodeType&&!!s.host,a=r&&!B.has(i),h=a?document.createDocumentFragment():s;if(((t,s,n)=>{let i=F.get(s);void 0===i&&(e(s,s.firstChild),F.set(s,i=new S(Object.assign({templateFactory:T},n))),i.appendInto(s)),i.setValue(t),i.commit()})(t,h,Object.assign({templateFactory:A(i)},n)),a){const t=F.get(h);F.delete(h);const n=t.value instanceof w?t.value.template:void 0;L(i,h,n),e(s,s.firstChild),s.appendChild(h),F.set(s,t)}!o&&r&&window.ShadyCSS.styleElement(s.host)};const et=t=>(t||[]).reduce((t,e)=>("string"==typeof e?t[e]={}:Object.entries(e).forEach(([e,s])=>t[e]=s),t),{}),st=t=>{return(t=>void 0!==t&&void 0!==t.props)(t)?et(t.props):(e=null==t?void 0:t.defaults,et(Object.keys(e||{})));var e},nt={};((t,e,s)=>{if(nt[t])return nt[t];customElements.define(t,class extends tt{static get properties(){return st(s)}static get styles(){return null==s?void 0:s.styles}connectedCallback(){super.connectedCallback(),(t=>void 0!==t&&void 0!==t.defaults)(s)&&Object.entries(s.defaults).forEach(([t,e])=>{this[t]=e})}render(){return e(this)}});const n=document.createElement(t);nt[t]=n})("presentation-page",t=>D`<slot></slot> ${t.last?"":D`<div
          class="scroller next"
          @click=${()=>{var e;null===(e=t.nextElementSibling)||void 0===e||e.scrollIntoView()}}
        >
          next
        </div>`}
    ${t.first?"":D`<div
          class="scroller"
          @click=${()=>{var e;null===(e=t.previousElementSibling)||void 0===e||e.scrollIntoView()}}
        >
          prev
        </div>`}`,{styles:X`
  :host {
    position: relative;
    display: inline-block;
    border: solid 1px gray;
    width: 100%;
    height: 100%;
    background-color: var(--colorMain);
  }
  * {
    text-align: center;
    font-family: 'Martel Sans', sans-serif;
  }
  .scroller {
    display: block;
    position: absolute;
    bottom: 0px;
    left: 20px;
    cursor: pointer;
  }
  .scroller.next {
    right: 20px;
    left: auto;
  }
`,defaults:{first:!1,last:!1}});var it=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let ot=class extends tt{render(){return D`<presentation-page last first>
    <h2 style="font-size: 4rem;">Presentation created with</h2>
    <div style="display:flex; margin:0 auto;">
      <div style="flex-grow:1;">
        ${D`<h3>HTML, CSS &amp; WebComponents</h3>
<pre style="text-align:left;padding-left:2rem;">
&lt;presentation-page>
    &lt;h2>Coordinates&lt;/h2>
    &lt;div style="display:flex; justify-content: center;">
        &lt;hexagon-container 
            coordinates="even-q" 
            rows="2" 
            cols="3" 
            label="coords" 
            selectDefault="1:1" />
        &lt;hexagon-container 
            coordinates="even-q" 
            rows="2" 
            cols="3" 
            label="cube-coords" 
            selectDefault="1:1" />
    &lt;/div>
&lt;/presentation-page>
</pre>`}
      </div>
      <div style="flex-grow:1;">
        ${D`<h3>Typescript & LitElements/pureLit</h3>
<pre style="text-align:left;">
pureLit('line-element'
  ({parent, orientation, color}) => {
    if (orientation === 'none') return "";
    const {x1, x2, y1, y2} = lineCoords(parent)(orientation);
    return html\`&lt;svg>
        &lt;line
            x1="$\{x1}" y1="$\{y1}"
            x2="$\{x2}" y2="$\{y2}"
            style="$\{color ? \"stroke:$\{color};\" : ""}"
        />
    &lt;/svg>\`;
  }, {
    styles: [LineStyle],
    defaults: {
      orientation: 'none',
      parent: 'rectangle'
      color: null
    }
  })
</pre>`}
      </div>
    </div>
    <div class="footer">Created by <a href="https://matthias-kainer.de">Matthias Kainer</a> | Follow me on <a href="http://twitter.com/matkainer">Twitter</a> and <a href="github.com/matthiaskainer/">Github</a></div>
  </presentation-page>`}};function rt(t,e){return Array.from({length:e-t+1},(t,e)=>e)}ot.styles=X`
    :host {
      position:relative;
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    .footer {
      position: absolute;
      bottom:0;
      right:0;
    }
    `,ot=it([R("presentation-created-with")],ot);class at{constructor(t,e,s,n=1){this.x=t,this.y=e,this.z=s,this.costs=n}equals(t){return null!==t&&this.x===t.x&&this.y===t.y&&this.z===t.z}add(t){const{x:e,y:s,z:n}=this;return new at(e+t.x,s+t.y,n+t.z)}remove(t){const{x:e,y:s,z:n}=this;return new at(e-t.x,s-t.y,n-t.z)}vector(t){return new at(t.x-this.x,t.y-this.y,t.z-this.z)}distance(t){return Math.max(Math.abs(this.x-t.x),Math.abs(this.y-t.y),Math.abs(this.z-t.z))}heuristic(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}range(t){const e=[];for(let s=-t;s<=t;s++)for(let n=Math.max(-t,-s-t);n<=Math.min(t,-s+t);n++)e.push(this.add(new at(s,n,-s-n)));return e}direction(t){return ht[t]}directionTo(t){const e=rt(0,5).find(e=>this.neighbor(e).equals(t));return void 0!==e&&e>=0?this.direction(e):null}neighbor(t){return this.add(this.direction(t))}neighbors(){return rt(0,5).map(t=>this.neighbor(t))}cost(){return this.costs}toPosition(){const t=this.x,e=this.z+(this.x+(1&this.x))/2;return new dt(e,t)}toCoords(){return this.toPosition().toCoords()}toString(){return`${this.x}:${this.y}:${this.z}`}}const ht=[new at(1,-1,0),new at(1,0,-1),new at(0,1,-1),new at(-1,1,0),new at(-1,0,1),new at(0,-1,1)];function lt(t,e){return Math.abs(Math.abs(t.col-e.col)+Math.abs(t.row-e.row))}const ct={manhattan:[{row:0,col:-1},{row:1,col:0},{row:0,col:1},{row:-1,col:0}],euclid:[{row:1,col:-1},{row:-1,col:1},{row:1,col:0},{row:0,col:1},{row:-1,col:0},{row:0,col:-1},{row:-1,col:-1},{row:1,col:1}]};class dt{constructor(t,e,s="manhattan"){this.row=t,this.col=e,this.system=s}vector(t){return new dt(t.row-this.row,t.col-this.col)}toCube(){const t=this.col,e=this.row-(this.col+(1&this.col))/2;return new at(t,-t-e,e)}toCoords(){const{row:t,col:e}=this;return{col:e,row:t}}neighbor(t){const e=ut(ct[this.system][t]);return e.system=this.system,this.add(e)}neighbors(){return rt(0,ct[this.system].length-1).map(t=>this.neighbor(t))}distance(t){return e=this,s=t,Math.sqrt(Math.pow(s.col-e.col,2)+Math.pow(s.row-e.row,2));var e,s}manhattanDistance(t){return lt(this,t)}add(t){const{col:e,row:s}=this;return new dt(s+t.row,e+t.col,this.system)}remove(t){const{col:e,row:s}=this;return new dt(s-t.row,e-t.col,this.system)}equals(t){return null!=t&&t.col===this.col&&t.row===this.row}toString(){return`${this.col}:${this.row}`}toEuclidPosition(){return new dt(this.row,this.col,"euclid")}toManhattanPosition(){return new dt(this.row,this.col,"manhattan")}static fromString(t){if(!t)return null;const[e,s]=t.split(":").map(t=>parseInt(t,10));return new dt(s,e)}}const ut=({row:t,col:e})=>new dt(t,e);class pt{constructor(t){this.coords=t}distance(t){return Math.sqrt(Math.pow(this.coords.col-t.coords.col,2)+Math.pow(this.coords.row-t.coords.row,2))}manhattanDistance(t){return lt(this.coords,t.coords)}toString(){return`${this.coords.col}:${this.coords.row}`}}class gt{constructor(t,e,s=!1,n=0){this.rectangle=t,this.selected=e,this.hovered=s,this.distance=n}}const vt=(t,e=!1,s=!1)=>new gt((t=>new pt(t))(t),e,s);var ft=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let wt=class extends tt{constructor(){super(...arguments),this.selected=null,this.hover=null}static get styles(){return X`
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
    `}render(){return this.selected&&this.hover?D`<div>
        ${this.selected.rectangle.toString()} ->
        ${this.hover.rectangle.toString()}
      </div>
      <div class="presenter">
        <div>
          |${this.hover.rectangle.coords.col} -
          ${this.selected.rectangle.coords.col}| +
          |${this.hover.rectangle.coords.row} -
          ${this.selected.rectangle.coords.row}|
        </div>
        <div>
          = ${this.selected.rectangle.manhattanDistance(this.hover.rectangle)}
        </div>
      </div>`:D``}};ft([J({type:Object})],wt.prototype,"selected",void 0),ft([J({type:Object})],wt.prototype,"hover",void 0),wt=ft([R("rectangle-manhattan-distance")],wt);var mt=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let bt=class extends tt{constructor(){super(...arguments),this.selected=null,this.hover=null}static get styles(){return X`
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
    `}render(){return this.selected&&this.hover?D`<div>
        ${this.selected.rectangle.toString()} ->
        ${this.hover.rectangle.toString()}
      </div>
      <div class="presenter">
        <div>
          sqrt((${this.hover.rectangle.coords.col} -
          ${this.selected.rectangle.coords.col})^2 +
          (${this.hover.rectangle.coords.row} -
          ${this.selected.rectangle.coords.row})^2)
        </div>
        <div>
          = ${this.selected.rectangle.distance(this.hover.rectangle).toFixed(2)}
        </div>
      </div>`:D``}};mt([J({type:Object})],bt.prototype,"selected",void 0),mt([J({type:Object})],bt.prototype,"hover",void 0),bt=mt([R("rectangle-distance")],bt);const yt=(t,e,s,n)=>({x1:t,y1:e,x2:s,y2:n}),xt=t=>{switch(t){case"south":return yt("50%","100%","50%","50%");case"west":return yt("0%","50%","50%","50%");case"east":return yt("100%","50%","50%","50%");case"north-west":return yt("0%","0%","50%","50%");case"south-west":return yt("0%","100%","50%","50%");case"north-east":return yt("100%","0%","50%","50%");case"south-east":return yt("100%","100%","50%","50%");case"north":default:return yt("50%","0%","50%","50%")}};var $t=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};const kt=X`
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
`;let St=class extends tt{constructor(){super(...arguments),this.orientation="none",this.parent="rectangle",this.color=null}static get styles(){return[kt]}render(){if("none"===this.orientation)return D``;const t=(t=>{switch(t){case"rectangle":default:return xt}})(this.parent)(this.orientation);return D`<svg>
      <line
        x1="${t.x1}"
        y1="${t.y1}"
        x2="${t.x2}"
        y2="${t.y2}"
        style="${this.color?"stroke:${this.color};":""}"
      />
    </svg>`}};$t([J()],St.prototype,"orientation",void 0),$t([J()],St.prototype,"parent",void 0),$t([J()],St.prototype,"color",void 0),St=$t([R("line-element")],St);var Ot=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Ct=class extends tt{constructor(){super(...arguments),this.rect=null,this.show="coords",this.lines=[]}static get styles(){return X`
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
    `}render(){var t,e;const s=[(null===(t=this.rect)||void 0===t?void 0:t.selected)?"active":"",(null===(e=this.rect)||void 0===e?void 0:e.hovered)?"hovered":""];return D`${(()=>this.lines.map(t=>D`<line-element orientation="${t}"></line-element>`))()}<div class="${s.join(" ")}">
      ${(()=>{var t,e;switch(this.show){case"distance":return D`${null===(t=this.rect)||void 0===t?void 0:t.distance.toString()}`;case"none":return D`&nbsp;`;case"coords":default:return D`${null===(e=this.rect)||void 0===e?void 0:e.rectangle.toString()}`}})()}
    </div>`}};Ot([J({type:Object})],Ct.prototype,"rect",void 0),Ot([J()],Ct.prototype,"show",void 0),Ot([J({type:Array})],Ct.prototype,"lines",void 0),Ct=Ot([R("rectangle-element")],Ct);var jt=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Pt=class extends tt{constructor(){super(...arguments),this.row=0}static get styles(){return X`
      :host {
        display: block;
      }
    `}render(){return D` <slot></slot> `}};jt([J({type:Number})],Pt.prototype,"row",void 0),Pt=jt([R("rectangle-row")],Pt);const Mt={rectangle:{"0:-1":"north","1:-1":"north-east","1:0":"east","1:1":"south-east","0:1":"south","-1:1":"south-west","-1:0":"west","-1:-1":"north-west"},cube:{"0:1:-1":"north","1:0:-1":"north-east","1:-1:0":"south-east","0:-1:1":"south","-1:0:1":"south-west","-1:1:0":"north-west"}},zt=(t,e,s="rectangle")=>{const n={};if(!t)return n;const i=Mt[s],o=[t,...e.path].map(t=>"cube"===s?t.toCube():t);let r=null;for(const t of o)n[t.toString()]=[],r&&(n[t.toString()].push(i[r.remove(t).toString()]),n[r.toString()].push(i[t.remove(r).toString()])),r=t;return n};var Tt=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let _t=class extends tt{constructor(){super(...arguments),this.showPath="euclid"}static get styles(){return X`
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
    `}_setPath(t){const e=new CustomEvent("changeShowPath",{detail:{showPath:t}});this.showPath=t,this.dispatchEvent(e)}render(){const t=t=>this.showPath===t?"active":"";return D` <div class="controls">
      ${["euclid","taxicab"].map(t=>t).map(e=>D`<button
            class="${t(e)}"
            @click=${()=>this._setPath(e)}
          >
            ${e}
          </button>`)}
    </div>`}};Tt([J()],_t.prototype,"showPath",void 0),_t=Tt([R("rectangle-showpath-controls")],_t);class Ft{constructor(t=4086,e=Uint32Array){this.capacity=t,this.capacity=t,this._keys=[],this._priorities=new e(t+1),this.length=0}clear(){this.length=0}bubbleUp(t){const e=this._keys[t],s=this._priorities[t];for(;t>1;){const e=t>>>1;if(this._priorities[e]<=s)break;this._keys[t]=this._keys[e],this._priorities[t]=this._priorities[e],t=e}this._keys[t]=e,this._priorities[t]=s}bubbleDown(t){const e=this._keys[t],s=this._priorities[t],n=1+(this.length>>>1),i=this.length+1;for(;t<n;){const e=t<<1;if(e>=i)break;let n=this._priorities[e],o=this._keys[e],r=e;const a=e+1;if(a<i){const t=this._priorities[a];t<n&&(n=t,o=this._keys[a],r=a)}if(n>=s)break;this._keys[t]=o,this._priorities[t]=n,t=r}this._keys[t]=e,this._priorities[t]=s}push(t,e=0){if(this.length===this.capacity)throw new Error("Heap has reached capacity, can't push new items");const s=this.length+1;this._keys[s]=t,this._priorities[s]=e,this.bubbleUp(s),this.length++}pop(){const t=this._keys[1];return this.length--,this.length>0&&(this._keys[1]=this._keys[this.length+1],this._priorities[1]=this._priorities[this.length+1],this.bubbleDown(1)),t}peekPriority(){return this._priorities[1]}peek(){return this._keys[1]}toString(){if(0===this.length)return"(empty queue)";const t=Array(this.length-1);for(let e=0;e<this.length;e++)t[e]=this._priorities[e+1];return`[${t.join(" ")}]`}get[Symbol.toStringTag](){return"Heapify"}*[Symbol.iterator](){for(let t=0;t<this.length;t++){const e=this._priorities[t+1],s=this._keys[t+1];yield[s,e]}}*keys(){for(let t=0;t<this.length;t++)yield this._keys[t+1]}*priorities(){for(let t=0;t<this.length;t++)yield this._priorities[t+1]}}const qt=t=>t.toString(),Dt=(t,e)=>{const s=new Ft;s.push(t,0);const n={},i={};for(n[qt(t)]=void 0,i[qt(t)]=0;s.length>0;){const t=s.pop();if(t.equals(e))break;if(s.length>1e3)throw new Error("No what kinda path are you searching for?!");for(const o of t.neighbors()){const r=e.distance(o),a=i[qt(t)]+r;if(!i[qt(o)]||a<i[qt(o)]){i[qt(o)]=a;const e=a+r;s.push(o,e),n[qt(o)]=t.toString()}}}const o=t;let r=e;const a=[];do{a.push(r),r=dt.fromString(n[r.toString()]),r&&(r.system=t.system)}while(null!==r&&!r.equals(o));return{path:a.reverse(),costs:i[qt(e)]}};var Et=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Nt=class extends tt{constructor(t=rt(0,3).map(t=>rt(0,3).map(e=>vt({row:t,col:e})))){super(),this.rectangles=t,this.show="coords",this.distance="manhattan",this.selectDefault=null,this.cols=3,this.showPath=null,this.showPathControls=!1,this.euclidPathTo=null,this.manhattanPathTo=null}static get styles(){return X`
      :host {
        display: block;
        margin-top: calc(16rem - 20px);
      }
    `}selectRectangle(t,e){this.rectangles.forEach((s,n)=>{s.forEach((s,i)=>{n===t&&i===e?this.rectangles[n][i]=vt(s.rectangle.coords,!s.selected):"distance"===this.show?(this.rectangles[n][i]=vt(s.rectangle.coords,!1),this.rectangles[n][i].distance=this.rectangles[t][e].rectangle.manhattanDistance(this.rectangles[n][i].rectangle)):s.selected&&(this.rectangles[n][i]=vt(s.rectangle.coords,!1))})})}hoverRectangle(t,e){"distance"!==this.show&&this.rectangles.forEach((s,n)=>{s.forEach((s,i)=>{n===t&&i===e?this.rectangles[n][i]=vt(s.rectangle.coords,s.selected,!0):s.hovered&&(this.rectangles[n][i]=vt(s.rectangle.coords,s.selected,!1))})})}connectedCallback(){if(super.connectedCallback(),this.rectangles=rt(0,this.cols).map(t=>rt(0,this.cols).map(e=>vt({row:t,col:e}))),this.selectDefault){const t=dt.fromString(this.selectDefault);t&&this.selectRectangle(t.row,t.col)}}render(){const t=((t,e)=>{switch(t){case"manhattan":default:return D`<rectangle-manhattan-distance
          .selected="${e().find(t=>t.selected)}"
          .hover="${e().find(t=>t.hovered)}"
        ></rectangle-manhattan-distance>`;case"geometry":return D`<rectangle-distance
          .selected="${e().find(t=>t.selected)}"
          .hover="${e().find(t=>t.hovered)}"
        ></rectangle-distance>`;case"none":return D``}})(this.distance,()=>this.rectangles.reduce((t,e)=>[...t,...e],[])),e=(()=>{switch(this.showPath){case"euclid":return this.euclidPathTo?zt(dt.fromString(this.selectDefault),(s=dt.fromString(this.selectDefault),n=dt.fromString(this.euclidPathTo),s&&n?Dt(s.toEuclidPosition(),n.toEuclidPosition()):{path:[]})):null;case"taxicab":return this.manhattanPathTo?zt(dt.fromString(this.selectDefault),(t=dt.fromString(this.selectDefault),(e=dt.fromString(this.manhattanPathTo))&&t?Dt(t.toManhattanPosition(),e.toManhattanPosition()):{path:[]})):null;default:return null}var t,e,s,n})();return D`${this.rectangles.map((t,s)=>D`<rectangle-row>
          ${t.map((t,n)=>{var i;return D`<rectangle-element
              .rect="${t}"
              .lines="${e&&null!==(i=e[new dt(s,n).toString()])&&void 0!==i?i:[]}"
              show="${this.show}"
              @click="${()=>{this.selectRectangle(s,n),this.requestUpdate()}}"
              @mouseover=${()=>{this.hoverRectangle(s,n),this.requestUpdate()}}
            ></rectangle-element>`})}
        </rectangle-row>`)}
    ${this.showPathControls?D`
          <rectangle-showpath-controls
            @changeShowPath="${t=>{this.showPath=t.detail.showPath,this.requestUpdate()}}"
          ></rectangle-showpath-controls>
        `:""}
    ${t}`}};Et([J()],Nt.prototype,"show",void 0),Et([J()],Nt.prototype,"distance",void 0),Et([J()],Nt.prototype,"selectDefault",void 0),Et([J()],Nt.prototype,"cols",void 0),Et([J()],Nt.prototype,"showPath",void 0),Et([J({type:Boolean})],Nt.prototype,"showPathControls",void 0),Et([J()],Nt.prototype,"euclidPathTo",void 0),Et([J()],Nt.prototype,"manhattanPathTo",void 0),Nt=Et([R("rectangle-container")],Nt);var At=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Ht=class extends tt{render(){return D`${rt(0,4).map(t=>rt(0,4).map(e=>D`<graph-gatter-element
            x="${t}"
            y="${e}"
          ></graph-gatter-element>`))}`}};Ht=At([R("graph-gatter")],Ht);var Bt=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Lt=class extends tt{constructor(){super(...arguments),this.x=0,this.y=0,this.step=Gt}static get styles(){return X`
      div {
        display: block;
        position: absolute;
        width: ${Gt}px;
        height: ${Gt}px;
        border-bottom: 1px dashed white;
        border-left: 1px dashed white;
        z-index: 2;
      }
    `}render(){const t=`left:${this.x*this.step}px;bottom:${this.y*this.step}px;`;return D` <div style="${t}"></div> `}};Bt([J()],Lt.prototype,"x",void 0),Bt([J()],Lt.prototype,"y",void 0),Lt=Bt([R("graph-gatter-element")],Lt);var Vt=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Ut=class extends tt{constructor(){super(...arguments),this.x=0,this.y=0,this.step=Gt}static get styles(){return X`
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
    `}render(){const t=`left:${this.x*this.step-2}px;bottom:${this.y*this.step-2}px;`;return D`
      <div class="point" style="${t}"></div>
      <div class="label" style="${t}">x: ${this.x}<br />y:${this.y}</div>
    `}};Vt([J()],Ut.prototype,"x",void 0),Vt([J()],Ut.prototype,"y",void 0),Ut=Vt([R("graph-point")],Ut);var It=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Wt=class extends tt{constructor(){super(...arguments),this.coords=[],this.step=Gt}static get styles(){return X`
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
    `}render(){return D`<svg>
      <line x1="0px" y1="0px" x2="100px" y2="100px" />
      <line x1="100px" y1="100px" x2="200px" y2="200px" />
      <line x1="200px" y1="200px" x2="400px" y2="200px" />
    </svg>`}};It([J({type:Array})],Wt.prototype,"coords",void 0),Wt=It([R("graph-element-line")],Wt);var Rt=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};const Gt=100;let Jt=class extends tt{constructor(){super(...arguments),this.withGatter=!1,this.withLines=!1}static get styles(){return X`
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
    `}render(){return D`
      <graph-point x="1" y="1"></graph-point>
      <graph-point x="2" y="2"></graph-point>
      <graph-point x="2" y="4"></graph-point>
      <graph-point x="4" y="2"></graph-point>
      ${this.withGatter?D`<graph-gatter></graph-gatter>`:D``}
      ${this.withLines?D`<graph-element-line
            .coords="${[{x1:1,x2:2,y1:1,y2:2}]}"
          ></graph-element-line>`:""}
    `}};Rt([J({type:Boolean})],Jt.prototype,"withGatter",void 0),Rt([J({type:Boolean})],Jt.prototype,"withLines",void 0),Jt=Rt([R("graph-element")],Jt);class Qt{constructor(t,e,s=!1,n=!1,i=0){this.cube=t,this.selected=e,this.hovered=s,this.blocked=n,this.distance=i}}const Yt=(t,e=!1,s=!1)=>function(t){return t&&!isNaN(t.col)&&!isNaN(t.row)}(t)?new Qt(ut(t).toCube(),e,s):new Qt(t,e,s),Kt=(t,e,s)=>{switch(t){case"even-q":return((t,e)=>t.map(t=>D`<div class="row even">
        ${t.filter(t=>1==(1&t.cube.toCoords().col)).map(t=>e(t))}
      </div><div class="row odd">
        ${t.filter(t=>0==(1&t.cube.toCoords().col)).map(t=>e(t))}
      </div>`))(e,s);case"even-q-naive":return((t,e)=>t.map((t,s)=>D`<div class="row ${0==(1&s)?"even":"odd"}">
        ${t.map(t=>e(t))}
      </div>`))(e,s);case"odd-q":case"odd-q-naive":default:return((t,e)=>t.map((t,s)=>D`<div class="row ${0==(1&s)?"odd":"even"}">
        ${t.map(t=>e(t))}
      </div>`))(e,s)}};var Xt=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Zt=class extends tt{static get styles(){return X`
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
    `}render(){return D`
      <svg>
        <text x="47%" y="25%">z</text>
        <text x="20%" y="60%">x</text>
        <text x="75%" y="60%">y</text>
        <line x1="49%" x2="49%" y1="46%" y2="96%"></line>
        <line x1="3%" y1="25%" x2="49%" y2="46%"></line>
        <line y1="46%" x1="49%" y2="25%" x2="94%"></line>
      </svg>
    `}};Zt=Xt([R("hexagon-cube")],Zt);var te=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};const ee=X`
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
`,se=X`
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
`,ne=X`
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
`;let ie=class extends tt{constructor(){super(...arguments),this.orientation="flat",this.selected=!1,this.hovered=!1,this.blocked=!1,this.showDirections=!1,this.showCube=!1,this.label="center",this.size=null,this.lines=[]}static get styles(){return[X`
        :host {
          position: relative;
          display: inline-block;

          --flat-left: 3.3rem;
          --pointy-left: -0.5rem;
        }
      `,ee,se,ne]}_select(){this.dispatchEvent(new CustomEvent("select"))}_hover(){this.dispatchEvent(new CustomEvent("hover"))}_unhover(){this.dispatchEvent(new CustomEvent("unhover"))}render(){const t=this.size?`width: ${this.size}; height: ${this.size}; margin-left: calc(${this.size} * 0.55));`:"",e=this.showDirections?D`<div class="arrows ${this.orientation}">
          <div class="up">⇑</div>
          <div class="ne">⇑</div>
          <div class="se">⇑</div>
          <div class="nw">⇑</div>
          <div class="sw">⇑</div>
          <div class="down">⇑</div>
        </div>`:"",s=this.showCube?D`<hexagon-cube></hexagon-cube>`:"";return D`${s} 
      <div
        class="hexagon ${this.orientation} ${this.selected?"selected":this.hovered?"hovered":""} ${this.blocked?"blocked":""}"
        @mouseover=${()=>this._hover()}
        @mouseout=${()=>this._unhover()}
        @click=${()=>this._select()}
        style="${t}"
      >
        <div class="lineContainer">${(()=>this.lines.map(t=>D`<line-element orientation="${t}"></line-element>`))()}</div>
      </div>
      ${e}
      <div
        class="children ${this.orientation} ${this.selected||this.hovered?"active":""}
          ${this.label}"
        @mouseover=${()=>this._hover()}
        @mouseout=${()=>this._unhover()}
        @click=${()=>this._select()}
      >
        <slot
          @mouseover=${()=>this._hover()}
          @mouseout=${()=>this._unhover()}
          @click=${()=>this._select()}
        ></slot>
      </div>`}};te([J()],ie.prototype,"orientation",void 0),te([J({type:Boolean})],ie.prototype,"selected",void 0),te([J({type:Boolean})],ie.prototype,"hovered",void 0),te([J({type:Boolean})],ie.prototype,"blocked",void 0),te([J({type:Boolean})],ie.prototype,"showDirections",void 0),te([J({type:Boolean})],ie.prototype,"showCube",void 0),te([J()],ie.prototype,"label",void 0),te([J()],ie.prototype,"size",void 0),te([J({type:Array})],ie.prototype,"lines",void 0),ie=te([R("hexagon-element")],ie);var oe=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let re=class extends tt{constructor(){super(...arguments),this.orientation="flat",this.coordinates="even-q"}static get styles(){return X`
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
    `}_setOrientation(t){const e=new CustomEvent("changeOrientation",{detail:{orientation:t}});this.orientation=t,this.dispatchEvent(e)}_setCoordinates(t){const e=new CustomEvent("changeCoordinates",{detail:{coordinates:t}});this.coordinates=t,this.dispatchEvent(e)}render(){const t=t=>this.orientation===t?"active":"",e=t=>this.coordinates.startsWith(t)?"active":"";return D` <div class="controls">
        <button
          class="${t("flat")}"
          @click=${()=>this._setOrientation("flat")}
        >
          Flat
        </button>
        <button
          class="${t("pointy")}"
          @click=${()=>this._setOrientation("pointy")}
        >
          Pointy
        </button>
      </div>
      <div class="controls">
        <button
          class="${e("even")}"
          @click=${()=>this._setCoordinates("even-q-naive")}
        >
          Push Even Columns
        </button>
        <button
          class="${e("odd")}"
          @click=${()=>this._setCoordinates("odd-q-naive")}
        >
          Push Odd Columns
        </button>
      </div>`}};oe([J()],re.prototype,"orientation",void 0),oe([J()],re.prototype,"coordinates",void 0),re=oe([R("hexagon-controls")],re);var ae=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};class he{constructor(t=(()=>""),e=(()=>""),s=(t=>t.cube.toString())){this.printFormula=t,this.printResult=e,this.show=s}}let le=class extends tt{constructor(){super(...arguments),this.selected=null,this.hovered=null,this.hideHead=!1,this.renderer=new he}static get styles(){return X`
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
    `}render(){if(!this.selected||!this.hovered)return D``;const{show:t,printFormula:e,printResult:s}=this.renderer,n=s(),i=null!=(o=n)&&void 0!==o.processor?n:`= ${n}`;var o;return D`${this.hideHead?"":D`<div>
        ${t(this.selected)} -> ${t(this.hovered)}
      </div>`}
      <div class="presenter">
        <div>
          ${e()}
        </div>
        <div>
          ${i}
        </div>
      </div>`}};ae([J({type:Object})],le.prototype,"selected",void 0),ae([J({type:Object})],le.prototype,"hovered",void 0),ae([J({type:Boolean})],le.prototype,"hideHead",void 0),ae([J({type:Object})],le.prototype,"renderer",void 0),le=ae([R("hexagon-distance")],le);var ce=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let de=class extends tt{constructor(){super(...arguments),this.hexagons=[]}render(){const t=this.hexagons.reduce((t,e)=>t||e.find(t=>t.selected),void 0),e=this.hexagons.reduce((t,e)=>t||e.find(t=>t.hovered),void 0);return t&&e?D`
      <hexagon-distance
        .selected=${t}
        .hovered=${e}
        .renderer=${new he(()=>`${t.cube.toPosition().toString()}-${e.cube.toPosition().toString()}`,()=>lt(t.cube.toCoords(),e.cube.toCoords()).toString(),t=>t.cube.toPosition().toString())}
      ></hexagon-distance>
    `:D``}};ce([J()],de.prototype,"hexagons",void 0),de=ce([R("hexagon-distance-manahattan-box")],de);var ue=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};const pe=t=>t>=0?`+${t}`:`${t}`;let ge=class extends tt{constructor(){super(...arguments),this.hexagons=[]}render(){const t=this.hexagons.reduce((t,e)=>t||e.find(t=>t.selected),void 0),e=this.hexagons.reduce((t,e)=>t||e.find(t=>t.hovered),void 0);return t&&e?D`
      <hexagon-distance
        hideHead
        .selected=${t}
        .hovered=${e}
        .renderer=${new he(()=>D`<pre style="font-size: 1rem;">
${pe(e.cube.x)} -> ${pe(t.cube.x)}
${pe(e.cube.y)} -> ${pe(t.cube.y)}
${pe(e.cube.z)} -> ${pe(t.cube.z)}
</pre>`,()=>D`<pre style="font-size: 1rem;"><br> => &nbsp;&nbsp;&nbsp;${t.cube.distance(e.cube).toString()}</pre>`,t=>t.cube.toString())}
      ></hexagon-distance>
    `:D``}};ue([J()],ge.prototype,"hexagons",void 0),ge=ue([R("hexagon-distance-manahattan-cube-hint")],ge);const ve=t=>t.toPosition().toString(),fe=(t,e,s)=>((t,e,s)=>{const n=new Ft;n.push(t,0);const i={},o={},r=[];if(i[ve(t)]=ve(t),o[ve(t)]=0,t.equals(e))return{path:[]};if(s(e))return{path:[]};for(;n.length>0;){const t=n.pop();if(t.equals(e))break;if(n.length>1e3)throw new Error("No what kinda path are you searching for?!");for(const a of t.neighbors().filter(t=>!i[ve(t)])){if(s(a))continue;const h=o[ve(t)]+t.cost();(!o[ve(a)]||h<o[ve(a)])&&(o[ve(a)]=h+e.heuristic(a),r.push(a.toPosition().toString()),n.push(a,h+e.heuristic(a)),i[ve(a)]=t.toPosition().toString())}}const a=t.toPosition();let h=e.toPosition();const l=[];do{l.push(h),h=dt.fromString(i[h.toString()])}while(null!==h&&!h.equals(a));return{path:l.reverse(),visited:r}})(t,e,s).path.length;var we=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let me=class extends tt{constructor(){super(...arguments),this.distance=void 0,this.label=void 0}static get styles(){return X`
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
    `}render(){var t;return this.distance?D`
    <div style="animation-delay: ${this.distance/2}s;">
      ${null!==(t=this.label)&&void 0!==t?t:this.distance}
    </div>
    `:""}};we([J({type:Number})],me.prototype,"distance",void 0),we([J()],me.prototype,"label",void 0),me=we([R("label-uncover-distance")],me);const be=t=>t.reduce((t,e)=>[...t,...e],[]),ye=t=>t.find(t=>t.selected),xe=t=>t.toPosition().toString(),$e=(t,e,s,n)=>{const i=new Ft;i.push(t,0);const o={},r={},a=[];if(o[xe(t)]=xe(t),r[xe(t)]=0,t.equals(e))return{path:[]};if(n(e))return{path:[]};for(;i.length>0;){const t=i.pop();if(t.equals(e))break;if(i.length>1e3)throw new Error("No what kinda path are you searching for?!");a.push(t.toPosition().toString());for(const h of t.neighbors().filter(t=>!o[xe(t)]).map(t=>{var e;return null!==(e=null==s?void 0:s.find(e=>e.equals(t)))&&void 0!==e?e:t})){if(n(h))continue;a.some(t=>t===xe(h))||a.push(xe(h));const s=r[xe(t)]+h.cost();(!r[xe(h)]||s<r[xe(h)])&&(r[xe(h)]=s,i.push(h,s+e.heuristic(h)),o[xe(h)]=t.toPosition().toString())}}const h=t.toPosition();let l=e.toPosition();const c=[];do{c.push(l),l=dt.fromString(o[l.toString()])}while(null!==l&&!l.equals(h));return{path:c.reverse(),visited:a}};var ke=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Se=class extends tt{constructor(t){super(),this.hexagons=t,this.orientation="flat",this.coordinates="even-q-naive",this.distance=null,this.rows=6,this.cols=5,this.label="coords",this.showButtons=!1,this.highlight=null,this.selectDefault=null,this.pathFrom=null,this.pathTo=null,this.blocked=[],this.expensive=[],this.ignoreBlocked=!1,this.ignoreBoundaries=!1,this.showPath=null}static get styles(){return X`
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
    `}connectedCallback(){var t,e;super.connectedCallback(),this.hexagons=(t=this.rows,e=this.cols,rt(0,t).map(t=>rt(0,e).map(e=>Yt({row:t,col:e}))));const s=this.blocked.map(t=>{var e;return null===(e=dt.fromString(t))||void 0===e?void 0:e.toCube()}).filter(t=>void 0!==t),n=this.expensive.map(t=>{var e;return null===(e=dt.fromString(t))||void 0===e?void 0:e.toCube()}).filter(t=>void 0!==t);if(this.hexagons.reduce((t,e)=>[...t,...e],[]).forEach(t=>{t.blocked=s.some(e=>null==e?void 0:e.equals(t.cube)),t.cube.costs=n.some(e=>null==e?void 0:e.equals(t.cube))?5:1}),this.selectDefault){const t=dt.fromString(this.selectDefault);if(!t)return;const e=this.hexagons.reduce((t,e)=>[...t,...e],[]).find(e=>e.cube.toPosition().equals(t));e&&this.apply(e,"selected",!0)}}_selectHandled(t){const e=new CustomEvent("select",{detail:{container:this,hexagon:t},cancelable:!0});return!this.dispatchEvent(e)}apply(t,e,s,n=!1){for(let i=0;i<this.hexagons.length;i++)for(let o=0;o<this.hexagons[i].length;o++){let r=this.hexagons[i][o];r.cube.toString()===t.cube.toString()?r[e]!==s&&(r[e]=s,r=Object.assign({},r)):n||r[e]!==s||(r[e]=!s,r=Object.assign({},r)),this.hexagons[i][o]=r}this.requestUpdate()}select(t){this._selectHandled(t)||this.apply(t,"selected",!0)}hover(t){this.apply(t,"hovered",!0)}unhover(t){this.apply(t,"hovered",!1,!0)}render(){const t=({cube:t})=>{return e=t.toCoords(),!(!(s=this.highlight)||(e.col!==s.col&&s.col||e.row!==s.row)&&(e.row!==s.row&&s.row||e.col!==s.col));var e,s},e=({cube:t})=>this.pathFrom&&t.toPosition().equals(dt.fromString(this.pathFrom))||this.pathTo&&t.toPosition().equals(dt.fromString(this.pathTo)),s=this.ignoreBoundaries?void 0:this.hexagons.reduce((t,e)=>[...t,...e],[]).map(t=>t.cube),n=this.ignoreBlocked?void 0:this.blocked.map(t=>dt.fromString(t).toCube());let i=null;this.pathTo&&this.pathFrom&&(i=$e(dt.fromString(this.pathFrom).toCube(),dt.fromString(this.pathTo).toCube(),s,((t,e)=>s=>!(!t||t.some(t=>t.equals(s)))||!(!e||!e.some(t=>t.equals(s))))(s,n)));const o=((t,e,s)=>{switch(t){case"taxicab":return s&&e?zt(e,s,"cube"):null;default:return null}})(this.showPath,dt.fromString(this.pathFrom),i),r=Kt(this.coordinates,this.hexagons,s=>{var n;return D`<hexagon-element
          orientation="${this.orientation}"
          label="${"cube-coords"===this.label?"top":"center"}"
          .lines="${o&&null!==(n=o[s.cube.toString()])&&void 0!==n?n:[]}"
          @select="${()=>this.select(s)}"
          @hover="${()=>this.hover(s)}"
          @unhover="${()=>this.unhover(s)}"
          ?selected="${s.selected||t(s)||e(s)}"
          ?hovered="${s.hovered||s.cube.costs>1}"
          ?blocked="${s.blocked}"
          style="transform: rotateY(-1deg);transform-origin: 0 0;"
        >
          ${((t,e,s,n)=>{switch(e){case"distance":{const e=s.reduce((t,e)=>[...t,...e],[]).find(t=>t.selected);return e?t.toPosition().manhattanDistance(e.cube.toPosition()).toString():""}case"cube-distance":{const e=ye(be(s));return e?t.distance(e.cube).toString():""}case"cube-coords":return D`${t.z}<br />${t.x}&nbsp;&nbsp;&nbsp;${t.y}`;case"uncover-cube-breadth-distance":{const e=be(s),n=ye(e);if(!n)return"";const i=e.map(t=>t.cube),o=(t=>t.filter(t=>t.blocked))(e).map(t=>t.cube),r=fe(t,n.cube,t=>!i.some(e=>e.equals(t))||o.some(e=>e.equals(t)));return D`<label-uncover-distance distance="${r}" ></label-uncover-distance>`}case"uncover-cube-a*-distance":{if(!n)return"";if(!n.visited)return"";if([...n.path].pop().equals(t.toPosition()))return D`<label-uncover-distance distance="${n.visited.length/2}" label="Goal"></label-uncover-distance>`;const e=n.visited.indexOf(t.toPosition().toString());return e<0?"":D`<label-uncover-distance distance="${e/2}" label="Head"></label-uncover-distance>`}case"none":return"";case"coords":default:return`${ut(t.toCoords()).toString()}`}})(s.cube,this.label,this.hexagons,i)}
        </hexagon-element>`}),a=this.showButtons?D` <hexagon-controls
          @changeOrientation=${t=>this.orientation=t.detail.orientation}
          @changeCoordinates=${t=>this.coordinates=t.detail.coordinates}
        ></hexagon-controls>`:"",h=this.distance?D`${((t,e,s="")=>{switch(t){case"manhattan-box":return D`<hexagon-distance-manahattan-box
          style="${s}"
          .hexagons=${e}
        ></hexagon-distance-manahattan-box>`;case"manhattan-cube-hint":return D`<hexagon-distance-manahattan-cube-hint
          style="${s}"
          .hexagons=${e}
        ></hexagon-distance-manahattan-cube-hint>`;default:case"none":return D``}})(this.distance,[...this.hexagons],"display:block; width: 20rem; margin: 0 auto;")}`:"";return D`
      <div class="hexagons ${this.orientation}">
        ${r}
      </div>
      ${a} ${h}
    `}};ke([J()],Se.prototype,"orientation",void 0),ke([J()],Se.prototype,"coordinates",void 0),ke([J()],Se.prototype,"distance",void 0),ke([J({type:Number})],Se.prototype,"rows",void 0),ke([J({type:Number})],Se.prototype,"cols",void 0),ke([J()],Se.prototype,"label",void 0),ke([J({type:Boolean})],Se.prototype,"showButtons",void 0),ke([J({type:Object})],Se.prototype,"highlight",void 0),ke([J()],Se.prototype,"selectDefault",void 0),ke([J()],Se.prototype,"pathFrom",void 0),ke([J()],Se.prototype,"pathTo",void 0),ke([J()],Se.prototype,"blocked",void 0),ke([J()],Se.prototype,"expensive",void 0),ke([J({type:Boolean})],Se.prototype,"ignoreBlocked",void 0),ke([J({type:Boolean})],Se.prototype,"ignoreBoundaries",void 0),ke([J()],Se.prototype,"showPath",void 0),Se=ke([R("hexagon-container")],Se);var Oe=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Ce=class extends tt{static get styles(){return X`
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
`}render(){return D`
      <svg>
        <line x1="20%" y1="0%" x2="20%" y2="90%" />
        <line x1="15%" y1="80%" x2="100%" y2="80%" />
        <line x1="0%" y1="100%" x2="50%" y2="50%" />
      </svg>
      <slot></slot>
    `}};Ce=Oe([R("graph-3d")],Ce);var je=function(t,e,s,n){for(var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n,a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Pe=class extends tt{constructor(){super(...arguments),this.pathsTo={first:"7:2",second:{ignoreObstacle:!0,target:"7:2"},third:{target:"7:2",label:"none"},fourth:{target:"7:3",label:"none"},fifth:{target:"7:3",label:"none"}}}render(){return D`
      <presentation-page first>
        <h1>what math can teach about coding</h1>
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">"There are two reasons why you can do maths as developer: data science and gaming."</h2>
        <h3>Myself</h3>
      </presentation-page>
      <presentation-page>
        <h2>So let's build this, right?</h2>
        <video src="/assets/the-mill.mp4" autoplay loop muted></video>
      </presentation-page>
      <presentation-page>
        <h1>Distance</h1>
        <h2>Game mechanics</h2>
      </presentation-page>
      <presentation-page>
        <h2>Movement Costs/Distance</h2>
        <rectangle-container distance="none" show="distance" selectDefault="0:0" cols="1"></rectangle-container>
      </presentation-page>
      <presentation-page>
        <h2>Can we use what we learned in school?</h2>
        <graph-element />
      </presentation-page>
      <presentation-page>
        <h2>Can we use what we learned in school??</h2>
        <graph-element withGatter withLines></graph-element>
        Distance! Paths! Euclid ftw!!
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">Distance between two points</h2>
        <pre style="font-size:2rem;">d = √<span style="border-top:2px solid black;">(x2 − x1)² + (y2 − y1)²</span></pre>
      </presentation-page>
      <presentation-page>
        <h2>Distance on a game field</h2>
        <pre>d = √<span style="border-top:1px solid black;">(x2 − x1)² + (y2 − y1)²</span></pre>
        <rectangle-container distance="geometry" />
      </presentation-page>
      <presentation-page>
        <h1>maths, you betrayed me again!</h1>
      </presentation-page>
      <presentation-page>
        <h2><del>Euclid</del> Taxicab</h2>
        <rectangle-container 
          show="none" showPath="euclid" distance="none" 
          showPathControls
          selectDefault="0:0" euclidPathTo="3:3" manhattanPathTo="3:3" 
          />
      </presentation-page>
      <presentation-page>
        <h2>How we want distance on a game field</h2>
        <pre>d = ?</span></pre>
        <rectangle-container distance="none" />
      </presentation-page>
      <presentation-page>
        <h2>How we want distance on a game field</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</span></pre>
        <rectangle-container />
      </presentation-page>
      <presentation-page>
        <h2>How we want distance on a game field</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</span></pre>
        <rectangle-container show="distance" selectDefault="0:0" />
      </presentation-page>
      <presentation-page>
        <h1 class="lesson">Lesson 1</h1>
        <h2 class="lesson">Visualisation is awesome</h2>
      </presentation-page>
      <presentation-page>
        <h1 class="lesson">Lesson 2</h1>
        <h2 class="lesson">If something's weirdly off, you might be applying the wrong system</h2>
      </presentation-page>
      <presentation-page>
        <h1>But we want Hexagons!</h1>
      </presentation-page>
      <presentation-page>
        <h2>Hexagons</h2>
        <hexagon-container showButtons></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Hexagons Distance</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</pre>
        <hexagon-container distance="manhattan-box"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Issues?</h2>
        <hexagon-container distance="manhattan-box" label="distance" selectDefault="2:2"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Issue</h2>
        <pre>We cannot move directly in a row</pre>
        <hexagon-container .highlight="${{row:0}}"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Fix</h2>
        <pre>Move row in one line</pre>
        <hexagon-container coordinates="even-q" rows="4" cols="7" .highlight="${{row:0}}"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Has it fixed our distance?</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</pre>
        <hexagon-container coordinates="even-q" rows="4"  cols="7" label="distance" selectDefault="2:2"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h1>take a step back</h1>
      </presentation-page>
      <presentation-page>
        <h2>Observation</h2>
        <pre>We can move in 6 directions</pre>
        <hexagon-element size="20rem" orientation="pointy" showDirections style="margin-top:3rem;" />
      </presentation-page>
      <presentation-page>
        <h2>Observation</h2>
        <pre>Just like in 3D</pre>
        <graph-3d style="width: 60%; height: 60%; margin: 0 auto;">
          <hexagon-element size="20rem" orientation="pointy" showCube style="margin-top:3rem;">
          </hexagon-element>
        </graph-3d>
      </presentation-page>
      <presentation-page>
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
      </presentation-page>
      <presentation-page>
        <h2>Coordinates</h2>
        <div style="display:flex; margin:0 auto; align-items: center;justify-content: center;">
          <hexagon-container coordinates="even-q" rows="2" cols="3" label="coords" selectDefault="1:1"></hexagon-container>
          <hexagon-container coordinates="even-q" rows="2" cols="3" label="cube-coords" selectDefault="1:1"></hexagon-container>
        </div>
      </presentation-page>
      <presentation-page>
        <h2>Can you guess the distance?</h2>
        <div class="flex">
        <hexagon-container coordinates="even-q" rows="3" cols="5" distance="manhattan-cube-hint" label="cube-coords" selectDefault="1:1"></hexagon-container>
        </div>
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">Taxicab distance between two cubes</h2>
        <pre style="font-size:2rem;">d = max(|x2 − x1|, |y2 − y1|, |z2 − z1|)</pre>
      </presentation-page>
      <presentation-page>
        <h2>Distance</h2>
        <pre>d = max(|x2 − x1|, |y2 − y1|, |z2 − z1|)</pre>
        <hexagon-container coordinates="even-q" rows="4" cols="7" label="cube-distance" selectDefault="2:2"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h1 class="lesson">Lesson 3</h1>
        <h2 class="lesson">When extending/refactoring your product, taking a step back and searching for different solutions is often more useful than just adding things to make it work</h2>
      </presentation-page>
      <presentation-page>
        <h1>Path Finding</h1>
        <h2>Game mechanics</h2>
      </presentation-page>
      <presentation-page>
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
      </presentation-page>
      <presentation-page>
        <h2>Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7"  label="cube-distance" selectDefault="0:0" pathFrom="0:0" pathTo="${this.pathsTo.first}" showPath="taxicab"
          @select="${t=>{this.pathsTo.first=t.detail.hexagon.cube.toPosition().toString(),this.requestUpdate(),t.preventDefault()}}"
        ></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Shortest Path with obstacle</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7"  label="cube-distance" 
          selectDefault="0:0" pathFrom="0:0" pathTo="${this.pathsTo.second.target}" showPath="taxicab"
          .blocked="${["4:0","4:1","4:2","4:3"]}"
          ?ignoreBlocked="${this.pathsTo.second.ignoreObstacle}"
          @select="${t=>{this.pathsTo.second.target=t.detail.hexagon.cube.toPosition().toString(),this.requestUpdate(),t.preventDefault()}}"
        ></hexagon-container>
        <input type="checkbox" @click="${()=>(this.pathsTo.second.ignoreObstacle=!this.pathsTo.second.ignoreObstacle,this.requestUpdate())}" /> Comply to reality
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">How can we find the path without knowing the way?</h2>
      </presentation-page>
      <presentation-page>
        <h2>Breadth First Search</h2>
        <pre style="text-align:left; font-size: 2rem;">
  const frontier = new Queue&lt;Cube>();
  frontier.push(start);
  const cameFrom = {};

  const neverVisitedNeighbors => (current: Cube) => 
    neighbors(current).filter(field => !cameFrom[next] || isBlocked(field))

  while (frontier.length > 0) {
    const current = frontier.pop();
    for (const next of neverVisitedNeighbors(current)) {
      frontier.push(next);
      cameFrom[next] = current;
    }
  }
        </pre>
      </presentation-page>
      <presentation-page>
        <h2>Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7" label="${this.pathsTo.third.label}" 
          selectDefault="0:0" pathFrom="0:0" pathTo="${this.pathsTo.third.target}"
          .blocked="${["4:0","4:1","4:2","4:3"]}"
        ></hexagon-container>
        <button @click="${()=>{this.pathsTo.third.label="none",this.requestUpdate(),setTimeout(()=>{this.pathsTo.third.label="none"===this.pathsTo.third.label?"uncover-cube-breadth-distance":"none",this.requestUpdate()},1)}}">Trigger uncover the distance</button>
      </presentation-page>
      <presentation-page>
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
      </presentation-page>
      <presentation-page>
        <h1 class="lesson">Lesson 4</h1>
        <h2 class="lesson">The right line of code can improve your performance a lot, the right idea drastically so</h2>
      </presentation-page>
      <presentation-page>
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
      </presentation-page>

      <presentation-page>
        <h2>A* Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="6" cols="9" label="${this.pathsTo.fourth.label}" 
          selectDefault="0:0" pathFrom="0:0" pathTo="${this.pathsTo.fourth.target}"
          .blocked="${["4:0","4:1","4:2","4:3"]}"
        ></hexagon-container>
        <button @click="${()=>{this.pathsTo.fourth.label="none",this.requestUpdate(),setTimeout(()=>{this.pathsTo.fourth.label="none"===this.pathsTo.fourth.label?"uncover-cube-a*-distance":"none",this.requestUpdate()},1)}}">Trigger uncover the distance</button>
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">And if it's not a wall but only a little muddy?</h2>
      </presentation-page>
      <presentation-page>
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
      </presentation-page>
      <presentation-page>
        <h2>A* Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="6" cols="9" label="${this.pathsTo.fifth.label}" 
          selectDefault="0:0" pathFrom="0:0" pathTo="${this.pathsTo.fifth.target}" showPath="taxicab"
          .blocked="${["3:3","3:4","3:5"]}"
          .expensive="${["4:0","4:2","4:3","4:4","4:5","3:0","3:2","5:3","5:0","5:2","6:1","6:2","7:1"]}"
        ></hexagon-container>
        <button @click="${()=>{this.pathsTo.fifth.label="none",this.requestUpdate(),setTimeout(()=>{this.pathsTo.fifth.label="none"===this.pathsTo.fifth.label?"uncover-cube-a*-distance":"none",this.requestUpdate()},1)}}">Trigger uncover the distance</button>
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">Would you have found this solution if we'd started searching for a solution from the requirement of muddy roads?</h2>
      </presentation-page>
      <presentation-page>
        <h1 class="lesson">Lesson 5</h1>
        <h2 class="lesson">Not starting with the requirement but finding the path to the requirement will improve your solution</h2>
      </presentation-page>
      <presentation-page>
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
      </presentation-page>
      <presentation-created-with></presentation-created-with>
    `}};Pe.styles=X`
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
    .pushToMiddle {
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
  `,Pe=je([R("presentation-core")],Pe);export{Pe as PresentationCore};
