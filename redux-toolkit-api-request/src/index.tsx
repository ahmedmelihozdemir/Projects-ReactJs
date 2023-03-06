import React from "react";
import App from "./App";
import "./index.css";

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import store from "./store/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
