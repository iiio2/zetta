import useFetch from '@/hooks/useFetch'
import { getUsers } from '@/utils/queryFn'
import CardLayout from '@/common/cardlayout'
import GestureAnimation from '@/common/gestureAnimation'

export interface User {
  id?: number
  name: string
  username: string
  phone: string
  email: string
}

const Users = () => {
  const data = useFetch(['users'], getUsers)

  if (data.isPending) return <p>Loading...</p>

  if (data.isError) return <p>Failed to fetch users</p>

  // @ts-expect-error ignore users property
  const users = data.data!.users as User[]

  return (
    <>
      {users.map((user) => (
        <GestureAnimation key={user.id}>
          <CardLayout>
            <h3 className='text-2xl'>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </CardLayout>
        </GestureAnimation>
      ))}
    </>
  )
}

export default Users
