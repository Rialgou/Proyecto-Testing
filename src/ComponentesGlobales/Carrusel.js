import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';

import slide1 from '../Imagenes/reporte.jpg'
import slide2 from '../Imagenes/actualizacion.jpg'
import slide3 from '../Imagenes/informacion.jpg'

function Carrusel({index,setIndex}) {

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} >

      <Carousel.Item className='slider' interval={10000}>
          <Image className= 'imagenes-slider' src={slide1} alt='imagen-slider' roundedCircle />
        <Carousel.Caption>
            <Container >
                <Row>
                    <Col>
                      <h2> Reportes</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                      <p> Subida de reportes de manera rapida y eficiente</p>
                    </Col>
                </Row>
            </Container>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='slider' interval={10000}>
        <Image className= 'imagenes-slider' src={slide2} alt='imagen-slider' roundedCircle />
        <Carousel.Caption >
          <Container >
            <Row>
              <Col>
                <h2> Estados</h2>
              </Col>
            </Row>
             <Row>
              <Col>
                <p> Mira el estado de tus reportes de manera didactica y simple</p>
              </Col>
              </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='slider' interval={10000}>
      <Image className= 'imagenes-slider' src={slide3} alt='imagen-slider' roundedCircle />
        <Carousel.Caption >
          <Container >
            <Row>
              <Col>
                <h2 className="text-truncate"> Informacion  </h2>
              </Col>
            </Row>
             <Row>
              <Col>
                <p> Accede a toda la Informacion de tus reportes </p>
              </Col>
              </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;