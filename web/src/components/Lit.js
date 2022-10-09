import { LitElement, html } from 'lit';

const tagName = 'my-element';

export class Lit extends LitElement {
  render() {
    return html`<li>Hello from Lit</li> `;
  }
}

customElements.define(tagName, Lit);