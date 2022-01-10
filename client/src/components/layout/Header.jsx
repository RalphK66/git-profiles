import { NavLink } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { VscEye } from 'react-icons/vsc'
import styles from './styles/header.module.css'

const Header = () => {
  return (
    <Navbar variant="dark" expand="md" className="header">
      <Container>
        <Navbar.Brand className={styles.navBrand}>
          Github <VscEye color="red" size='48px' /> Profiles
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
