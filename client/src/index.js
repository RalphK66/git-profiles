import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { GithubProvider } from './context/GithubContext'
import { AuthProvider } from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <GithubProvider>
        <App />
      </GithubProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
