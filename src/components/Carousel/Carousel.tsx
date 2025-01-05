"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VucmlzZXxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Yellowstone National Park, United States",
  },
  {
    src: "https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Grand Canyon, United States",
    caption: "Grand Canyon, United States",
  },
  {
    src: "https://images.unsplash.com/photo-1724342518625-3f61a59e6bab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmFyeXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Yosemite National Park, United States",
    caption: "Yosemite National Park, United States",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-md">
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-64 flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt || "Image"} // Use fallback if alt is undefined
              className="w-full h-full object-cover"
              width={240}
              height={250}
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
              {image.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full focus:outline-none hover:bg-opacity-75"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full focus:outline-none hover:bg-opacity-75"
      >
        &#8250;
      </button>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
