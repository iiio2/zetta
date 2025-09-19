import { useRouter } from 'next/router'
import type { Post } from '.'
import useFetch from '@/hooks/useFetch'
import { getPost } from '@/utils/queryFn'
import CardLayout from '@/common/cardlayout'

const Post = () => {
  const router = useRouter()

  const data = useFetch(['post', router.query.id as string], () =>
    getPost(router.query.id as string)
  )

  if (data.isPending) return <p>loading...</p>
  if (data.isError) return <p>Failed to fetch post</p>

  // @ts-expect-error ignore post property
  const post = data.data.post as Post

  return (
    <CardLayout>
      <h3 className='text-2xl'>{post.title}</h3>
      <p>{post.body}</p>
    </CardLayout>
  )
}

export default Post
