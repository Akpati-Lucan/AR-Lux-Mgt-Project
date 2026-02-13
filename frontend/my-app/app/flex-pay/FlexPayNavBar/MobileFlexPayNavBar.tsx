import Link from "next/link";
import Image from "next/image";

const MobileFlexPayNavBar = () => {

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

  return (
      <div className={` w-34 bg-gray-900`}>
      <nav className="flex flex-col gap-3 text-purple-400 text-base p-3">
        {links.map((link) => (
          <Link
            key={link.href + link.label} // unique key
            href={link.href}
            className="hover:text-white" >
            {link.label}
          </Link>
        ))}
      </nav>
      </div>
  );
};

export default MobileFlexPayNavBar;
