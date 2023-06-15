import React from 'react'

const Title = ({ toggleCategory, categories }) => {
  return (
    <div>
      <header className="title">Our Menu</header>
      <div className="btn-container">
        {categories.map((category) => {
          return (
            <button
              type="button"
              className="btn"
              key={category}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Title
