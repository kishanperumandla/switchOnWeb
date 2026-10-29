import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { store } from "./pages/bank/store.ts";
import AuthProvider from "./contexts/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
);
