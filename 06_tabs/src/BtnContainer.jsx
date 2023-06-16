import React from 'react'
import JobInfo from './JobInfo'
const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button onClick={() => setCurrentItem(index)}>{job.company}</button>
        )
      })}
    </div>
  )
}

export default BtnContainer
