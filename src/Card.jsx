import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaGasPump } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import favoriteStore from "./store/favoriteStore";
import { Helmet } from "react-helmet";

const Card = ({ car }) => {
  const [isLiked, setIsLiked] = useState(car.isLiked);
  const navigate = useNavigate();

  // favorites ni xavfsiz olish va array sifatida ishlash
  const favorites = Array.isArray(favoriteStore((state) => state.favorites))
    ? favoriteStore((state) => state.favorites)
    : [];
  const addToFavorites = favoriteStore((state) => state.addToFavorites);
  const removeFromFavorites = favoriteStore(
    (state) => state.removeFromFavorites
  );

  const handleLike = () => {
    const isAlreadyFavorite =
      Array.isArray(favorites) && favorites.some((fav) => fav.id === car.id);
    if (isAlreadyFavorite) {
      removeFromFavorites(car.id);
    } else {
      addToFavorites(car); 
    }
    setIsLiked(!isLiked); 
  };

  const handleSubmit = (id) => {
    navigate(`/cardinfo/${id}`);
  };

  return (
    <>
      <Helmet>
        <meta title="Card page" />
        <meta name="description" content="Card page" />
      </Helmet>
      <section>
        <div onClick={() => handleSubmit(car.id)}>
          <div className="bg-white rounded-lg shadow-md p-4 relative">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <CiHeart
                className={`cursor-pointer ${
                  isLiked ? "text-red-500" : "text-gray-400"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike();
                }}
              />
            </div>
            <p className="text-sm text-gray-500 mb-2">{car.category}</p>
            <img
              loading="lazy"
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
    </>
  );
};

export default Card;
