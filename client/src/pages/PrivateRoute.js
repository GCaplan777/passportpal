import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = false;
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props);
        return authenticated ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
