'use client'

import { ReactNode } from 'react'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
import { Nav } from './nav'

const jetbrains_mono = JetBrains_Mono({
  variable: '--jetbrains-font',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains_mono.variable} font-jetbrains`}>
      <body>
        <Providers>
          <>{children}</>
          <Nav />
        </Providers>
      </body>
    </html>
  )
}
