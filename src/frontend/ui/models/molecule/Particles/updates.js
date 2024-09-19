/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `updates.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Sep 17, 2024
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { BufferGeometry, Color, Vector2, Vector3 } from "three";
import {
    addEffect
} from "@semantyk/frontend/ui/models/molecule/Particles/effects";
import { onMouseMove } from "@semantyk/frontend/logic/services/callbacks";
//* ----------------------------------------------------------------------------
// Particle Updates
// - particle.chaos
import { props } from "@semantyk/frontend/ui/models/molecule/Particles/logic";

//* Main
//* ----------------------------------------------------------------------------
// Update Factories
// - particles
export function updateObject(type, args) {
    // Logic
    // - declare options
    const options = {
        circle: updateCircle,
        line: updateLine,
        mouse: updateMouse,
        particles: updateParticles,
        raycaster: updateRaycaster,
    };
    // - select option
    let option = options[type];
    // Update
    if (option)
        option(args);
}

// - attribute
export function updateAttribute(type, args) {
    // Logic
    // - declare options
    const options = {
        chaos: updateChaos,
        color: updateColor,
        position: updatePosition
    };
    // - select option
    let option = options[type];
    // Update
    if (option)
        option(args);
}

//* ----------------------------------------------------------------------------
// Object Updates
// - circle
export function updateCircle({ objects, refs, target }) {
    // Logic
    objects.raycaster.ray.intersectPlane(refs.plane.current, target);
    refs.circle.current.position.copy(target);
}

// - particles
export const updateLine = ({ objects, refs, target }) => {
    // Logic
    const { origin } = objects.raycaster.ray;
    const points = [origin, target];
    const geometry = new BufferGeometry().setFromPoints(points);
    refs.rayLine.current.geometry.dispose();
    // Update
    refs.rayLine.current.geometry = geometry;
};

// - mouse
export const updateMouse = ({ refs, events }) => {
    const { x, y } = onMouseMove(events.mousemove);
    refs.mouse.current.x = x * 2 - 1;
    refs.mouse.current.y = -y * 2 + 1;
};

// - particles
export const updateParticles = ({
                                    objects,
                                    refs: { mouse, particles },
                                    ...args
                                }) => {
    // Props
    let { clock } = objects;
    const { interpolation } = props.animations;
    // Logic
    const object = particles.current;
    const time = clock.current.getElapsedTime();
    const intersects = objects.raycaster.intersectObject(object);
    const idxs = new Set(intersects.map(({ index }) => index));
    const colors = object.geometry.attributes.color.array;
    const positions = object.geometry.attributes.position.array;
    // Update
    // - each particle
    for (let i = 0; i < object.data.count; i++) {
        if (time >= interpolation.duration) {
            updateAttribute("chaos", {
                i,
                idxs,
                mouse,
                particles: object,
                ...args
            });
            // updateAttribute("color", { i, colors, particles: object, ...args });
        }
        updateAttribute("position", {
            i,
            idxs,
            object,
            positions,
            particles,
            time,
            ...args
        });
    }
    // - all particles
    object.geometry.attributes.color.needsUpdate = true;
    object.geometry.attributes.position.needsUpdate = true;
};

// - raycaster
export function updateRaycaster({ objects, refs }) {
    // Args
    const { raycaster } = objects;
    const camera = refs.camera.current;
    const mouse = refs.mouse.current;
    const coords = new Vector2(mouse.x, mouse.y);
    raycaster.setFromCamera(coords, camera);
}

const updateChaos = ({ data, i, idxs, mouse, particles }) => {
    // Props
    const { unit } = data;
    const { animations: { chaos, order } } = props;
    // Logic
    let magnitude;
    let currentChaos = particles.data.chaotic[i];
    if (idxs.has(i) && mouse.current.isMoving) {
        currentChaos += chaos.magnitude;
        magnitude = Math.min(currentChaos, 1);
    } else {
        // magnitude over time
        currentChaos -= order.magnitude / unit;
        magnitude = Math.max(currentChaos, 0);
    }
    particles.data.chaotic[i] = magnitude;
};

// - particle.color
const updateColor = ({ i, colors, particles, ...args }) => {
    // Logic
    let final = new Color();
    // Effects
    addEffect("color", { colors, particles, i, final, ...args });
    // Update
    colors.set(final.toArray(), i * 3);
};

// - particle.position
function updatePosition({ object, positions, i, ...args }) {
    // Logic
    let final = new Vector3();
    // Effects
    addEffect("position", { positions, object, i, final, ...args });
    // Update
    positions.set(final.toArray(), i * 3);
}