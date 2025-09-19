export async function getPosts() {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/posts')
  return await response.json()
}

export async function getUsers() {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/users')
  return await response.json()
}

export async function getPost(id: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/posts/' + id
  )
  return await response.json()
}
