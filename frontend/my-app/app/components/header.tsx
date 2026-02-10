import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
    <>
    <Link href="/">AR Logo</Link>
    <Link href="/About">About</Link>
    <Link href="/Expertise">Expertise</Link>
    <Link href="/Network">Network</Link>
    <Link href="/Contact">Contact</Link>
    <Link href="/Signin">Signin</Link>
    </>
  )
}

export default header