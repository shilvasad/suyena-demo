const BASE_URL = 'http://localhost:3000/api'

export const apiService = {
  async get(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  },

  async post(endpoint, data) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }
}