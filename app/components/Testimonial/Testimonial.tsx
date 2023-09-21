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
      currentVideo.playbackRate = 1
    }
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowTestimonials(true)
    }, 1000)

    return () => clearTimeout(delay)
  }, [])

  const trail = useTrail(1, {
    opacity: showTestimonials ? 1 : 0,
    transform: showTestimonials ? 'translateY(0)' : 'translateY(50px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 350, friction: 20 },
    delay: 200,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textdata.length)
    }, 5000)

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
        </video>

        {/* Color Overlay */}
        <div
          className="relative top-1 left-0 w-full h-full z-10"
          style={{
            backgroundImage: `linear-gradient(to top, #010d14 20%, transparent 80%),
            linear-gradient(225deg, rgba(5, 33, 51, 1) 0%, #010d14 0%, transparent 80%),
            linear-gradient(45deg, rgba(5, 33, 51, 1) 0%, rgba(0, 0, 0, 0.9) 30%, transparent 100%)`,
          }}
        >
          {/*Text*/}
          <div className="pt-32 md:pt-44 lg:pt-60">
            <div className="text-left lg:flex lg:space-y-3 xl:space-x-32 pl-4 md:pl-9 md:pb-40">
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
                  <animated.div key={index} className="pr-7 pl-4" style={style}>
                    <div style={{ height: '380px' }}>
                      <h1 className="p-norwester text-3xl md:text-6xl xl:leading-tight mb-8">
                        {
                          textdata[(currentIndex + index) % textdata.length]
                            .text
                        }
                      </h1>
                      <p className="text-white text-base">
                        {
                          textdata[(currentIndex + index) % textdata.length]
                            .name
                        }
                      </p>
                      <p className="text-white text-base">
                        {
                          textdata[(currentIndex + index) % textdata.length]
                            .role
                        }
                      </p>
                    </div>
                  </animated.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Testimonial
