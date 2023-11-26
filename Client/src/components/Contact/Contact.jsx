// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import styled from "styled-components";
// import Image from 'react-bootstrap/Image';
// import contacto from "../../assets/contacto.png"

// const Email = () => {

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_ko3ekug",
//         "template_efdhnp2",
//         form.current,
//          "Z07yDoQAt6am4G7K6",
//       )
//       .then(
//         (result) => {
//           setName("");
//           setEmail("");
//           setMessage("");
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div>
//     <Image src={contacto} fluid style={{ width: '100%', height: '300px' }}/>
//     <br />
//     <br />
//      <h3>Tienes dudas, comentarios, recomendaciones envianos un mensaje. </h3>
     
//     <StyledContactForm>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Nombre</label>
//         <input type="text"
//         name="user_name"
//         value={name}
//         onChange={(e) => setName(e.target.value)} />
//         <label>Email</label>
//         <input type="email" name="user_email" 
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}/>
//         <label>Mensaje</label>
//         <textarea name="user_message"
//         cols="30"
//         value={message}
//         rows="10"
//         onChange={(e) => setMessage(e.target.value)} />
//         <input type="submit" value="Send" />
//       </form>
//     </StyledContactForm>
//     </div>
//   );
// };

// export default Email;


// const StyledContactForm = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// height: 100vh;
// margin-top: -200px; 

//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 250px;
//     font-size: 16px;
//     justify-content: center;
    

//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     label {
//       margin-top: 1rem;
//     }

//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import style from "./Contact.module.css"
import Image from 'react-bootstrap/Image';
import contacto from "../../assets/contacto.png"


const Email = () => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [asunto, setAsunto] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_ko3ekug",
      "template_efdhnp2",
      event.target,
      "Z07yDoQAt6am4G7K6",)
    .then(response => console.log(response))
    setName("");
    setLastname("");
    setAsunto("");
    setEmail("");
    setMessage("")
    .catch(error => console.log(error))
  }

  return (
    <div>
     <Image src={contacto} fluid style={{ width: '100%', height: '300px' }}/>
     <div className={style.form}>
      <form className={style.form_mail} onSubmit={sendEmail}>
      <h3 className=''>Tienes dudas, comentarios, recomendaciones envianos un mensaje. </h3>
      <h1 className={style.title_form}>Contactanos</h1>
      <label>Nombre</label>
        <input type="text"
        name="user_name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
        {/* <label>Apellido</label>
        <input type="text"
        name="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)} /> */}
        <label>Email</label>
        <input type="email" name="user_email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      <label>Mensaje</label>
         <textarea name="user_message"
        cols="30"
       value={message}
         rows="10"
        onChange={(e) => setMessage(e.target.value)} />
        <hr />
        <button>Send</button>
      </form>
    </div>
    </div>
  )
}

export default Email;