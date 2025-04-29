import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Illustrative",
    description:
      "Inspired by classic illustrations and graphic art, these tattoos blend narrative and artistic flair. They tell a story on your skin, often combining whimsical elements with detailed line work.",
  },
  {
    id: 2,
    img: Img2,
    title: "Maori",
    description:
      "Drawing from ancient traditions, Celtic tattoos feature intricate knotwork and swirling patterns. They carry deep symbolism and evoke a sense of mystery, heritage, and spiritual connection.",
  },
  {
    id: 3,
    img: Img3,
    title: "Tribal",
    description:
      "Bold and timeless, these designs are inspired by ancient cultures. With swirling patterns and thick black lines, tribal tattoos symbolize heritage, strength, and the spirit of tradition.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Tattoos for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Tattoos
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            As chosen by you ...
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
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
                  onClick={handleOrderPopup}
                >
                  Get Ink Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
