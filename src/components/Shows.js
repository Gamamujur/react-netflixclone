import React, { useRef, useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import {AiOutlineClose} from 'react-icons/ai'


const Shows = () => {
    const {user} = UserAuth()
    const [movielist,setmovies] = useState([])
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= 300;
      };
    
      const scrollRight = () => {
        sliderRef.current.scrollLeft += 300;
      };

      useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setmovies(doc.data()?.savedShows);
        });
      }, [user?.email]);

      const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
      try {
        const result = movielist.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <div>
        <div className="pl-2 pt-10">
      <h1 className="text-white font-bold font-lato sm:text-lg md:text-xl pl-2">Saved Movies</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft size={20} className='bg-white absolute opacity-50 hover:opacity-100 rounded-full left-0 z-10 hidden group-hover:block text-black' onClick={scrollLeft}/>
        <div ref={sliderRef} className='w-full h-full whitespace-nowrap overflow-x-scroll scrollbar-hide scroll-smooth relative'>
            {movielist.map((item,id)=>(
                <div key={id} className="w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative inline-block cursor-pointer p-2">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                ></img>
                <div className="absolute w-full h-full opacity-0 text-white top-0 left-0 hover:bg-black/70 hover:opacity-100 transition duration-300 ease-in">
                  <p className="font-lato font-bold text-xs whitespace-normal h-full text-center flex justify-center items-center w-full p-4 md:text-sm lg:text-base">
                    {item?.title}
                  </p>
                  <p onClick={()=> deleteShow(item.id)} className='absolute text-gray-300 top-2 right-2'><AiOutlineClose size={15} /></p>
                </div>
              </div>
            ))}
        </div>
        <MdChevronRight size={20} className='bg-white absolute opacity-50 hover:opacity-100 rounded-full right-0 z-10 hidden group-hover:block text-black' onClick={scrollRight}/>
      </div>
    </div>
    </div>
  )
}

export default Shows