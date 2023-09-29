import Offcanvas from "react-bootstrap/Offcanvas";
import RadioButtonDepurador from "./RadioButtonDepurador";
import ContextoOpcionesDepurador from "../Contextos/ContextoOpcionesDepurador";

import { FcLock } from "react-icons/fc";
import { useContext } from "react";

import "../Estilos/BarraOpcionesDepurador.css";

function BarraOpcionesDepurador({ radioValue, setRadioValue }) {
  const { toggleOffcanvas, showCol } = useContext(ContextoOpcionesDepurador);

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
          <RadioButtonDepurador
            radioValue={radioValue}
            setRadioValue={setRadioValue}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BarraOpcionesDepurador;
