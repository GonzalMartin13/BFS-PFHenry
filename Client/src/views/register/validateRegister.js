export function validarr(input) {
  let errors = {};
  let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let numbersRegex = /\d/;
  let phoneRegex = /^\d+$/;

  if (!emailRegex.test(input.email)) {
    errors.email = "Mail invalido";
  }
  if (input.email.length >= 35) {
    errors.email = "No más de 35 caracteres";
  }
  if (!numbersRegex.test(input.password)) {
    errors.password = "La contraseña debe tener al menos un número";
  }
  if (input.password.length < 6 || input.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }

  // Validación adicional para confirmar la contraseña
  if (input.password !== input.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  // Validación para el número de teléfono
  if (!phoneRegex.test(input.telefono)) {
    errors.telefono = "El teléfono solo puede contener números";
  }

  return errors;
}
