'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string // ISO date string
  onExpired?: () => void // Callback when timer expires
}

export default function CountdownTimer({ targetDate, onExpired }: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    // Mark as mounted to prevent hydration mismatch
    setMounted(true)

    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          expired: false
        }
      } else {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true
        }
      }
    }

    const updateTimer = () => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)
      
      if (newTimeLeft.expired) {
        setIsExpired((prev) => {
          if (!prev) {
            onExpired?.()
            return true
          }
          return prev
        })
      } else {
        setIsExpired(false)
      }
    }

    // Calculate immediately after mount
    updateTimer()
    
    // Update every second
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [targetDate, onExpired])

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-4 md:gap-6 text-white">
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellowish">--</span>
          <span className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Days</span>
        </div>
        <span className="text-3xl md:text-4xl text-gray-500">:</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellowish">--</span>
          <span className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Hours</span>
        </div>
        <span className="text-3xl md:text-4xl text-gray-500">:</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellowish">--</span>
          <span className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Minutes</span>
        </div>
        <span className="text-3xl md:text-4xl text-gray-500">:</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellowish">--</span>
          <span className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Seconds</span>
        </div>
      </div>
    )
  }

  if (isExpired) {
    return null
  }

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 text-white">
      <div className="flex flex-col items-center gap-1">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellowish">{timeLeft.days}</span>
        <span className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Days</span>
      </div>
      <span className="text-3xl md:text-4xl text-gray-500">:</span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellowish">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Hours</span>
      </div>
      <span className="text-3xl md:text-4xl text-gray-500">:</span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellowish">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Minutes</span>
      </div>
      <span className="text-3xl md:text-4xl text-gray-500">:</span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellowish">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Seconds</span>
      </div>
    </div>
  )
}

