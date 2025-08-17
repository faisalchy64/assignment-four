import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";
import store from "./redux/app/store.ts";
import App from "./App.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <App />
        <Toaster position="top-right" richColors={true} duration={5000} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
