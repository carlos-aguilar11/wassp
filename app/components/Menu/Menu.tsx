'use client'
import React, { useEffect, useState } from 'react'
import data, { featureExplanations } from './data'

const Menu = () => {
  const [buttonClicked, setButtonClicked] = useState<number>(1)

  const handleButtonClick = (buttonNumber: number) => {
    setButtonClicked(buttonNumber)
  }
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)
  return (
    <main className="menu-background">
      <div className="overlay-2">
        <div className="pt-32 md:pt-60"></div>
        <div className="text-left lg:flex lg:space-y-3 xl:space-x-32 pl-4 md:pl-9">
          <div className="flex space-x-24 mr-24 mb-5 lg:mb-0">
            <p className="text-xs p-norwester">03</p>
            <p
              className="text-xs md:text-sm p-norwester"
              style={{ marginRight: '1rem' }}
            >
              FEATURES
            </p>
          </div>
          <div>
            <div className="flex flex-wrap items-center max-w-[900px] pb-6">
              {data.map((item: featureExplanations) => (
                <button
                  key={item.id}
                  onClick={() => handleButtonClick(item.number)}
                  className={`text-white text-sm bg-transparent py-2 px-9 rounded-full border border-white hover:bg-white hover:text-blue-900 flex items-center space-x-2 mb-3 mr-4 ${
                    buttonClicked === item.number
                      ? 'bg-white text-blue-900'
                      : ''
                  }`}
                >
                  <span className="p-norwester">
                    {formatNumber(item.number)}
                  </span>
                  <span className="p-neue">{item.title}</span>
                </button>
              ))}
            </div>

            {/* Display the explanation when a button is clicked */}
            {buttonClicked !== null && (
              <div className="flex flex-col space-y-6 pb-72 max-w-[700px]">
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
      </div>
    </main>
  )
}

export default Menu
