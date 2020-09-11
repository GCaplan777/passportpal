import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import Chat from "./pages/Chat";
import UploadFile from "./pages/UploadFile";
import PackingList from "./components/PackingList";
import ButtonAppBar from "./components/ButtonAppBar";

function App() {
  return (
    <div className="container">
      <ButtonAppBar />;
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/chat" component={Chat} />
          </Switch>
        </Router>
      </AuthState>
      <PackingList />;
    </div>
  );
}

export default App;
