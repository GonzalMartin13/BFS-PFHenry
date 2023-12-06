const { Router } = require("express");
const { handlerPostReview, handlerGetAllReviews, handlergetReviewsByUser } = require('../handlers/handlerReviews');

const review = Router();

review.get("/:UserEmail", handlergetReviewsByUser);
review.post("/", handlerPostReview);
review.get("/", handlerGetAllReviews);


module.exports = review