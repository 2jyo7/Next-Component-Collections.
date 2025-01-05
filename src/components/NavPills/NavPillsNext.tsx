"use client";
import { useState } from "react";
// import { FaTasks } from "react-icons/fa";
import { IoStopwatch } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";

const NavigationPillsNext = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <RiDashboardFill /> },
    { id: "schedule", label: "Schedule", icon: <IoStopwatch /> },
    // { id: "tasks", label: "Tasks", icon: <FaTasks /> },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-medium  mb-6">With Icons</h1>
      <div className="flex flex-row items-start space-x-8 w-full max-w-4xl">
        {/* Tabs */}
        <div className="flex flex-col space-y-4 bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-row items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              <span className="text-2xl mr-2">{tab.icon}</span>
              <span className="text-sm font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="w-2/3">
          {activeTab === "dashboard" && (
            <p className="text-gray-700 text-justify">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI. Collaboratively administrate empowered
              markets via plug-and-play networks. Dynamically procrastinate B2C
              users after installed base benefits. Dramatically visualize
              customer directed convergence without revolutionary ROI.
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits.
            </p>
          )}
          {activeTab === "schedule" && (
            <p className="text-gray-700 text-justify">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions. Dramatically visualize customer directed
              convergence without revolutionary ROI. Collaboratively
              administrate empowered markets via plug-and-play networks.
              Dynamically procrastinate B2C users after installed base benefits.
            </p>
          )}
          {/* {activeTab === "tasks" && (
            <p className="text-gray-700 text-justify">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI. Collaboratively administrate empowered
              markets via plug-and-play networks. Dynamically procrastinate B2C
              users after installed base benefits. Dramatically visualize
              customer directed convergence without revolutionary ROI.
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits.
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default NavigationPillsNext;
