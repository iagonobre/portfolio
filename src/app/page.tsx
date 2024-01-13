'use client'

import Image from 'next/image'

// import { motion } from 'framer-motion'

import backgroundImage from '../../public/galaxy.png'
import codeImage from '../../public/code.png'
import rightImage from '../../public/rightLine.png'
import menuIcon from '../../public/menu-icon.svg'
import circleImage from '../../public/circle.png'
import leftArrow from '../../public/leftArrow.svg'
import rightArrow from '../../public/rightArrow.svg'
import Link from 'next/link'

export default function Home() {
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
      <div className="flex w-full h-full items-center justify-center">
        <Link
          href="/contact"
          className="flex items-center absolute left-0 max-lg:-bottom-12 h-60 w-60"
        >
          <div className="flex items-center overflow-hidden w-1/2 h-full ease-in duration-100 hover:h-52 hover:w-28 z-10 rounded-br-full rounded-tr-full">
            <Image
              className="absolute h-full -left-1/2 animate-spin-slow"
              style={{ objectFit: 'contain' }}
              src={circleImage}
              alt="Círculo roxo"
            />
            <div className="flex items-center drop-shadow-purple border-4 border-lightPurple border-l-0 rounded-br-full rounded-tr-full h-1/2 w-1/2">
              <div className="drop-shadow-darkPurple bg-black rounded-br-full rounded-tr-full h-1/2 w-1/2" />
            </div>
            <Image
              className="m-2"
              style={{ objectFit: 'contain' }}
              src={leftArrow}
              alt="Seta apontando para esquerda"
            />
          </div>
        </Link>

        <div className="flex max-lg:flex-col lg:justify-center lg:items-center h-full w-[58rem]">
          <div className="flex justify-between max-lg:p-8">
            <div className="z-30">
              <h2 className="text-7xl font-bold text-white">Olá.</h2>
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
            <button className="lg:hidden h-6">
              <Image src={menuIcon} alt="Ícone para abrir menu"></Image>
            </button>
          </div>

          <div className="relative drop-shadow-purple flex items-center overflow-hidden lg:h-[32rem] lg:w-[32rem] max-lg:h-full max-lg:m-8 lg:m-4 max-lg:-top-20">
            <Image
              src={codeImage}
              className="absolute h-full w-full z-10"
              style={{
                objectFit: 'contain',
              }}
              alt="Códigos binários"
            />
            <Image
              src={rightImage}
              className="absolute h-full w-full  z-20"
              style={{
                objectFit: 'contain',
              }}
              alt="Linha roxa lateral"
            />
            <Image
              src={backgroundImage}
              style={{
                objectFit: 'contain',
                borderImageSource: '',
              }}
              className="absolute h-full w-full animate-spin-slow"
              alt="Fundo de galáxia"
            />
            <div className="flex absolute w-[10rem] flex-col right-10 text-right lg:hidden z-30">
              <a className="text-lg text-gray-300 ease-out duration-300 hover:text-2xl hover:text-white">
                Mobile Apps
              </a>
              <a className="text-lg text-gray-300 ease-out duration-300 hover:text-2xl hover:text-white">
                Websites
              </a>
              <a className="text-lg text-gray-300 ease-out duration-300 hover:text-2xl hover:text-white">
                Backend
              </a>
            </div>
          </div>
          <nav className="flex w-[10rem] flex-col max-lg:hidden z-30">
            <a className="text-lg text-gray-300 ease-out duration-300 hover:text-2xl hover:text-white">
              Mobile Apps
            </a>
            <a className="text-lg text-gray-300 ease-out duration-300 hover:text-2xl hover:text-white">
              Websites
            </a>
            <a className="text-lg text-gray-300 ease-out duration-300 hover:text-2xl hover:text-white">
              Backend
            </a>
          </nav>
        </div>

        <Link
          href="/portfolio"
          className="flex items-center justify-end absolute right-0 max-lg:-bottom-12 h-60 w-60 overflow-hidden"
        >
          <div className="flex justify-end items-center overflow-hidden w-1/2 h-full ease-in duration-100 hover:h-52 hover:w-28 z-10 rounded-bl-full rounded-tl-full">
            <Image
              className="absolute h-full -right-1/2 animate-spin-slow"
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
      </div>
    </div>
  )
}
