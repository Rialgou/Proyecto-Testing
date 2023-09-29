import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";

import '../Estilos/BotonesProyectos.css';
import { getProyectosUsuario } from '../../../Funciones/consultas';



function BotonesProyectos({ seleccionarProyecto }) {
    //id del usuario
    const usuarioId = "umlvgp6OkqUwNtDeh1aA";
    // hooks
    const [proyectosData, setProyectosData] = useState([]);
    const [botonSeleccionado, setBotonSeleccionado] = useState([]);


    useEffect(() =>{
        const fetchData = async () =>{
            const proyectosUsuario = await getProyectosUsuario(usuarioId);
            setProyectosData(proyectosUsuario);
        };

        fetchData();
    },[]);
    
    const seleccionarBoton = (indice) => {
        setBotonSeleccionado(indice);
        seleccionarProyecto(indice);
    };
    
    return (
        <div>
            {proyectosData.map((proyecto) => (
                <Button
                    key={proyecto.id}
                    variant={botonSeleccionado === proyecto.id ? "primary" : "secondary"}
                    onClick={() => seleccionarBoton(proyecto.id)}
                    className="boton"
                >
                    {proyecto.nombre}
                </Button>
            ))}
        </div>
        
        
        
    );
}

export default BotonesProyectos;