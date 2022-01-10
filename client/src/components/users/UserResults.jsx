import { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import UserItem from './UserItem'
import GithubContext from '../../context/GithubContext'
import Pagination from './Pagination'
import Loader from '../layout/Loader'

const UserResults = () => {
  const { users, loading } = useContext(GithubContext)

  const userCards =
    users &&
    users.map((user, idx) => (
      <Col key={idx}>
        <UserItem key={user.id} user={user} />
      </Col>
    ))

  return (
    <>
      <Row>
        <Col>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {userCards}
          </Row>
        </Col>
      </Row>
      <Row>{users && users.length > 0 && <Pagination />}</Row>
      {loading && <Loader />}
    </>
  )
}

export default UserResults
