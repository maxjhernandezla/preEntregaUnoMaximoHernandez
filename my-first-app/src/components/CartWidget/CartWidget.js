import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { LoginContext } from "../../context/LoginContext";
import "./CartWidget.scss";
export const CartWidget = () => {
  const { cart, cartItems } = useContext(CartContext);
  const { user } = useContext(LoginContext);

  return (
    <Link to="/cart" className="cart__container">
      <ShoppingCartIcon className="cart" fontSize="small" />
      {cart.length > 0 && (
        <span className="cart__number">{user.logged && cartItems()}</span>
      )}
    </Link>
  );
};
