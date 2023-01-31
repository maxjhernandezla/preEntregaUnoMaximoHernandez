import "./ItemCount.scss";
import { Button } from "@mui/material";

export const ItemCount = ({ max, setCounter, counter }) => {
  const handleAdd = () => {
    counter < max && setCounter(counter + 1);
  };

  const handleSubtract = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return (
    <div className="itemCount">
      <Button
        className="btn"
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
        }}
        onClick={handleSubtract}
      >
        -
      </Button>
      <p className="counter">{counter}</p>
      <Button
        className="btn"
        variant="contained"
        onClick={handleAdd}
        sx={{
          backgroundColor: "black",
          color: "#DEDEDE",
          "&:hover": {
            backgroundColor: "#DEDEDE",
            color: "black",
          },
        }}
      >
        +
      </Button>
    </div>
  );
};
