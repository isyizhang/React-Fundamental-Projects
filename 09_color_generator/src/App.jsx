import { useState } from 'react'
import Form from './Form'
import ColorList from './ColorList'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'
const App = () => {
  const [colorList, setColorList] = useState(new Values('#f15025').all(10))
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColorList(newColors)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colorList={colorList} />
    </main>
  )
}
export default App
