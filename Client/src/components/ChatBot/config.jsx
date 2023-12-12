import { createChatBotMessage } from "react-chatbot-kit";
import Nosotros from "./widgets/Nosotros";
import Faq from "./widgets/Faq";


const botName = "BFS Bot";

const config = {
  initialMessages: [
    createChatBotMessage(
      <>
        <>
          <strong>¿En qué puedo ayudarte?</strong>
          <br></br>
        </>
        Solo escribe el numero o la seccion que deseas consultar<br></br>
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
    ),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#514fb2",
    },
    chatButton: {
      backgroundColor: "#1915ec",
    },
  },

  widgets: [
    {
      widgetName: 'Nosotross',
      widgetFunc: (props) => <Nosotros {...props} />,
    },
    {
      widgetName: 'Faqq',
      widgetFunc: (props) => <Faq {...props} />,
    },
  ],

  customComponents: {
    botAvatar: () => "🤖",
  
    header: () => (
      <div
        style={{
          backgroundColor: "#6a4fb2",
          padding: "5px",
          borderRadius: "5px",
          color: "white",
        }}
      >
        <strong>Bienvenido a BFS Bot</strong>
      </div>
    ),
  },
 
};

export default config;
