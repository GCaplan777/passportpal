import React, { useContext, useRef } from 'react';
import authContext from '../context/auth/authContext';

const Login = () => {
  const { login } = useContext(authContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSumbit = async (e) => {
    e.preventDefault();
    login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <>
      <p>Please enter your information to login:</p>
      <form onSubmit={handleSumbit}>
        <input type="text" placeholder="email" ref={emailRef} />
        <input type="text" placeholder="password" ref={passwordRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
