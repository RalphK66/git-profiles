import { Spinner } from 'react-bootstrap'
import styles from './styles/loader.module.css'

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      className={styles.loader}
      variant="light"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Loader
