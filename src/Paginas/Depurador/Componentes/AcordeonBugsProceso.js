import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { ButtonToolbar, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "../Estilos/AcordeonBugsProceso.css";
import { enviarReporteFinal, enviarReporteParcial, getReportesDepurador } from '../../../Funciones/consultas';

function AcordeonBugsProceso() {

  const [actualizarComponente, setActualizarComponente] = useState(false);
  const [listaReportes, setListaReportes] = useState([]);
  const depuradorId = "qjM7ExaUwt7Zv7ApAVHL";

  const ReportesDepurador = async () => {
    const reportes = await getReportesDepurador(depuradorId, 3);
    setListaReportes(reportes);
    console.log(listaReportes);
  }


  const [activeItem, setActiveItem] = useState(null);
  const [descripcionReporte, setdescripcionReporte] = useState("");
  const [showAlertParcial, setShowAlertParcial] = useState(false);
  const [showAlertFinal, setShowAlertFinal] = useState(false);
  const [showAlertSinContenido, setShowAlertSinContenido] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const handleDescripcionReporte = (event) => {
    setdescripcionReporte(event.target.value);
  };

  const handleClickButtonParcial = async (reporteId, comentario) => {
    if (descripcionReporte.trim().length === 0)
      setShowAlertSinContenido(true);
    else {
      if (await enviarReporteParcial(reporteId, comentario)) {
        setShowAlertParcial(true);
        setActualizarComponente(true);
      }
      else {
        alert("error");
      }
    }
  };

  const handleClickButtonFinal = async (reporteId, comentario) => {
    if (descripcionReporte.trim().length === 0)
      setShowAlertSinContenido(true);
    else {
      if (await enviarReporteFinal(reporteId, comentario)) {
        setShowAlertFinal(true);
        setActualizarComponente(true);
      }
      else {
        alert("Error");
      }
    }
  };

  const handleCloseAlertParcial = () => {
    setShowAlertParcial(false);
    setActiveItem(null);
    setdescripcionReporte('');
  };

  const handleCloseAlertFinal = () => {
    setShowAlertFinal(false);
    setActiveItem(null);
    setdescripcionReporte('');
  };

  const handleCloseAlertSinContenido = () => {
    setShowAlertSinContenido(false);
  };

  useEffect(() => {
    ReportesDepurador();
    if (actualizarComponente) {
      setActualizarComponente(false);
    }
  }, [actualizarComponente]);

  return (
    <>
      <Accordion className="acordeon-bugs-proceso" activeKey={activeItem} onSelect={handleItemClick}>
        {listaReportes.map((list, index) => (
          <Accordion.Item key={index} eventKey={index} id={`reporte-pendiente-${index}`}>
            <Card>
              <Accordion.Header>
                <div>
                  <span className="bug-info">
                    <span> Bug {index + 1}</span>
                    <span>Proyecto: {list.nombreProyecto}</span>
                    <span>{list.fechaEmision.toDate().toLocaleDateString()} - {list.fechaEstimadaTermino ? <span>{list.fechaEstimadaTermino.toDate().toLocaleDateString()}</span> : <span>Por determinar</span>}</span>
                    <span>
                      {list.prioridad === 1 && <span>Prioridad: Baja</span>}
                      {list.prioridad === 2 && <span>Prioridad: Media</span>}
                      {list.prioridad === 3 && <span>Prioridad: Alta</span>}
                    </span>
                  </span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <strong className="descripcion-titulo">Descripción del Bug</strong> <br /> <pre className='descripcion-bug'>{list.descripcionAdministrador}</pre>
                <textarea className="textarea-custom textarea-basic"
                  value={descripcionReporte}
                  onChange={handleDescripcionReporte}
                  placeholder="Ingrese los detalles del avance a enviar" />
                <ButtonToolbar className="botones-container">
                  <Button variant="secondary" className="boton-parcial" onClick={() => handleClickButtonParcial(list.id, descripcionReporte)}>
                    Enviar reporte parcial
                  </Button>
                  <Button variant="primary" name='enviar-reporte-final' className="boton-final" onClick={() => handleClickButtonFinal(list.id, descripcionReporte)}>
                    Enviar reporte final
                  </Button>
                </ButtonToolbar>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>

      <Modal centered show={showAlertParcial} onHide={handleCloseAlertParcial} className="modal-basic">
        <Modal.Header closeButton>
          <Modal.Title>
            Reporte parcial enviado
            <span role="img" aria-label="Emoticono OK"> 👌</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡El avance ha sido enviado con éxito!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlertParcial}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={showAlertFinal} onHide={handleCloseAlertFinal} className="modal-basic">
        <Modal.Header closeButton>
          <Modal.Title>
            Reporte final enviado
            <span role="img" aria-label="Emoticono Celebración"> 🎉</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡El reporte final ha sido enviado con éxito!<br /> Ahora el administrador debe aprobarlo.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlertFinal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={showAlertSinContenido} onHide={handleCloseAlertSinContenido} className="modal-basic">
        <Modal.Header closeButton>
          <Modal.Title>
            Reporte no enviado
            <span role="img" aria-label="Emoticono Upsi"> 😅</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Por favor, ingrese los detalles del avance antes de continuar.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlertSinContenido}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AcordeonBugsProceso;