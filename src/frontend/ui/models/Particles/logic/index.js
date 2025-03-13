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
import { UpdateManager } from "./updates/manager";
import { SetupManager } from "./setups/manager";

//* Main
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

export function setupObjects(args) {
    SetupManager.setupObject("camera", args);
    SetupManager.setupObject("plane", args);
    SetupManager.setupObject("particles", args);
    SetupManager.setupObject("raycaster", args);
}

export function updateObjects(args) {
    UpdateManager.updateObject("particles", args);
}

export function updateOnMouseMove(args) {
    const target = new Vector3();
    UpdateManager.updateObject("camera", args);
    UpdateManager.updateObject("raycaster", args);
    UpdateManager.updateObject("mouse", args);
    UpdateManager.updateObject("circle", { target, ...args });
    UpdateManager.updateObject("line", { target, ...args });
}