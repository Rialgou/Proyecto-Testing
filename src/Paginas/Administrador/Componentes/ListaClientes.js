import { useContext } from "react";
import { Card, Col, Container, Row, Badge } from "react-bootstrap";
import ContextoAdministrador from "../Contextos/ContextoAdministrador";
import "../Estilos/ListaClientes.css";

function ListaClientes() {
  const { listaClientes } = useContext(ContextoAdministrador);

  return (
    <Container fluid className="lista-clientes">
      <Row md={3} className="g-4">
        {listaClientes.map(({ cuenta, nombre }) => (
          <Col key={cuenta.id}>
            <Card className="h-100 card-cliente">
              <Card.Body>
                <Card.Title>{nombre || "No posee nombre"}</Card.Title>
                <Card.Text>{cuenta.correo || "no posee correo"}</Card.Text>
                <Card.Text>
                  Usuario:{" "}
                  <Badge pill bg="primary">
                    {cuenta.usuario || "No posee nombre de usuario"}
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListaClientes;
