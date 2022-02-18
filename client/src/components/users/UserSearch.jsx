import { useState, useContext } from 'react'
import AlertContext from '../../context/AlertContext'
import GithubContext from '../../context/GithubContext'
import { searchUsers } from '../../context/GithubActions'
import {
  InputGroup,
  Form,
  Button,
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap'
import Banner from '../../assets/images/banner.jpg'
import Alert from '../layout/Alert'
import styles from './styles/usersearch.module.css'

const UserSearch = () => {
  const [text, setText] = useState('')

  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text) {
      setAlert('Please enter something', 'error')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const { users, pages } = await searchUsers(text)
      if (text && users?.length < 1) {
        setAlert('No matches found...', 'info')
      }
      dispatch({ type: 'GET_USERS', payload: { users, pages } })
      setText('')
    }
  }

  return (
    <Container>
      <Row>
        <Col s={11} md={8}>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search"
                type="text"
                className={styles.inputStyle}
                onChange={handleChange}
                value={text}
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className={styles.btn}
              >
                Search
              </Button>
            </InputGroup>
          </Form>
          <Alert />
        </Col>
        {users && users.length > 0 && (
          <Col xs={12} s={1} md={1} lg={1} xl={1} xxl={1}>
            <Button
              className={styles.clearBtn}
              size="lg"
              onClick={() => dispatch({ type: 'CLEAR_USERS' })}
            >
              Clear
            </Button>
          </Col>
        )}
      </Row>
      {users?.length < 1 && (
        <Image fluid rounded src={Banner} alt={'banner image'} loading="lazy" />
      )}
    </Container>
  )
}

export default UserSearch
