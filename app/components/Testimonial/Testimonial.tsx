'use client'
import React, { useRef, useEffect, useState } from 'react'
import { useTrail, animated } from 'react-spring'
import textdata from './textdata'

const Testimonial = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showTestimonials, setShowTestimonials] = useState(false)

  const setPlayback = () => {
    const currentVideo = videoRef.current
    if (currentVideo) {
      currentVideo.playbackRate = 0.4
    }
  }

  useEffect(() => {
    // Add a delay before showing testimonials
    const delay = setTimeout(() => {
      setShowTestimonials(true)
    }, 1000) // Adjust the delay as needed

    return () => clearTimeout(delay)
  }, [])

  const trail = useTrail(1, {
    opacity: showTestimonials ? 1 : 0,
    transform: showTestimonials ? 'translateY(0)' : 'translateY(50px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 350, friction: 20 },
    delay: 200, // Adjust the delay between each testimonial
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textdata.length)
    }, 5000) // Adjust the interval for changing testimonials

    return () => clearInterval(interval)
  }, [])

  return (
    <main>
      <div className="relative">
        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          onCanPlay={() => setPlayback()}
        >
          <source src="/turtle.mp4" type="video/mp4" />
          {/* Add additional source elements for other video formats if needed */}
        </video>

        {/* Color Overlay */}
        <div
          className="relative top-0 left-0 w-full h-full z-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, #020d15 0%, transparent 100%),
            linear-gradient(225deg, rgba(1, 8, 14, 0.7) 0%, #020d15 10%, transparent 100%),
            linear-gradient(45deg, rgba(1, 8, 14, 0.7) 0%, rgba(0, 0, 0, 0.9) 50%, transparent 100%)`,
          }}
        >
          {/*Text*/}
          <div className="pt-16 md:pt-32 lg:pt-60"></div>
          <div className="text-left lg:flex lg:space-y-3 xl:space-x-32 pl-4 md:pl-9 pb-32">
            <div className="flex space-x-24 mr-24 mb-8 lg:mb-0">
              <p className="text-xs p-norwester">04</p>
              <p
                className="text-xs md:text-sm p-norwester"
                style={{ marginRight: '1rem' }}
              >
                TESTIMONIALS
              </p>
            </div>
            <div className="flex items-center max-w-max">
              {trail.map((style, index) => (
                <animated.div key={index} className="mx-4" style={style}>
                  <h1 className="p-norwester leading-snug text-3xl sm:text-6xl mb-8">
                    {textdata[(currentIndex + index) % textdata.length].text}
                  </h1>
                  <p className="text-white text-base">
                    {textdata[(currentIndex + index) % textdata.length].name}
                  </p>
                  <p className="text-white text-base">
                    {textdata[(currentIndex + index) % textdata.length].role}
                  </p>
                </animated.div>
              ))}
            </div>
          </div>
          <div className="pt-48"></div>
        </div>
      </div>
    </main>
  )
}

export default Testimonial
