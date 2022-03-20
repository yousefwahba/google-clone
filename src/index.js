import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { StateContextProvider } from "./context/ResultContextProvider.js";

ReactDOM.render(
  <StateContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateContextProvider>,
  document.getElementById("root")
);
