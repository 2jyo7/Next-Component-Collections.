import React from "react";
import { RxCross1 } from "react-icons/rx";

interface NotificationAlertProps {
  title: string;
  message: string;
  icons: React.ReactNode;
  onClose?: () => void; // Optional close handler
  color: string; // Custom background and text colors
}

const NotificationAlert = ({
  title,
  message,
  onClose,
  icons,
  color,
}: NotificationAlertProps) => {
  return (
    <div
      className={`flex items-center w-full justify-between p-4 border-l-4 rounded-lg shadow-md ${color}`}
    >
      {/* Icon */}
      <span className="mr-4 text-xl">{icons}</span>

      {/* Title and Message */}
      <div className="flex-1">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{message}</p>
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <RxCross1 className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default NotificationAlert;
