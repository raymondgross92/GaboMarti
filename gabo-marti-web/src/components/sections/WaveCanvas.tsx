'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function WaterPlane() {
    const mesh = useRef<THREE.Mesh>(null!);

    // Geometry parameters
    const planeGeo = useMemo(() => new THREE.PlaneGeometry(10, 10, 32, 32), []);

    useFrame((state) => {
        const { clock } = state;
        if (mesh.current) {
            // Simple wave simulation by manipulating vertices if needed, 
            // but shader material is better. For low-poly/simple effect:
            const time = clock.getElapsedTime();

            // Rotate slightly for dynamic feel
            mesh.current.rotation.z = Math.sin(time * 0.1) * 0.1;
        }
    });

    return (
        <mesh ref={mesh} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -2, -3]}>
            <planeGeometry args={[20, 10, 64, 64]} />
            <meshStandardMaterial
                color="#0B2545"
                wireframe={true}
                transparent
                opacity={0.3}
            />
        </mesh>
    );
}

function MovingLights() {
    const light = useRef<THREE.PointLight>(null!);
    useFrame(({ clock }) => {
        if (light.current) {
            light.current.position.x = Math.sin(clock.getElapsedTime()) * 5;
        }
    });
    return <pointLight ref={light} position={[0, 2, 5]} intensity={50} color="#134074" distance={20} />;
}

export default function WaveCanvas() {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
                <ambientLight intensity={1} />
                <MovingLights />
                <WaterPlane />
                <fog attach="fog" args={['#ffffff', 5, 20]} />
            </Canvas>
        </div>
    );
}
