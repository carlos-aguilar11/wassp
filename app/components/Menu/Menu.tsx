import React from 'react'

const Menu = () => {
  return (
    <main className="menu-background">
      <div className="overlay-3">
        <div className="pt-32 md:pt-60"></div>
        <div className="text-left md:flex md:space-x-32 leading-tight lg:ml-10 lg:pl-18">
          <div className="flex space-x-24">
            <p className="text-xs p-norwester">03</p>
            <p
              className="text-xs md:text-sm p-norwester"
              style={{ marginRight: '1rem' }}
            >
              FEATURES
            </p>
          </div>
        </div>
        <div className="pb-96"></div>
      </div>
    </main>
  )
}

export default Menu
