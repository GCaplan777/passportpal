import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
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
import StickyFooter from "./components/StickyFooter";

function App() {
  return (
    <AuthState>
      <Container>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/packinglist" component={ListUser} />
            <Route exact path="/grouppackinglist" component={ListGroup} />
            <Route exact path="/upload" component={UploadFile} />
            <PrivateRoute exact path="/chat" component={Chat} />
          </Switch>
        </Router>
      </Container>
      <StickyFooter />
    </AuthState>
  );
}

export default App;
