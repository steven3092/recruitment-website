  import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import{ AuthContext } from './Context/Auth';

//This is a private route we use when we try to go to /Myspace through the URL. You are redirected to the SignIn page.

function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
       !!currentUser ? (
          <RouteComponent {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/SignIn", state: { referer: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;