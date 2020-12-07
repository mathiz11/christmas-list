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
      title: "Pantalon Cargo - Kaki - Taille S",
      imageLink:
        "https://static.zara.net/photos///2020/I/0/2/p/0706/361/505/2/w/1140/0706361505_6_1_1.jpg?ts=1599725146870",
      brand: "Zara",
      link:
        "https://www.zara.com/fr/fr/pantalon-battle-structur%C3%A9-p00706361.html?v1=64726857&v2=1547026",
      price: "49,95€",
      isTake: false,
    },
    {
      id: 3,
      title: "Tee shirt - Noir - Taille M",
      imageLink:
        "https://static.zara.net/photos///2020/I/0/2/p/9240/320/800/2/w/1140/9240320800_6_1_1.jpg?ts=1595238898154",
      brand: "Zara",
      link:
        "https://www.zara.com/fr/fr/t-shirt-basique-compact-p09240320.html?v1=86662663&v2=1546869",
      price: "12,95€",
      isTake: false,
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
