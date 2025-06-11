import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaGasPump } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Card = ({ car }) => {
  const [isLiked, setIsLiked] = useState(car.isLiked);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <section>
      <div>
        <div className="bg-white rounded-lg shadow-md p-4 relative">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">{car.name}</h3>
            <CiHeart
              className={`cursor-pointer ${
                isLiked ? "text-red-500" : "text-gray-400"
              }`}
              onClick={handleLike}
            />
          </div>
          <p className="text-sm text-gray-500 mb-2">{car.category}</p>
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-40 object-cover mb-2 rounded"
          />
          <div className="flex justify-between text-gray-500 text-sm mb-2">
            <span className="flex items-center">
              <FaGasPump className="mr-1" /> {car.fuel}
            </span>
            <span className="flex items-center">
              <FaCar className="mr-1" /> {car.transmission}
            </span>
            <span className="flex items-center">
              <FaUsers className="mr-1" /> {car.people}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">{car.price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              {car.onRent}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
