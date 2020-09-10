import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useGlobalContext } from "./context/GlobalContext";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/AuthenticatedApp";

function App() {
  const [state, dispatch] = useGlobalContext();

  return (
    <div className="container">
      {state.user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chat" component={Chat} />
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
