import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Stack,
  Button,
} from "react-bootstrap";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { HomeContext } from "../../../ComponentesGlobales/Contextos/HomeContext";

import ContextoDepurador from "../Contextos/ContextoDepurador";
import ContextoOpciones from "../Contextos/ContextoOpcionesDepurador";

import "../../Depurador/Estilos/BarraSuperiorDepurador.css";

const BarraSuperiorDepurador = ({ VistaPrincipal }) => {
  const { setCuenta } = useContext(HomeContext);
  const { toggleOffcanvas } = useContext(ContextoOpciones);
  const { depurador } = useContext(ContextoDepurador);

  const CerrarSesion = () => {
    setCuenta({ id: -1, accType: -1 });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="nombre-software">
            BugFixer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/como-funciona">
                ¿Cómo funciona?
              </Nav.Link>
              {VistaPrincipal === true && (
                <div className="boton-Opciones ml-auto">
                  <Nav.Link
                    as={Button}
                    variant="dark"
                    onClick={toggleOffcanvas}
                    autoFocus={false}
                  >
                    <AiOutlineAlignLeft />
                  </Nav.Link>
                </div>
              )}
            </Nav>

            <Stack direction="horizontal" gap={5}>
              <Nav className="Barra-usuario">
                <RiAccountPinCircleLine size={38} color="#F2F2F2" />
                <NavDropdown title={"Ignacio"} id="collasible-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/Cuenta">
                    Cuenta
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/ajustes">
                    Ajustes
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Button} onClick={() => CerrarSesion()}>
                    Cerrar sesion
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to="/acerca-de-nosotros">
                    Acerca de nosotros
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BarraSuperiorDepurador;
