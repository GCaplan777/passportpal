import React, { useRef, useContext } from 'react';
import authContext from '../context/auth/authContext';
import { LOGIN } from '../context/actions';
import axios from 'axios';
import Container from '@material-ui/core/Container';

const Register = () => {
  const { register } = useContext(authContext);
  const regNameRef = useRef();
  const regEmailRef = useRef();
  const regPasswordRef = useRef();

  //   const doLogin = async () => {
  //     const { data } = await axios.post('/auth/login', {
  //       email: emailRef.current.value,
  //       password: passwordRef.current.value,
  //     });

  //     console.log(data);
  //     dispatch({
  //       type: LOGIN,
  //       user: data,
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     doLogin();
  //   };

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
      <Container component="main" maxWidth="xs">
        {/* <p>Please enter your information to login:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" ref={emailRef} />
        <input type="text" placeholder="password" ref={passwordRef} />
        <button type="submit">Submit</button>
      </form> */}

        <p>Please enter your information to signup:</p>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="name" ref={regNameRef} />
          <input type="email" placeholder="email" ref={regEmailRef} />
          <input type="password" placeholder="password" ref={regPasswordRef} />
          <button type="submit">Submit</button>
        </form>
      </Container>
    </>
  );
};

export default Register;