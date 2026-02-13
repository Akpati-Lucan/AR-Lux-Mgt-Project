import React from 'react'
import Link from 'next/link'

const FlexPayNavBar = () => {
  return (
    <div className='h-screen w-64 bg-gray-900 text-purple-400 flex flex-col gap-4 p-6 text-lg'>
            <Link href="/flex-pay/flex-pay-direct" className="hover:text-white">Flex Pay Direct</Link>
            <Link href="/flex-pay/flex-pay-banking" className="hover:text-white">Flex Pay Banking</Link>
            <Link href="/flex-pay/flex-pay-synergy" className="hover:text-white">Flex Pay Synergy</Link>
            <Link href="/flex-pay/FAQ" className="hover:text-white">FAQ</Link>
            <Link href="/flex-pay/business-support" className="hover:text-white">Business Support</Link>
            <Link href="/flex-pay/dev-documents" className="hover:text-white">Dev Documents</Link>
            <Link href="/flex-pay/contact" className="hover:text-white">Contact Us</Link>
            <Link href="/flex-pay/payment-directory" className="hover:text-white">Payment Directory</Link>
            <Link href="/flex-pay/about" className="hover:text-white">About</Link>
            <Link href="/flex-pay/login" className="hover:text-white">Login</Link>
            <Link href="/flex-pay/signin" className="hover:text-white">Sign In</Link>
        </div>
  )
}

export default FlexPayNavBar