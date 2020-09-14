import React, { useReducer } from 'react';
import axios from 'axios';
import authReducer from './authReducer';
import authContext from './authContext';
import { REGISTER, LOGIN, LOGOUT } from '../actions';

const AuthState = ({ ...props }) => {
  const initialState = JSON.parse(localStorage.getItem('user')) || null;

  const [state, dispatch] = useReducer(authReducer, initialState);

  //register
  const register = async ({ email, password, name }) => {
    const { data } = await axios.post('/auth/register', {
      email,
      password,
      name,
    });

    dispatch({
      type: REGISTER,
      payload: data,
    });
  };

  //login
  const login = async ({ email, password }) => {
    const { data } = await axios.post('/auth/login', {
      email,
      password,
    });

    dispatch({
      type: LOGIN,
      payload: data,
    });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <authContext.Provider
      value={{ register, user: state, login, logout }}
      {...props}
    />
  );
};

export default AuthState;
