import { ItemCount } from "./components/ItemCount/ItemCount.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";
import { Navbar } from "./components/Navbar/Navbar.js";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { Item } from "./components/Item/Item.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer title="Nuestros Productos" />}
        />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
      </Routes>
      {/* <ItemDetailContainer itemId={15} /> */}
    </BrowserRouter>
  );
}

export default App;
