"use client";

import { useState } from "react";

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="flex flex-col items-center space-y-2">
      <label htmlFor="datepicker" className="text-gray-700 font-medium">
        Select a Date:
      </label>
      <input
        type="date"
        id="datepicker"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {selectedDate && (
        <p className="text-green-600 font-medium">
          Selected Date: {selectedDate}
        </p>
      )}
    </div>
  );
}
