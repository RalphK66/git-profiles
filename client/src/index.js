import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { GithubProvider } from './context/GithubContext'


ReactDOM.render(
  <React.StrictMode>
 
      <GithubProvider>
        <App />
      </GithubProvider>

  </React.StrictMode>,
  document.getElementById('root')
)
