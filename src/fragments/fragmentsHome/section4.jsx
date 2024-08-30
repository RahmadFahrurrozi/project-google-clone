import React from "react";
import CardHome from "../../components/cards/cardHome";

const Section4 = () => {
  const cardData = [
    {
      iconLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
      title: "Cara yang lebih aman untuk",
      hightlightText: "Menelusuri",
      description:
        "Setiap hari Google memblokir 25 miliar halaman yang berisi spam dan perilaku penelusuran",
    },
    {
      iconLogo:
        "https://lh3.googleusercontent.com/8v_oGMOj9bgohn50RgLhJ8XGZ2kIUdr0RG4zCkIYnfjK24ORS0WFaTWmnzxXzagUg2fwAmDy1W_Y4oTtIacT2dhQzAqOy5H9Vg23Rq1oVnhUGtOynjY",
      title: "Cara yang lebih aman untuk mengirim",
      hightlightText: "Email",
      description:
        "Setiap hari Google mengamankan 1,5 miliar kotak masuk sehingga privasi email anda terjaga",
    },
    {
      iconLogo:
        "https://lh3.googleusercontent.com/cS5nvr3r6Q16NoV6IuJLaauz7HNNRPnuHtsHleZ8du594H4EeiOjeNxV-Nq_w-qRA87TUedLQjTmqCG5s6jNZRp29n571FDWyditF-WJhfhQTY_73OM",
      title: "Cara yang lebih aman untuk",
      hightlightText: "Menjelajah",
      description:
        "Setiap hari Google melindungi 4 miliar perangkat, dengan memberi anda peringatan jika suatu situs beresiko",
    },
  ];
  return (
    <section className="bg- min-h-screen flex flex-col lg:flex-row gap-4 mx-auto max-w-7xl items-center px-6">
      {cardData.map((card, index) => (
        <CardHome
          key={index}
          iconLogo={card.iconLogo}
          title={card.title}
          hightlightText={card.hightlightText}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default Section4;
