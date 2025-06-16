import React, { useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import Person from "./assets/Profil.png";
import favoriteStore from "./store/favoriteStore";
import { NavLink } from "react-router-dom";

const Header = React.memo(({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { favorites } = favoriteStore();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="flex flex-wrap justify-between items-center gap-4 p-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 flex-grow">
          <a className="text-blue-600 font-bold text-lg sm:text-xl" href="">
            MORENT
          </a>
          <div className="relative flex-grow sm:flex-grow-0 w-full sm:w-64">
            <div className="relative bg-white rounded-xl border border-gray-300 w-full">
              <CiSearch className="text-2xl absolute left-3 top-2.5 text-gray-500" />
              <input
                className="w-full p-2 pl-10 rounded-xl border-none focus:outline-none"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 text-xl">
          <NavLink
            to="/favorites"
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <CiHeart />
            <span className="text-sm sm:text-base">🛒{favorites.length}</span>
          </NavLink>
          <IoIosNotificationsOutline className="hover:text-blue-600 transition cursor-pointer" />
          <IoMdSettings className="hover:text-blue-600 transition cursor-pointer" />
          <img
            loading="lazy"
            src={Person}
            alt="person"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover cursor-pointer hover:scale-105 transition"
          />
        </div>
      </nav>
    </header>
  );
});

export default Header;
