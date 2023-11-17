import React from "react";
import Button from "react-bootstrap/Button";
import Acordeon from "./Componentes/Acordeon";
import BarraSuperiorUsuario from "./Componentes/BarraSuperiorUsuario";

import { Stack, Badge, Modal } from "react-bootstrap";
import { enviarReporteUsuario } from "../../Funciones/consultas";
import { motion } from "framer-motion";
import { obtenerUsuario } from "../../Funciones/consultas";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../../ComponentesGlobales/Contextos/HomeContext";
import "./Estilos/NuevoReporte.css";

function NuevoReporte() {
  const navigate = useNavigate();
  const [showAlertSinContenido, setShowAlertSinContenido] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [datosReporte, setDatosReporte] = useState({
    proyecto: "",
    titulo: "",
    descripcion: "",
  });

  const handleNewReportClick = async () => {
    console.log(datosReporte);

    if (
      datosReporte.proyecto.trim().length === 0 ||
      datosReporte.titulo.trim().length === 0 ||
      datosReporte.descripcion.trim().length === 0
    ) {
      console.log("No enviar data");
      setShowAlertSinContenido(true);
      return;
    } else {
      console.log("Enviar data");
      if (await enviarReporteUsuario(datosReporte)) {
        setShowAlertSuccess(true);
      } else {
        setShowAlertError(true);
      }
    }
  };

  const handleProyect = (proyecto) => {
    console.log(`NuevoReporte botón seleccionado: ${proyecto}`);
    setDatosReporte((prevState) => ({ ...prevState, proyecto }));
  };

  const handleTitle = (titulo) => {
    console.log(`NuevoReporte titulo seleccionado: ${titulo}`);
    setDatosReporte((prevState) => ({ ...prevState, titulo }));
  };

  const handleDescripcion = (descripcion) => {
    console.log(`NuevoReporte descripción: ${descripcion}`);
    setDatosReporte((prevState) => ({ ...prevState, descripcion }));
  };

  const { cuenta } = useContext(HomeContext);

  const [usuario, setUsuario] = useState({});

  const usuarioId = cuenta.id; // Reemplazar con el ID del usuario
  useEffect(() => {
    const fetchData = async () => {
      const datosUsuario = await obtenerUsuario(usuarioId);
      setUsuario(datosUsuario);
    };
    fetchData();
  }, [usuarioId]);

  const handleCloseAlertSinContenido = () => {
    setShowAlertSinContenido(false);
  };
  const handleCloseAlertError = () => {
    setShowAlertError(false);
  };
  const handleCloseAlertSuccess = () => {
    setShowAlertSuccess(false);
    navigate("/usuario");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main className="contenido-principal">
        <BarraSuperiorUsuario></BarraSuperiorUsuario>

        <br></br>
        <br></br>

        <Stack gap={3}>
          <div className="text-center">
            <h2 className="titulo">
              <strong>Generador de</strong> <Badge bg="primary">reporte</Badge>
            </h2>
          </div>

          <div className="mx-auto acordeon">
            <Acordeon
              proyectoId={handleProyect}
              tituloBug={handleTitle}
              descripcionBug={handleDescripcion}
            />
          </div>

          <div className="contenedor-boton">
            <Button
              variant="dark"
              className="boton-enviar"
              onClick={handleNewReportClick}
            >
              Enviar reporte
            </Button>
          </div>
        </Stack>

        <Modal
          centered
          show={showAlertSinContenido}
          onHide={handleCloseAlertSinContenido}
          className="modal-basic"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Reporte no enviado
              <span role="img" aria-label="Emoticono Upsi">
                {" "}
                😅
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Por favor, ingrese todos los campos para poder enviar el reporte.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAlertSinContenido}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          centered
          show={showAlertError}
          onHide={handleCloseAlertError}
          className="modal-basic"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              ¡Error!
              <span role="img" aria-label="Emoticono Error">
                {" "}
                ❗️❌
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Ocurrio un error al enviar el reporte, intentelo más tarde.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAlertError}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          centered
          show={showAlertSuccess}
          onHide={handleCloseAlertSuccess}
          className="modal-basic"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Reporte enviado
              <span role="img" aria-label="Emoticono Enviado">
                {" "}
                📤
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            El reporte ha sido enviado con éxito. Lamentamos los inconvenientes
            que estás experimentando. Hemos recibido tu reporte de bug y nuestro
            equipo técnico lo revisará detenidamente para solucionarlo lo más
            pronto posible. Te mantendremos informado sobre el progreso y
            agradecemos tu paciencia.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAlertSuccess}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </motion.div>
  );
}

export default NuevoReporte;

