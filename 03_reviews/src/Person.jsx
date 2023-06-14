import React from 'react'

const Person = (props) => {
  const { name, job, image, text } = props
  return (
    <div>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon"></span>
      </div>
      <h4 className="author">{name}</h4>
      <h4 className="job">{job}</h4>
      <p className="info">{text}</p>
    </div>
  )
}

export default Person
