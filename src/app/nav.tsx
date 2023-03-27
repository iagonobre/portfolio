'use client'
import Image from 'next/image'

import whatsapp from '../../public/whatsapp.svg'
import instagram from '../../public/instagram.svg'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

export function Nav() {
  const name = usePathname()

  return (
    <div className="flex absolute bottom-0 justify-between px-14 py-8 w-full z-10">
      <Link href="/" className="text-base text-gray-300 hover:text-white">
        iagonobre.com
      </Link>
      <nav className="flex">
        <div className="relative flex flex-col items-center justify-center mr-6">
          <Link
            href="/contact"
            // eslint-disable-next-line prettier/prettier
            className={`text-base ${name === '/contact' ? 'text-lightPurple' : 'text-gray-300 hover:text-white'} text-sm`}
          >
            Contato
          </Link>
          <span
            // eslint-disable-next-line prettier/prettier
            className={`${name !== '/contact' && 'hidden'} absolute -bottom-2 w-4 h-1 rounded-sm bg-lightPurple`}
          />
        </div>

        <div className="relative flex flex-col items-center justify-center mr-6">
          <Link
            href="/"
            // eslint-disable-next-line prettier/prettier
            className={`text-base ${name === '/' ? 'text-lightPurple' : 'text-gray-300 hover:text-white'} text-sm`}
          >
            Home
          </Link>
          <span
            // eslint-disable-next-line prettier/prettier
            className={`${name !== '/' && 'hidden'} absolute -bottom-2 w-4 h-1 rounded-sm bg-lightPurple`}
          />
        </div>

        <div className="relative flex flex-col items-center justify-center mr-6">
          <Link
            href="/portfolio"
            // eslint-disable-next-line prettier/prettier
            className={`text-base ${name === '/portfolio' ? 'text-lightPurple' : 'text-gray-300 hover:text-white'} text-sm`}
          >
            Portfólio
          </Link>
          <span
            // eslint-disable-next-line prettier/prettier
            className={`${name !== '/portfolio' && 'hidden'} absolute -bottom-2 w-4 h-1 rounded-sm bg-lightPurple`}
          />
        </div>
      </nav>
      <div className="flex">
        <button>
          <Image src={whatsapp} alt="Logo do Whatsapp" />
        </button>
        <button>
          <Image className="ml-4" src={instagram} alt="Logo do Instagram" />
        </button>
      </div>
    </div>
  )
}
