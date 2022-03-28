import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./assets/dest/style.min.css";
import "./assets/dest/stylelibs.min.css";
import "./assets/dest/fonts.css";
import "./assets/styles/styles.scss";
import "./assets/styles/custom.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./stores";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <AuthProvider> */}
        <App />
        {/* </AuthProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
