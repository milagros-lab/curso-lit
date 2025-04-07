import { LitElement, html, unsafeCSS } from "lit";
import styles from "./lista-component.scss?inline"; // Importa el archivo SCSS como cadena

export class ListaComponent extends LitElement {
  static styles = unsafeCSS(styles);

  static properties = {
    img: { type: String },
  };

  //método para comprobar si existe un slot con un identidicador
  comprobar(identificador) {
    const hijos = Array.from(this.children);
    let salida = false;

    hijos.forEach((e) => {
      if (e.slot === identificador) {
        salida = true;
      }
    });

    return salida;
  }

  render() {
    return html`<div class="lista-content">
      ${this.comprobar("lista")
        ? html`<div class="lista-list">
            <slot name="lista"></slot>
          </div>`
        : html`<p>No cuenta con ningun beneficio.</p>`}
    </div>`;
  }
  static get is() {
    return "lista-component";
  }
}
customElements.get(ListaComponent.is) ||
  customElements.define(ListaComponent.is, ListaComponent);
