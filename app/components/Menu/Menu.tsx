'use client'
import React, { useState } from 'react'
import data, { featureExplanations } from './data'
import ScrollableMenu from '../ScrollableMenu/ScrollableMenu'

const Menu = () => {
  const [buttonClicked, setButtonClicked] = useState<number>(1)

  const handleButtonClick = (buttonNumber: number) => {
    setButtonClicked(buttonNumber)
  }

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)

  return (
    <main className="menu-background">
      <div className="overlay-2">
        <div className="pt-16 md:pt-32 lg:pt-60"></div>
        <div className="text-left lg:flex lg:space-y-3 xl:space-x-32 pl-4 md:pl-9">
          <div className="flex space-x-24 mr-24 mb-8 lg:mb-0">
            <p className="text-xs p-norwester">03</p>
            <p
              className="text-xs md:text-sm p-norwester hidden sm:block"
              style={{ marginRight: '1rem' }}
            >
              FEATURES
            </p>

            <p
              className="text-xs md:text-sm p-norwester block sm:hidden"
              style={{ marginRight: '1rem' }}
            >
              OUR CAPABILITIES
            </p>
          </div>
          <div>
            <div className="flex flex-row md:flex-wrap items-center pb-4 sm:pb-8 overflow-x-auto whitespace-nowrap max-w-max">
              {data.map((item: featureExplanations) => (
                <button
                  key={item.id}
                  onClick={() => handleButtonClick(item.number)}
                  className={`text-white text-sm bg-transparent py-2 px-9 rounded-full border border-white hover:text-blue-950  hover:bg-white flex items-center space-x-2 mb-2 mr-4 ${
                    buttonClicked === item.number
                      ? ' text-blue-950 bg-white'
                      : ''
                  }`}
                >
                  <span
                    className={`p-norwester ${
                      buttonClicked === item.number
                        ? 'text-blue-950'
                        : 'text-white'
                    }`}
                  >
                    {formatNumber(item.number)}
                  </span>
                  <span
                    className={`p-neue ${
                      buttonClicked === item.number
                        ? 'text-blue-950'
                        : 'text-white'
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Display the explanation when a button is clicked */}
            {buttonClicked !== null && (
              <div className="flex flex-col space-y-6 pb-36 lg:pb-72 max-w-[700px] pr-4">
                <p className="text-base md:text-2xl pb-3">
                  {formatNumber(buttonClicked)}
                </p>
                <p className="text-3xl md:text-6xl">
                  {data.find((item) => item.number === buttonClicked)?.title}
                </p>
                <p className="text-sm md:text-base">
                  {
                    data.find((item) => item.number === buttonClicked)
                      ?.explanation
                  }
                </p>
              </div>
            )}
          </div>
        </div>
        <ScrollableMenu />
      </div>
    </main>
  )
}

export default Menu
