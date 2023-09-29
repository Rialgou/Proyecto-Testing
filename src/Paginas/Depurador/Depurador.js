import { Container, Row, Col, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState, useContext } from "react";

import BarraOpcionesDepurador from "./Componentes/BarraOpcionesDepurador";
import BarraSuperiorDepurador from "./Componentes/BarraSuperiorDepurador";
import AcordeonBugsProceso from "./Componentes/AcordeonBugsProceso";
import AcordeonBugsNuevos from "./Componentes/AcordeonBugsNuevos";
import EsperaReasignacion from "./Componentes/EsperaReasignacion";
import AcordeonBugsCompletados from "./Componentes/AcordeonBugsCompletados";
import ContextoOpcionesDepurador from "./Contextos/ContextoOpcionesDepurador";

import "./Estilos/Depurador.css";

function Depurador() {
  const { showCol } = useContext(ContextoOpcionesDepurador);

  const [radioValue, setRadioValue] = useState("1");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BarraSuperiorDepurador VistaPrincipal={true}></BarraSuperiorDepurador>

      <Container
        fluid
        className=" justify-content-center align-items-center mt-5"
      >
        <Row className="d-flex flex-row justify-content-center align-items-center">
          <Col
            md={2}
            className="d-flex justify-content-center align-items-end  mx-3 "
          >
            <BarraOpcionesDepurador
              radioValue={radioValue}
              setRadioValue={setRadioValue}
            ></BarraOpcionesDepurador>
          </Col>
          {radioValue === "1" && (
            <Col md={showCol ? 9 : 12} className="d-flex ms-3">
              <Container className="bugs-proceso-container">
                <h2 className="titulo-bugs-proceso">
                  <strong>Bugs en</strong> <Badge bg="primary">Proceso</Badge>
                </h2>
                <AcordeonBugsProceso />
              </Container>
            </Col>
          )}
          {radioValue === "2" && (
            <Col md={showCol ? 9 : 12} className="d-flex ms-3">
              <Container className="bugs-nuevos-container">
                <h2 className="titulo-bugs-nuevos">
                  <strong>Bugs </strong> <Badge bg="primary">Nuevos</Badge>
                </h2>
                <AcordeonBugsNuevos />
              </Container>
            </Col>
          )}
          {radioValue === "3" && (
            <Col md={showCol ? 9 : 12} className="d-flex ms-3">
              <Container className="bugs-nuevos-container">
                <h2 className="titulo-bugs-nuevos">
                  <strong>Espera </strong>{" "}
                  <Badge bg="primary">Reasignación</Badge>
                </h2>
                <EsperaReasignacion />
              </Container>
            </Col>
          )}
          {radioValue === "4" && (
            <Col md={showCol ? 9 : 12} className="d-flex ms-3">
              <Container className="bugs-nuevos-container">
                <h2 className="titulo-bugs-nuevos">
                  <strong>Bugs </strong> <Badge bg="primary">Completados</Badge>
                </h2>
                <AcordeonBugsCompletados />
              </Container>
            </Col>
          )}
          {radioValue === "5" && (
            <Col md={showCol ? 9 : 12} className="d-flex ms-3">
              <Container className="bugs-nuevos-container">
                <h2 className="titulo-bugs-nuevos">
                  <strong>Espera </strong>{" "}
                  <Badge bg="primary">Reasignación</Badge>
                </h2>
                <EsperaReasignacion />
              </Container>
            </Col>
          )}
        </Row>
      </Container>
    </motion.div>
  );
}

export default Depurador;
