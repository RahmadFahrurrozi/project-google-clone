import React from "react";
import Button from "../../components/button";
import GoogleText from "../../components/googleText";

const Section5 = () => {
  return (
    <section className="bg-white flex flex-col px-4 py-8 sm:px-6 lg:flex-row justify-between items-center max-w-7xl mx-auto gap-8 min-h-screen">
      {/* Bagian Kiri */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-4">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-center lg:text-left">
          Setiap produk{" "}
          <GoogleText fontSize="text-2xl sm:text-3xl lg:text-4xl" /> dirancang
          dengan berfokus pada keamanan
        </h3>
        <p className="text-base sm:text-lg text-gray-600 text-center lg:text-left">
          Lihat semua cara Google melindungi privasi dan keamanan Anda di produk
          yang Anda sukai.
        </p>
        <div className="mt-4 flex justify-center lg:justify-start">
          <Button variant="bg-blue-600">Baca Selengkapnya</Button>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="w-full lg:w-1/2 aspect-video relative rounded-xl overflow-hidden shadow-2xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/by-kTJ0DOLc?si=U5dqBXbrDzAx3sKt"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Section5;
