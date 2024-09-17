/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `updates.js`
 * client | Semantyk
 *
 * Created: Sep 17, 2024
 * Modified: Sep 17, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { BufferGeometry, Color, Vector2, Vector3 } from "three";
import {
    addEffect
} from "@semantyk/frontend/ui/models/molecule/Particles/effects";
import { onMouseMove } from "@semantyk/frontend/logic/services/callbacks";
import { props } from "@semantyk/frontend/ui/models/molecule/Particles/logic";

//* Main
export function updateObject(type, object, args) {
    switch (type) {
        case "circle":
            return updateCircle(object, args);
        case "line":
            return updateLine(object, args);
        case "mouse":
            return updateMouse(object, args);
        case "particles":
            return updateParticles(object, args);
        case "raycaster":
            return updateRaycaster(object, args);
        default:
            return;
    }
}

// - circle
export const updateCircle = (circle, args) => {
    const { plane, raycaster, target } = args;
    raycaster.ray.intersectPlane(plane, target);
    circle.position.copy(target);
};

// - line
export const updateLine = (line, args) => {
    const { raycaster, target } = args;
    const { origin } = raycaster.ray;
    const points = [origin, target];
    const geometry = new BufferGeometry().setFromPoints(points);
    line.geometry.dispose();
    line.geometry = geometry;
};

// - mouse
export const updateMouse = (mouse, args) => {
    const { event } = args;
    const { x, y } = onMouseMove(event);
    mouse.x = x * 2 - 1;
    mouse.y = -y * 2 + 1;
};

// - particles
export const updateParticles = (particles, args) => {
    const { unit, clock, raycaster } = args;
    // Logic
    let intersects = raycaster.intersectObject(particles);
    const idxs = new Set(intersects.map(({ index }) => index));
    // Update
    // - each particle
    for (let i = 0; i < particles.data.count; i++) {
        updateChaos(particles, { i, idxs });
        // updateColor(particles, { i });
        updatePosition(particles, { i, clock, unit });
    }
    // - all particles
    particles.geometry.attributes.color.needsUpdate = true;
    particles.geometry.attributes.position.needsUpdate = true;
};

// - raycaster
export function updateRaycaster(raycaster, args) {
    const { camera, mouse } = args;
    const coords = new Vector2(mouse.x, mouse.y);
    raycaster.setFromCamera(coords, camera);
}

//* ----------------------------------------------------------------------------

// - particle.chaos
function updateChaos(particles, args) {
    const { i, idxs } = args;
    // Props
    const { chaos, order } = props.animations;
    let currentChaotic = particles.data.chaotic[i];
    // Logic
    if (idxs.has(i)) {
        currentChaotic += chaos.speed;
        particles.data.chaotic[i] = Math.min(chaos.magnitude, currentChaotic);
    } else {
        currentChaotic -= order.speed;
        particles.data.chaotic[i] = Math.max(0, currentChaotic);
    }
}

// - particle.color
const updateColor = (particles, args) => {
    // Args
    const { i } = args;
    // Props
    const { color } = particles.data;
    const colors = particles.geometry.attributes.color.array;
    // Logic
    const chaoticValue = particles.data.chaotic[i];
    const target = new Color(1, 0, 0);
    const final = color.clone();
    // Transform
    final.lerp(target, chaoticValue);
    // Update
    colors.set(final.toArray(), i * 3);
};

// - particle.position
function updatePosition(particles, args) {
    const { i, clock, unit } = args;
    // Logic
    let finalV3 = new Vector3();
    const positions = particles.geometry.attributes.position.array;
    const time = clock.getElapsedTime();
    // Effects
    // - interpolation
    addEffect("interpolation", { particles, i, final: finalV3, time });
    addEffect("chaos", { particles, i, finalV3, time, unit });
    addEffect("flotation", { particles, i, final: finalV3, time, unit });
    // Update
    positions.set(finalV3.toArray(), i * 3);
}