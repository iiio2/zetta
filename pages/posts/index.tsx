import useFetch from '@/hooks/useFetch'
import { getPosts } from '@/utils/queryFn'
import Card from '@/common/card'

export interface Post {
  id?: number
  title?: string
  body?: string
  uid?: number
}

const Posts = () => {
  const data = useFetch('posts', getPosts)

  if (data.isLoading) return <p>Loading...</p>

  // @ts-expect-error ignore posts property
  const posts = data.data!.posts as Post[]

  return (
    <>
      {posts.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </>
  )
}

export default Posts
