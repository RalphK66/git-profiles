import Layout from '../components/layout/Layout'
import UserSearch from '../components/users/UserSearch'
import UserResults from '../components/users/UserResults'
import { Col } from 'react-bootstrap'
const Home = () => {
  return (
    <Layout>
      <Col>
        <UserSearch />
        <UserResults />
      </Col>
    </Layout>
  )
}

export default Home
