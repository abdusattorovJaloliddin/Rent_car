import React from "react";
import favoriteStore from "./store/favoriteStore";
import { CiHeart } from "react-icons/ci";
import { Helmet } from "react-helmet";

const Favorite = () => {
  const favorites = favoriteStore((state) => state.favorites);
  const removeFromFavorites = favoriteStore(
    (state) => state.removeFromFavorites
  );

  const handleRemove = (carId) => {
    removeFromFavorites(carId);
  };

  return (
    <>
      <Helmet>
        <meta title="Favorites page" />
        <meta name="description" content="Favorites page" />
      </Helmet>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Favorites</h1>
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {favorites.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-md p-4 relative"
              >
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                <p>
                  <strong>Category:</strong> {car.category}
                </p>
                <p>
                  <strong>Fuel:</strong> {car.fuel}
                </p>
                <p>
                  <strong>Transmission:</strong> {car.transmission}
                </p>
                <p>
                  <strong>People:</strong> {car.people}
                </p>
                <p>
                  <strong>Price:</strong> {car.price}
                </p>
                <p>
                  <strong>Rent:</strong> {car.onRent}
                </p>
                <CiHeart
                  className={`cursor-pointer absolute top-2 right-2 ${
                    favorites.some((fav) => fav.id === car.id)
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => handleRemove(car.id)}
                />
                <span>🛒{favorites.length}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No favorites </p>
        )}
      </div>
    </>
  );
};

export default Favorite;
