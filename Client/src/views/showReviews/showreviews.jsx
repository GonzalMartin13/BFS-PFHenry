import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllReviews } from "../../redux/Slices/reviewsSlice";
import Carousel from 'react-bootstrap/Carousel';
import { FaStar } from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import chitaizq from "../../assets/chitaizq.svg"
import chitader from "../../assets/chitader.svg"

const ShowReviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.allReviews);

  useEffect(() => {
    dispatch(fetchAllReviews());
  }, [dispatch]);

  return (
    <div className="review-carousel-container">
    <Carousel fade className="border rounded" style={{ maxWidth: "500px", margin: "auto" }}
  prevIcon={<Button variant="secondary"><img src={chitaizq} style={{ width: '20px' }} alt="izquierda" /></Button>}
  nextIcon={<Button variant="secondary"><img src={chitader} style={{ width: '20px' }} alt="derecha" /></Button>}
    >
      {reviews.map((review) => (
        <Carousel.Item key={review.id} className="review-item">
          <div className="text-container">
          <div className="stars-container" style={{ marginBottom: '40px' }}>
              {[...Array(review.rating)].map((_, index) => (
                <FaStar key={index} size={20} color="#ffc107" />
              ))}
            </div>
            <p className="comment-text">"{review.comment}"</p>
            <p className="user-email">{review.UserEmail}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
  );
};

export default ShowReviews;