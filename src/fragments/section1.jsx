import React from "react";

const Section1 = () => {
  return (
    <section className="bg-white min-h-[86vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Produk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Bermanfaat
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Untuk Semua
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Kami menciptakan solusi inovatif yang memudahkan kehidupan
            sehari-hari dan membuka peluang baru bagi setiap orang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Jelajahi Produk
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 border-blue-600">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative group">
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div> */}
            <div className="relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                alt="Product Illustration"
                className="max-w-full h-auto transition duration-300 transform group-hover:scale-105"
              />
              <div className="absolute -top-10 -left-6 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-6 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
