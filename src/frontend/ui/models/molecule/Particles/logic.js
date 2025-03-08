/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `logic.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Jul 17, 2024
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
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
        showHelpers: false,
        scale: 1,
        size: 150,
    },
    // Camera
    camera: {
        margin: 1 / 3,
        makeDefault: true
    },
    // Animations
    animations: {
        chaos: {
            magnitude: 0.25,
            radius: 0.10
        },
        order: {
            magnitude: 0.25
        },
        expansion: {
            magnitude: 1,
        },
        flotation: {
            magnitude: 1,
            speed: 1
        },
        interpolation: {
            duration: 5
        }
    },
    // Image
    image: {
        path: "/favicon.png"
    },
    // Particles
    particle: {
        density: 1,
        size: 0.75
    }
};

export function getImageData(args) {
    // Args
    const { data: { unit }, objects: { image } } = args;
    // Logic
    let { width, height } = image;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = unit;
    canvas.height = (height / width) * unit;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    // Return
    return context.getImageData(0, 0, canvas.width, canvas.height);
}

export function ease(time, duration) {
    const t = Math.min(time / duration, 1);
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function addEventListeners(args) {
    // Args
    const { handleMouseMove, handleResize } = args;
    // Listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("resize", handleResize);
}

export function removeEventListeners(args) {
    // Args
    const { handleMouseMove, handleResize } = args;
    // Listeners
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("touchmove", handleMouseMove);
    window.removeEventListener("resize", handleResize);
}

export function setupObjects(args) {
    // Setup
    // - camera
    setupObject("camera", args);
    // - plane
    setupObject("plane", args);
    // - object
    setupObject("particles", args);
    // - raycaster
    setupObject("raycaster", args);
}

export function updateObjects(args) {
    updateObject("particles", args);
}

export function updateOnMouseMove(args) {
    // Logic
    const target = new Vector3();
    updateObject("camera", args);
    updateObject("raycaster", args);
    updateObject("mouse", args);
    updateObject("circle", { target, ...args });
    updateObject("line", { target, ...args });
}