import { LoginProvider } from "./context/LoginContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext.js";
import { AppRouter } from "./router/AppRouter.js";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
