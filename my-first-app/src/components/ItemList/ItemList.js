import { Item } from "../Item/Item";
import "./ItemList.scss";

export const ItemList = ({ products, title }) => {
  return (
    <div className="itemList">
      <h1 className="title">Nuestros Productos</h1>
      <section className="itemsContainer">
        {products.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </section>
    </div>
  );
};
