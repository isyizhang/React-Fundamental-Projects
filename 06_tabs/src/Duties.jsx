import React from 'react'

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        return <p className="job-desc">{duty}</p>
      })}
    </div>
  )
}

export default Duties
