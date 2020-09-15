import React, { useContext, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import authContext from '../context/auth/authContext';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Login = () => {
  const { login, user } = useContext(authContext);
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (user) {
      history.push('/');
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
      <Container component="main" maxWidth="xs">
        <p>Please enter your information to login:</p>
        <form onSubmit={handleSumbit}>
          <input type="text" placeholder="email" ref={emailRef} />
          <input type="text" placeholder="password" ref={passwordRef} />
          <button type="submit">Submit</button>
        </form>
      </Container>
    </>
  );
};

export default Login;
