import { Cart } from "../components/Cart/Cart.js";
import { Routes, Route, Navigate } from "react-router-dom";
import { Checkout } from "../components/Checkout/Checkout.js";
import { Principal } from "../components/Principal/Principal.js";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer.js";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer.js";

export const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/productos/:brand" element={<ItemListContainer />} />
        <Route
          path="/productos/:brand/:categoryId"
          element={<ItemListContainer />}
        />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
