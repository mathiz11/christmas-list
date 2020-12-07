import React from "react"

function Gift({ data }) {
  const { title, imageLink, brand, link, price } = data

  return data.id % 2 === 0 ? (
    <div className="gift bg-dark-blue">
      <div className="gift-content">
        <h3>{title}</h3>
        <div className="gift-brand">{brand}</div>
        <a href={link} className="gift-link">
          {link ? "Lien vers le site" : "Contactez Mathis"}
        </a>
        <div className="gift-price">{price}</div>
      </div>
      <img src={imageLink} alt={title} />
    </div>
  ) : (
    <div className="gift bg-grey">
      <img src={imageLink} alt={title} />
      <div className="gift-content">
        <h3>{title}</h3>
        <div className="gift-brand">{brand}</div>
        <a href={link} className="gift-link">
          {link ? "Lien vers le site" : "Contactez Mathis"}
        </a>
        <div className="gift-price">{price}</div>
      </div>
    </div>
  )
}

export default Gift
