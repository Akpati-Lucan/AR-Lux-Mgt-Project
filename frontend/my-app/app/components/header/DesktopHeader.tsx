import Link from 'next/link'
import Image from 'next/image'

const Header = () => {

  return (
    <>
      <div className='h-21 bg-gray-900 flex gap-4 items-center justify-between'>
        <div className="bg-linear-to-r from-purple-200 via-purple-100 to-white p-2  
                        flex items-center justify-center h-21 w-55 ">
          <Link href="/">
            <Image src={"/AR-lux-mgmt-logo.png"} alt="AR Logo" width={120} height={40} priority />
          </Link>
        </div>

        <div className='flex gap-4 text-purple-400 text-lg p-4'>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/expertise" className="hover:text-white">Expertise</Link>
            <Link href="/network" className="hover:text-white">Network</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/flex-pay" className="hover:text-white">Flex Pay</Link>
            <Link href="/signin" className="hover:text-white">Sign In</Link>
        </div>
      </div>
      <div className='h-1.5 bg-purple-600 flex'></div>
    </>
  )
}

export default Header