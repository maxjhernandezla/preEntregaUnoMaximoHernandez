import { Link } from "react-router-dom";
import "./SideBar.scss";

export const SideBar = () => {
  return (
    <div className="sidebar__container">
      <ul className="list__container">
        <Link to="/productos/Nike" className="list__title">
          Nike
        </Link>
        <Link to="/productos/Nike/Nike-SB">Nike SB</Link>
        <Link to="/productos/Nike/Jordan">Air Jordan</Link>
        <Link to="/productos/Nike/Basketball">Basketball</Link>
      </ul>
      <ul className="list__container">
        <Link to="/productos/Adidas" className="list__title">
          Adidas
        </Link>
        <Link to="/productos/Adidas/Originals">Originals</Link>
        <Link to="/productos/Adidas/Run">Run</Link>
        <Link to="/productos/Adidas/Basketball">Basketball</Link>
      </ul>
      <ul className="list__container">
        <Link to="/productos/Under-Armor" className="list__title">
          Under Armor
        </Link>
        <Link>Curry</Link>
        <Link>Project Rock</Link>
      </ul>
    </div>
  );
};
