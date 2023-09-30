import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Acordeon from "../Paginas/Usuario/Componentes/Acordeon";

describe("Funciones dentro del componente Acordeon en la pagina de usuario", () => {
  // HandleDescripcionBug
  describe("handleDescripcionBug", () => {
    test("el placeHolder debe existir", () => {
      render(<Acordeon />);
      const placeHolder = screen.getByPlaceholderText(
        "Ingrese una descripción detallada del bug y los pasos necesarios para replicarlo"
      );
      expect(placeHolder).toBeInTheDocument();
    });

    test("cambia el valor de descripcionBug", () => {
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
    test("se actualiza varias veces y queda con la ultima descripcion", () => {
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
  // HandleTitle
  describe("handleTitle", () => {
    test("el placeholder debe existir", ()=>{
      render(<Acordeon />);
      const expandTitle = screen.getByText("Título del Bug");
      fireEvent.click(expandTitle);

      const placeHolder = screen.getByPlaceholderText(
        "Ingrese una descripción detallada del bug y los pasos necesarios para replicarlo"
      );
      expect(placeHolder).toBeInTheDocument();
    })
    test("cambia el estado title con un nuevo valor", () => {
      const titleMock = jest.fn();
      render(<Acordeon tituloBug={titleMock} />);

      const expandTitle = screen.getByText("Título del Bug");
      fireEvent.click(expandTitle);

      const title = screen.getByTestId("title-test");

      // Simular un cambio en el valor del título
      fireEvent.change(title, {
        target: { value: "Nuevo título" },
      });

      // Verificar que el estado title se haya actualizado correctamente
      expect(titleMock).toHaveBeenCalledWith("Nuevo título");
    });
    test("el texto del titulo no debe tener más de 100 caracteres", () => {
      const titleMock = jest.fn();
      render(<Acordeon tituloBug={titleMock} />);

      const expandTitle = screen.getByText("Título del Bug");
      fireEvent.click(expandTitle);

      const title = screen.getByTestId("title-test");
      fireEvent.change(title, {
        target: {
          value:
            "La exploración del espacio exterior ha sido uno de los logros más significativos de la humanidad. Desde los primeros vuelos espaciales hasta la exploración de Marte y más allá, los avances en la tecnología espacial han ampliado nuestro entendimiento del universo y nuestras posibilidades como especie. Los astronautas y científicos espaciales trabajan incansablemente para descubrir los secretos del cosmos y abrir nuevas fronteras en la exploración espacial. A pesar de los desafíos y peligros que enfrentan, su dedicación y valentía inspiran a las generaciones futuras a soñar en grande y alcanzar las estrellas.",
        },
      });

      expect(title.value.length).toBe(100);
      expect(titleMock).toHaveBeenCalledWith(
        "La exploración del espacio exterior ha sido uno de los logros más significativos de la humanidad. De"
      );
    });
  });
});
