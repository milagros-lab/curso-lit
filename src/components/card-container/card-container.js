import { LitElement, html, unsafeCSS } from "lit";
import styles from "./card-container.scss?inline"; // Importa el archivo SCSS como cadena
import "../card-component/card-component"; // Importa el componente de tarjeta
import "../button/button"; // Importa el componente de botón

export class CardContainer extends LitElement {
  static styles = unsafeCSS(styles);

  static properties = {
    cards: { type: Array }, // Lista de tarjetas
    listItems: { type: Array }, // Lista de elementos
  };

  constructor() {
    super();
    this.cards = []; // Inicializa el array de tarjetas];
    this.listItems = []; // Inicializa el array de elementos
    this.loadDataCard();
    this.fixedImage =
      "https://www.bbva.es/content/dam/public-web/bbvaes/images/personas/productos/02_tarjetas/cards/2400x1600-card-tarjeta-aqua-mas.png.img.768.1736347421863.png"; // Imagen fija para todas las tarjetas
  }

  //metodo para conectar con la API y cargar los datos de las tarjetas
  async loadDataCard() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=4");
      const data = await response.json();

      // Mapea los datos obtenidos a un formato adecuado para las tarjetas
      this.cards = data.results.map((user) => ({
        id: crypto.randomUUID(), // Genera un identificador único
        title: `${user.name.first} ${user.name.last}`, // Nombre completo del usuario
        subtitulo: user.email, // Email del usuario
        listItems: [], // Inicializa listItems como un array vacío si no existe
        img: user.picture.large, // Imagen del usuario
      }));
    } catch (error) {
      console.error("Error al cargar los datos de las tarjetas:", error);
    }
  }

  // Método para manejar el envío del formulario
  handleSubmit(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtén el formulario desde el DOM
    const form = this.renderRoot.querySelector("form");

    //si el usuario add un elemento a la lista
    const listItem = form.listItem.value;
    if (listItem) {
      this.listItems = [...this.listItems, listItem];
    }
    console.log("añadí un elemento", this.listItems);

    const newCard = {
      id: crypto.randomUUID(), // Genera un identificador único porque la key no me la esta reconociendo
      title: form.title.value,
      subtitulo: form.subtitulo.value,
      listItems: form.listItem.value ? [form.listItem.value] : [], // Copia la lista de elementos
      img: form.img.value || this.fixedImage, // Usa la imagen proporcionada que la añades desde el form por url o la fija
    };

    // Agrega la nueva tarjeta al array de tarjetas
    this.cards = [...this.cards, newCard];

    // Limpia el formulario
    form.reset();
    this.listItems = []; // Reinicia la lista de elementos
  }

  // Método para eliminar una tarjeta
  handleDelete(id) {
    this.cards = this.cards.filter((card) => card.id !== id);
  }

  render() {
    return html`
      <div class="container">
        <h2 class="title">¡Añade tu Tarjeta!</h2>
        <!-- Formulario para agregar nuevas tarjetas -->
        <div class="form-container">
          <form @submit="${this.handleSubmit}">
            <input type="text" name="title" placeholder="Título" required />
            <input
              type="text"
              name="subtitulo"
              placeholder="Subtítulo"
              required
            />
            <input
              type="text"
              name="listItem"
              placeholder="Añade un elemento a tu lista"
              required
            />
            <input
              type="text"
              name="img"
              placeholder="Cargar imagen url (opcional)"
            />
            <div class="button-container-form">
              <button type="submit">
                <span slot="button-slot">Agregar Tarjeta</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Contenedor de tarjetas -->
        <div class="card-container">
          ${this.cards.map(
            (card, index) => html`
              <card-component
                .title="${card.title}"
                .subtitulo="${card.subtitulo}"
                .listItems="${card.listItems}"
                .img="${card.img || this.fixedImage}"
                data-index="${card.id}"
              >
                <!-- Botón de eliminar dentro del card-component -->
                <div class="button-delete">
                  <button
                    class="delete-button"
                    @click="${() => this.handleDelete(card.id)}"
                  >
                    <span slot="button-slot">Eliminar</span>
                  </button>
                </div>
              </card-component>
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define("card-container", CardContainer);
