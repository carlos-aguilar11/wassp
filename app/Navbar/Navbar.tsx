import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <Image src="/Logo.svg" alt="Company Logo" width={200} height={200} />
      <ul>
        <li>Search</li>
        <li>Login</li>
        <li>
          EN{' '}
          <Image src="/ArrowDown.svg" alt="Arrow Down" width={20} height={20} />
        </li>
      </ul>
      <div>
        <Image src="/Menu.svg" alt="Menu" width={50} height={50} />
      </div>
    </nav>
  )
}

export default Navbar
