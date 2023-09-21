import Image from 'next/image'
import React from 'react'

interface NewsModalProps {
  isOpen: boolean
  onClose: () => void
  news: {
    title: string
    text: string
    image: string
  } | null
}

function NewsModal({ isOpen, onClose, news }: NewsModalProps) {
  if (!isOpen || !news) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto backdrop-blur">
      <div className="relative max-w-lg mx-auto p-4 md:p-8 bg-white rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-blue-950 p-neue lg:text-5xl text-xl md:text-2xl mb-4">
          {news.title}
        </h2>
        <Image
          className="w-full mb-4"
          src={news.image}
          alt={news.title}
          width={738}
          height={454}
        />
        <p className="text-sm md:text-base text-gray-600">{news.text}</p>
      </div>
    </div>
  )
}

export default NewsModal
