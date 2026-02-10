import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='p-2 bg-purple-400 flex items-center justify-between'>
        <Link className="link" href="/">AR Logo</Link>

        <div className='flex gap-4'>
            <Link className="link" href="/About">About</Link>
            <Link className="link" href="/Expertise">Expertise</Link>
            <Link className="link" href="/Network">Network</Link>
            <Link className="link" href="/Contact">Contact</Link>
            <Link className="link" href="/Signin">Signin</Link>
        </div>
    </div>

    </>
  )
}

export default Header