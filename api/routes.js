import { Router } from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import { parsePageLinks } from './util.js'

dotenv.config()
const router = Router()

const headers = {
  Accept: 'application/vnd.github.v3+json',
  Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
}

router.post('/users', async (req, res) => {
  const q = req.body.text
  const params = new URLSearchParams({
    q,
    sort: 'followers',
    per_page: 30,
  })
  axios
    .get(`${process.env.GITHUB_URL}/search/users?${params}`, { headers })
    .then((response) => {
      const [users, pages] = [[], []]
      if (response.data.total_count !== 0) {
        users = response.data.items
        pages = parsePageLinks(response.headers.link)
      }
      res.status(200).send({ users, pages })
    })
    .catch((err) => res.send({ err, message: err.message }))
})

router.post('/users-link', async (req, res) => {
  const url = req.body.link
  axios
    .get(url, { headers })
    .then((response) => {
      const users = response.data.items
      const pages = parsePageLinks(response.headers.link)
      res.status(200).send({ users, pages })
    })
    .catch((err) => res.send({ err, message: err.message }))
})

router.post('/user', async (req, res) => {
  const login = req.body.login
  const userUrl = `${process.env.GITHUB_URL}/users/${login}`
  const reposUrl = `${process.env.GITHUB_URL}/users/${login}/repos`

  Promise.all([
    axios.get(userUrl, { headers }),
    axios.get(reposUrl, { headers }),
  ])
    .then((response) => {
      const [user, repos] = response
      res.status(200).send({ user: user.data, repos: repos.data })
    })
    .catch((err) => res.send({ err, message: err.message }))
})

export { router }
