import React, { useEffect, useRef } from "react";
import { BufferAttribute, Color, TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { getParticles, props } from "./logic";
import useColorScheme from "@semantyk/frontend/hooks/useColorScheme";

export default function ParticlesModel() {
    // Props
    const { entropy, particle, path } = props;
    // Hooks
    const { colorScheme } = useColorScheme();
    const { image } = useLoader(TextureLoader, path);
    const particles = useRef();
    // Logic
    particle.color = (colorScheme === "light") ? (new Color(0, 0, 0)) : (new Color(1, 1, 1));
    // useEffect
    useEffect(() => {
        if (!image) return;

        const { count, offsets, ideal } = getParticles(image, particle.density);
        if (particles.current) {
            const key = "position";
            const value = new BufferAttribute(new Float32Array(ideal), 2);
            particles.current.geometry.setAttribute(key, value);
        }

        particles.current.data = { ideal, offsets, count };
    }, [image]);

    // useFrame
    useFrame(({ clock }) => {
        if (!particles.current) return;
        const time = clock.getElapsedTime() * entropy.speed;
        const newPositions = particles.current.geometry.attributes.position.array;
        const { count, ideal, offsets } = particles.current.data;

        for (let i = 0; i < count; i++) {
            const index = i * 2;
            newPositions[index] = ideal[index] +
                Math.sin(time + offsets[i].x) * entropy.distance;
            newPositions[index + 1] = ideal[index + 1] +
                Math.cos(time + offsets[i].y) * entropy.distance;
        }
        particles.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={particles} {...particle}>
            <bufferGeometry/>
            <pointsMaterial {...particle} />
        </points>
    );
}