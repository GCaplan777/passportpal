import React, { useRef, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import authContext from "../context/auth/authContext";
import Hero from "../components/Hero";

const Register = () => {
  const { register, user } = useContext(authContext);
  const regNameRef = useRef();
  const regEmailRef = useRef();
  const regPasswordRef = useRef();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  const handleSignup = (e) => {
    e.preventDefault();

    register({
      email: regEmailRef.current.value,
      password: regPasswordRef.current.value,
      name: regNameRef.current.value,
    });
  };

  return (
    <>
      <div class="container bg-white">
        <Hero />
        <p className="text-center bg-white">
          Please enter your information to signup:
        </p>
        <div class="row justify-content-center align-items-center pb-5 mb-5">
          <form onSubmit={handleSignup}>
            <input type="text" placeholder="name" ref={regNameRef} />
            <input type="email" placeholder="email" ref={regEmailRef} />
            <input
              type="password"
              placeholder="password"
              ref={regPasswordRef}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
