import PropTypes from 'prop-types'
import { Card, Nav, Badge } from 'react-bootstrap'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo

  return (
    <Card bg="dark" text="light" className="h-100">
      <Card.Body>
        <Card.Title>
          <Nav.Link href={html_url}>
            <FaLink color="lightblue" /> {name}
          </Nav.Link>
        </Card.Title>

        <Card.Text>{description}</Card.Text>
        <div>
          <Badge bg="dark" text="danger">
            <FaEye className="mr-2" /> {watchers_count}
          </Badge>{' '}
          <Badge bg="dark" text="warning">
            <FaStar className="mr-2" /> {stargazers_count}
          </Badge>{' '}
          <Badge bg="dark" text="success">
            <FaInfo className="mr-2" /> {open_issues}
          </Badge>{' '}
          <Badge bg="dark" text="info">
            <FaUtensils className="mr-2" /> {forks}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
