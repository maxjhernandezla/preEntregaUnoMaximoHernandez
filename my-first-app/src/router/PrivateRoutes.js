import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer.js";
import { Navbar } from "../components/Navbar/Navbar.js";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer.js";
import { Cart } from "../components/Cart/Cart.js";
import { Routes, Route, Navigate } from "react-router-dom";
import { Checkout } from "../components/Checkout/Checkout.js";

export const PrivateRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer title="Nuestros Productos" />}
        />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
