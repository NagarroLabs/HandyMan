import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../shared/context/auth-context";
import { useHttpClient } from "../shared/hooks/http-hook";

function PrivateRoute({ component: Component, ...rest }) {
  const httpClient = useHttpClient();

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <Route
          {...rest}
          render={(props) => {
            // 1. Redirect to login if not logged in.
            console.log("In PR", auth);
            if (!auth.isLoggedIn) return props.history.push("/login");

            // 3. Render component
            return <Component auth={auth} httpClient={httpClient} {...props} />;
          }}
        />
      )}
    </AuthContext.Consumer>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

export default PrivateRoute;
