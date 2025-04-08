import { fixture, html } from "@open-wc/testing";
import { describe, it, expect } from "vitest";
import "./lista-component.js"; // importar el componente
import "../card-component/card-component.js"; // importar el componente

describe("lista-component", () => {
  it("se espera que renderice el componente lista-component", async () => {
    const element = await fixture(html`<lista-component></lista-component>`);
    expect(element).not.toBeNull();
    expect(element.shadowRoot).not.toBeNull(); //Asegura que el componente se haya creado correctamente.
  });

  it("se espera que muestre el mensaje alternativo si no hay contenido en el slot lista", async () => {
    const element = await fixture(html`<lista-component></lista-component>`);
    const fallbackMessage = element.shadowRoot.querySelector("p");
    expect(fallbackMessage).not.toBeNull();
    expect(fallbackMessage.textContent).toBe("No cuenta con ningun beneficio.");
  });

  it("se espera que renderice los elementos de la lista cuando hay contenido proyectado", async () => {
    const elementMock = await fixture(html`
      <lista-component>
        <ul slot="lista">
          <li>Elemento 1</li>
          <li>Elemento 2</li>
        </ul>
      </lista-component>
    `);

    // Verifica que el slot "lista" exista
    const slot = elementMock.shadowRoot.querySelector("slot[name='lista']");
    expect(slot).not.toBeNull();

    // Verifica que los elementos proyectados sean accesibles
    const projectedContent = elementMock.querySelector("ul[slot='lista']");
    expect(projectedContent).not.toBeNull();

    // Verifica que los elementos de la lista sean los esperados
    const listItems = projectedContent.querySelectorAll("li");
    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toBe("Elemento 1");
    expect(listItems[1].textContent).toBe("Elemento 2");
  });
});
