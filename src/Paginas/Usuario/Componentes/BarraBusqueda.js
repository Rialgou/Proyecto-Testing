import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";

import "../Estilos/BarraBusqueda.css";

function BarraBusqueda() {
  return (
    <div className="input-wrapperbusqueda">
      <FaSearch id="search-icon" />
      <input className="input2" placeholder="Buscar..." />
    </div>
  );
}

export default BarraBusqueda;
