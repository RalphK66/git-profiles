import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Card, Button, Image } from 'react-bootstrap'
import { VscGithub } from 'react-icons/vsc'

function UserItem({ user: { login, avatar_url } }) {
  return (
    <Card bg="dark" text="light" border="light" className="text-center">
      <Image src={avatar_url} alt="Profile" fluid loading="lazy" />
      <Card.Body>
        <Card.Title>{login}</Card.Title>
        <Link to={`/user/${login}`}>
          <Button variant="outline-light">
            <VscGithub color="#4078c0" size={24} /> Visit Profile
          </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
