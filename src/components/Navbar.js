import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handlelogout = async () => {
    try {
      await logOut();
      navigate("/react-netflixclone/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.pageYOffset);
    });
  }, []);

  const navbarClasses =
    scrollPosition > 200
      ? "backdrop-blur-sm bg-gray-800/50"
      : "";

  return (
    <div className={`flex justify-between z-20 fixed w-full p-4 ${navbarClasses} transition duration-300 ease-in`}>
      <Link to="/react-netflixclone/">
        <h1 className="font-bebas text-red-600 text-3xl pt-1 sm:pt-0 sm:text-5xl -ml-2">
          NETFLIX
          <small className="text-xs">clone</small>
        </h1>
      </Link>
      {user?.email ? (
        <div className="pt-1 sm:pt-0">
          <Link to="/account">
            <button className="bg-none px-1 py-1 text-sm sm:px-4 sm:py-2 sm:text-base text-white ">
              Account
            </button>
          </Link>

          <button onClick={handlelogout}
            className="bg-red-600 ml-2 px-1 py-1 sm:px-4 sm:py-2 rounded text-white shadow-black shadow-sm border-transparent border-2 hover:border-white transition duration-300 ease-in text-sm sm:text-base"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="pt-1 sm:pt-0">
          <Link to="/login">
            <button className="bg-none px-1 py-1 text-sm sm:px-4 sm:py-2 sm:text-base text-white ">
              Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 ml-2 px-1 py-1 sm:px-4 sm:py-2 rounded text-white shadow-black shadow-sm border-transparent border-2 hover:border-white transition duration-300 ease-in text-sm sm:text-base">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
