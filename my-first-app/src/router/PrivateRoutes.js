import { Cart } from "../components/Cart/Cart.js";
import { Routes, Route, Navigate } from "react-router-dom";
import { Checkout } from "../components/Checkout/Checkout.js";

export const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
