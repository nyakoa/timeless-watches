// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./assets/components/App.jsx";
import Shop from "./assets/pages/Shop.jsx";
import WatchDetails from "./assets/pages/WatchDetails";
import Cart from "./assets/pages/Cart.jsx";
import { CartContextProvider } from "./assets/context/CartContext.jsx"; // <-- your context file

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/watch/:id" element={<WatchDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </StrictMode>
);
