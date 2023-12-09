const { Router } = require("express");
const { handlerPostReview, handlerGetAllReviews, handlergetReviewsByUser, handlerPutReview } = require('../handlers/handlerReviews');

const review = Router();

review.get("/:UserEmail", handlergetReviewsByUser);
review.post("/", handlerPostReview);
review.get("/", handlerGetAllReviews);
review.put("/:id", handlerPutReview)


module.exports = review