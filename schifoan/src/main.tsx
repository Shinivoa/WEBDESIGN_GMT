import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.tsx";
import Hues from "../src/Hues.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Hues />
    <App />
  </StrictMode>
);
