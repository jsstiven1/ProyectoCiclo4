import React from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import "./navbarcliente.css";
import logoMenu from "../../img/Logo.png";

export default class MenuCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar fixed="top" id="navbar-cliente" variant="primary">
        <Container variant="dark">
          <img src={logoMenu} className="logo-menu" />
          <Navbar.Brand href="/">Humsti</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="productosoficiales">
            Productos Oficiales
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="equipo">Equipo</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>*/}
            </Nav>
            <Button id="boton-navbar-cliente" href="login">
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
