import React, { useRef, useContext } from 'react';
import authContext from '../context/auth/authContext';
import Container from '@material-ui/core/Container';

const Register = () => {
  const { register } = useContext(authContext);
  const regNameRef = useRef();
  const regEmailRef = useRef();
  const regPasswordRef = useRef();

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
