import React from "react";
import Button from "../components/button";

const Section3 = () => {
  return (
    <section className=" bg-white flex flex-col justify-center gap-4 max-w-7xl min-h-[87vh] mx-auto">
      <div className="flex justify-center flex-col items-center gap-y-5">
        <img
          className="w-40 h-40 mx-auto"
          src="https://lh3.googleusercontent.com/b859GDI9Xw889jgO_Rt165moMPwsLEi8ITk43lyE1dyCJW-ruGbLlfxZb9WTqa-hgnAUo8AgcKxnUumwxRpzy8GtPq9ttbuFJ9CIl6c_fDpkbLFYLVM=w1440-l80-sg-rp"
          alt="google defend logo"
        />
        <h3 className="font-bold text-5xl text-slate-800">
          Lebih aman dengan {"  "}
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-400">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-600">l</span>
          <span className="text-red-500">e</span>
        </h3>
        <div className="max-w-2xl ">
          <p className="text-lg text-slate-600 text-center">
            Kami bertanggung jawab melindungi privasi dan keamanan Anda di
            setiap produk yang kami buat, sehingga setiap hari Anda lebih aman
            dengan Google{" "}
          </p>
        </div>
        <Button className="py-4 px-8" variant="bg-blue-600">
          Kunjungi Pusat Keamanan
        </Button>
      </div>
    </section>
  );
};

export default Section3;
