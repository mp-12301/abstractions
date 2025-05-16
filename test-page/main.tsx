import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import UseStorePage from "./pages/react/use-store/use-store.tsx";
import "./main.css";
import Dashboard from "./pages/dashboard.tsx";
import UseEffectWhenPage from "./pages/react/use-effect-when/use-effect-when.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="react/use-store" element={<UseStorePage />} />
          <Route path="react/use-effect-when" element={<UseEffectWhenPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
