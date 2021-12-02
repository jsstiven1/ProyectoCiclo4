import React from "react";
import { Card, Container, Row, CardGroup } from "react-bootstrap";

import Menu from "../../navbar/cliente/navbarcliente";
import Footer from "../../footer/footer";
import "./equipo.css";

import imgKeyner from "../../img/keyner.jpg";
import imgStiven from "../../img/stiven.jpg";
import imgWillian from "../../img/willian.jpeg";

export default class Equipo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container id="equipo-container">
        <Menu />
        <Row>
          <h1 id="color-texto">Equipo De Trabajo</h1>
        </Row>
        <Row>
          <CardGroup id="grupo-tarjetas">
            <Card>
              <Card.Img id="img-equipo" variant="top" src={imgStiven} />
              <Card.Body>
                <Card.Title>John Stiven Vasquez Ortega</Card.Title>
                <Card.Text>
                  Desarrollador de paginas web, programador y Scrum master.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img id="img-equipo" variant="top" src={imgWillian} />
              <Card.Body>
                <Card.Title>Willian Humberto Sanchez Mora</Card.Title>
                <Card.Text>
                  Desarrollador de paginas web, programador, Product Owner.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img id="img-equipo" variant="top" src={imgKeyner} />
              <Card.Body>
                <Card.Title>Keyner Vega Fadul</Card.Title>
                <Card.Text>
                  Desarrollador de paginas web, programador, integrante del
                  equipo de desarrollo.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
        <Row id="margin-home-carousel">
          <Footer />
        </Row>
      </Container>
    );
  }
}
