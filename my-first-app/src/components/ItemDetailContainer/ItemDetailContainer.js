import { doc, getDoc, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/config.js";
import { ItemDetail } from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.scss";

// export const ItemDetailContainer = ({}) => {
//   const [item, setItem] = useState(null);

//   const { itemId } = useParams();
//   useEffect(() => {
//     const docRef = doc(db, "products", itemId);
//     getDoc(docRef)
//       .then((doc) => setItem({ ...doc.data(), id: doc.id }))
//       .catch((err) => console.log(err));
//   }, [itemId]);
//   console.log(item);
//   return (
//     <div className="container my-5">{item && <ItemDetail item={item} />}</div>
//   );
// };

export const ItemDetailContainer = ({}) => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  const { itemId } = useParams();
  useEffect(() => {
    const docRef = doc(db, "products", itemId);
    getDoc(docRef)
      .then((doc) => {
        if (doc.data() === undefined) {
          setError(doc);
        } else {
          setItem({ ...doc.data(), id: doc.id });
        }
      })

      .catch((err) => console.log(err));
  }, [itemId]);

  if (error) {
    return (
      <div className="itemdetail__container my-5">
        <h2>El item es inexistente</h2>
        <p>Lo sentimos mucho, por favor dirigirse a la pagína principal</p>
        <Link to="/" className="btn item__btn">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">{item && <ItemDetail item={item} />}</div>
  );
};
