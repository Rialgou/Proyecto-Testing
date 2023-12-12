import React, { useState } from "react";
import BotonesProyectos from "./BotonesProyectos";
import Accordion from "react-bootstrap/Accordion";

import "../Estilos/Acordeon.css";

function Acordeon({ proyectoId, tituloBug, descripcionBug }) {
  const [desBug, setDescripcionBug] = useState("");
  const [title, setTitle] = useState("");
  const [showTextarea, setShowTextarea] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(true);

  const handleDescripcionBug = (event) => {
    setDescripcionBug(event.target.value);
    descripcionBug(event.target.value);
  };

  const handleTitle = (event) => {
    const value = event.target.value.slice(0, 100);
    setTitle(value);
    tituloBug(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") event.preventDefault();
  };

  const handleProyectSelect = (id) => {
    console.log(id);
    proyectoId(id);
  };

  const handleAccordionItemClick = (eventKey) => {
    if (eventKey === "1") {
      setShowTextarea(true);
      if (isFirstClick) {
        setIsFirstClick(false);
      }
    }
  };

  return (
    <Accordion defaultActiveKey={["-1"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Seleccionar proyecto</Accordion.Header>
        <Accordion.Body>
          <BotonesProyectos seleccionarProyecto={handleProyectSelect} />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item
        eventKey="1"
        className={`titulo-bug-click ${isFirstClick ? "first-click" : ""}`}
      >
        <Accordion.Header onClick={() => handleAccordionItemClick("1")}>
          Título del Bug
          {showTextarea && (
            <textarea
              data-testid="title-test"
              className="textarea-title"
              value={title}
              onChange={handleTitle}
              onKeyDown={handleKeyDown}
              placeholder="Ingrese un título para el Bug  (máx. 100)"
              maxLength={100}
            />
          )}
        </Accordion.Header>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Descripción del Bug</Accordion.Header>
        <Accordion.Body>
          <textarea
            data-testid="description-test"
            className="caja-texto textarea-basic"
            value={desBug}
            onChange={handleDescripcionBug}
            placeholder="Ingrese una descripción detallada del bug y los pasos necesarios para replicarlo"
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acordeon;
