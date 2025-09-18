import useFetch from '@/hooks/useFetch'
import { getUsers } from '@/utils/queryFn'

export interface User {
  id?: number
  name: string
  username: string
  phone: string
  email: string
}

const Users = () => {
  const data = useFetch('users', getUsers)

  if (data.isLoading) return <p>Loading...</p>

  // @ts-expect-error ignore users property
  const users = data.data!.users as User[]

  return (
    <>
      {users.map((user) => (
        <div className='w-full border-2 p-3' key={user.id}>
          <h3 className='text-2xl'>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </>
  )
}

export default Users
