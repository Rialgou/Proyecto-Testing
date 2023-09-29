import React, { useState } from 'react';
import { Container, Row, Col ,Badge } from 'react-bootstrap';

import Carrusel from './Carrusel';

import '../EstilosGlovales/Home.css'

const ComoFunciona = () => {

  const [index, setIndex] = useState(0);

  let contenido;

  switch (index) {
    case 0:
      contenido = <Container className='informacion'>
                    <Row>
                      <Col>
                        <h3> Adjuntar información Slider 1 </h3>
                      </Col>
                    </Row>
                  </Container>
          break;

    case 1:
      contenido = <Container className='informacion'>
                    <Row>
                      <Col>
                        <h3> Adjuntar información Slider 2 </h3>
                      </Col>
                    </Row>
                  </Container>
          break;

     case 2:
      contenido = <Container className='informacion'>
                    <Row>
                      <Col>
                       <h3> Adjuntar información Slider 3</h3>
                      </Col>
                    </Row>
                  </Container>

      default:
        {/* implementar alerta */}
  }


  return (
    <>
      <Container>
      <Col>

      {/*mt-5 mb-3 */}

      <Row className='mt-5 mb-4 '>
        <div>
          <h1> Aprende a utilizar <Badge bg='dark'> BugFixer </Badge>  </h1>
        </div>
      </Row>


      <Row>  
      <Container>
        <Row>
          <Col className='casa mx-3"'>
            <Carrusel index={index} setIndex={setIndex} />
           </Col>
            <Col className='casa mx-5'>
              {contenido}
            </Col>
          </Row>
        </Container>
      </Row>
      </Col>
      </Container>
    </>
  );
};

export default ComoFunciona;

