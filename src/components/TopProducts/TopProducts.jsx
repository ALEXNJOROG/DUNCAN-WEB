import React, { useState } from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import Img4 from "../../assets/shirt/shirt4.png";
import Img5 from "../../assets/shirt/shirt5.png";
import Img6 from "../../assets/shirt/shirt6.png";
import Img7 from "../../assets/shirt/shirt7.png";
import Img8 from "../../assets/shirt/shirt8.png";
import Img9 from "../../assets/shirt/shirt9.png";
import Img10 from "../../assets/shirt/shirt10.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Semi-recliners",
    description: "Sink into comfort and style — order your custom-made sofaset today!",
    folder: "semi-recliners",
  },
  {
    id: 2,
    img: Img2,
    title: "Wardrobes and Closets",
    description: "Upgrade your space with elegant, spacious wardrobes — handcrafted just for you!",
    folder: "wardrobes",
  },
  {
    id: 3,
    img: Img3,
    title: "Dining Tables",
    description: "Gather in style—dine like royalty!",
    folder: "dining-tables",
  },
  {
    id: 4,
    img: Img4,
    title: "Coffee Tables",
    description: "Add charm to your living room — stylish coffee tables made to impress!",
    folder: "coffee-tables",
  },
  {
    id: 5,
    img: Img5,
    title: "Mocket Beds",
    description: "Sleep smart. Save space. Discover Mocket beds!",
    folder: "mocket-beds",
  },
  {
    id: 6,
    img: Img6,
    title: "Kitchen Tables",
    description: "Cook, chat, connect—your perfect kitchen table awaits!",
    folder: "kitchen-tables",
  },
  {
    id: 7,
    img: Img7,
    title: "Study Tables",
    description: "Fuel focus with our sleek study tables!",
    folder: "study-tables",
  },
  {
    id: 8,
    img: Img8,
    title: "Kitchen Cabinet Fittings",
    description: "Upgrade your kitchen—fit it with finesse!",
    folder: "kitchen-cabinets",
  },
  {
    id: 9,
    img: Img9,
    title: "Gypsum Ceiling Fittings",
    description: "Top off your space with elegant gypsum ceilings!",
    folder: "gypsum-ceilings",
  },
  {
    id: 10,
    img: Img10,
    title: "TV Stands",
    description: "Style meets storage—find your perfect TV stand!",
    folder: "tv-stands",
  },
];

const TopProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container py-10">
      {/* Header */}
      {!selectedProduct && (
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            As chosen by you ...
          </p>
        </div>
      )}

      {/* Product Grid or Gallery */}
      {selectedProduct ? (
        <div>
          <button
            className="bg-primary text-white px-4 py-2 rounded-full mb-6 hover:scale-105 transition"
            onClick={() => setSelectedProduct(null)}
          >
            ← Back to Products
          </button>

          <h2 className="text-2xl font-semibold mb-4">{selectedProduct.title} Designs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <img
                key={num}
                src={`/images/${selectedProduct.folder}/img${num}.jpg`}
                alt={`${selectedProduct.title} Design ${num}`}
                className="rounded-lg shadow-md w-full object-cover"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] w-full pt-20"
            >
              <div className="h-[100px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 z-10">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => setSelectedProduct(data)}
                >
                  View More Designs
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopProducts;
