import PropTypes from 'prop-types'
import { Card, Col, Row } from 'react-bootstrap'
import RepoItem from './RepoItem'

function RepoList({ repos }) {
  return (
    <Card bg="secondary" text="light">
      <Card.Body>
        <Card.Title as={'h1'}>
          Latest Repositories
        </Card.Title>
        
        <Row xs={1} md={2}>
          {repos.map((repo, idx) => (
            <Col className="mb-2" key={idx}>
              <RepoItem key={repo.id} repo={repo} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default RepoList
