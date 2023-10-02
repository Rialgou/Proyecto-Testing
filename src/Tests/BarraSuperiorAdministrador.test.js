import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Importante para las aserciones extendidas
import BarraSuperiorAdministrador from "../Paginas/Administrador/Componentes/BarraSuperiorAdministrador";

// Mock del contexto necesario para que el componente funcione sin errores
jest.mock("../../../ComponentesGlobales/Contextos/HomeContext", () => ({
  HomeContext: jest.fn(),
}));

test("BarraSuperiorAdministrador se renderiza correctamente", () => {
  // Simulamos los datos del contexto necesarios para el componente
  const contextData = {
    administrador: { nombre: "Nombre del Administrador" },
  };

  // Renderizamos el componente con los datos simulados
  render(
    <BarraSuperiorAdministrador
      VistaPrincipal={true}
      HomeContext={contextData}
    />
  );

  // Realizamos aserciones
  const nombreSoftware = screen.getByText("BugFixer");
  expect(nombreSoftware).toBeInTheDocument();

  const comoFuncionaLink = screen.getByText("¿Cómo funciona?");
  expect(comoFuncionaLink).toBeInTheDocument();

  const usuarioIcon = screen.getByTestId("usuario-icon");
  expect(usuarioIcon).toBeInTheDocument();

  const nombreUsuario = screen.getByText("Nombre del Administrador");
  expect(nombreUsuario).toBeInTheDocument();
});
