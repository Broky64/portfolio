'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function PortfolioHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              <span className="block">Hi, I&apos;m</span>
              <span className="block text-indigo-600">Paul Brocvielle</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              I&apos;m a passionate web developer creating beautiful and functional digital experiences.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button className="group" size="lg">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-indigo-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative z-10 bg-gradient-to-br from-indigo-100 to-white p-4 rounded-full shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Jane Doe"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
}