import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import Person from "../assets/Profil.png";

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 sm:gap-8">
          <a className="text-blue-600 font-bold text-lg sm:text-xl cursor-pointer" href="">
            MORENT
          </a>
          <div className="relative flex items-center bg-white rounded-xl border border-gray-600 shadow-md">
            <CiSearch className="text-2xl absolute left-3" />
            <input
              className="p-2 pl-10 rounded-xl border-none w-40 sm:w-64 focus:outline-none"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 text-xl">
          <CiHeart />
          <IoIosNotificationsOutline />
          <IoMdSettings />
          <img src={Person} alt="person" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
        </div>
      </nav>
    </header>
  );
}