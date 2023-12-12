import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Estilos/RechazoAcordeon.css";
import { solicitarReasignacion } from "../../../Funciones/consultas";

function Rechazar({ reporteId, ...props }) {
  const [showModalClose, setShowModalClose] = useState(false);
  const [show, setShow] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [actualizarComponente, setActualizarComponente] = useState(false);
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
  };
  const handleEnviarClick = async (reporteId) => {
    if (textareaValue.trim() !== "") {
      console.log(reporteId);
      if (await solicitarReasignacion(reporteId, textareaValue)) {
        handleClose();
      }
    }
  };
  useEffect(() => {
    props.onRechazoCompletado();
    setActualizarComponente(false);
  }, [actualizarComponente]);

  return (
    <>
      <Button variant="danger" className="boton-rechazo" onClick={handleShow}>
        Solicitar reasignación
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
            ¿Por qué estás solicitando una reasignación?
            <span role="img" aria-label="Emoticono Cara Pensativa">
              {" "}
              🤔
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="textarea-custom textarea-basic"
            placeholder="Ingrese las razones por las cuales está solicitando una reasignación del Bug"
            value={textareaValue}
            onChange={handleTextareaChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => handleEnviarClick(reporteId)}
            disabled={textareaValue.trim() === ""}
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
          <Modal.Title>Solicitud enviada</Modal.Title>
        </Modal.Header>
        <Modal.Body>¡Tu solicitud ha sido enviada con éxito!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModalClose()}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Rechazar;
