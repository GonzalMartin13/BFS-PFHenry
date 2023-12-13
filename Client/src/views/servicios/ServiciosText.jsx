import styleCss from "./servicios.module.css";
export const Paqueteria = () => {
  return (
    <div>
      Paquetería 📦: Envía tus paquetes con confianza mediante nuestro servicio
      de paquetería. Abarcamos dimensiones de hasta 190 cm en alto, largo o
      ancho, y un peso máximo de 100 kg. Garantizamos un servicio estándar de
      entrega para tus envíos convencionales, siempre seguro y eficiente. <br />{" "}
      Costo por kilometro (tarifa base por kilometro sin incluir recargo por
      dimensiones y peso) hasta 500kms $8, desde 500 kms hasta 1000 kms $6,5,
      desde 1000km hasta 2000 kms $5,5, desde 2000 kms $4. El precio por
      kilómetro incluye el IVA.
    </div>
  );
};
export const Carteria = () => {
  return (
    <div>
      Cartería 🗂️ : Envía sobres con comodidad y rapidez. Este servicio se
      adapta a sobres de hasta 30 x 30 cm y menos de 60 gramos de peso. Perfecto
      para documentos y envíos pequeños. <br /> Costo por kilometro hasta 500kms
      $6,8, desde 500 kms hasta 1000 kms $5, desde 1000 km hasta 2000 kms $3,5,
      desde 2000 kms $2,5. El precio por kilómetro incluye el IVA.
    </div>
  );
};

export const Express = () => {
  return (
    <p>
      Express 🚀: Optimiza tus entregas con nuestro servicio Express. Reduce a
      la mitad el tiempo de entrega en comparación con un envío convencional. La
      opción ideal para quienes valoran la rapidez y eficiencia. <br />{" "}
      Adicional 40% + sobre el valor del tipo de envío (paquetería o cartería)
      tarifa base por kilómetro recorrido.
    </p>
  );
};

export const FragilBox = () => {
  return (
    <div>
      Fragil Box 📦🛡️: Garantizamos la protección de tus productos delicados
      durante el transporte. Utilizamos embalaje especializado para asegurar que
      lleguen en óptimas condiciones. Disfruta de tranquilidad con nuestro
      servicio exclusivo para artículos frágiles. <br />
      Adicional 40% + sobre el valor del tipo de envío (paquetería o cartería)
      tarifa base por kilómetro recorrido.
    </div>
  );
};

export const Certificada = () => {
  return (
    <div>
      Entrega Certificada 📜🔐: Aseguramos la entrega segura al destinatario
      mediante la verificación de su identidad. Realizamos un contacto
      telefónico con el remitente para garantizar la autenticidad del proceso.
      Implementamos medidas adicionales de seguridad para asegurar la entrega
      correcta. <br /> Adicional 40% + sobre el valor del tipo de envío
      (paquetería o cartería) tarifa base por kilómetro recorrido.
    </div>
  );
};
export const Primera = () => {
  return (
    <div>
      {" "}
      En <span className={styleCss.bfs}>BFS</span>, nos esforzamos por ofrecer
      soluciones a medida de cada cliente, por eso somos la mejor opción para
      envíos dentro del territorio nacional. Elegi la modalidad que mejor se
      adapte a tus necesidades. Ya sea paquetería o cartería, te ofrecemos
      soluciones de envío eficientes y seguras. <br />
      Personaliza tu servicio con opciones adicionales como Express, FragilBox y
      Entrega Certificada. <br /> ¡Confía en nosotros para llevar tus envíos al
      siguiente nivel!
    </div>
  );
};
