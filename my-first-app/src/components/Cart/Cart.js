import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "./Cart.scss";

export const Cart = () => {
  const { cart, emptyCart, totalCart, deleteItem } = useContext(CartContext);
  const shipping = cart.length * 1200;
  console.log(totalCart());
  console.log(shipping);

  return (
    <div className="container my-5">
      <div className="cart__display">
        <h2>Tu compra</h2>
        {cart.map((item) => (
          <div className="cart__container" key={item.id}>
            <div className="image__container">
              <img src={item.image} />
            </div>
            <div className="description__container">
              <div>
                <h5>{item.name}</h5>
                <p>Unidades: {item.amount}</p>
                <p>Precio: ${item.price * item.amount} </p>
              </div>
              <Button onClick={() => deleteItem(item.id)}>
                <DeleteIcon
                  color="error"
                  variant="contained"
                  sx={{
                    border: "1px solid #c62828",
                    padding: "5px",
                    borderRadius: "25%",
                    "&:hover": {
                      color: "#FFFFFF",
                      backgroundColor: "#dedede",
                    },
                  }}
                />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="order__display">
        <div className="text__container">
          <h4>Resumen de la orden</h4>
          <div className="order__text">
            <p>Subtotal ({cart.length}):</p>
            <p>${totalCart()}</p>
          </div>
          <div className="order__text">
            <p>Costo del envío:</p>
            <p>${shipping}</p>
          </div>
          <div className="order__text">
            <p>Total:</p>
            <p>${totalCart() + shipping}</p>
          </div>
        </div>
        <hr />
        <div className="button__container">
          <Button variant="contained" component={Link} to="/checkout">
            Terminar mi compra
          </Button>
          <Button onClick={emptyCart} variant="contained">
            Vaciar carrito
          </Button>
        </div>
      </div>
    </div>
  );
};
