import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const [error,seterror] = useState('')

  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror('')
    try {
      await logIn(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
      seterror(error.message)
    }
}
  
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
            <h1 className="text-3xl font-bold text-center font-lato">
              Sign In
            </h1>
            {error && <p className="px-4 py-4 text-sm text-center bg-red-700 mt-2">Incorrect Email or Password</p>}

            <form className="flex flex-col justify-center mt-[25%] text-white" onSubmit={handlesubmit} >
              <input
              onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="px-2 py-2 rounded bg-gray-600 w-full"
              />
              <input
              onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className="px-2 py-2 mt-4 rounded bg-gray-600 w-full"
              />
              <button className="mt-8 py-2 px-4 bg-red-700 w-full rounded">
                Sign In
              </button>
              <div className="flex justify-between mt-4 font-lato text-sm">
                <div>
                  <p>
                    <input type="checkbox" className="mr-1" />
                    Remember Me
                  </p>
                </div>
                <div>
                  <p>Need Help?</p>
                </div>
              </div>
              <p className="text-center mt-4 text-slate-400">
                Don't have an account?
              </p>
              <Link to="/signup">
                <p className="text-center font-bold text-red-500">Sign Up</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
