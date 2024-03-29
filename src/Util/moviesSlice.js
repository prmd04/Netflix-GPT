import { createSlice } from "@reduxjs/toolkit";

const moviesSice = createSlice({
  name:"movies",
  initialState : {
    nowPlayingMovies : null,
    trailerVideo : null

  },
  reducers: {
    addNowPlayingMovies : (state, action) =>{
      state.nowPlayingMovies=action.payload;
    },
    addTrailerVideo : (state,action) =>{
      state.trailerVideo = action.payload;
    }
  }
})

export const {addNowPlayingMovies,addTrailerVideo} = moviesSice.actions;
export default moviesSice.reducer;