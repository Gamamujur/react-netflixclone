import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import closeicon from "./close-bold-svgrepo-com.svg";
import axios from "axios";

const Detail = (props) => {
  const [showmovie, setmovie] = useState();
  
  const url = `https://api.themoviedb.org/3/movie/${props.movielist?.id}/videos?api_key=6cadeec542a555393700651de906e151&language=en-US`;
  useEffect(() => {
    axios.get(url).then((response) => {
     
      if (response.data.results.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );
        setmovie(response.data.results[randomIndex].key);
      } else {
        console.log("No video available");
      }
    });
  }, []);
  return (
    <Modal onCloses={props.onCloses}>
      <div className="relative h-full w-full">
        <div className="absolute top-1 right-1">
          <div>
            <img
              src={closeicon}
              className="w-7 cursor-pointer"
              onClick={props.onClose}
            ></img>
          </div>
        </div>

        <div className="flex items-center justify-center h-screen w-full">
          {showmovie ? (
            <iframe
              className="w-full h-3/4 sm:w-3/4 object-contain"
              src={`https://www.youtube.com/embed/${showmovie}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in- picture"
              allowFullScreen
            />
          ) : (
            <p className="text-center">Loading video...</p>
          )}
        </div>

        <div className="mx-2 my-4">
          <div>
            <h1 className="text-slate-300 font-lato text-2xl font-bold sm:text-center ss:text-3xl md:text-4xl">
              {props.movielist?.title}
            </h1>
          </div>
          <div className="mt-14">
            <h2 className="text-zinc-400 border-b-2">Overview</h2>

            <h3 className="text-slate-300">
              Release Date : {props.movielist?.release_date}
            </h3>

            <h2 className="text-white font-mons text-md leading-loose mt-4">
              {props.movielist?.overview}
            </h2>

            <h3 className="text-slate-400 mt-10 border-t-2 border-b-2 p-2 font-mons text-sm text-center">
              Rating : {props.movielist?.vote_average} out of {props.movielist?.vote_count} votes
            </h3>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Detail;
