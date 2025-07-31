'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NodeDetail from './NodeDetail'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Define project node types based on garden metaphor
export type NodeType = 'seed' | 'root' | 'petal' | 'withered' | 'doc'

// Project node interface
export interface ProjectNode {
  id: string
  name: string
  type: NodeType
  description: string
  url: string
  position: [number, number, number]
  color: string
  size: number
}

// Sample project data
const projectNodes: ProjectNode[] = [
  {
    id: 'principiadynamica',
    name: 'PrincipiaDynamica',
    type: 'root',
    description: 'A research initiative developing State Transition Calculus (STC)',
    url: 'https://github.com/FF-GardenFn/principiadynamica',
    position: [2, 1, 3],
    color: '#4CAF50', // Green for roots
    size: 0.5,
  },
  {
    id: 'constitutional-dynamics',
    name: 'Constitutional Dynamics',
    type: 'petal',
    description: 'Python package for detecting alignment drift in LLM behavior',
    url: 'https://github.com/FF-GardenFn/principiadynamica/constitutional_dynamics',
    position: [3, 1.5, 2],
    color: '#2196F3', // Blue for petals
    size: 0.4,
  },
  {
    id: 'codeviz',
    name: 'CodeViz',
    type: 'petal',
    description: 'Visualization tools for code analysis',
    url: 'https://github.com/FF-GardenFn/codeviz',
    position: [-2, 0, 2],
    color: '#2196F3', // Blue for petals
    size: 0.35,
  },
  {
    id: 'news-bot',
    name: 'Personalized News Bot',
    type: 'petal',
    description: 'AI-driven personalized news aggregation',
    url: 'https://github.com/FF-GardenFn/personalized-news-bot',
    position: [-3, -1, 1],
    color: '#2196F3', // Blue for petals
    size: 0.3,
  },
  {
    id: 'semantics',
    name: 'Semantics',
    type: 'seed',
    description: 'Semantic analysis experiments',
    url: '#',
    position: [0, 2, -2],
    color: '#FF8C00', // Orange for seeds
    size: 0.25,
  },
  {
    id: 'morphology',
    name: 'Morphology',
    type: 'seed',
    description: 'Morphological analysis tools',
    url: '#',
    position: [1, 2, -3],
    color: '#FF8C00', // Orange for seeds
    size: 0.25,
  },
  {
    id: 'transmuter',
    name: 'Transmuter Project',
    type: 'root',
    description: 'Code transformation tools',
    url: 'https://github.com/FF-GardenFn/transmuter-project',
    position: [-1, -2, -2],
    color: '#4CAF50', // Green for roots
    size: 0.4,
  },
  {
    id: 'semantic-patterns',
    name: 'Semantic Patterns',
    type: 'doc',
    description: 'Documentation on semantic patterns',
    url: '#',
    position: [2, -2, -1],
    color: '#8A2BE2', // Purple for docs
    size: 0.3,
  },
  {
    id: 'information-entropy',
    name: 'Information Entropy',
    type: 'doc',
    description: 'Essay on information entropy',
    url: '#',
    position: [-2, -1, -3],
    color: '#8A2BE2', // Purple for docs
    size: 0.3,
  },
  {
    id: 'deprecated-experiment',
    name: 'Deprecated Experiment',
    type: 'withered',
    description: 'An archived experiment',
    url: '#',
    position: [0, -3, 0],
    color: '#9E9E9E', // Gray for withered
    size: 0.2,
  },
]

