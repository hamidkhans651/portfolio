'use client'

import Image from 'next/image';
import React, { useRef } from 'react'
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
    let tex = useTexture("cube.png");
    let cyl = useRef(null);
    
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    })


    return (
        <group rotation={[0, 1.4, 0.5]}>
            <mesh ref={cyl} rotation={[0, 1.4, 0.5]}>
                <cylinderGeometry args={[1, 1, 1, 70, 70, true]} /> {/* Adding args for clarity */}
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} /> {/* Using MeshStandardMaterial */}
            </mesh>
        </group>

    )
}

export default Cube
