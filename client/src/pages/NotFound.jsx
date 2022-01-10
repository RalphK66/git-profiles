import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import styles from './styles/notfound.module.css'

const NotFound = () => {
  return (
    <Layout>
      <div className={styles.notfound}>
        <h1>Oops!</h1>
        <p>404 - Page Not Found!</p>
        <hr />
        <Button as={NavLink} to="/" size="lg" variant="outline-light">
          Back To Home
        </Button>
      </div>
    </Layout>
  )
}

export default NotFound
