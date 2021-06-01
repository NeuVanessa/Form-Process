import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "./pages/Form";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes />
        <Route path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}
