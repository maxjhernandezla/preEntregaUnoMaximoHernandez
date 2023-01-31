import { Button } from "@mui/material";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { LoginContext } from "../../context/LoginContext";

export const ItemDetail = ({ item }) => {
  // const { addToCart } = useContext(CartContext);
  const { addToCart, isInCart } = useContext(CartContext);
  const { user } = useContext(LoginContext);

  const handleAdd = () => {
    const addedItem = { ...item, amount: amount };
    addToCart(addedItem);
  };

  const [amount, setAmount] = useState(1);

  const addIfIsLogged = () => {
    return !isInCart(item.id) ? (
      <Button
        onClick={handleAdd}
        variant="contained"
        sx={{
          margin: "15px 15px 0 15px",
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "black",
            color: "#DEDEDE",
          },
        }}
      >
        Agregar al carrito
      </Button>
    ) : (
      <Button
        sx={{
          margin: "15px 15px 0 15px",
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "black",
            color: "#DEDEDE",
          },
        }}
        to="/cart"
        variant="contained"
        component={Link}
      >
        Comprar
      </Button>
    );
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <div className="detailContainer">
        <div className="imageContainer">
          <img className="detailImage" src={item.image} />
        </div>
        <div className="descriptionContainer">
          <h3 className="detailTitle">{item.name}</h3>
          <p className="detailPrice">{formatter.format(item.price)}</p>
          <p className="detailDescription">{item.description}</p>
          <div className="amount">
            <ItemCount
              counter={amount}
              max={item.stock}
              setCounter={setAmount}
            />
            <hr />
          </div>
          {!user.logged ? (
            <Button
              variant="contained"
              component={Link}
              to="/login"
              sx={{
                margin: "15px 15px 0 15px",
                backgroundColor: "white",
                color: "black",
                "&:hover": {
                  backgroundColor: "black",
                  color: "#DEDEDE",
                },
              }}
            >
              Agregar al carrito
            </Button>
          ) : (
            addIfIsLogged()
          )}
        </div>
      </div>
      <Button
        onClick={goBack}
        variant="contained"
        sx={{
          margin: "15px 15px 0 15px",
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "black",
            color: "#DEDEDE",
          },
        }}
      >
        Volver
      </Button>
    </div>
  );
};
