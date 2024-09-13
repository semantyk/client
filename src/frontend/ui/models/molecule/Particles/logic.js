/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `logic.js`
 * client | Semantyk
 *
 * Created: Jul 17, 2024
 * Modified: Sep 12, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { BufferAttribute } from "three";

//* Main
// props
export const props = {
    entropy: {
        distance: 20,
        speed: 1
    },
    particle: {
        density: 15,
        opacity: 1,
        position: [0, 0, 0],
        scale: [0.05, 0.05, 0.05],
        size: 0.5,
    },
    path: "/favicon.png",
    animation: {
        scatterDuration: 5
    }
};

// getImageData
export function getImageData(image) {
    const { width, height } = image;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, width, height);
}

// getParticles
// src/frontend/ui/models/molecule/Particles/logic.js
export function getParticles(image, density) {
    const { data } = getImageData(image);
    const particles = { count: 0, offsets: [], ideal: [] };

    for (let y = 0; y < image.height; y += density) {
        for (let x = 0; x < image.width; x += density) {
            const alpha = data[(x + y * image.width) * 4 + 3];
            if (alpha > 128) {
                const vx = x - image.width / 2;
                const vy = -y + image.height / 2;
                particles.ideal.push(vx, vy);
                particles.offsets.push({
                    x: Math.random() * Math.PI * 2,
                    y: Math.random() * Math.PI * 2
                });
                particles.count++;
            }
        }
    }
    return particles;
}

export function animateAndInterpolateParticles(clock, particles, entropy, animationDuration) {
    const elapsedTime = clock.getElapsedTime();
    const t = Math.min(elapsedTime / animationDuration, 1);
    const easedT = easeInOutCubic(t);

    const { count, ideal, randomPositions, offsets } = particles.data;
    const newPositions = particles.geometry.attributes.position.array;

    for (let i = 0; i < count * 2; i += 2) {
        const x = randomPositions[i] * (1 - easedT) + ideal[i] * easedT;
        const y = randomPositions[i + 1] * (1 - easedT) + ideal[i + 1] * easedT;
        newPositions[i] = x + Math.sin(elapsedTime * entropy.speed + offsets[i / 2].x) * entropy.distance * easedT;
        newPositions[i + 1] = y + Math.cos(elapsedTime * entropy.speed + offsets[i / 2].y) * entropy.distance * easedT;
    }
    particles.geometry.attributes.position.needsUpdate = true;
}

export function updateParticleGeometry(particles, idealPositions) {
    const value = new BufferAttribute(new Float32Array(idealPositions), 2);
    particles.geometry.setAttribute("position", value);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}