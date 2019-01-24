import renderer from './default-renderer.js';
import {
  completeAssign,
  CustomEvent,
  isFunction,
  isUndefined
} from './utils.js';

export const CONNECTED = 'connected';
export const DISCONNECTED = 'dis' + CONNECTED;

export function createFactory(supr, component) {
  function createElement(options, enhancer) {
    if (!isUndefined(enhancer)) {
      if (!isFunction(enhancer)) {
        throw new Error('Expected the enhancer to be a function.');
      }
      return enhancer(createElement)(options);
    }

    const el = supr();
    let oldHtml;

    function requestUpdate() {
      const html = component.call(el, el);
      return el.render(html);
    }

    function render(html) {
      el.renderer(el.renderRoot, html, oldHtml);
      oldHtml = html;
      return html;
    }

    function connectedCallback() {
      el.requestUpdate();
      el.dispatchEvent(new CustomEvent(CONNECTED));
    }

    function disconnectedCallback() {
      el.dispatchEvent(new CustomEvent(DISCONNECTED));
    }

    function attributeChangedCallback(name, oldValue, newValue) {
      if (el.shouldUpdate(oldValue, newValue)) {
        el.requestUpdate();
      }
    }

    function shouldUpdate(oldValue, newValue) {
      return oldValue !== newValue;
    }

    return completeAssign(el, {
      render,
      renderer,
      connectedCallback,
      disconnectedCallback,
      attributeChangedCallback,
      requestUpdate,
      shouldUpdate,
      get renderRoot() {
        return el.shadowRoot || el._shadowRoot || el;
      }
    });
  }

  return createElement;
}
