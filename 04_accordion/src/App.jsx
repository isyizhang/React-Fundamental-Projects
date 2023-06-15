import { useState } from 'react'
import data from './data'
import Question from './Question'

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [index, setIndex] = useState(0)
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />
      })}
    </section>
  )
}
export default App
