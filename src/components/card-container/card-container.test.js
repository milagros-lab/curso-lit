import { describe, it, expect } from "vitest";
import { fixture, html } from "@open-wc/testing";
import "./card-container.js"; // importar el componente

describe("card-container", () => {
  it("Se espera que muestre un texto", async () => {
    const element = await fixture(html`<card-container></card-container>`);

    // Verifica que el elemento <h2> tenga el texto esperado
    const h2 = element.shadowRoot.querySelector("h2");
    expect(h2).not.toBeNull();
    expect(h2.textContent).toBe("¡Añade tu Tarjeta!");
  });

  it("debería renderizarla una lista de tarjetas", async () => {
    const element = await fixture(html`<card-container></card-container>`);
    element.cards = [
      { title: "Tarjeta 1", subtitulo: "Subtítulo 1", img: "" },
      { title: "Tarjeta 2", subtitulo: "Subtítulo 2", img: "" },
    ];
    await element.updateComplete; //espera a q el componente se actualice antes de realizar la validación

    //Verifica que se renderiza el componente card-component
    const cardComponent = element.shadowRoot.querySelectorAll("card-component");
    expect(cardComponent.length).toBe(2); // Verifica que hay dos elementos de lista
    // Verifica las propiedades de cada tarjeta
    expect(cardComponent[0].title).toBe("Tarjeta 1");
    expect(cardComponent[0].subtitulo).toBe("Subtítulo 1");
    expect(cardComponent[1].title).toBe("Tarjeta 2");
    expect(cardComponent[1].subtitulo).toBe("Subtítulo 2");
  });
});
