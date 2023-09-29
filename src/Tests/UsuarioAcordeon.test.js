import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Acordeon from "../Paginas/Usuario/Componentes/Acordeon";

describe("Funciones dentro del componente Acordeon en la pagina de usuario", () => {
  describe("handleDescripcionBug", () => {
    test("handleDescripcionBug cambia el valor de descripcionBug", () => {
      const descripcionMockBug = jest.fn();
      render(<Acordeon descripcionBug={descripcionMockBug} />);
      const desbug = screen.getByPlaceholderText(
        "Ingrese una descripción detallada del bug y los pasos necesarios para replicarlo"
      );
      fireEvent.change(desbug, {
        target: { value: "Texto de prueba" },
      });
      expect(descripcionMockBug).toHaveBeenCalledWith("Texto de prueba");
    });
    test("handleDescripcionBug se actualiza varias veces y queda con la ultima descripcion", () => {
      const descripcionMockBug = jest.fn();
      render(<Acordeon descripcionBug={descripcionMockBug} />);
      const desbug = screen.getByPlaceholderText(
        "Ingrese una descripción detallada del bug y los pasos necesarios para replicarlo"
      );
      fireEvent.change(desbug, {
        target: { value: "Texto1" },
      });
      fireEvent.change(desbug, {
        target: { value: "Texto2" },
      });
      fireEvent.change(desbug, {
        target: { value: "Texto3" },
      });
      expect(descripcionMockBug).toHaveBeenCalledWith("Texto3");
    });
  });
});

/*test('handleDescripcionBug tiene un placeholder', () => {
    render(<Acordeon />);
    const placeHolder = screen.getByPlaceholderText(
        'Ingrese una descripción detallada del bug y los pasos necesarios para replicarlo'
    )
    expect(placeHolder).toBeInTheDocument();
});*/
