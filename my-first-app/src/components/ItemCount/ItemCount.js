import "./ItemCount.scss";
import { Button } from "@mui/material";
import { useState } from "react";

export const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <div className="itemCount">
      <Button
        className="btn"
        variant="outlined"
        color="primary"
        onClick={restar}
      >
        -
      </Button>
      <p className="counter">{counter}</p>
      <Button
        className="btn"
        variant="contained"
        color="primary"
        onClick={sumar}
      >
        +
      </Button>
    </div>
  );
};
