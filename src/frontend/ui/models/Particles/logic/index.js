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
import { ParticlesModelManager } from "./manager";

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
    ParticlesModelManager.execute('setupObject', "camera", args);
    ParticlesModelManager.execute('setupObject', "plane", args);
    ParticlesModelManager.execute('setupObject', "particles", args);
    ParticlesModelManager.execute('setupObject', "raycaster", args);
}

export function updateObjects(args) {
    ParticlesModelManager.execute('updateObject', "particles", args);
}

export function updateOnMouseMove(args) {
    const target = new Vector3();
    ParticlesModelManager.execute('updateObject', "camera", args);
    ParticlesModelManager.execute('updateObject', "raycaster", args);
    ParticlesModelManager.execute('updateObject', "mouse", args);
    ParticlesModelManager.execute('updateObject', "circle", { target, ...args });
    ParticlesModelManager.execute('updateObject', "line", { target, ...args });
}