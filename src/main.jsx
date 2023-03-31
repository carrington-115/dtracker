import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SkeletonTheme } from "react-loading-skeleton";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SkeletonTheme>
      <App />
    </SkeletonTheme>
  </Provider>
);
