import React from 'react'

function GuardianDashboard() {
  return (
    <div className="guardian-dashboard">
      <h1>Guardian Dashboard</h1>
      <div className="student-progress">
        <h2>Student Progress</h2>
        <ul>
          <li>Assignments Completed: 15/20</li>
          <li>Current Grade: A-</li>
          <li>Attendance: 95%</li>
        </ul>
      </div>
    </div>
  )
}

export default GuardianDashboard