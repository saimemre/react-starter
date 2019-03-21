import React from "react";
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest })  => {
    return (
      <Route
        {...rest}
        render={props =>
          localStorage.getItem("authToken") ? (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }


export default PublicRoute