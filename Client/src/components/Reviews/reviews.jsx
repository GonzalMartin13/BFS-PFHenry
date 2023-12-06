import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { setUserReview, submitReview } from "../../redux/Slices/reviewsSlice";

const Reviews = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [input, setInput] = useState({
    comment: "",
    rating: 0,
    UserEmail: "",
  });

  const { isLoggedIn } = useSelector((state) => state.user);
  const UserEmail = useSelector((state) => state.user.user.email);
  const isCreated = useSelector((state) => state.reviews.created);

  const dispatch = useDispatch();

  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
    setInput({
      ...input,
      rating: currentRating,
    });
  };

  const handleCommentChange = (event) => {
    setInput({
      ...input,
      comment: event.target.value,
      UserEmail: UserEmail,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!isLoggedIn) {
      Swal.fire({
        icon: "info",
        title: "Debes iniciar sesión primero",
      });
      return;
    }

    if (isCreated) {
      Swal.fire({
        icon: "info",
        title: "Ya has hecho una calificación",
      });
      return;
    }

    try {
      await dispatch(submitReview(input));
      Swal.fire("Gracias por dejar tu calificación!");
      console.log("Rating:", rating);
      console.log("Comment:", input.comment);
      setRating(null);
      setInput({
        comment: "",
        rating: 0,
      });
    } catch (error) {
      console.error("Error al enviar la revisión:", error.message);
    }
  };

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
                  cursor: "pointer",
                  color: index + 1 <= (hover || rating) ? "#ffc107" : "#e4e5e9",
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
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "70px" }}
            value={input.comment}
            onChange={handleCommentChange}
            size="sm"
            className="my-2"
          />
        </FloatingLabel>

        {/* Botones de envío y limpieza */}
        <Button
          type="submit"
          disabled={!rating || !input.comment.trim()}
          className="my-2"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Reviews;
