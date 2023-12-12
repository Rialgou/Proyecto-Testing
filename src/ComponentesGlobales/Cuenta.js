import BarraSuperiorAdministrador from '../Paginas/Administrador/Componentes/BarraSuperiorAdministrador';
import React from 'react';
import { motion } from 'framer-motion';

const HistorialCuenta = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<BarraSuperiorAdministrador></BarraSuperiorAdministrador>

			<br></br>
			<br></br>
			<h1 className='ms-4'>Cuenta</h1>
			<p className='ms-5'>.....</p>
		</motion.div>
	);
};

export default HistorialCuenta;
