import { useState } from 'react'
import text from './data'
const App = () => {
  const [count, setCount] = useState(1)
  const [curtext, setCurtext] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setCurtext(text.slice(0, amount))
  }

  return (
    <section>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">generate</button>
      </form>
      <p>
        {curtext.map((item) => {
          return <p>{item}</p>
        })}
      </p>
    </section>
  )
}
export default App
