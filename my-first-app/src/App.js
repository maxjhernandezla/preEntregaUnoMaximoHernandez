import { ItemCount } from "./components/ItemCount/ItemCount.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";
import { Navbar } from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a MaxShoes" />
      <ItemCount />
    </div>
  );
}

export default App;
