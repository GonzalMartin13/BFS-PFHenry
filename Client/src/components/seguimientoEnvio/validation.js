export function validate(input) {
  let errors = {};

  if (!input.numero.trim()) {
    errors.numero = "El número es requerido.";
  } else if (input.numero.length > 8) {
    errors.numero = "Exceso de caracteres";
  }

  return errors;
}
