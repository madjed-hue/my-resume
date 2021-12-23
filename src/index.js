import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n";

const loaderMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loaderMarkup}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Suspense>,
  document.getElementById("root")
);
