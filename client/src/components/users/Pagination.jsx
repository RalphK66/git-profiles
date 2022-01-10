import { useContext } from 'react'
import { ButtonGroup, Button, Container } from 'react-bootstrap'
import GithubContext from '../../context/GithubContext'
import AuthContext from '../../context/AuthContext'
import { getUsersFromLink } from '../../context/GithubActions'
import styles from './styles/pagination.module.css'
import { scrollToTop } from '../../utils/util'

const Pagination = () => {
  const { pages, dispatch } = useContext(GithubContext)
  const token = useContext(AuthContext)

  const handlePrevClick = async () => {
    dispatch({ type: 'SET_LOADING' })
    scrollToTop()
    const { users, pages: p } = await getUsersFromLink(pages.prev.link, token)
    dispatch({ type: 'GET_USERS', payload: { users, pages: p } })
  }

  const handleNextClick = async () => {
    dispatch({ type: 'SET_LOADING' })
    scrollToTop()
    const { users, pages: p } = await getUsersFromLink(pages.next.link, token)
    dispatch({ type: 'GET_USERS', payload: { users, pages: p } })
  }

  return (
    <Container className={styles.pageContainer}>
      <ButtonGroup className="m-2">
        <Button
          variant="secondary"
          disabled={!pages.prev}
          onClick={handlePrevClick}
        >
          {'<'}
        </Button>
        <Button variant="outline-secondary" disabled>
          {pages.next.pageNum - 1} of {pages.last.pageNum}
        </Button>
        <Button
          variant="secondary"
          disabled={!pages.next}
          onClick={handleNextClick}
        >
          {'>'}
        </Button>
      </ButtonGroup>
    </Container>
  )
}

export default Pagination
