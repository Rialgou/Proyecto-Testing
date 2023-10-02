// Importa las bibliotecas necesarias
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import BarraOpciones from "../Componentes/BarraOpciones";
import { OpcionesProvider } from "../Contextos/ContextoOpciones";

// Configura un mock para el contexto
jest.mock("../Contextos/ContextoOpciones", () => {
  const originalModule = jest.requireActual("../Contextos/ContextoOpciones");
  return {
    ...originalModule,
    useOpciones: () => ({
      showCol: true, // Puedes ajustar el valor inicial aquí
      toggleOffcanvas: jest.fn(), // Mock de la función toggleOffcanvas
    }),
  };
});

describe("BarraOpciones Component", () => {
  test("El Offcanvas se muestra correctamente", () => {
    const { getByText } = render(
      <OpcionesProvider>
        <BarraOpciones />
      </OpcionesProvider>
    );

    // Asegúrate de que algún elemento dentro del Offcanvas esté presente
    expect(getByText("Título del Bug")).toBeInTheDocument();
  });

  // Agrega más pruebas según sea necesario para tu componente BarraOpciones
});
