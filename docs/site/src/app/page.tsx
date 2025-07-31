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
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true)
    
    // Handle scroll progress
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setScrollProgress(scrollPercent)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-garden-primary via-garden-accent to-garden-secondary transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* 3D Garden Canvas */}
      {isLoaded && <GardenCanvas />}
      
      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="decorative-blob w-96 h-96 -top-48 -left-48" style={{animationDelay: '0s'}}></div>
        <div className="decorative-blob w-80 h-80 -bottom-40 -right-40" style={{animationDelay: '10s'}}></div>
        <div className="decorative-blob w-64 h-64 top-1/4 -right-32" style={{animationDelay: '5s'}}></div>
        
        <div className="text-center z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-garden-primary drop-shadow-lg">
            FF-GardenFn
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-2">
            Where Ideas Germinate & Bloom
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            A living research garden of interconnected projects, from quantum seeds to flourishing innovations
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <a 
              href="#clusters" 
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-garden-primary to-garden-accent text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 btn-hover flex items-center gap-2"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
              Explore Garden
            </a>
            <a 
              href="https://github.com/FF-GardenFn/FF-GardenFn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full border-2 border-garden-primary text-garden-primary hover:bg-garden-primary hover:text-white transition-all duration-300 btn-hover font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
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
      <section id="clusters" className="w-full py-20 px-4 garden-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Garden Clusters</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Navigate through different stages of the research lifecycle, from initial sparks to mature implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Seeds Cluster */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-garden-secondary/10 to-garden-secondary/20 hover:from-garden-secondary/20 hover:to-garden-secondary/30 border border-garden-secondary/20 hover:border-garden-secondary/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <svg className="w-8 h-8 text-garden-secondary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-xs font-bold text-garden-secondary bg-garden-secondary/10 px-2 py-1 rounded-full">SEEDS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-garden-secondary">Seeds</h3>
              <p className="text-sm opacity-80">Sketchpad-level code, napkin logic, quantum seeds of innovation.</p>
            </div>
            
            {/* Roots Cluster */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-garden-tertiary/10 to-garden-tertiary/20 hover:from-garden-tertiary/20 hover:to-garden-tertiary/30 border border-garden-tertiary/20 hover:border-garden-tertiary/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <svg className="w-8 h-8 text-garden-tertiary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                <span className="text-xs font-bold text-garden-tertiary bg-garden-tertiary/10 px-2 py-1 rounded-full">ROOTS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-garden-tertiary">Roots</h3>
              <p className="text-sm opacity-80">Foundational ideas with broad public utility and deep impact.</p>
            </div>
            
            {/* Petals Cluster */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-garden-accent/10 to-garden-accent/20 hover:from-garden-accent/20 hover:to-garden-accent/30 border border-garden-accent/20 hover:border-garden-accent/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <svg className="w-8 h-8 text-garden-accent group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-xs font-bold text-garden-accent bg-garden-accent/10 px-2 py-1 rounded-full">PETALS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-garden-accent">Petals</h3>
              <p className="text-sm opacity-80">Beautifully executed micro-tools and polished implementations.</p>
            </div>
            
            {/* Withered Cluster */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-garden-muted/10 to-garden-muted/20 hover:from-garden-muted/20 hover:to-garden-muted/30 border border-garden-muted/20 hover:border-garden-muted/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <svg className="w-8 h-8 text-garden-muted group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
                </svg>
                <span className="text-xs font-bold text-garden-muted bg-garden-muted/10 px-2 py-1 rounded-full">WITHERED</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-garden-muted">Withered</h3>
              <p className="text-sm opacity-80">Archived experiments and lessons learned—pruning enables growth.</p>
            </div>
            
            {/* Docs Cluster */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-garden-primary/10 to-garden-primary/20 hover:from-garden-primary/20 hover:to-garden-primary/30 border border-garden-primary/20 hover:border-garden-primary/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <svg className="w-8 h-8 text-garden-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
                <span className="text-xs font-bold text-garden-primary bg-garden-primary/10 px-2 py-1 rounded-full">DOCS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-garden-primary">Docs</h3>
              <p className="text-sm opacity-80">Documentation, essays, and reflective process notes.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Research Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-garden-primary/5 to-garden-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Research</h2>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-garden-primary to-garden-accent p-1 rounded-full">
              <div className="bg-white dark:bg-gray-900 rounded-full px-6 py-2">
                <h3 className="text-xl md:text-2xl font-semibold text-garden-primary">
                  PrincipiaDynamica & Constitutional Dynamics
                </h3>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-garden-primary/20">
                <p className="text-lg leading-relaxed mb-6">
                  My current primary focus is <strong className="text-garden-primary">PrincipiaDynamica</strong>, a research initiative developing 
                  <strong className="text-garden-accent"> State Transition Calculus (STC)</strong> — a novel mathematical framework for modeling 
                  dynamic, evolving systems.
                </p>
                
                <div className="bg-garden-primary/10 p-6 rounded-xl mb-6">
                  <h4 className="font-semibold text-garden-primary mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Core Applications
                  </h4>
                  <p className="text-sm">
                    AI alignment monitoring, complex systems analysis, behavioral drift detection, and recursive optimization.
                  </p>
                </div>
                
                <p className="mb-4">
                  A major outcome is the Python package <code className="bg-garden-accent/20 text-garden-accent px-2 py-1 rounded">constitutional-dynamics</code>:
                </p>
              </div>
            </div>
            
            {/* Features Column */}
            <div className="space-y-4">
              <div className="group p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-garden-primary/20 hover:border-garden-primary/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-garden-primary/20 group-hover:bg-garden-primary/30 rounded-lg transition-colors">
                    <svg className="w-6 h-6 text-garden-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Real-time Behavioral Analysis</h4>
                    <p className="text-sm opacity-80">Implements STC to detect alignment drift in LLM behavior over time with continuous monitoring.</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-garden-accent/20 hover:border-garden-accent/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-garden-accent/20 group-hover:bg-garden-accent/30 rounded-lg transition-colors">
                    <svg className="w-6 h-6 text-garden-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Advanced Scoring Models</h4>
                    <p className="text-sm opacity-80">Provides real-time scoring for robustness, trajectory shifts, and latent behavioral instability.</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-garden-tertiary/20 hover:border-garden-tertiary/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-garden-tertiary/20 group-hover:bg-garden-tertiary/30 rounded-lg transition-colors">
                    <svg className="w-6 h-6 text-garden-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Constitutional AI Integration</h4>
                    <p className="text-sm opacity-80">Complements Constitutional AI by offering <strong>continuous behavioral oversight</strong>—a radar to QK/OV's microscope.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/FF-GardenFn/principiadynamica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-garden-primary to-garden-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 btn-hover"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Explore the Full Framework
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Philosophy & Essays Section */}
      <section className="w-full py-20 px-4 garden-section relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="garden-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-garden-primary"/>
                <path d="M5 10 Q10 5 15 10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#garden-pattern)"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Philosophy & Essays</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Reflections on the interconnected nature of ideas and knowledge evolution
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="relative">
              {/* Decorative quote marks */}
              <div className="absolute -top-4 -left-4 text-6xl text-garden-primary opacity-20 font-serif">"</div>
              <div className="absolute -bottom-8 -right-4 text-6xl text-garden-primary opacity-20 font-serif">"</div>
              
              <blockquote className="relative p-12 bg-gradient-to-br from-garden-primary/10 via-white/50 to-garden-accent/10 dark:from-garden-primary/10 dark:via-gray-900/50 dark:to-garden-accent/10 backdrop-blur-sm rounded-2xl border border-garden-primary/20 shadow-lg">
                <p className="text-2xl font-medium leading-relaxed text-center text-gray-700 dark:text-gray-200 italic">
                  Ideas sprout in one project, bloom in another, and compost into future insight.
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="h-1 w-20 bg-gradient-to-r from-garden-primary to-garden-accent rounded-full"></div>
                </div>
              </blockquote>
            </div>
            
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-xl font-semibold mb-6 text-garden-primary flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L8.5 8.5L0 12l8.5 3.5L12 24l3.5-8.5L24 12l-8.5-3.5L12 0z"/>
                </svg>
                Knowledge Cross-Pollination
              </h3>
              
              <div className="space-y-6">
                <div className="group p-6 bg-gradient-to-r from-garden-secondary/5 to-garden-secondary/10 rounded-xl border-l-4 border-garden-secondary hover:border-garden-secondary/60 transition-all duration-300">
                  <h4 className="font-semibold text-garden-secondary mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Semantic Architecture
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Concepts like <strong>semantic similarity</strong> and <strong>cosine distance</strong> from 
                    <code className="bg-garden-secondary/20 text-garden-secondary px-2 py-1 rounded mx-1">codeviz</code> 
                    are contextualized and expanded in our semantic patterns documentation.
                  </p>
                </div>
                
                <div className="group p-6 bg-gradient-to-r from-garden-tertiary/5 to-garden-tertiary/10 rounded-xl border-l-4 border-garden-tertiary hover:border-garden-tertiary/60 transition-all duration-300">
                  <h4 className="font-semibold text-garden-tertiary mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                    Information Philosophy
                  </h4>
                  <p className="text-sm leading-relaxed">
                    The <strong>philosophy of information</strong> and personalization principles from 
                    <code className="bg-garden-tertiary/20 text-garden-tertiary px-2 py-1 rounded mx-1">personalized-news-bot</code> 
                    inform our broader exploration of information entropy and curation.
                  </p>
                </div>
                
                <div className="group p-6 bg-gradient-to-r from-garden-accent/5 to-garden-accent/10 rounded-xl border-l-4 border-garden-accent hover:border-garden-accent/60 transition-all duration-300">
                  <h4 className="font-semibold text-garden-accent mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    Future Connections
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Upcoming essays will link <strong>constitutional AI</strong>, <strong>dynamic ethics</strong>, 
                    and <strong>self-healing architectures</strong> to the State Transition Calculus lineage, 
                    creating a unified theoretical framework.
                  </p>
                </div>
              </div>
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