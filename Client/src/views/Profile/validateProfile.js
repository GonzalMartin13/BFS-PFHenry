export function validarr(input) {
  const errors = {};
  const phoneRegex = /^\d+$/;
  const letterRegex = /^[a-zA-Z\s]+$/;
  const letterNumber = /^[0-9a-zA-Z]+$/;

  if (input.name && !letterRegex.test(input.name)) {
    errors.name = "El nombre solo puede contener letras";
  };

  if (input.lastName && !letterRegex.test(input.lastName)) {
    errors.lastName = "El apellido solo puede contener letras";
  };

  // Validación para el número de teléfono
  if (input.phone && !phoneRegex.test(input.phone)) {
    errors.phone = "El teléfono solo puede contener números";
  };

  if (input.phone && /\s/.test(input.phone)) {
    errors.phone = "El teléfono no puede contener espacios";
  };

  if (input.nickname && !letterNumber.test(input.nickname)) {
    errors.nickname = "El nickname solo puede contener letras y numeros";
  };

  if (input.nickname &&  /\s/.test(input.nickname)) {
    errors.nickname = "El nickname no puede contener espacios";
  };

  return errors;
};
