import Link from 'next/link'
import { Geist, Geist_Mono } from 'next/font/google'
import EnterAnimation from '@/common/enterAnimation'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <EnterAnimation>
          <h3 className='text-2xl'>hello, welcome to dashboard</h3>
        </EnterAnimation>
        <Link href={'/posts'}>Posts</Link>
        <Link href={'/users'}>Users</Link>
      </main>
    </div>
  )
}
