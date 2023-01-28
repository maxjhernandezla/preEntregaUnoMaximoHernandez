import * as React from "react";
import { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { SideBar } from "../SideBar/SideBar";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { brand, categoryId } = useParams();

  useEffect(() => {
    const productsRef = collection(db, "products");

    const qBrand = brand
      ? query(productsRef, where("brand", "==", brand))
      : productsRef;

    const qCat = categoryId
      ? query(
          productsRef,
          where("category", "==", categoryId),
          where("brand", "==", brand)
        )
      : productsRef;

    if (brand && categoryId) {
      getDocs(qCat).then((res) => {
        setProducts(
          res.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      });
    } else if (brand) {
      getDocs(qBrand).then((res) => {
        setProducts(
          res.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      });
    }
  }, [brand, categoryId]);

  return (
    <div className="view__container">
      <SideBar />
      <div className="itemListContainer">
        <ItemList products={products} />
      </div>
    </div>
  );
};

// useEffect(() => {
//   askData()
//     .then((res) => {
//       if (categoryId) {
//         setProducts(res.filter((prod) => prod.category === categoryId));
//       } else {
//         setProducts(res);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, [categoryId]);
