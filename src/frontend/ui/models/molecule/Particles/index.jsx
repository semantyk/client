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
    animateParticles,
    getParticles,
    props,
    updateParticles
} from "./logic";
import useColorScheme from "@semantyk/frontend/hooks/useColorScheme";

// Main
export default function ParticlesModel() {
    // Props
    const { particle, path } = props;
    // Hooks
    const { colorScheme } = useColorScheme();
    const { image } = useLoader(TextureLoader, path);
    const particlesRef = useRef();
    // Logic
    const color = (colorScheme === "light") ? 0 : 1;
    particle.color = new Color(color, color, color);
    // useEffect
    useEffect(() => {
        if (!image) return;

        const { count, offsets, ideal } = getParticles(image, particle.density);
        const initialPositions = new Float32Array(count * 2);
        const initialEntropy = 5;

        for (let i = 0; i < count * 2; i += 2) {
            initialPositions[i] = (Math.random() - 0.5) * window.innerWidth * initialEntropy;
            initialPositions[i + 1] = (Math.random() - 0.5) * window.innerHeight * initialEntropy;
        }

        if (particlesRef.current) {
            updateParticles(particlesRef.current, initialPositions);
        }

        particlesRef.current.data = { ideal, offsets, count, initialPositions };
    }, [image, particle]);
    // useFrame
    useFrame(({ clock }) => {
        if (!particlesRef.current) return;
        animateParticles(clock, particlesRef.current);
    });
    // Return
    return (
        <points ref={particlesRef} {...particle}>
            <bufferGeometry/>
            <pointsMaterial {...particle} />
        </points>
    );
}