import React, { useEffect, useState } from "react";
import {
  validateName,
  validatePhone,
  validateMail,
  validateMessage,
} from "./validationContact";

function FormContact() {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formMail, setFormMail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(false);
  const [completForm, setCompletForm] = useState({
    name: "",
    phone: "",
    mail: "",
    message: "",
  });

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [mailError, setMailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [validForm, setValidForm] = useState(false);

  const handleNameChange = (event) => {
    setFormName(event.target.value);
    setNameError(validateName(event.target.value));
    setCompletForm({
      ...completForm,
      name: event.target.value,
    });
  };

  const handlePhoneChange = (event) => {
    setFormPhone(event.target.value);
    setPhoneError(validatePhone(event.target.value));
    setCompletForm({
      ...completForm,
      phone: event.target.value,
    });
  };

  const handleMailChange = (event) => {
    setFormMail(event.target.value);
    setMailError(validateMail(event.target.value));
    setCompletForm({
      ...completForm,
      mail: event.target.value,
    });
  };

  const handleMessageChange = (event) => {
    setFormMessage(event.target.value);
    setMessageError(validateMessage(event.target.value));
    setCompletForm({
      ...completForm,
      message: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (validForm) {
      console.log("Formulario válido");
      console.log(completForm);
      setSendMessage(true);
    } else {
      console.log("Existe algun errror");
    }
  };

  useEffect(() => {
    const check =
      !validateName(formName) &&
      !validatePhone(formPhone) &&
      !validateMail(formMail) &&
      !validateMessage(formMessage);
    setValidForm(check);
  }, [formName, formPhone, formMail, formMessage]);

  return (
    <div>
      <h1>Contactanos</h1>
      <br />
      <p>Tienes dudas, comentarios, recomendaciones envianos un mensaje. </p>
      <div>
        <input
          placeholder="Nombre"
          name="name"
          value={formName}
          onChange={handleNameChange}
        />
        <br />
        <span style={{ color: "red" }}>{nameError}</span>
        <br />
        <input
          placeholder="Telefono"
          name="phone"
          value={formPhone}
          onChange={handlePhoneChange}
        />
        <br />
        <span style={{ color: "red" }}>{phoneError}</span>
        <br />
        <input
          placeholder="Email"
          name="mail"
          value={formMail}
          onChange={handleMailChange}
        />
        <br />
        <span style={{ color: "red" }}>{mailError}</span>
        <br />
        <textarea
          placeholder="Mensaje"
          name="message"
          value={formMessage}
          onChange={handleMessageChange}
        />
        <br />
        <span style={{ color: "red" }}>{messageError}</span>
        <br />
        <button type="submit" onClick={handleSubmit} disabled={!validForm}>
          Enviar
        </button>
        {sendMessage && (
          <div style={{ color: "green", marginTop: "10px" }}>
            ¡Hemos recibido tu mensaje, de ser necesario en breve nos contactaremos!
          </div>
        )}
      </div>
    </div>
  );
}

export default FormContact;

// action
// export const sendMessage = async (Data) => {
//     try {
//       const response = await axios.post('ruta', Data);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

// handle
// const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (FormValid()) {
//       try {
//         const response = await sendMessage(formData)

//       } catch (error) {

//       }
//     }
//   };
