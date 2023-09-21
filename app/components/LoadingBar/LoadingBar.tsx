'use client'
import React, { useEffect, useState } from 'react'
import { LinearProgress } from '@mui/material'

function CustomLoadingBar({ id }: { id: number }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight
      const newProgress = (scrollY / maxScroll) * 100

      setProgress(newProgress)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)

  return (
    <div>
      <div className="text-xs space-x-3 p-norwester flex justify-between items-center w-44">
        <div>{formatNumber(id)}</div>
        <LinearProgress
          variant="determinate"
          value={progress}
          style={{ width: '140px', height: '1px' }}
        />
        <div>{formatNumber(id + 1)}</div>
      </div>
    </div>
  )
}

export default CustomLoadingBar
