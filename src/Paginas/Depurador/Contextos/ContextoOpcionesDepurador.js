import { createContext, useState } from "react";

const ContextoOpcionesDepurador = createContext();

const OpcionesProviderDepurador = ({ children }) => {
  const [showCol, setShowCol] = useState(true); // Mostrar por defecto cuando se carga la página

  const toggleOffcanvas = () => {
    setShowCol(!showCol);
  };

  const data = { showCol, toggleOffcanvas };

  return (
    <ContextoOpcionesDepurador.Provider value={data}>
      {children}
    </ContextoOpcionesDepurador.Provider>
  );
};

export { OpcionesProviderDepurador };

export default ContextoOpcionesDepurador;
