import React from 'react'

const Welcome = () => {
  return (
    <main className="welcome-background">
      <div className="overlay">
        <div className="flex flex-col justify-between px-8 pt-72 pb-52 ml-96">
          <div className="my-1 ml-6">
            <h1 className="lg:text-6xl text-left leading-tight ml-10 pl-18 mb-2.5">
              WELCOME TO THE WORLD OF <br /> WASSP MULTIBEAM
            </h1>
            <div className="text-center pl-10 pt-8 pb-18 md:text-left md:mt-1 mb-4 md:ml-18 relative">
              <div className="text-base leading-tight flex space-x-24">
                <p className="text-sm p-norwester">01</p>
                <p className="text-sm p-norwester">ABOUT WASSP</p>
                <p>
                  WASSP, a powerful multi-beam sounder with
                  <br />
                  120-degree coverage and models for deep
                  <br />
                  exploration, offers unparalleled accuracy, detail,
                  <br />
                  and versatility. Target fish with steerable
                  <br />
                  sounders, generate real-time 3D charts, map fish
                  <br />
                  in water, and make better decisions with the
                  <br />
                  user-friendly advanced mode.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Welcome
