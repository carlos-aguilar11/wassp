import React from 'react'
import Image from 'next/image'

const Welcome = () => {
  return (
    <main className="welcome-background">
      <div className="overlay-2">
        <div className="flex flex-col ml-1 md:ml-72 lg:ml-96 px-0 md:px-1 lg:px-8 pt-56 pb-52">
          <div className="my-0 lg:my-1 ml-3 lg:ml-6">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl text-left leading-tight lg:ml-10 lg:pl-18 mb-8"
              style={{ maxWidth: '700px' }}
            >
              WELCOME TO THE WORLD OF WASSP MULTIBEAM
            </h1>
            <div className="text-left leading-tight lg:ml-10 lg:pl-18 ">
              <div className="text-base leading-tight flex space-x-24">
                <p className="text-sm p-norwester">01</p>
                <p
                  className="text-sm p-norwester"
                  style={{ marginRight: '1rem' }}
                >
                  ABOUT WASSP
                </p>
                <div style={{ width: '365px' }}>
                  <p>
                    WASSP, a powerful multi-beam sounder with 120-degree
                    coverage and models for deep exploration, offers
                    unparalleled accuracy, detail, and versatility. Target fish
                    with steerable sounders, generate real-time 3D charts, map
                    fish in water, and make better decisions with the
                    user-friendly advanced mode.
                  </p>
                </div>
              </div>
              <div className="flex left-1 bottom-2 top-52 right-0">
                <a
                  href="#contact"
                  className="text-white bg-transparent py-3 px-8 rounded-full border border-white hover:bg-white hover:text-black flex items-center space-x-2"
                >
                  <span>Our Story</span>
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
      </div>
    </main>
  )
}

export default Welcome
