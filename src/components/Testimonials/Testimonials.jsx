import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Cecil",
    text: "I was pleasantly surprised by the studio’s flexible service—having the team come directly to my preferred location made my first tattoo experience incredibly convenient. Not only did I get a stunning design at 40% off, but the entire process felt personalized and relaxed. I couldn’t be happier!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Makaveli",
    text: "As a first-timer, the competitive pricing really put me at ease. I was amazed at the quality of the work I received for such an affordable rate. The 40% discount was the icing on the cake, making my debut tattoo session both memorable and budget-friendly.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sylvah",
    text: "The expert tattoo after care advice I received was exceptional. From the moment I left the studio, I felt fully supported during the healing process, with clear, friendly guidance every step of the way. It’s rare to find such dedicated care, and I’m thrilled with my vibrant new tattoo!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Malheruiz",
    text: "My personalized design consultation was a game-changer. The artist took the time to understand my vision and transformed it into a piece of art that I’m incredibly proud to wear. With the fantastic 40% off offer for newcomers, I felt valued and inspired from start to finish.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our Clients are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Client Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Our Clientele base has this to say ...
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
