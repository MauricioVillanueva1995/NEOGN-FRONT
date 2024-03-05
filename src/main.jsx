import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Search from "./views/Search.jsx";
// persistor.purge();

// axios.defaults.baseURL = import.meta.env.VITE_URL_LOCAL;
axios.defaults.baseURL = import.meta.env.VITE_URL_PRODUCTION;

const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <App />,
    children: [
      {
        path: "/vite-react-router/",
        element: <Home />,
      },
      {
        path: "/vite-react-router/",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <RouterProvider router={router}>
          <ThemeProvider>
          </ThemeProvider>
          <Toaster />
        </RouterProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
