import { Link } from "react-router-dom";
import "./SideBar.scss";

export const SideBar = ({}) => {
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
        <Link to="/productos/Adidas/Running">Running</Link>
        <Link to="/productos/Adidas/Basketball">Basketball</Link>
      </ul>
      <ul className="list__container">
        <Link to="/productos/UnderArmor" className="list__title">
          Under Armor
        </Link>
        <Link to="/productos/UnderArmor/Curry">Curry</Link>
        <Link to="/productos/UnderArmor/Project-Rock">Project Rock</Link>
      </ul>
    </div>
  );
};
