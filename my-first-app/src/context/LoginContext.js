import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config.js";

const MOCK_USERS = [
  {
    email: "maximo@coderhouse.com",
    password: "333",
  },
];

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    loged: false,
    error: null,
  });

  const logIn = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        setUser({
          email: userCredential.user.email,
          logged: true,
          error: null,
        });
      })
      .catch((err) => {
        console.log(err);
        setUser({
          email: null,
          loged: false,
          error: err.message,
        });
      });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({
        email: null,
        loged: false,
        error: null,
      });
    });
  };

  const singUp = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        setUser({
          email: userCredential.user.email,
          logged: true,
          error: null,
        });
      })
      .catch((err) => {
        console.log(err);
        setUser({
          email: null,
          loged: false,
          error: err.message,
        });
      });
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser({
  //         email: user.email,
  //         logged: true,
  //         error: null,
  //       });
  //     } else {
  //       logOut();
  //     }
  //   });
  // }, []);
  return (
    <LoginContext.Provider value={{ user, logIn, logOut, singUp }}>
      {children}
    </LoginContext.Provider>
  );
};
