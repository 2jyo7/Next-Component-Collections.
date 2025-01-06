"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { SiObsstudio } from "react-icons/si";

type TabType = "STUDIO" | "WORK" | "FAVORITE";

const ProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("STUDIO");

  // Define the type for the images object
  const images: Record<TabType, string[]> = {
    STUDIO: [
      "https://images.unsplash.com/photo-1520811288788-6f2e3da049e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1492892132812-a00a8b245c45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    WORK: [
      "https://images.unsplash.com/photo-1579818275527-4e07088ed245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1736078073039-a7e92499fb45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    FAVORITE: [
      "https://images.unsplash.com/photo-1736066160636-85311de0f715?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      {/* Header Section */}
      <div className="flex space-x-8 mb-10">
        <button
          onClick={() => setActiveTab("STUDIO")}
          className={`text-lg ${
            activeTab === "STUDIO"
              ? "text-white bg-purple-600 px-4 py-2 rounded-lg shadow-md"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <SiObsstudio />
          STUDIO
        </button>
        <button
          onClick={() => setActiveTab("WORK")}
          className={`text-lg ${
            activeTab === "WORK"
              ? "text-white bg-purple-600 px-4 py-2 rounded-lg shadow-md"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <IoIosColorPalette />
          WORK
        </button>
        <button
          onClick={() => setActiveTab("FAVORITE")}
          className={`text-lg ${
            activeTab === "FAVORITE"
              ? "text-white bg-purple-600 px-4 py-2 rounded-lg shadow-md"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <FaHeart />
          FAVORITE
        </button>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl">
        {images[activeTab].map((image: string, index: number) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover"
              width={330}
              height={340}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
