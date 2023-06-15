import React from 'react'

const MenuItem = (props) => {
  const { id, title, category, price, img, desc } = props
  return (
    <article className="menu-item">
      <section className="menu-item">
        <image src={img} alt={title} className="img" />
        <div className="item-info">
          <header>
            <h3>{title}</h3>
            <span>{price}</span>
          </header>

          <p className="item-text">{desc}</p>
        </div>
      </section>
    </article>
  )
}

export default MenuItem
