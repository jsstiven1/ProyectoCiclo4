import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../login/login";

import Home from "../page/home/home";
import PrivateRouter from "../auth/privaterouter";
import Producto from "../productos/index";
import ProductosOficiales from "../page/productos_oficiales/productos_oficiales";
import Equipo from "../page/equipo/equipo";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/"]} component={Home} />
        <Route exact path={["/login"]} component={Login} />
        <Route
          exact
          path={["/productosoficiales"]}
          component={ProductosOficiales}
        />
        <Route exact path={["/equipo"]} component={Equipo} />
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
