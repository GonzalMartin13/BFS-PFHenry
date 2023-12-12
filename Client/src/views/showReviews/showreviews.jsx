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
    <Carousel
      fade
      className="border rounded"
      style={{
        maxWidth: "500px",
        margin: "auto",
        backgroundColor: "#f8f9fa",
        border: "1px solid #dee2e6",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        height: "190px"
      }}
    >
      {reviews.map((review) => (
        <Carousel.Item key={review.id} className="review-item">
          <div className="text-container">
            <div className="stars-container" style={{ marginBottom: '20px', marginTop: "15px" }}>
              {[...Array(review.rating)].map((_, index) => (
                <FaStar key={index} size={20} color="#ffc107" />
              ))}
            </div>
            <p className="comment-text">"{review.comment}"</p>
          </div>
          <div style={{ marginTop: '55px' }} className="user-email">
            {review.UserEmail}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
  
  
  );
};

export default ShowReviews;