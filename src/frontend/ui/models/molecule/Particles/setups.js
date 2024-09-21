/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `setups.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Sep 17, 2024
 * @modified: Sep 21,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import {
    getImageData,
    props
} from "@semantyk/frontend/ui/models/molecule/Particles/logic";
// - plane
import { Float32BufferAttribute, Plane, Vector3 } from "three";

//* Main
export function setupObject(type, args) {
    switch (type) {
        case "camera":
            setupCamera(args);
        case "particles":
            setupParticles(args);
        case "plane":
            setupPlane(args);
        case "raycaster":
            setupRaycaster(args);
        default:
            return;
    }
}

export function setupCamera(args) {
    // Args
    const { data: { unit }, refs: { camera } } = args;
    let { camera: { margin } } = props;
    // Logic
    // - camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    let x = (1 + margin) / ((aspectRatio >= 1) ? 2 : (2 * aspectRatio));
    const fx = 2 * Math.atan(x) * (180 / Math.PI);
    camera.current.fov = fx;
    camera.current.aspect = aspectRatio;
    camera.current.position.z = unit / 2;
    camera.current.updateProjectionMatrix();
}

// - object
export function setupParticles(args) {
    // Args
    const { data: { color, unit }, objects: { image }, refs } = args;
    const { particle } = props;
    const particles = refs.particles.current;
    const { data } = getImageData(args);
    particles.data = {
        label: "particles",
        count: 0,
        chaotic: [],
        color,
        colors: [],
        positions: { ideal: [], initial: [], offsets: [] },
    };

    const dimensions = {
        x: unit,
        y: (image.height / image.width) * unit,
        z: unit
    };
    for (let y = 0; y < dimensions.y; y += particle.density) {
        for (let x = 0; x < dimensions.x; x += particle.density) {
            const alpha = data[(x + y * dimensions.x) * 4 + 3];
            if (alpha > 128) {
                particles.data.chaotic.push(0);
                particles.data.colors.push(color.r, color.g, color.b);
                particles.data.positions.ideal.push(
                    x - dimensions.x / 2,
                    -y + dimensions.y / 2,
                    -dimensions.z / 2);
                particles.data.positions.initial.push(
                    (Math.random() - 0.5) * unit * 2,
                    (Math.random() - 0.5) * unit * 2,
                    (Math.random() - 0.5) * unit * 2
                );
                particles.data.positions.offsets.push(
                    Math.random() * Math.PI * 2,
                    Math.random() * Math.PI * 2,
                    Math.random() * Math.PI * 2,
                );
                particles.data.count++;
            }
        }
    }
    // - color
    const colorsArray = particles.data.colors;
    const colorsValue = new Float32BufferAttribute(colorsArray, 3);
    particles.geometry.setAttribute("color", colorsValue);
    // - position
    const positionsArray = particles.data.positions.ideal;
    const positionsValue = new Float32BufferAttribute(positionsArray, 3);
    particles.geometry.setAttribute("position", positionsValue);
    // - size
    const ratio = window.innerWidth / window.innerHeight;
    const size = Math.min(Math.max(particle.size * ratio, 0), particle.size);
    particles.material.size = size;
}

// - plane
export function setupPlane(args) {
    // Args
    const { data: { unit }, refs: { plane } } = args;
    const normal = new Vector3(0, 0, 1);
    plane.current = new Plane(normal, unit / 2);
}

// - raycaster
export function setupRaycaster(args) {
    // Args
    const { data: { unit }, objects: { raycaster } } = args;
    // Props
    const { animations: { chaos: { radius } } } = props;
    // Logic
    raycaster.params.Points.threshold = radius * unit;
}