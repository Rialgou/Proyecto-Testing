import BarraSuperior from "../Componentes/BarraSuperiorAdministrador";
import ContextoAdministrador from "../Contextos/ContextoAdministrador";
import Modal from 'react-bootstrap/Modal';
import DynamicCard from "../Componentes/DynamicCard";
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
import { reasignarDepurador, reasignarDepuradorOtroMomento, rechazarReasignacion } from "../../../Funciones/consultas";

import "../Estilos/ReasignacionDepurador.css";
import "../Estilos/VisualizarReportesParciales.css"
import "react-datepicker/dist/react-datepicker.css";

registerLocale("es", es);

const ReasignacionDepurador = () => {
  const datos = [
      { fecha: 'fecha 18', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      { fecha: 'fecha 17', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      { fecha: 'fecha 16', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      { fecha: 'fecha 15', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 14', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 13', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 12', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 11', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 10', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 9', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 8', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 7', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 6', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 5', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 4', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 3', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      // { fecha: 'fecha 2', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      // { fecha: 'fecha 1', detalles: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [depuradorSeleccionado, setDepuradorSeleccionado] = useState(null);
  const [showDepurador, setShowDepurador] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  
  const handleCloseDepurador = () => setShowDepurador(false);

  const handleShowDepurador = () => setShowDepurador(true);


 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const noCambios = () => {
    setDepuradorSeleccionado(null);
    handleCloseDepurador();
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const visibleItems = datos.slice(firstIndex + 1, lastIndex); // Se omitió el primer elemento

  const totalPages = Math.ceil((datos.length - 1) / itemsPerPage); // Se resta 1 para omitir el primer elemento
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  let { reporte, proyecto, depuradores, usuario, SetIDReporte, depurador } = useContext(
    ContextoAdministrador
  );

  const { id } = useParams();
  SetIDReporte(id);

  const [show, setShow] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showModalReasignar, setShowModalReasignar] = useState(false);
  const [actualizarComponente, setActualizarComponente] = useState(false);
  const handleClose = () => {
    setShow(false);
    setTextareaValue(''); 
    setShowModal(true);
  };
  const handleCancel = () =>{
    setShow(false);
    setTextareaValue('');
  }
  const handleShow = () => setShow(true);
  
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleSendClick = async() =>{
    if(await rechazarReasignacion(reporte.id)){
      handleClose();
    }
    else{
      console.log("hubo un error");
      alert("fallou");
    }
  }

  const handleReasignar = async () => {
    if(depuradorSeleccionado !== null){
      if(await reasignarDepurador(depuradorSeleccionado.id,reporte.id)){
        handleCloseListaDepurador();
      }
      else{
        console.log("hubo un error");
        alert("fallo");
      }
    }
    else{
      alert("selecciona un depurador");
    }
  }
  const handleCloseListaDepurador = () =>{
    setShowDepurador(false);
    setShowModalReasignar(true);
    
  }
  const handleModalCloseReasignar = () =>{
    setShowModalReasignar(false);
    navigate("/administrador");
  }

  const handleModalClose = () =>{
    setShowModal(false);
    setActualizarComponente(true);
    navigate("/administrador");
  }
  const navigate = useNavigate();
  const handleNav = async() => {
    if(await reasignarDepuradorOtroMomento(reporte.id))
      navigate("/administrador");
    else{
      console.log("error");
    }
  }

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
                    {depurador.nombre ? <span>{depurador.nombre}</span> : <span>Cargando...</span>} 
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
                    {reporte.fechaEstimadaTermino ? <span>{reporte.fechaEstimadaTermino.toDate().toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span> : <span>Cargando...</span>} 
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

          <Col xs={12} md={7} className="d-flex flex-column justify-content-start align-items-center">
            <h2 className="margen text-center">
              <strong>Solicitud de </strong>
              <Badge pill bg="primary">
                reasignación
              </Badge>
            </h2>
            <Container fluid className="mt-4 ms-md-3 contenedor-historial">
            <ListGroup as="ul" id="listas">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={2}>
                    <h5>
                      <strong>Solicitud</strong>
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
                      <strong>Carga de trabajo</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={10}>
                    <p className="parrafo"> {depurador.nivelCarga} </p>
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
                  
                  <Col xs={12} md={10} className="parrafodepurador">
                    <div>
                      <pre className="descripcion-bug">
                        {reporte.mensaje}
                      </pre>
                    </div>
                  </Col>
                </ListGroup.Item>
              </ListGroup>
            </Container>
            <div>
              <Button
                variant="danger"
                className=" botoness  mt-5 ms-5 "
                onClick={handleShow}
              >
                Rechazar reasignación
              </Button>
              <Modal centered show={show} onHide={handleCancel} dialogClassName="modal-basic" contentClassName="modal-reasignacion">
        <Modal.Header closeButton>
          <Modal.Title>
            ¿Por qué está rechazando la solicitud de reasignación?
            <span role="img" aria-label="Emoticono Cara Pensativa"> 🤔</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="textarea-custom textarea-basic"
            placeholder="Ingrese las razones por las cuales está rechazando la solicitud de reasignación"
            value={textareaValue}
            onChange={handleTextareaChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            disabled={textareaValue.trim() === ''}
            onClick={()=> handleSendClick()}
          >
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal centered className="modal-basic" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Reasignación rechazada
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Se ha devuelto el bug al depurador
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModalClose()}>
            Cerrar
          </Button>
        </Modal.Footer>
        </Modal>
              <Button
                variant="success"
                className=" botoness mt-5 ms-5 "
                onClick={handleShowDepurador}
              >
                Aceptar reasignación
              </Button>
              <Modal
                show={showDepurador}
                onHide={handleCloseDepurador}
                animation={true}
                size="lg"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Seleccionar depurador</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container className="cards-container">
                    <DynamicCard
                      listadeDepuradores={depuradores.filter((dep) => dep.nombre !== depurador.nombre )}
                      depuradorSeleccionado={depuradorSeleccionado}
                      setDepuradorSeleccionado={setDepuradorSeleccionado}
                    />
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleNav}>
                    Asignar en otro momento
                  </Button>
                  <Button variant="primary" onClick={handleReasignar}>
                    Reasignar
                  </Button>
                </Modal.Footer>
              </Modal>
              <Modal centered className="modal-basic" show={showModalReasignar} onHide={() => setShowModalReasignar(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        Depurador reasignado con éxito
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    El depurador se ha reasignado con éxito
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => handleModalCloseReasignar()}>
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