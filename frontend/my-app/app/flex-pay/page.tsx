import React from 'react'
import Link from 'next/link'
import NavBar from './FlexPayNavBar'

const FlexPay = () => {
  return (
    <div className=' flex columns-2'>
      <NavBar />
      <div>FlexPay</div>
    </div>
  )
}

export default FlexPay