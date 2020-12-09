import React from "react"

function Gift({ data }) {
  const { title, imageLink, brand, link, price, isTake, otherLink } = data

  const otherLinkJSX = otherLink && (
    <a href={otherLink} className="gift-link">
      {otherLink ? "Lien vers le site" : "Contactez Mathis"}
    </a>
  )

  return data.id % 2 === 0 ? (
    <div className={`gift bg-dark-blue ${isTake && "disabled"}`}>
      <div className="gift-content">
        <h3>{title}</h3>
        <div className="gift-brand">{brand}</div>
        {!isTake && (
          <>
            <a href={link} className="gift-link">
              {link ? "Lien vers le site" : "Contactez Mathis"}
            </a>
            {otherLinkJSX}
          </>
        )}
        <div className="gift-price">{price}</div>
      </div>
      <img src={imageLink} alt={title} />
    </div>
  ) : (
    <div className={`gift bg-grey ${isTake && "disabled"}`}>
      <img src={imageLink} alt={title} />
      <div className="gift-content">
        <h3>{title}</h3>
        <div className="gift-brand">{brand}</div>
        {!isTake && (
          <>
            <a href={link} className="gift-link">
              {link ? "Lien vers le site" : "Contactez Mathis"}
            </a>
            {otherLinkJSX}
          </>
        )}
        <div className="gift-price">{price}</div>
      </div>
    </div>
  )
}

export default Gift
