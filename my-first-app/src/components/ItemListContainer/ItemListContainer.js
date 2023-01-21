import * as React from "react";
import { useEffect, useState } from "react";
import { askData } from "../../helpers/askData.js";
import "./ItemListContainer.scss";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    askData()
      .then((res) => {
        if (categoryId) {
          setProducts(res.filter((prod) => prod.category === categoryId));
        } else {
          setProducts(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      <div>
        <ItemList products={products} title={categoryId} />
      </div>
    </div>
  );
};
