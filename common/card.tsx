import type { Post } from '@/pages/posts'

const Card = ({ title, body }: Post) => {
  return (
    <>
      <h3 className='text-2xl'>{title}</h3>
      <p>{body}</p>
    </>
  )
}

export default Card
