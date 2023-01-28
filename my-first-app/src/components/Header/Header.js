import { useContext } from "react";
import { Navbar } from "../Navbar/Navbar.js";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { CartWidget } from "../CartWidget/CartWidget";
import "./Header.scss";

export const Header = () => {
  const { user, logOut, Login } = useContext(LoginContext);

  return (
    <div className="header">
      <header className="header__container">
        <Link to="/" className="header__logo">
          <img src="/img/logo-no-background.png" />
        </Link>
        <CartWidget />
        {!user.logged ? (
          <div className="header__welcome">
            <Link to="/login" className="btn btn-primary">
              Log In
            </Link>
          </div>
        ) : (
          <div className="header__welcome">
            <button className="btn btn-danger" onClick={logOut}>
              Log Out
            </button>
          </div>
        )}
      </header>
      <Navbar />
    </div>
  );
};
