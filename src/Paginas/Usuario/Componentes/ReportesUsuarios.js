import React, { useState, useEffect, useRef } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getReportesUsuario } from '../../../Funciones/consultas';
import "../Estilos/ReportesUsuarios.css";

const ReportesUsuarios = ({filtro}) => {
  const usuarioId = "umlvgp6OkqUwNtDeh1aA";
  const [listaReportesUsuario, setListaReportesUsuario] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [reportesFiltrados, setReportesFiltrados] = useState([]);
  const titleRefs = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      const reportesUsuario = await getReportesUsuario(usuarioId);
      setListaReportesUsuario(reportesUsuario);
      setTotalPages(Math.ceil(reportesUsuario.length / 7));
    };

    fetchData();
  }, []);

  useEffect(() => {
    filtrarReportes();
  }, [filtro, listaReportesUsuario]);
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const filtrarReportes = () => {
    if (filtro === 0) {
      setReportesFiltrados(listaReportesUsuario);
    } else {
      const reportesFiltrados = listaReportesUsuario.filter(
        (reporte) => reporte.estado === filtro
      );
      setReportesFiltrados(reportesFiltrados);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * 7;
  const endIndex = startIndex + 7;
  const reportesPaginados = listaReportesUsuario.slice(startIndex, endIndex);

  return (
    <>
      <Accordion alwaysOpen>
        {reportesFiltrados.slice(startIndex, endIndex).map((list, index) => (
          <Accordion.Item key={index} eventKey={index}>
            <Card>
              <Accordion.Header ref={(el) => (titleRefs.current[index] = el)}>
                <div>
                  <span className="bug-info">
                    <span> Bug {startIndex + index + 1} </span>
                    <span> Título: {list.asunto}</span>
                  </span>
                </div>
              </Accordion.Header>

              <Accordion.Body>
                <strong className="descripcion-titulo">Proyecto: </strong><span>{list.nombreProyecto}</span>
                <br />
                <strong className="descripcion-titulo">Estado del reporte: </strong>
                {list.estado === -1 && <span>Rechazado</span>}
                {list.estado === 1 && <span>Pendiente</span>}
                {list.estado === 2 && <span>En proceso</span>}
                {list.estado === 3 && <span>En proceso</span>}
                {list.estado === 4 && <span>En proceso</span>}
                {list.estado === 5 && <span>Completado</span>}
                <div>
                  <strong className="descripcion-titulo">Fecha de emisión del reporte: </strong>
                  <span>{list.fechaEmision.toDate().toLocaleString()}</span>
                  <br />
                  {list.estado === -1 && (
                  <>
                  <strong className="descripcion-titulo">Motivo de rechazo </strong>
                  {<pre className="descripcion-bug parrafo2">{list.comentarioRechazo}</pre>}
                  </>
                  )}
                  {list.estado!== -1 && (
                    <>
                    <strong className="descripcion-titulo">Fecha estimada  de termino: </strong>
                    {list.fechaEstimadaTermino ? <span>{list.fechaEstimadaTermino.toDate().toLocaleString()}<br /></span>  : "Por determinar"}
                    </>
                  )}
                  <div>
                    <strong className="descripcion-titulo">Descripción del Bug: </strong>
                    <pre className="descripcion-bug parrafo2">{list.descripcionUsuario}</pre>
                  </div>
                </div>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>

      {totalPages > 1 && (
        <div className="pagination-buttons mt-3">
          <Button variant="secondary" onClick={handlePreviousPage} disabled={currentPage === 1}>
            Anterior
          </Button>
          <Button variant="secondary" onClick={handleNextPage} disabled={currentPage === totalPages}>
            Siguiente
          </Button>
        </div>
      )}
      
    </>
  );
};

export default ReportesUsuarios;