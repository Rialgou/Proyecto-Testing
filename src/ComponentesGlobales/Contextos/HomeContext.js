/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

// Crea el contexto
export const HomeContext = createContext();

// Crea el proveedor del contexto
export const HomeProvider = ({ children }) => {
	const [cuenta, setCuenta] = useState({ id: -1, accType: -1 });

	return (
		<HomeContext.Provider value={{ cuenta, setCuenta }}>
			{children}
		</HomeContext.Provider>
	);
};
