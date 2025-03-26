'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Download, ChevronLeft, ChevronRight } from 'lucide-react'

interface MainEvent {
  id: string
  title: string
  image: string
  date: string
  document?: string
}

function NewsLetter() {
  const [events, setEvents] = useState<MainEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/main-events')
        if (!response.ok) {
          throw new Error('Failed to fetch events')
        }
        const data = await response.json()
        setEvents(data.events || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Calculate pagination
  const totalPages = Math.ceil(events.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = events.slice(startIndex, startIndex + itemsPerPage)

  const handleDownload = (documentUrl: string, title: string) => {
    if (!documentUrl) return
    
    const anchor = document.createElement('a')
    anchor.href = documentUrl
    anchor.download = `${title.replace(/\s+/g, '-')}.${documentUrl.split('.').pop()?.toLowerCase() || 'file'}`
    anchor.target = '_blank'
    anchor.rel = 'noopener noreferrer'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='my-12 px-8'>
      <div className="flex gap-4 items-center mb-8">
        <Link target='_blank' href={'https://www.herald.co.zw/'}>
          <Image 
            src={'/logo.webp'} 
            alt='Herald Logo' 
            width={200} 
            height={200} 
            className='object-contain'
          />
        </Link>
        <Link
          target='_blank'
          href={'https://x.com/nickmangwana'}
          className='p-2 rounded border hover:bg-gray-100 transition-colors'
        >
          <p className="text-lg font-bold">Nick Mangagwa</p>
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-6">Latest Events</h2>
      
      {loading ? (
        <div className="flex justify-center py-8">
          <p>Loading events...</p>
        </div>
      ) : error ? (
        <div className="text-red-500 py-4">{error}</div>
      ) : events.length === 0 ? (
        <p>No events available</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedEvents.map((event) => (
              <div 
                key={event.id}
                onClick={() => event.document && handleDownload(event.document, event.title)}
                className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                  !event.document ? 'cursor-not-allowed opacity-70' : ''
                }`}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image || '/placeholder-event.jpg'}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  {event.document ? (
                    <div className="flex items-center text-green-600">
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download Document</span>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">No document available</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded border ${
                    currentPage === page ? 'bg-green-500 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default NewsLetter