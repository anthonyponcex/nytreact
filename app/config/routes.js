import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import App from "../App";


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
  </Router>
);

export default routes;
