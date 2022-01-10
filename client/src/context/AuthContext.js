import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      const response = await axios.get('/api/token')
      setToken(response.data.token)
    }
    fetchToken()
  }, [])

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>
}

export default AuthContext
