import React, { useRef, SyntheticEvent } from 'react'
import menudata from './menudata'
import Image from 'next/image'

const ScrollableMenu = () => {
  const scrollContainer = useRef<HTMLDivElement | null>(null)

  const duplicateItems = [...menudata, ...menudata] // Duplicate the menu items

  const handleScroll = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    if (scrollContainer.current) {
      // Check if the user scrolls past the duplicated items and reset the scroll position
      if (
        e.currentTarget.scrollLeft >=
        scrollContainer.current.scrollWidth / 2
      ) {
        e.currentTarget.scrollLeft -= scrollContainer.current.scrollWidth / 2
      }
    }
  }

  return (
    <div className="border-t-2 border-t-white border-b-2 border-b-white py-8 px-1">
      <div
        className="overflow-x-auto whitespace-nowrap"
        ref={scrollContainer}
        onScroll={handleScroll}
      >
        {duplicateItems.map((item) => (
          <div key={item.id} className="inline-flex items-center ml-4 min-w-0">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center space-x-6">
                <div className="rounded-full border border-white p-2">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={61}
                    height={13}
                  />
                </div>
                <div className="p-norwester text-white text-2xl md:text-6xl px-4 py-2 whitespace-nowrap">
                  {item.name}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollableMenu
