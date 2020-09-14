import React, { useContext } from 'react';
import authContext from '../context/auth/authContext';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
