import { useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";
import Image from "react-bootstrap/Image";
import contacto from "../../assets/contacto.png";

const Email = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [asunto, setAsunto] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_ko3ekug",
        "template_efdhnp2",
        event.target,
        "Z07yDoQAt6am4G7K6"
      )
      .then((response) => console.log(response));
    setName("");
    setLastname("");
    setAsunto("");
    setEmail("");
    setMessage("").catch((error) => console.log(error));
  };

  return (
    <div>
      <Image src={contacto} fluid style={{ width: "100%", height: "300px" }} />
      <div className={style.form}>
        <form className={style.form_mail} onSubmit={sendEmail}>
          <h3 className="">
            Tienes dudas, comentarios, recomendaciones envianos un mensaje.{" "}
          </h3>
          <h1 className={style.title_form}>Contactanos</h1>
          <label>Nombre</label>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <label>Apellido</label>
        <input type="text"
        name="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)} /> */}
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Mensaje</label>
          <textarea
            name="user_message"
            cols="30"
            value={message}
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
          />
          <hr />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Email;
