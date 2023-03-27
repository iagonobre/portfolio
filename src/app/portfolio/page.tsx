'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import biggerCircleImage from '../../../public/biggerCircle.png'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{
        duration: 1.5,
        ease: 'easeOut',
      }}
      exit={{ opacity: 1 }}
      className="absolute top-0 left-0 w-full h-full bg-black"
    >
      <div className="flex w-full h-full items-center justify-center">
        <Link
          href="/"
          className="flex items-center absolute left-0 max-lg:-bottom-12 h-[26rem] w-[26rem]"
        >
          <Image
            className="absolute h-full w-full -left-1/2"
            style={{ objectFit: 'contain' }}
            src={biggerCircleImage}
            alt="Círculo roxo"
          />
          <div className="flex items-center overflow-hidden w-1/4 h-1/2 z-10 rounded-br-full rounded-tr-full">
            <div className="flex items-center drop-shadow-purple border-4 border-lightPurple border-l-0 rounded-br-full rounded-tr-full h-1/2 w-1/2">
              <div className="drop-shadow-darkPurple bg-black rounded-br-full rounded-tr-full h-1/2 w-1/2" />
            </div>
          </div>
        </Link>

        <div className="flex justify-between max-lg:p-8">
          <div className="z-30">
            <h2 className="text-7xl font-bold text-white">Portfólio.</h2>
            <div className="flex items-center">
              <span className="w-4 h-1 bg-white rounded-sm" />
              <div className="ml-2">
                <p className="text-lg text-gray-300 w-72 leading-5">
                  Aqui você vai encontrar meus principais projetos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
