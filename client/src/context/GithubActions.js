import axios from 'axios'
import { parsePageLink } from '../utils/util'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

const github = async (token) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {}
  return axios.create({
    baseURL: GITHUB_URL,
    headers: { ...headers, Accept: 'application/vnd.github.v3+json' },
  })
}

// Get search results
export const searchUsers = async (text, token) => {
  const params = new URLSearchParams({
    q: text,
    sort: 'followers',
    per_page: 12,
  })
  const git = await github(token)

  const response = await git.get(`/search/users?${params}`)
  const users = response.data.items
  const pages = parsePageLink(response.headers.link)
  return { users, pages }
}

export const getUsersFromLink = async (url, token) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {}
  const response = await axios.get(url, { headers: headers })
  const users = response.data.items
  const pages = parsePageLink(response.headers.link)
  return { users, pages }
}

// Get user and repos
export const getUserAndRepos = async (login, token) => {
  const git = await github(token)
  const [user, repos] = await Promise.all([
    git.get(`/users/${login}`),
    git.get(`/users/${login}/repos`),
  ])

  return { user: user.data, repos: repos.data }
}
