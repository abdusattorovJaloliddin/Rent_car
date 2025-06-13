import React, { useState } from "react";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import CardInfo from "./CardInfo";
import Card from "./Card";

export const carData = [
    {
      id: 1,
      name: "Koenigsegg",
      category: "Sport",
      image:
        "https://koenigsegg-cdn-g7eehhd6f0ewcaff.z02.azurefd.net/drupal/styles/514x550/azure/2023-01/Koenigsegg%20CC850%20-%201.jpg?h=41c0849e&itok=nWOy_eeq",
      fuel: "90L",
      transmission: "Manual",
      people: "2 People",
      price: "$99.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      category: "Sport",
      image:
        "https://wieck-nissanao-production.s3.us-west-1.amazonaws.com/releaseInlineImages/b4caffb0c71aaa6d62e0a41e35b97981950c9969",
      fuel: "80L",
      transmission: "Manual",
      people: "2 People",
      price: "$100.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id: 3,
      name: "Rolls-Royce",
      category: "Sedan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbfwXfXoiGhigpU1fYHoanPBwqAddzLpLFg&s",
      fuel: "70L",
      transmission: "Manual",
      people: "4 People",
      price: "$96.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id: 4,
      name: "Nissan GT-R",
      category: "Sport",
      image:
        "https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo",
      fuel: "80L",
      transmission: "Manual",
      people: "2 People",
      price: "$100.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id: 5,
      name: "All New Rush",
      category: "SUV",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNy9sbc8f2WGC13TwVBgS6T3R3q9DpofzIAg&s",
      fuel: "70L",
      transmission: "Manual",
      people: "6 People",
      price: "$80.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id: 6,
      name: "CR-V",
      category: "SUV",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPejzO2Y84BWm3nueYdwtzUfRt6tnLirmsEg&s",
      fuel: "80L",
      transmission: "Manual",
      people: "6 People",
      price: "$80.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id: 7,
      name: "All New Terios",
      category: "SUV",
      image:
        "https://imgcdn.oto.com/large/gallery/exterior/7/1669/daihatsu-terios-front-angle-low-view-455545.jpg",
      fuel: "90L",
      transmission: "Manual",
      people: "6 People",
      price: "$74.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id: 8,
      name: "CR-V",
      category: "SUV",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2025-honda-cr-v-hybrid-awd-sport-touring-102-679407cb80051.jpg?crop=0.702xw:0.590xh;0.0529xw,0.341xh&resize=2048:*",
      fuel: "80L",
      transmission: "Manual",
      people: "6 People",
      price: "$80.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
  ];
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCars = carData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <Header onSearch={setSearchTerm} />
      <Section />
      
      {/*  Card komponenti  */}

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-4">Popular Cars</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredCars.map((car) => (
            <Card key={car.id} car={car} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-500 my-12">
            Show more cars
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
