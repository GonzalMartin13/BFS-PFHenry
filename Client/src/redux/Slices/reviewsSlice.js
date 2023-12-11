import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userReview: {
    id: "",
    rating: "",
    comment: "",
    UserEmail:""
  },
  allReviews: [],
};

export const submitReview = createAsyncThunk(
  "reviews/submitReview",
  async (reviewData, { dispatch }) => {
    try {
      const response = await axios.post(

     //   "http://localhost:3001/reviews",
        "https://bfs-pfhenry-production.up.railway.app/reviews", 

        reviewData
      );
      console.log(response.data)

      const { id, rating, comment,UserEmail } = response.data;
      dispatch(setUserReview({ id, rating, comment,UserEmail }));
      return response.data;
    } catch (error) {
      console.error("Error al enviar la revisión:", error.message);
      throw error;
    }
  }
);

export const editReview = createAsyncThunk(
  "reviews/editReview",
  async (reviewData, { dispatch }) => {
    try {
      const response = await axios.put(

    //    `http://localhost:3001/reviews/${reviewData.id}`,
         `https://bfs-pfhenry-production.up.railway.app/reviews/${reviewData.id}`, 

        reviewData
      );

      console.log(response.data.updatedReview)

      dispatch(setUserReview(response.data.updatedReview)); // Actualiza el estado con los nuevos datos
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

   // const response = await axios.get(`http://localhost:3001/reviews`);
     const response = await axios.get(`https://bfs-pfhenry-production.up.railway.app/reviews`); 

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
      state.userReview.UserEmail = UserEmail;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        state.allReviews = action.payload;
      })
      .addCase(editReview.fulfilled, (state, action) => {
        
      });
  },
});

export const { setUserReview } = reviews.actions;
export default reviews.reducer;
