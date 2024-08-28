import React from "react";

const Foot3 = () => {
  return (
    <div className="mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <a className="cursor-pointer" href="#">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google Logo"
              className="h-8"
            />
          </a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-slate-500 hover:text-blue-600"></a>
          <a href="#" className="text-slate-500 hover:text-blue-600"></a>
          <a href="#" className="text-slate-500 hover:text-blue-600"></a>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-slate-500">
        © 2024 Google LLC. Hak cipta dilindungi undang-undang.
      </p>
    </div>
  );
};

export default Foot3;
