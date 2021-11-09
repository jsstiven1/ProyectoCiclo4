import React from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import "./login.css";
export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      pass: "",
    };
  }
  iniciarSesion() {
    alert(this.state.usuario);
  }
  render() {
    return (
      <Container id="login-container">
        <Row>
          <Col>
            <Image
              src="https://i.pinimg.com/236x/f1/f5/15/f1f5153cabe32239c85842fb4d0ba3c8--ps.jpg"
              roundedCircle
            />
            <Row>
              <h2>Iniciar Sesion</h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xl={{ span: 4, offset: 4 }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label style={{ float: "left" }}>Usuario</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        this.setState({
                          usuario: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={{ float: "left" }}>
                      Contraseña
                    </Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        this.setState({
                          pass: e.target.value,
                        })
                      }
                      type="password"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={() => {
                      this.iniciarSesion();
                    }}
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
  }
}
