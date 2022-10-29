import { LitElement, html } from "lit"

export class HelloWorld extends LitElement {
  override render() {
    return html`<p>Hello world!</p>`
  }
}

customElements.define("hello-world", HelloWorld)
