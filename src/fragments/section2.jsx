import React from "react";
import Button from "../components/button";

const Section2 = () => {
  return (
    <section className="bg-white flex justify-between min-h-[87vh] items-center max-w-7xl mx-auto">
      <div className="w-1/2">
        <div className="text-4xl font-bold flex flex-col gap-4">
          <h2>Mentransformasi cara kita</h2>
          <h2>kita bekerja sama dengan</h2>
          <h2 className="text-blue-600">Google Workspace</h2>
        </div>
        <p className="text-slate-800 text-base my-6">
          Tingkatkan produktivitas dengan satu pengalaman yang terintegrasi.
        </p>
        <Button variant="bg-yellow-400">Selengkapnya</Button>
      </div>
      <div className="w-1/2">
        <img
          className="rounded-md w-full h-auto"
          src="https://lh3.googleusercontent.com/_M14NRTYPPQYgdKReeicOfwYJfHI-USHThCxb3buQ8dKJ_XBIjR1lnzdLQ3vjYrDVdOn79de6u_JkxB0D44hBrZ88olRx1fU8QIe7Cq_VzxUWalNeQ=w1440-l80-sg-rj-c0xffffff"
          alt="foto Google Workspace"
        />
      </div>
    </section>
  );
};

export default Section2;
