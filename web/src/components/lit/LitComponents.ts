import { LitElement, html } from "lit"

const tagName = "lit-components"

export class LitComponents extends LitElement {
  override render() {
    return html`<p>Hello world!</p>`
  }
}

customElements.define(tagName, LitComponents)
