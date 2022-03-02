import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Header>
      <App />
    </Header>
  </BrowserRouter>,
  document.getElementById("root")
);
