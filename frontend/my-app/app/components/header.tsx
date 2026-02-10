import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='p-2 h-20 bg-white flex items-center justify-between'>
        <Link href="/">AR Logo</Link>

        <div className='flex gap-4 text-purple-600 text-2xl'>
            <Link href="/about">About</Link>
            <Link href="/expertise">Expertise</Link>
            <Link href="/network">Network</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/flex-pay">Flex Pay</Link>
            <Link href="/signin">Sign In</Link>
        </div>
    </div>
    <div className='h-1 bg-purple-600 flex'></div>
    </>
  )
}

export default Header