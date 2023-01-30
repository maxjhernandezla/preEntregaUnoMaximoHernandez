import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav className="header__nav">
      <div className="links__container">
        <Link to="/productos/Nike">Nike</Link>
        <Link to="/productos/Adidas">Adidas</Link>
        <Link to="/productos/UnderArmor">Under Armor</Link>
      </div>
      {/* <Link to="/productos/Basketball">Basketball</Link>
      <Link to="/productos/Nike-SB">Nike SB</Link> */}
    </nav>
  );
};
