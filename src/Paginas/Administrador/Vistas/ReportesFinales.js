import BarraSuperior from "../Componentes/BarraSuperiorAdministrador";
import ContextoAdministrador from "../Contextos/ContextoAdministrador";
import Modal from "react-bootstrap/Modal";
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
import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { motion } from "framer-motion";

import "../Estilos/AsignarReporte.css";
import "../Estilos/VisualizarReportesParciales.css";
import "react-datepicker/dist/react-datepicker.css";
import {
  aceptarBugFinal,
  rechazarReporteFinal,
} from "../../../Funciones/consultas";

registerLocale("es", es);

const ReasignacionDepurador = () => {
  const navigate = useNavigate();
  let {
    reporte,
    proyecto,
    depurador,
    usuario,
    SetIDReporte,
    reportesParciales,
  } = useContext(ContextoAdministrador);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const totalPages = Math.ceil(reportesParciales.length / itemsPerPage); // Se resta 1 para omitir el primer elemento
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
  const [show, setShow] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [showModalAceptar, setShowModalAceptar] = useState(false);

  const [actualizarComponente, setActualizarComponente] = useState(false);

  const handleAdminButtonClickReject = async () => {
    if (await rechazarReporteFinal(reporte.id)) {
      handleClose();
    } else {
      console.log("hubo un error");
      alert("fallou");
    }
  };
  const handleClose = () => {
    setShow(false);
    setTextareaValue("");
    setShowModal(true);
  };

  const handleCancel = () => {
    setShow(false);
    setTextareaValue("");
  };

  const handleShow = () => setShow(true);

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setActualizarComponente(true);
    navigate("/administrador");
  };
  const handleModalAceptarClose = () => {
    setShowModalAceptar(false);
    setActualizarComponente(true);
    navigate("/administrador");
  };

  const handleAccept = async () => {
    if (await aceptarBugFinal(reporte.id)) {
      setShowModalAceptar(true);
    } else {
      alert("error");
    }
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
            </Container>
          </Col>

          <Col
            xs={12}
            md={7}
            className="d-flex flex-column justify-content-start align-items-center"
          >
            <h2 className="margen text-center">
              <strong>Historial de</strong>
              <Badge pill bg="primary">
                reportes
              </Badge>
            </h2>
            <Container fluid className="mt-4 ms-md-3 contenedor-historial">
              <ListGroup as="ul" id="listas">
                {!reporte === 0 ? (
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
                          <strong>Reporte final</strong>
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
                          <pre className="descripcion-bug descripcion-bug2 parrafo">
                            {reporte.comentarioFinal}
                          </pre>
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
                              <strong>Reportes parciales</strong>
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
                                      index}
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
            <div>
              <>
                <Button
                  variant="danger"
                  className=" botoness  mt-5 ms-5 "
                  onClick={handleShow}
                >
                  Rechazar reporte
                </Button>
                <Modal
                  centered
                  show={show}
                  onHide={handleCancel}
                  dialogClassName="modal-basic"
                  contentClassName="modal-reasignacion"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      ¿Por qué está rechazando el reporte final?
                      <span role="img" aria-label="Emoticono Cara Pensativa">
                        {" "}
                        🤔
                      </span>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <textarea
                      className="textarea-custom textarea-basic"
                      placeholder="Ingrese las razones por las cuales está rechazando el reporte final"
                      value={textareaValue}
                      onChange={handleTextareaChange}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="success"
                      disabled={textareaValue.trim() === ""}
                      onClick={() => handleAdminButtonClickReject()}
                    >
                      Enviar
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Modal
                  centered
                  className="modal-basic"
                  show={showModal}
                  onHide={() => setShowModal(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Completado</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Se ha rechazado la solicitud con éxito
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => handleModalClose()}
                    >
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
              <Button
                variant="success"
                className=" botoness mt-5 ms-5 "
                onClick={() => handleAccept()}
              >
                Aceptar reporte
              </Button>
              <Modal
                centered
                className="modal-basic"
                show={showModalAceptar}
                onHide={() => setShowModalAceptar(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Bug Completado</Modal.Title>
                </Modal.Header>
                <Modal.Body>¡Tu bug se ha completado con éxito!</Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => handleModalAceptarClose()}
                  >
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ReasignacionDepurador;
