import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../helpers/askData";
import { ItemDetail } from "../ItemDetail/ItemDetail.js";

export const ItemDetailContainer = ({}) => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  useEffect(() => {
    getItemById(Number(itemId)).then((data) => {
      setItem(data);
    });
  }, [itemId]);

  return (
    <div className="container my-5">{item && <ItemDetail item={item} />}</div>
  );
};
