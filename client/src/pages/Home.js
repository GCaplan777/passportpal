import React from "react";
import { useGlobalContext } from "./context/GlobalContext";
import AuthenticatedApp from "../components/AuthenticatedApp";
import UnauthenticatedApp from "../components/AuthenticatedApp";

const Home = () => {
  const [state, dispatch] = useGlobalContext();
  return <div>Hello world</div>;
  {
    state.user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />;
  }
};

export default Home;
