import React from "react";
import Button from "../../components/button";
import GoogleText from "../../components/googleText";

const Section3 = () => {
  return (
    <section className="bg-white flex flex-col justify-center gap-6 sm:gap-8 max-w-7xl min-h-[87vh] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-y-5 text-center">
        {/* Logo Image */}
        <img
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
          src="https://lh3.googleusercontent.com/b859GDI9Xw889jgO_Rt165moMPwsLEi8ITk43lyE1dyCJW-ruGbLlfxZb9WTqa-hgnAUo8AgcKxnUumwxRpzy8GtPq9ttbuFJ9CIl6c_fDpkbLFYLVM=w1440-l80-sg-rp"
          alt="google defend logo"
        />

        {/* Heading Text */}
        <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-800">
          Lebih aman dengan{" "}
          <GoogleText fontSize="text-3xl sm:text-4xl lg:text-5xl" />
        </h3>

        {/* Description Text */}
        <div className="max-w-lg sm:max-w-xl lg:max-w-2xl">
          <p className="text-base sm:text-lg text-slate-600">
            Kami bertanggung jawab melindungi privasi dan keamanan Anda di
            setiap produk yang kami buat, sehingga setiap hari Anda lebih aman
            dengan Google.
          </p>
        </div>

        {/* Button */}
        <Button className="py-3 px-6 sm:py-4 sm:px-8" variant="bg-blue-600">
          Kunjungi Pusat Keamanan
        </Button>
      </div>
    </section>
  );
};

export default Section3;
