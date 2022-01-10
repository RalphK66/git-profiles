import Layout from '../components/layout/Layout'
import styles from './styles/about.module.css'

const About = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>About</h1>
        <hr />
        <h5>
          Utility to find GitHub User Profiles and view user data, including
          stats and repositories.
        </h5>
      </div>
    </Layout>
  )
}

export default About
