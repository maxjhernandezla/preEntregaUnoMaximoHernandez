import {
  collection,
  addDoc,
  writeBatch,
  query,
  documentId,
  where,
  getDocs,
  doc,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import "./Checkout.scss";

export const Checkout = () => {
  const { cart, totalCart, emptyCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [values, setValues] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //HACER UNA VALIDACION PARA QUE LA ORDEN NO TENGA DATOS INCOMPLETOS O INVÁLIDOS
    const order = {
      client: values,
      items: cart,
      price: totalCart(),
    };

    const ordersRef = collection(db, "orders");
    const batch = writeBatch(db);
    const productsRef = collection(db, "products");
    const outOfStock = [];
    const itemsRef = query(
      productsRef,
      where(
        documentId(),
        "in",
        cart.map((prod) => prod.id)
      )
    );

    const products = await getDocs(itemsRef);

    products.docs.forEach((doc) => {
      const item = cart.find((item) => item.id === doc.id);
      console.log(item);
      if (doc.data().stock >= item.amount) {
        batch.update(doc.ref, {
          stock: doc.data().stock - item.amount,
        });
      } else {
        outOfStock.push(item);
      }
    });

    if (outOfStock.length === 0) {
      batch.commit().then(() => {
        addDoc(ordersRef, order)
          .then((doc) => {
            setOrderId(doc.id);
            console.log(orderId);
            emptyCart();
          })
          .catch((error) => console.log(error));
      });
    } else {
      alert("no hay stock");
    }
  };

  if (orderId) {
    return (
      <div className="container my-5">
        <h3>Tu compra fue exitosa</h3>
        <hr />
        <p>Tu número de orden es: {orderId}</p>
        <p>Muchas gracias</p>
        <Link className="btn btn-primary" to="/">
          Volver
        </Link>
      </div>
    );
  }

  // if (cart.length === 0) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div className="container my-5">
      <h2>Terminar mi compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          onChange={handleInputChange}
          type="text"
          name="name"
          value={values.name}
          placeholder="Tu nombre"
        />

        <input
          className="form-control my-2"
          onChange={handleInputChange}
          type="text"
          name="address"
          value={values.address}
          placeholder="Tu dirección"
        />

        <input
          className="form-control my-2"
          onChange={handleInputChange}
          type="email"
          name="email"
          value={values.email}
          placeholder="Tu correo electrónico"
        />
        <button className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};
