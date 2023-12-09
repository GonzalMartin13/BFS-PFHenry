import React, { useState } from "react";
import styles from "../widgets/faq.module.css"

const Faq = () => {
  const [selecButton, setSelecButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setSelecButton(buttonNumber);
  };
  return (
    <div className={styles.seccion}>
      <div>
        <button onClick={() => handleButtonClick(1)} className={styles.contenedor}>
          ¿Cuanto cuestan los envios?
        </button>
        <br></br>
        {selecButton === 1 && (
          <span>
            El costo es dinamico y depende de el origen y el destino. Puedes
            revisarlo en la Cotizacion
          </span>
        )}
      </div>
      <div>
        <button onClick={() => handleButtonClick(2)} className={styles.contenedor}>¿Tienen envios internacionales?</button>
        <br></br>
        {selecButton === 2 && <span>No, por el momento solo tenemos precencia en Todo Argentina</span>}
      </div>
      <div>
        <button onClick={() => handleButtonClick(3)} className={styles.contenedor}>¿Que pasa si no he recibido mi paquete?</button>
        <br></br>
        {selecButton === 3 && <span>Es probable que este en camino, puedes consultar el status en tu perfil, o en la barra de seguimiento</span>}
      </div>
      <div>
        <button onClick={() => handleButtonClick(4)} className={styles.contenedor}>¿Mi paquete llego dañado que hago?</button>
        <br></br>
        {selecButton === 4 && <span>Si se solicito el envio de servicio delicado, revisa que se encuentre en las mismas condiciones que la foto; en caso de que no pagaremos el daño de tu envio</span>}
      </div>
      <div>
        <button onClick={() => handleButtonClick(5)} className={styles.contenedor}>¿Puede alguien mas a recoger el envio?</button>
        <br></br>
        {selecButton === 5 && <span>Claro, es necesario que lleve su identificacion y la tuya, ademas el numero de seguimiento de envio, para recolectarlo</span>}
      </div>
      <div>
        <button onClick={() => handleButtonClick(6)} className={styles.contenedor}>¿Existe garantia de entrega?</button>
        <br></br>
        {selecButton === 6 && <span>Los paquetes estaran disponibles en la sucursal de destino en un maximo de 36 horas</span>}
      </div>
      <div>
        <button onClick={() => handleButtonClick(7)} className={styles.contenedor}>¿Existen reembolso? no envie mi paquete</button>
        <br></br>
        {selecButton === 7 && <span>No tenemos reembolso, sin embargo tu guia estara disponible para enviarlo en cualquier momento.</span>}
      </div>
      <div>
        <button onClick={() => handleButtonClick(8)} className={styles.contenedor}>¿Se puede perder mi paquete?</button>
        <br></br>
        {selecButton === 8 && <span>No, nuestras politicas y procedimientos no dan oportunidad de que se pierda tu paquete</span>}
      </div>
      <div>
        <button onClick={() => handleButtonClick(9)} className={styles.contenedor}>¿Puedo seleccionar varios servicios?</button>
        <br></br>
        {selecButton === 9 && <span>Claro, puedes combinar nuestros servicios deacuerdo a lo que requieras. </span>}
      </div>
      <div>
        <button onClick={() => handleButtonClick(10)} className={styles.contenedor}>¿Tienen telefono de contacto?</button>
        <br></br>
        {selecButton === 10 && <span>Si, es el +56 945 797-810</span>}
      </div>
      <div>
        <button onClick={() => handleButtonClick(11)} className={styles.contenedor}>¿Como los contacto?</button>
        <br></br>
        {selecButton === 11 && <span>Puedes enviarnos un correo a enviosbfs01@gmail.com, o un mensaje desde la seccion de contacto</span>}
      </div>
      <div>
        <button onClick={() => handleButtonClick(12)} className={styles.contenedor}>¿De que Cohorte son?</button>
        <br></br>
        {selecButton === 12 && <span>ft43a_pf_grupo01</span>}
      </div>
    </div>
  );
};

export default Faq;
