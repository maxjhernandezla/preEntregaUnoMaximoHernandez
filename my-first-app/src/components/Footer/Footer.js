import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__section">
        <h4>Institucional</h4>
        <ul>
          <li>
            <a href="#">Quienes somos</a>
          </li>
          <li>
            <a href="#">Terminos y condiciones</a>
          </li>
          <li>
            <a href="#">Defensa al consumidor</a>
          </li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Marcas</h4>

        <ul>
          <li>
            <Link to={"/productos/Nike"}>Nike</Link>
          </li>
          <li>
            <Link to={"/productos/Adidas"}>Adidas</Link>
          </li>
          <li>
            <Link to={"/productos/UnderArmor"}>Under Armor</Link>
          </li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Contato</h4>

        <ul>
          <li>
            <a href="mailto:maximojhernandezla@gmail.com">Mail</a>
          </li>
          <li>
            <a href="https://wa.me/1566603219" target="_blank">
              Whatsapp
            </a>
          </li>
          <li>
            <a href="#">0800-222-MAXS(6297)</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
