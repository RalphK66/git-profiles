import axios from 'axios'

export const searchUsers = async (text) => {
  const response = await axios.post('/api/users', {
    headers: { 'Content-Type': 'application/json' },
    text,
  })
  const users = response.data.users
  const pages = response.data.pages
  return { users, pages }
}

export const getUsersFromLink = async (link) => {
  const response = await axios.post('/api/users-link', {
    headers: { 'Content-Type': 'application/json' },
    link,
  })
  const users = response.data.users
  const pages = response.data.pages
  return { users, pages }
}

export const getUserAndRepos = async (login) => {
  const response = await axios.post('/api/user', {
    headers: { 'Content-Type': 'application/json' },
    login,
  })
  const user = response.data.user
  const repos = response.data.repos
  return { user, repos }
}
