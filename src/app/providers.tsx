'use client'

import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <AnimatePresence initial={false}>
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  )
}
