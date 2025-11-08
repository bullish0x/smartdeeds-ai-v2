'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CALENDLY_LINK } from '@/lib/constants'
import CalendlyEmbed from './CalendlyEmbed'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { Calendar, MessageCircle, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export default function ConnectionSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="booking" className="py-20 md:py-24 bg-zinc-900 relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(238,254,147,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Book a <span className="text-yellowish">Private Chat</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Schedule a private briefing with the founders to understand how SmartDeeds membership works and explore exclusive opportunities.
          </motion.p>

          {/* Benefits Icons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12"
          >
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 rounded-lg bg-yellowish/10">
                <Calendar className="w-5 h-5 text-yellowish" />
              </div>
              <span className="text-sm md:text-base">Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 rounded-lg bg-yellowish/10">
                <MessageCircle className="w-5 h-5 text-yellowish" />
              </div>
              <span className="text-sm md:text-base">Private Consultation</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 rounded-lg bg-yellowish/10">
                <Users className="w-5 h-5 text-yellowish" />
              </div>
              <span className="text-sm md:text-base">Direct Access to Founders</span>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex justify-center"
        >
          <Button
            onClick={() => setIsOpen(true)}
            variant="yellowish"
            size="lg"
            className="text-lg md:text-xl px-10 py-6 shadow-glow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Your Private Chat
          </Button>
        </motion.div>
      </div>

      {/* Calendly Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-full h-[90vh] bg-zinc-900 border-white/10 p-0 flex flex-col">
          <VisuallyHidden>
            <DialogTitle>Book a Private Chat</DialogTitle>
          </VisuallyHidden>
          <div className="flex-1 overflow-hidden">
            <CalendlyEmbed url={CALENDLY_LINK} height="100%" />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

