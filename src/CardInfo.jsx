import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { carData } from './App';

export default function CardInfo() {
  const [singleCard, setSingleCard] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const updateCard = carData.filter((item) => item.id.toString() === id);
    setSingleCard(updateCard[0] || null); // Birinchi elementni olamiz yoki null qaytaramiz
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {singleCard && (
        <>
          <h1 className="text-2xl font-bold mb-4">{singleCard.name}</h1>
          <img
            src={singleCard.image}
            alt={singleCard.name}
            className="w-[400px] h-64 object-cover mb-4 rounded"
          />
          <p><strong>Category:</strong> {singleCard.category}</p>
          <p><strong>Fuel:</strong> {singleCard.fuel}</p>
          <p><strong>Transmission:</strong> {singleCard.transmission}</p>
          <p><strong>People:</strong> {singleCard.people}</p>
          <p><strong>Price:</strong> {singleCard.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
            {singleCard.onRent}
          </button>
        </>
      )}
      {/* {!singleCard && <div>Loading...</div>} */}
    </div>
  );
}