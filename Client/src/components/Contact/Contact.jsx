import { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import contacto from "../../assets/contacto.png";
import styles from "../Contact/Contact.module.css";
import {
  validateName,
  validateMail,
  validateMessage,
} from "./validationContact";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("12345678");
  const [asunto, setAsunto] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateNameOnChange = (value) => {
    const error = validateName(value);
    setNameError(error);
  };

  const validateEmailOnChange = (value) => {
    const error = validateMail(value);
    setEmailError(error);
  };

  const validateMessageOnChange = (value) => {
    const error = validateMessage(value);
    setMessageError(error);
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    if (nameError || emailError || messageError || !name || !email || !message) {
      console.log("Formulario inválido");
      return;
    }

    if (nameError || emailError || messageError) {
      console.log("Formulario inválido");
      return;
    }

    emailjs
      .sendForm(
        "service_dr0btnj",
        "template_s4ejomn",
        event.target,
        "ELPWCjAlQFhUotjly"
      )
      .then((response) => {
        console.log(response);
        setName("");
        setPhone("");
        setAsunto("");
        setEmail("");
        setMessage("");
        return Promise.resolve(response);
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Hemos recibido tu mensaje, un miembro del equipo te contactará en breve.",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error en el envío",
          text: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
        });
      });
  };

  const disableButton =
    !name || !email || !message || !!nameError || !!emailError || !!messageError;

  return (
    <div>
    <Image src={contacto} fluid style={{ width: "100%", height: "300px" }} />
    <div style={{
      border: "1px solid #dee2e6",
      borderRadius: "5px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      margin: "20px auto",
      maxWidth: "600px",
    }}>
      <Form onSubmit={sendEmail} style={{
        padding: "20px",
      }}>
        <div style={{
          backgroundColor: "#f8f9fa",
          border: "1px solid #dee2e6",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}>
          <h3 style={{ margin: "15px " }}>Contactanos</h3>
          <h6>Tienes dudas, comentario o recomendaciones envíanos un mensaje.</h6>
        </div>
  
        <div className={styles.contenedor}>
          <Form.Group controlId="formName">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateNameOnChange(e.target.value);
              }}
            />
            <Form.Text style={{ color: "red" }}>{nameError}</Form.Text>
          </Form.Group>
  
          <Form.Group controlId="formEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmailOnChange(e.target.value);
              }}
            />
            <Form.Text style={{ color: "red" }}>{emailError}</Form.Text>
          </Form.Group>
  
          <Form.Group controlId="formMessage">
            <Form.Label style={{marginTop:"10px"}}>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Ingrese su mensaje"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                validateMessageOnChange(e.target.value);
              }}
            />
            <Form.Text style={{ color: "red" }}>{messageError}</Form.Text>
          </Form.Group>
  
          <hr />
          <Button  variant="secondary" type="submit" disabled={disableButton} className={styles.boton}>
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  </div>
  
  );
};

export default Email;
