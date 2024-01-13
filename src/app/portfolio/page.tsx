'use client'

import Image from 'next/image'

// import { motion } from 'framer-motion'

import biggerCircleImage from '../../../public/biggerCircle.png'

export default function Portfolio() {
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
      <div className="flex w-full h-full items-center justify-between">
        <div className="flex items-center max-lg:hidden h-[32rem]">
          <Image
            className="absolute h-[32rem] w-full -left-1/2"
            style={{ objectFit: 'contain' }}
            src={biggerCircleImage}
            alt="Círculo roxo"
          />
          <div className="flex items-center drop-shadow-purple border-4 border-lightPurple border-l-0 rounded-br-full rounded-tr-full h-[8rem] w-[4rem]">
            <div className="drop-shadow-darkPurple bg-black rounded-br-full rounded-tr-full h-1/2 w-1/2" />

            <button className="absolute origin text-lg text-left font-bold text-gray-300 ease-out duration-300 hover:text-xl hover:text-white z-10">
              Mobile Apps
            </button>
            <button className="absolute origin text-sm text-left font-bold text-gray-300 ease-out duration-300 hover:text-xl hover:text-white z-10">
              Mobile Apps
            </button>
            <button className="absolute origin text-sm text-left font-bold text-gray-300 ease-out duration-300 hover:text-xl hover:text-white z-10">
              Mobile Apps
            </button>
            <button className="absolute origin text-sm text-left font-bold text-gray-300 ease-out duration-300 hover:text-xl hover:text-white z-10">
              Mobile Apps
            </button>
          </div>
          <div className="flex flex-col bg-red-500"></div>
        </div>

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
    </div>
  )
}
