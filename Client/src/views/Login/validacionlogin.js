export function validar(input) {
  let errors = {};
  let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let numbersRegex = /\d/;

  if (!emailRegex.test(input.email)) {
    errors.email = "Mail invalido";
  }
  if (input.email.length >= 35) {
    errors.email = "No mas de 35 caracteres ";
  }
  if (!numbersRegex.test(input.password)) {
    errors.password = "La contraseña debe tener almenos un numero";
  }
  if (input.password.length < 6 || input.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }

  // Validación adicional para confirmar la contraseña
  if (input.password !== input.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  return errors;
}
