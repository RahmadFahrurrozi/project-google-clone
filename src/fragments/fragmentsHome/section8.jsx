import React from "react";
import CardHome from "../../components/cards/cardHome";
const Section8 = () => {
  const cardData = [
    {
      iconLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdCcm94abulE0Wl86wchFULHXKM6uh1zorA&s",
      title: "Google clashroom for",
      hightlightText: "eductaion",
      description:
        "Temukan alat yang mudah untuk mengelola aktivitas pendidikan",
    },
    {
      iconLogo:
        "https://lh3.googleusercontent.com/cS5nvr3r6Q16NoV6IuJLaauz7HNNRPnuHtsHleZ8du594H4EeiOjeNxV-Nq_w-qRA87TUedLQjTmqCG5s6jNZRp29n571FDWyditF-WJhfhQTY_73OM",
      title: "Google clashroom for",
      hightlightText: "searching",
      description:
        "Setiap hari Google memblokir 25 miliar halaman yang berisi spam dan perilaku penelusuran",
    },
    {
      iconLogo:
        "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png",
      title: "Google meet for",
      hightlightText: "education",
      description:
        "Setiap hari Google memblokir 25 miliar halaman yang berisi spam dan perilaku penelusuran",
    },

    {
      iconLogo:
        "https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png",
      title: "Google drive untuk",
      hightlightText: "Menyimpan file",
      description:
        "Setiap hari Google memblokir 25 miliar halaman yang berisi spam dan perilaku penelusuran",
    },
  ];
  return (
    <section className="bg- min-h-screen flex flex-col lg:flex-row gap-4 mx-auto max-w-7xl items-center px-6">
      {cardData.map((card) => (
        <CardHome
          key={card.iconLogo}
          iconLogo={card.iconLogo}
          title={card.title}
          hightlightText={card.hightlightText}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default Section8;
