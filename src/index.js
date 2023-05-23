import ReactDOM from "react-dom/client";
import "typeface-roboto";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import store from "redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
