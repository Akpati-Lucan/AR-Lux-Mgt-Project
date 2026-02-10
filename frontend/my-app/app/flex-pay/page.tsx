import React from 'react'
import Link from 'next/link'

const FlexPay = () => {
  return (
    <div className=' flex columns-2'>
        <div className='flex gap-4 text-purple-600 text-2xl'>
            <Link href="/about">Solutions</Link>
            <Link href="/expertise">Technical</Link>
            <Link href="/network">Payment Directory</Link>
            <Link href="/contact">About</Link>
            <Link href="/flex-pay">Login</Link>
        </div>
        <div>FlexPay</div>
    </div>
  )
}

export default FlexPay