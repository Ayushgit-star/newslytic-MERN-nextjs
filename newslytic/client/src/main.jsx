import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StoreProvider from "./context/StoreProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <>
      <App />
      <Toaster />
    </>
  </StoreProvider>
);

// StoreProvider gives all components access to global state.
// Toaster allows all components to show toast notifications.
// Both are placed at the top level in main.jsx so their features are available app-wide.