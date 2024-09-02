import React from "react";
import Button from "../../components/button";

const Section6 = () => {
  return (
    <section className="bg-white flex flex-col items-center gap-6 sm:gap-8 max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
      <img
        className=" lg:w-1/2"
        src="https://lh3.googleusercontent.com/qJ1OUBpOuLaszhaxW0PR7moTo76eUiaX3c2c-5ZIwta-7ikMgVjLAsRtNa0oc2lP6kLZ5uTzMKO3-56yg0DMbiZgxPWQatmhG2DQQCSfdHqidPWx7Bg=w1440-l80-sg-rp"
        alt="Google education"
      />
      <h2 className="font-normal text-3xl sm:text-4xl lg:text-6xl text-slate-800">
        Google for Education
      </h2>
      <p className="text-slate-800 font-normal text-xl max-w-xl text-center">
        Jelajahi produk yang dirancang untuk pendidikan yang membantu
        mentransformasi pembelajaran dan pengajaran.
      </p>
      <Button variant="bg-blue-600">Pelajari Lebih Lanjut</Button>
    </section>
  );
};

export default Section6;
