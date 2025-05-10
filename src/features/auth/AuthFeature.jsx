import React from 'react'

function AuthFeature() {
  return (
    <div className="auth-feature">
      <h2>Authentication</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default AuthFeature