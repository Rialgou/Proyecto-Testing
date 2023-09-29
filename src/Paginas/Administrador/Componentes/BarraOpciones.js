import Offcanvas from "react-bootstrap/Offcanvas";
import RadioButton from "./RadioButton";
import ContextoOpciones from "../Contextos/ContextoOpciones";

import { FcLock } from "react-icons/fc";
import { useContext } from "react";

import "../Estilos/BarraOpciones.css";

function BarraOpciones({ radioValue, setRadioValue }) {
  const { toggleOffcanvas, showCol } = useContext(ContextoOpciones);

  return (
    <>
      <Offcanvas
        show={showCol}
        onHide={toggleOffcanvas}
        backdrop={false}
        autoFocus={false}
        className="offcanvas-custom"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <FcLock />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <RadioButton radioValue={radioValue} setRadioValue={setRadioValue} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BarraOpciones;
