import { ItemCount } from "./components/ItemCount/ItemCount.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";
import { Navbar } from "./components/Navbar/Navbar.js";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { Item } from "./components/Item/Item.js";
import { CartProvider } from "./context/CartContext.js";
import { Cart } from "./components/Cart/Cart.js";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title="Nuestros Productos" />}
          />
          <Route
            path="/productos/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
