'use client'
import React from 'react'
import Image from 'next/image'
import { animated, useSpring } from 'react-spring'

const Navbar = () => {
  const { opacity } = useSpring({
    opacity: typeof window !== 'undefined' && window.scrollY > 100 ? 1 : 0,
    config: { duration: 200 },
  })

  return (
    <animated.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: opacity.to((o) => 'rgba(255, 255, 255, ${o)'),
      }}
    >
      <div className="flex text-sm justify-between pt-9 md:pt-14 mx-5 md:mx-10">
        <div className="logo">
          <Image
            src="/Logo.svg"
            priority={true}
            alt="Company Logo"
            width={201}
            height={36}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4 md:space-x-8">
            <li>SEARCH</li>
            <li>LOGIN</li>
            <span className="hidden sm:inline">
              <li className="flex items-center">
                EN
                <Image
                  className="ml-2"
                  src="/ArrowDown.svg"
                  alt="Arrow Down"
                  width={20}
                  height={20}
                />
              </li>
            </span>
            <li>
              <Image src="/Menu.svg" alt="Menu" width={25} height={21} />
            </li>
          </ul>
        </div>
      </div>
    </animated.nav>
  )
}

export default Navbar
