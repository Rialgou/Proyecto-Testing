import ListGroup from "react-bootstrap/ListGroup";
import ContextoAsignacion from "../Contextos/ContextoAsignacion";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { VscDebugStart } from "react-icons/vsc";

import "../Estilos/Lista.css";

function Lista({ estado, reasignacion }) {
  const { listaReportes, setEstado } = useContext(ContextoAsignacion);

  setEstado(estado);

  const rutaReporte = (id) => {
    return `/administrador/${id}`;
  };

  const rutaEnProceso = (id) => {
    return `/administrador/en-proceso/${id}`;
  };

  const rutaPorConfirmar = (id) => {
    return `/administrador/por-confirmar/${id}`;
  };
  const rutaReasignacion = (id) => {
    return `/administrador/reasignar/${id}`;
  };

  const rutaReporteFinal = (id) => {
    return `/administrador/reporte-final/${id}`;
  };

  return (
    <div className="lista-container">
      <div className="encabezado">
        <ListGroup horizontal={"lg"} className="my-2">
          <ListGroup.Item
            className="mt-2 mb-2 item encabezado-item"
            style={{ flexBasis: "10.0%" }}
          >
            Ingresar
          </ListGroup.Item>
          <ListGroup.Item
            className="mt-2 mb-2 item encabezado-item"
            style={{ flexBasis: "60.0%" }}
          >
            Asunto
          </ListGroup.Item>
          <ListGroup.Item
            className="mt-2 mb-2 item encabezado-item"
            style={{ flexBasis: "30.0%" }}
          >
            Fecha de emisión
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="contenido">
        {estado === 4 &&
          listaReportes
            .filter((list) => list.reasignacion === false)
            .map((reporte, index) => (
              <ListGroup key={index} horizontal={"lg"} className="my-2">
                <ListGroup.Item
                  as={Link}
                  to={rutaReporteFinal(reporte.id)}
                  className="mt-2 mb-2 item ingresar"
                  id={`probar-${index}`}
                  variant="dark"
                  style={{
                    flexBasis: "10.0%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <VscDebugStart size={24} />
                </ListGroup.Item>
                <ListGroup.Item
                  className="mt-2 mb-2 item"
                  variant="dark"
                  style={{ flexBasis: "70.0%" }}
                >
                  <pre className="descripcion-bug">
                    {reporte.comentarioFinal}
                  </pre>
                </ListGroup.Item>
                <ListGroup.Item
                  className="mt-2 mb-2 item"
                  variant="dark"
                  style={{ flexBasis: "20.0%" }}
                >
                  {reporte.fechaEmision.toDate().toLocaleString()}
                </ListGroup.Item>
              </ListGroup>
            ))}

        {estado === 2 &&
          reasignacion === false &&
          listaReportes
            .filter((list) => list.reasignacion === false)
            .map((reporte, index) => (
              <ListGroup key={index} horizontal={"lg"} className="my-2">
                <ListGroup.Item
                  as={Link}
                  to={rutaPorConfirmar(reporte.id)}
                  className="mt-2 mb-2 item ingresar"
                  id={`probar-${index}`}
                  variant="dark"
                  style={{
                    flexBasis: "10.0%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <VscDebugStart size={24} />
                </ListGroup.Item>
                <ListGroup.Item
                  className="mt-2 mb-2 item"
                  variant="dark"
                  style={{ flexBasis: "70.0%" }}
                >
                  {reporte.asunto}
                </ListGroup.Item>
                <ListGroup.Item
                  className="mt-2 mb-2 item"
                  variant="dark"
                  style={{ flexBasis: "20.0%" }}
                >
                  {reporte.fechaEmision.toDate().toLocaleString()}
                </ListGroup.Item>
              </ListGroup>
            ))}

        {estado === 2 &&
          reasignacion === true &&
          listaReportes
            .filter((list) => list.reasignacion === true)
            .map((reporte, index) => (
              <ListGroup key={index} horizontal={"lg"} className="my-2">
                <ListGroup.Item
                  as={Link}
                  to={rutaReasignacion(reporte.id)}
                  className="mt-2 mb-2 item ingresar"
                  id={`probar-${index}`}
                  variant="dark"
                  style={{
                    flexBasis: "10.0%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <VscDebugStart size={24} />
                </ListGroup.Item>
                <ListGroup.Item
                  className="mt-2 mb-2 item"
                  variant="dark"
                  style={{ flexBasis: "70.0%" }}
                >
                  <pre className="descripcion-bug">{reporte.mensaje}</pre>
                </ListGroup.Item>
                <ListGroup.Item
                  className="mt-2 mb-2 item"
                  variant="dark"
                  style={{ flexBasis: "20.0%" }}
                >
                  {reporte.fechaEmision.toDate().toLocaleString()}
                </ListGroup.Item>
              </ListGroup>
            ))}

        {estado !== 2 &&
          estado !== 3 &&
          estado !== 4 &&
          listaReportes.map((reporte, index) => (
            <ListGroup key={index} horizontal={"lg"} className="my-2">
              <ListGroup.Item
                as={Link}
                to={rutaReporte(reporte.id)}
                className="mt-2 mb-2 item ingresar"
                id={`probar-${index}`}
                variant="dark"
                style={{
                  flexBasis: "10.0%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <VscDebugStart size={24} />
              </ListGroup.Item>
              <ListGroup.Item
                className="mt-2 mb-2 item"
                variant="dark"
                style={{ flexBasis: "60.0%" }}
              >
                {reporte.asunto}
              </ListGroup.Item>
              <ListGroup.Item
                className="mt-2 mb-2 item"
                variant="dark"
                style={{ flexBasis: "30.0%" }}
              >
                {reporte.fechaEmision.toDate().toLocaleString()}
              </ListGroup.Item>
            </ListGroup>
          ))}

        {estado === 3 &&
          listaReportes.map((reporte, index) => (
            <ListGroup key={index} horizontal={"lg"} className="my-2">
              <ListGroup.Item
                as={Link}
                to={rutaEnProceso(reporte.id)}
                className="mt-2 mb-2 item ingresar"
                id={`probar-${index}`}
                variant="dark"
                style={{
                  flexBasis: "10.0%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <VscDebugStart size={24} />
              </ListGroup.Item>
              <ListGroup.Item
                className="mt-2 mb-2 item"
                variant="dark"
                style={{ flexBasis: "60.0%" }}
              >
                {reporte.asunto}
              </ListGroup.Item>
              <ListGroup.Item
                className="mt-2 mb-2 item"
                variant="dark"
                style={{ flexBasis: "30.0%" }}
              >
                {reporte.fechaEmision.toDate().toLocaleString()}
              </ListGroup.Item>
            </ListGroup>
          ))}
      </div>
    </div>
  );
}

export default Lista;
