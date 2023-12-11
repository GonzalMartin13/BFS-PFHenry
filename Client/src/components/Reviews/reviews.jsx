import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { submitReview, editReview,fetchAllReviews } from "../../redux/Slices/reviewsSlice";

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
  // const reviews = useSelector((state) => state.reviews.allReviews);

  const dispatch = useDispatch();
  

  useEffect(() => {
    if (comment !== "" && pablo !== 0) {
      setReviewCreated(true);
    }
  }, [comment, pablo]);

  // useEffect(() => {
  //   // Reinicia el estado cuando el usuario cierra sesión
  //   if (!isLoggedIn) {
  //     setRating(null);
  //     setHover(null);
  //     setInput({
  //       comment: "",
  //       rating: 0,
  //       UserEmail: "",
  //     });
  //     setEditMode(false);
  //     setReviewCreated(false);
  //   } else {
  //     // Obtén todas las revisiones y filtra la revisión del usuario
  //     dispatch(fetchAllReviews())
  //       .then((response) => {
  //         console.log("Respuesta de fetchAllReviews:", response);
  
  //         // Verifica si la respuesta es un array en la propiedad payload
  //         if (Array.isArray(response.payload)) {
  //           const userReview = response.payload.find((review) => review.UserEmail === UserEmail);
  
  //           if (userReview) {
  //             const { comment, rating } = userReview;
  //             setRating(rating);
  //             setInput({
  //               comment,
  //               rating,
  //               UserEmail,
  //             });
  //             setEditMode(true);
  //             setReviewCreated(true);
  //           }
  //         } else {
  //           // Maneja el caso cuando la propiedad payload no es un array
  //           console.error("Error: la propiedad payload no es un array");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error al obtener las revisiones:", error.message);
  //       });
  //   }
  // }, [isLoggedIn, UserEmail, dispatch]);
  
  
  

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
        UserEmail: "",
      });
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
        title: "ya has hecho una calificación",
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
      {reviewCreated && isLoggedIn ? (
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
