import React, { useState,useEffect } from 'react';
import { aceptarBug, getReportesDepurador } from '../../../Funciones/consultas';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import "../Estilos/AcordeonBugsNuevos.css";
import Rechazar from './Rechazar';

function AcordeonBugsNuevos() {
  const [actualizarComponente, setActualizarComponente] = useState(false);
  const [listaReportes, setListaReportes] = useState([]);
  const depuradorId = "qjM7ExaUwt7Zv7ApAVHL";

  const ReportesDepurador = async()=>{
      const reportes = await getReportesDepurador(depuradorId,2);
      setListaReportes(reportes);
      console.log(listaReportes);
  }

  const [activeItem, setActiveItem] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };
  const handleRechazoCompletado = () => {
    setActualizarComponente(true);
  };
  const handleAceptarBug = async (reportId) => {
    if(await aceptarBug(reportId)){
      setShowModal(true);
      setActualizarComponente(true);
    }
  };  

  useEffect( () => {
    ReportesDepurador();
    if(actualizarComponente){
      setActualizarComponente(false);
    }
  },[actualizarComponente]);
  return (
    <>
      <Accordion className="acordeon-bugs-nuevos" activeKey={activeItem} onSelect={handleItemClick}>
        {listaReportes.filter((list)=> (list.reasignacion === false))
        .map((list, index) => (
          <Accordion.Item key={index} eventKey={index}>
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
                <br/>
                <div>
                  <Button variant="success" className="boton-aceptar" onClick={()=>handleAceptarBug(list.id)}>
                    Aceptar Bug
                  </Button>
                <Rechazar className="rechazo-lugar" onRechazoCompletado={handleRechazoCompletado} reporteId={list.id} ></Rechazar>
                </div>
              </Accordion.Body>
              
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>

      <Modal centered className="modal-basic" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Bug aceptado
            <span role="img" aria-label="Emoticono Sonriente"> 😊</span>
            <span role="img" aria-label="Emoticono Pulgar Arriba">👍</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        ¡El bug ha sido aceptado con éxito!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default AcordeonBugsNuevos;