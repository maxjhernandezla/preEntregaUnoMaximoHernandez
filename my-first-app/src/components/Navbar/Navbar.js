import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="header__nav">
      <Link to="/productos/Nike">Nike</Link>
      <Link to="/productos/Adidas">Adidas</Link>
      <Link to="/productos/UnderArmor">Under Armor</Link>
      {/* <Link to="/productos/Basketball">Basketball</Link>
      <Link to="/productos/Nike-SB">Nike SB</Link> */}
    </nav>
  );
};
