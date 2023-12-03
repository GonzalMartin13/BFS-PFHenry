export function validate(input) {
  let errors = {};

  if (input.numero.length < 5) {
    errors.numero = "El número de envío es demasiado corto.";
  } 

  return errors;
}
