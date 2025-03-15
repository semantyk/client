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
import { ParticlesManager } from "./manager";

//* Main
export function setup(args) {
    ParticlesManager.setup('camera', args);
    ParticlesManager.setup('particles', args);
    ParticlesManager.setup('plane', args);
    ParticlesManager.setup('raycaster', args);
}

export function update(args) {
    ParticlesManager.update("particles", args);
}

export function updateOnMouseMove(args) {
    const target = new Vector3()
    ParticlesManager.update("circle", { target, ...args });
    ParticlesManager.update("rayLine", { target, ...args });
    ParticlesManager.update("mouse", args);
    ParticlesManager.update("raycaster", args);
}