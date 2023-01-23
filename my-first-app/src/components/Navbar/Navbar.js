import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { CartWidget } from "../CartWidget/CartWidget";
import "./Navbar.scss";

export const Navbar = () => {
  const { user, logOut } = useContext(LoginContext);

  return (
    <div className="header">
      <header className="header__container">
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
      <div className="header__welcome">
        <p>Bienvienidx {user.email}</p>
        <button className="btn btn-danger" onClick={logOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};
