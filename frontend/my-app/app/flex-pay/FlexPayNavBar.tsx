import React from 'react'
import Link from 'next/link'

const FlexPayNavBar = () => {
  return (
    <div className='h-screen w-64 bg-gray-900 text-purple-400 flex flex-col gap-4 p-6 text-lg'>
            <Link href="/flex-pay">Solutions</Link>
            <Link href="/flex-pay-direct">Flex Pay Direct</Link>
            <Link href="/flex-pay-banking">Flex Pay Banking</Link>
            <Link href="/flex-pay-synergy">Flex Pay Synergy</Link>
            <Link href="/flex-pay">Technical</Link>
            <Link href="/FAQ">FAQ</Link>
            <Link href="/business-support">Business Support</Link>
            <Link href="/dev-documents">Dev Documents</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/payment-directory">Payment Directory</Link>
            <Link href="/flex-pay">About Flex Pay</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
            <Link href="/signin">Sign In</Link>
        </div>
  )
}

export default FlexPayNavBar