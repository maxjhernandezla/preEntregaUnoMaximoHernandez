import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  return (
    <a href="#" className="cart__container">
      <ShoppingCartIcon className="cart" fontSize="medium" />
      <span className="cart__number">0</span>
    </a>
  );
};