// Node component representing a project
function Node({ node, onClick }: { node: ProjectNode; onClick: (node: ProjectNode) => void }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  // Animation on hover
  useEffect(() => {
    if (!meshRef.current) return
    
    gsap.to(meshRef.current.scale, {
      x: hovered ? 1.3 : 1,
      y: hovered ? 1.3 : 1,
      z: hovered ? 1.3 : 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }, [hovered])
  
  // Subtle floating animation
  useFrame((state) => {
    if (!meshRef.current) return
    
    const t = state.clock.getElapsedTime()
    meshRef.current.position.y += Math.sin(t + meshRef.current.position.x) * 0.001
  })
  
  return (
    <mesh
      ref={meshRef}
      position={new THREE.Vector3(...node.position)}
      onClick={() => onClick(node)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[node.size, 32, 32]} />
      <meshStandardMaterial 
        color={node.color} 
        emissive={node.color} 
        emissiveIntensity={hovered ? 0.6 : 0.25} 
        roughness={hovered ? 0.2 : 0.4} 
        metalness={hovered ? 0.9 : 0.8}
        transparent
        opacity={hovered ? 1 : 0.9}
      />
    </mesh>
  )
}

// Particle field component
function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 500
  
  // Create particles
  useEffect(() => {
    if (!particlesRef.current) return
    
    const positions = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = (Math.random() - 0.5) * 20
      positions[i3 + 2] = (Math.random() - 0.5) * 20
    }
    
    particlesRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )
  }, [])
  
  // Animate particles
  useFrame((state) => {
    if (!particlesRef.current) return
    
    const t = state.clock.getElapsedTime() * 0.1
    particlesRef.current.rotation.y = t * 0.05
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial 
        size={0.05} 
        color="#ffffff" 
        transparent 
        opacity={0.3} 
        sizeAttenuation 
      />
    </points>
  )
}

// Connection lines between related nodes
function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null)
  
  // Create connections between related nodes
  useEffect(() => {
    if (!linesRef.current) return
    
    const positions: number[] = []
    const colors: number[] = []
    
    // Connect nodes of the same type
    const nodesByType: Record<NodeType, ProjectNode[]> = {
      seed: [],
      root: [],
      petal: [],
      withered: [],
      doc: [],
    }
    
    projectNodes.forEach(node => {
      nodesByType[node.type].push(node)
    })
    
    // Create connections within each type
    Object.values(nodesByType).forEach(nodes => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const node1 = nodes[i]
          const node2 = nodes[j]
          
          positions.push(...node1.position, ...node2.position)
          
          const color = new THREE.Color(node1.color)
          colors.push(color.r, color.g, color.b, color.r, color.g, color.b)
        }
      }
    })
    
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    
    linesRef.current.geometry = geometry
  }, [])
  
  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry />
      <lineBasicMaterial vertexColors transparent opacity={0.2} />
    </lineSegments>
  )
}

// Scene component
function Scene({ onNodeSelect }: { onNodeSelect: (node: ProjectNode) => void }) {
  const { camera } = useThree()
  
  // Handle node click
  const handleNodeClick = (node: ProjectNode) => {
    onNodeSelect(node)
    
    // Move camera to focus on the selected node
    gsap.to(camera.position, {
      x: node.position[0] + 2,
      y: node.position[1] + 1,
      z: node.position[2] + 2,
      duration: 1.5,
      ease: 'power2.inOut',
    })
  }
  
  // Set up scroll animations
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Animate camera on scroll
    ScrollTrigger.create({
      trigger: '#clusters',
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        gsap.to(camera.position, {
          x: 5,
          y: 5,
          z: 5,
          duration: 2,
          ease: 'power2.inOut',
        })
      },
      onLeaveBack: () => {
        gsap.to(camera.position, {
          x: 0,
          y: 0,
          z: 10,
          duration: 2,
          ease: 'power2.inOut',
        })
      },
    })
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [camera])
  
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8A2BE2" />
      
      <ParticleField />
      <ConnectionLines />
      
      {projectNodes.map(node => (
        <Node key={node.id} node={node} onClick={handleNodeClick} />
      ))}
      
      {/* Node info panel - would be implemented in the UI layer */}
    </>
  )
}

// Main GardenCanvas component
export default function GardenCanvas() {
  const [selectedNode, setSelectedNode] = useState<ProjectNode | null>(null)
  
  // Handle node selection
  const handleNodeSelect = (node: ProjectNode) => {
    setSelectedNode(node)
  }
  
  // Handle closing the node detail panel
  const handleCloseDetail = () => {
    setSelectedNode(null)
  }
  
  return (
    <div className="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          enableRotate={true}
          zoomSpeed={0.6}
          rotateSpeed={0.4}
          panSpeed={0.8}
          minDistance={4}
          maxDistance={25}
          autoRotate={true}
          autoRotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.05}
        />
        
        <Scene onNodeSelect={handleNodeSelect} />
        
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.2} 
            luminanceSmoothing={0.9} 
            intensity={0.8} 
          />
        </EffectComposer>
      </Canvas>
      
      {/* Node detail overlay */}
      <NodeDetail node={selectedNode} onClose={handleCloseDetail} />
    </div>
  )
}