import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BotonesProyectos from "../Paginas/Usuario/Componentes/BotonesProyectos";
describe("Funciones dentro del componente BotonesProyecto en la pagina de usuario", () => {
    // seleccionarBoton
    describe("seleccionarBoton",()=>{
        test('selecciona el Id de proyecto correcto', () => { 
            const seleccionarProyecto = jest.fn();
            render(<BotonesProyectos seleccionarProyecto={seleccionarProyecto}/>);

            const proyecto = screen.getByTestId("proyecto-0");

            fireEvent.click(proyecto);

            expect(seleccionarProyecto).toHaveBeenCalledWith("0p4VoCm6ycesmRQF4kq7");
         });
    });
});
