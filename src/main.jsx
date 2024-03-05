import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import axios from "axios";
// persistor.purge();

// axios.defaults.baseURL = import.meta.env.VITE_URL_LOCAL;
axios.defaults.baseURL = import.meta.env.VITE_URL_PRODUCTION;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Router>
          <ThemeProvider>
            <App />
          </ThemeProvider>
          <Toaster />
        </Router>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
