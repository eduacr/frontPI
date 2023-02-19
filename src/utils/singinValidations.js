export const singinValidations = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.firstName) {
    errors.firstName = "Este campo es obligatorio";
  }

  if (!form.lastName) {
    errors.lastName = "Este campo es obligatorio";
  }

  if (!form.email) {
    errors.email = "Este campo es obligatorio";
  } else if (!regexEmail.test(form.email)) {
    errors.email = "Formato de email inválido";
  }

  if (!form.password) {
    errors.password = "Este campo es obligatorio";
  } else if (form.password.length <= 6)
    errors.password = "La contraseña debe tener más de 6 caracteres"

  if (!form.passwordConfirm) {
    errors.passwordConfirm = "Este campo es obligatorio";
  } else if (form.password !== form.passwordConfirm) {
    errors.passwordConfirm = "Las contraseñas deben coincidir"
  }

  if (Object.keys(errors).length === 0 && form.password !== "admin") {
    errors.credentials =
      "Por favor vuelva a intentarlo, sus credenciales son inválidas";
  }

  console.log("validations");
  console.log(errors);

  return errors;
};
