import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme accentColor="blue" grayColor="sand" radius="large" scaling="95%">
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </React.StrictMode>
);

reportWebVitals();
