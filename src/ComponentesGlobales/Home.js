import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  Button,
  Image,
  Form,
} from "react-bootstrap";
import { BsFillBugFill, BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { currentUser, signIn } from "../Funciones/login";
import { HomeContext } from "./Contextos/HomeContext";

import Usuario from "../Imagenes/Usuario.png";

const Home = () => {
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    email: "",
    contrasena: "",
  });

  const { setCuenta } = useContext(HomeContext);

  const { email, contrasena } = formulario;
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTextVisible(true);
  }, []);

  const handleInputChangue = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    return new Promise(async (resolve) => {
      // Realizar acciones con los valores del formulario
      const newCuenta = await signIn(formulario.email, formulario.contrasena);
      console.log(newCuenta);
      resolve(newCuenta);
    }).then((newCuenta) => {
      if (newCuenta.accType === 1) handleUserButtonClick(newCuenta);
      if (newCuenta.accType === 2) handleAdminButtonClick(newCuenta);
      if (newCuenta.accType === 3) handleDebButtonClick(newCuenta);
      if (newCuenta.accType === -1) handleError(newCuenta);
    });
  };

  const handleDebButtonClick = (newCuenta) => {
    setCuenta(newCuenta);
    navigate("/depurador");
  };

  const handleAdminButtonClick = (newCuenta) => {
    setCuenta(newCuenta);
    navigate("/administrador");
  };

  const handleUserButtonClick = (newCuenta) => {
    setCuenta(newCuenta);
    navigate("/usuario");
  };
  const handleError = (newCuenta) => {
    setCuenta(newCuenta);
    alert("Cuenta no disponible");
  };

  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <Col md={8} className="d-flex flex-column columna111">
          <Row style={{ flex: "10%" }}>
            <Col className="barraSuperiorXD">
              <Stack direction="horizontal" gap={5}>
                <div className="Logo">
                  <BsFillBugFill className="bugIcon" />
                  <span className="bugTextXD">BugFixer</span>
                </div>
                <div className="textossS">Para equipos</div>
                <div className="textossS">Para personas</div>
              </Stack>
            </Col>
          </Row>
          <Row style={{ flex: "55%" }}>
            <Col className="headerColo">
              <h1 className="headerTexto">
                {textVisible && (
                  <>
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      S
                    </motion.span>
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      o
                    </motion.span>
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      l
                    </motion.span>
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      u
                    </motion.span>
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      c
                    </motion.span>
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      i
                    </motion.span>
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      o
                    </motion.span>
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      n
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      a
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      {" "}
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      t
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                    >
                      u
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      s
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.3 }}
                    >
                      {" "}
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                    >
                      e
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                    >
                      r
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                    >
                      r
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.7 }}
                    >
                      o
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                    >
                      r
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.9 }}
                    >
                      e
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                    >
                      s
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.1 }}
                    >
                      {" "}
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.2 }}
                    >
                      j
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.3 }}
                    >
                      u
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.4 }}
                    >
                      n
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.5 }}
                    >
                      t
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.6 }}
                    >
                      o
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.7 }}
                    >
                      {" "}
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.8 }}
                    >
                      a
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.9 }}
                    >
                      {" "}
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 3.0 }}
                    >
                      B
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 3.1 }}
                    >
                      u
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 3.2 }}
                    >
                      g
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 3.3 }}
                    >
                      F
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 3.4 }}
                    >
                      i
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 3.5 }}
                    >
                      x
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 3.6 }}
                    >
                      e
                    </motion.span>
                    <motion.span
                      className="slideInControls"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 3.7 }}
                    >
                      r
                    </motion.span>
                  </>
                )}
              </h1>
            </Col>
          </Row>
          <Row style={{ flex: "20%" }}>
            <Col className="textColo">
              <p className="parrafooo">
                BugFixer es la solución perfecta para tus proyectos.
                Colaboración de clientes, administradores y depuradores de forma
                ágil y sencilla. Optimiza tu proceso de desarrollo y garantiza
                la calidad de tu proyecto
              </p>
            </Col>
          </Row>
          <Row style={{ flex: "15%" }}>
            <Col className="contenedor-iconooo">
              <BsArrowDown className="iconooo" />
            </Col>
          </Row>
        </Col>

        <Col md={4} className="d-flex flex-column columna2 ">
          <Row style={{ flex: "100%" }}>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center a"
            >
              <Image
                src={Usuario}
                alt={"Imagen usuario estandar"}
                className="Imagen"
              />
            </Col>

            <Col
              md={8}
              className="d-flex justify-content-center align-items-center Columna-formulario "
            >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="formulario"
                    type="email"
                    placeholder="Ingresar Email"
                    name="email"
                    value={email}
                    onChange={handleInputChangue}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    className="formulario"
                    type="password"
                    placeholder="Ingresar contraseña"
                    onChange={handleInputChangue}
                    value={contrasena}
                    name="contrasena"
                  />
                </Form.Group>
                <Form.Group className="mb-4 ss" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Recordarme" />
                  <Form.Text className="text-muted sssssss">
                    ¿Contraseña olvidada?
                  </Form.Text>
                </Form.Group>
                <Button
                  className="formulario"
                  onClick={handleSubmit}
                  variant="dark"
                  type="submit"
                  name="ingresar"
                >
                  Iniciar sesion
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
