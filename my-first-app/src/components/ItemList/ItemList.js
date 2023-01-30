import { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import "./ItemList.scss";

export const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      <section className="itemsContainer">
        {products.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </section>
    </div>
  );
};
