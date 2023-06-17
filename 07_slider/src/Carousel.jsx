import React, { useState } from 'react'
import { useEffect } from 'react'
import { shortList, list, longList } from './data'

const Carousel = () => {
  const [people, setPeople] = useState(longList)
  const [currentPerson, setCurrentPerson] = useState(0)

  //   const prevSlide = () => {
  //     setCurrentPerson((oldPerson) => {
  //       let newPerson = (oldPerson - 1 + people.length) % people.length
  //       return newPerson
  //     })
  //   }

  //   const nextSlide = () => {
  //     setCurrentPerson((oldPerson) => {
  //       let newPerson = (oldPerson - 1 + people.length) % people.length
  //       return newPerson
  //     })
  //   }
  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length
      console.log('okk')
      return result
    })
  }
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length
      return result
    })
  }
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => {
      clearInterval(sliderId)
    }
  }, [currentPerson])

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
          </article>
        )
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        prev
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        next
      </button>
    </section>
  )
}

export default Carousel
