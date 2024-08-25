'use client'

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from '../components/Cube'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


// Importing MeshStandardMaterial from THREE
import { MeshStandardMaterial } from 'three';

// Extending THREE with MeshStandardMaterial
extend({ MeshStandardMaterial });
const Master = () => {

    return (
        <Canvas  flat   camera={{ fov: 35 }}>
            <OrbitControls />
            <ambientLight />
            <Cube />
            <EffectComposer>
                <Bloom   
                    mipmapBlur
                    intensity={7.0} // The bloom intensity.
                    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
                    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]

                />
                {/* <ToneMapping adaptive/> */}


            </EffectComposer>



        </Canvas>
    );
};

export default Master;
