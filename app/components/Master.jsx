'use client'


import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Master = () => {
    return (
        <Canvas>
            <OrbitControls/>
            <mesh>
                <boxGeometry />
                <meshBasicMaterial />
            </mesh>
        </Canvas>
    )
}

export default Master
