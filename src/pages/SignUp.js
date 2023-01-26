import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/4f859d52-289a-4ab5-80b4-f3db0bdf4cde/ID-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        className="object-cover w-full h-full"
      ></img>
      <div className="fixed bg-black/50 h-screen w-full top-0 left-0"></div>

      <div className="fixed w-full h-full px-4 py-24 z-10 top-0">
        <div className="max-w-[500px] h-full mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-8 px-4">
          <h1 className='text-3xl font-bold text-center font-lato'>Sign Up</h1>
          <form className="flex flex-col justify-center mt-[25%] text-white" onSubmit={handlesubmit}>
            <input type='email' placeholder="Email" autoComplete="email" className="px-2 py-2 rounded bg-gray-600 w-full" onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder="Password" autoComplete="current-password" className="px-2 py-2 mt-4 rounded bg-gray-600 w-full" onChange={(e) => setPassword(e.target.value)}/>
            <button className="mt-8 py-2 px-4 bg-red-700 w-full rounded">
              Sign Up
            </button>
            <div className="flex justify-between mt-4 font-lato text-sm">
              <div>
              <p><input type="checkbox" className="mr-1"/>Remember Me</p></div>
              <div>
              <p>Need Help?</p></div>
            </div>
            <p className="text-center mt-4 text-slate-400">Already have an account?</p>
            <Link to='/login'>
            <p className="text-center font-bold text-red-500">Sign In</p>
            </Link>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
