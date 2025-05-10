export const authService = {
  async login(email, password) {
    try {
      // Implement login logic
      return { success: true, token: 'sample-token' }
    } catch (error) {
      throw new Error('Login failed')
    }
  },

  async logout() {
    // Implement logout logic
    localStorage.removeItem('token')
    return { success: true }
  },

  isAuthenticated() {
    return !!localStorage.getItem('token')
  }
}