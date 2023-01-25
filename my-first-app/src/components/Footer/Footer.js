import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__section">
        <h4>Institucional</h4>
        <ul>
          <li>Quienes somos</li>
          <li>Terminos y condiciones</li>
          <li>Defensa al consumidor</li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Marcas</h4>

        <ul>
          <li>Nike</li>
          <li>Adidas</li>
          <li>Converse</li>
          <li>Under Armor</li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Contato</h4>

        <ul>
          <li>Mail</li>
          <li>Whatsapp</li>
          <li>0800-222-MAXS(6297)</li>
        </ul>
      </div>
    </div>
  );
};
