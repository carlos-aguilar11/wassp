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
      <div className="text-center pt-40 pb-0 md:text-left mt-6 md:mt-6 mb-0 md:mb-8 ml-0 md:ml-96">
        <p className="text-base ml-14 pt-8">
          WASSP multi-beam enables
          <br />
          sustainable fishing,
          <br />
          exploration, and surveys with
          <br />
          versatility and detail
        </p>
        <div className="flex justify-start md:justify-end items-center">
          <a
            href="#contact"
            className="text-white text-lg bg-transparent py-4 px-12 rounded-full border border-white hover:bg-white hover:text-black flex items-center space-x-4"
          >
            <span className="pr-4">Contact Us </span>
            <Image
              src="/ArrowRight.svg"
              alt="Arrow Right"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Title
