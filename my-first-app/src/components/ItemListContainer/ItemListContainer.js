import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import stock from "../../data/data.json";
import { minHeight } from "@mui/system";
import { SearchSelect } from "../SearchSelect/SearchSelect";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const askData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(stock);
      }, 2000);
    });
  };

  useEffect(() => {
    askData()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="itemListContainer">
      <h1 className="title">{greeting}</h1>
      <div className="searchContainer">
        <SearchSelect />
      </div>

      <div className="itemsContainer">
        {products.map((prod) => (
          <Card
            key={prod.id}
            className="itemCard"
            sx={{
              maxWidth: 345,
              borderRadius: "2%",
              margin: "10px",
              boxShadow: "7px 11px 11px 1px rgba(0,0,0,0.29)",
              "-webkit-box-shadow": "7px 11px 11px 1px rgba(0,0,0,0.29)",
              "-moz-box-shadow": "7px 11px 11px 1px rgba(0,0,0,0.29)",
              "&:hover": {
                boxShadow: "7px 11px 11px 1px rgba(0,0,0,0.56)",
                "-webkit-box-shadow": "7px 11px 11px 1px rgba(0,0,0,0.56)",
                "-moz-box-shadow": "7px 11px 11px 1px rgba(0,0,0,0.56)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 250 }}
              image={prod.image}
              title={prod.itemName}
            />
            <CardContent>
              <Typography
                sx={{ height: "60px" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {prod.itemName}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ height: 150, overflow: "scroll" }}
              >
                {prod.description}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  height: "fit-content",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <strong>Price: ${prod.price}</strong>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add to cart</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
