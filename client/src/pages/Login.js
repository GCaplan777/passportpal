import React from "react";
import AuthenticatedApp from "..components/AuthenticatedApp";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input type="text"></input>
    </form>
  );
};

export default Login;
