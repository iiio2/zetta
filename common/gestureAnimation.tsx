import { ReactNode } from 'react'
import * as motion from 'motion/react-client'

export default function GestureAnimation({
  children,
}: {
  children: ReactNode
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 25,
        duration: 1.2,
      }}
    >
      {children}
    </motion.div>
  )
}
