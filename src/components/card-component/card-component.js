import { html, LitElement, nothing, unsafeCSS } from "lit";
import styles from "./card-component.scss?inline"; // Importa el archivo SCSS como cadena
import "../card-info/card-info.js";
import "../lista-component/lista-component.js"; // Importa el componente de lista
import "../button/button.js"; // Importa el componente de botón
import "../modal-component/modal.js"; // Importa el componente de modal

export class CardComponent extends LitElement {
  static styles = unsafeCSS(styles);

  static properties = {
    title: { type: String },
    subtitulo: { type: String },
    img: { type: String },
    modalMessage: { type: String },
    isModalOpen: { type: Boolean },
    listItems: { type: Array }, // Lista de elementos
  };

  constructor() {
    super();
    this.modalMessage = "";
    this.isModalOpen = false;
    this.listItems = []; // Inicializa la lista de elementos
  }

  handleButtonClick(buttonLabel) {
    // Cierra brevemente la modal para forzar la actualización
    this.isModalOpen = false;

    // Usa un pequeño retraso para asegurarte de que el cambio sea detectado
    setTimeout(() => {
      this.modalMessage = `Boton pulsado "${buttonLabel}" en: "${this.title}"`;
      this.isModalOpen = true;
    }, 0);
  }

  handleLinkClick() {
    // Cierra brevemente la modal para forzar la actualización
    this.isModalOpen = false;

    // Usa un pequeño retraso para asegurarte de que el cambio sea detectado
    setTimeout(() => {
      this.modalMessage = `Más información sobre cómo lo hacemos`;
      this.isModalOpen = true;
    }, 0);
  }

  handleAddListItem() {
    // Obtén el formulario desde el DOM
    const input = this.renderRoot.querySelector("#new-list-item");
    const listItem = input.value.trim();

    if (listItem) {
      this.listItems = [...this.listItems, listItem];

      // Limpia el input
      input.value = "";
    }

    console.log("añadí un elemento", this.listItems);
  }

  render() {
    return html`<div class="card-content">
      <div class="card-header">
        ${this.img
          ? html`<div class="card-header-img">
              <img
                src="${this.img}"
                alt="Imagen de la tarjeta"
                class="card-image"
              />
            </div>`
          : nothing}
        <div class="title">${this.title}</div>
        <div class="subtitle">${this.subtitulo}</div>
      </div>
      <div class="card-body">
        <lista-component>
          <ul slot="lista">
            ${this.listItems && this.listItems.length > 0
              ? this.listItems.map((item) => html`<li>${item}</li>`)
              : html`<li>No hay elementos en la lista.</li>`}
          </ul>
        </lista-component>
        <div class="add-item-container">
          <input
            type="text"
            id="new-list-item"
            placeholder="Añadir nuevo elemento"
          />
          <button-component
            extraClass="button-lista"
            @click="${this.handleAddListItem}"
            ><span slot="button-slot">Add to list</span>
          </button-component>
        </div>
        <card-info>
          <article slot="parrafos">
            <p>
              Utiliza el comparador para elegir una tarjeta en función de sus
              características y ventajas.
              <a
                href="#"
                @click="${(event) => {
                  event.preventDefault(); // Evita la redirección predeterminada
                  this.handleLinkClick();
                }}"
                class="info-link"
              >
                Cómo lo hacemos?
              </a>
            </p>
          </article></card-info
        >
      </div>
      <div class="card-footer">
        <div class="button-container">
          <button-component
            extraClass="custom-bg"
            @click="${() => this.handleButtonClick("Contratar tarjeta")}"
            ><span slot="button-slot">Contratar tarjeta</span></button-component
          >
        </div>
        <div class="button-container">
          <button-component
            extraClass="white"
            @click="${() => this.handleButtonClick("Más información")}"
            ><span slot="button-slot">Mas información</span></button-component
          >
        </div>
        <div class="button-container">
          <button-component
            extraClass="link"
            @click="${() => this.handleButtonClick("Enlace a")}"
            ><span slot="button-slot">Enlace a</span></button-component
          >
        </div>
      </div>

      <slot></slot>
      <!-- Para el botón "Eliminar" -->

      <!-- Modal -->
      <modal-component
        .message="${this.modalMessage}"
        .isOpen="${this.isModalOpen}"
      ></modal-component>
    </div>`;
  }
  static get is() {
    return "card-component";
  }
}

customElements.get(CardComponent.is) ||
  customElements.define(CardComponent.is, CardComponent);
