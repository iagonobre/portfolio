'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import circleImage from '../../../public/circle.png'
import rightArrow from '../../../public/rightArrow.svg'
import Link from 'next/link'
import { Nav } from '../nav'

export default function Contact() {
  return (
    <div className="flex w-screen h-screen bg-black items-center justify-center flex-col">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
        className="flex w-full h-full items-center justify-center"
      >
        <div className="flex justify-between max-lg:p-8">
          <div className="z-30">
            <h2 className="text-7xl font-bold text-white">CONTATO.</h2>
            <div className="flex">
              <span className="w-4 h-1 mt-1 bg-white rounded-sm" />
              <div className="ml-2">
                <p className="text-lg font-medium text-white leading-3">
                  Iago Nobre
                </p>
                <p className="text-lg text-gray-300">Software Developer</p>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="flex items-center justify-end absolute right-0 max-lg:hidden h-60 w-60 overflow-hidden"
        >
          <div className="flex justify-end items-center overflow-hidden w-1/2 h-full ease-in duration-100 hover:h-52 hover:w-28 z-10 rounded-bl-full rounded-tl-full">
            <Image
              className="absolute h-full -right-1/2 animate-spin-slow hover:animate-none"
              style={{ objectFit: 'contain' }}
              src={circleImage}
              alt="Círculo roxo"
            />
            <Image
              className="m-2"
              style={{ objectFit: 'contain' }}
              src={rightArrow}
              alt="Seta apontando para esquerda"
            />
            <div className="flex items-center justify-end drop-shadow-purple border-4 border-lightPurple border-r-0 rounded-bl-full rounded-tl-full h-1/2 w-1/2">
              <div className="drop-shadow-darkPurple bg-black rounded-bl-full rounded-tl-full h-1/2 w-1/2" />
            </div>
          </div>
        </Link>
      </motion.div>
      <Nav />
    </div>
  )
}
