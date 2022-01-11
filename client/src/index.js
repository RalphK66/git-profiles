import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { GithubProvider } from './context/GithubContext'
import { AlertProvider } from './context/AlertContext'

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
