import React from 'react'
import LoadingBar from '../LoadingBar/LoadingBar'

const FSeries = () => {
  return (
    <main className="series-background">
      <div className="md:pt-96"></div>
      <div className="md:flex md:justify-between pt-6 md:pt-96 md:pb-6">
        <div className="ml-4 md:ml-9 space-y-4">
          <div className="mb-6">
            <LoadingBar />
          </div>
          <h1 className="text-xs hidden md:inline">(FISHING SERIES)</h1>
          <h2
            className="text-5xl lg:text-8xl lg:tracking-wide"
            style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
          >
            F - SERIES
          </h2>
        </div>

        <div className="ml-4 md:ml-9 space-y-4 lg:pl-36 md:mt-6">
          <p className="text-sm md:text-base md:mt-6">F-SERIES</p>
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
