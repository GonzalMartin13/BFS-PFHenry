export function validateName(name) {
  if (name.trim() === "") {
    return "El nombre es requerido";
  } else if (name.length < 3) {
    return "Parece que el nombre es demasiado corto";
  } else if (!/^[a-zA-Z\s]+(\s[a-zA-Z]+)*$/.test(name)) {
    return "El nombre debe contener solo letras";
  }
  return "";
}
  
  export function validatePhone(phone) {
    const phonePattern = /^[0-9]{8}$/;
  if (!phonePattern.test(phone)) {
      return "Debes colocar un número de teléfono válido.";
  }
  return "";
  }

//   +54 9 1132934031
// +54 11 + (8 njumeros)
  
  export function validateMail(mail) {
    const mailPattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (!mailPattern.test(mail)) {
        return "Debes colocar un email valido.";
    }
    return "";
  }
  
  export function validateMessage(message) {
    if (message.length < 2) {
        return "Compartenos un mensaje.";
    }
    return "";
  }
 