import Image from 'next/image'
import backgroundImage from '../../public/galaxy.png'
import codeImage from '../../public/code.png'
import rightImage from '../../public/rightLine.png'

export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-black items-center justify-center">
      <div className="flex w-full justify-around items-center z-20">
        <div>
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
        <div className="flex flex-col mr-8 ">
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
      <div className="flex items-center justify-center fixed w-full h-full">
        <Image
          src={codeImage}
          className="fixed h-4/5 z-10"
          style={{
            objectFit: 'contain',
          }}
          alt="Códigos binários"
        />
        <Image
          src={rightImage}
          className="fixed h-4/5 z-10"
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
          className="animate-spin-slow h-4/5 w-min drop-shadow-purple"
          alt="Fundo de galáxia"
        />
      </div>
    </div>
  )
}
