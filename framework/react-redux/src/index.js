import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import App from "./containers/App";
import { loadState, saveState } from "./localStorage";
import "./css/styles.css";

const persistedState = loadState();

let store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState({
    staves: store.getState().staves
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
