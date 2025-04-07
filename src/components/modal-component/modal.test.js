import { fixture, html } from "@open-wc/testing";
import { describe, it, expect } from "vitest";
import "./modal.js"; // importar el componente

describe("modal-componente", () => {
  it("se espera que renderice el componente modal", async () => {
    const element = await fixture(html`<modal-component></modal-component>`);
    expect(element).not.toBeNull();
    expect(element.shadowRoot).not.toBeNull(); //Asegura que el componente se haya creado correctamente.
  });

  it("se espera que se muestre un mensaje", async () => {
    const messageMock = "Más información sobre cómo lo hacemos!";

    const element = await fixture(
      html`<modal-component
        .message="${messageMock}"
        .isOpen="${true}"
      ></modal-component>`
    );

    expect(element).not.toBeNull();
    expect(element.shadowRoot).not.toBeNull(); //Asegura que el componente se haya creado correctamente.

    //Busca el mensaje en el shadow DOM del componente
    const message = element.shadowRoot.querySelector("p");
    expect(message).not.toBeNull(); // Verifica que el mensaje exista
    expect(message.textContent).toBe(messageMock); // Verifica el mensaje esperado
  });
});
