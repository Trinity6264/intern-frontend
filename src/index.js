import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { userLogin } from "./features/user/userSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

const creden = localStorage.getItem("user") || null;
if (creden) store.dispatch(userLogin(JSON.parse(creden)));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
