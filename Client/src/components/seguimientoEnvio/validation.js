export function validate(input) {
  let errors = {};

  if (!/^\d+$/.test(input.numero)) {
    errors.numero = "El número ingresado es incorrecto. Por favor, ingrese un valor correcto.";
  } else if (input.numero.length < 5) {
    errors.numero = "El número de envío es demasiado corto.";
  } 

  return errors;
}
