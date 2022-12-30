import { CartWidget } from "../CartWidget/CartWidget";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src="./img/logo-no-background.png" />
      </a>

      <nav className="header__nav">
        <a href="#">Deportivos</a>
        <a href="#">Urbanos</a>
        <a href="#">Marcas</a>
        <a href="#">Ofertas</a>
      </nav>
      <CartWidget />
    </header>
  );
};
