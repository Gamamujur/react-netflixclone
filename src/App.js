import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Login from "./pages/Login"
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import RouteProtect from "./components/RouteProtect"
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/account' element={<RouteProtect> <Account/> </RouteProtect>} />
        </Routes>
      </AuthContextProvider>
      {location.pathname === "/" && <Footer />}
    </>
  );
};

export default App;
