import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setmovie] = useState([]);

  const slicestr = (str,num) =>{
    if(str?.length > num){
        return str.slice(0, num) + '...'
    } else {
        return str
    }
  }

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setmovie(response.data.results);
    });
  }, []);
 

  return (
    <div className="w-full h-[550px] lg:h-[100vh] text-white relative">
      <div className="w-full h-full absolute bg-gradient-to-r from-black top-0 left-0" />
      <div className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="w-full h-full object-cover sm:object-cover object-center"
          alt={movie?.title}
        ></img>

        <div className="absolute top-[40%] p-2 sm:p-10 md:p-20">
            <h1 className="text-2xl sm:text-3xl font-bold pr-10 sm:pr-0 hidden sm:block lg:w-1/2">{movie?.title}</h1>
            <h1 className="text-2xl sm:text-3xl font-bold pr-10 sm:pr-0 sm:hidden">{slicestr(movie?.title,50)}</h1>
            <p className="text-sm text-gray-400">Release Date : {movie?.release_date}</p>
            <p className="w-full pr-10 sm:pr-0 md:w-[70%] lg:w-[50%] xl:w-[40%] mt-2 md:text-lg">{slicestr(movie?.overview,150)}</p>
          <div className="mt-4">
            <button className="bg-gray-100 text-black text-lg px-6 py-2 rounded hover:bg-transparent hover:text-white transition duration-300 ease-in">
              Play
            </button>
            <button className=" text-white text-base px-2 py-2 border border-gray-300 ml-3 rounded hover:bg-gray-100 hover:text-black transition duration-300 ease-in">
              Watch Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
