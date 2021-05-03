import "../node_modules/bootstrap/dist/css/bootstrap-reboot.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "./assets/css/main.css";
import "./assets/css/fonts.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
const loader = document.querySelector("#preloader");

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App hideLoader={hideLoader} showLoader={showLoader} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
