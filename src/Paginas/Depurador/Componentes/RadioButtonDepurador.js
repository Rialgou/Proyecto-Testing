import {
  ButtonGroup,
  Container,
  Row,
  Col,
  ToggleButton,
} from "react-bootstrap";

import { VscNewFile } from "react-icons/vsc";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineAssignment } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";

import "../Estilos/RadioButtonDepurador.css";

function RadioButtonDepurador({ radioValue, setRadioValue }) {
  const radios = [
    { name: "Bugs en proceso", value: "1", logo: <VscNewFile /> },
    { name: "Bugs nuevos", value: "2", logo: <GiConfirmed /> },
    { name: "Espera reasignación", value: "3", logo: <MdOutlineAssignment /> },
    { name: "Bugs completados", value: "4", logo: <AiOutlineCheckSquare /> },
    { name: "Estadísticas", value: "5", logo: <BsCardChecklist /> },
  ];

  return (
    <Container className="d-flex justify-content-center align-items-center contenedor-botones">
      <Row className="justify-content-center">
        <Col>
          <ButtonGroup vertical>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="outline-dark"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => {
                  setRadioValue(e.currentTarget.value);
                }}
                className="opciones my-3"
              >
                <div className="texto">
                  <span className="logo">{radio.logo}</span>
                  <span className="name">{radio.name}</span>
                </div>
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default RadioButtonDepurador;
