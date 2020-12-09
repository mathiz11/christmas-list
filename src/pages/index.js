import React from "react"
import Gift from "../components/Gift"
import "../styles/main.css"

export default function Home() {
  const gifts = [
    {
      id: 1,
      title: "Coque de protection + vitre de protection iPhone",
      imageLink:
        "https://cdn.shopify.com/s/files/1/1286/1203/products/black_bd0841ea-4ee7-4c46-9f29-8f6ca673a7f2.png?v=1587021826",
      brand: "Rhinoshield",
      link: null,
      price: "40€",
      isTake: false,
    },
    {
      id: 2,
      title: "Ecran ordinateur",
      imageLink:
        "https://www.cdiscount.com/pdt2/x/e/n/1/700x700/sals24f354fhuxen/rw/samsung-s24f354-ecran-gamer-24-fhd-dalle-pls.jpg",
      brand: "Cdiscount",
      link:
        "https://www.cdiscount.com/informatique/ecran-pc/samsung-s24f354-ecran-gamer-24-fhd-dalle-pls/f-10710-sals24f354fhuxen.html?idOffre=426494325#mpos=0|cd&sw=d015f24ca797cab7087870a0bb4e9d27c00ff8c00b6391b512e10e4372cfef1da6520b9b2917f7010993917d2d7d20027d67098d09e5ecc01d3342a387559ab0ea509e7201a0d6ad786dd32b16922cdc9bb6019ce70ca47ddc26a49f9934a0df87bd32cc1ff7ae307226070116e36cd7",
      otherLink:
        "https://www.amazon.fr/Samsung-S24F350F-Ecran-54-61-1920x1080/dp/B01BCF0006/ref=sr_1_6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=ecran%2Bsamsung&qid=1607536751&sr=8-6&th=1",
      price: "99,99€",
      isTake: false,
    },
    {
      id: 3,
      title: "Adaptateur Ordinateur",
      imageLink:
        "https://images-na.ssl-images-amazon.com/images/I/71WOA89WLZL._AC_SL1500_.jpg",
      brand: "Amazon",
      link:
        "https://www.amazon.fr/uni-Blindage-am%C3%A9lior%C3%A9-Compatible-MacBook/dp/B081YQKRY3/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=hub+usb+c+uni&qid=1607539390&sr=8-4",
      price: "29,99€",
      isTake: false,
    },
    {
      id: 4,
      title: "Pantalon Cargo - Kaki - Taille S",
      imageLink:
        "https://static.zara.net/photos///2020/I/0/2/p/0706/361/505/2/w/1140/0706361505_6_1_1.jpg?ts=1599725146870",
      brand: "Zara",
      link:
        "https://www.zara.com/fr/fr/pantalon-battle-structur%C3%A9-p00706361.html?v1=64726857&v2=1547026",
      price: "49,95€",
      isTake: true,
    },
    {
      id: 5,
      title: "Tee shirt - Noir - Taille M",
      imageLink:
        "https://static.zara.net/photos///2020/I/0/2/p/9240/320/800/2/w/1140/9240320800_6_1_1.jpg?ts=1595238898154",
      brand: "Zara",
      link:
        "https://www.zara.com/fr/fr/t-shirt-basique-compact-p09240320.html?v1=86662663&v2=1546869",
      price: "12,95€",
      isTake: true,
    },
  ]

  return (
    <div>
      <div className="text-center">
        <h1>Christmas List</h1>
        <h2>Mathis</h2>
      </div>
      <div className="container">
        {gifts.map(gift => (
          <Gift key={gift.id} data={gift} />
        ))}
      </div>
    </div>
  )
}
