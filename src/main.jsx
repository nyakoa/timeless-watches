// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./assets/components/App.jsx";
import Shop from "./assets/pages/Shop.jsx";
import WatchDetails from "./assets/pages/WatchDetails";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/watch/:id" element={<WatchDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
