import React, { useState, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import "../Estilos/FiltradoUsuario.css";

function FiltroUsuario({ onFilterChange }) {
  const [selectedItem, setSelectedItem] = useState(0); // Estado para almacenar el elemento seleccionado
  const [toggleText, setToggleText] = useState("Ordenar por");
  const handleItemClick = (value) => {
      setSelectedItem(value);
      switch (value) {
      case -1:
        setToggleText("Rechazado");
        break;
      case 0:
        setToggleText("Todos");
        break;
      case 1:
        setToggleText("Pendiente");
        break;
      case 2:
        setToggleText("En Proceso");
        break;
      case 3:
        setToggleText("En Proceso");
        break;
      case 4:
        setToggleText("En Proceso")
        break;
      case 5:
        setToggleText("Completado");
        break;
      default:
        setToggleText("Ordenar por");
    }

    onFilterChange(value);
  };

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
        <Dropdown.Item onClick={() => handleItemClick(0)}>Todos</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(1)}>Pendiente</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(2)}>En proceso</Dropdown.Item>{/*2 3 4 */}
        <Dropdown.Item onClick={() => handleItemClick(5)}>Completado</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(-1)}>Rechazado</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FiltroUsuario;