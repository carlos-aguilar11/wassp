import React from 'react'
import Image from 'next/image'

const Title = () => {
  return (
    <div className="flex flex-col justify-between px-8 py-52 mt-2">
      <div className="mb-4">
        <h1 className="text-lg md:text-xl lg:text-2xl text-left mb-2.5">
          SEA IT ALL
        </h1>
        <h3 className="text-4xl md:text-5xl lg:text-6xl text-left leading-tight mb-2.5">
          MULTIBEAM SONAR <br className="mb-2" /> PRODUCTS & SOLUTIONS.
        </h3>
      </div>
      <div className="text-center pt-52 pb-0 md:text-left mt-6 md:mt-6 mb-0 md:mb-8 ml-0 md:ml-96 relative">
        <div className="text-base ml-14">
          <div className="text-lg leading-tight">
            <p>
              WASSP multi-beam enables
              <br />
              sustainable fishing,
              <br />
              exploration, and surveys with
              <br />
              versatility and detail
            </p>
          </div>
        </div>
        <div className="absolute bottom-2 right-10">
          <a
            href="#contact"
            className="text-white bg-transparent py-3 px-8 rounded-full border border-white hover:bg-white hover:text-black flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <Image
              src="/ArrowRight.svg"
              alt="Arrow Right"
              width={25}
              height={25}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Title
