/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `logic.js`
 * client | Semantyk
 *
 * Created: Jul 17, 2024
 * Modified: Jul 17, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

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
    path: "/favicon.png"
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