import Title from './Title'
import data from './data'
import { useState } from 'react'
import Menu from './Menu'

const App = () => {
  const allCategories = ['all', ...new Set(data.map((item) => item.category))]
  console.log(allCategories)
  const [menu, setMenu] = useState(data)
  const [categories, setCategories] = useState(allCategories)
  const toggleCategory = (c) => {
    if (c === 'all') {
      //setCategory('all')
      setMenu(data)
    } else {
      const newData = data.filter((item) => item.category === c)
      setMenu(newData)
    }
  }

  return (
    <main>
      <section className="menu">
        <Title toggleCategory={toggleCategory} categories={categories} />
        <Menu menu={menu} />
        okk
      </section>
    </main>
  )
}
export default App
