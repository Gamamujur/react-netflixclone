import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movies = ({ item,...props }) => {
  const [like, setlike] = useState(false);
  const [save, setsave] = useState(false);
  const { user } = UserAuth();

  const movieid = doc(db, "users", `${user?.email}`);

  const slicestr = (str,num) =>{
    if(str?.length > num){
        return str.slice(0, num) + '...'
    } else {
        return str
    }
  }

  const saveshow = async () => {
    if (user?.email) {
      setlike(!like);
      setsave(true);
      await updateDoc(movieid, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to like a movie");
    }
  };


  return (
    <div className="w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative inline-block cursor-pointer p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      ></img>
      <div className="absolute w-full h-full opacity-0 text-white top-0 left-0 hover:bg-black/70 hover:opacity-100 transition duration-300 ease-in">
        <p className="font-lato font-bold text-xs whitespace-normal h-full text-center justify-center items-center w-full p-4 hidden sm:flex md:text-sm lg:text-base">
          {item?.title}
        </p>

        <p className="font-lato font-bold text-xs whitespace-normal h-full text-center justify-center items-center w-full p-4 flex sm:hidden md:text-sm lg:text-base">
         {slicestr(item?.title,30)}
        </p>
        <p onClick={saveshow}>
          {like ? (
            <FaHeart className="absolute top-3 left-3 text-red-400" />
          ) : (
            <FaRegHeart className="absolute top-3 left-3 text-gray-400" />
          )}
        </p>
        <div className="absolute bottom-2 sm:bottom-3 w-full text-center">
          <button className="font-white text-[10px] text-slate-300 bg-transparent rounded-full border-slate-200 sm:border-2 sm:text-xs sm:p-1" onClick={() => props.onClick(item)}>
            Show Details
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Movies;
