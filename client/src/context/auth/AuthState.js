import React, { useReducer } from 'react';
import axios from 'axios';
import authReducer from './authReducer';
import authContext from './authContext';
import { REGISTER, LOGIN } from '../actions';

const AuthState = ({ ...props }) => {
  const initialState = { user: null };

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

  return <authContext.Provider value={{ register, state, login }} {...props} />;
};

export default AuthState;
