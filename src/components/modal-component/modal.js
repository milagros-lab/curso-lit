import { LitElement, html, unsafeCSS } from "lit";
import styles from "./modal.scss?inline"; // Importa el archivo SCSS como cadena

export class ModalComponent extends LitElement {
  static styles = unsafeCSS(styles);

  static properties = {
    message: { type: String },
    isOpen: { type: Boolean },
  };

  constructor() {
    super();
    this.message = "";
    this.isOpen = false;
  }

  closeModal() {
    this.isOpen = false;
  }

  render() {
    if (!this.isOpen) return html``;

    return html`
      <div class="modal">
        <div class="modal-content">
          <p>${this.message}</p>
          <button class="close-button" @click="${this.closeModal}">
            Cerrar
          </button>
        </div>
      </div>
    `;
  }

  static get is() {
    return "modal-component";
  }
}

customElements.get(ModalComponent.is) ||
  customElements.define(ModalComponent.is, ModalComponent);
