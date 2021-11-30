import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./footer.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <footer>
          <Row id="margin-footer">
            <Col className="col-lg-6 col-md-12 mb-4">
              <h1 id="texto-footer" className="mb-3">
                Humsti
              </h1>
              <p id="texto-footer">
                Es una empresa dedicada a la produccion de productos textiles
                para todo publico.
              </p>
            </Col>
            <Col md={4}>
              <h5 id="texto-footer" className="mb-3">
                links
              </h5>
              <ul className="list-unstyled mb-0" id="texto-footer">
                <li className="mb-1">
                  <a id="links-footer" href="/">
                    Inicio
                  </a>
                </li>
                <li className="mb-1">
                  <a id="links-footer" href="productosoficiales">
                    Productos Oficiales
                  </a>
                </li>
                <li className="mb-1">
                  <a id="links-footer" href="equipo">
                    Equipo de trabajo
                  </a>
                </li>
                <li>
                  <a
                    id="links-footer"
                    href="https://github.com/jsstiven1/ProyectoCiclo4"
                  >
                    Repositorio GitHub
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </footer>
      </Container>
    );
  }
}
