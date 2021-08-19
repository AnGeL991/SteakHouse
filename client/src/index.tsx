import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { history } from "_helpers";
import { Provider } from "react-redux";
import store from "configureStore";

const App = lazy(() => import("./App"));

function InitApp() {
  ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<></>}>
        <App {...{ history }} />
      </Suspense>
    </Provider>,
    document.getElementById("root")
  );
}

InitApp();

reportWebVitals();
