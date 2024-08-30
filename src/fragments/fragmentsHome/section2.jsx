import React from "react";
import Button from "../../components/button";
import GoogleText from "../../components/googleText";

const Section2 = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row justify-between items-center min-h-[87vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 lg:gap-0">
      {/* Bagian Kiri */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold flex flex-col gap-2">
          <h2>Mentransformasi cara kita</h2>
          <h2>kita bekerja sama dengan</h2>
          <h2 className="text-blue-600">
            <GoogleText fontSize="text-2xl sm:text-3xl lg:text-4xl" /> Workspace
          </h2>
        </div>
        <p className="text-slate-800 text-sm sm:text-base my-4 lg:my-6 max-w-md">
          Tingkatkan produktivitas dengan satu pengalaman yang terintegrasi.
        </p>
        <Button className="py-3 px-6" variant="bg-yellow-400">
          Selengkapnya
        </Button>
      </div>

      {/* Bagian Kanan */}
      <div className="w-full lg:w-1/2">
        <img
          className="rounded-md w-full h-auto object-cover"
          src="https://lh3.googleusercontent.com/_M14NRTYPPQYgdKReeicOfwYJfHI-USHThCxb3buQ8dKJ_XBIjR1lnzdLQ3vjYrDVdOn79de6u_JkxB0D44hBrZ88olRx1fU8QIe7Cq_VzxUWalNeQ=w1440-l80-sg-rj-c0xffffff"
          alt="foto Google Workspace"
        />
      </div>
    </section>
  );
};

export default Section2;
