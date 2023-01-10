import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="/img/logo-no-background.png" />
      </Link>

      <nav className="header__nav">
        <Link to="/productos/Jordan">Jordan</Link>
        <Link to="/productos/Originals">Originals</Link>
        <Link to="/productos/Basketball">Basketball</Link>
        <Link to="/productos/Nike-SB">Nike SB</Link>
      </nav>
      <CartWidget />
    </header>
  );
};
