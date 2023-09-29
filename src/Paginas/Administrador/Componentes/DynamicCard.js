import React from 'react';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

import '../Estilos/DynamicCard.css';

function DynamicCard({ listadeDepuradores, depuradorSeleccionado, setDepuradorSeleccionado }) {
  const seleccionarDepurador = (depurador) => {
    if (depuradorSeleccionado === depurador) {
      // Si se hace clic en la tarjeta del depurador ya seleccionado, lo deseleccionamos
      setDepuradorSeleccionado(null);
    } else {
      // Si se hace clic en una tarjeta diferente, seleccionamos ese depurador
      setDepuradorSeleccionado(depurador);
    }
  };

  return (
    <>
      {listadeDepuradores.map((depurador, index) => (
        <Card
          key={index}
          border={depurador === depuradorSeleccionado ? 'primary' : 'light'}
          style={{ width: '16rem' }}
          className="custom-card"
          onClick={() => seleccionarDepurador(depurador)}
        >
          <Card.Header>{depurador.nombre}</Card.Header>
          <Card.Body>
            <Card.Text>
              Nivel de carga: <Badge variant="secondary">{depurador.nivelCarga}</Badge>
            </Card.Text>
            <Card.Text className="texto">Correo: {depurador.correo}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default DynamicCard;




