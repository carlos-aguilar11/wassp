'use client'
import React, { useState } from 'react'
import data, { featureExplanations } from '../Menu/data'

const ScrollableFeatureMenu = () => {
  const [buttonClicked, setButtonClicked] = useState<number | null>(null)

  const handleButtonClick = (buttonNumber: number) => {
    setButtonClicked(buttonNumber)
  }

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)

  return (
    <div className="scrollable-menu">
      <div className="menu-buttons">
        {data.map((item: featureExplanations) => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(item.number)}
            className={`menu-button ${
              buttonClicked === item.number ? 'active-button' : ''
            }`}
          >
            <span className="p-norwester">{formatNumber(item.number)}</span>
            <span className="p-neue">{item.title}</span>
          </button>
        ))}
      </div>

      <div className="explanation">
        {buttonClicked !== null && (
          <div className="explanation-content">
            <p className="number">{formatNumber(buttonClicked)}</p>
            <p className="title">
              {data.find((item) => item.number === buttonClicked)?.title}
            </p>
            <p className="explanation">
              {data.find((item) => item.number === buttonClicked)?.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ScrollableFeatureMenu
