/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `ParticlesModel`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for the Particles model.
 *
 * @created: Sep 12, 2024
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useEffect } from "react";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
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
import { useArgs } from "@semantyk/frontend/ui/models/molecule/Particles/hooks";
import { CameraHelper } from "three";

//* Main
export default function ParticlesModel() {
    // Props
    const {
        general: { showHelpers },
        animations: { chaos: { radius } }
    } = props;
    // Hooks
    // - useArgs
    const args = useArgs();
    const { data, objects, refs } = args;
    // Logic
    let moveMouseTimeout;
    // Listeners
    const handleMouseMove = (event) => {
        const { mouse } = refs;
        clearTimeout(moveMouseTimeout);
        mouse.current.isMoving = true;
        moveMouseTimeout = setTimeout(() => mouse.current.isMoving = false, 1);
        let clientX, clientY;
        if (event.type === "mousemove") {
            clientX = event.clientX;
            clientY = event.clientY;
        } else if (event.type === "touchmove") {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        }
        updateOnMouseMove({
            events: { mousemove: { clientX, clientY } },
            data,
            objects,
            refs
        });
    };
    // Hooks
    // - useEffect
    useEffect(() => {
        // Setup Objects
        setupObjects({ data, objects, refs });
        // Listeners
        // - add
        addEventListeners({ handleMouseMove });
        // - remove
        return () => removeEventListeners({ handleMouseMove });
    }, [handleMouseMove, data, objects, refs]);
    // - useFrame
    useFrame(({ clock }) => {
        objects.clock.current = clock;
        updateObjects(args);
    });
    // - useHelpers
    useHelper(showHelpers && refs.camera, CameraHelper);
    // Return
    return (
        <>
            {/* Camera */}
            <PerspectiveCamera
                ref={refs.camera}
                fov={-data.unit * 2}
                position={[0, 0, data.unit / 2]}
                {...props.camera}
            />
            {/* Orbit Controls */}
            {showHelpers && <OrbitControls/>}
            {/* Box */}
            <mesh ref={refs.box} visible={showHelpers}>
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
                visible={showHelpers}
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
                    vertexColors
                    {...props.particle}
                />
            </points>
            {/* Plane */}
            <mesh
                ref={refs.plane}
                position={[0, 0, -data.unit / 2]}
                visible={showHelpers}
            >
                <planeGeometry args={[data.unit, data.unit]}/>
                <meshBasicMaterial
                    opacity={1}
                    transparent
                    wireframe
                />
            </mesh>
            {/* RayLine */}
            <line ref={refs.rayLine} visible={showHelpers}>
                <bufferGeometry/>
                <lineBasicMaterial color="red"/>
            </line>
        </>
    );
}