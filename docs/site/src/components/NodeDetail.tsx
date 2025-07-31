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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div 
        className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
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
        <div className="p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {node.description}
          </p>
          
          {/* Additional metadata could be added here */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <a 
              href={node.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 rounded-md text-white ${getColorClass(node.type)} hover:opacity-90 transition-opacity`}
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