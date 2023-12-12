import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modales(props) {
  return (
    <Modal
      className="modal-basic"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.Title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.h4}</h4>
        <p>{props.p}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modales;
