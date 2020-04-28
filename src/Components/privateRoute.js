import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  setTimeout(() => {
    console.log("waiting!");
  }, 7000);
  setTimeout(() => {
    console.log("waiting!");
  }, 7000);
  const currentUser = localStorage.getItem("currentUser");
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};

export default PrivateRoute;
