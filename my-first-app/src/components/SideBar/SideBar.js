import { Link } from "react-router-dom";
import "./SideBar.scss";

export const SideBar = () => {
  return (
    <div className="sidebar__container">
      <ul className="list__container">
        <h6 className="list__title">Nike</h6>
        <Link>Nike SB</Link>
        <Link>Air Jordan</Link>
        <Link>Basketball</Link>
      </ul>
      <ul className="list__container">
        <h6 className="list__title">Adidas</h6>
        <Link>Original</Link>
        <Link>Run</Link>
        <Link>Basketball</Link>
      </ul>
      <ul className="list__container">
        <h6 className="list__title">Under Armor</h6>
        <Link>Curry</Link>
        <Link>Project Rock</Link>
      </ul>
    </div>
  );
};
