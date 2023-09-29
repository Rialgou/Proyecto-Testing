import { createContext, useState, useEffect, useContext } from "react";

import { obtenerDepurador } from "../../../Funciones/consultas";
import { HomeContext } from "../../../ComponentesGlobales/Contextos/HomeContext";

/*Agregar funcion para obtener el id despues de la autentificacion*/

const ContextoDepurador = createContext();

const DepuradorProvider = ({ children }) => {
  const { cuenta } = useContext(HomeContext);

  const depuradorId = cuenta.id;

  const [depurador, setDepurador] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const datosDepurador = await obtenerDepurador(depuradorId);
      setDepurador(datosDepurador);
    };

    fetchData();
  }, [depuradorId]);

  const data = {
    depurador,
  };

  return (
    <ContextoDepurador.Provider value={data}>
      {children}
    </ContextoDepurador.Provider>
  );
};

export { DepuradorProvider };

export default ContextoDepurador;
