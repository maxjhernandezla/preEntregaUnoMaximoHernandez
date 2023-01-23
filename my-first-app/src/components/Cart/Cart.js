import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";

export const Cart = () => {
  const { cart, emptyCart, totalCart, deleteItem } = useContext(CartContext);
  return (
    <div className="container my-5">
      <h2>Tu compra</h2>
      <hr />
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          {/* <img src={item.image} /> */}
          <p>Cantidad: {item.amount}</p>
          <p>Precio: ${item.price * item.amount} </p>
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
                  backgroundColor: "#c62828",
                },
              }}
            />
          </Button>
        </div>
      ))}
      <h4>Total: ${totalCart()} </h4>
      <Button onClick={emptyCart} variant="contained" color="error">
        Vaciar carrito
      </Button>
    </div>
  );
};
