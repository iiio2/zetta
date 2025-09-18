import useFetch from '@/hooks/useFetch'
import { getPosts } from '@/utils/queryFn'
import Card from '@/common/card'
import CardLayout from '@/common/cardlayout'

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
        <CardLayout key={post.id}>
          <Card {...post} />
        </CardLayout>
      ))}
    </>
  )
}

export default Posts
