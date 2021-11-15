import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../login/login";
import Home from "../pages/home/home";
import Team from "../pages/team/team";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path={["/team"]} component={Team} />
        <Route exact path={["/login"]} component={Login} />
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
