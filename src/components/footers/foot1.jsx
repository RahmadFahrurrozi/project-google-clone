import React from "react";

const Foot1 = () => {
  const socialIcons = [
    {
      src: "https://img.icons8.com/ios-filled/50/000000/facebook-new.png",
      alt: "facebook logo",
    },
    {
      src: "https://img.icons8.com/ios-filled/50/000000/twitter.png",
      alt: "twitter logo",
    },
    {
      src: "https://img.icons8.com/ios-filled/50/000000/instagram-new.png",
      alt: "instagram logo",
    },
    {
      src: "https://img.icons8.com/ios-filled/50/000000/linkedin.png",
      alt: "linkedin logo",
    },
    {
      src: "https://img.icons8.com/ios-filled/50/000000/youtube.png",
      alt: "youtube logo",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="font-semibold text-slate-800 text-center sm:text-left">
            Ikuti Kami
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-6 h-6 cursor-pointer"
            src="https://img.icons8.com/?size=50&id=3685&format=png"
            alt="globe logo"
          />
          <p className="font-semibold text-slate-800 cursor-pointer hover:underline">
            Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Foot1;
