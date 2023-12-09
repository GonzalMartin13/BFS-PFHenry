import React from "react";
import { Link } from "react-router-dom";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const preg = ()=>{
    return( setTimeout(() => {
      const pregunta = createChatBotMessage(<>
        ¿Deseas alguna otra informacion? <strong>Si</strong> - <strong>No</strong>
      </>)
  
      setState((state) => ({
        ...state,
        messages: [...state.messages, pregunta],
      }));
    }, 2000))
  }
  
  const handleEnvio = () => {
    const botMessage = createChatBotMessage(
      <>
        Claro, para realizar un envío, dirígete a{" "}
        <strong><Link style={{color: 'white'}}to="/Cotizacion"> Cotizacion</Link></strong>, donde podrás ver el costo del envío antes de confirmarlo.
        <br></br><br></br>Tambien la direccion de la sucursal donde podras enviarlo y recogerlo.
        <br></br><br></br>Despues de confirmar el pedido, te proporcionaremos tu factura para el envio del paquete.
        <br></br><br></br>Y desde tu perfil podras dar seguimiento a tu paquete.
      </>
    )
       
    setState((state) => ({
      ...state,
      messages: [...state.messages, botMessage],
    }));

    preg();
   
}

  const handleSeguimiento = () => {
    const botMessage = createChatBotMessage(
      <>
        Para rastrear tu paquete puedes igresar a tu <strong><Link style={{color: 'white'}}to="/envios"> Perfil</Link></strong> y seleccionar el envio que requieres.
        <br></br><br></br>Tambien puedes buscar tu envio con tu numero de seguimiento en el cuadro de busqueda que aparece en la parte superior de la pagina.

      </>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    preg();
  };

  const handleServicios = () => {
    const botMessage = createChatBotMessage(
      <>
        Contamos con servicio de entrega Express, para tus envios urgentes; 
        <br></br><br></br>Tambien servicio de embalaje extra, para envios discretos; 
        <br></br><br></br>Servicio delicado, para aquellos envios que requieren de proteccion extra 
        <br></br><br></br>Tambien de documentacion para aquellos documentos importantes, 
        <br></br>ademas de paqueteria en general, al mejor costo.
        <br></br><br></br>Puedes revisarlos mas a detalle <strong><Link style={{color: 'white'}}to="/servicios"> Aqui</Link></strong> o seleccionarlos para tu envio <strong><Link style={{color: 'white'}}to="/cotizacion"> Directamente</Link></strong>
      </>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    preg();
  };


  const handleSucursales = () => {
    const botMessage = createChatBotMessage(
      <>
        Tenemos precencia en las 23 provincias de Argentina; 
        <br></br><br></br>Por lo que puedes confiar en que llegaran tus paquetes a su destino 
        <br></br><br></br>Puedes consular el listado de sucursales para encontrar la mas cercana a tu domicilio <strong><Link style={{color: 'white'}}to="/sucursales"> Aqui</Link></strong> 

      </>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    preg();
  };

  const handleContacto = () => {
    const botMessage = createChatBotMessage(
      <>
        Tienes un asunto urgente, un problema, o requieres una persona que te ayude? 
        <br></br><br></br>Mandanos un mensaje desde la seccion de <strong><Link style={{color: 'white'}}to="/contacto"> Contacto</Link></strong>
        <br></br><br></br>Dejanos tu nombre, telefono, correo y una persona se comunicara contigo.

      </>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    preg();
  };


  const handleNosotros = () => {
    const botMessage = createChatBotMessage(
      "Este es el equipo que trabajo en este proyecto, da clic sobre el nombre de alguno para ir a nuestro GitHub",
      {
        widget: 'Nosotross',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    preg();
  };

  const handleFaq = () => {
    const botMessage = createChatBotMessage(
      "Revisa las dudas frecuentes.",
      {
        widget: 'Faqq',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    preg();
  };



  const handleNo = () => {
    const botMessage = createChatBotMessage(
      <>
        Entiendo, fue un placer atenderte!!
      </>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNinguno = () => {
    const botMessage = createChatBotMessage(
      <>
        Lo siento no entendi tu mensaje, puedes seleccionar alguna de estas opciones
      </>
    );
    setTimeout(() => {
      handleSi();
      
    }, 1000);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  const handleSi = () => {
    const botMessage = createChatBotMessage(
      <>
      Solo escribe el numero o la seccion que deseas cosultar<br></br>
      <>
        <strong>1</strong>-<strong>Envios.</strong> Para informacion sobre
        como realizar un envio
      </>
      <br></br>
      <>
        <strong>2</strong>-<strong>Rastreo.</strong> No sabes como consultar
        el estatus de tu paquete, esta es tu opcion
      </>
      <br></br>
      <>
        <strong>3</strong>-<strong>Servicios.</strong> Conoce nuestros tipos
        de servicios y selecciona el que se ajuste a tus necesidades
      </>
      <br></br>
      <>
        <strong>4</strong>-<strong>Sucursales.</strong> Consulta nuestras
        sucursales y ve la mas cercana a tu domicilio
      </>
      <br></br>
      <>
        <strong>5</strong>-<strong>Contacto.</strong> Requieres apoyo de una
        persona, Contactanos.
      </>
      <br></br>
      <>
        <strong>6</strong>-<strong>Nosotros</strong> Conocenos
      </>
      <br></br>
        <>
          <strong>7</strong>-<strong>FAQ</strong> Preguntas Frecuentes
        </>
    </>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleEnvio,
            handleSeguimiento,
            handleServicios,
            handleSucursales,
            handleContacto,
            handleNosotros,
            handleNinguno,
            handleFaq,
            handleSi,
            handleNo,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
