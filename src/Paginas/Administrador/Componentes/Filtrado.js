import React, { useState, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ContextoAsignacion from "../Contextos/ContextoAsignacion";

import "../Estilos/Filtrado.css";

function Filtrado() {
  const { toggleText, handleItemClick } = useContext(ContextoAsignacion);

  return (
    <Dropdown>
      <Dropdown.Toggle
        className="Filtro"
        variant="light"
        size="md"
        id="dropdown-basic"
      >
        {toggleText}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleItemClick(1)}>
          Fecha de emisión
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(2)}>
          Prioridad
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(3)}>
          Fecha estimada de término
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Filtrado;
