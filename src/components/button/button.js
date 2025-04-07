import { LitElement, html, unsafeCSS } from "lit";
import styles from "./button.scss?inline"; // Importa el archivo SCSS como cadena

export class CustomButton extends LitElement {
  static styles = unsafeCSS(styles);

  static properties = {
    extraClass: { type: String },
    disabled: { type: Boolean },
    type: { type: String, reflect: true, attribute: true }, // Tipo de botón (submit, button, reset, menu)
  };

  constructor() {
    super();
    this.extraClass = "";
    this.disabled = false;
    this.type = "button";
  }

  render() {
    return html`
      <div class="button-form">
        <button
          class="button default ${this.extraClass}"
          ?disabled="${this.disabled}"
          type="${this.type}"
          @click="${this._handleClick}"
        >
          <slot name="button-slot"></slot>
          <!-- Contenido dinámico definido donde se usa el componente -->
        </button>
      </div>
    `;
  }

  _handleClick() {
    if (!this.disabled) {
      this.dispatchEvent(
        new CustomEvent("button-click", { bubbles: true, composed: true })
      );
    }
  }

  static get is() {
    return "button-component";
  }
}

customElements.get(CustomButton.is) ||
  customElements.define(CustomButton.is, CustomButton);
