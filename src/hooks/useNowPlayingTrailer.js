import { useEffect } from "react";
import { API_OPTION } from "../Util/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Util/moviesSlice";

const useNowPlayingTrailer = (moviesId) => {
  
  const dispatch = useDispatch();
  const getMoviesVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesId}/videos?language=en-US`,
      API_OPTION
    );

    const data = await response.json();

    const filterData = data.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : data[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideo();
  }, []);
};

export default useNowPlayingTrailer;
