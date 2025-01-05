"use client";
import React, { useState } from "react";
import { FaCog, FaEnvelope, FaUser } from "react-icons/fa";

const NavTabsCard1 = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Tabs with Icons on Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-bold flex items-center ">
          Tabs with Icons
        </h2>
        <div className="bg-purple-500 text-white rounded-t-lg flex space-x-4 p-4">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center space-x-2 text-lg font-medium ${
              activeTab === "profile" ? "underline" : ""
            }`}
          >
            <FaUser />
            <span>Profile</span>
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`flex items-center space-x-2 text-lg font-medium ${
              activeTab === "messages" ? "underline" : ""
            }`}
          >
            <FaEnvelope />
            <span>Messages</span>
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center space-x-2 text-lg font-medium ${
              activeTab === "settings" ? "underline" : ""
            }`}
          >
            <FaCog />
            <span>Settings</span>
          </button>
        </div>
        <div className="p-4">
          <p>
            {activeTab === "profile" && (
              <>
                <strong>Profile:</strong>I think that’s a responsibility that I
                have, to push possibilities, to show people, this is the level
                that things could be at. So when you get something that has the
                name Kanye West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </>
            )}
            {activeTab === "messages" && (
              <>
                <strong>Messages:</strong> Messages are where connections grow
                stronger...
              </>
            )}
            {activeTab === "settings" && (
              <>
                <strong>Settings:</strong> Settings allow you to personalize
                your experience...
              </>
            )}
          </p>
        </div>
      </div>

      {/* Tabs on Plain Card */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold flex items-center ">
          Tabs on Plain Card
        </h2>

        <div className="bg-red-500 text-white rounded-t-lg flex space-x-4 p-4">
          <button
            className="text-lg font-medium hover:underline"
            onClick={() => setActiveTab("home")}
          >
            Home
          </button>
          <button
            className="text-lg font-medium hover:underline"
            onClick={() => setActiveTab("updates")}
          >
            Updates
          </button>
          <button
            className="text-lg font-medium hover:underline"
            onClick={() => setActiveTab("history")}
          >
            History
          </button>
        </div>
        <div className="p-4">
          <p>
            I think that’s a responsibility that I have, to push possibilities,
            to show people, this is the level that things could be at. So when
            you get something that has the name Kanye West on it, it’s supposed
            to be pushing the furthest possibilities. I will be the leader of a
            company that ends up being worth billions of dollars, because I got
            the answers. I understand culture. I am the nucleus.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavTabsCard1;
