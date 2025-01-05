"use client";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { IoStopwatch } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";

const NavigationPills = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <RiDashboardFill /> },
    { id: "schedule", label: "Schedule", icon: <IoStopwatch /> },
    { id: "tasks", label: "Tasks", icon: <FaTasks /> },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-medium my-2"> With Icons</h1>
      <div className="flex space-x-4 bg-gray-100 p-4 rounded-lg shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <span className="text-2xl">{tab.icon}</span>
            <span className="text-sm font-semibold">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-6">
        {activeTab === "dashboard" && (
          <p className="text-center text-gray-700">
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. Dramatically visualize customer directed convergence
            without revolutionary ROI. Collaboratively administrate empowered
            markets via plug-and-play networks. Dynamically procrastinate B2C
            users after installed base benefits. Dramatically visualize customer
            directed convergence without revolutionary ROI. Collaboratively
            administrate empowered markets via plug-and-play networks.
            Dynamically procrastinate B2C users after installed base benefits.
          </p>
        )}
        {activeTab === "schedule" && (
          <p className="text-center text-gray-700">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions. Dramatically visualize customer directed convergence
            without revolutionary ROI. Collaboratively administrate empowered
            markets via plug-and-play networks. Dynamically procrastinate B2C
            users after installed base benefits.
          </p>
        )}
        {activeTab === "tasks" && (
          <p className="text-center text-gray-700">
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. Dramatically visualize customer directed convergence
            without revolutionary ROI. Collaboratively administrate empowered
            markets via plug-and-play networks. Dynamically procrastinate B2C
            users after installed base benefits. Dramatically visualize customer
            directed convergence without revolutionary ROI. Collaboratively
            administrate empowered markets via plug-and-play networks.
            Dynamically procrastinate B2C users after installed base benefits.
          </p>
        )}
      </div>
    </div>
  );
};

export default NavigationPills;
