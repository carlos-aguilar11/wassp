'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Footer = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    const backButton = document.querySelector(
      '.back-to-top'
    ) as HTMLElement | null
    if (backButton) {
      backButton.addEventListener('click', scrollToTop)
    }

    return () => {
      if (backButton) {
        backButton.removeEventListener('click', scrollToTop)
      }
    }
  }, [])

  return (
    <main className="footer-background">
      <div className="pt-6 md:pt-30 lg:pt-36 pl-4 md:pl-16 sm:flex-row sm:justify-between flex flex-col">
        <div className="space-y-12">
          <h1 className="p-neue text-base sm:text-2xl overflow-auto">
            THE NEW STANDARD IN MULTIBEAM SOUNDER TECHNOLOGY
          </h1>

          <div className="sm:pb-12 sm:pt-6 max-w-max">
            <a
              href="#contact"
              className="text-white text-sm bg-transparent py-4 px-10 rounded-full border border-white hover:bg-white hover:text-black flex items-center space-x-2"
            >
              <span className="text-sm">Contact Us</span>
              <Image
                src="/ArrowRight.svg"
                alt="Arrow Right"
                width={25}
                height={25}
              />
            </a>
          </div>

          <div>
            <a className="text-sm sm:text-base underline" href="Subscribe">
              Suscribe to our Newsletter
            </a>
          </div>
        </div>

        <div className="text-sm sm:text-base flex space-x-9 md:space-x-36 pr-4 md:pr-12 sm:pr-16 lg:pr-20 pt-16 sm:pt-0">
          <div>
            <ul>
              <li className="underline">
                <a href="#"> Home</a>
              </li>
              <li>Products</li>
              <li>About</li>
              <li>ENL</li>
              <li>Multibeam</li>
              <li>Technology</li>
              <li>News</li>
              <li>Resources</li>
            </ul>
            <ul className="pt-6">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
          <div className="space-y-32">
            <ul>
              <li>Offices</li>
              <li>Auckland-NZ</li>
              <li>Essex-UK</li>
            </ul>
            <p className="pt-9 sm:pt-16 bottom right">©2023 WASSP</p>
          </div>
        </div>
      </div>

      <div className="pt-16 max-w-fit">
        <Image
          src={'/WasspMultibeam.svg'}
          alt={'Wassp'}
          height={132}
          width={1245}
          className="w-full h-auto py-4 sm:py-10 px-2 sm:px-6"
          style={{ width: '100vw' }}
        />
      </div>
    </main>
  )
}

export default Footer
