// import { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import style from "./Contact.module.css"
// import Image from 'react-bootstrap/Image';
// import contacto from "../../assets/contacto.png"


// const Email = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')

//   const sendEmail = (event) => {
//     event.preventDefault();

//     emailjs.sendForm(
//       "service_ko3ekug",
//       "template_efdhnp2",
//       event.target,
//       "Z07yDoQAt6am4G7K6",)
//     .then(response => console.log(response))
//     setName("");
//     setEmail("");
//     setMessage("")
//     .catch(error => console.log(error))
//   }

//   return (
//     <div>
//      <Image src={contacto} fluid style={{ width: '100%', height: '300px' }}/>
//      <div className={style.form}>
//       <form className={style.form_mail} onSubmit={sendEmail}>
//       <h3 className=''>Tienes dudas, comentarios, recomendaciones envianos un mensaje. </h3>
//       <h1 className={style.title_form}>Contactanos</h1>
//       <label>Nombre</label>
//         <input type="text"
//         name="user_name"
//         value={name}
//         onChange={(e) => setName(e.target.value)} />
//         <label>Email</label>
//         <input type="email" name="user_email" 
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}/>
//       <label>Mensaje</label>
//          <textarea name="user_message"
//         cols="30"
//        value={message}
//          rows="10"
//         onChange={(e) => setMessage(e.target.value)} />
//         <hr />
//         <button>Send</button>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default Email;

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'react-bootstrap/Image';
import style from "./Contact.module.css"
import contacto from "../../assets/contacto.png"

const Email = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_ko3ekug",
      "template_efdhnp2",
      event.target,
      "Z07yDoQAt6am4G7K6",
    )
    .then(response => {
      console.log(response);
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch(error => console.log(error))
  }

  const labelStyles = {
    fontSize: '1em',
    color: '#9cc7f3',
    fontWeight: '900',
    marginBottom: '0.5rem',
  };

  const inputStyles = {
    fontSize: '1rem',
    background: 'transparent',
    boxShadow: '0 -2px 2px rgb(199, 194, 194)',
    borderRadius: '20px',
    color: '#ffff',
  };

  const textareaStyles = {
    borderRadius: '10px',
    backgroundColor: '#a3a8af',
    padding: '0.5rem',
  };

  const buttonStyles = {
    width: '8rem',
    borderRadius: '20px',
    fontSize: '1.2rem',
    color: 'green',
    backgroundColor: '#9df59d',
    cursor: 'pointer',
  };

  const buttonHoverStyles = {
    width: '8rem',
    backgroundColor: 'green',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#ffff',
  };

  return (
    <div>
      <Image src={contacto} fluid style={{ width: '100%', height: '300px' }}/>
        <form className={style.form_mail} onSubmit={sendEmail}>
          <h3 style={{ color: '#ff6600', fontWeight: '600', fontFamily: 'Shadows Into Light, cursive', margin: '0' }}>
            Tienes dudas, comentarios, recomendaciones envíanos un mensaje.
          </h3>
          <h1 style={{ color: '#ff6600', fontWeight: '600', fontFamily: 'Shadows Into Light, cursive', margin: '0' }}>
            Contactanos
          </h1>
          <label style={labelStyles}>Nombre</label>
          <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyles} />
          <label style={labelStyles}>Email</label>
          <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyles} />
          <label style={labelStyles}>Mensaje</label>
          <textarea name="user_message" cols="30" value={message} rows="10" onChange={(e) => setMessage(e.target.value)} style={textareaStyles} />
          <hr style={{ width: '10rem' }} />
          <button style={buttonStyles} onMouseOver={(e) => e.target.style = buttonHoverStyles} onMouseOut={(e) => e.target.style = buttonStyles} onFocus={(e) => e.target.style = buttonHoverStyles} onBlur={(e) => e.target.style = buttonStyles}>
            Send
          </button>
        </form>
      </div>
  );
}

export default Email;
