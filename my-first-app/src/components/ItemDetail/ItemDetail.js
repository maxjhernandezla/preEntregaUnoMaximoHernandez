import { Button } from "@mui/material";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import { useNavigate } from "react-router-dom";

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="detailContainer">
        <img className="detailImage" src={item.image} />
        <div className="descriptionContainer">
          <h3 className="detailTitle">{item.itemName}</h3>
          <p className="detailPrice">${item.price}</p>
          <p className="detailDescription">{item.description}</p>
          <div className="quantity">
            <p>Cantidad:</p>
            <ItemCount />
          </div>
          <Button sx={{ margin: "15px 15px 0 15px" }} variant="contained">
            Comprar
          </Button>
          <Button
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
