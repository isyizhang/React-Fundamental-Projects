import { useEffect } from 'react'
import { useState } from 'react'
import JobInfo from './JobInfo'
import { v4 as uuidv4 } from 'uuid'
import BtnContainer from './BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setJobs(data)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <div>is loading</div>
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo key={jobs[currentItem].id} {...jobs[currentItem]} />
    </section>
  )
}
export default App
