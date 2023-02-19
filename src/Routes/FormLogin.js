import React, { useState } from "react";
import { ReactComponent as ShowPassword } from "../img/show-password.svg";
import { loginValidations } from "../utils/loginValidations";

const initialForm = {
  email: "",
  password: "",
};

const initialErrors = {
  email: "",
  password: "",
  credentials: "",
};

export default function FormLogin() {
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = loginValidations(form);
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      setErrors(initialErrors);
      console.log("LOGIN CORRECTO");
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="form-login-container">
      <form className="form-login" onSubmit={handleSubmit}>
        <h1 className="title">Iniciar sesión</h1>
        <div className="form-field">
          <label className="form-label" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className={errors.email ? "form-input input-error" : "form-input"}
            type="email"
            id="email"
            value={form.name}
            name="email"
            onChange={handleChange}
          />
          <p className="login-validation">{errors.email}</p>
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="password">
            Contraseña
          </label>
          <div className="password-input-container">
            <input
              className={
                errors.password ? "form-input input-error" : "form-input"
              }
              id="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              name="password"
              onChange={handleChange}
            />
            <p className="login-validation">{errors.password}</p>
            <p className="login-validation login-validation-credentials">{errors.credentials}</p>
            <button
              type="button"
              className="btn-show-password"
              onClick={handleShowPassword}
            >
              <ShowPassword />
            </button>
          </div>
        </div>

        <button type="submit" className="btn-login">
          Ingresar
        </button>
        <p className="not-count">
          ¿Aún no tenes cuenta?{" "}
          <span className="go-to-sign-in">Registrate</span>
        </p>
      </form>
    </div>
  );
}
