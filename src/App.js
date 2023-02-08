import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Login from "./pages/Login"
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import RouteProtect from "./components/RouteProtect"
import Footer from "./components/Footer";
import Detail from "./components/Detail";

const App = () => {
  const location = useLocation();
  const [viewmodal,setmodal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({});

  const modalhandler = movie =>{
    setSelectedMovie(movie)
    setmodal(true)
    console.log('handler')
  }

  const closehandler = () =>{
    setmodal(false)
  }
  
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {viewmodal && <Detail onClose={closehandler} movielist={selectedMovie} onCloses={closehandler}/>}
        <Routes>
            <Route path='/react-netflixclone/' element={<Home onClick={modalhandler}/>}  />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/account' element={<RouteProtect> <Account/> </RouteProtect>} />
        </Routes>
      </AuthContextProvider>
      {location.pathname === "/react-netflixclone/" && <Footer />}
    </>
  );
};

export default App;
