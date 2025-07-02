"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  backgroundLabel?: string
}

export function SectionWrapper({ children, id, className = "", backgroundLabel }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-20 px-6 relative ${className}`}
    >
      {backgroundLabel && (
        <div className="absolute top-8 right-8 text-6xl md:text-8xl font-bold text-foreground/5 select-none pointer-events-none">
          {backgroundLabel}
        </div>
      )}
      {children}
    </motion.section>
  )
}
