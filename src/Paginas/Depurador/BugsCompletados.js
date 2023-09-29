import BarraSuperiorDepurador from "./Componentes/BarraSuperiorDepurador";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

import {
  Container,
  Row,
  Col,
  Badge,
  Stack,
  Button,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./Estilos/BugsCompletados.css";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("es", es);

const Reporte = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BarraSuperiorDepurador />

      <Container fluid className=" mt-5 mb-5">
        <Row>
        <Col xs={12} md={4}>
            <h2 className="margen text-center">
              <strong>Historial reportes </strong>
              <Badge pill bg="primary">
                parciales
              </Badge>
            </h2>

            <Container fluid className="  contenedor-formulario">
              <ListGroup as="ul" id="listas">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col md={12}>
                    <h5>
                      <strong>Asignación</strong>
                    </h5>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={2} md={3}>
                    <p>
                      <strong>Plazo de entrega</strong>
                    </p>
                  </Col>
                  
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={3}>
                    <p>
                      <strong>Prioridad</strong>
                    </p>
                  </Col>
                  
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={3}>
                    <p>
                      <strong>Descripción</strong>
                    </p>
                  </Col>
                  
                </ListGroup.Item>
              </ListGroup>
            </Container>

          </Col>
          <Col
            xs={12}
            md={5}
            id="columna-1"
            className="d-flex flex-column justify-content-start align-items-center "
          >
            <h2 className="margen text-center">
              <strong>Historial reportes </strong>
              <Badge pill bg="primary">
                parciales
              </Badge>
            </h2>

            <Container fluid className="mt-4 ms-5 me-3 contenedor-formulario">
              <ListGroup as="ul" id="listas">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={2}>
                    <h5>
                      <strong>Último reporte - fecha</strong>
                    </h5>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={2}>
                    <p>
                      <strong>Detalles</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={10} className="parrafo">
                    <div>
                      <pre className="descripcion-bug">
                        Descripción
                      </pre>
                    </div>
                  </Col>
                  </ListGroup.Item>
              </ListGroup>

              <hr
                style={{ height: "2px", background: "black", margin: "20px 0" }}
              ></hr>

              <ListGroup as="ul" id="listas">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={12}>
                    <h5>
                      <strong>Reportes anteriores</strong>
                    </h5>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={2}>
                    <p>
                      <strong>Fecha emisión</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={10}>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={2}>
                    <p>
                      <strong>Descripción</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={10} className="parrafo">
                  </Col>
                </ListGroup.Item>
              </ListGroup>
            </Container>
          </Col>


          
        </Row>
      </Container>
    </motion.div>
  );
};

export default Reporte;
