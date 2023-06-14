import { useState } from 'react'
import { FaBeer, FaChevronLeft } from 'react-icons/fa'
import data from './data'
import Person from './Person'

const App = () => {
  const [index, setIndex] = useState(0)
  const [person, setPerson] = useState(data[0])

  const handleNext = () => {
    if (index === data.length - 1) {
      setIndex(0)
      setPerson(data[0])
    } else {
      let newIndex = index + 1
      setIndex(newIndex)
      setPerson(data[newIndex]) // Use updated value of index
    }
  }

  const handlePrev = () => {
    if (index === 0) {
      setIndex(data.length - 1)
      setPerson(data[data.length - 1]) // Use updated value of index
    } else {
      let newIndex = index - 1
      setIndex(newIndex)
      setPerson(data[newIndex]) // Use updated value of index
    }
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    if (randomNumber === data.length) {
      randomNumber = 0
    }
    setIndex(randomNumber)
    setPerson(data[randomNumber])
  }
  return (
    <div>
      <article className="review">
        <FaBeer className="beer" />
        <Person key={person.id} {...person} />
        <div>
          <button onClick={handlePrev}>left</button>
          <button onClick={handleNext}>right</button>
        </div>
        <button className="btn" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </div>
  )
}
export default App
