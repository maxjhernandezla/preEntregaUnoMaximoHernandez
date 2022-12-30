import { ItemCount } from "./components/ItemCount/ItemCount.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";
import { Navbar } from "./components/Navbar/Navbar.js";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <ItemListContainer greeting="NUESTROS PRODUCTOS" />
      <ItemCount />
    </Fragment>
  );
}

export default App;
