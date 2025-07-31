'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// Import the ProjectNode type from GardenCanvas
import type { ProjectNode } from './GardenCanvas'

interface NodeDetailProps {
  node: ProjectNode | null
  onClose: () => void
}

export default function NodeDetail({ node, onClose }: NodeDetailProps) {
  const [mounted, setMounted] = useState(false)

  // Mount the component after the DOM is available
  useEffect(() => {
    setMounted(true)
    
    // Add escape key handler
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  // If no node is selected or component is not mounted, don't render anything
  if (!node || !mounted) return null

  // Get the color class based on node type
  const getColorClass = (type: string) => {
    switch (type) {
      case 'seed':
        return 'bg-garden-secondary'
      case 'root':
        return 'bg-garden-tertiary'
      case 'petal':
        return 'bg-garden-accent'
      case 'withered':
        return 'bg-garden-muted'
      case 'doc':
        return 'bg-garden-primary'
      default:
        return 'bg-garden-primary'
    }
  }

  // Get the type label
  const getTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1)
  }

  // Create portal to render at the document body level
  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with color based on node type */}
        <div className={`${getColorClass(node.type)} px-6 py-4 flex justify-between items-center`}>
          <h3 className="text-xl font-bold text-white">{node.name}</h3>
          <span className="px-3 py-1 text-xs font-medium bg-white bg-opacity-20 rounded-full text-white">
            {getTypeLabel(node.type)}
          </span>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            {node.description}
          </p>
          
          {/* Project metadata */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                Type
              </div>
              <div className={`text-sm font-medium ${getColorClass(node.type).replace('bg-', 'text-')}`}>
                {getTypeLabel(node.type)}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                Status
              </div>
              <div className="text-sm font-medium text-green-600 dark:text-green-400">
                Active
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href={node.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-medium ${getColorClass(node.type)} hover:opacity-90 transition-all duration-300 btn-hover shadow-lg`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
              Explore Project
            </a>
            <button
              onClick={onClose}
              className="sm:hidden px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
          aria-label="Close"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  )
}