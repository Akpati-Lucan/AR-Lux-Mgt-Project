import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='p-2 h-20 bg-white flex items-center justify-between'>
        <Link className="link" href="/">AR Logo</Link>

        <div className='flex gap-4 text-purple-600 text-2xl'>
            <Link className="link" href="/About">About</Link>
            <Link className="link" href="/Expertise">Expertise</Link>
            <Link className="link" href="/Network">Network</Link>
            <Link className="link" href="/Contact">Contact</Link>
            <Link className="link" href="/Signin">Sign In</Link>
        </div>
    </div>
    <div className='h-1 bg-purple-600 flex'></div>
    </>
  )
}

export default Header