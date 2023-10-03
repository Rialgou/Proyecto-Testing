import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Para las afirmaciones extendidas

import PrioridadButton from "../Componentes/PrioridadButton"; // Asegúrate de importar correctamente el componente

describe("PrioridadButton Component", () => {
  it("debería cambiar la prioridad seleccionada cuando se hace clic en una opción", () => {
    // Creamos una función simulada para pasar como prop
    const setPrioridadSeleccionada = jest.fn();

    // Renderizamos el componente con la función simulada
    const { getByText } = render(
      <PrioridadButton setPrioridadSeleccionada={setPrioridadSeleccionada} />
    );

    // Simulamos un clic en la opción "Alta"
    fireEvent.click(getByText("Alta"));

    // Comprobamos si la función simulada se llamó con "Alta"
    expect(setPrioridadSeleccionada).toHaveBeenCalledWith("Alta");
  });

  it("debería cambiar el estilo cuando el mouse se coloca sobre una opción", () => {
    const { getByText } = render(<PrioridadButton />);

    // Simulamos el evento onMouseEnter en la opción "Alta"
    fireEvent.mouseEnter(getByText("Alta"));

    // Comprobamos si la clase CSS "casa alta" se aplicó cuando se coloca el mouse sobre la opción "Alta"
    expect(getByText("Alta")).toHaveClass("casa alta");

    // Simulamos el evento onMouseLeave para volver al estado normal
    fireEvent.mouseLeave(getByText("Alta"));

    // Comprobamos si la clase CSS "casa alta" se eliminó cuando se retira el mouse de la opción "Alta"
    expect(getByText("Alta")).not.toHaveClass("casa alta");
  });
});
