'use client'
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react'
import photodata from './photodata'
import Image from 'next/image'

const News = () => {
  const scrollContainer1 = useRef<HTMLDivElement | null>(null)
  const scrollContainer2 = useRef<HTMLDivElement | null>(null)

  const duplicateItems = [...photodata, ...photodata]

  const handleScroll = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    if (scrollContainer1.current) {
      if (
        e.currentTarget.scrollLeft >=
        scrollContainer1.current.scrollWidth / 2
      ) {
        e.currentTarget.scrollLeft -= scrollContainer1.current.scrollWidth / 2
      }
    }
  }
  return (
    <main className="news-background">
      <div className="pt-8 md:pt-28 lg:pt-32">
        <div className="flex-col space-y-64 ">
          <div className="text-left lg:flex lg:space-y-3 xl:space-x-32 pl-4 md:pl-9 pb-7 md:pb-8">
            <div className="flex space-x-24 pr-32 mb-8 lg:mb-0">
              <p className="text-xs p-norwester">05</p>
              <p
                className="text-xs md:text-sm p-norwester whitespace-nowrap"
                style={{ marginRight: '1rem' }}
              >
                LATEST NEWS
              </p>
            </div>

            <div
              className="whitespace-nowrap relative"
              style={{ overflowX: 'hidden' }}
            >
              <div
                className="overflow-x-auto whitespace-nowrap"
                ref={scrollContainer2}
                onScroll={handleScroll}
              >
                NEWS WOULD LOAD HERE
              </div>
            </div>
          </div>

          <div className="relative" style={{ overflowX: 'hidden' }}>
            <div
              className="overflow-x-auto whitespace-nowrap py-6"
              ref={scrollContainer1}
              onScroll={handleScroll}
            >
              {duplicateItems.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center ml-4 min-w-0"
                  style={{ minWidth: '100px', minHeight: '30px' }}
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center space-x-6">
                      <div>
                        <Image
                          src={item.url}
                          alt={item.name}
                          width={100}
                          height={30}
                          layout="fixed"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div />
          </div>
        </div>
      </div>
      <div className="pb-36"></div>
    </main>
  )
}

export default News
