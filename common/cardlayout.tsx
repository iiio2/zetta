import type { ReactNode } from 'react'

const CardLayout = ({ children }: { children: ReactNode }) => {
  return <div className='rounded-md w-full border-2 p-3 m-2'>{children}</div>
}

export default CardLayout
