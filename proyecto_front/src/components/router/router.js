import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../login/login";

import Home from "../page/home/home";
import PrivateRouter from "../auth/privaterouter";
import Producto from "../productos/index";
import Lista from "../page/tarjetas/tarjetas";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/"]} component={Home} />
        <Route exact path={["/login"]} component={Login} />
        <Route exact path={["/lista"]} component={Lista} />
        <PrivateRouter exact path={["/productos"]} component={Producto} />
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              pagina no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
