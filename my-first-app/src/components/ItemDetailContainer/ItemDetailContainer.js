import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config.js";
import { ItemDetail } from "../ItemDetail/ItemDetail.js";

export const ItemDetailContainer = ({}) => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  useEffect(() => {
    const docRef = doc(db, "productos", itemId);
    getDoc(docRef).then((doc) => setItem({ ...doc.data(), id: doc.id }));
  }, [itemId]);

  return (
    <div className="container my-5">{item && <ItemDetail item={item} />}</div>
  );
};

//   getItemById(Number(itemId)).then((data) => {
//     setItem(data);
//   });
// }
