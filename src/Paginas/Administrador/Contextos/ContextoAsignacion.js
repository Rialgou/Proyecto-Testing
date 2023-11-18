// ... (código existente)
import React, { createContext } from "react";
import { useContext,useState,useEffect } from "react";
import {HomeContext} from "../../../ComponentesGlobales/Contextos/HomeContext"
import { obtenerReportesAdministrador } from "../../../Funciones/consultas";


const ContextoAsignacion = createContext();

const AsignacionProvider = ({ children }) => {
  const { cuenta } = useContext(HomeContext);

  const administradorId = cuenta.id; // Reemplazar con el ID del administrador

  const [selectedItem, setSelectedItem] = useState(1); // Estado para almacenar el elemento seleccionado
  const [toggleText, setToggleText] = useState("Ordenar por");
  const [listaReportes, setListaReportes] = useState([]);
  const [estado, setEstado] = useState(null);
  
  const handleItemClick = (value) => {
    setSelectedItem(value);
    switch (value) {
      case 1:
        setToggleText("Fecha de emisión");
        break;
      case 2:
        setToggleText("Prioridad");
        break;
      case 3:
        setToggleText("Fecha estimada de término");
        break;
      default:
        setToggleText("Ordenar por");
    }
  };

  const getReportesAdministrador = async () => {
    try {
      const reportes = await obtenerReportesAdministrador(
        administradorId,
        estado,
        selectedItem
      );
      setListaReportes(reportes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReportesAdministrador();
  }, [selectedItem, estado]);

  const data = {
    toggleText,
    handleItemClick,
    listaReportes,
    setEstado,
  };

  return (
    <ContextoAsignacion.Provider
      value={data}
      data-testid="contexto-asignacion-container"
    >
      {children}
    </ContextoAsignacion.Provider>
  );
};
export default ContextoAsignacion;
export { AsignacionProvider };

// ... (código existente)
