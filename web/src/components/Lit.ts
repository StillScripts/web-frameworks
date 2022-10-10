import { LitElement, html } from 'lit';

const tagName = 'my-element';

export class Lit extends LitElement {
  override render() {
    return html`<div>Hello from Lit</div> `;
  }
}

customElements.define(tagName, Lit);