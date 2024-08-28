import React, { useState } from "react";
import Button from "../components/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-lg text-slate-900 p-4 flex justify-between items-center sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div>
          <a className="cursor-pointer" href="">
            <img
              className="w-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
              alt="google logo"
            />
          </a>
        </div>
        <button
          className="lg:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:gap-x-4`}
      >
        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-8 items-center mt-4 lg:mt-0 px-8 py-4 lg:rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          {["Produk", "Layanan", "Tentang Kami", "Kontak"].map((item) => (
            <a
              key={item}
              className="text-slate-800 font-semibold transition-colors duration-300 relative group"
              href=""
            >
              {item}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex gap-x-3 items-center">
        <Button variant="bg-blue-600">Daftar</Button>
        <Button variant="bg-blue-600">Login</Button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden mt-4 flex flex-col gap-y-4`}
      >
        <Button variant="bg-blue-600">Daftar</Button>
        <Button variant="bg-blue-600">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
