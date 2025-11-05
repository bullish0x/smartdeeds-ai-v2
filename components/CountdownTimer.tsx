'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string // ISO date string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center gap-2 text-white">
      <span className="font-semibold">{timeLeft.days}d</span>
      <span className="font-semibold">{String(timeLeft.hours).padStart(2, '0')}h</span>
      <span className="font-semibold">{String(timeLeft.minutes).padStart(2, '0')}m</span>
      <span className="font-semibold">{String(timeLeft.seconds).padStart(2, '0')}s</span>
    </div>
  )
}

