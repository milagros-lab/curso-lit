import { fixture, html } from "@open-wc/testing";
import { describe, it, expect } from "vitest";
import "./card-info.js"; // importar el componente
import "../card-component/card-component.js"; // importar el componente

describe("card-info", () => {
  it("se espera que renderice el componente card-info", async () => {
    const element = await fixture(html`<card-info></card-info>`);
    expect(element).not.toBeNull();
    expect(element.shadowRoot).not.toBeNull(); //Asegura que el componente se haya creado correctamente.
  });

  it("se espera que renderice el slot parrafos", async () => {
    const element = await fixture(html`<card-info></card-info>`);
    const slot = element.shadowRoot.querySelector("slot[name='parrafos']");
    expect(slot).not.toBeNull();
  });
});

describe("card-info", () => {
  it("Comprueba que se está mostrando el contenido esperado en el slot 'parrafos'", async () => {
    const container = await fixture(html`<card-component></card-component>`);

    // Busca el contenido que se pasa al slot 'parrafos'
    const article = container.shadowRoot.querySelector(
      "card-info > article[slot='parrafos']"
    );
    expect(article).not.toBeNull(); // Verifica que el párrafo exista

    const paragraph = article.querySelector("p");
    expect(paragraph).not.toBeNull(); // Verifica que el párrafo exista

    const normalizedText = paragraph.textContent.replace(/\s+/g, " ").trim();
    const expectedText =
      "Utiliza el comparador para elegir una tarjeta en función de sus características y ventajas. Cómo lo hacemos?";

    expect(normalizedText).toBe(expectedText); // Verifica el texto esperado
  });
});
