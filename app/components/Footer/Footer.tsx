import { blue } from '@mui/material/colors'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <main className="footer-background">
      <div className="pt-72 pl-4 md:pl-16 flex space-x-52">
        <div className="flex-row space-y-12">
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
          <p>Suscribe to our Newsletter</p>
        </div>
        <div className="pl-36">
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
        <div className="space-y-32">
          <ul>
            <li>Offices</li>
            <li>Auckland-NZ</li>
            <li>Essex-UK</li>
          </ul>
          <p className="bottom right">©2023 WASSP</p>
        </div>
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
