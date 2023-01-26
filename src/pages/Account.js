import React from 'react'
import Shows from '../components/Shows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white relative'>
    <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/4f859d52-289a-4ab5-80b4-f3db0bdf4cde/ID-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        className="object-cover w-full h-[300px]"
      ></img>
      <div className='bg-black/50 absolute top-0 left-0 w-full h-[300px] '/>
      <div className='absolute lg:top-1/3 top-1/2 left-4 text-white w-full h-[300px]'>
        <h1 className='font-extrabold text-3xl font-lato sm:text-4xl'>My Movies</h1>
      </div>

      <Shows/>
    </div>
    </>
  )
}

export default Account