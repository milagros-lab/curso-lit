import { describe, it, expect, vi } from "vitest";
import { fixture, html } from "@open-wc/testing";
import "./card-component.js"; // importar el componente
import "../lista-component/lista-component.js"; // importar el componente
import "../card-info/card-info.js"; // importar el componente
import "../button/button.js";

describe("card-component", () => {
  it("se espera que renderice el componente card-component", async () => {
    const element = await fixture(html`<card-component></card-component>`);
    expect(element).not.toBeNull(); //se verifica que el componente no sea null
    expect(element.shadowRoot).not.toBeNull(); //Asegura que el componente se haya creado correctamente.
  });

  it("se espera que renderice el componente list-component", async () => {
    const comp = await fixture(html`<card-component></card-component>`);
    const result = comp.shadowRoot.querySelector("lista-component");
    expect(result).not.toBeNull(); //se verifica que el componente no sea null
    expect(result.shadowRoot).not.toBeNull(); //Asegura que el componente se haya creado correctamente.
  });

  it("se espera que renderice el componente card-info", async () => {
    const comp = await fixture(html`<card-component></card-component>`);
    const result = comp.shadowRoot.querySelector("card-info");
    expect(result).not.toBeNull(); //se verifica que el componente no sea null
    expect(result.shadowRoot).not.toBeNull(); //Asegura que el componente se haya creado correctamente.
  });

  it("se espera que renderice el componente button-component", async () => {
    const comp = await fixture(html`<card-component></card-component>`);
    const result = comp.shadowRoot.querySelector("button-component");
    expect(result).not.toBeNull(); //se verifica que el componente no sea null
    expect(result.shadowRoot).not.toBeNull(); //Asegura que el componente se haya creado correctamente.
  });
});

describe("funcionalidades de card-component", () => {
  it("se espera que el botón muestre un mensaje al hacer clic", async () => {
    const comp = await fixture(html`<card-component></card-component>`);
    const button = comp.shadowRoot.querySelector(
      "button-component[extraClass='custom-bg']"
    );
    expect(button).not.toBeNull();
    // Espía el método handleButtonClick
    const handleButtonClickSpy = vi.spyOn(comp, "handleButtonClick");

    // Simula un clic en el botón
    button.click();

    // Verifica que el método handleButtonClick haya sido llamado
    expect(handleButtonClickSpy).toHaveBeenCalledWith("Contratar tarjeta");
  });

  it("debería manejar el clic en el botón 'Contratar tarjeta' y mostrar un mensage cuando abre la modal", async () => {
    const comp = await fixture(html`<card-component></card-component>`);

    // Asigna un valor a la propiedad `title`
    comp.title = "Tarjeta de Crédito";

    const button = comp.shadowRoot.querySelector(
      "button-component[extraClass='custom-bg']"
    );
    expect(button).not.toBeNull(); // Verifica que el botón exista

    // Simula un clic en el botón
    button.click();

    // Espera un pequeño retraso para que el setTimeout en handleButtonClick se ejecute
    await new Promise((resolve) => setTimeout(resolve, 0));
    await comp.updateComplete;

    // Verifica los cambios en las propiedades
    expect(comp.isModalOpen).toBe(true); // Verifica que la modal esté abierta
    expect(comp.modalMessage).toBe(
      'Boton pulsado "Contratar tarjeta" en: "Tarjeta de Crédito"'
    ); // Verifica el mensaje
  });
});
