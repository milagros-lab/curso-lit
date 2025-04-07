import { html, LitElement, unsafeCSS } from "lit";
/* import styles from "./compenente-dos.scss?inline"; // Vite procesará el SCSS y lo inyectará como cadena */
import styles from "./card-info.scss?inline"; // Vite procesará el SCSS y lo inyectará como cadena

export class CardInfo extends LitElement {
  static styles = unsafeCSS(styles);

  static properties() {
    return {
      nohayparrafos: { type: Boolean },
    };
  }

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
    return html`${this.nohayparrafos
      ? ``
      : html` <div class="mensaje">
          <slot name="parrafos"></slot>
        </div>`}`;
  }

  static get is() {
    return "card-info";
  }
}

customElements.get(CardInfo.is) || customElements.define(CardInfo.is, CardInfo);
