import React from 'react'

function BusinessDashboard() {
  return (
    <div className="business-dashboard">
      <h1>Business Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p>$50,000</p>
        </div>
        <div className="stat-card">
          <h3>Active Users</h3>
          <p>1,234</p>
        </div>
      </div>
    </div>
  )
}

export default BusinessDashboard