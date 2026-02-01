import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header
      className={`flex items-center p-4 ${location.pathname !== "/" && "justify-between"} sticky top-0 z-20 backdrop-blur-lg bg-white/50 border-b border-gray-100`}
    >
      <h1 className="text-xl bg-clip-text bg-linear-to-r from-red-600 via-gray-900 to-red-600 text-transparent uppercase font-extrabold">
        ContestyCalender
      </h1>
      {location.pathname === "/" ? (
        <>
          <nav className="text-gray-600 flex-1 flex justify-center">
            <a href="" className="mx-4 pb-2 hover:border-b">
              Home
            </a>
            <a href="#features" className="mx-4 pb-2 hover:border-b">
              Features
            </a>
            <a href="" className="mx-4 pb-2 hover:border-b">
              How It Works
            </a>
            <a href="" className="mx-4 pb-2 hover:border-b">
              Testimonial
            </a>
          </nav>
          <div className="w-[10%]"></div>
        </>
      ) : (
        <div className="right-0">
          <button
            className="text-white px-4 py-2 border border-gray-300 rounded-full bg-linear-to-r from-red-600 via-gray-700 to-red-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
