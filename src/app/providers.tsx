'use client'

import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <AnimatePresence initial={false} mode="wait">
      <div className="absolute w-full h-full" key={pathname}>
        {children}
      </div>
    </AnimatePresence>
  )
}
