export async function getPosts() {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/posts')
  const posts = await response.json()
  return posts
}

export async function getUsers() {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/users')
  const users = await response.json()
  return users
}
