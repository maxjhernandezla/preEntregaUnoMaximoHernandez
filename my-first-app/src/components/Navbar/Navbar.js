import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="header__nav">
      <Link to="/productos/Jordan">Jordan</Link>
      <Link to="/productos/Originals">Originals</Link>
      <Link to="/productos/Basketball">Basketball</Link>
      <Link to="/productos/Nike-SB">Nike SB</Link>
    </nav>
  );
};
