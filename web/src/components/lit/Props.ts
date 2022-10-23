import { LitElement, html } from "lit"

const tagName = "hello-world"

export class HelloWorld extends LitElement {
  override render() {
    return html`<p>Hello world!</p>`
  }
}

customElements.define(tagName, HelloWorld)
