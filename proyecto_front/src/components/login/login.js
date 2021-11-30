import React from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { APIHOST as host } from "../../app.json";
import "./login.css";
import { isNull } from "util";
import Cookies from "universal-cookie";
import { CalculaTiempoSesion } from "../helper/helper";
import Loading from "../loading/loading";

import logo from "../img/usuario-Login.png";

const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }
  iniciarSesion() {
    this.setState({ loading: true });
    axios
      .post(`${host}/usuarios/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
      })
      .then((response) => {
        if (isNull(response.data.token)) {
          alert("Usuario y/o contraseña invalidos");
        } else {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: CalculaTiempoSesion(),
          });
          this.props.history.push("/productos");
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <Container id="login-container" className="rounded">
        <Loading show={this.state.loading} />
        <Row className="align-items-stretch">
          <Col
            id="imagen-panel"
            className="d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"
          >
            <Image id="imagen-lateral" />
          </Col>
          <Col>
            <img src={logo} id="imagen-login" className="rounded-circle" />
            <Row>
              <h2>Iniciar Sesion</h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 8, offset: 3 }}
                lg={{ span: 8, offset: 3 }}
                xl={{ span: 8, offset: 3 }}
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
                  <br />
                  <br />
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
