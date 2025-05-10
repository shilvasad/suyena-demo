import React from 'react'

function TeacherDashboard() {
  return (
    <div className="teacher-dashboard">
      <h1>Teacher Dashboard</h1>
      <div className="class-overview">
        <h2>Class Overview</h2>
        <div className="classes">
          <div className="class-card">
            <h3>Class 10A</h3>
            <p>Students: 30</p>
            <p>Average Grade: B+</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard