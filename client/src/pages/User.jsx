import { useEffect, useContext } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import RepoList from '../components/repos/RepoList'
import Loader from '../components/layout/Loader'
import GithubContext from '../context/GithubContext'
import { getUserAndRepos } from '../context/GithubActions'
import {
  Container,
  Row,
  Card,
  Col,
  Button,
  Badge,
  ListGroup,
} from 'react-bootstrap'
import {
  FaCity,
  FaCode,
  FaGithubSquare,
  FaGlobe,
  FaTwitterSquare,
  FaUserFriends,
  FaUsers,
} from 'react-icons/fa'

const User = () => {
  const { user, loading, repos, dispatch } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login)
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData })
    }

    getUserData()
  }, [dispatch, params.login])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_login,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  return (
    <Layout>
       {loading && <Loader />}
      <Container>
        <div className="mb-4">
          <Button as={NavLink} to="/" size="lg" variant="outline-light">
            Back To Search
          </Button>
        </div>
        <Row className="g-2">
          <Col xs={12} s={6} md={6}>
            <Card bg="light" text="dark">
              <Card.Header as="h1">{name}</Card.Header>
              <Card.Img variant="top" src={avatar_url} alt="Profile" />
              <Card.Body>
                <Card.Title>
                  {login}{' '}
                  <Badge pill={true} bg="secondary">
                    {type}
                  </Badge>{' '}
                  {hireable && (
                    <Badge pill={true} bg="success">
                      Hireable
                    </Badge>
                  )}
                </Card.Title>
                <Card.Text>{bio}</Card.Text>
                <Button
                  variant="outline-dark"
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Github Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} s={6} md={6}>
            <Card bg="light" text="dark">
              <Card.Header as="h3">Info</Card.Header>
              <Card.Body>
                <ListGroup style={{ whiteSpace: 'nowrap' }}>
                  <ListGroup.Item variant="secondary" style={{ width: '100%' }}>
                    <FaCity color="blue" /> {location}
                  </ListGroup.Item>
                  {blog && (
                    <ListGroup.Item
                      variant="secondary"
                      style={{ width: '100%' }}
                    >
                      <a
                        href={`https://${blog}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGlobe color="blue" /> {blog}
                      </a>
                    </ListGroup.Item>
                  )}
                  {twitter_login && (
                    <ListGroup.Item
                      variant="secondary"
                      style={{ width: '100%' }}
                    >
                      <a
                        href={`https://twitter.com/${twitter_login}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitterSquare color="blue" /> {twitter_login}
                      </a>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
              <Card.Body>
                <ListGroup style={{ whiteSpace: 'nowrap' }}>
                  <ListGroup.Item variant="secondary" style={{ width: '100%' }}>
                    <FaUsers color="blue" /> Followers {followers}
                  </ListGroup.Item>
                  <ListGroup.Item variant="secondary" style={{ width: '100%' }}>
                    <FaUserFriends color="blue" /> Following {following}
                  </ListGroup.Item>
                  <ListGroup.Item variant="secondary" style={{ width: '100%' }}>
                    <FaGithubSquare color="blue" /> Public Repos {public_repos}
                  </ListGroup.Item>
                  <ListGroup.Item variant="secondary" style={{ width: '100%' }}>
                    <FaCode color="blue" /> Public Gists {public_gists}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} s={6} md={4}></Col>
        </Row>
        <RepoList repos={repos} />
      </Container>
    </Layout>
  )
}

export default User
