"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface TimelineItem {
  title: string
  subtitle: string
  period: string
  description: string | string[]
  icon?: React.ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItemComponent key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

function TimelineItemComponent({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-start"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className="absolute left-4 md:left-8 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 transform -translate-x-1/2 z-10"
      />

      <div className="ml-12 md:ml-16 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          className="bg-card border border-border rounded-lg p-6 hover:bg-card/80 transition-all duration-300"
        >
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground font-medium">{item.subtitle}</p>
              <p className="text-cyan-400 text-sm font-medium">{item.period}</p>
            </div>

            <div className="text-muted-foreground">
              {Array.isArray(item.description) ? (
                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-cyan-400 mt-2 text-xs">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{item.description}</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
