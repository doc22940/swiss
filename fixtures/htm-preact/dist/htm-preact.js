!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function n(){}var r={},o=[],i=[];function a(e,t){for(var n in t)e[n]=t[n];return e}var u="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,c=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,l=[];function s(e){!e._dirty&&(e._dirty=!0)&&1==l.push(e)&&u(f)}function f(){var e,t=l;for(l=[];e=t.pop();)e._dirty&&S(e)}function p(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function d(e){var t=a({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function v(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===c.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,m,a):e.removeEventListener(t,m,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var u=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(u?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function m(e){return this._listeners[e.type](e)}var _=[],b=0,y=!1,g=!1;function C(){for(var e;e=_.pop();)e.componentDidMount&&e.componentDidMount()}function w(e,t,n,r,o,i){b++||(y=null!=o&&void 0!==o.ownerSVGElement,g=null!=e&&!("__preactattr_"in e));var a=function e(t,n,r,o,i){var a=t,u=y;if(null!=n&&"boolean"!=typeof n||(n=""),"string"==typeof n||"number"==typeof n)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||i)?t.nodeValue!=n&&(t.nodeValue=n):(a=document.createTextNode(n),t&&(t.parentNode&&t.parentNode.replaceChild(a,t),k(t,!0))),a.__preactattr_=!0,a;var c,l,s=n.nodeName;if("function"==typeof s)return function(e,t,n,r){for(var o=e&&e._component,i=o,a=e,u=o&&e._componentConstructor===t.nodeName,c=u,l=d(t);o&&!c&&(o=o._parentComponent);)c=o.constructor===t.nodeName;return o&&c&&(!r||o._component)?(P(o,l,3,n,r),e=o.base):(i&&!u&&(A(i),e=a=null),o=E(t.nodeName,l,n),e&&!o.nextBase&&(o.nextBase=e,a=null),P(o,l,1,n,r),e=o.base,a&&e!==a&&(a._component=null,k(a,!1))),e}(t,n,r,o);if(y="svg"===s||"foreignObject"!==s&&y,s=String(s),(!t||!p(t,s))&&(c=s,(l=y?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c)).normalizedNodeName=c,a=l,t)){for(;t.firstChild;)a.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(a,t),k(t,!0)}var f=a.firstChild,m=a.__preactattr_,_=n.children;if(null==m){m=a.__preactattr_={};for(var b=a.attributes,C=b.length;C--;)m[b[C].name]=b[C].value}return!g&&_&&1===_.length&&"string"==typeof _[0]&&null!=f&&void 0!==f.splitText&&null==f.nextSibling?f.nodeValue!=_[0]&&(f.nodeValue=_[0]):(_&&_.length||null!=f)&&function(t,n,r,o,i){var a,u,c,l,s,f,d,h,m=t.childNodes,_=[],b={},y=0,g=0,C=m.length,w=0,x=n?n.length:0;if(0!==C)for(var N=0;N<C;N++){var E=m[N],O=E.__preactattr_,P=x&&O?E._component?E._component.__key:O.key:null;null!=P?(y++,b[P]=E):(O||(void 0!==E.splitText?!i||E.nodeValue.trim():i))&&(_[w++]=E)}if(0!==x)for(var N=0;N<x;N++){s=null;var P=(l=n[N]).key;if(null!=P)y&&void 0!==b[P]&&(s=b[P],b[P]=void 0,y--);else if(!s&&g<w)for(a=g;a<w;a++)if(void 0!==_[a]&&(f=u=_[a],h=i,"string"==typeof(d=l)||"number"==typeof d?void 0!==f.splitText:"string"==typeof d.nodeName?!f._componentConstructor&&p(f,d.nodeName):h||f._componentConstructor===d.nodeName)){s=u,_[a]=void 0,a===w-1&&w--,a===g&&g++;break}s=e(s,l,r,o),c=m[N],s&&s!==t&&s!==c&&(null==c?t.appendChild(s):s===c.nextSibling?v(c):t.insertBefore(s,c))}if(y)for(var N in b)void 0!==b[N]&&k(b[N],!1);for(;g<=w;)void 0!==(s=_[w--])&&k(s,!1)}(a,_,r,o,g||null!=m.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||h(e,r,n[r],n[r]=void 0,y);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||h(e,r,n[r],n[r]=t[r],y)}(a,n.attributes,m),y=u,a}(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--b||(g=!1,i||C()),a}function k(e,t){var n=e._component;n?A(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||v(e),x(e))}function x(e){for(e=e.lastChild;e;){var t=e.previousSibling;k(e,!0),e=t}}var N={};function E(e,t,n){var r,o=N[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),j.call(r,t,n)):((r=new j(t,n)).constructor=e,r.render=O),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function O(e,t,n){return this.constructor(e,n)}function P(e,t,n,o,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?s(e):S(e,1,i)),e.__ref&&e.__ref(e))}function S(e,t,n,r){if(!e._disable){var o,i,u,c=e.props,l=e.state,s=e.context,f=e.prevProps||c,p=e.prevState||l,v=e.prevContext||s,h=e.base,m=e.nextBase,y=h||m,g=e._component,x=!1;if(h&&(e.props=f,e.state=p,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,l,s)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(c,l,s),e.props=c,e.state=l,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){o=e.render(c,l,s),e.getChildContext&&(s=a(a({},s),e.getChildContext()));var N,O,j=o&&o.nodeName;if("function"==typeof j){var T=d(o);(i=g)&&i.constructor===j&&T.key==i.__key?P(i,T,1,s,!1):(N=i,e._component=i=E(j,T,s),i.nextBase=i.nextBase||m,i._parentComponent=e,P(i,T,0,s,!1),S(i,1,n,!0)),O=i.base}else u=y,(N=g)&&(u=e._component=null),(y||1===t)&&(u&&(u._component=null),O=w(u,o,s,n||!h,y&&y.parentNode,!0));if(y&&O!==y&&i!==g){var U=y.parentNode;U&&O!==U&&(U.replaceChild(O,y),N||(y._component=null,k(y,!1)))}if(N&&A(N),e.base=O,O&&!r){for(var L=e,$=e;$=$._parentComponent;)(L=$).base=O;O._component=L,O._componentConstructor=L.constructor}}if(!h||n?_.unshift(e):x||e.componentDidUpdate&&e.componentDidUpdate(f,p,v),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);b||r||C()}}function A(e){var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?A(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,v(t),function(e){var t=e.constructor.name;(N[t]||(N[t]=[])).push(e)}(e),x(t)),e.__ref&&e.__ref(null)}function j(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}a(j.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=a({},n)),a(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),S(this,2)},render:function(){}});var T={},U=JSON.stringify;var L,$,B=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+","+e[n];return(T[t]||(T[t]=function(e){for(var t,n,r,o,i,a=0,u="return ",c="",l="",s=0,f="",p="",d="",v=0,h=function e(){r?9===a?(s++&&(u+=","),u+="h("+(l||U(c)),a=0):13===a||0===a&&"..."===c?(0===a?(d||(d=")",f=f?"Object.assign("+f:"Object.assign({}"),f+=p+","+l,p=""):o&&(f+=f?","+(p?"":"{"):"{",p="}",f+=U(o)+":",f+=l||(i||c)&&U(c)||"true",o=""),i=!1):0===a&&(a=13,o=c,c=l="",e(),a=0):(l||(c=c.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))&&(s++&&(u+=","),u+=l||U(c)),c=l=""},m=0;m<e.length;m++){m>0&&(r||h(),l="$["+m+"]",h());for(var _=0;_<e[m].length;_++){if(n=e[m].charCodeAt(_),r){if(39===n||34===n){if(v===n){v=0;continue}if(0===v){v=n;continue}}if(0===v)switch(n){case 62:h(),47!==a&&(u+=f?","+f+p+d:",null"),t&&(u+=")"),r=0,f="",a=1;continue;case 61:a=13,i=!0,o=c,c="";continue;case 47:t||(t=!0,9!==a||c.trim()||(c=l="",a=47));continue;case 9:case 10:case 13:case 32:h(),a=0;continue}}else if(60===n){h(),r=1,d=p=f="",t=i=!1,a=9;continue}c+=e[m].charAt(_)}}return h(),Function("h","$",u)}(e)))(this,arguments)}.bind(function(e,t){var r,a,u,c,l=arguments,s=i;for(c=arguments.length;c-- >2;)o.push(l[c]);for(t&&null!=t.children&&(o.length||o.push(t.children),delete t.children);o.length;)if((a=o.pop())&&void 0!==a.pop)for(c=a.length;c--;)o.push(a[c]);else"boolean"==typeof a&&(a=null),(u="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(u=!1)),u&&r?s[s.length-1]+=a:s===i?s=[a]:s.push(a),r=u;var f=new n;return f.nodeName=e,f.children=s,f.attributes=null==t?void 0:t,f.key=null==t?void 0:t.key,f}),M=null,R=[],W=function(e){return function(t){var n={i:0,stack:[]};t[e]=n,t.before.push(function(){n.i=0})}},D=0,H=function(){return"_$"+D++},V=function(e){var t=F(n);return z(R,t),n.reset=function(){for(var e in z(t.reset,t),t)/^_\$/.test(e)&&t[e].stack.splice(0)},n;function n(){var n=M;M=t;var r=t._,o=t.before,i=t.after,a=t.external;try{var u;do{r.$=r._=!1,z(o,t),u=e.apply(r.c=this,r.a=arguments),z(i,t),a.length&&z(a.splice(0),u)}while(r._);return u}finally{r.$=!0,M=n}}},z=function(e,t){for(var n=e.length,r=0;r<n;)e[r++](t)},F=function(e){var t={_:!0,$:!0,c:null,a:null};return{_:t,before:[],after:[],external:[],reset:[],update:function(){return t.$?e.apply(t.c,t.a):t._=!0}}},q=H();try{L=cancelAnimationFrame,$=requestAnimationFrame}catch(e){L=clearTimeout,$=setTimeout}var I=function(e,t){e.t=0,e.clean=t};R.push(function(e){var t=[],n={i:0,stack:t};e[q]=n;var r=function(){n.i=0;for(var e=t.length,r=0;r<e;r++){var o=t[r],i=o.check,a=o.clean,u=o.raf,c=o.t;i&&(u&&c?L(c):a&&a(),I(t[r],null))}};e.reset.push(r),e.before.push(r),e.after.push(function(){for(var e=t.length,n=0;n<e;n++){var r=t[n],o=r.fn,i=r.raf;r.update&&(r.update=!1,i?r.t=$(o):o())}})});var G=H();R.push(W(G));var J=H();R.push(W(J));var K=H();R.push(W(K));var Q=function(e,t){var n=function(e){var t=M,n=t[e],r=t.update,o=n.i,i=n.stack;return n.i++,{i:o,stack:i,update:r,unknown:o===i.length}}(K),r=n.i,o=n.stack,i=n.unknown,a=n.update;if(i){var u=[null,function(n){t=e(t,n),u[0]=t,a()}];o.push(u),u[0]=function e(t){return typeof t==typeof e?t():t}(t)}return o[r]},X=function(e){return Q(function(e,t){return t},e)},Y=H();function Z(e,t){e.innerHTML=t()}function ee(e){return"function"==typeof e}function te(e){return void 0===e}function ne(e,t){void 0===t&&(t=null),e=e||"s";var n=t?e+"-"+t:e;return function(e){return function(e){return e&&/.-./.test(e)}(e)&&!self.customElements.get(e)}(n)?n:ne(n,function(e){void 0===e&&(e="");var t=++oe;return""+e+t}())}R.push(W(Y));var re=ee(self.CustomEvent)&&self.CustomEvent||function(e,t){void 0===t&&(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t),n},oe=0;var ie,ae=(ie={enumerable:!1,configurable:!0,writeable:!1},function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach(function(n){for(var r in n){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,t(o,ie))}}),e}),ue="connected",ce="dis"+ue;var le,se="connectedCallback",fe="dis"+se,pe="attributeChangedCallback",de="adoptedCallback";function ve(){var e,t,n=(e=['\n    <a href="#" onclick="','">\n      Clicked '," times\n    </a>\n  "],t||(t=e.slice(0)),e.raw=t,e);return ve=function(){return n},n}!function(t,n,r,o){ee(t)&&(o=r,r=n,n=t,t=void 0),!ee(r)&&te(o)&&(o=r,r=void 0),t=(o=o||{}).name=ne(t||o.name);var i,a,u=function(e,t){function n(){var r=this;return this instanceof n?t.call(this,function(){return"undefined"!=typeof Reflect?Reflect.construct(e,[],r.constructor):e.call(r)}):new n}return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n}((i=o&&o.extends)?document.createElement(i).constructor:HTMLElement,function(t){var i=function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(n){e(t,n,r[n])})}return t}({},o,{component:n});return function(e,t){return function n(r,o){if(!te(o)){if(!ee(o))throw new Error("Expected the enhancer to be a function.");return o(n)(r)}var i,a=e(),u=V(function(){var e=t.call(a,a);return a.render(e)});return ae(a,{render:function(e){return a.renderer(a.renderRoot,e,i),i=e,e},renderer:Z,connectedCallback:function(){u(),a.dispatchEvent(new re(ue))},disconnectedCallback:function(){a.dispatchEvent(new re(ce))},attributeChangedCallback:function(e,t,n){a.shouldUpdate(t,n)&&u()},requestUpdate:u,shouldUpdate:function(e,t){return e!==t},get renderRoot(){return a.shadowRoot||a._shadowRoot||a}})}}(t,n)(i,r)});a=u.prototype,[se,fe,pe,de].forEach(function(e){a[e]=function(){this.hasOwnProperty(e)&&this[e].apply(this,arguments)}}),u.observedAttributes=o.observedAttributes||[],function(e,t){t.forEach(function(t){t in e||Object.defineProperty(e,function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}(t),{configurable:!0,get:function(){return this.getAttribute(t)},set:function(e){null==e?this.removeAttribute(t):this.setAttribute(t,e)}})})}(u.prototype,u.observedAttributes),function(e,t,n){e&&self.customElements.define(e,t,n)}(t,u,o)}("s-counter",function(){var e=X(0),t=e[0],n=e[1];return B(ve(),function(){return n(t+1)},t)},(le=function(e,t){!function(e,t,n){w(n,e,{},!1,t,!1)}(e,t,t.firstElementChild)},void 0===le&&(le=Z),function(e){return function(){var t=e.apply(void 0,arguments),n=[function(e,t){return le(t,e)},function(e,t,n){return le(n,t,e)},function(e,t){return le(e,function(){return t})}];return t.renderer=function e(r,o,i,a){var u;void 0===a&&(a=0),t.renderer=n[a];try{u=t.renderer(r,o,i)}catch(t){if((a+=1)<n.length)return e(r,o,i,a)}return u||""},t}}))});
