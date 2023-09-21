import { blue } from '@mui/material/colors'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <main>
      <div className="pt-72 flex-row space-x-20">
        <div className="flex space-y-36">
          <p>TEXT WOULD BE HERE!</p>
          <p className="lg:flex space-x-2 max-w-max">
            <a
              href="#contact"
              className="text-white text-sm bg-transparent py-4 px-10 rounded-full border border-white hover:bg-white hover:text-black flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <Image
                src="/ArrowRight.svg"
                alt="Arrow Right"
                width={25}
                height={25}
              />
            </a>
          </p>
          <p></p>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>ENL</li>
            <li>Multibeam</li>
            <li>Technology</li>
            <li>News</li>
            <li>Resources</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="pt-96">
        <Image
          src={'/WasspMultibeam.svg'}
          alt={'Wassp'}
          height={1245}
          width={132}
        />
      </div>
    </main>
  )
}

export default Footer
