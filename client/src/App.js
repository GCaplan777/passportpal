import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Container from "@material-ui/core/Container";
import AuthState from "./context/auth/AuthState";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import Chat from "./pages/Chat";
import UploadFile from "./pages/UploadFile";
import ListUser from "./pages/ListUser";
import ListGroup from "./pages/ListGroup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import Documents from "./pages/Documents";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthState>
      <Container fluid>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/packinglist" component={ListUser} />
            <PrivateRoute
              exact
              path="/grouppackinglist"
              component={ListGroup}
            />
            <PrivateRoute exact path="/chat" component={Chat} />
            <PrivateRoute exact path="/upload" component={UploadFile} />
            <PrivateRoute exact path="/documents" component={Documents} />
          </Switch>
        </Router>
        <Footer />
      </Container>
    </AuthState>
  );
}

export default App;
