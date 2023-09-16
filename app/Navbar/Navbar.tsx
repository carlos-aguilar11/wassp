import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-transparent py-14 px-1 md:px-12 md:mx-0">
      <div className="flex justify-between items-center">
        <Image
          src="/Logo.svg"
          priority={true}
          alt="Company Logo"
          width={201}
          height={36}
        />
        <div className="flex items-center space-x-6">
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              <li>SEARCH</li>
              <li>LOGIN</li>
              <li className="flex items-center">
                EN
                <Image
                  src="/ArrowDown.svg"
                  alt="Arrow Down"
                  width={20}
                  height={20}
                />
              </li>
            </ul>
          </div>
          <div>
            <Image src="/Menu.svg" alt="Menu" width={25} height={21} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
