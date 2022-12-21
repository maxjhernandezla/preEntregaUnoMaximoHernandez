import "./ItemListContainer.scss";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="items__container">
      <h1 className="title">{greeting}</h1>
    </div>
  );
};
