import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "react-bootstrap/Image";
import contacto from "../../assets/contacto.png";
import {
  validateName,
  validateMail,
  validateMessage,
} from "./validationContact";

const Email = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("12345678");
  const [asunto, setAsunto] = useState("");
  const [email, setEmail] = useState("");
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
   
  

  const sendEmail = (event) => {
    event.preventDefault();
  
    if (nameError || emailError || messageError) {
      console.log("Formulario inválido");
      return;
    }

      
    emailjs
      .sendForm(
        "service_ko3ekug",
        "template_efdhnp2",
        event.target,
        "Z07yDoQAt6am4G7K6"
      )
      .then((response) => {
        console.log(response);
        setName("");
        setPhone("");
        setAsunto("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Image src={contacto} fluid style={{ width: "100%", height: "300px" }} />
      <div>
        <form onSubmit={sendEmail}>
          <h3>Contactanos</h3>
          <h6>
            Tienes dudas, comentarios, recomendaciones envianos un mensaje.{" "}
          </h6>
          <br></br>
          <label>Nombre</label>
          <br></br>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateNameOnChange(e.target.value);
            }}
          /><br></br>
           <span style={{ color: "red" }}>{nameError}</span>
        
          <br></br>
          <label>Email</label>
          <br></br>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmailOnChange(e.target.value);
            }}
          /><br></br>
           <span style={{ color: "red" }}>{emailError}</span>
          <br></br>
          <label>Mensaje</label>
          <br></br>
          <textarea
            name="user_message"
            cols="30"
            value={message}
            rows="10"
            onChange={(e) => {
              setMessage(e.target.value);
              validateMessageOnChange(e.target.value);
            }}
          /><br></br>
           <span style={{ color: "red" }}>{messageError}</span>
          <hr />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Email;

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
