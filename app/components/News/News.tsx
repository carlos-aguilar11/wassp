'use client'
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react'
import photodata from './photodata'
import Image from 'next/image'
import newsdata from './newsdata'

import NewsModal from './NewsModal'

import LoadingBar from '../LoadingBar/LoadingBar'

const News = () => {
  // Modal Control
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNews, setSelectedNews] = useState<{
    title: string
    text: string
    image: string
  } | null>(null)

  function openModal(news: (typeof newsdata)[number]) {
    setSelectedNews(news)
    setIsModalOpen(true)
  }

  function closeModal() {
    setSelectedNews(null)
    setIsModalOpen(false)
  }

  // Scrolling Control

  const scrollContainer1 = useRef<HTMLDivElement | null>(null)
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
      <div className="pl-4 md:pl-9 pb-3">
        <LoadingBar id={4} />
      </div>
      <div className="pt-8 md:pt-28 lg:pt-32">
        <div className="flex-col space-y-16 md:space-y-32 ">
          <div className="text-left lg:flex lg:space-y-3 xl:space-x-32 pl-4 md:pl-9 pb-7 md:pb-4">
            <div className="flex space-x-24 pr-32 mb-8 lg:mb-0">
              <p className="text-xs p-norwester">05</p>
              <p
                className="text-xs md:text-sm p-norwester whitespace-nowrap"
                style={{ marginRight: '1rem' }}
              >
                LATEST NEWS
              </p>
            </div>

            <div className="relative" style={{ overflowX: 'hidden' }}>
              <div
                className="w-fullpy-4 px-3 flex overflow-x-auto"
                style={{
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {newsdata.map((news, index) => (
                  <div
                    key={index}
                    className="w-[330px] h-[307px] sm:w-[409px] sm:h-[424px] flex-shrink-0 mx-2 p-4 sm:p-6 border border-gray-200 rounded-lg flex flex-col shadow-md "
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="h-48 relative">
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={738}
                        height={454}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                    <h3 className="p-neue text-base lg:text-2xl mt-2 mb-2">
                      {news.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between">
                      <p className="text-xs text-gray-600">View</p>
                      <Image
                        src="/ArrowDown.svg"
                        alt="View Details"
                        width={29}
                        height={29}
                        className="w-4 h-4 cursor-pointer"
                        onClick={() => openModal(news)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="p-norwester text-xs md:hidden pl-4">GALLERY </p>
          </div>
          <div
            className="relative pb-32"
            style={{
              overflowX: 'hidden',
            }}
          >
            <div
              className="overflow-x-auto space-x-7 whitespace-nowrap"
              ref={scrollContainer1}
              onScroll={handleScroll}
            >
              {duplicateItems.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex min-w-0"
                  style={{ maxHeight: '121px', maxWidth: '121px' }}
                >
                  <div className="flex">
                    <div>
                      <Image
                        src={item.url}
                        alt={item.name}
                        width={242}
                        height={242}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div />
          </div>
        </div>
      </div>
      <NewsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        news={selectedNews}
      />
    </main>
  )
}

export default News
