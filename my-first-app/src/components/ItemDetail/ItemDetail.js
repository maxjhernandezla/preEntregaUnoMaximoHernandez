import { Button } from "@mui/material";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {
  // const { addToCart } = useContext(CartContext);
  const { addToCart, isInCart } = useContext(CartContext);

  const handleAdd = () => {
    const addedItem = { ...item, amount: amount };
    addToCart(addedItem);
  };

  const [amount, setAmount] = useState(1);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="detailContainer">
        <div className="imageContainer">
          <img className="detailImage" src={item.image} />
        </div>
        <div className="descriptionContainer">
          <h3 className="detailTitle">{item.name}</h3>
          <p className="detailPrice">${item.price}</p>
          <p className="detailDescription">{item.description}</p>
          <div className="amount">
            <p>Cantidad:</p>

            <ItemCount
              counter={amount}
              max={item.stock}
              setCounter={setAmount}
            />
            <hr />
          </div>
          {!isInCart(item.id) ? (
            <Button
              onClick={handleAdd}
              variant="contained"
              sx={{
                margin: "15px 15px 0 15px",
                backgroundColor: "white",
                color: "#1565c0",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Agregar al carrito
            </Button>
          ) : (
            <Button
              sx={{ margin: "15px 15px 0 15px" }}
              to="/cart"
              variant="contained"
              component={Link}
            >
              Comprar
            </Button>
          )}
        </div>
      </div>
      <Button
        onClick={goBack}
        sx={{ margin: "15px 15px 0 15px" }}
        variant="contained"
      >
        Volver
      </Button>
    </div>
  );
};
