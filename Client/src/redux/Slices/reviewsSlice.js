import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userReview: {
    id: "",
    rating: "",
    comment: "",
    UserEmail:""
  },
  created: false,
  allReviews: [],
};

export const submitReview = createAsyncThunk(
  "reviews/submitReview",
  async (reviewData, { dispatch }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/reviews",
        reviewData
      );

      const { id, rating, comment,UserEmail } = response.data;
      dispatch(setUserReview({ id, rating, comment,UserEmail }));
      return response.data;
    } catch (error) {
      console.error("Error al enviar la revisión:", error.message);
      throw error;
    }
  }
);

export const fetchAllReviews = createAsyncThunk(
  "reviews/fetchAllReviews",
  async () => {
    const response = await axios.get(`http://localhost:3001/reviews`);
    return response.data;
  }
);

export const reviews = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setUserReview: (state, action) => {
      const { id, rating, comment,UserEmail } = action.payload;
      state.userReview.id = id;
      state.userReview.rating = rating;
      state.userReview.comment = comment;
      state.userReview.userEmail = UserEmail;
      state.created = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        state.allReviews = action.payload;
      })
      .addCase(submitReview.fulfilled, (state, action) => {
        
      });
  },
});

export const { setUserReview } = reviews.actions;
export default reviews.reducer;
