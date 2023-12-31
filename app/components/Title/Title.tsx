import React from 'react'
import Image from 'next/image'

const Title = () => {
  return (
    <main className="home-background">
      <div className="flex flex-col justify-between pl-4 md:pl-9 pt-36 md:pt-52 pb-8">
        <div className="mt-2 mb-12 tracking-widest">
          <h1 className="text-base md:text-2xl text-left mb-2">SEA IT ALL</h1>
          <h3
            className="text-5xl lg:text-6xl leading-none lg:leading-tight text-left"
            style={{
              maxWidth: '675px',
            }}
          >
            MULTIBEAM SONAR PRODUCT & SOLUTIONS.
          </h3>
        </div>

        <div className="pt-44 lg:pl-96 lg:flex lg:space-x-40 xl:space-x-96">
          <div style={{ width: '250px', fontSize: '16px' }}>
            <p className="text-left leading-tight lg:pl-14 pb-6">
              WASSP multi-beam enables sustainable fishing, exploration, and
              surveys with versatility and detail.
            </p>
          </div>

          <div className="lg:flex items-center space-x-2 max-w-max">
            <a
              href=""
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
          </div>
        </div>
      </div>
    </main>
  )
}

export default Title
