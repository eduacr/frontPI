import React, { useState } from "react";
import { ReactComponent as ShowPassword } from "../img/show-password.svg";
import { singinValidations } from "../utils/singinValidations";

const initialForm = {
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  passwordConfirm:""
};

const initialErrors = {
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  passwordConfirm:""
};

export default function FormSingIn() {
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
    const errors = singinValidations(form);
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
      <form className="form-login form-singin" onSubmit={handleSubmit}>
        <h1 className="sing-in-title">Crear cuenta</h1>

        <div className="names-form-singin">
          <div className="form-field">
            <label className="form-label" htmlFor="firstName">
              Nombre
            </label>
            <input
              className={errors.firstName ? "form-input input-error" : "form-input"}
              type="text"
              id="firstName"
              value={form.name}
              name="firstName"
              onChange={handleChange}
            />
            <p className="login-validation">{errors.firstName}</p>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="lastName">
              Apellido
            </label>
            <input
              className={errors.lastName ? "form-input input-error" : "form-input"}
              type="text"
              id="lastName"
              value={form.lastName}
              name="lastName"
              onChange={handleChange}
            />
            <p className="login-validation">{errors.lastName}</p>
          </div>
        </div>

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
          <input
            className={errors.password ? "form-input input-error" : "form-input"}
            type="password"
            id="password"
            value={form.password}
            name="password"
            onChange={handleChange}
          />
          <p className="login-validation">{errors.password}</p>
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="passwordConfirm">
            Confirmar contraseña
          </label>
          <div className="password-input-container">
            <input
              className={
                errors.passwordConfirm ? "form-input input-error" : "form-input"
              }
              id="passwordConfirm"
              type={showPassword ? "text" : "password"}
              value={form.passwordConfirm}
              name="passwordConfirm"
              onChange={handleChange}
            />
            <p className="login-validation">{errors.passwordConfirm}</p>

            <button
              type="button"
              className="btn-show-password"
              onClick={handleShowPassword}
            >
              <ShowPassword />
            </button>
          </div>
        </div>

        <button type="submit" className="btn-singin">
          Crear cuenta
        </button>
        <p className="go-to-login">
          ¿Ya tienes un cuenta? 
          <span className="go-to-login-link"> Iniciar sesión</span>
        </p>
      </form>
    </div>
  );
}
