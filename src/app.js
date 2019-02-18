import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./assets/scss/app.scss";


import BaseLayout from "./layouts/base";

const App = () => (

  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>

);

ReactDOM.render(<App />, document.getElementById("app"));
