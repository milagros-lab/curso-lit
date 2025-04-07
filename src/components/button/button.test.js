import { fixture, html } from "@open-wc/testing";
import { describe, it, expect } from "vitest";
import "./button.js";

describe("button-component", () => {
  it("se espera que renderice el componente button", async () => {
    const element = await fixture(html`<button-component></button-component>`);
    expect(element).not.toBeNull();
    expect(element.shadowRoot).not.toBeNull(); //Asegura que el componente se haya creado correctamente.
  });
});

describe("button-component text", () => {
  const buttonTextMock = [
    "Add to list",
    "Mas información",
    "Enlace a",
    "Contratar tarjeta",
    "Eliminar",
  ];
  //recorrer el array de textos y verificar que el slot contenga el texto esperado
  buttonTextMock.forEach((text) => {
    it(`se espera que el boton muestre un texto: "${text}"`, async () => {
      const element = await fixture(
        html`<button-component @click="${() => {}}">
          <span slot="button-slot">${text}</span></button-component
        >`
      );

      // Verifica que el slot "lista" exista
      const slot = element.shadowRoot.querySelector("slot[name='button-slot']");
      expect(slot).not.toBeNull();

      // Verifica que el texto proyectado dentro del boton sea el esperado
      const proyectContent = element.querySelector("span[slot='button-slot']");
      expect(proyectContent).not.toBeNull();
      expect(proyectContent.textContent.trim()).toBe(text);
    });
  });
});
