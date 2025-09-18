import type { Post } from '@/pages/posts'

const Card = ({ title, body }: Post) => {
  return (
    <div className='w-full border-2 p-3'>
      <h3 className='text-2xl'>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Card
