import React from "react";
import { Row, Card, Container, Col, Button } from "react-bootstrap";

import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import Menu from "../../navbar/navbar";
import "./tarjetas.css";

export default class Tarjetas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      rows: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ loading: true });
    request
      .get("/productos")
      .then((response) => {
        this.setState({
          rows: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  }

  render() {
    return (
      <Container id="tarjeta-container">
        <Loading show={this.state.loading} />
        <Menu />
        <Row>
          <h1>Productos Oficiales</h1>
        </Row>
        <Row id="tarjeta-row" xs={1} md={2} className="g-4">
          {this.state.rows.map((producto, idx) => (
            <Col>
              <Card>
                <Card.Img
                  id="imagem-tarjeta"
                  variant="top"
                  src={producto.imagen}
                />
                <Card.Body>
                  <Card.Title>
                    <h2>{producto.nombre}</h2>
                  </Card.Title>
                  <Card.Text>
                    <h4>Descripcion:</h4>
                    <br />
                    <br />
                    <h6>{producto.descripcion}</h6>
                  </Card.Text>
                  <Card.Text>
                    <br />
                    <h4>Precio:</h4>
                    <br />
                    <br />
                    <h6>${producto.precio}</h6>
                  </Card.Text>
                  <br />
                  <Button id="boton-tarjeta" variant="primary">
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
