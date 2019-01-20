let now = null;
const current = () => now;

const empty = [];
const setup = [];

const $ = value => typeof value === typeof $ ? value() : value;

const diff = (a, b) => (a.length !== b.length || a.some(diverse, b));

const stacked = id => runner => {
  const state = {i: 0, stack: []};
  runner[id] = state;
  runner.before.push(() => {
    state.i = 0;
  });
};

let id = 0;
const uid = () => '_$' + id++;

const unstacked = id => {
  const {[id]: state, update} = now;
  const {i, stack} = state;
  state.i++;
  return {i, stack, update, unknown: i === stack.length};
};

var augmentor = fn => {
  const current = runner($);
  each(setup, current);
  $.reset = () => {
    each(current.reset, current);
    for (const key in current) {
      if (/^_\$/.test(key))
        current[key].stack.splice(0);
    }
  };
  return $;
  function $() {
    const prev = now;
    now = current;
    const {_, before, after, external} = current;
    try {
      let result;
      do {
        _.$ = _._ = false;
        each(before, current);
        result = fn.apply(_.c = this, _.a = arguments);
        each(after, current);
        if (external.length)
          each(external.splice(0), result);
      } while (_._);
      return result;
    }
    finally {
      _.$ = true;
      now = prev;
    }
  }
};

const each = (arr, value) => {
  const {length} = arr;
  let i = 0;
  while (i < length)
    arr[i++](value);
};

const runner = $ => {
  const _ = {
    _: true,
    $: true,
    c: null,
    a: null
  };
  return {
    _: _,
    before: [],
    after: [],
    external: [],
    reset: [],
    update: () => _.$ ? $.apply(_.c, _.a) : (_._ = true)
  };
};

function diverse(value, i) {
  return value !== this[i];
}

const id$1 = uid();

let cancel, request;

try {
  cancel = cancelAnimationFrame;
  request = requestAnimationFrame;
} catch (o_O) {
  // i.e. if you run this in NodeJS
  cancel = clearTimeout;
  request = setTimeout;
}

const create = (always, check, inputs, raf, fn) => ({
  always,
  check,
  inputs,
  raf,
  fn,
  clean: null,
  t: 0,
  update: check
});

const effect = raf => (callback, refs) => {
  const {i, stack, unknown} = unstacked(id$1);
  const comp = refs || empty;
  if (unknown) {
    const always = comp === empty;
    const check = always || !raf || typeof comp !== typeof effect;
    if (always || !raf || typeof comp !== typeof effect) {
      stack.push(create(always, check, comp, raf, () => {
        set(stack[i], callback());
      }));
    } else {
      current().external.push(result => refs(callback, result));
      stack.push(create(always, always, empty, raf, effect));
    }
  } else {
    const info = stack[i];
    const {check, always, inputs} = info;
    if (check && (always || diff(inputs, comp))) {
      info.inputs = comp;
      info.update = true;
    }
  }
};

const set = (info, clean) => {
  info.t = 0;
  info.clean = clean;
};

setup.push(runner => {
  const stack = [];
  const state = {i: 0, stack};
  runner[id$1] = state;
  const reset = () => {
    state.i = 0;
    for (let {length} = stack, i = 0; i < length; i++) {
      const {check, clean, raf, t} = stack[i];
      if (check) {
        if (raf && t)
          cancel(t);
        else if (clean)
          clean();
        set(stack[i], null);
      }
    }
  };
  runner.reset.push(reset);
  runner.before.push(reset);
  runner.after.push(() => {
    for (let {length} = stack, i = 0; i < length; i++) {
      const {fn, raf, update} = stack[i];
      if (update) {
        stack[i].update = false;
        if (raf)
          stack[i].t = request(fn);
        else
          fn();
      }
    }
  });
});

const useEffect = effect(true);

const id$2 = uid();

setup.push(stacked(id$2));

var ref = value => {
  const {i, stack, unknown} = unstacked(id$2);
  if (unknown)
    stack.push({current: $(value)});
  return stack[i];
};

const id$3 = uid();

setup.push(stacked(id$3));

var useMemo = (callback, refs) => {
  const {i, stack, unknown} = unstacked(id$3);
  const comp = refs || empty;
  if (unknown)
    stack.push(create$1(callback, comp));
  const {filter, value, fn, inputs} = stack[i];
  return (filter ? diff(inputs, comp) : (callback !== fn)) ?
          (stack[i] = create$1(callback, comp)) :
          value;
};

const create$1 = (fn, inputs) => ({
  filter: inputs !== empty,
  value: fn(),
  fn,
  inputs
});

var callback = (fn, inputs) => useMemo(() => fn, inputs);

const id$4 = uid();

setup.push(stacked(id$4));

var useReducer = (reducer, value) => {
  const {i, stack, unknown, update} = unstacked(id$4);
  if (unknown)
    stack.push([
      $(value),
      action => {
        value = reducer(value, action);
        pair[0] = value;
        update();
      }
    ]);
  const pair = stack[i];
  return pair;
};

