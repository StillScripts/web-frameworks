import { LitElement, html } from "lit"
import { state } from "lit/decorators.js"

export class MyComponent extends LitElement {
  override createRenderRoot() {
    return this
  }

  @state() count = 0

  handleClick = function handleClick() {
    this.count = this.count + 1
  }

  override render() {
    return html`
      <button @click=${() => this.handleClick}>Count: ${this.count}</button>
    `
  }
}
