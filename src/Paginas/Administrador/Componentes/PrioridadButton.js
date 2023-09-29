import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";

import "../Estilos/PrioridadButton.css";
import "../Estilos/AsignarReporte.css";

function PrioridadButton({ setPrioridadSeleccionada }) {
  const [hoveredOption, setHoveredOption] = useState(null);

  const handlePrioridadSeleccionada = (prioridad) => {
    setPrioridadSeleccionada(prioridad);
  };

  const handleOptionHover = (prioridad) => {
    setHoveredOption(prioridad);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" className="botones">
        Asignar Prioridad
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <Dropdown.Item
          className={hoveredOption === "Alta" ? "casa alta" : "casa"}
          id="Alta"
          onMouseEnter={() => handleOptionHover("Alta")}
          onMouseLeave={() => handleOptionHover(null)}
          onClick={() => handlePrioridadSeleccionada("Alta")}
        >
          Alta
        </Dropdown.Item>
        <Dropdown.Item
          className={hoveredOption === "Media" ? "casa media" : "casa"}
          onMouseEnter={() => handleOptionHover("Media")}
          onMouseLeave={() => handleOptionHover(null)}
          onClick={() => handlePrioridadSeleccionada("Media")}
        >
          Media
        </Dropdown.Item>
        <Dropdown.Item
          className={hoveredOption === "Baja" ? "casa baja" : "casa"}
          onMouseEnter={() => handleOptionHover("Baja")}
          onMouseLeave={() => handleOptionHover(null)}
          onClick={() => handlePrioridadSeleccionada("Baja")}
        >
          Baja
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default PrioridadButton;
