"use client";
import React, { useState } from "react";
import NotificationAlert from "./NotificationAlert";
import {
  FaCheck,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

const NotificationPage = () => {
  // State to manage a list of notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icons: <FaCheckCircle />,
      title: "INFO ALERT:",
      message:
        "You've got some friends nearby, stop looking at your phone and find them...",
      color: "bg-blue-100 border-blue-500 text-blue-800", // Info Alert Colors
    },
    {
      id: 2,
      icons: <FaCheck />,
      title: "SUCCESS ALERT:",
      message: "Your operation was successful!",
      color: "bg-green-100 border-green-500 text-green-800", // Success Alert Colors
    },
    {
      id: 3,
      icons: <FaExclamationTriangle />,
      title: "WARNING ALERT:",
      message: "This action might have consequences!",
      color: "bg-yellow-100 border-yellow-500 text-yellow-800", // Warning Alert Colors
    },
    {
      id: 4,
      icons: <FaTimesCircle />,
      title: "DANGER ALERT:",
      message: "Something went wrong! Take immediate action!",
      color: "bg-red-100 border-red-500 text-red-800", // Danger Alert Colors
    },
  ]);

  // Function to handle deleting a notification
  const handleDelNotify = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="space-y-4 p-4">
      {/* Render notifications dynamically */}
      {notifications.map((notification) => (
        <NotificationAlert
          key={notification.id}
          icons={notification.icons}
          title={notification.title}
          message={notification.message}
          onClose={() => handleDelNotify(notification.id)} // Pass specific id to delete
          color={notification.color} // Pass the color as a prop
        />
      ))}
    </div>
  );
};

export default NotificationPage;
