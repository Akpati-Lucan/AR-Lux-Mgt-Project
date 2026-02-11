import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='h-20 bg-gray-900 flex gap-4 items-center justify-between'>
        <div className="bg-purple-100 p-2">
          <Link href="/">
            <Image src={"/AR-lux-mgmt-logo.png"} alt="AR Logo" width={120} height={40} priority />
          </Link>
        </div>

        <div className='flex gap-4 text-purple-400 text-lg p-4'>
            <Link href="/about">About</Link>
            <Link href="/expertise">Expertise</Link>
            <Link href="/network">Network</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/flex-pay">Flex Pay</Link>
            <Link href="/signin">Sign In</Link>
        </div>
    </div>
    <div className='h-1.5 bg-purple-600 flex'></div>
    </>
  )
}

export default Header