import axios from "axios";
import {MdChevronLeft, MdChevronRight} from "react-icons/md"
import React, { useEffect, useRef, useState } from "react";
import Movies from "./Movies";

const Row = ({title, url}) => {
    const [movielist,setmovie] = useState([])

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= 300;
      };
    
      const scrollRight = () => {
        sliderRef.current.scrollLeft += 300;
      };


    useEffect(()=>{
        axios.get(url).then(response => {
            setmovie(response.data.results)
        })
    },[url])

    
  return (
    
    <div className="pl-2 pt-10">
      <h1 className="text-white font-bold font-lato sm:text-lg md:text-xl pl-2">{title}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft size={20} className='bg-white absolute opacity-50 hover:opacity-100 rounded-full left-0 z-10 hidden group-hover:block' onClick={scrollLeft}/>
        <div ref={sliderRef} className='w-full h-full whitespace-nowrap overflow-x-scroll scrollbar-hide scroll-smooth relative overflow-y-hidden'>
            {movielist.map((item,id)=>(
                <Movies key={id} item={item} />
            ))}
        </div>
        <MdChevronRight size={20} className='bg-white absolute opacity-50 hover:opacity-100 rounded-full right-0 z-10 hidden group-hover:block' onClick={scrollRight}/>
      </div>
    </div>

    
  );
};

export default Row;
