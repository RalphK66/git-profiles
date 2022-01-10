import React from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap'


const Layout = ({ children }) => {
  return (
    <div className={`d-flex flex-column min-vh-100 layout`}>
      <Header />
      <Container>{children}</Container>
      <footer className="mt-auto">
        <p>Copyright 2022 readyRalph</p>
      </footer>
    </div>
  )
}

export default Layout
