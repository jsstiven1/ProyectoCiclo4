import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login/login.js";
import Menu from "./components/navbar/navbar.js";
import Router from "./components/router/router.js";

function App() {
  return (
    <div className="App">
      <Menu />
      <Router />
    </div>
  );
}

export default App;
