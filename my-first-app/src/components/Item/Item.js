import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Item.scss";

export const Item = ({ prod, item }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Card
      key={prod.id}
      className="itemCard"
      sx={{
        maxWidth: 250,
        height: "fit-content",
        // borderRadius: "2%",
        margin: "10px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "7px 11px 11px 1px rgba(0,0,0,0.29)",
          webkitBoxShadow: "7px 11px 11px 1px rgba(0,0,0,0.29)",
          mozBoxShadow: "7px 11px 11px 1px rgba(0,0,0,0.29)",
          // boxShadow: "7px 11px 11px 1px rgba(0,0,0,0.56)",
          // webkitBoxShadow: "7px 11px 11px 1px rgba(0,0,0,0.56)",
          // mozBoxShadow: "7px 11px 11px 1px rgba(0,0,0,0.56)",
        },
      }}
    >
      <div className="imageContainer">
        <img
          className="itemImage"
          src={process.env.PUBLIC_URL + prod.image}
          alt={prod.name}
        />
      </div>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography gutterBottom variant="h6" component="div">
          {prod.name}
        </Typography>
        <Typography
          sx={{
            height: "fit-content",
            display: "flex",
            justifyContent: "flex-start",
            margin: 0,
            textDecoration: "none",
          }}
        >
          {formatter.format(prod.price)}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          component={Link}
          to={`/detail/${prod.id}`}
          className="btn btn-primary"
          size="small"
          variant="contained"
          sx={{
            backgroundColor: "black",

            "&:hover": { backgroundColor: "#DEDEDE", color: "black" },
          }}
        >
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
};
