import { getAllUser } from "../../utils/getAllUser";

export const validarr = async (input) => {
  const errors = {};
  const phoneRegex = /^\d+$/;
  const letterRegex = /^[a-zA-Z\s]+$/;
  const letterNumber = /^[0-9a-zA-Z]+$/;

  const response = await getAllUser();
  const repeat = response.filter((user) => user.nickname === input.nickname);

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

  if (repeat.length > 0) {
    errors.nickname = `El nickname ${input.nickname} ya se encuentra, intenta otro`;
  };

  return errors;
};
