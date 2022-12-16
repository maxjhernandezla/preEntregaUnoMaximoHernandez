import "./Navbar.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navbar = () => {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        Max Shoes
      </a>

      <nav className="header__nav">
        <a href="#">Deportivos</a>
        <a href="#">Urbanos</a>
        <a href="#">Marcas</a>
        <a href="#">Ofertas</a>
      </nav>
      <a href="#" className="cart__container">
        <ShoppingCartIcon className="cart" fontSize="medium" />
        <span className="cart__number">0</span>
      </a>
    </header>
  );
};
