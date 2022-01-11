import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { FaInfo, FaExclamation } from 'react-icons/fa'
import AlertContext from '../../context/AlertContext'
import styles from './styles/alert.module.css'

const Alert = () => {
  const { alert } = useContext(AlertContext)

  const alertData = (() => {
    switch (alert?.type) {
      case 'error':
        return {
          icon: <FaExclamation />,
          style: styles.errorStyle,
          msg: alert?.msg,
        }
      case 'info':
        return { icon: <FaInfo />, style: styles.infoStyle, msg: alert?.msg }
      default:
        return { icon: '', style: '', msg: '' }
    }
  })()
  return (
    <Container className={`${alertData.style} mb-3 mt-0`}>
      {alertData.icon} {alertData.msg}
    </Container>
  )
}

export default Alert
