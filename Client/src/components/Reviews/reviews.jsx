import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {submitReview, editReview } from "../../redux/Slices/reviewsSlice";

const Reviews = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [input, setInput] = useState({
    comment: "",
    rating: 0,
    UserEmail: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [reviewCreated, setReviewCreated] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.user);
  const UserEmail = useSelector((state) => state.user.user.email);
  const idReview = useSelector((state) => state.reviews.userReview.id);
  const { comment, rating: pablo } = useSelector((state) => state.reviews.userReview);
console.log(UserEmail)

  const dispatch = useDispatch();

  useEffect(() => {
    if (comment !== "" && pablo !== 0) {
      setReviewCreated(true);
    }
  }, [comment, pablo]);

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

      setInput({
        comment: "",
        rating: 0,
        UserEmail: ""
      })
      return;
    }

    try {
      if (editMode) {
        await dispatch(editReview({ id: idReview, ...input }));
      } else {
        await dispatch(submitReview(input));
        setReviewCreated(true);
      }
      Swal.fire("Gracias por dejar tu calificación!");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ya has echo una calificación",
      });
      console.error("Error al enviar la revisión:", error.message);
    }
  };

  const editHandler = () => {
    setEditMode(true);
    setReviewCreated(false);

    const currentReview = { comment, rating: pablo }; 
    if (currentReview) {
      setInput({
        comment: currentReview.comment,
        rating: currentReview.rating,
        UserEmail: UserEmail,
      });
    }
  };

  return (
    <div className="reviews-container">
      <h2>Calificanos!</h2>
      {reviewCreated ? (
        
        <div>
          <p>
            {" "}
            {[...Array(pablo)].map((_, index) => (
              <FaStar key={index} size={20} style={{ color: "#ffc107" }} />
            ))}
          </p>
          <p>{comment}</p>
          <Button onClick={editHandler}>Editar</Button>
        </div>
      ) : (
       
        <form onSubmit={submitHandler}>
        
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

    
          <Button
            type="submit"
            disabled={!rating || !input.comment.trim()}
            className="my-2"
          >
            {editMode ? "Guardar cambios" : "Enviar"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default Reviews;
