import React from 'react'
import Link from 'next/link'

const footer = () => {
  return (
    <div className='p-2 h-20 bg-black flex items-center justify-between'>
        <p>© 2026 A R LUXURY MANAGEMENT INC. ALL RIGHTS RESERVED</p>

        <div className='flex gap-4 text-purple-600 text-2xl'>
            <Link className="link" href="/About">PRIVACY POLICY</Link>
            <Link className="link" href="/Expertise">TERMS AND CONDITIONS</Link>
            <Link className="link" href="/Network">CAREERS</Link>
        </div>
    </div>
  )
}

export default footer