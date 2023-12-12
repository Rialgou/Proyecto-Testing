import { motion } from 'framer-motion';
import React from 'react';

const AcercaDeNosotros = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<br></br>
			<br></br>
			<h1>Acerca de nosotros</h1>
			<p>
				<strong className='ms-3'>
					Somos el mejor equipo de Ingeneria de Software
				</strong>
			</p>
		</motion.div>
	);
};

export default AcercaDeNosotros;
