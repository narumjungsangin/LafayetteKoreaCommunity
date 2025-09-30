import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center h-16 px-4">
       <Link to="/" className="inline-block mt-6 text-blue-600 underline"> <span className="text-teal-600 font-bold text-xl">West Lafayette Korea</span></Link>
        <nav className="flex gap-4 text-sm">
          <Link to="/buynsell"  className="text-gray-700 hover:text-teal-600">당근마켓</Link>
          <Link to="/board"  className="text-gray-700 hover:text-teal-600">소통창구</Link>
          <Link to="/job"  className="text-gray-700 hover:text-teal-600">구인구직</Link>
          <a href="#" className="bg-teal-600 text-white px-3 py-1 rounded">KOR / ENG</a>
          <a href="#" className="bg-teal-600 text-white px-3 py-1 rounded">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;