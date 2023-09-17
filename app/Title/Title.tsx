import React from 'react'
import Image from 'next/image'

const Title = () => {
  return (
    <div className="home-background flex flex-col justify-between px-8 pt-52 pb-8">
      <div className="mt-2 mb-4">
        <h1 className="text-2xl text-left mb-1">SEA IT ALL</h1>
        <h3
          className="text-6xl text-left mb-2.5 leading-tight"
          style={{ width: '600px' }}
        >
          MULTIBEAM SONAR PRODUCTS & SOLUTIONS.
        </h3>
      </div>
      <div className="text-center pt-44 md:text-left md:mt-7 mb-4 md:ml-96 relative">
        <div className="ml-14">
          <div className="leading-tight">
            <div style={{ width: '220px', fontSize: '16px' }}>
              <p>
                WASSP multi-beam enables sustainable fishing, exploration, and
                surveys with versatility and detail.
              </p>
            </div>
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
