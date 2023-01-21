import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart__container">
      <ShoppingCartIcon className="cart" fontSize="medium" />
      <span className="cart__number">{cart.length}</span>
    </Link>
  );
};
