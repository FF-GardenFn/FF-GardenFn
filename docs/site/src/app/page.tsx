'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the GardenCanvas component to avoid SSR issues with Three.js
const GardenCanvas = dynamic(
  () => import('@/components/GardenCanvas'),
  { ssr: false }
)

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* 3D Garden Canvas */}
      {isLoaded && <GardenCanvas />}
      
      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-garden-primary to-garden-accent">
            FF-GardenFn
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Where Ideas Germinate & Bloom
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="#clusters" 
              className="px-6 py-3 rounded-full bg-garden-primary text-white hover:bg-opacity-90 transition-all"
            >
              Explore Garden
            </a>
            <a 
              href="https://github.com/FF-GardenFn/FF-GardenFn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-garden-primary text-garden-primary hover:bg-garden-primary hover:bg-opacity-10 transition-all"
            >
              View on GitHub
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>
      
      {/* Cluster Map Section */}
      <section id="clusters" className="w-full py-20 px-4 bg-opacity-90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Garden Clusters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Seeds Cluster */}
            <div className="p-6 rounded-lg bg-garden-secondary bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">Seeds</h3>
              <p className="text-sm opacity-80">Sketchpad-level code, napkin logic, quantum seeds.</p>
            </div>
            
            {/* Roots Cluster */}
            <div className="p-6 rounded-lg bg-garden-tertiary bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">Roots</h3>
              <p className="text-sm opacity-80">Foundational ideas with broad public utility.</p>
            </div>
            
            {/* Petals Cluster */}
            <div className="p-6 rounded-lg bg-garden-accent bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">Petals</h3>
              <p className="text-sm opacity-80">Beautifully executed micro-tools or polished documents.</p>
            </div>
            
            {/* Withered Cluster */}
            <div className="p-6 rounded-lg bg-garden-muted bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">Withered</h3>
              <p className="text-sm opacity-80">Deprecated ideas or self-roasts (pruning matters).</p>
            </div>
            
            {/* Docs Cluster */}
            <div className="p-6 rounded-lg bg-garden-primary bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">Docs</h3>
              <p className="text-sm opacity-80">Documentation, "thinking aloud" essays, and process notes.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Research Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Featured Research</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-garden-primary">
            PrincipiaDynamica & Constitutional Dynamics
          </h3>
          
          <div className="prose prose-lg max-w-none">
            <p>
              My current primary focus is <strong>PrincipiaDynamica</strong>, a research initiative developing 
              <strong> State Transition Calculus (STC)</strong> — a novel mathematical framework for modeling 
              dynamic, evolving systems. Its core application is AI alignment monitoring, but the theoretical 
              reach spans complex systems, behavioral drift, and recursive optimization.
            </p>
            
            <p>
              A major outcome of this work is the Python package <code>constitutional-dynamics</code>:
            </p>
            
            <ul>
              <li>Implements STC to detect alignment drift in LLM behavior over time.</li>
              <li>Provides a real-time scoring model for robustness, trajectory shifts, and latent behavioral instability.</li>
              <li>Complements approaches like Constitutional AI by offering <strong>continuous behavioral oversight</strong>—a radar to QK/OV's microscope.</li>
            </ul>
            
            <div className="mt-8 text-center">
              <a 
                href="https://github.com/FF-GardenFn/principiadynamica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-garden-primary text-white hover:bg-opacity-90 transition-all"
              >
                Explore the full framework
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy & Essays Section */}
      <section className="w-full py-20 px-4 bg-opacity-90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Philosophy & Essays</h2>
          
          <div className="space-y-12">
            <blockquote className="p-8 italic border-l-4 border-garden-primary bg-garden-primary bg-opacity-5 rounded-r-lg">
              <p className="text-xl">
                "Ideas sprout in one project, bloom in another, and compost into future insight."
              </p>
            </blockquote>
            
            <div className="prose prose-lg max-w-none">
              <p>
                In this garden:
              </p>
              <ul>
                <li>Concepts like <strong>semantic similarity</strong> and <strong>cosine distance</strong> (from <code>codeviz</code>) are contextualized and expanded in <code>/docs/semantic_patterns.md</code>.</li>
                <li>The <strong>philosophy of information</strong> and the need for personalization (as seen in <code>personalized-news-bot</code>) is explored in <code>/docs/information_entropy.md</code>.</li>
                <li>Future essays will also link <strong>constitutional AI</strong>, <strong>dynamic ethics</strong>, and <strong>self-healing architectures</strong> to the STC lineage.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full py-12 px-4 bg-garden-primary bg-opacity-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">FF-GardenFn</h2>
              <p className="text-sm opacity-80">A callable, ever-evolving "function"</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <a 
                href="https://github.com/FF-GardenFn/FF-GardenFn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-garden-primary hover:underline"
              >
                GitHub
              </a>
              <a 
                href="#" 
                className="text-garden-primary hover:underline"
              >
                Plant your own seed—Create a PR
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-garden-primary border-opacity-20 text-center text-sm opacity-70">
            <p>
              This project is licensed under the MIT + No Ego License. Use it. Improve it. Don't DM me if you break the universe.
            </p>
            <p className="mt-2">
              Created and maintained by <a href="https://github.com/FF-GardenFn" target="_blank" rel="noopener noreferrer" className="underline">Faycal Farhat</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}