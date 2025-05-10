import React from 'react'
import { Link } from 'react-router-dom'

function NavLayout() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/dashboard/business">Business Dashboard</Link></li>
        <li><Link to="/dashboard/guardian">Guardian Dashboard</Link></li>
        <li><Link to="/dashboard/institute">Institute Dashboard</Link></li>
        <li><Link to="/dashboard/student">Student Dashboard</Link></li>
        <li><Link to="/dashboard/teacher">Teacher Dashboard</Link></li>
        <li><Link to="/auth">Login</Link></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>
    </nav>
  )
}

export default NavLayout