import Link from 'next/link'
import Image from 'next/image'
import logo from './flex-pay-logo.png'

const links = [
  { href: "/flex-pay/flex-pay-direct", label: "Flex Pay Direct" },
  { href: "/flex-pay/flex-pay-banking", label: "Flex Pay Banking" },
  { href: "/flex-pay/flex-pay-synergy", label: "Flex Pay Synergy" },
  { href: "/flex-pay/FAQ", label: "FAQ" },
  { href: "/flex-pay/business-support", label: "Business Support" },
  { href: "/flex-pay/dev-documents", label: "Dev Documents" },
  { href: "/flex-pay/contact", label: "Contact Us" },
  { href: "/flex-pay/payment-directory", label: "Payment Directory" },
  { href: "/flex-pay/about", label: "About" },
  { href: "/flex-pay/login", label: "Login" },
  { href: "/flex-pay/signin", label: "Sign In" },
];

const FlexPayNavBar = () => {
  return (
    <div className='h-screen w-55 bg-gray-900 flex flex-col gap-4 p-6 text-lg'>

      {/* Logo */}
      <div className="bg-linear-to-r from-purple-200 via-purple-100 to-white 
                      p-2 h-20 flex items-center justify-center">
        <Link href="/flex-pay">
          <Image src={logo} alt="Flex Pay Logo" width={120} height={40} priority />
        </Link>
      </div>
      
      <nav className="flex flex-col gap-4 text-purple-400 text-lg p-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      </div>
  )
}

export default FlexPayNavBar