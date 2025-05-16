import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import Home from "./pages/home.tsx";
import UseStorePage from "./pages/react/use-store/use-store.tsx";
import "./main.css";
import Dashboard from "./pages/dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="react/use-store" element={<UseStorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
