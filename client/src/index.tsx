import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { history } from "_helpers";

const App = lazy(() => import("./App"));

function InitApp() {
  ReactDOM.render(
    <React.StrictMode>
      <Suspense fallback={<></>}>
        <App {...{ history }} />
      </Suspense>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

InitApp();

reportWebVitals();
