import React, { useContext, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import authContext from "../context/auth/authContext";
import Hero from "../components/Hero";

const Login = () => {
  const { login, user } = useContext(authContext);
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  const handleSumbit = async (e) => {
    e.preventDefault();
    login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <>
      <div class="container bg-white">
        <Hero />
        <p className="text-center bg-white">
          Please enter your information to login:
        </p>
        <div class="row justify-content-center align-items-center pb-5 mb-5">
          <form onSubmit={handleSumbit}>
            <input type="text" placeholder="email" ref={emailRef} />
            <input type="text" placeholder="password" ref={passwordRef} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
