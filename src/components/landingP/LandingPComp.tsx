import { FaFingerprint } from "react-icons/fa";
import { MdChat, MdVerifiedUser } from "react-icons/md";

export default function LandingPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1728037068190-15a5bd1d6573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RhcnJ5JTIwbmlnaHR8ZW58MHx8MHx8fDA%3D")',
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Your Story Starts With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            Every landing page needs a small description after the big bold
            title. Add here all the information that can make you or your
            product create the first impression.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-lg">
            Watch Video
          </button>
        </div>
      </header>

      {/* Call to Action Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">{`Let's Talk Product`}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          This is the paragraph where you can write more details about your
          product. Keep your user engaged by providing meaningful information.
          Remember that by this time, the user is curious, otherwise they would
          not scroll to get here. Add a button if you want the user to see more.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center p-6 bg-gray-50 shadow-lg rounded-lg w-64">
            <span className="text-4xl text-purple-500 mb-4 block">
              <MdChat />
            </span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Free Chat
            </h3>
            <p className="text-gray-600">
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 shadow-lg rounded-lg w-64">
            <span className="text-4xl text-purple-500 mb-4 block">
              <MdVerifiedUser />
            </span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Verified Users
            </h3>
            <p className="text-gray-600">
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 shadow-lg rounded-lg w-64">
            <span className="text-4xl text-purple-500 mb-4 block">
              <FaFingerprint />
            </span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fingerprint
            </h3>
            <p className="text-gray-600">
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}
