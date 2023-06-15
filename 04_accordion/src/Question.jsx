import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  const { title, info } = props
  const [showInfo, setShowInfo] = useState(false)
  const handleToggle = () => {
    let newShowInfo = !showInfo
    setShowInfo(newShowInfo)
  }
  return (
    <article className="question">
      <header>
        <h3>{title}</h3>
        <button className="question-btn" onClick={handleToggle}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question
