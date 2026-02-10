import React from 'react'
import Link from 'next/link'

const footer = () => {
  return (
    <div className='p-2 h-20 bg-black flex items-center justify-between'>
        <p>© 2026 A R LUXURY MANAGEMENT INC. ALL RIGHTS RESERVED</p>

        <div className='flex gap-4 text-purple-600 text-2xl'>
            <Link className="link" href="/privacy-policy">PRIVACY POLICY</Link>
            <Link className="link" href="/terms-and-conditions">TERMS AND CONDITIONS</Link>
            <Link className="link" href="/careers">CAREERS</Link>
        </div>
    </div>
  )
}

export default footer