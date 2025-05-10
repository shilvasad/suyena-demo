import React from 'react'

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>
      <div className="upcoming-tasks">
        <h2>Upcoming Tasks</h2>
        <ul>
          <li>Math Assignment - Due Tomorrow</li>
          <li>Science Project - Due Next Week</li>
          <li>English Essay - Due in 3 days</li>
        </ul>
      </div>
    </div>
  )
}

export default StudentDashboard