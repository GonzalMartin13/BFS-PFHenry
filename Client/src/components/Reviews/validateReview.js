export function validate(input) {
    const errors = {};
  
    if (input.comment && input.comment.length > 250) {
      errors.comment = "El comentario no puede tener más de 250 caracteres";
    }
  
    return errors;
  }