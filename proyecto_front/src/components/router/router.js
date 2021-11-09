import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "../login/login";
export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={login} />
      </Switch>
    </Router>
  );
}
