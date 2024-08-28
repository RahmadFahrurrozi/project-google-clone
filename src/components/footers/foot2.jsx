import React from "react";

const Foot2 = () => {
  const footerSections = [
    {
      title: "Perusahaan",
      links: ["Tentang Kami", "Karier", "Hubungi Investor", "Lokasi", "Blog"],
    },
    {
      title: "Produk & Layanan",
      links: ["Pencarian", "Gmail", "Maps", "Chrome", "Google Cloud"],
    },
    {
      title: "Kebijakan",
      links: [
        "Privasi",
        "Keamanan",
        "Syarat dan Ketentuan",
        "Pusat Transparansi",
      ],
    },
  ];

  return (
    <footer className=" py-12 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-slate-500  hover:text-slate-800 transition-colors duration-300 font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Foot2;
