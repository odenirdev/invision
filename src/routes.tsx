import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import NotFound from "./pages/NotFound";

import { isAuthenticated } from "./service/auth";

const Authenticated = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={NotFound} />
      <Route path="/auth" exact component={Login} />
      <Route path="/create-account" exact component={CreateAccount} />
      <Authenticated path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