var state = value => useReducer(
  (_, value) => value,
  value
);

const id$5 = uid();

setup.push(stacked(id$5));

function isFunction(value) {
  return typeof value === 'function';
}

function getNativeConstructor(ext) {
  return ext ? document.createElement(ext).constructor : HTMLElement;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @param {...Function} fns - The functions to compose.
 * @return {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose(...fns) {
  return x => fns.filter(Boolean).reduceRight((y, f) => f(y), x);
}

function camelCase(name) {
  return name.replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase());
}

function kebabCase(name) {
  return name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

function hasDash(name) {
  return name && name.indexOf('-') !== -1;
}

/**
 * Create a complete assign function with custom descriptors.
 * @param  {Object} options - The custom descriptor options.
 * @return {Function}
 */
function createCompleteAssign(options) {
  return (target, ...sources) => {
    sources.forEach(source => {
      for (const prop in source) {
        const descriptor = Object.getOwnPropertyDescriptor(source, prop);
        Object.defineProperty(target, prop, Object.assign(descriptor, options));
      }
    });
    return target;
  };
}

/**
 * Complete assign is used to copy the values of all enumerable own properties from one or more source objects to a target object, including getters and setters. It will return the target object. Properties are still allowed to be overridden.
 *
 * @param  {Object} target
 * @param  {...Object} sources
 * @return {Object} The target with assigned properties
 */
const completeAssign = createCompleteAssign({
  enumerable: false,
  configurable: true,
  writeable: false
});

function CustomEvent(name, params = {}) {
  if ('CustomEvent' in self && isFunction(self.CustomEvent)) {
    return new self.CustomEvent(name, params);
  }

  var newEvent = document.createEvent('CustomEvent');
  newEvent.initCustomEvent(name, params.bubbles, params.cancelable, params);
  return newEvent;
}

function extend(Base, init) {
  function Class(...args) {
    if (!(this instanceof Class)) {
      return new Class(...args);
    }
    this._super = (...args) => {
      return typeof Reflect !== 'undefined'
        ? Reflect.construct(Base, args, this.constructor)
        : Base.apply(this, args);
    };
    return init.apply(this, args);
  }

  Class.prototype = Object.create(Base.prototype);
  Class.prototype.constructor = Class;
  return Class;
}

function define(name, Element, options) {
  if (name) {
    self.customElements.define(name, Element, options);
  }
}

function findFreeTagName(name, suffix = null) {
  name = name || 's';
  const tag = kebabCase(suffix ? `${name}-${suffix}` : name);
  return isFreeTagName(tag) ? tag : findFreeTagName(tag, uniqueId());
}

function isFreeTagName(name) {
  return hasDash(name) && !self.customElements.get(name);
}

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @param {string} prefix The value to prefix the ID with.
 * @return {string} Returns the unique ID.
 * @example
 *
 *    uniqueId('contact_');
 *    // => 'contact_104'
 *
 *    uniqueId();
 *    // => '105'
 */
let idCounter = 0;
function uniqueId(prefix = '') {
  var id = ++idCounter;
  return `${prefix}${id}`;
}

const CONNECTED = 'connected';
const DISCONNECTED = 'disconnected';

function createElement(options, enhancer) {
  if (typeof enhancer !== 'undefined') {
    if (!isFunction(enhancer)) {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createElement)(options);
  }

  const { el, component } = options;

  const update = augmentor(() => {
    const fragment = component.call(el, el);
    return el.render.call(el, fragment);
  });

  function render(fragment) {
    el.renderer(el.renderRoot, () => fragment);
    return fragment;
  }

  function renderer(root, html) {
    root.innerHTML = html();
  }

  function connectedCallback() {
    update.call(el);
    el.dispatchEvent(new CustomEvent(CONNECTED));
  }

  function disconnectedCallback() {
    el.dispatchEvent(new CustomEvent(DISCONNECTED));
  }

  function attributeChangedCallback(name, oldValue, newValue) {
    if (el.shouldUpdate(oldValue, newValue)) {
      update.call(el);
    }
  }

  function shouldUpdate(oldValue, newValue) {
    return oldValue !== newValue;
  }

  return {
    render,
    renderer,
    connectedCallback,
    disconnectedCallback,
    attributeChangedCallback,
    shouldUpdate,
    get renderRoot() {
      return el.shadowRoot || el._shadowRoot || el;
    }
  };
}

/**
 * Defines a custom element in the `CustomElementRegistry` which renders the component which is passed as an argument.
 *
 * @param  {string} name The tag name for the custom element.
 * @param  {Function} component The component that is rendered in the element.
 * @param  {Function} [enhancer] The element enhancer. You may optionally specify it to enhance the element with third-party capabilities such as middleware, custom renderer, public API, etc. The only element enhancers that ship with Swiss Element are `applyMiddleware` and `renderer`.
 * @param  {Object} [options] An options object with 2 optional properties `observedAttributes` and `extends` (e.g. `extends: 'button'`).
 The options object is also passed to all the enhancers.
 *
 * @return {HTMLElement}
 */
function element(name, component, enhancer, options) {
  if (isFunction(name)) {
    options = enhancer;
    enhancer = component;
    component = name;
    name = undefined;
  }

  if (!isFunction(enhancer) && typeof options === 'undefined') {
    options = enhancer;
    enhancer = undefined;
  }

  options = options || {};
  name = options.name = findFreeTagName(name || options.name);

  const Native = getNativeConstructor(options && options.extends);
  const SwissElement = extend(Native, function() {
    const el = this._super();
    const opts = { ...options, component, el };
    const api = createElement(opts, enhancer);
    return completeAssign(el, api);
  });

  // Callbacks have to be on the prototype before construction.
  forwardCallbacks(SwissElement.prototype, [
    'connectedCallback',
    'disconnectedCallback',
    'attributeChangedCallback',
    'adoptedCallback'
  ]);

  SwissElement.observedAttributes = options.observedAttributes || [];
  addPropsToAttrs(SwissElement.prototype, SwissElement.observedAttributes);

  define(name, SwissElement, options);
  return SwissElement;
}

function forwardCallbacks(proto, callbacks) {
  callbacks.forEach(cb => {
    proto[cb] = function(...args) {
      if (cb in this) {
        this[cb](...args);
      }
    };
  });
}

function addPropsToAttrs(proto, attributes) {
  attributes.forEach(name => {
    // it is possible to redefine the behavior at any time
    // simply overwriting get prop() and set prop(value)
    if (!(name in proto)) {
      Object.defineProperty(proto, camelCase(name), {
        configurable: true,
        get() {
          return this.getAttribute(name);
        },
        set(value) {
          if (value == null) this.removeAttribute(name);
          else this.setAttribute(name, value);
        }
      });
    }
  });
}

function useEffect$1(fn, inputs = []) {
  const args = [fn];
  if (inputs)
    // if the inputs is an empty array
    // observe the returned element for connect/disconnect events
    // and invoke effects/cleanup on these events only
    args.push(inputs.length ? inputs : lifecycleHandler);
  return useEffect.apply(null, args);
}

function lifecycleHandler($, element) {
  const handler = { handleEvent, onconnected, ondisconnected, $, _: null };
  element.addEventListener(CONNECTED, handler, false);
  element.addEventListener(DISCONNECTED, handler, false);
}

function handleEvent(e) {
  this['on' + e.type]();
}

function onconnected() {
  ondisconnected.call(this);
  this._ = this.$();
}

function ondisconnected() {
  const { _ } = this;
  this._ = null;
  if (_) _();
}

function defaultRenderer(root, html) {
  root.innerHTML = html();
}

/**
 * Adds a simple way to define your own renderer.
 *
 * @param  {Function} customRenderer A function that takes the custom element root and a function `html` which once executed renders the created dom nodes to the root node of the custom element.
 *
 * @return {Function}
 */
function renderer(customRenderer = defaultRenderer) {
  return createElement => (...args) => {
    const element = createElement(...args);
    element.renderer = customRenderer;
    return element;
  };
}

/**
 * Middleware is the suggested way to extend Swiss Element with custom functionality. Middleware lets you wrap the element's render method for fun and profit. The key feature of middleware is that it is composable. Multiple middleware can be combined together, where each middleware requires no knowledge of what comes before or after it in the chain.
 *
 * @param  {...Function} middleware Functions that conform to the Swiss Element _middleware_ API. Each middleware receives `SwissElement`'s `render` function as a named argument, and returns a function. That function will be given the `next` middleware's render method, and is expected to return a function of `fragment` calling `next(fragment)` with a potentially different argument, or at a different time, or maybe not calling it at all. The last middleware in the chain will receive the real element's `render` method as the `next` parameter, thus ending the chain. So, the middleware signature is `({ render }) => next => fragment`.
 *
 * @return {Function}
 */
function applyMiddleware(...middleware) {
  return createElement => (...args) => {
    const element = createElement(...args);

    let render = () => {
      throw new Error(
        `Rendering while constructing your middleware is not allowed. ` +
          `Other middleware would not be applied to this render.`
      );
    };

    const middlewareAPI = {
      render: (...args) => render(...args)
    };

    const chain = middleware.map(mw => mw(middlewareAPI));
    render = compose(...chain)(element.render.bind(element));

    element.render = render;
    return element;
  };
}

export { callback as useCallback, useMemo, useReducer, ref as useRef, state as useState, useEffect$1 as useEffect, renderer, applyMiddleware, element, isFunction, getNativeConstructor, compose, camelCase, kebabCase, hasDash, createCompleteAssign, completeAssign, CustomEvent, extend, define, findFreeTagName, isFreeTagName };
