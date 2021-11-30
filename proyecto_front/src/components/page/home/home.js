import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";

import Menu from "../../navbar/cliente/navbarcliente";
import Footer from "../../footer/footer";
import "./home.css";

import ropa_1 from "../../img/ropa_1.jpeg";
import ropa_2 from "../../img/ropa_2.jpeg";
import ropa_3 from "../../img/ropa_3.jpeg";
import ropa_4 from "../../img/ropa_4.jpeg";
import ropa_5 from "../../img/ropa_5.jpeg";
import ropa_6 from "../../img/ropa_6.jpeg";
import ropa_7 from "../../img/ropa_7.jpeg";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container id="container-home">
        <Menu />
        <Row>
          <h1 id="color-fuente-home1">Bienvenidos a Humsti</h1>
        </Row>
        <Row id="margin-home-carousel">
          <Carousel id="carousel-home">
            <Carousel.Item>
              <img
                id="img-home"
                className="d-block w-100"
                src={ropa_1}
                alt="First slide"
              />
              <Carousel.Caption id="color-fuente-home1">
                <h3>Grandes Diseños</h3>
                <p id="color-fuente-home1">
                  {" "}
                  <b>
                    Camisas, camisetas, blusas, etc. con grandes diseños y de
                    diferentes estilos.
                  </b>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="img-home"
                className="d-block w-100"
                src={ropa_2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Ropa para todas las edades</h3>
                <p>
                  <b>Diseños para niños, adultos y adolescentes.</b>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="img-home"
                className="d-block w-100"
                src={ropa_3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="img-home"
                className="d-block w-100"
                src={ropa_4}
                alt="four slide"
              />
              <Carousel.Caption id="color-fuente-home">
                <h3>Todo tipo de Ropa</h3>
                <p>
                  <b>
                    Hay de todo jeans, abrigos, camisas, etc. todo de diferentes
                    marcas y diseños.
                  </b>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="img-home"
                className="d-block w-100"
                src={ropa_5}
                alt="five slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="img-home"
                className="d-block w-100"
                src={ropa_6}
                alt="six slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="img-home"
                className="d-block w-100"
                src={ropa_7}
                alt="seven slide"
              />
              <Carousel.Caption>
                <h3>Todo Tipo de Conjuntos</h3>
                <p>
                  <b>Encotraras todo tipo de conjuntos de diferentes marcas.</b>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row id="margin-home-carousel">
          <Footer />
        </Row>
      </Container>
    );
  }
}
