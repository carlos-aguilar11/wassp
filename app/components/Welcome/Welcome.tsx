import React from 'react'
import Image from 'next/image'

const Welcome = () => {
  return (
    <main className="welcome-background">
      <div className="flex flex-col pl-4 lg:pl-72 xl:pl-96 xl:ml-24 md:px-9 lg:pr-12 pt-36 md:pt-56 pb-28 md:pb-44">
        <h1
          className="text-3xl md:text-5xl lg:text-6xl text-left leading-tight mr-4 lg:mt-6 mb-6 lg:mb-10"
          style={{ maxWidth: '750px' }}
        >
          WELCOME TO THE WORLD OF WASSP MULTIBEAM
        </h1>
        <div className="text-left md:flex md:space-x-32 leading-tight">
          <div className="flex space-x-24">
            <p className="text-xs p-norwester">01</p>
            <p
              className="text-xs md:text-sm p-norwester"
              style={{ marginRight: '1rem' }}
            >
              ABOUT <span className="hidden md:inline"> WASSP</span>
            </p>
          </div>
          <div
            className="flex-col text-sm md:text-base mr-3 md:mt-0 mt-8"
            style={{ marginRight: '1rem' }}
          >
            <p style={{ maxWidth: '323px' }}>
              WASSP, a powerful multi-beam sounder with 120-degree coverage and
              models for deep exploration, offers unparalleled accuracy, detail,
              and versatility. Target fish with steerable sounders, generate
              real-time 3D charts, map fish in water, and make better decisions
              with the user-friendly advanced mode.
            </p>
            <div className="flex left-1 bottom-2 top-56 right-0 pt-12">
              <a
                href="#story"
                className="text-white bg-transparent py-4 px-10 rounded-full border border-white hover:bg-white hover:text-black flex items-center space-x-2"
              >
                <span className="text-sm">Our Story</span>
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
      </div>
    </main>
  )
}

export default Welcome
