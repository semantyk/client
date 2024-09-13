/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `ParticlesModel`
 * client | Semantyk
 *
 * This file contains the logic for the Particles model.
 *
 * Created: Sep 12, 2024
 * Modified: Sep 12, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React, { useEffect, useRef } from "react";
import { Color, TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
//* Local Imports
import {
    animateAndInterpolateParticles,
    getParticles,
    props,
    updateParticleGeometry
} from "./logic";
import useColorScheme from "@semantyk/frontend/hooks/useColorScheme";

// Main
export default function ParticlesModel() {
    // Props
    const { animation, entropy, particle, path } = props;
    // Hooks
    const { colorScheme } = useColorScheme();
    const { image } = useLoader(TextureLoader, path);
    const particlesRef = useRef();
    const startTimeRef = useRef(null);
    // Logic
    const color = (colorScheme === "light") ? 0 : 1;
    particle.color = new Color(color, color, color);
    // useEffect
    useEffect(() => {
        if (!image) return;

        const { count, offsets, ideal } = getParticles(image, particle.density);
        const randomPositions = new Float32Array(count * 2);

        for (let i = 0; i < count * 2; i += 2) {
            randomPositions[i] = (Math.random() - 0.5) * window.innerWidth * 4;
            randomPositions[i + 1] = (Math.random() - 0.5) * window.innerHeight * 4;
        }

        if (particlesRef.current) {
            updateParticleGeometry(particlesRef.current, randomPositions);
        }

        particlesRef.current.data = { ideal, offsets, count, randomPositions };
        startTimeRef.current = performance.now();
    }, [image, particle]);
    // useFrame
    useFrame(({ clock }) => {
        if (!particlesRef.current) return;
        animateAndInterpolateParticles(clock, particlesRef.current, entropy, animation.scatterDuration);
    });
    // Return
    return (
        <points ref={particlesRef} {...particle}>
            <bufferGeometry/>
            <pointsMaterial {...particle} />
        </points>
    );
}