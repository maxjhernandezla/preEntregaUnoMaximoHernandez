import { db } from "./config.js";
import MOCK from "../data/data.json" assert { type: "json" };
import { collection, addDoc } from "firebase/firestore";

const productRef = collection(db, "products");
MOCK.forEach((item) => addDoc(productRef, item));
