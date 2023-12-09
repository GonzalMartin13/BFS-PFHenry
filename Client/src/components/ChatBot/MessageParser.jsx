import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    message = message.toLowerCase();
    const number = parseInt(message, 10);
    const isNumberInRange = !isNaN(number) && number >= 1 && number <= 7;

    if (isNumberInRange) {
    
      switch (number) {
        case 1:
          actions.handleEnvio();
          break;
        case 2:
          actions.handleSeguimiento();
          break;
        case 3:
          actions.handleServicios();
          break;
        case 4:
          actions.handleSucursales();
          break;
        case 5:
          actions.handleContacto();
          break;
        case 6:
          actions.handleNosotros();
          break;
        case 7:
          actions.handleFaq();
          break;
        default:
          actions.handleNinguno();
      }
    } else {
    if (
      message.includes("envios.") ||
      message.includes("envio") ||
      message.includes("hacer envio") ||
      message.includes("enviar") 

    ) {
      actions.handleEnvio();
    }

    else if (
        message.includes("rastreo") ||
        message.includes("seguimiento") ||
        message.includes("buscar") ||
        message.includes("rastrear") 

      ) {
        actions.handleSeguimiento();
      }

      else if (
        message.includes("tipos") ||
        message.includes("servicios") 

      ) {
        actions.handleServicios();
      }

      else if (
        message.includes("sucursales") ||
        message.includes("sucursal") 

      ) {
        actions.handleSucursales();
      }

      else if (
        message.includes("contacto") ||
        message.includes("contactos") ||
        message.includes("contactanos") 

      ) {
        actions.handleContacto();
      }

      else if (
        message.includes("nosotros") ||
        message.includes("nosotro") ||
        message.includes("conocenos") 

      ) {
        actions.handleNosotros();
      }

      else if (
        message.includes("faq") ||
        message.includes("preguntas") 

      ) {
        actions.handleFaq();
      }
 

      else if (
        message.includes("si")
      ) {
        actions.handleSi();
      }

      else if (
        message.includes("no")
      ) {
        actions.handleNo();
      }
      else {
        actions.handleNinguno();
      }
  };
}

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
