import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center py-12 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Work With Us</h1>
      <p className="text-gray-600 text-center max-w-lg mb-8">
        Divide details about your product or agency work into parts. Write a few
        lines about each one and contact us for further collaboration. We will
        respond and get back to you within a couple of hours.
      </p>

      <form className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-6">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            aria-label="Your Name"
            placeholder="Your Name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            aria-label="Your Email"
            placeholder="Your Email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            id="message"
            aria-label="Your Message"
            placeholder="Your Message"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 h-32 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
