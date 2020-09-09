import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useGlobalContext } from "./context/GlobalContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [state, dispatch] = useGlobalContext();

  return (
    <div className="App">
      {state.user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
