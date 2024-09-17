/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `ParticlesModel`
 * client | Semantyk
 *
 * This file contains the logic for the Particles model.
 *
 * Created: Sep 12, 2024
 * Modified: Sep 17, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useEffect } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
//* Local Imports
import {
    addEventListeners,
    props,
    removeEventListeners,
    setupObjects,
    updateObjects,
    updateOnMouseMove,
} from "@semantyk/frontend/ui/models/molecule/Particles/logic";
import { useData } from "@semantyk/frontend/ui/models/molecule/Particles/hooks";

//* Main
export default function ParticlesModel() {
    // Props
    const { animations: { chaos: { radius } } } = props;
    // Hooks
    // - useData
    const { data, loaders, objects, refs } = useData();
    // Logic
    // Listeners
    const handleMouseMove = (event) => {
        updateOnMouseMove({ events: { mousemove: event }, objects, refs });
    };
    // Hooks
    // - useEffect
    useEffect(() => {
        // Setup Objects
        setupObjects({ data, loaders, objects, refs });
        // Listeners
        // - add
        addEventListeners({ handleMouseMove });
        // - remove
        return () => removeEventListeners({ handleMouseMove });
    }, [handleMouseMove, loaders, refs, objects, data]);
    // - useFrame
    useFrame(({ clock }) => {
        updateObjects({ data, objects: { clock, ...objects }, refs });
    });
    // - useHelper
    // useHelper(refs.camera, CameraHelper);
    // Return
    return (
        <>
            {/* Camera */}
            <PerspectiveCamera
                ref={refs.camera}
                fov={data.unit * 2}
                position={[0, 0, data.unit / 2]}
                {...props.camera}
            />
            {/* Orbit Controls */}
            <OrbitControls/>
            {/* Box */}
            <mesh ref={refs.box} visible={false}>
                <boxGeometry args={[data.unit, data.unit, data.unit]}/>
                <meshBasicMaterial
                    color={-data.color.r}
                    opacity={0.1}
                    transparent
                    wireframe
                />
            </mesh>
            {/* Circle */}
            <mesh
                ref={refs.circle}
                position={[0, 0, -data.unit / 2]}
                visible={false}
            >
                <circleGeometry args={[data.unit * radius, 32]}/>
                <meshBasicMaterial
                    color="red"
                    opacity={1}
                    transparent
                    wireframe
                />
            </mesh>
            {/* Particles */}
            <points ref={refs.particles}>
                <bufferGeometry/>
                <pointsMaterial
                    sizeAttenuation={true}
                    vertexColors
                    {...props.particle}
                />
            </points>
            {/* Plane */}
            <mesh
                ref={refs.plane}
                position={[0, 0, -data.unit / 2]}
                visible={false}
            >
                <planeGeometry args={[data.unit, data.unit]}/>
                <meshBasicMaterial
                    opacity={1}
                    transparent
                    wireframe
                />
            </mesh>
            {/* RayLine */}
            <line ref={refs.rayLine} visible={false}>
                <bufferGeometry/>
                <lineBasicMaterial color="red"/>
            </line>
        </>
    );
}