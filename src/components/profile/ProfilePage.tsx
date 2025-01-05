import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-64"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D")',
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl text-white font-bold mb-4">
            Christian Louboutin
          </h1>
          <p className="text-gray-300 text-sm">DESIGNER</p>
        </div>
      </header>

      {/* Profile Section */}
      <section className="py-12 bg-white text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
          <Image
            src="https://images.unsplash.com/photo-1442115597578-2d0fb2413734?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNocmlzdGlhbiUyMGxvdWJvdXRpbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile Picture"
            width={160}
            height={100}
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Christian Louboutin
        </h2>
        <span className="flex justify-center space-x-2 p-4">
          <FaInstagramSquare />
          <FaFacebookSquare />
          <FaTwitter />
        </span>
        <p className="text-gray-600 mb-6">
          {" "}
          An artist of considerable range, Chet Faker — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
          records all of his own music, giving it a warm, intimate feel with a
          solid groove structure.{" "}
        </p>

        <div className="flex justify-center space-x-6">
          <Link
            href="#"
            className="text-gray-700 hover:text-purple-500 text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-purple-500 text-2xl"
          >
            <i className="fab fa-facebook"></i>
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-purple-500 text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-4 text-center text-gray-300">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
