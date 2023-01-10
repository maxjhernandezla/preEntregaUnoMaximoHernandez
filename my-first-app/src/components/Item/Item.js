import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const Item = ({ prod, item }) => {
  return (
    <Card
      key={prod.id}
      className="itemCard"
      sx={{
        maxWidth: 250,
        height: 500,
        borderRadius: "2%",
        margin: "10px",
        boxShadow: "7px 11px 11px 1px rgba(0,0,0,0.29)",
        webkitBoxShadow: "7px 11px 11px 1px rgba(0,0,0,0.29)",
        mozBoxShadow: "7px 11px 11px 1px rgba(0,0,0,0.29)",
        "&:hover": {
          boxShadow: "7px 11px 11px 1px rgba(0,0,0,0.56)",
          webkitBoxShadow: "7px 11px 11px 1px rgba(0,0,0,0.56)",
          mozBoxShadow: "7px 11px 11px 1px rgba(0,0,0,0.56)",
        },
      }}
    >
      <div className="imageContainer">
        <img
          className="itemImage"
          src={process.env.PUBLIC_URL + prod.image}
          alt={prod.itemName}
        />
      </div>
      <CardContent>
        <Typography
          sx={{ height: "60px" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {prod.itemName.toUpperCase()}
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
          <strong>Precio: ${prod.price}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/detail/${prod.id}`}
          className="btn btn-primary"
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
