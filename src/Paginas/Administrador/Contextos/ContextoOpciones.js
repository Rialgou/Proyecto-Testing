import { createContext, useState } from "react";

const ContextoOpciones = createContext();

const OpcionesProvider = ({ children }) => {
  const [showCol, setShowCol] = useState(true); // Mostrar por defecto cuando se carga la página

  const toggleOffcanvas = () => {
    setShowCol(!showCol);
  };

  const data = { showCol, toggleOffcanvas };

  return (
    <ContextoOpciones.Provider value={data}>
      {children}
    </ContextoOpciones.Provider>
  );
};

export { OpcionesProvider };

export default ContextoOpciones;
