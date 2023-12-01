import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { store, persistor } from "./redux/store/store.js";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}
        >
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
