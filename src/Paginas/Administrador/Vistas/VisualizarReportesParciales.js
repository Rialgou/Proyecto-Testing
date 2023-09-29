import BarraSuperior from "../Componentes/BarraSuperiorAdministrador";
import ContextoAdministrador from "../Contextos/ContextoAdministrador";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

import {
  Accordion,
  Container,
  Row,
  Col,
  Badge,
  Button,
  ListGroup,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { motion } from "framer-motion";

import "../Estilos/AsignarReporte.css";
import "../Estilos/VisualizarReportesParciales.css";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("es", es);

const Parcial = () => {
  let {
    reporte,
    proyecto,
    depurador,
    usuario,
    SetIDReporte,
    reportesParciales,
  } = useContext(ContextoAdministrador);

  const datos = [
    {
      fecha: "fecha 18",
      detalles:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      fecha: "fecha 17",
      detalles:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      fecha: "fecha 16",
      detalles:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      fecha: "fecha 15",
      detalles: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      fecha: "fecha 14",
      detalles:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      fecha: "fecha 13",
      detalles:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      fecha: "fecha 12",
      detalles:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      fecha: "fecha 11",
      detalles: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      fecha: "fecha 10",
      detalles:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      fecha: "fecha 9",
      detalles:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      fecha: "fecha 8",
      detalles:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      fecha: "fecha 7",
      detalles: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    // { fecha: 'fecha 6', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
    // { fecha: 'fecha 5', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
    // { fecha: 'fecha 4', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
    // { fecha: 'fecha 3', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
    // { fecha: 'fecha 2', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    // { fecha: 'fecha 1', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const totalPages = Math.ceil((reportesParciales.length - 1) / itemsPerPage); // Se resta 1 para omitir el primer elemento
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const { id } = useParams();
  SetIDReporte(id);

  const formatoFecha = (fecha) => {
    const fechaFormaterada = fecha.toDate();

    return fechaFormaterada.toLocaleString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BarraSuperior />

      <Container fluid className=" mt-5 mb-5">
        <Row>
          <Col
            xs={12}
            md={5}
            id="columna-1"
            className="d-flex flex-column justify-content-start align-items-center "
          >
            <h2 className="margen text-center">
              <strong>Carta de</strong>
              <Badge pill bg="primary">
                resumen
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
                      <strong>Asignación</strong>
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
                      <strong>Depurador</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={10}>
                    <p className="parrafo">
                      {depurador.nombre ? (
                        <span>{depurador.nombre}</span>
                      ) : (
                        <span>Cargando...</span>
                      )}
                    </p>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={2}>
                    <p>
                      <strong>Plazo de entrega</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={10}>
                    <p className="parrafo">
                      {reporte.fechaEstimadaTermino ? (
                        <span>
                          {reporte.fechaEstimadaTermino
                            .toDate()
                            .toLocaleString(undefined, {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                        </span>
                      ) : (
                        <span>Cargando...</span>
                      )}
                    </p>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={2}>
                    <p>
                      <strong>Prioridad</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={10}>
                    <p className="parrafo">
                      {reporte.prioridad === 1 && <span>Baja</span>}
                      {reporte.prioridad === 2 && <span>Media</span>}
                      {reporte.prioridad === 3 && <span>Alta</span>}
                    </p>
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
                    <div>
                      <pre className="descripcion-bug">
                        {reporte.descripcionAdministrador}
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
                  <Col xs={12} md={2}>
                    <h5>
                      <strong>Proyecto</strong>
                    </h5>
                  </Col>
                  <Col xs={12} md={10}>
                    <p className="parrafo">
                      &nbsp;&nbsp;&nbsp;{proyecto.nombre}
                    </p>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={2}>
                    <p>
                      <strong>Usuario</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={10}>
                    <p className="parrafo">{usuario ? usuario.nombre : ""}</p>
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
                    <p className="parrafo">
                      {proyecto.fechaInicio
                        ? formatoFecha(proyecto.fechaInicio)
                        : ""}
                    </p>
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
                  <Col xs={12} md={10}>
                    <p className="parrafo">{proyecto.descripcion}</p>
                  </Col>
                </ListGroup.Item>
              </ListGroup>
            </Container>
          </Col>

          <Col
            xs={12}
            md={7}
            className="d-flex flex-column justify-content-start align-items-center"
          >
            <h2 className="margen text-center">
              <strong>Historial reportes </strong>
              <Badge pill bg="primary">
                parciales
              </Badge>
            </h2>
            <Container fluid className="mt-4 ms-md-3 contenedor-historial">
              <ListGroup as="ul" id="listas">
                {datos.length === 0 ? (
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start lista-item"
                    variant="dark"
                  >
                    <Col xs={12} md={5}>
                      <h5>
                        <strong>Sin reportes existentes</strong>
                      </h5>
                    </Col>
                  </ListGroup.Item>
                ) : (
                  <>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start lista-item"
                      variant="dark"
                    >
                      <Col xs={12} md={5}>
                        <h5>
                          <strong>
                            Último reporte &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
                            {reportesParciales[0] ? (
                              <span>
                                {reportesParciales[0].fechaReporte
                                  .toDate()
                                  .toLocaleString(undefined, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                              </span>
                            ) : (
                              <span>Cargando...</span>
                            )}
                          </strong>
                        </h5>
                      </Col>
                    </ListGroup.Item>

                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-start align-items-start lista-item"
                      variant="dark"
                    >
                      <Col xs={12} md={1}>
                        <p>
                          <strong>Detalles</strong>
                        </p>
                      </Col>

                      <Col xs={7} md={11}>
                        <div>
                          {reportesParciales[0] ? (
                            <pre className="descripcion-bug descripcion-bug2 parrafo">
                              {reportesParciales[0].comentario}
                            </pre>
                          ) : (
                            <pre className="descripcion-bug descripcion-bug2 parrafo">
                              Cargando...
                            </pre>
                          )}
                        </div>
                      </Col>
                    </ListGroup.Item>

                    {reportesParciales.length > 1 && (
                      <>
                        <hr
                          style={{
                            height: "2px",
                            background: "black",
                            margin: "20px 0",
                          }}
                        ></hr>

                        <ListGroup.Item
                          as="li"
                          className="d-flex justify-content-between align-items-start lista-item"
                          variant="dark"
                        >
                          <Col xs={12} md={5}>
                            <h5>
                              <strong>Reportes anteriores</strong>
                            </h5>
                          </Col>
                        </ListGroup.Item>

                        <ListGroup.Item
                          as="li"
                          className="d-flex flex-column align-items-center lista-item"
                          variant="dark"
                        >
                          <Accordion className="acordion-reportes-parciales">
                            {reportesParciales
                              .slice(1)
                              .slice(firstIndex, lastIndex)
                              .map((item, index) => (
                                <Accordion.Item
                                  eventKey={index.toString()}
                                  key={index}
                                >
                                  <Accordion.Header>
                                    Reporte{" "}
                                    {reportesParciales.length -
                                      firstIndex -
                                      index -
                                      1}
                                    &nbsp;&nbsp;-&nbsp;&nbsp;
                                    {item ? (
                                      <span>
                                        {item.fechaReporte
                                          .toDate()
                                          .toLocaleString()}
                                      </span>
                                    ) : (
                                      <span>Cargando...</span>
                                    )}
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div>
                                      <pre className="descripcion-bug parrafo">
                                        {item.comentario}
                                      </pre>
                                    </div>
                                  </Accordion.Body>
                                </Accordion.Item>
                              ))}
                          </Accordion>

                          {totalPages > 1 && (
                            <div className="pagination-buttons mt-3">
                              <Button
                                variant="secondary"
                                onClick={() =>
                                  handlePageChange(
                                    currentPage === 1 ? 1 : currentPage - 1
                                  )
                                }
                                className="mr-auto"
                              >
                                Anterior
                              </Button>
                              <Button
                                variant="secondary"
                                onClick={() =>
                                  handlePageChange(
                                    currentPage === totalPages
                                      ? totalPages
                                      : currentPage + 1
                                  )
                                }
                                className="ml-auto"
                              >
                                Siguiente
                              </Button>
                            </div>
                          )}
                        </ListGroup.Item>
                      </>
                    )}
                  </>
                )}
              </ListGroup>
            </Container>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Parcial;
