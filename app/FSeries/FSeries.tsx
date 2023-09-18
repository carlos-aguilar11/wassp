import React from 'react'

const FSeries = () => {
  return (
    <main className="series-background">
      <div className="md:pt-96"></div>
      <div className="md:flex md:space-x-96 pt-6 md:pt-96 md:pb-6">
        <div className="ml-4 md:ml-9 space-y-4">
          <h1 className="text-base">1 ----------------- 3</h1>
          <h2 className="text-xs hidden md:inline">(FISHING SERIES)</h2>
          <h3 className="text-5xl md:text-8xl">F - SERIES</h3>
        </div>

        <div className="ml-4 md:ml-9 space-y-4 md:pl-52 md:mt-6">
          <p className="text-sm md:text-base">F-SERIES</p>
          <p className="text-sm md:text-base" style={{ maxWidth: '330px' }}>
            WASSP Multibeam finds fish and habitat over a wider area than
            single-beam systems.
          </p>
          <p className="text-xs md:text-sm">Explore Now</p>
        </div>
      </div>
    </main>
  )
}

export default FSeries
