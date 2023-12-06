import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";



const Reviews = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [input, setInput] = useState({
    comment: ""
  });

  const {isLoggedIn, admin} = useSelector((state) => state.user);
  console.log(isLoggedIn)

  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
  }

  const handleCommentChange = (event) => {
    setInput({
      ...input,
      comment: event.target.value
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(!isLoggedIn) {
      Swal.fire({
        icon: "info",
        title: "Debes iniciar sesión primero",
      });
    }
    //dispatch
    console.log("Rating:", rating);
    console.log("Comment:", input.comment);
    setRating(null);
    setInput({
      comment: ""
    });
  }

  // const clearForm = () => {
  //   setRating(null);
  //   setInput({
  //     comment: ""
  //   });
  // }

  return (
    <div className="reviews-container">
      <h2>Calificanos!</h2>
      <form onSubmit={submitHandler}>
        {/* Estrellas de valoración */}
        <div className="rating-container">
          {[...Array(5)].map((_, index) => (
            <label
              key={index}
              onClick={() => handleRatingChange(index + 1)}
              className="star-label"
            >
              <FaStar
                size={30}
                style={{
                  cursor: 'pointer',
                  color: index + 1 <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }}
                onMouseEnter={() => setHover(index + 1)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          ))}
        </div>

        {/* Área de comentarios */}
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Deja tu comentario"
          style={{ maxWidth: '500px', margin: '0 auto' }}
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '70px' }}
            value={input.comment}
            onChange={handleCommentChange}
            size="sm"
            className="my-2"
          />
        </FloatingLabel>

        {/* Botones de envío y limpieza */}
        <Button type="submit" disabled={!rating} className="my-2">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Reviews;
