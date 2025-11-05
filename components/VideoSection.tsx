'use client'

import Image from 'next/image'

interface VideoItem {
  id: string
  title: string
  description?: string
  url?: string // YouTube/Vimeo URL
  embedId?: string // YouTube video ID
  thumbnail?: string
}

const videos: VideoItem[] = [
  {
    id: '1',
    title: 'Project Malibu Showcase',
    description: 'An exclusive look at the iconic Malibu property',
    embedId: '', // Add YouTube video ID here
    url: '', // Or add full YouTube/Vimeo URL here
  },
  // Add more videos as needed
]

export default function VideoSection() {
  return (
    <section id="videos" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-yellowish">Videos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore SmartDeeds and Project Malibu through our exclusive video content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-800 hover:border-yellowish transition-all hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div className="relative aspect-video bg-gray-800">
                {video.embedId ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : video.url ? (
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : video.thumbnail ? (
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 mx-auto text-gray-600 mb-4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-500">Video Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                {video.description && (
                  <p className="text-gray-400">{video.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {videos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Videos will be added here</p>
          </div>
        )}
      </div>
    </section>
  )
}

