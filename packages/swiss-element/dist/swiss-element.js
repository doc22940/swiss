!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).swissElement={})}(this,function(n){"use strict";function t(){return(t=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var e=Array.isArray;function r(n){return"function"==typeof n}function u(n){return void 0===n}function o(n,t){void 0===t&&(t=null),n=n||"s";var e=t?n+"-"+t:n;return function(n){return/.-./.test(n)&&!self.customElements.get(n)}(e)?e:o(e,function(n){void 0===n&&(n="");var t=++a;return""+n+t}())}function i(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return function(n){return t.filter(Boolean).reduceRight(function(n,t){return t(n)},n)}}var c=r(self.CustomEvent)&&self.CustomEvent||function(n,t){void 0===t&&(t={});var e=document.createEvent("CustomEvent");return e.initCustomEvent(n,t.bubbles,t.cancelable,t),e};var a=0;var f,l=(f={configurable:!0},function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),u=1;u<e;u++)r[u-1]=arguments[u];return r.forEach(function(e){for(var r in e){var u=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t(u,f))}}),n});var s="connected",p="dis"+s;var d=null,v=[],h=[],y=function n(t,e){return typeof t==typeof n?t.apply(null,e):t},b=function(n,t){return n.length!==t.length||n.some(O,t)},m=function(n){return function(t){var e={i:0,stack:[]};t[n]=e,t.before.push(function(){e.i=0})}},w=0,g=function(){return"_$"+w++},k=function(n){var t=d,e=t[n],r=t.update,u=e.i,o=e.stack;return e.i++,{i:u,stack:o,update:r,unknown:u===o.length}},E=function(n){var t=_(e);return C(h,t),e.reset=function(){for(var n in C(t.reset,t),t)/^_\$/.test(n)&&t[n].stack.splice(0)},e;function e(){var e=d;d=t;var r=t._,u=t.before,o=t.after,i=t.external;try{var c;do{r.$=r._=!1,C(u,t),c=n.apply(r.c=this,r.a=arguments),C(o,t),i.length&&C(i.splice(0),c)}while(r._);return c}finally{r.$=!0,d=e}}},C=function(n,t){for(var e=n.length,r=0;r<e;)n[r++](t)},_=function(n){var t={_:!0,$:!0,c:null,a:null};return{_:t,before:[],after:[],external:[],reset:[],update:function(){return t.$?n.apply(t.c,t.a):t._=!0}}};function O(n,t){return n!==this[t]}var A,x,R=g();try{A=cancelAnimationFrame,x=requestAnimationFrame}catch(n){A=clearTimeout,x=setTimeout}var j=function(n,t,e,r,u,o,i){var c={always:n,cb:u,check:t,clean:null,inputs:e,raf:r,t:0,update:t,fn:function(){P(o[i],c.cb())}};return c},$=function n(t){return function(e,r){var u=k(R),o=u.i,i=u.stack,c=u.unknown,a=r||v;if(c){var f=a===v,l=f||!t||"function"!=typeof a;f||!t||"function"!=typeof a?i.push(j(f,l,a,t,e,i,o)):(d.external.push(function(n){return r(e,n)}),i.push(j(f,f,v,t,n,i,o)))}else{var s=i[o],p=s.check,h=s.always,y=s.inputs;p&&(h||b(y,a))&&(s.cb=e,s.inputs=a,s.update=!0)}}},P=function(n,t){n.t=0,n.clean=t};h.push(function(n){var t=[],e={i:0,stack:t},r=function(n,t,e,r){e&&r?A(r):t&&t(),P(n,null)};n[R]=e,n.before.push(function(){e.i=0}),n.reset.push(function(){e.i=0;for(var n=t.length,u=0;u<n;u++){var o=t[u],i=o.check,c=o.clean,a=o.raf,f=o.t;i&&r(o,c,a,f)}}),n.after.push(function(){for(var n=t.length,e=0;e<n;e++){var u=t[e],o=u.check,i=u.clean,c=u.fn,a=u.raf,f=u.t,l=u.update;o&&l&&(u.update=!1,r(u,i,a,f),a?u.t=x(c):c())}})});var M=$(!0),L=$(!1),T=g();h.push(m(T));var U=g();h.push(m(U));var F=function(n,t){var e=k(U),r=e.i,u=e.stack,o=e.unknown,i=t||v;o&&H(u,-1,n,i);var c=u[r],a=c.filter,f=c.value,l=c.fn,s=c.inputs;return(a?b(s,i):n!==l)?H(u,r,n,i):f},H=function(n,t,e,r){var u={filter:r!==v,value:null,fn:e,inputs:r};return t<0?n.push(u):n[t]=u,u.value=e(),u.value},S=g();h.push(m(S));var q=function(n,t){var e=k(S),r=e.i,u=e.stack,o=e.unknown,i=e.update;if(o){var c=[null,function(e){t=n(t,e),c[0]=t,i()}];u.push(c),c[0]=y(t,v)}return u[r]},z=new WeakMap,B=g();h.push(m(B));function D(n){if(this.value!==n){this.value=n;for(var t=z.get(this),e=t.length,r=0;r<e;r++)t[r]()}}var W={current:null};var G="connectedCallback",I="dis"+G,J="attributeChangedCallback",K="adoptedCallback",N="observedAttributes",Q=[function(n){return function(t){var e=n(t),r=e.update;return e.update=E(function(){return W.current=e,r()}),e}},function(n){return function(t){var e,r=n(t);return e=Object.getPrototypeOf(r),t.observedAttributes.forEach(function(n){n in e||Object.defineProperty(e,function(n){return n.replace(/-([a-z])/g,function(n,t){return t.toUpperCase()})}(n),{configurable:!0,get:function(){return this.getAttribute(n)},set:function(t){null==t?this.removeAttribute(n):this.setAttribute(n,t)}})}),r}},function(n){return function(t){var e,r=n(t);return t.shadow&&r.attachShadow({mode:t.shadow}),l(r,{render:function(n){return r.renderer(r.renderRoot,n,e),e=n,n},renderer:function(n,t){n.innerHTML=t},connectedCallback:function(){r.update(),r.dispatchEvent(new c(s))},disconnectedCallback:function(){r.dispatchEvent(new c(p))},attributeChangedCallback:function(n,t,e){r.shouldUpdate(n,t,e)&&r.update()},update:function(){var n=t.component.call(r,r);return r.render(n)},shouldUpdate:function(n,t,e){return t!==e},get renderRoot(){return r.shadowRoot||r._shadowRoot||r}})}}];function V(){return W.current}var X="connected",Y="dis"+X,Z=function(n){return function(t,e){void 0===e&&(e=[]);var r=[t];if(e){var u=V();r.push(e.length?e:function(n){return function(t){var e={handleEvent:nn,onconnected:tn,ondisconnected:en,$:t,_:null};n.addEventListener(X,e),n.addEventListener(Y,e)}}(u))}return n.apply(null,r)}};function nn(n){this["on"+n.type]()}function tn(){en.call(this),this._=this.$()}function en(){var n=this._;this._=null,n&&n()}var rn=Z(M),un=Z(L);n.renderer=function(n){return function(t){return function(){var e=t.apply(void 0,arguments),r=[function(t,e,r){return n(t,e,r)},function(t,e,r){return n(e,t,r)},function(t,e,r){return n(r,e,t)},function(t,e,r){return n(t,function(){return e},r)}];return e.renderer=function n(t,u,o,i){var c;void 0===i&&(i=0),e.renderer=r[i];try{c=e.renderer(t,u,o)}catch(e){if((i+=1)<r.length)return n(t,u,o,i)}return c||""},e}}},n.applyMiddleware=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return function(n){return function(){var e=n.apply(void 0,arguments),r=function(){throw new Error("Rendering while constructing your middleware is not allowed. Other middleware would not be applied to this render.")},u={render:function(){return r.apply(void 0,arguments)}},o=t.map(function(n){return n(u)});return r=i.apply(void 0,o)(e.render.bind(e)),e.render=r,e}}},n.compose=i,n.defaultEnhancers=Q,n.element=function(n,t,c,a){var f;if(r(n)&&(a=c,c=t,t=n,n=void 0),!r(c)&&u(a)&&(a=c,c=void 0),e(a)&&((f={})[N]=a,a=f),n=(a=a||{}).name=o(n||a.name),!u(c)&&!r(c))throw new Error("Expected the enhancer to be a function.");c=i.apply(void 0,[c].concat(Q));var s,p,d=function(n,t){function e(){var r=this;return this instanceof e?t.call(this,function(){return"undefined"!=typeof Reflect?Reflect.construct(n,[],r.constructor):n.call(r)}):new e}return e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e}((s=a&&a.extends)?document.createElement(s).constructor:HTMLElement,function(n){var e=l({},a,{component:t});return function(n){return function t(e,r){return u(r)?n():r(t)(e)}}(n)(e,c)});p=d.prototype,[G,I,J,K].forEach(function(n){p[n]=function(){this.hasOwnProperty(n)&&this[n].apply(this,arguments)}});var v=a[N]=a[N]||[];return d[N]=v,function(n,t,e){n&&self.customElements.define(n,t,e)}(n,d,a),d},n.useCallback=function(n,t){return F(function(){return n},t)},n.useMemo=F,n.useReducer=q,n.useRef=function(n){var t=k(T),e=t.i,r=t.stack;if(t.unknown){var u={current:null};r.push(u),u.current=y(n,v)}return r[e]},n.useState=function(n){return q(function(n,t){return y(t,[n])},n)},n.createContext=function(n){var t={value:n,provide:D};return z.set(t,[]),t},n.useContext=function(n){var t=k(B),e=t.i,r=t.stack,u=t.unknown,o=t.update;return u&&(z.get(n).push(o),r.push(n)),r[e].value},n.useEffect=rn,n.useLayoutEffect=un,n.useElement=V,Object.defineProperty(n,"__esModule",{value:!0})});
