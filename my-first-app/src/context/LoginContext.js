import { createContext, useState } from "react";

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
  console.log(user);
  const logIn = (values) => {
    const match = MOCK_USERS.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (match) {
      setUser({
        email: match.email,
        logged: true,
        error: null,
      });
    } else {
      setUser({
        email: null,
        loged: false,
        error: "Los datos son inválidos",
      });
    }
  };

  const logOut = () => {
    setUser({
      email: null,
      loged: false,
      error: null,
    });
  };
  return (
    <LoginContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </LoginContext.Provider>
  );
};
