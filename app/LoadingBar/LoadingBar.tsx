'use client'
import React, { useEffect, useState } from 'react'
import { LinearProgress } from '@mui/material'

function CustomLoadingBar() {
  const [progress, setProgress] = useState(0)
  const [componentNumber, setComponentNumber] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight
      const newProgress = (scrollY / maxScroll) * 100

      setProgress(newProgress)

      const newComponentNumber = Math.floor(newProgress / 100)
      setComponentNumber(newComponentNumber)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)

  return (
    <div>
      <div className="text-xs p-norwester flex justify-between items-center w-44">
        <div>{formatNumber(componentNumber + 1)}</div>
        <LinearProgress
          variant="determinate"
          value={progress}
          style={{ width: '140px', height: '1px' }}
        />
        <div>{formatNumber(componentNumber + 2)}</div>
      </div>
    </div>
  )
}

export default CustomLoadingBar
