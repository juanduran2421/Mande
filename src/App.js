import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// importamos las paginas
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import TrabajarPage from "./pages/TrabajarPage";
import TarjetaUsuarioPage from "./pages/TarjetaUsuarioPage";
import ServicioUsuarioPage from "./pages/ServicioUsuarioPage";
import PagoPage from "./pages/PagoPage";
import Server from "./server/server";

//importamos los componentes
import Footer from "./components/Footer";

//importamos en index.js bootstrap

//importamos el estilo
import "./pages/style.scss";

//npm run start
//npm install --save react-router-dom
//npm install --save react-bootstrap bootstrap
//npm install --save bootstrap
//npm install --save node-sass
//npm install --save express
//npm install --save react-hook-form

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="all"></div>
        <Container className="p-0" fluid={true}>
          <div className="Nav">
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>MANDE</Navbar.Brand>
              <Navbar.Toggle
                className="border-0"
                aria-controls="navbar-toogle"
              ></Navbar.Toggle>
              <Navbar.Collapse id="navbar-toogle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                  <Link className="nav-link" to="/register">
                    Registro
                  </Link>
                  <Link className="nav-link" to="/trabajar">
                    Trabajar
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>

          <div className="Contenido">
            {/* Router HomePage */}

            <Route path="/" exact>
              <HomePage />
            </Route>

            {/* Router LoginPage */}

            <Route path="/login">
              <LoginPage />
            </Route>

            {/* Router RegisterPage */}

            <Route path="/register">
              <RegisterPage />
            </Route>

            {/* Router TrabajarPage */}

            <Route path="/trabajar">
              <TrabajarPage />
            </Route>

            {/* Router TarjetaUsuarioPage */}

            <Route path="/tarjeta">
              <TarjetaUsuarioPage />
            </Route>

            {/* Router ServicioUsuarioPage */}

            <Route path="/servicio">
              <ServicioUsuarioPage />
            </Route>

            {/* Router PagoPage */}

            <Route path="/pago">
              <PagoPage />
            </Route>
          </div>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
