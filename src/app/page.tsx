import Image from 'next/image'
import backgroundImage from '../../public/galaxy.png'
import codeImage from '../../public/code.png'
import rightImage from '../../public/rightLine.png'
import menuIcon from '../../public/menu-icon.svg'

export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-black items-center justify-center">
      <div className="flex max-lg:flex-col lg:justify-center lg:items-center h-full w-[58rem]">
        <div className="flex justify-between max-lg:p-8">
          <div className="z-50">
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
          <div className="flex absolute w-[10rem] flex-col right-10 text-right lg:hidden">
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
        <div className="flex w-[10rem] flex-col max-lg:hidden">
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
    </div>
  )
}
