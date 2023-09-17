'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { animated, useSpring } from 'react-spring'

const Navbar = () => {
  const [springProps, set] = useSpring(() => ({
    opacity: 0,
    config: { duration: 200 },
  }))

  useEffect(() => {
    const handleScroll = () => {
      set({ opacity: window.scrollY > 100 ? 1 : 0 })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [set])

  return (
    <animated.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <nav className="bg-transparent py-4 md:py-14 px-1 md:px-8 md:mx-0">
        <div className="flex justify-between items-center">
          <Image
            src="/Logo.svg"
            priority={true}
            alt="Company Logo"
            width={201}
            height={36}
          />
          <div className="flex items-center space-x-6">
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

            <div>
              <Image src="/Menu.svg" alt="Menu" width={25} height={21} />
            </div>
          </div>
        </div>
      </nav>
    </animated.nav>
  )
}

export default Navbar
