import React from "react";
import Car1 from "./assets/image 7.png";
import Car2 from "./assets/image 8.png";

export default function Section() {
  return (
    <section className="container mx-auto mt-20 p-4">
      <div className="flex justify-between gap-6">
        <div className="flex-1 p-6 rounded-lg shadow-md bg-blue-500">
          <div className="mb-6 text-white">
            <h2 className="text-2xl font-bold mb-2">
              The Best Platform <br /> for Car Rental
            </h2>
            <p className="text-white mb-4">
              Ease of doing a car rental safely and <br /> reliably. Of course
              at a low price.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Rental Car
            </button>
          </div>
          <div className="mt-auto">
            <img src={Car1} alt="Car" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="flex-1 p-6 rounded-lg shadow-md bg-blue-500">
          <div className="mb-6 text-white">
            <h2 className="text-2xl font-bold mb-2">
              The Best Platform <br /> for Car Rental
            </h2>
            <p className="text-white mb-4">
              Ease of doing a car rental safely and <br /> reliably. Of course
              at a low price.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Rental Car
            </button>
          </div>
          <div className="mt-auto">
            <img src={Car2} alt="Car" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
