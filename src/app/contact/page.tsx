'use client'

import Image from 'next/image'

// import { motion } from 'framer-motion'

import circleImage from '../../../public/circle.png'
import planet from '../../../public/planet.png'
import Link from 'next/link'

export default function Contact() {
  return (
    <div
      // initial={{ x: '100%' }}
      // animate={{ x: '0%' }}
      // transition={{
      //   duration: 1.5,
      //   ease: 'easeOut',
      // }}
      className="absolute top-0 left-0 w-full h-full bg-black"
    >
      <div className="flex w-full h-full items-center">
        <Image
          className="absolute left-0 h-4/5 w-min"
          style={{ objectFit: 'contain' }}
          src={planet}
          alt="Planeta com detalhes roxos"
        />
        <Link
          href="/"
          className="flex items-center justify-end absolute right-0 max-lg:hidden h-60 w-60 overflow-hidden"
        >
          <div className="flex justify-end items-center overflow-hidden w-1/2 h-full ease-in duration-100 hover:h-52 hover:w-28 z-10 rounded-bl-full rounded-tl-full">
            <Image
              className="absolute h-full -right-1/2 animate-spin-slow"
              style={{ objectFit: 'contain' }}
              src={circleImage}
              alt="Círculo roxo"
            />
            <p className="text-white font-regular m-2">Home</p>
            <div className="flex items-center justify-end drop-shadow-purple border-4 border-lightPurple border-r-0 rounded-bl-full rounded-tl-full h-1/2 w-1/2">
              <div className="drop-shadow-darkPurple bg-black rounded-bl-full rounded-tl-full h-1/2 w-1/2" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
