'use client'
import React, { useState } from 'react'
import data, { featureExplanations } from './data' // Import the data and interface

const Menu = () => {
  const [buttonClicked, setButtonClicked] = useState<number | null>(null)

  const handleButtonClick = (buttonNumber: number) => {
    setButtonClicked(buttonNumber)
  }
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)
  return (
    <main className="menu-background">
      <div className="overlay-2">
        <div className="pt-32 md:pt-60"></div>
        <div className="text-left md:flex md:space-x-32 pl-4 md:pl-9">
          <div className="flex space-x-24 mr-24">
            <p className="text-xs p-norwester">03</p>
            <p
              className="text-xs md:text-sm p-norwester"
              style={{ marginRight: '1rem' }}
            >
              FEATURES
            </p>
          </div>

          <div className="flex flex-wrap items-center max-w-[900px] pb-6">
            {data.map((item: featureExplanations) => (
              <button
                key={item.id}
                onClick={() => handleButtonClick(item.number)}
                className={`text-white text-sm bg-transparent py-2 px-9 rounded-full border border-white hover:bg-white hover:text-black flex items-center space-x-2 mb-3 mr-4 ${
                  buttonClicked === item.number ? 'bg-primary text-white' : ''
                }`}
              >
                <span className="p-norwester">{formatNumber(item.number)}</span>
                <span className="p-neue">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Display the explanation when a button is clicked */}
        {buttonClicked !== null && (
          <div className="flex flex-col space-y-6 pb-72 md:pl-32 md:ml-80 max-w-[830px]">
            <p className="text-base md:text-2xl pb-3">
              {formatNumber(buttonClicked)}
            </p>
            <p className="text-3xl md:text-6xl">
              {data.find((item) => item.number === buttonClicked)?.title}
            </p>
            <p className="text-sm md:text-base">
              {data.find((item) => item.number === buttonClicked)?.explanation}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default Menu
