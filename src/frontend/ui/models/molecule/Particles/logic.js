/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `logic.js`
 * client | Semantyk
 *
 * Created: Jul 17, 2024
 * Modified: Sep 17, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { Vector3 } from "three";
//* Local Imports
import {
    updateObject
} from "@semantyk/frontend/ui/models/molecule/Particles/updates";
import {
    setupObject
} from "@semantyk/frontend/ui/models/molecule/Particles/setups";

//* Main
// props
export const props = {
    // General
    general: {
        scale: 1,
        size: 150,
    },
    // Camera
    camera: {
        makeDefault: true
    },
    // Animations
    animations: {
        chaos: {
            magnitude: 1,
            radius: 0.1,
            speed: 1
        },
        order: {
            magnitude: 1,
            speed: 0.01
        },
        flotation: {
            magnitude: 0.01,
            speed: 0.005
        },
        interpolation: {
            duration: 8
        }
    },
    // Image
    image: {
        path: "/favicon.png"
    },
    // Particles
    particle: {
        density: 1,
        size: 1,
    }
};

export function getImageData(unit, image) {
    let { width, height } = image;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = unit;
    canvas.height = (height / width) * unit;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return context.getImageData(0, 0, canvas.width, canvas.height);
}

export function ease(time, duration) {
    const t = Math.min(time / duration, 1);
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function addEventListeners(args) {
    // Args
    const { handleMouseMove } = args;
    // Listeners
    window.addEventListener("mousemove", handleMouseMove);
}

export function removeEventListeners(args) {
    // Args
    const { handleMouseMove } = args;
    // Listeners
    window.removeEventListener("mousemove", handleMouseMove);
}

export function setupObjects(args) {
    // Args
    const {
        data: { color, unit },
        refs: { particles, plane },
        objects: { raycaster },
        loaders: { image },
    } = args;
    // Setup
    // - plane
    setupObject("plane", plane, { unit });
    // - particles
    setupObject("particles", particles.current, {
        color,
        image,
        unit
    });
    // - raycaster
    setupObject("raycaster", raycaster, { unit });
}

export function updateObjects(args) {
    // Args
    const {
        data: { unit },
        objects: { clock, raycaster },
        refs: { particles }
    } = args;
    // - particles
    updateObject("particles", particles.current, {
        clock,
        raycaster,
        unit
    });
}

export function updateOnMouseMove(args) {
    // Args
    const { events, objects, refs } = args;
    // Logic
    const target = new Vector3();
    updateObject("circle", refs.circle.current, {
        plane: refs.plane.current,
        raycaster: objects.raycaster,
        target
    });
    updateObject("mouse", refs.mouse.current, { event: events.mousemove });
    updateObject("raycaster", objects.raycaster, {
        camera: refs.camera.current,
        mouse: refs.mouse.current
    });
    updateObject("line", refs.rayLine.current, {
        raycaster: objects.raycaster,
        target
    });
}