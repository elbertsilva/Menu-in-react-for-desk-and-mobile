import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../components/Menu";

const Routes = () => {
  return (
    <BrowserRouter basename="/Menu-in-react-for-desk-and-mobile">
      <Switch>
        <Route exact path="/" render={() => <Main />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
