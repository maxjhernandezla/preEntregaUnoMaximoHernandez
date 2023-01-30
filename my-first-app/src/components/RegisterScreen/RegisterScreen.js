import "./RegisterScreen.scss";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { LoginContext } from "../../context/LoginContext";
import { Link } from "react-router-dom";
export const RegisterScreen = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { user, singUp } = useContext(LoginContext);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    singUp(values);
  };

  return (
    <div className="login__screen">
      <div className="form__container">
        <h3 className="login__title">Sign up</h3>

        <form onSubmit={handleSubmit} className="login__form">
          <input
            className="form-control my-2"
            placeholder={"E-mail Address"}
            // helperText="Please enter your email"
            type={"email"}
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />
          <input
            // helperText="Please enter your password"
            type={"password"}
            placeholder={"Password"}
            className="form-control my-2"
            value={values.password}
            onChange={handleInputChange}
            name="password"
          />
          {user.error && <p className="error">{user.error}</p>}
          <button className="btn">Registrarme</button>
        </form>
        <Link sx={{ color: "black", textDecoration: "none" }} to="/login">
          Ya estoy registrado
        </Link>
      </div>
    </div>
  );
};
